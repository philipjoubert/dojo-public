# Dojo — Founder Mode for Your AI

**A panel of expert advisors, loaded into Claude or ChatGPT.**

![Neo: I know Kung Fu](assets/matrix-i-know-kung-fu.jpg)
*Install the dojo. Open your eyes. You know positioning.*

Just like Neo downloads kung fu, you can do the same with positioning, negotiation, founder mode, SaaS GTM — a panel of experts, in their own voice, willing to disagree with you and each other.

## What's in each persona

For each expert, the corpus — books, interviews, talks, articles — is processed into structured artifacts:

- **Core beliefs** — what this person thinks is true, and the antagonist they push against
- **Reasoning moves** — the mental patterns they run before reaching for any specific framework
- **Rules** — the things they will not recommend, each with the reason and the exception
- **Frameworks** — their mental models, as standalone files loaded only when relevant
- **Voice samples** — real prose from their own writing, so Claude imitates rhythm and word choice rather than describing it
- **Example exchanges** — Q&A pairs across modes so the *shape* of their answers stays right

This is not transcript search. The expert does not quote the source at you. They think in the source's frameworks, speak in the source's voice, and push back when you bring them a bad question.

Every question is classified by mode — pointed, coaching, review, drafting, emergency, strategic — and only the relevant framework files load. Pointed questions stay light. Strategic questions pull the heavy lenses.

## The four skills

The dojo ships as four independent skills, split by domain. Install the ones you want.

| Skill | Purpose | Experts |
|---|---|---|
| **dojo-operators** | Founders and CEOs who built and ran companies | Jeff Bezos • Elon Musk • Brian Chesky • Jensen Huang • Patrick Collison • Andrew Carnegie • Jason Lemkin • Keith Rabois • Chris Voss |
| **dojo-investors** | VCs, startup philosophers, capital allocators | Marc Andreessen • Ben Horowitz |
| **dojo-marketing** | Positioning, copy, growth, PR, network effects | Lulu Cheng • April Dunford • Andrew Chen • Elena Verna • Eugene Schwartz • David Ogilvy |
| **dojo-thinking** | Mental models, strategy frameworks, rationality | Shane Parrish • Julia Galef • Hamilton Helmer |

## Available experts

Each persona has a `persona.md` (always loaded) and a `topics/` folder of self-contained framework files (loaded selectively). Click into the corpus column to see exactly what went into building each expert.

