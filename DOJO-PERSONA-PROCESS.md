# Building a Dojo Persona

## Advisor charter

Every persona is an advisor to a founder trying to succeed — strategic, operational, tactical, philosophical, whatever the domain demands. Not a biographical subject, not a moral case study. When the user invokes a persona (by name or by topic), they want the advice this person would actually give. If the subject has a mixed record, the persona can answer honestly when directly asked, but never volunteers that framing. Bias every extraction decision toward *"what would help the founder succeed?"* Overlap between personas is fine and often useful — Musk and Carnegie both have cost-obsession takes; let both advise when relevant.

---

**Purpose:** Take an expert's body of work and produce a dojo-ready persona that speaks in their voice and applies their frameworks.

**End state:** Two things land in the dojo skill:

```
dojo/skill/personas/<name>/
  persona.md           # Everything Claude needs to BE them. ~300 lines.
  topics/              # Their frameworks, self-contained. ~10–25 files.
```

Plus one line added to `dojo/skill/SKILL.md`'s AVAILABLE EXPERTS list.

That's the complete deliverable. Everything else in this doc is the process to get there.

---

## Core principles

1. **Extraction targets the skill shape directly.** No intermediate artifacts that aren't skill inputs. If a file won't end up either IN `persona.md` or AS a topic file, don't produce it as part of the process.

2. **Demonstrations beat descriptions.** Voice samples (real prose) and example exchanges teach Claude how to be the expert. Descriptions of tone and style don't. Never describe what you can demonstrate.

3. **Rules carry reasons.** Every "Never X" needs a *Why:* line and (where it applies) an *Exception:* line. Bare rules are brittle — reasons let Claude judge edge cases. If you can't write the *Why:*, it's not a real rule.

4. **Atomic units at the natural grain.** Framework-based thinkers get one file per framework. Principle-based thinkers get fewer, denser files. Don't force one grain onto a persona whose work has a different shape.

5. **Protect against voice contamination.** When an expert is interviewed alongside a guest — their own podcast, a panel, a co-host show — the source contains more than one voice and more than one set of frameworks. Without an explicit guard, the guest's phrasing and ideas leak into the persona and it stops sounding like the expert. The corpus must be tagged at fetch time so extraction agents know which sources are single-voice (safe for direct quotation) and which are mixed (context only). See Phase 0 for the tagging, Phase 4 for the provenance rule, Phase 5 for the sourcing rule.

---

## The persona folder (working area)

```
personas/<name>/
  README.md                 # status and progress tracking
  inbox/
    sources.md              # pending URLs — CLEARED as items get processed
  raw/                      # raw external source material
    books/
    articles/
    youtube/
    tweets/
    podcasts/
    MANIFEST.md             # inventory of what's acquired (done only)
  extractions/              # all working artifacts
    playbook.md             # (optional) distilled prose compilation, if you make one
    philosophy/             # values, beliefs, antagonist
    reasoning-moves.md      # scratch for 4–6 mental patterns
    voice-candidates.md     # prose excerpts being considered as voice samples
    example-drafts.md       # scratch for the 4 Q&A exchanges
```

Note: the skill output lives at `dojo/skill/personas/<name>/`, NOT inside `personas/<name>/`. The folder above is research; the skill output is separate.

---

## Phase 0 — Inbox, fetch, and manifest

### What the inbox actually is

`inbox/` is a **drop zone folder**, not a single file. Scan the whole folder every time — anything in it is input:

- `sources.md` — URLs to articles, podcasts, YouTube videos, tweets.
- Loose files — epubs, PDFs, audio, screenshots, notes someone dropped in.
- Sub-folders (if someone organized) — still counts.

Never assume the inbox is just `sources.md`. If a book got dropped in as an `.epub`, it's unprocessed material too.

### Manifest format — canonical YAML-ish bullet blocks (MANDATORY)

`content/MANIFEST.md` is the authoritative inventory of processed content. **There is one format.** No tables. No inline-backtick shorthand. No nested backticks. No prose descriptions in place of entries. The format is diffable, machine-parseable, and survives public-repo export via `tools/clean-manifest.py`.

**Rules — all MUST:**

1. Every entry is a YAML-ish bullet block: `- title: <Title>` followed by 2-space-indented `key: value` lines.
2. Every entry carries **both** `source:` and `extracted:`.
   - `source:` is a URL for YouTube, articles, podcasts, tweets, and any web-fetched material. URLs must begin with `http://` or `https://` — no placeholders like `<unknown>`.
   - `source:` is a filename (no URL scheme) for books and any offline-acquired material.
3. **No inline `#` comments on data lines.** If a note belongs with the entry, it goes on its own `notes:` line. Inline comments break the public-repo cleaner.
4. YouTube entries carry a `video_id:` field (stable even when URLs vary with tracking params).
5. YouTube and podcast entries carry a `type:` field (voice-safety — see below).
6. `added:` is an ISO date (`YYYY-MM-DD`).
7. Section headers use `##` (e.g., `## Books`, `## YouTube`, `## Articles`, `## Podcasts`, `## Tweets`, `## Skipped`).

**Voice-safety `type:` tag** — prevents the guest-contamination failure mode in Core Principle 5:

- `type: solo` — the expert alone. Safe for voice samples and direct quotation.
- `type: interview-host:GUEST` — the expert hosts their own podcast, with a named guest. **Mixed voice.** Context only — never quote; never extract a framework whose only source is an episode of this type (it probably belongs to the guest).
- `type: interview-guest:HOST` — the expert is THE interviewee on someone else's show (Lenny, First Round, etc.). The expert does most of the talking. Safe for voice.
- Books and articles authored by the expert are implicitly `type: author` (no tag needed).

