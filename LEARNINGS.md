# Extraction Learnings

Accumulated insights from extraction work. Add learnings as you discover them.

---

## Voice Extraction

**Extract from the right source.** For biographies (Isaacson on Musk, Vance on Musk), extract content from the book but voice from the subject's DIRECT QUOTES only. The biographer's prose will bleed through otherwise.

**Voice gets lost in structured templates.** Rigid chapter templates (What It Is / How It Works / When to Use) produce uniform output regardless of expert. Let structure follow the expert's natural way of organizing ideas.

**Biography sources need third-person with punch.** When source is a biography (Isaacson on Musk), don't write as if you're the subject—write third-person. But make the narrator voice match the subject's characteristics (direct, blunt, terse). Use direct quotes heavily. Keep narrator prose minimal and punchy.

---

## Structure

**Content type determines structure.** Classify early:
- Technique-heavy → technique chapters + selection guide
- Process-oriented → sequential steps
- Principle-based → principles + applications
- Story-driven → narratives with embedded lessons

**RAG needs self-contained sections.** Each major section must work if retrieved alone. Some repetition of context is OK—better than RAG missing critical info.

**Anti-patterns need consolidation.** Include anti-patterns both per-technique AND in a consolidated chapter. The LLM needs guardrails.

---

## Density

**Don't pad.** A 15K word book that's all signal beats 40K with filler. Cut ruthlessly.

**Every example must teach.** If an example doesn't add information beyond what's already explained, cut it.

---

## Process

**Parallel agents work well.** Use multiple agents for:
- Fetching different content types (YouTube, articles, podcasts)
- Extracting different things (frameworks, mental models, voice)
- Drafting different chapters

**Voice check is its own phase.** Don't bury it. After drafting, explicitly verify: does this sound like them?

---

## Content Acquisition

**Use yt-dlp for YouTube transcripts, not the transcript API.** The youtube-transcript npm package is unreliable—it frequently fails even when subtitles exist. Use yt-dlp with `--write-auto-sub --sub-lang en --skip-download --sub-format vtt` instead. This downloads VTT subtitle files which can then be converted to markdown.

**YouTube videos often lack captions.** Many videos (especially older ones, conference talks, podcasts) don't have captions available. Fallback: use `transcribe-audio.py` with Whisper to transcribe the audio directly. This costs API credits but gets the content.

**Article URLs need unique filenames.** Many blogs use generic URL structures (e.g., `/articles/passion-market` or `/2011/12/13/why-you-cant-hire/`). The fetch-articles script must handle:
- Trailing slashes (last segment is empty)
- Generic path segments ("articles", "blog", "post")
- Duplicate filenames (add counter suffix)

---

## Specific Expert Learnings

### Chris Voss
- Technique-heavy expert, chapter-per-technique works well
- Strong voice: direct, uses "look" and "here's the thing"
- Stories are proof, not just illustration

### April Dunford
- Process-oriented expert, sequential structure works
- Methodical voice, less personality than Voss
- Anti-patterns were scattered, consolidation helped

### Lulu Cheng
- Principle-based with strong stories
- Very distinctive voice (punchy, irreverent)
- Needs voice authenticity pass

### Elon Musk
- Source is biography (Isaacson), not his own writing
- Needs third-person with punchy narrator voice
- Direct, unhedged, technically precise, blunt
- Use direct quotes heavily—they carry the authentic voice
- Existing book was too explanatory, needs voice rewrite

---

*Add learnings as you work. This file should grow.*