| Expert | Skill | Domain | Source corpus |
|---|---|---|---|
| **Andrew Carnegie** | operators | Industrial operating, vertical integration, partnership model, Gospel of Wealth | [Sources](sources/andrew-carnegie/MANIFEST.md) |
| **Andrew Chen** | marketing | Network effects, Cold Start Problem, marketplaces, consumer growth | [Sources](sources/andrew-chen/MANIFEST.md) |
| **Ben Horowitz** | investors | Wartime CEO, The Struggle, peacetime vs wartime, lead bullets, hiring for strength, firing / layoffs, culture is what you do, management debt, founder CEO advantage | [Sources](sources/ben-horowitz/MANIFEST.md) |
| **April Dunford** | marketing | Positioning, sales pitch, differentiated value, market category | [Sources](sources/april-dunford/MANIFEST.md) |
| **Brian Chesky** | operators | Founder mode, CEO as chief product officer, hiring like a detective, design is how it works, quality before growth | [Sources](sources/brian-chesky/MANIFEST.md) |
| **Chris Voss** | operators | Negotiation, tactical empathy, mirroring, labeling, calibrated questions, accusation audit, Black Swans | [Sources](sources/chris-voss/MANIFEST.md) |
| **David Ogilvy** | marketing | Direct-response copywriting, headlines, body copy, brand image, story appeal, research-driven creative, agency management | [Sources](sources/david-ogilvy/MANIFEST.md) |
| **Elena Verna** | marketing | Growth, PLG, activation, retention, pricing & monetization, growth loops, AI-native growth | [Sources](sources/elena-verna/MANIFEST.md) |
| **Elon Musk** | operators | Engineering, manufacturing, first principles, The Algorithm, Idiot Index | [Sources](sources/elon-musk/MANIFEST.md) |
| **Eugene Schwartz** | marketing | Direct-response copywriting, Mass Desire, States of Awareness, ad critique | [Sources](sources/eugene-schwartz/MANIFEST.md) |
| **Hamilton Helmer** | thinking | Competitive strategy, the 7 Powers, Benefit/Barrier decomposition, 3 S's, Power Progression, Surplus Leader Margin, Counter-Positioning | [Sources](sources/hamilton-helmer/MANIFEST.md) |
| **Jason Lemkin** | operators | SaaS go-to-market, founder-led sales, VP hiring, LVR, PMF signals, fundraising, churn & NRR, AI-era GTM | [Sources](sources/jason-lemkin/MANIFEST.md) |
| **Jeff Bezos** | operators | Mechanism design, working backwards, PR-FAQ, Day 1 vs Day 2 | [Sources](sources/jeff-bezos/MANIFEST.md) |
| **Jensen Huang** | operators | Strategic inflections, accelerated computing, zero billion dollar markets, speed of light benchmarking, flat-org operations (60+ direct reports, T5s, no recurring 1:1s), pain and suffering as character advantage | [Sources](sources/jensen-huang/MANIFEST.md) |
| **Julia Galef** | thinking | Rationality, scout vs soldier mindset, calibration, changing your mind, productive disagreement, holding identity lightly | [Sources](sources/julia-galef/MANIFEST.md) |
| **Keith Rabois** | operators | Operating, hiring, barrels and ammunition, value creation vs protection, CEO as editor, culture as cult | [Sources](sources/keith-rabois/MANIFEST.md) |
| **Lulu Cheng** | marketing | Communications, PR, crisis, going direct, hit pieces, founder voice | [Sources](sources/lulu-cheng/MANIFEST.md) |
| **Marc Andreessen** | investors | Product/market fit, startup strategy, raising VC, techno-optimism | [Sources](sources/marc-andreessen/MANIFEST.md) |
| **Patrick Collison** | operators | Building companies at the infrastructure layer, zero billion dollar markets, the Curtain Phenomenon, pace layering, speed as strategy, caring as collective action, multiple mental models | [Sources](sources/patrick-collison/MANIFEST.md) |
| **Shane Parrish** | thinking | Clear thinking, decision-making, four defaults, mental-models latticework | [Sources](sources/shane-parrish/MANIFEST.md) |

More experts on the way. Each one takes weeks of reading and structuring — the corpus for a single persona runs to hundreds of pages before any writing starts.

## How to use it

Once installed (below), just ask in plain language. The router picks the right expert(s):

- *"How should I respond to this hit piece?"* → Lulu (marketing)
- *"Should we write a PR-FAQ before building?"* → Bezos (operators)
- *"Help me think through whether to take this job."* → Shane (thinking)
- *"Critique this positioning."* → April (marketing)

Or invoke explicitly:

- *"Ask Lulu about ..."*
- *"What would Bezos say about ..."*
- *"Ask Shane and Marc about ..."* — multi-expert; each answers in their own voice, no blending

When multiple experts respond, you get separate sections. They can disagree. The contradictions are the point. Cross-skill queries (Bezos + Shane) work if both skills are installed.

## Install

### Claude Code

```bash
git clone https://github.com/philipjoubert/dojo-public.git
cd dojo-public
cp -R dojo/operators/skill  ~/.claude/skills/dojo-operators
cp -R dojo/investors/skill  ~/.claude/skills/dojo-investors
cp -R dojo/marketing/skill  ~/.claude/skills/dojo-marketing
cp -R dojo/thinking/skill   ~/.claude/skills/dojo-thinking
```

Install only the skills you want — they're independent. Restart Claude Code (or start a new session). Try:

```
ask the dojo: how do I think about this hard decision?
```

### Updating

