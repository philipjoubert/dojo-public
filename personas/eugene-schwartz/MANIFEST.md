# Eugene Schwartz — Source Manifest

Authoritative inventory of processed source material for Eugene Schwartz persona extraction.

## Books

- **Breakthrough Advertising** (Eugene M. Schwartz, 1966)
  - type: author
  - extracted: `sources/breakthrough-advertising.md` (~70k words, text-layer PDF)
  - original: `sources/original/breakthrough-advertising.pdf` (gitignored)
  - added: 2026-04-19

- **The Brilliance Breakthrough** (Eugene M. Schwartz)
  - type: author
  - extracted: `sources/brilliance-breakthrough.md` (~54k words, 149 pages via gpt-5-mini vision)
  - original: `sources/original/brilliance-breakthrough.pdf` (gitignored)
  - added: 2026-04-19

## Lectures / Transcripts

- **The Gene Schwartz Transcripts — Lecture to Phillips Publishing (1993)**
  - type: solo (lecture by Schwartz, Q&A segments contain audience questions only)
  - extracted: `podcasts/gene-schwartz-transcripts.md` (~21k words)
  - original: `sources/original/gene-schwartz-transcripts.docx` (gitignored)
  - added: 2026-04-19

## Swipes (Ad Corpus)

- 41 Eugene Schwartz advertisements transcribed from scans
  - type: author
  - source: https://eugeneschwartz.web.app/
  - PDFs: `swipes/*.pdf` (gitignored)
  - transcriptions: `swipes/*.md` (verbatim markdown via gpt-5-mini vision)
  - index: `swipes/MANIFEST.md`
  - added: 2026-04-19

## Skipped

- **natural-face-lift-by-exercise.pdf** — source site returns SPA index.html instead of PDF (broken on their end). 1 of 42 unique swipes lost.

## Corpus totals

- Prose: ~145k words (books + lecture)
- Ads: 41 verbatim transcriptions
- All sources `type: author` or `type: solo` — safe for voice sampling and direct quotation.
