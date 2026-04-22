# Shared Content Acquisition Scripts

Generic tools for downloading source material. Each persona has their own `sources/` folder with URLs/IDs.

## Setup

```bash
cd scripts
npm install
```

Create `.env` file:
```
FIRECRAWL_API_KEY=your_firecrawl_key
OPENAI_API_KEY=your_openai_key  # For podcast transcription
```

Also ensure system tools are installed:
```bash
brew install yt-dlp ffmpeg
```

## Scripts

### 1. YouTube Transcripts (yt-dlp-backed)

```bash
npx tsx fetch-youtube.ts ../elena-verna/sources/youtube.txt ../elena-verna/content/youtube/
```

Requires `yt-dlp` on PATH (`brew install yt-dlp`). Shells out to yt-dlp for title + auto-generated captions, then parses VTT to plain text. Previously tried `youtube-transcript` npm package — it breaks whenever YouTube changes internal endpoints. yt-dlp is actively maintained and much more robust.

### 1b. YouTube Transcripts — Playwright fallback

```bash
npx tsx fetch-youtube-playwright.ts ../lulu-cheng/sources/youtube.txt ../lulu-cheng/content/youtube/
```

Fallback for when yt-dlp gets rate-limited (429) or blocked. Opens headless Chromium, loads each video, clicks "Show transcript", and scrapes the transcript panel. Same CLI and output format as `fetch-youtube.ts` — pick whichever works.

First-time setup: `npm install && npx playwright install chromium`.

### 2. Articles (Firecrawl)

```bash
npx tsx fetch-articles.ts ../elena-verna/sources/articles.txt ../elena-verna/content/articles/
```

### 3. Podcast Transcription (OpenAI Whisper)

```bash
python apple-podcast-transcript.py "https://podcasts.apple.com/..." ../elena-verna/content/podcasts/
```

### 4. Generic Audio Transcription (SoundCloud, podcasts, any URL)

```bash
# SoundCloud
python transcribe-audio.py "https://soundcloud.com/factordaily/ep-06-naval-ravikant" ./content/podcasts/

# Direct audio URL
python transcribe-audio.py "https://example.com/podcast.mp3" ./content/podcasts/

# With custom title
python transcribe-audio.py "https://unchainedpodcast.co/episode.mp3" ./output/ --title "Naval on Crypto"
```

Uses yt-dlp (supports SoundCloud, many podcast sites) + OpenAI Whisper.

### 5. SRT to Markdown

```bash
python srt-to-markdown.py ../elena-verna/content/youtube/  # Converts all .srt files
```

### 6. EPUB to Markdown

```bash
python epub-to-markdown.py /path/to/extracted/epub output.md
```

## Source File Format

Each persona has a `sources/` folder with simple text files:

**youtube.txt** - One video ID per line:
```
bxghtN-OlJQ
UTmFuSZfJ9U
# Comments start with #
```

**articles.txt** - One URL per line:
```
https://www.elenaverna.com/p/revenue-addiction-kills-companies
https://www.elenaverna.com/p/the-product-market-fit-treadmill
```

**podcasts.txt** - Apple Podcast URLs:
```
https://podcasts.apple.com/us/podcast/example/id123?i=456
```

## Output

Every fetcher writes to the specified directory using the **canonical YAML-frontmatter schema** so `tools/generate-manifest.py` can harvest URLs automatically on re-run. Do not deviate from this schema when adding a new fetcher — the whole public-export pipeline depends on it.

```markdown
---
source: <URL or filename>    # URL for web-fetched; filename for books/offline
title: <Title>
video_id: <id>               # YouTube only
fetched: <YYYY-MM-DD>
---

# <Title>

<body>
```

Per-fetcher output locations and filenames:

- **YouTube** (`fetch-youtube.ts`, `fetch-youtube-playwright.ts`) → `{video_id}.md`. `source:` is `https://www.youtube.com/watch?v=<id>`.
- **Articles** (`fetch-articles.ts`) → `{slug}.md`. `source:` is the original article URL.
- **Apple Podcasts** (`apple-podcast-transcript.py`) → `{safe-title}.md`. `source:` is the Apple Podcasts episode URL.
- **Generic audio** (`transcribe-audio.py`) → `{safe-title}.md`. `source:` is the audio URL passed on the CLI.
- **Books** (`epub-to-markdown.py`) → `{name}.md`. `source:` is the original filename; no URL.

**If you add a new fetcher:** write the same frontmatter. The parser in `tools/generate-manifest.py` reads `source:` from every file. Body-marker fallbacks (`**URL:**`, `**Video:**`) are preserved only for legacy files fetched before this schema existed.