**Canonical example (copy this exact shape):**

```markdown
## Books

- title: Elon Musk (Walter Isaacson, 2023)
  source: elon-musk-isaacson.epub
  extracted: content/sources/elon-musk-isaacson.md
  added: 2026-04-19
  notes: Primary biography spine.

## YouTube

- title: Joe Rogan Experience #2404 - Elon Musk
  source: https://www.youtube.com/watch?v=O4wBUysNe2k
  video_id: O4wBUysNe2k
  type: interview-guest:Joe Rogan
  extracted: content/youtube/O4wBUysNe2k.md
  added: 2026-04-19

- title: Mastering Jobs Theory With Bob Moesta
  source: https://www.youtube.com/watch?v=def456ghi
  video_id: def456ghi
  type: interview-host:Bob Moesta
  extracted: content/youtube/def456ghi.md
  added: 2026-04-19

## Articles

- title: Atoms Are Cheap, Process Is Pricey
  source: https://futureblind.com/p/atoms-are-cheap-process-is-pricey
  extracted: content/articles/atoms-are-cheap-process-is-pricey.md
  added: 2026-04-19

## Skipped

- title: Low-value tweetstorm
  source: https://example.com/low-value-post
  reason: Off-domain; no extractable framework.
  date: 2026-04-19
```

**Anti-patterns — do not produce any of these:**

- ❌ Markdown tables: `| Title | video_id | Extracted |`. Tables lose URLs at public-export time.
- ❌ Inline backticks: `- "Title" — \`articles/foo.md\``. No `source:` URL means no link in public output.
- ❌ Nested backticks: `- Slug — \`"Title" — \`articles/foo.md\`\``. Doubly broken.
- ❌ Prose descriptions in place of entries: `- *Book* — 117K words — Primary spine.` A bullet without `title:` is invisible to the cleaner.
- ❌ Inline comments: `source: https://foo.com  # video ID not recorded`. The comment survives as a stray markdown heading.
- ❌ Placeholder URLs: `source: https://www.youtube.com/watch?v=<unknown>`. If the URL isn't known, omit `source:` entirely and add `notes: video_id not recorded`.

### Reconciliation (before any fetching)

Run these checks *every time* you touch a persona's inbox. The output is a report for the user — fetching does not start until the user signs off.

**Step 1 — Inventory the inbox.** List everything in `inbox/`: URLs from `sources.md`, every loose file (epubs, PDFs, audio, notes), any sub-folders.

**Step 2 — Resolve ambiguous entries.**
- **YouTube URLs:** resolve video ID → title with `yt-dlp --get-title "https://www.youtube.com/watch?v=<id>"`. Titles are what you actually compare to MANIFEST.
- **Tracking params / redirects:** normalize (`?t=3s`, `&feature=...`, `?utm_source=...` all strip to the same canonical URL).
- **Duplicates within the inbox:** collapse exact URLs and the same YouTube ID appearing twice.

**Step 3 — Diff inbox ↔ MANIFEST.** Three buckets:
- **Already processed** — item's URL / video_id / filename already appears in MANIFEST. Should be deleted from inbox.
- **Genuinely new** — not in MANIFEST.
- **Intra-inbox duplicates** — same item listed multiple ways.

**Step 4 — Audit MANIFEST ↔ `raw/`.** Catches drift the other way:
- MANIFEST entries whose `extracted` file is missing — broken claim.
- Files in `raw/` not in MANIFEST — untracked source.

**Step 5 — Present report and wait for user confirmation.** Output a single concise report: new items to fetch, already-processed items to clear from inbox, drift to resolve. **Do not start fetching until the user confirms.** This is the explicit user-check step the process requires.

### Fetching

Use the existing scripts at repo-root `/scripts/` — don't duplicate per-persona. See `scripts/README.md` for setup and the canonical output schema.

| Source type | Script | Output |
|---|---|---|
| YouTube | `fetch-youtube.ts` (yt-dlp-backed; requires `brew install yt-dlp`) | `content/youtube/<id>.md` |
| Articles | `fetch-articles.ts` (Firecrawl) | `content/articles/<slug>.md` |
| Apple Podcasts | `apple-podcast-transcript.py` | `content/podcasts/<title>.md` |
| Any audio / SoundCloud | `transcribe-audio.py` | `content/podcasts/<title>.md` |
| EPUB | `epub-to-markdown.py` | `content/sources/<title>.md` (keep original in `content/sources/original/`) |
| SRT → Markdown | `srt-to-markdown.py` | converts in place |

**All fetchers write the same YAML-frontmatter schema** — `source:`, `title:`, `fetched:` (plus `video_id:` for YouTube). This is the guarantee `tools/generate-manifest.py` relies on to harvest URLs automatically. If no existing script fits a new source type, add the new fetcher to `/scripts/` and make it write the same frontmatter. Do not deviate from the schema — deviating is how URLs got lost in the past.

### Post-fetch hygiene (strict)

For each successfully fetched item, in order:

1. Write extracted markdown to `content/<type>/<slug>.md`. **Every article file must have YAML frontmatter with `source: <URL>` at the top** — `fetch-articles.ts` does this automatically; if you fetch with a different tool, add the frontmatter yourself. The public-export pipeline depends on this.
2. Regenerate the manifest mechanically:
   ```bash
   python3 tools/generate-manifest.py personas/<slug>/
   ```
   **Do not hand-edit MANIFEST.md entries.** The generator scans `content/`, harvests `source:` URLs from file frontmatter (and the inbox index as fallback), and writes canonical YAML. Hand-editing entries is how URLs got lost in the past. Hand-editing is still OK for the preamble prose, the `## Skipped` section, and per-entry `notes:`/`type:` fields — the generator preserves all of those by matching on `extracted:` path.
