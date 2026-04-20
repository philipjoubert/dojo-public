# Dojo

**A panel of expert advisors, loaded into Claude or ChatGPT.**

![Neo: I know Kung Fu](assets/matrix-i-know-kung-fu.jpg)
*Install the dojo. Open your eyes. You know positioning.*

Just like Neo downloads kung fu, you can do the same with positioning, negotiation, founder mode — any of fifteen experts, in their own voice, willing to disagree with you and each other.

---

## What's in each persona

For each expert, the corpus — books, interviews, talks, articles — is processed into structured artifacts:

- **Core beliefs** — what this person thinks is true, and the antagonist they push against
- **Reasoning moves** — the mental patterns they run before reaching for any specific framework
- **Rules** — the things they will not recommend, each with the reason and the exception
- **Frameworks** — their mental models, as standalone files loaded only when relevant
- **Voice samples** — real prose from their own writing, so Claude imitates rhythm and word choice rather than describing it
- **Example exchanges** — Q&A pairs across modes so the *shape* of their answers stays right

This is not transcript search. The bot does not quote the source at you. It thinks in the source's frameworks, speaks in the source's voice, and pushes back when you bring it a bad question.

Every question is classified by mode — pointed, coaching, review, drafting, emergency, strategic — and only the relevant framework files load. Pointed questions stay light. Strategic questions pull the heavy lenses.

---

## Available experts

Each persona has a `persona.md` (always loaded) and a `topics/` folder of self-contained framework files (loaded selectively). Click into the corpus column to see exactly what went into building each expert.

| Expert | Domain | Source corpus |
|---|---|---|
| **Andrew Carnegie** | Industrial operating, vertical integration, partnership model, Gospel of Wealth | [See sources](sources/andrew-carnegie/MANIFEST.md) |
| **Andrew Chen** | Network effects, Cold Start Problem, marketplaces, consumer growth | [See sources](sources/andrew-chen/MANIFEST.md) |
| **April Dunford** | Positioning, sales pitch, differentiated value, market category | [See sources](sources/april-dunford/MANIFEST.md) |
| **Brian Chesky** | Founder mode, CEO as chief product officer, hiring like a detective, design is how it works, quality before growth | [See sources](sources/brian-chesky/MANIFEST.md) |
| **Chris Voss** | Negotiation, tactical empathy, mirroring, labeling, calibrated questions, accusation audit, Black Swans | [See sources](sources/chris-voss/MANIFEST.md) |
| **David Ogilvy** | Direct-response copywriting, headlines, body copy, brand image, story appeal, research-driven creative, agency management | [See sources](sources/david-ogilvy/MANIFEST.md) |
| **Elena Verna** | Growth, PLG, activation, retention, pricing & monetization, growth loops, AI-native growth | [See sources](sources/elena-verna/MANIFEST.md) |
| **Elon Musk** | Engineering, manufacturing, first principles, The Algorithm, Idiot Index | [See sources](sources/elon-musk/MANIFEST.md) |
| **Eugene Schwartz** | Direct-response copywriting, Mass Desire, States of Awareness, ad critique | [See sources](sources/eugene-schwartz/MANIFEST.md) |
| **Jeff Bezos** | Mechanism design, working backwards, PR-FAQ, Day 1 vs Day 2 | [See sources](sources/jeff-bezos/MANIFEST.md) |
| **Julia Galef** | Rationality, scout vs soldier mindset, calibration, changing your mind, productive disagreement, holding identity lightly | [See sources](sources/julia-galef/MANIFEST.md) |
| **Keith Rabois** | Operating, hiring, barrels and ammunition, value creation vs protection, CEO as editor, culture as cult | [See sources](sources/keith-rabois/MANIFEST.md) |
| **Lulu Cheng** | Communications, PR, crisis, going direct, hit pieces, founder voice | [See sources](sources/lulu-cheng/MANIFEST.md) |
| **Marc Andreessen** | Product/market fit, startup strategy, raising VC, techno-optimism | [See sources](sources/marc-andreessen/MANIFEST.md) |
| **Shane Parrish** | Clear thinking, decision-making, four defaults, mental-models latticework | [See sources](sources/shane-parrish/MANIFEST.md) |

More experts on the way. Each one takes weeks of reading and structuring — the corpus for a single persona runs to hundreds of pages before any writing starts.

---

## How to use it

Once installed (below), just ask in plain language. The router picks the right expert(s):

- *"How should I respond to this hit piece?"* → Lulu
- *"Should we write a PR-FAQ before building?"* → Bezos
- *"Help me think through whether to take this job."* → Shane
- *"Critique this positioning."* → April

Or invoke explicitly:

- *"Ask Lulu about ..."*
- *"What would Bezos say about ..."*
- *"Ask Shane and Marc about ..."* — multi-expert; each answers in their own voice, no blending

When multiple experts respond, you get separate sections. They can disagree. The contradictions are the point.

---

## Install

### Claude Code

```bash
git clone https://github.com/philipjoubert/dojo-public.git
cp -R dojo-public/dojo/skill ~/.claude/skills/dojo
```

That's it. Restart Claude Code (or start a new session). Try:

```
ask the dojo: how do I think about this hard decision?
```

### Updating

```bash
cd dojo-public && git pull
cp -R dojo/skill ~/.claude/skills/dojo
```

### Claude Desktop / Claude.ai

Desktop and web take skills as zip uploads. Zip the skill directory and upload:

```bash
cd dojo/skill
zip -r ../dojo.zip .
```

Then in Claude: **Settings → Capabilities → Skills → Upload skill**, and select `dojo/dojo.zip`.

To update: delete the old skill in settings and re-upload the new zip.

The dojo is a single skill with all personas inside — not one skill per persona. Upload once.

---

## How it's built

For anyone curious — not required reading.

Per expert, at a high level:

1. **Build the corpus.** Books, long-form interviews where they're speaking (not hosting), articles, talks, podcasts. Every source tagged by who's actually talking, so voice samples come only from the expert's own words.

2. **Extract the way they think.** Core beliefs and the antagonists they push against. Reasoning moves — the mental patterns they run before reaching for any specific framework. Rules, each with a reason and an exception.

3. **Break frameworks into files.** Each framework — positioning, mirroring, The Algorithm, PR-FAQ — gets its own self-contained file with triggers, examples, and anti-patterns. Only the files relevant to your question get loaded.

4. **Pull real voice samples.** Three prose excerpts per expert, from their own writing, across different modes. Real prose, not paraphrased. Voice fidelity comes from demonstration, not description.

The detailed build process lives in the private working repo.

---

## Now

Install it (instructions above). Then ask it the hardest question on your plate this week.

---

## Credits

Every expert in this dojo is a real person who built their thinking over decades and shared it publicly. The skill is a structured digest of their public work — books, talks, articles, podcasts. Per-expert source corpora are in each persona's `MANIFEST.md` (linked from the table above).

If you're an expert in this dojo (or represent one) and want a change made — a framework refined, a sample replaced, the persona removed — open an issue.

---

## License

MIT. See [`LICENSE`](LICENSE).

The skill source code (frontmatter, routing logic, structure) is MIT. The voice samples, direct quotes, and examples within the persona files are excerpts from copyrighted works used for transformative skill construction with attribution. If you're reusing portions of those samples outside this skill's purpose, check the source.