```bash
cd dojo-public && git pull
cp -R dojo/operators/skill  ~/.claude/skills/dojo-operators
cp -R dojo/investors/skill  ~/.claude/skills/dojo-investors
cp -R dojo/marketing/skill  ~/.claude/skills/dojo-marketing
cp -R dojo/thinking/skill   ~/.claude/skills/dojo-thinking
```

### Claude Desktop / Claude.ai

Desktop and web take skills as zip uploads. Download the skill(s) you want from this repo:

- [`dojo-operators.zip`](dojo-operators.zip)
- [`dojo-investors.zip`](dojo-investors.zip)
- [`dojo-marketing.zip`](dojo-marketing.zip)
- [`dojo-thinking.zip`](dojo-thinking.zip)

Then in Claude: **Settings → Capabilities → Skills → Upload skill**, and select the zip(s).

To update: delete the old skill in settings, download the latest zip, and re-upload.

### ChatGPT

ChatGPT supports the same `SKILL.md` standard. Use the same zips.

In ChatGPT: **Skills → New skill → Upload from your computer**, and select the zip(s) you want.

> Heads up: the ChatGPT Skills upload UI is currently rolling out on Business, Enterprise, and EDU workspaces. Individual Plus and Pro plans may not have it yet.

Each skill is self-contained — no cross-skill dependencies. Install only the ones you'll use.

## How it's built

For anyone curious — or for anyone who wants to build their own expert.

Per expert, at a high level:

1. **Build the corpus.** Books, long-form interviews where they're speaking (not hosting), articles, talks, podcasts. Every source tagged by who's actually talking, so voice samples come only from the expert's own words.

2. **Extract the way they think.** Core beliefs and the antagonists they push against. Reasoning moves — the mental patterns they run before reaching for any specific framework. Rules, each with a reason and an exception.

3. **Break frameworks into files.** Each framework — positioning, mirroring, The Algorithm, PR-FAQ — gets its own self-contained file with triggers, examples, and anti-patterns. Only the files relevant to your question get loaded.

4. **Pull real voice samples.** Three prose excerpts per expert, from their own writing, across different modes. Real prose, not paraphrased. Voice fidelity comes from demonstration, not description.

---

## Build your own expert

Everything you need to port a new persona into the dojo format lives in this repo.

### The process

The full ten-phase build process — inbox, corpus, grain classification, philosophy extraction, reasoning moves, framework sharding, voice samples, example exchanges, assembly, test — is documented in [`DOJO-PERSONA-PROCESS.md`](DOJO-PERSONA-PROCESS.md). That's the same doc the private repo uses. It specifies what every file should contain, what format it should follow, and what failure modes to avoid (voice contamination from co-hosted podcasts, guest-framework leakage, etc.).

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
  # dojo/<bucket>/skill/personas/<slug>/persona.md + topics/
```

The detailed rationale for this layout is in `DOJO-PERSONA-PROCESS.md` (Phase 0). The `dojo/<bucket>/` destination depends on which of the four skills your expert belongs in — see the skill table above.

### When you're done

Drop the finished `persona.md` + `topics/` into the right `dojo/<bucket>/skill/personas/<slug>/` folder, add the expert to that skill's `SKILL.md` (frontmatter description + Available Experts list), and re-zip the skill folder (`cd dojo/<bucket>/skill && zip -r ../../../dojo-<bucket>.zip .`). Upload the new zip in Claude / ChatGPT.

## Now

Install a skill (instructions above). Then ask it the hardest question on your plate this week.

## Credits

Every expert in this dojo is a real person who built their thinking over decades and shared it publicly. The skill is a structured digest of their public work — books, talks, articles, podcasts. Per-expert source corpora are in each persona's `MANIFEST.md` (linked from the table above).

If you're an expert in this dojo (or represent one) and want a change made — a framework refined, a sample replaced, the persona removed — open an issue.

## License

MIT. See [`LICENSE`](LICENSE).

The skill source code (frontmatter, routing logic, structure) is MIT. The voice samples, direct quotes, and examples within the persona files are excerpts from copyrighted works used for transformative skill construction with attribution. If you're reusing portions of those samples outside this skill's purpose, check the source.
