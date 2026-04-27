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

Install a domain pack (decide / build / sell / say / fund):

```bash
npx --yes skills add philipjoubert/dojo-public \
  --skill dojo-decide \
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

43 experts across five domains. Browse and pick at [superdojo.xyz](https://superdojo.xyz/).

**Operators** — Andrew Carnegie · Andy Grove · Brian Chesky · Chris Voss · Danny Meyer · Elon Musk · Jason Lemkin · Jeff Bezos · Jensen Huang · Keith Rabois · Matt Mochary · Patrick Collison · Steve Jobs · Tobi Lütke · Wes Kao

**Investors** — Ben Horowitz · Marc Andreessen · Naval Ravikant · Paul Graham · Peter Thiel

**Marketing** — Al Ries · Andrew Chen · April Dunford · David Ogilvy · Elena Verna · Eugene Schwartz · Harry Dry · Lulu Cheng · Rob Fitzpatrick

**Thinking** — Annie Duke · Charlie Munger · Clayton Christensen · David Deutsch · David Goggins · Eliyahu Goldratt · Hamilton Helmer · Julia Galef · Nassim Taleb · Richard Feynman · Richard Rumelt · Shane Parrish · Thomas Sowell

**Craft** — William Zinsser

Each one takes weeks of reading and structuring — the corpus for a single persona runs to hundreds of pages before any writing starts. Per-expert source corpora live under [`sources/<slug>/MANIFEST.md`](sources/).

## How to ask

Topical — the router picks:

- *"How should I respond to this hit piece?"* → Lulu (say)
- *"Should we write a PR-FAQ before building?"* → Bezos (build)
- *"Help me think through whether to take this job."* → Shane (decide)
- *"Critique this positioning."* → April (sell)

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

Adding a persona is a multi-phase process. The full guide lives in [`DOJO-PERSONA-PROCESS.md`](DOJO-PERSONA-PROCESS.md) — it walks through corpus acquisition, extraction, framework authoring, voice samples, validation, and publishing.

The corpus-acquisition tools (`scripts/fetch-youtube.ts`, `fetch-articles.ts`, `apple-podcast-transcript.py`, `transcribe-audio.py`, `epub-to-markdown.py`, etc.) are in this repo. Copy `scripts/.env.example` to `scripts/.env` and fill in keys (OpenAI, Firecrawl) before running them.

Buckets, labels, and ordering are defined once in `dojo/buckets.json` — the single source of truth that all build scripts read from.

## Credits

Every expert in this dojo is a real person who built their thinking over decades and shared it publicly. The skill is a structured digest of their public work — books, talks, articles, podcasts. Per-expert source corpora are in each persona's `MANIFEST.md`.

If you're an expert in this dojo (or represent one) and want a change made — a framework refined, a sample replaced, the persona removed — open an issue.

## License

MIT. See [`LICENSE`](LICENSE).

The skill source code (frontmatter, routing logic, structure) is MIT. The voice samples, direct quotes, and examples within the persona files are excerpts from copyrighted works used for transformative skill construction with attribution. If you're reusing portions of those samples outside this skill's purpose, check the source.
