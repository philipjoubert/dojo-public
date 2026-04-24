# Dojo — Founder Mode for Your AI

**A panel of expert advisors, loaded into Claude or ChatGPT.**

![Neo: I know Kung Fu](assets/matrix-i-know-kung-fu.jpg)
*Install the dojo. Open your eyes. You know positioning.*

Just like [Neo downloads kung fu](https://youtube.com/watch?t=13&v=0YhJxJZOWBw&feature=youtu.be), you can do the same with positioning, negotiation, founder mode, SaaS GTM — a panel of experts, in their own voice, willing to disagree with you and each other.

## Build your dojo

👉 **[dojo-public.vercel.app](https://dojo-public.vercel.app/)**

Pick up to 8 experts. Download one skill zip. Install it:

- **Claude Desktop / claude.ai** — Settings → Capabilities → Skills → Upload skill
- **ChatGPT** — [chatgpt.com/skills](https://chatgpt.com/skills) → New skill → Upload
- **Claude Code** — unzip into `~/.claude/skills/`

Then ask in plain language — *"ask dojo: how should I respond to this hit piece?"* — and the router picks the right expert(s).

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

29 experts across four domains. Browse and pick at [dojo-public.vercel.app](https://dojo-public.vercel.app/).

**Operators** — Andrew Carnegie · Brian Chesky · Chris Voss · Elon Musk · Jason Lemkin · Jeff Bezos · Jensen Huang · Keith Rabois · Patrick Collison · Steve Jobs · Tobi Lütke

**Investors** — Ben Horowitz · Marc Andreessen · Naval Ravikant · Paul Graham · Peter Thiel

**Marketing** — Andrew Chen · April Dunford · David Ogilvy · Elena Verna · Eugene Schwartz · Harry Dry · Lulu Cheng

**Thinking** — Charlie Munger · Eliyahu Goldratt · Hamilton Helmer · Julia Galef · Shane Parrish · Thomas Sowell

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
  # Final output (the skill deliverable) lives at:
  # dojo/<domain>/skill/personas/<slug>/persona.md + topics/
```

The detailed rationale for this layout is in `DOJO-PERSONA-PROCESS.md` (Phase 0). The `dojo/<domain>/` destination is one of `operators`, `investors`, `marketing`, `thinking`.

### When you're done

Drop the finished `persona.md` + `topics/` into the right `dojo/<domain>/skill/personas/<slug>/` folder, add a `TOPIC_MAP` entry in `dojo-builder/scripts/build-manifest.ts` mapping the slug to 2–4 topics, and re-zip the full-domain skill (`cd dojo/<domain>/skill && zip -r ../../../dojo-<domain>.zip .`). The website picks up new personas automatically on the next deploy.

## Credits

Every expert in this dojo is a real person who built their thinking over decades and shared it publicly. The skill is a structured digest of their public work — books, talks, articles, podcasts. Per-expert source corpora are in each persona's `MANIFEST.md`.

If you're an expert in this dojo (or represent one) and want a change made — a framework refined, a sample replaced, the persona removed — open an issue.

## License

MIT. See [`LICENSE`](LICENSE).

The skill source code (frontmatter, routing logic, structure) is MIT. The voice samples, direct quotes, and examples within the persona files are excerpts from copyrighted works used for transformative skill construction with attribution. If you're reusing portions of those samples outside this skill's purpose, check the source.