3. **Remove from inbox** — delete the URL line from `sources.md`; move the source file out of `inbox/` (into `content/sources/original/` for binaries that need to stick around, or delete if not worth keeping).

Skipped items get logged in MANIFEST under `## Skipped` with a reason and removed from the inbox. The generator preserves the `## Skipped` section verbatim across runs.

**Invariant:** after Phase 0 completes, `inbox/` is empty (aside from a `README.md` and optionally an empty `sources.md`). Anything in it is unprocessed work.

### Corpus prioritization

Weight sources like this:

1. The expert's own long-form writing (books, blog posts, playbooks) — highest fidelity voice
2. Long-form interviews and podcasts — their actual speech patterns
3. Talks and keynotes — performative voice, often their sharpest framings
4. Tweets and short form — useful for signature phrases, less for depth
5. Biographies, profiles by others — lowest priority; extract only from direct quotes

---

## Phase 1 — Classify the grain

Before extracting anything, read a representative sample and decide: how does this expert think?

| Grain | Expert examples | Topic file shape |
|---|---|---|
| Framework-based | Dunford, Voss, Cheng | One file per named framework (10–25 files) |
| Principle-based | Naval, Graham | Fewer, denser files organized by principle (5–10 files) |
| Mental-model-based | Munger | One file per model/bias (20–30 files for Munger specifically) |
| Mechanism-based | Bezos | One per mechanism (PR-FAQ, six-pager, Day 1) |
| Process/step-based | (some operators) | One per stage |

Pick the grain that matches how they actually think. Don't force a framework template onto a principle-based thinker.

Also decide:

- **Default modes.** What's this expert strongest at? (review? drafting? pointed? coaching? emergency? strategic?) Usually 1–2 default modes. Lulu → review + drafting. Harry Dry → drafting. Munger → review. Naval → coaching.
- **Voice source.** Where do voice samples come from? If the expert wrote a book, that's the primary source. If the primary is interviews, extract from their direct quotes, not the interviewer's questions.

Write these decisions into `README.md` as a "Classification" section. Later phases depend on it.

---

## Phase 2 — Philosophy → CORE BELIEFS + RULES

**Sources:** the expert's foundational essays, book openings, manifestos, interviews where they state what they believe.

**Extract two things:**

### Core beliefs

5–8 bullets stating what this expert holds to be true. Include what they *oppose* (the antagonist). Example (Lulu):

```
- Traditional PR is dead.
- Founders cannot outsource being the voice of their company.
- The story IS the product.
- Going direct is the only way.
- Committees produce bland nonsense.
- Opposes: the gatekeeper model, press-release culture, corporate committees, "no comment" culture.
```

**Destination:** `persona.md` → CORE BELIEFS section.

### Rules (with Why and Exception)

Policy-level "never X" rules — things this expert won't recommend, regardless of question. Each rule carries its reason.

**Format:**

```markdown
- **Never recommend hiring a PR firm as the solution.**
  *Why:* The message regresses to the mean when filtered through third parties;
  conviction can't be outsourced.
  *Exception:* Active legal jeopardy where spokesperson discipline matters more than voice.
```

Without the *Why:* line, it's a ritual, not a rule. If you can't write the *Why:*, cut the rule.

**Destination:** `persona.md` → RULES section.

**Split of anti-patterns:** policy-level anti-patterns go here (universal, applies to every question). Tactical anti-patterns (framework-specific) go inside the relevant topic file in Phase 4.

---

## Phase 3 — Reasoning moves

**What they are:** the 4–6 broad mental patterns the expert applies *before* answering any question. How they think, not what they produce.

**Selection test:** a reasoning move should apply to at least half the questions you could ask this expert. If it's narrower, it's a framework (goes in `topics/`), not a reasoning move.

**Example (Lulu):**

```
- Two-question filter. Before treating anything as a comms problem:
  is this reaching people who matter, and is it material?
- Look for the specific humans. "The market" is not a target. Who are the ten people?
- Look for the antagonist. Is there a clear enemy? Vague enemies create vague support.
- Reframe defense as offense. An attack is often an opportunity.
- Internal before external. Check if employees know what's happening first.
- Refuse vague framings. Demand the specific decision, the specific humans.
```

**Destination:** `persona.md` → REASONING MOVES section.

---

## Phase 3.5 — Corpus annotation (portfolio personas only)

**When this applies:** the expert has a body of *output* (ads, essays, designs, talks, fund letters) that's richer than their explanations of it. Copywriters (Schwartz, Halbert, Ogilvy, Dry), designers, architects, investors with public letters — portfolio personas. For pure *teaching* experts whose corpus is mostly explanation (Lulu, Munger, Thiel), skip this phase.

**Why it matters:** the default pipeline extracts frameworks from the expert *explaining* their thinking. For portfolio personas, the output demonstrates the thinking at a depth the explanation never reaches — and the voice they use *doing* the work is different from the voice they use *teaching* it. Skipping this phase produces a persona that can recite the frameworks but can't perform them.

**What you produce**

A single index: `extractions/example-index.md`. One entry per artifact in the corpus. Each entry answers: what's this an example of, what's it doing, what's quotable.

**Format**

