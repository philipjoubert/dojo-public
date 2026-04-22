/**
 * Purpose: Fetch article content using Firecrawl API
 * Dependencies: Firecrawl API (https://docs.firecrawl.dev)
 *
 * Usage:
 *   npx tsx fetch-articles.ts <sources_file> <output_dir>
 *   npx tsx fetch-articles.ts ../elena-verna/sources/articles.txt ../elena-verna/content/articles/
 *
 * Sources file format:
 *   One URL per line, # for comments, blank lines ignored
 */

import { config } from "dotenv";
import * as fs from "fs";
import * as path from "path";

config();

const FIRECRAWL_API_KEY = process.env.FIRECRAWL_API_KEY;

interface FirecrawlResponse {
  success: boolean;
  data?: {
    markdown?: string;
    metadata?: {
      title?: string;
      description?: string;
    };
  };
  error?: string;
}

function parseSourcesFile(filePath: string): string[] {
  const content = fs.readFileSync(filePath, "utf-8");
  return content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
}

function urlToFilename(url: string, existingFiles: Set<string>): string {
  // Parse URL and extract meaningful path segments
  const urlObj = new URL(url);
  const pathSegments = urlObj.pathname
    .split("/")
    .filter((s) => s && s.length > 0);

  // Try to build a meaningful filename from the path
  let slug: string;

  if (pathSegments.length === 0) {
    // Just domain, use hostname
    slug = urlObj.hostname.replace(/\./g, "-");
  } else if (pathSegments.length === 1) {
    slug = pathSegments[0];
  } else {
    // Use last 2-3 meaningful segments for context
    // Skip common segments like "articles", "blog", "post"
    const skipWords = new Set(["articles", "blog", "post", "posts", "p", "article"]);
    const meaningful = pathSegments.filter((s) => !skipWords.has(s.toLowerCase()));

    if (meaningful.length >= 2) {
      slug = meaningful.slice(-2).join("-");
    } else if (meaningful.length === 1) {
      slug = meaningful[0];
    } else {
      // Fallback: use last two path segments
      slug = pathSegments.slice(-2).join("-");
    }
  }

  // Clean up the slug
  slug = slug
    .split("?")[0] // Remove query params
    .replace(/[^a-zA-Z0-9-_]/g, "-") // Replace special chars
    .replace(/-+/g, "-") // Collapse multiple dashes
    .replace(/^-|-$/g, ""); // Trim dashes

  if (!slug) {
    slug = "article";
  }

  // Handle duplicates by adding a counter
  let filename = `${slug}.md`;
  let counter = 1;
  while (existingFiles.has(filename)) {
    filename = `${slug}-${counter}.md`;
    counter++;
  }
  existingFiles.add(filename);

  return filename;
}

async function fetchArticle(url: string): Promise<{ content: string; title?: string } | null> {
  try {
    const response = await fetch("https://api.firecrawl.dev/v1/scrape", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${FIRECRAWL_API_KEY}`,
      },
      body: JSON.stringify({
        url,
        formats: ["markdown"],
      }),
    });

    const data: FirecrawlResponse = await response.json();

    if (data.success && data.data?.markdown) {
      return {
        content: data.data.markdown,
        title: data.data.metadata?.title,
      };
    } else {
      console.error(`  Failed: ${data.error || "Unknown error"}`);
      return null;
    }
  } catch (error) {
    console.error(`  Error: ${error instanceof Error ? error.message : error}`);
    return null;
  }
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log("Usage: npx tsx fetch-articles.ts <sources_file> <output_dir>");
    console.log("Example: npx tsx fetch-articles.ts ../elena-verna/sources/articles.txt ../elena-verna/content/articles/");
    process.exit(1);
  }

  if (!FIRECRAWL_API_KEY || FIRECRAWL_API_KEY === "your_firecrawl_api_key_here") {
    console.error("Error: FIRECRAWL_API_KEY not set in .env file");
    process.exit(1);
  }

  const [sourcesFile, outputDir] = args;

  if (!fs.existsSync(sourcesFile)) {
    console.error(`Sources file not found: ${sourcesFile}`);
    process.exit(1);
  }

  fs.mkdirSync(outputDir, { recursive: true });

  const urls = parseSourcesFile(sourcesFile);
  console.log(`Found ${urls.length} URLs in ${sourcesFile}\n`);

  let success = 0;
  let failed = 0;
  const existingFiles = new Set<string>();

  for (const url of urls) {
    const filename = urlToFilename(url, existingFiles);
    console.log(`Fetching: ${filename}`);

    const result = await fetchArticle(url);

    if (result) {
      const filepath = path.join(outputDir, filename);

      // YAML frontmatter — canonical schema per DOJO-PERSONA-PROCESS.md.
      // tools/generate-manifest.py harvests `source:` from here.
      const today = new Date().toISOString().slice(0, 10);
      const safeTitle = (result.title || "Unknown").replace(/\n/g, " ").trim();
      const content = `---
source: ${url}
title: ${safeTitle}
fetched: ${today}
---

${result.content}`;

      fs.writeFileSync(filepath, content);
      console.log(`  Saved: ${filepath}`);
      success++;
    } else {
      failed++;
    }

    // Be nice to the API
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  console.log("\n--- Summary ---");
  console.log(`Success: ${success}/${urls.length}`);
  if (failed > 0) {
    console.log(`Failed: ${failed}`);
  }
}

main().catch(console.error);
