/**
 * Purpose: Fetch YouTube transcripts via yt-dlp (robust against YouTube API churn).
 * Dependencies: yt-dlp on PATH. Install: `brew install yt-dlp`.
 *
 * Usage:
 *   npx tsx fetch-youtube.ts <sources_file> <output_dir>
 *   npx tsx fetch-youtube.ts ../personas/elon-musk/sources/youtube.txt ../personas/elon-musk/content/youtube/
 *
 * Sources file format:
 *   One video ID per line, # for comments, blank lines ignored.
 *
 * Output:
 *   <output_dir>/<video_id>.md with YAML frontmatter (source, title, video_id,
 *   fetched date) and plain-text transcript. Matches the canonical schema in
 *   DOJO-PERSONA-PROCESS.md so tools/generate-manifest.py can harvest URLs.
 */

import { execFileSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

function parseSourcesFile(filePath: string): string[] {
  return fs
    .readFileSync(filePath, "utf-8")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
}

function getVideoTitle(videoId: string): string {
  try {
    const out = execFileSync(
      "yt-dlp",
      ["--get-title", "--no-warnings", `https://www.youtube.com/watch?v=${videoId}`],
      { encoding: "utf-8", stdio: ["ignore", "pipe", "ignore"] }
    );
    return out.trim() || "Unknown Title";
  } catch {
    return "Unknown Title";
  }
}

function downloadAutoSubs(videoId: string, outputDir: string): string | null {
  const outBase = path.join(outputDir, videoId);
  try {
    execFileSync(
      "yt-dlp",
      [
        "--write-auto-sub",
        "--sub-format", "vtt",
        "--skip-download",
        "--sub-lang", "en",
        "-o", outBase,
        `https://www.youtube.com/watch?v=${videoId}`,
      ],
      { stdio: ["ignore", "ignore", "ignore"] }
    );
  } catch {
    return null;
  }
  const vttPath = `${outBase}.en.vtt`;
  return fs.existsSync(vttPath) ? vttPath : null;
}

function vttToPlainText(vttPath: string): string {
  const lines = fs.readFileSync(vttPath, "utf-8").split("\n");
  const out: string[] = [];
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith("WEBVTT")) continue;
    if (line.startsWith("Kind:") || line.startsWith("Language:")) continue;
    if (/^\d/.test(line)) continue; // cue index lines, timestamp lines (start with digits)
    if (line.includes("-->")) continue;
    // strip inline tags like <c>, <00:00:01.000>, </c>
    const stripped = line.replace(/<[^>]*>/g, "").trim();
    if (stripped) out.push(stripped);
  }
  // Dedupe consecutive repeats (auto-subs often repeat across rolling cues)
  const deduped: string[] = [];
  for (const line of out) {
    if (deduped.length === 0 || deduped[deduped.length - 1] !== line) {
      deduped.push(line);
    }
  }
  return deduped.join(" ").replace(/\s+/g, " ").trim();
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

function checkYtDlp(): void {
  try {
    execFileSync("yt-dlp", ["--version"], { stdio: ["ignore", "ignore", "ignore"] });
  } catch {
    console.error("Error: yt-dlp not found on PATH. Install with: brew install yt-dlp");
    process.exit(1);
  }
}

function main(): void {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log("Usage: npx tsx fetch-youtube.ts <sources_file> <output_dir>");
    process.exit(1);
  }
  const [sourcesFile, outputDir] = args;
  if (!fs.existsSync(sourcesFile)) {
    console.error(`Sources file not found: ${sourcesFile}`);
    process.exit(1);
  }

  checkYtDlp();
  fs.mkdirSync(outputDir, { recursive: true });

  const videoIds = parseSourcesFile(sourcesFile);
  console.log(`Found ${videoIds.length} video IDs in ${sourcesFile}\n`);

  const results: Array<{ id: string; title: string; success: boolean }> = [];

  for (const videoId of videoIds) {
    const title = getVideoTitle(videoId);
    console.log(`Processing: ${videoId} - ${title}`);

    const vttPath = downloadAutoSubs(videoId, outputDir);
    if (!vttPath) {
      console.log(`  Failed: no transcript available`);
      results.push({ id: videoId, title, success: false });
      continue;
    }

    const text = vttToPlainText(vttPath);
    fs.unlinkSync(vttPath);

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

${formatTranscript(text)}
`;
    const mdPath = path.join(outputDir, `${videoId}.md`);
    fs.writeFileSync(mdPath, md);
    console.log(`  Saved: ${videoId}.md`);
    results.push({ id: videoId, title, success: true });
  }

  const success = results.filter((r) => r.success).length;
  console.log(`\n--- Summary ---\nSuccess: ${success}/${videoIds.length}`);
  const failed = results.filter((r) => !r.success);
  if (failed.length > 0) {
    console.log("\nFailed videos:");
    failed.forEach((r) => console.log(`  - ${r.id}: ${r.title}`));
  }
}

main();