```markdown
## <filename or identifier>

**Demonstrates:** <framework(s) this instantiates — e.g., Mass Desire (fear of aging); State of Awareness Level 3 (problem-aware)>.

**Core pattern:** <the move this artifact runs — e.g., authority transfer via stacked credentials; risk reversal in pre-headline; negative-polarity promise inverting "how to achieve X">.

**Notable excerpts:**
> "<2–4 lines of the sharpest copy, verbatim>"
> "<another if it earns it>"

**Use for:** <where this feeds the skill — voice sample (drafting mode); example in <framework>.md; exchange prompt>.
```

**How this feeds later phases**

- **Phase 4 (framework topic files).** The `## Examples` section cites real artifacts with verbatim quotes instead of invented situations. If you have 41 ads demonstrating Mass Desire, the Mass Desire topic file picks 3 that show different desires being targeted and quotes them.
- **Phase 5 (voice samples).** Pick 1–2 artifacts as **drafting-mode voice samples** — the expert's voice while producing work, not explaining it — alongside book-prose samples that cover teaching mode. The dojo needs both or drafting requests land in teaching voice.
- **Phase 6 (example exchanges).** "Draft a headline for X" exchanges reference real patterns from the index, not generic advice.

**Parallelization:** annotating each artifact is independent. Fan out across agents at ~10–20 items per agent, then merge into the single index.

**Effort:** ~10–15 minutes per artifact. For a 40-item corpus, 7–10 hours of focused work, or ~2 hours wall-clock across 4 parallel agents.

---

## Phase 4 — Frameworks → `topics/*.md` (direct)

**No intermediate file.** Read each framework from the source corpus and write it directly into its own topic file with the self-contained template below.

### Framework provenance rule — guards against guest-leakage

For any framework that lands in a topic file, its origin must be traceable to:

- the expert's own book/article/essay, OR
- ≥2 sources tagged `solo` or `interview-guest` (where the expert is doing the talking)

If a framework's only evidence is an episode tagged `interview-host`, it almost certainly belongs to the guest, not the expert. **Cut it.** The one exception: the expert explicitly articulates the framework themselves within the episode — but even then, require a second solo source to confirm it's actually theirs.

Also maintain an **attribution list** of well-known frameworks that belong to *other* people — frameworks the expert may reference but should not absorb into the persona. Examples:

- Jobs-to-Be-Done — Clayton Christensen / Bob Moesta
- Challenger Sale — Matt Dixon / Brent Adamson
- Crossing the Chasm — Geoffrey Moore
- Four Disciplines of Execution — Franklin Covey
- Blue Ocean Strategy — Kim & Mauborgne

When the expert cites one of these, the topic file may name it and link to its origin, but must not present it *as the expert's framework*. Attribute or omit.


### Topic file template

```markdown
---
triggers:
  - "user asks about X"
  - "user describes Y situation"
use_when:
  - "specific condition where this applies"
fails_when:
  - "condition where this backfires"
related:
  - "other-topic.md"
---

# [Framework Name]

## When to Use
- [Specific trigger condition]

## Fails When
- [Failure mode] — [Why it fails]

## Core Concept
[2–3 paragraphs explaining the framework in the expert's voice.]

## How to Apply
1. [Step one]
2. [Step two]
3. [Step three]

## Examples
**Situation:** [Brief]
**Application:** [How to apply]
**Result:** [What happens]

## Anti-Patterns (tactical)
**Don't:** [Mistake specific to this framework]
**Why:** [What goes wrong]
```

**Notes:**

- Each file works standalone. No "as discussed in the previous file" references.
- Tactical anti-patterns (specific to this framework) live inside — co-located with the framework they apply to. Not in a separate anti-patterns file.
- Target size: 1,000–3,000 words per file. Below 1K, consider merging. Above 5K, consider splitting.
- Techniques nested inside a framework usually stay inside that framework's file. Only split into their own file if they're reusable across multiple frameworks.

**Destination:** `dojo/skill/personas/<name>/topics/<framework-name>.md`

---

## Phase 5 — Voice samples

**What they are:** **3** real polished prose excerpts from the expert's own writing, 300–500 words each, tagged by mode.

**Why exactly 3:** voice samples are the single largest section of `persona.md` and `persona.md` is always loaded. We trimmed from 4–5 to 3 to cut ~5–8K tokens per persona without losing the mode coverage that matters. Three covers the persona's range; more is diminishing returns.

**Why they matter:** Claude imitates demonstrations. It cannot imitate descriptions of voice. These samples are the single biggest lever for voice fidelity.

**Source — CRITICAL:** voice samples and any direct quotations in the persona must come ONLY from sources where the expert is the sole voice:

