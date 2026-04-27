# Dojo — Founder Mode for Your AI

**A panel of expert advisors, loaded into Claude or ChatGPT.**

[![Build your dojo at superdojo.xyz](assets/dojo-builder-screenshot.png)](https://superdojo.xyz/)

## Build your dojo

👉 **[superdojo.xyz](https://superdojo.xyz/)**

Pick the experts you want. Copy the generated `npx skills` command. Install them into Codex, Claude Code, Cursor, or another supported agent.

Then ask in plain language — *"ask dojo: how should I respond to this hit piece?"* — and the router picks the right expert(s).

It's a bit like Neo downloading kung fu — except the experts here are real people, and you pick them.

## Install with `npx skills`

The experts in this repo are discoverable by Vercel Labs' [`skills`](https://www.npmjs.com/package/skills) package as individual expert skills and as four domain packs.

List the available skills:

```bash
npx --yes skills add philipjoubert/dojo-public --list
```

Install one expert globally:

```bash
npx --yes skills add philipjoubert/dojo-public \
  --skill dojo-david-deutsch \
  --global \
  --copy
```

Install a domain pack:

```bash
npx --yes skills add philipjoubert/dojo-public \
  --skill dojo-thinking \
  --global \
  --copy
```

Install every Dojo pack:

```bash
npx --yes skills add philipjoubert/dojo-public \
  --skill '*' \
  --global \
  --copy
```

Add `--agent claude-code`, `--agent codex`, or another supported agent if you want to target a specific install location.

## What's in each persona

For each expert, the corpus — books, interviews, talks, articles — is processed into structured artifacts:

- **Core beliefs** — what this person thinks is true, and the antagonist they push against
- **Reasoning moves** — the mental patterns they run before reaching for any specific framework
- **Rules** — the things they will not recommend, each with the reason and the exception
- **Frameworks** — their mental models, as standalone files loaded only when relevant
- **Voice samples** — real prose from their own writing, so the model imitates rhythm and word choice
- **Example exchanges** — Q&A pairs across modes so the *shape* of their answers stays right

Not transcript search. The expert doesn't quote the source at you. They think in the source's frameworks, speak in the source's voice, and push back when you bring them a bad question.

Questions are classified by mode — pointed, coaching, review, drafting, emergency, strategic — and only the relevant framework files load. Pointed questions stay light. Strategic questions pull the heavy lenses.

## Available experts

39 experts across five domains. Browse and pick at [superdojo.xyz](https://superdojo.xyz/).

**Operators** — Andrew Carnegie · Andy Grove · Brian Chesky · Chris Voss · Danny Meyer · Elon Musk · Jason Lemkin · Jeff Bezos · Jensen Huang · Keith Rabois · Patrick Collison · Steve Jobs · Tobi Lütke · Wes Kao

**Investors** — Ben Horowitz · Marc Andreessen · Naval Ravikant · Paul Graham · Peter Thiel

**Marketing** — Al Ries · Andrew Chen · April Dunford · David Ogilvy · Elena Verna · Eugene Schwartz · Harry Dry · Lulu Cheng · Rob Fitzpatrick

**Thinking** — Annie Duke · Charlie Munger · Clayton Christensen · David Deutsch · Eliyahu Goldratt · Hamilton Helmer · Julia Galef · Nassim Taleb · Shane Parrish · Thomas Sowell

**Craft** — William Zinsser

Each one takes weeks of reading and structuring — the corpus for a single persona runs to hundreds of pages before any writing starts. Per-expert source corpora live under [`sources/<slug>/MANIFEST.md`](sources/).

## How to ask

Topical — the router picks:

- *"How should I respond to this hit piece?"* → Lulu (marketing)
- *"Should we write a PR-FAQ before building?"* → Bezos (operators)
- *"Help me think through whether to take this job."* → Shane (thinking)
- *"Critique this positioning."* → April (marketing)

Explicit:

- *"Ask Lulu about ..."*
- *"What would Bezos say about ..."*
- *"Ask Shane and Marc about ..."* — multi-expert; each answers in their own voice, no blending

When multiple experts respond, you get separate sections. They can disagree. The contradictions are the point.

## How it's built

For anyone curious — or for anyone who wants to build their own expert.

Per expert, at a high level:

1. **Build the corpus.** Books, long-form interviews where they're speaking (not hosting), articles, talks, podcasts. Every source tagged by who's actually talking, so voice samples come only from the expert's own words.

2. **Extract the way they think.** Core beliefs and the antagonists they push against. Reasoning moves — the mental patterns they run before reaching for any specific framework. Rules, each with a reason and an exception.

3. **Break frameworks into files.** Each framework — positioning, mirroring, The Algorithm, PR-FAQ — gets its own self-contained file with triggers, examples, and anti-patterns. Only the files relevant to your question get loaded.

4. **Pull real voice samples.** Three prose excerpts per expert, from their own writing, across different modes. Real prose, not paraphrased. Voice fidelity comes from demonstration, not description.

The full ten-phase process is in [`DOJO-PERSONA-PROCESS.md`](DOJO-PERSONA-PROCESS.md).

---

## Build your own expert

Everything you need to port a new persona into the dojo format lives in this repo.

### The tools

`scripts/` has the corpus acquisition pipeline:

| Script | What it does |
|---|---|
| `fetch-youtube.ts` | Download a YouTube transcript by URL (uses `yt-dlp`; `brew install yt-dlp` first) |
| `fetch-articles.ts` | Scrape articles (via Firecrawl) into the standard YAML-frontmatter format |
| `apple-podcast-transcript.py` | Transcribe Apple podcasts |
| `transcribe-audio.py` | Transcribe any audio file (podcasts, talks) |
| `transcribe-book.py` | Transcribe audiobook audio |
| `epub-to-markdown.py` | Convert EPUB to markdown |
| `srt-to-markdown.py` / `vtt-to-markdown.py` | Convert subtitle files to markdown |
| `describe-images.py` / `vision-describe.py` | Caption images (for artifact corpora like ad portfolios) |

Copy `scripts/.env.example` to `scripts/.env` and fill in the keys you need (OpenAI for transcription, Firecrawl for articles).

`tools/generate-manifest.py` rebuilds a persona's `MANIFEST.md` by scanning its `content/` directory and harvesting `source:` URLs from each file's frontmatter. Run it after fetching new material — don't hand-edit MANIFEST entries.

### Folder structure

Once you start working on an expert, create this structure locally:

```
personas/<slug>/
  inbox/                    # Drop URLs (sources.md), PDFs, EPUBs, notes here
  content/
    articles/               # Fetcher output
    youtube/                # Fetcher output
    podcasts/               # Transcription output
    sources/                # Book → markdown output
    MANIFEST.md             # Regenerated by tools/generate-manifest.py
  extractions/              # Scratch — framework extracts, voice candidates, drafts
  # Final persona output lives at:
  # dojo/<domain>/skill/personas/<slug>/persona.md + topics/
```

The detailed rationale for this layout is in `DOJO-PERSONA-PROCESS.md` (Phase 0). The `dojo/<domain>/` destination is one of `operators`, `investors`, `marketing`, `thinking`. Installable single-expert skills are generated from that source into `skills/dojo-<slug>/`.

### When you're done

Seven steps to publish, in order. (`DOJO-PERSONA-PROCESS.md` Phase 11 has the full rationale.)

1. **Drop the finished persona** into `dojo/<domain>/skill/personas/<slug>/` — `persona.md` + `topics/`.

2. **Add a `TOPIC_MAP` entry** in `dojo-builder/scripts/build-manifest.ts`, mapping the slug to **2–4 topics** drawn from the fixed `TOPICS` vocabulary at the top of that file. Without this entry the website build fails with `"no TOPIC_MAP entry"`.

3. **Add a portrait** at `dojo-builder/public/portraits/<slug>.{jpg,webp}`. Style fingerprint of the existing 29:
   - **Square 320×320 px**, JPEG (or WebP).
   - **Color source is fine** — the site applies `filter: grayscale(100%) contrast(1.02)` at render time.
   - Filename matches the slug exactly.

   Easiest path: `cd dojo-builder && npx tsx scripts/fetch-portraits.ts` — Wikipedia-backed, also regenerates `src/lib/portraits.generated.ts`. Use `--force` to re-download existing files. If Wikipedia has no usable photo, drop a hand-sourced 320×320 JPEG into `public/portraits/` and add the slug→ext line to `src/lib/portraits.generated.ts` manually.

   Skipping this renders the persona as a generic silhouette in the picker grid.

4. **Update this README** — bump the expert count in `## Available experts` and add the name to the right bucket line.

5. **Regenerate the website manifest and granular skills.** From the public repo root:
   ```bash
   cd dojo-builder
   npm run build:skills
   npm run build
   ```
   This rewrites `skills/dojo-<slug>/` and `.claude-plugin/marketplace.json` from the canonical `dojo/` content.

6. **Optional: rebuild the legacy domain zip files.**
   ```bash
   cd .. # if you're still inside dojo-builder
   for bucket in operators investors marketing thinking; do
     (cd dojo/$bucket/skill && zip -r ../../../dojo-$bucket.zip . -x "*.DS_Store")
   done
   ```

7. **Verify `npx skills` discovery.**
   ```bash
   npx --yes skills add . --list
   ```
   It should report 35 skills: 31 individual `dojo-<expert>` skills plus `dojo-operators`, `dojo-investors`, `dojo-marketing`, and `dojo-thinking`.

The website picks up new personas automatically on the next deploy once the generated manifest and `skills/` directories are committed.

## Credits

Every expert in this dojo is a real person who built their thinking over decades and shared it publicly. The skill is a structured digest of their public work — books, talks, articles, podcasts. Per-expert source corpora are in each persona's `MANIFEST.md`.

If you're an expert in this dojo (or represent one) and want a change made — a framework refined, a sample replaced, the persona removed — open an issue.

## License

MIT. See [`LICENSE`](LICENSE).

The skill source code (frontmatter, routing logic, structure) is MIT. The voice samples, direct quotes, and examples within the persona files are excerpts from copyrighted works used for transformative skill construction with attribution. If you're reusing portions of those samples outside this skill's purpose, check the source.
