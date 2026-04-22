/**
 * Purpose: Fetch YouTube transcripts via Playwright UI scraping.
 *          Fallback for when yt-dlp is rate-limited (429) or blocked.
 * Dependencies: playwright. Install: `npm install playwright && npx playwright install chromium`.
 *
 * Usage:
 *   npx tsx fetch-youtube-playwright.ts <sources_file> <output_dir>
 *   npx tsx fetch-youtube-playwright.ts ../personas/lulu-cheng/sources/youtube.txt ../personas/lulu-cheng/content/youtube/
 *
 * Sources file format:
 *   One video ID per line, # for comments, blank lines ignored.
 *
 * Output:
 *   <output_dir>/<video_id>.md with YAML frontmatter (source, title, video_id,
 *   fetched date). Matches fetch-youtube.ts and the canonical schema in
 *   DOJO-PERSONA-PROCESS.md — tools/generate-manifest.py harvests URLs from it.
 */

import { chromium, Page } from "playwright";
import * as fs from "fs";
import * as path from "path";

function parseSourcesFile(filePath: string): string[] {
  return fs
    .readFileSync(filePath, "utf-8")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
}

async function getTranscript(page: Page, videoId: string): Promise<{ title: string; transcript: string }> {
  const url = `https://www.youtube.com/watch?v=${videoId}`;
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(4000);

  const title =
    (await page
      .locator("h1.ytd-watch-metadata yt-formatted-string, #title h1")
      .first()
      .textContent()
      .catch(() => null)) || "Unknown Title";

  await page.evaluate(() => window.scrollBy(0, 300));
  await page.waitForTimeout(1000);

  await page.locator("#expand").click().catch(() => null);
  await page.waitForTimeout(1500);

  await page.locator('button:has-text("Show transcript")').first().click();
  await page.waitForTimeout(3000);

  await page.locator('button:has-text("Transcript")').first().click().catch(() => null);
  await page.waitForTimeout(2000);

  const panel = page.locator("ytd-transcript-renderer, #segments-container").first();
  for (let i = 0; i < 10; i++) {
    await panel.evaluate((el: Element) => (el.scrollTop += 500)).catch(() => null);
    await page.waitForTimeout(300);
  }
  await panel.evaluate((el: Element) => (el.scrollTop = 0)).catch(() => null);
  await page.waitForTimeout(500);

  const transcript = await page.evaluate(() => {
    const segments: string[] = [];
    const selectors = [
      "ytd-transcript-segment-renderer .segment-text",
      "yt-formatted-string.segment-text",
      "#segments-container yt-formatted-string",
      ".ytd-transcript-segment-renderer yt-formatted-string",
    ];
    for (const selector of selectors) {
      const elements = document.querySelectorAll(selector);
      if (elements.length > 0) {
        elements.forEach((el) => {
          const text = el.textContent?.trim();
          if (text && text.length > 0 && !text.match(/^\d+:\d+/)) {
            segments.push(text);
          }
        });
        if (segments.length > 0) break;
      }
    }
    if (segments.length === 0) {
      const transcriptArea = document.querySelector("ytd-transcript-renderer");
      if (transcriptArea) {
        const text = transcriptArea.textContent || "";
        const cleaned = text
          .replace(/\d+:\d+(:\d+)?/g, "")
          .replace(/Transcript|Search in video|Auto-scroll/gi, "")
          .replace(/\s+/g, " ")
          .trim();
        if (cleaned.length > 100) return cleaned;
      }
    }
    return segments.join(" ");
  });

  if (!transcript || transcript.length < 50) {
    throw new Error("Could not extract transcript from UI");
  }
  return { title: title.trim(), transcript };
}

function formatTranscript(text: string): string {
  const sentences = text.split(/(?<=[.!?])\s+/);
  const paragraphs: string[] = [];
  let current: string[] = [];
  for (let i = 0; i < sentences.length; i++) {
    current.push(sentences[i]);
    if (current.length >= 6 || i === sentences.length - 1) {
      paragraphs.push(current.join(" "));
      current = [];
    }
  }
  return paragraphs.join("\n\n");
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log("Usage: npx tsx fetch-youtube-playwright.ts <sources_file> <output_dir>");
    process.exit(1);
  }
  const [sourcesFile, outputDir] = args;
  if (!fs.existsSync(sourcesFile)) {
    console.error(`Sources file not found: ${sourcesFile}`);
    process.exit(1);
  }

  fs.mkdirSync(outputDir, { recursive: true });
  const videoIds = parseSourcesFile(sourcesFile);
  console.log(`Found ${videoIds.length} video IDs in ${sourcesFile}\n`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();

  const results: Array<{ id: string; title: string; success: boolean }> = [];

  for (const videoId of videoIds) {
    console.log(`Processing: ${videoId}`);
    try {
      const { title, transcript } = await getTranscript(page, videoId);
      const today = new Date().toISOString().slice(0, 10);
      const safeTitle = title.replace(/\n/g, " ").trim();
      const md = `---
source: https://www.youtube.com/watch?v=${videoId}
title: ${safeTitle}
video_id: ${videoId}
fetched: ${today}
---

# ${safeTitle}

## Transcript

${formatTranscript(transcript)}
`;
      const mdPath = path.join(outputDir, `${videoId}.md`);
      fs.writeFileSync(mdPath, md);
      console.log(`  Saved: ${videoId}.md - ${title}`);
      results.push({ id: videoId, title, success: true });
    } catch (e) {
      const error = e instanceof Error ? e.message : String(e);
      console.log(`  Failed: ${error}`);
      results.push({ id: videoId, title: "Unknown", success: false });
    }
    await page.waitForTimeout(5000);
  }

  await browser.close();

  const success = results.filter((r) => r.success).length;
  console.log(`\n--- Summary ---\nSuccess: ${success}/${videoIds.length}`);
  const failed = results.filter((r) => !r.success);
  if (failed.length > 0) {
    console.log("\nFailed videos:");
    failed.forEach((r) => console.log(`  - ${r.id}`));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