- the expert's own book, essay, or article, OR
- episodes tagged `type: solo`, OR
- episodes tagged `type: interview-guest` (the expert is THE interviewee; they're doing most of the talking)

**Never from `type: interview-host` episodes.** Those contain the guest's voice in extended stretches, and YouTube auto-captions are not diarized — there is no reliable way to attribute a given line to the expert vs. the guest. Even a "sure-thing" quote risks misattribution. If an interview-host episode is a framework hotbed, use it for *what the expert discusses*, then find the quotation somewhere safer.

Not paraphrased. Not distilled. Real prose, excerpted.

**Modes to cover (pick the 3 that best cover this persona's range):**

- **Manifesto / declarative** — how they state a thesis
- **Diagnostic / reframing** — how they read a situation and force correct perception
- **Tactical / instructive** — how they give direct advice, short punches
- **Storytelling** — story → observation → principle (only for personas who teach this way)
- **Refusing mode** — how they reject a bad framing

**Format (inside `persona.md` → VOICE SAMPLES section):**

```markdown
### Sample 1 — Manifesto / declarative mode

*From [Source, date]. This is how she writes when stating a thesis.*

[300–500 words of actual excerpted prose, lightly trimmed for length but not rewritten.]
```

**Destination:** `persona.md` → VOICE SAMPLES section (embedded inline, not a separate folder).

---

## Phase 6 — Example exchanges

**What they are:** 4 Q&A pairs demonstrating how this expert handles different question modes. Keep them tight — the goal is shape demonstration, not exhaustive content.

**Length budget per exchange:** **150–300 words for the answer**, total file budget ~1,500–2,000 words across all 4 exchanges. Compress aggressively — drop preamble, drop rhetorical scaffolding, keep the move and the voice.

**Shape variance across the four:**

1. **Pointed** — short, punchy answer to one decision. 100–200 words. Can end with a probe.
2. **Drafting** — the draft IS the answer. One sentence of framing, then the draft. 200–300 words.
3. **Refusing the premise** — push back on the framing, reframe the question. 100–200 words.
4. **Coaching** — explain a concept directly. Lands on a declarative, not a probe (breaks the closing-probe pattern so Claude doesn't ritualize it). 150–250 words.

**Source:** where possible, use questions the expert has publicly answered. Lift the Q&A. Where not possible, draft realistic ones based on how the expert speaks.

**Why four with varied shapes:** Claude pattern-matches off examples. If all four have the same shape (all end with a probe, all are lists), Claude ritualizes that shape. Variance teaches range.

**Why compress:** example exchanges + voice samples were ~60% of `persona.md` (which is always loaded). Tighter exchanges save ~3–5K tokens per persona without losing the shape lesson.

**Destination:** `persona.md` → EXAMPLE EXCHANGES section.

---

## Phase 7 — Topic routing table

**What it is:** a table mapping situations to topic files, plus a reference list of all frameworks.

### By situation

```markdown
| User situation | Load |
|---|---|
| Under attack / hit piece | hit-pieces, pressure-equation, deterrence |
| Crisis response | crisis, internal-first |
| Reviewing an existing strategy or doc | [5–8 files covering review-relevant lenses] |
```

Include a row for "reviewing an existing X" that loads 5–8 files — reviews warrant broader loading.

### By framework

```markdown
| Name | File | One-liner |
|---|---|---|
| Go Direct | go-direct.md | Founders own their narrative, no intermediaries |
```

**Destination:** `persona.md` → TOPIC ROUTING section (at the bottom of persona.md).

---

## Phase 7.5 — Coverage gap check

Run `tools/gap-check.py <slug>` before assembling `persona.md`. The script asks Claude — cold, with no knowledge of what we've built — to list the expert's signature frameworks, books, concepts, and topic areas. It diffs that list against our current `routing_keywords`, `topics/*.md` filenames, and `long_blurb`, then walks us through each unmatched item interactively.

For each candidate gap, you answer:

- **[a]dd** — real gap, missing from our corpus. Go back to Phase 0, fetch a source that covers it, then re-run Phases 2–4 on the new material.
- **[s]cope** — intentional omission. The item is genuinely this expert's, but falls outside how we've scoped the persona (e.g., Paul Graham's essays on art rather than startups). Logged in `<slug>/scope-decisions.md` so it doesn't come back next run.
- **[r]eject** — LLM hallucination or misattribution. Logged in `<slug>/rejected-gaps.md` with the reason, and suppressed in future gap checks for this persona.

**Two important limits on this phase:**

1. **Public-figure gate.** If Claude's cold list comes back thin, hedging, or clearly low-confidence ("I don't have specific knowledge of…"), the script aborts. LLM gap-check is only useful when the LLM actually knows the person. For niche experts whose corpus is narrow by necessity, skip this phase — you'll get more noise than signal.
2. **Signature-only, not exhaustive.** The prompt asks Claude to rank items by public notability and return only top-tier signature frameworks, iconic concepts, widely-cited books. We're not trying to catch every passing idea the expert has ever mentioned — we're catching the handful that a user would plausibly type into a routing query and miss.

**Attribution hygiene is absolute.** Anything accepted in step a still has to land in the corpus and be extracted from the expert's own sources. Gap-check identifies *what to look for*; it does not insert content. The voice-provenance rule from Phase 5 (samples only from sources where the expert is speaking) is not loosened.

**When to re-run:** any time the corpus grows, a new topic file ships, or a year has passed since the last check. Rejected-gaps log prevents re-surfacing known hallucinations; scope-decisions log captures deliberate omissions.

---

## Phase 8 — Assemble `persona.md`

Stitch together the sections produced in phases 2–7 into the final file. Template:

```markdown
---
name: <slug>
domain: <comma-separated list>
default_modes: <e.g., review, drafting (strongest in review)>
routing_keywords: <comma-separated list — see below>
short_blurb: "<Full Name> (<4–6 headline items in parens>)"
long_blurb: |-
  **<Full Name>** (`personas/<slug>/`) — <dense prose summary of role, history, frameworks>
---

# <Full Name>

<One-paragraph intro — role, history, what makes them distinct.>

---

## DOMAIN

<What they advise on. 3–5 lines. End with one line on what they're NOT.>

---

## CORE BELIEFS

<6–8 bullets from Phase 2, including "Opposes:" line.>

---

## REASONING MOVES — how they think before answering

<4–6 bullets from Phase 3.>

---

## RULES

- **Rule with Why and Exception** — format from Phase 2. All rules are "Never" — policy-level prohibitions with reasons. Don't include an "Always" subsection; the positive equivalents are already covered by CORE BELIEFS, REASONING MOVES, and HEURISTICS, and a duplicated "Always" list bloats `persona.md` (which is always loaded).

---

## HEURISTICS

<Optional 2–4 self-checks for answer quality. Example: "If you're writing an 8-item list, the list is the problem. Cut it." Apply when they apply; don't force.>

---

## EXAMPLE EXCHANGES

<4 examples from Phase 6.>

---

## VOICE SAMPLES

**Voice is not described here. It is demonstrated.** <3 samples from Phase 5.>

---

## TOPIC ROUTING

<Table from Phase 7.>
```

**Target size:** ~250–320 lines for a typical persona. The 3 voice samples + compressed exchanges + no Always-rules section keep `persona.md` lean (~25–30K chars / ~6K–7.5K tokens). Going significantly over usually means the voice samples are too long or the exchanges weren't compressed.

**Destination:** `dojo/skill/personas/<name>/persona.md`

### Authoring `routing_keywords`

This field is the single routing signal surfaced in the generated SKILL.md's EXPERTS index. The panel-builder extractor (`dojo-builder/scripts/build-manifest.ts`) reads it directly — no fallback derivation from `short_blurb` or filenames. Terse here → terse routing in the shipped skill, no matter how rich the actual persona is.

**What to include** — 15–25 comma-separated items that cover the full breadth of the persona:

1. **Named frameworks** — the proper nouns an educated reader would recognize: *The Algorithm*, *48 Types of VP Sales*, *PR-FAQ*, *7 Powers*, *The Scout Mindset*, *Tactical Empathy*, *Mirroring*, *The Struggle*, *Idiot Index*.
2. **Topic areas** — the domains they genuinely cover, overlapping with `domain:` but phrased as routing-useful terms: *founder-led sales*, *VP hiring*, *churn*, *pricing*, *negotiation*, *positioning*, *growth*, *fundraising*.
3. **Signature concepts and phrases** — terms strongly identified with this expert that users might literally type: *LVR*, *Day 1*, *wartime CEO*, *schlep blindness*, *Cold Start Problem*, *network effects*, *Black Swans*.
4. **Adjacent questions they handle well** — if an obvious routing gap exists that isn't covered by 1–3, add it: *crisis leadership*, *board dynamics*, *hiring mistakes*.

**What to leave out:**

- Filler phrases ("strategic advice", "business thinking") — they match nothing useful.
- Biographical trivia ("Scottish-born", "Stanford MBA") — belongs in `long_blurb`.
- Concepts they *reference* but aren't theirs (Munger citing Graham's *Mr. Market*, Jensen citing Grove's *Only the Paranoid*). Stay inside the "what they own" boundary.
- Things covered only as anti-patterns. If Chesky's whole point is *"don't blend voices"*, that's a rule, not a topic they'd be routed to.
- **Near-duplicates within a single persona.** If you have *positioning*, *positioning activation*, and *positioning workshop facilitation*, collapse to the single umbrella term plus at most one sub-framework that adds distinct signal. Three variants of the same concept waste routing surface area.
- **Jargon acronyms.** Spell out the full phrase and drop the acronym: *Lead Velocity Rate* (not *LVR*), *product-market fit* (not *PMF*), *net revenue retention* (not *NRR*), *answer engine optimization* (not *AEO*). Users query using words more often than acronyms, and the full phrase also matches acronym mentions downstream. Exceptions — keep acronyms when they are the universally-understood form: *CEO*, *VP*, *AI*, *B2B*, *SaaS*, *M&A*, *SMB*. When in doubt, spell it out.

**On cross-persona overlap:** it's fine. Musk and Carnegie both have *vertical integration*; Munger, Naval, Parrish, Galef all claim *mental models*. Users only install ~8 experts in a given skill, so collisions don't dilute routing in practice — and the per-persona `TOPIC ROUTING` table is the second filter that picks the right framework within each expert.

**Format:** one comma-separated line. No quotes around individual items. Double-quote the whole YAML value if it contains `:` characters (it usually doesn't, but belt-and-braces).

**Length:** the hard cap enforced by the build is generous (~300 chars / 16 items typical, warnings if truncated). Aim for richness within reason. A persona with 21 topic files should have a routing_keywords line that reflects that range; a persona with 5 topic files should have a shorter, tighter line.

**When to revisit:** any time you add or remove a topic file, or coin a new signature framework for the persona. `routing_keywords` has to stay in sync with the actual coverage — if a user routes on *"ask <expert> about X"* but X isn't in the keywords, they'll miss the expert.

---

## Phase 9 — Deploy

```bash
# Verify structure
ls dojo/skill/personas/<name>/
# Should show: persona.md, topics/

# Deploy
cp -R dojo/skill/ ~/.claude/skills/dojo/
```

Add a line under AVAILABLE EXPERTS in `dojo/skill/SKILL.md`:

```markdown
- **<Full Name>** (`personas/<slug>/`) — <domain summary>
```

---

## Phase 10 — Test

Run one question per mode through dojo, routed to the new persona:

1. **Pointed:** one specific decision they'd help with.
2. **Review:** critique an existing piece of work in their domain.
3. **Drafting:** ask them to write something.
4. **Refusing the premise:** ask a question with a bad assumption baked in.

Check:

- Does the voice sound like the real expert? If not, iterate on voice samples in Phase 5 and add/swap passages until it does.
- Do reasoning moves fire at the right times? If the expert answers without the characteristic framing, the reasoning moves are probably too narrow or missing.
- Do they refuse bad premises the way the real expert would? If not, check that a "refusing the premise" example exchange exists in Phase 6.
- Do frameworks load from topics/ correctly? Watch the files-loaded count — if it loads 1 file for a strategic review, the routing or mode classification is off.

**Iterate until the voice survives the 4-mode test.**

---

## Phase 11 — Publish to public repo

Phases 0–10 produce a working persona in the *private* repo and deploy it locally. Phase 11 mirrors the persona to the public companion repo (`personas-public/`), the dojo-builder website (`superdojo.xyz`), and the downloadable skill zips. **Skipping any sub-step here ships a broken or visually inconsistent persona** — TOPIC_MAP omissions fail the website build silently in CI; missing portraits render as silhouettes; out-of-date zips ship stale topic files.

There are six steps and they must run in this order.

### Step 1 — Add a `TOPIC_MAP` entry (manual edit)

Edit `personas-public/dojo-builder/scripts/build-manifest.ts`. In the `TOPIC_MAP` object, add a line keyed by the persona slug, with **2–4 topics** drawn from the fixed `TOPICS` vocabulary at the top of that file. The fixed list is currently:

```
hiring, culture, org design, negotiation, sales, pricing, positioning,
copywriting, PR & comms, fundraising, product, design, growth, marketplaces,
engineering, strategy, career, wealth, decision-making, mental models
```

Pick the topics that match the persona's strongest content. Aim to include at least one topic that overlaps with same-bucket peers (so they show up next to each other in routing) and at least one that distinguishes them. Example:

```ts
"clayton-christensen": ["strategy", "mental models", "product", "career"],
```

The build will fail with `"no TOPIC_MAP entry — add one in build-manifest.ts"` if this is missing. There is no automation that can pick the topics for you — they are an editorial choice.

### Step 2 — Add a portrait

Portraits live at `personas-public/dojo-builder/public/portraits/<slug>.{jpg,webp}` and are listed in `personas-public/dojo-builder/src/lib/portraits.generated.ts`. **Style fingerprint of the existing 29 portraits:**

- **Square 320×320 px**
- **JPEG** (or WebP — both are accepted; .jpg is the convention)
- **Color source is fine.** The site applies `filter: grayscale(100%) contrast(1.02)` at render time, so a neutral color photo desaturates cleanly. Pre-grayscaled images also work, but don't double-process.
- **Filename = `<slug>.jpg`** (or `.webp`). Slug must match the dojo persona slug exactly.

There are two paths:

1. **Wikipedia-backed (preferred when the subject has a Wikipedia photo).** Run:
   ```bash
   cd personas-public/dojo-builder
   npx tsx scripts/fetch-portraits.ts
   ```
   This scrapes Wikipedia's REST API for each persona that's missing one, downloads the thumbnail (typically 320 px), and regenerates `src/lib/portraits.generated.ts`. Add `--force` to re-download existing portraits.

2. **Hand-curated** (when Wikipedia has no usable photo, or returns a poor crop). Drop a manually sourced 320×320 JPEG into `public/portraits/<slug>.jpg`, then add the slug→ext line to `src/lib/portraits.generated.ts` by hand. Re-run `fetch-portraits.ts` afterwards if you want it to regenerate the map idempotently around your manual file.

If Step 2 is skipped, the persona renders as a generic silhouette — functional but stands out in the grid.

### Step 3 — Run `tools/sync-public.sh`

From the *private* repo root:

```bash
./tools/sync-public.sh
```

This is the canonical bridge between repos. It does, in order:

- `rsync -a --delete` of `dojo/` → `personas-public/dojo/` — picks up new persona folder + any edits to existing personas.
- For each persona that has a `dojo/<bucket>/skill/personas/<slug>/persona.md`, copies `personas/<slug>/content/MANIFEST.md` to `personas-public/sources/<slug>/MANIFEST.md` and runs it through `tools/clean-manifest.py` (strips internal paths, IDs, and `# private` comments).
- Mirrors `scripts/` (excludes `.env`, `.venv`, `node_modules`, `__pycache__`, and a few private-only scripts) and copies `tools/generate-manifest.py` and this process doc.
- Rebuilds the four `dojo-<bucket>.zip` files at the public-repo root. The zip contents are the contents of `dojo/<bucket>/skill/` (i.e. `SKILL.md` + `personas/`), with frontmatter stripped from every `persona.md` so Claude's skill preview renders clean prose. The unzipped tree retains the frontmatter for the manifest builder.

The script refuses to proceed if an `.env` file slipped into the public tree.

### Step 4 — Generate the per-persona skill folders + marketplace.json

The CLI install path on the website (the "Install via CLI" tab) emits commands of the form:

```bash
npx --yes skills add philipjoubert/dojo-public --copy --skill dojo-<slug>
```

This requires that `skills/dojo-<slug>/` exists in the public repo and that `.claude-plugin/marketplace.json` lists it. Both are mechanically generated — never hand-edited.

From `personas-public/dojo-builder/`:

```bash
cd ../personas-public/dojo-builder
npm run build:manifest      # regenerates src/lib/personas.generated.ts (catches missing TOPIC_MAP entries; also writes llms.txt)
npx tsx scripts/build-granular-skills.ts   # writes skills/dojo-<slug>/ for every persona, plus .claude-plugin/marketplace.json
```

`build-granular-skills.ts`:

- Reads `src/lib/personas.generated.ts` (which `build:manifest` produced).
- For each persona, copies `dojo/<bucket>/skill/personas/<slug>/` into `skills/dojo-<slug>/personas/<slug>/`, with `persona.md` frontmatter stripped (same convention as the bucket zips).
- Renders a single-persona `SKILL.md` at `skills/dojo-<slug>/SKILL.md` from `templates/skill-template.md.tmpl`.
- Rewrites `.claude-plugin/marketplace.json` to list every per-persona skill alongside the four bucket skills.

If you skip Step 4, the bucket zips will work but the new persona will silently fail to install via CLI: `npx skills add ... --skill dojo-<new-slug>` will report "skill not found in marketplace."

### Step 5 — Update the public README

Edit `personas-public/README.md`:

1. Bump the **expert count** in the `## Available experts` paragraph (e.g., `31 experts` → `32`).
2. Add the new name to the **right bucket line** (`Operators`, `Investors`, `Marketing`, or `Thinking`), keeping the existing dot-separator formatting.

This is the only step driven by manual editing of the public-facing copy. Everything else is mechanically generated. The README change is what makes the new persona discoverable in the prose, not just the picker grid.

### Step 6 — Verify, commit, push

From `personas-public/`:

```bash
cd ../personas-public
git status                           # review what changed — should include skills/dojo-<slug>/, marketplace.json, llms.txt, portraits.generated.ts, personas.generated.ts, dojo/<bucket>/, sources/<slug>/MANIFEST.md, README.md, dojo-<bucket>.zip
cd dojo-builder && npm run build     # full Next build; catches anything the manifest checker missed
cd .. && git add -A && git commit -m "Add <persona> to <bucket> dojo"
git push
```

The website redeploys on push. The downloadable zips at `personas-public/dojo-<bucket>.zip` ship alongside, so the "Download zip" button picks up the new persona on the same release. The "Install via CLI" tab also picks up the new `dojo-<slug>` skill on the same release because `marketplace.json` is what `npx skills add` reads.

### When to re-run Phase 11

- After every Phase 10 iteration that touches `persona.md`, `topics/*.md`, or routing — re-run sync (Step 3) **and** `build:manifest` + `build-granular-skills.ts` (Step 4) so both the bucket zips and the per-persona CLI skills carry the corrected files.
- After the LLM gap-check (Phase 7.5) adds a new framework topic file — same: sync + regenerate.
- After portrait swaps or when a hand-curated portrait replaces the Wikipedia default — re-run `fetch-portraits.ts`, then Step 4 (per-persona skills don't ship the portrait, but the website does).
- If you only edit `TOPIC_MAP` or topic categorisation, you can skip Step 3 (no dojo files changed) but you still need Step 4.

Skipping any sub-step leaves a partial publish: stale topic files in the public repo, stale zips on the website, or a CLI install command that resolves to an empty skill — users get a different persona than the one you just built.

---

## Parallelization

This process is agent-friendly. Phases 2, 3, 3.5, 4, 5, 6 can run in parallel on independent agents:

- Agent A: Core beliefs + rules (Phase 2)
- Agent B: Reasoning moves (Phase 3)
- Agent C: Corpus annotation (Phase 3.5, portfolio personas; itself parallelizable per batch of artifacts)
- Agent D: Framework extraction into `topics/` (Phase 4, itself parallelizable per framework)
- Agent E: Voice samples (Phase 5)
- Agent F: Example exchanges (Phase 6)

Phase 3.5 should finish before Phase 4 starts — framework topic files cite examples from the index. Other phases are independent. A coordinator assembles in Phase 8.

---

## Anti-patterns in the process itself

- **Don't produce a "writing style guide."** It won't be read and it doesn't work. Voice samples are ground truth.
- **Don't leave anti-patterns in a standalone file.** Split into policy (persona.md) and tactical (co-located in topic files).
- **Don't generate per-persona skill files.** The skill is `dojo/skill/`. Each persona is just a folder inside.
- **Don't keep a SQLite DB for tracking.** The MANIFEST is enough.
- **Don't hardcode signature vocabulary in persona.md as a list.** If a word isn't used in a voice sample, it won't surface. Listing it does nothing.
- **Don't write descriptions of tone, rhythm, or voice.** Demonstrate, don't describe.

---

## Rough effort per persona

- **Phase 0 (inbox + corpus):** 1–2 hours if the corpus is substantial and still needs fetching. Near-zero if already gathered.
- **Phase 1 (grain decision):** 30 minutes of reading.
- **Phases 2–3 (philosophy + reasoning):** 1–2 hours.
- **Phase 3.5 (corpus annotation, portfolio personas only):** 7–10 hours for a 40-item corpus, less at smaller scales, parallelizable.
- **Phase 4 (framework sharding into topics):** 3–6 hours depending on how many frameworks.
- **Phase 5 (voice samples):** 1–2 hours to find and trim good passages.
- **Phase 6 (example exchanges):** 1–2 hours.
- **Phases 7–9 (routing + assembly + deploy):** 1 hour.
- **Phase 10 (test + iterate):** 1–2 hours.
- **Phase 11 (publish to public repo):** 15–30 minutes (TOPIC_MAP edit + portrait fetch + sync + README + push). Add ~30 minutes if the portrait needs to be hand-curated rather than auto-fetched from Wikipedia.

**Total per persona:** 10–16 hours of focused work for a new persona with a polished corpus. Porting the 12 remaining personas: ~2–3 weeks of focused sessions.

---

## When to rebuild a persona

You rebuild (not tweak) a persona if:

- The voice consistently sounds like a generic consultant wearing the expert's frameworks.
- Multiple voice samples would need to change, not just one.
- The grain classification was wrong (you built framework files for a principle-based thinker).
- The corpus has grown significantly and the old extraction missed major material.

Otherwise, iterate: swap voice samples, sharpen a reasoning move, add an example exchange. Rebuilds are expensive.
