#!/usr/bin/env python3
"""
Generate a persona's content/MANIFEST.md from disk state.

Walks `content/{sources,youtube,podcasts,articles,tweets,swipes}/` and emits
canonical YAML-ish manifest blocks per DOJO-PERSONA-PROCESS.md. Source URLs
are harvested from each file's frontmatter, falling back to inbox index
files or filename-derivation (for YouTube, filename = video_id).

Preserves from an existing MANIFEST.md:
  - Preamble prose (everything before the first `##` header)
  - The `## Skipped` section verbatim
  - Per-entry `notes:`, `type:`, and `added:` fields matched by `extracted:`
  - The `source:` field of existing entries that the disk scan couldn't find
    (e.g. books where only a filename is recorded)

Writes `content/MANIFEST.md` atomically. Keeps a `MANIFEST.md.bak`.

Usage:
  python3 tools/generate-manifest.py personas/<slug>/
  python3 tools/generate-manifest.py personas/elena-verna/ personas/marc-andreessen/
"""

import json
import re
import sys
from dataclasses import dataclass
from datetime import date
from pathlib import Path


# --- frontmatter + heading parsing --------------------------------------

FRONTMATTER_RE = re.compile(r'^---\s*\n(.*?)\n---\s*\n', re.DOTALL)
# Tolerates `key: value`, `key: "value"`, `key: 'value'`.
FRONTMATTER_KEY_RE = re.compile(
    r'^\s*(?P<k>\w[\w-]*)\s*:\s*["\']?(?P<v>[^"\'\n]+?)["\']?\s*$',
    re.MULTILINE,
)
H1_RE = re.compile(r'^# (?!#)(.+)$', re.MULTILINE)
# YouTube video IDs: 11 chars of [A-Za-z0-9_-], sometimes 10 if leading `-`.
VIDEO_ID_RE = re.compile(r'^[A-Za-z0-9_-]{10,12}$')


def read_frontmatter(p: Path) -> dict:
    try:
        text = p.read_text(errors='replace')
    except Exception:
        return {}
    m = FRONTMATTER_RE.match(text)
    if not m:
        return {}
    out = {}
    for km in FRONTMATTER_KEY_RE.finditer(m.group(1)):
        out[km.group('k').lower()] = km.group('v').strip()
    return out


def first_heading(p: Path) -> str | None:
    try:
        text = p.read_text(errors='replace')
    except Exception:
        return None
    # Strip leading frontmatter before looking for H1.
    m = FRONTMATTER_RE.match(text)
    if m:
        text = text[m.end():]
    m = H1_RE.search(text)
    return m.group(1).strip().rstrip('.').strip() if m else None


def slug_to_title(slug: str) -> str:
    words = slug.replace('_', '-').replace('.', '-').split('-')
    minor = {'and', 'or', 'the', 'a', 'an', 'of', 'to', 'in', 'on', 'for',
             'with', 'by', 'from', 'is', 'as', 'at', 'vs'}
    out = []
    for i, w in enumerate(words):
        if not w:
            continue
        out.append(w.capitalize() if i == 0 or w.lower() not in minor else w.lower())
    return ' '.join(out)


# --- entry model --------------------------------------------------------

@dataclass
class Entry:
    title: str
    extracted: str            # relative path from persona dir, e.g. content/articles/foo.md
    source: str | None = None  # URL or filename
    video_id: str | None = None
    type: str | None = None
    added: str | None = None
    notes: str | None = None


# --- disk scanners ------------------------------------------------------

# Filenames that appear inside content/ subdirs but are not data entries
# (source lists, indexes, housekeeping notes). Matched on stem.
NON_DATA_STEMS = frozenset({
    'sources', 'index', '_index', 'readme', 'notes', 'todo', 'todos',
    'inbox', 'manifest',
})


def _iter_content_files(d: Path, suffixes: tuple[str, ...]) -> list[Path]:
    if not d.is_dir():
        return []
    return sorted(
        p for p in d.iterdir()
        if p.is_file()
        and p.suffix in suffixes
        and not p.name.startswith('.')
        and p.stem.lower() not in NON_DATA_STEMS
        and p.stem.lower() not in NON_DATA_STEMS
    )


def scan_books(persona_dir: Path) -> list[Entry]:
    d = persona_dir / 'content' / 'sources'
    entries = []
    for p in _iter_content_files(d, ('.md',)):
        fm = read_frontmatter(p)
        title = fm.get('title') or first_heading(p) or slug_to_title(p.stem)
        # For books, `source:` is typically the original filename (.epub/.pdf/...)
        entries.append(Entry(
            title=title,
            extracted=f'content/sources/{p.name}',
            source=fm.get('source') or fm.get('original_filename'),
        ))
    return entries


# Matches `**URL:** <url>` / `**Video:** <url>` markers in the file body —
# used by Andrew Chen, April, and Elena instead of YAML frontmatter.
BODY_URL_RE = re.compile(
    r'\*\*\s*(?:URL|Video|Source)\s*:?\s*\*\*\s*(https?://\S+)',
    re.IGNORECASE,
)


def _body_url(p: Path) -> str | None:
    try:
        text = p.read_text(errors='replace')
    except Exception:
        return None
    # Only scan the top of the file — metadata always lives near the top.
    m = BODY_URL_RE.search(text[:2000])
    return m.group(1).rstrip('.,;)') if m else None


def scan_youtube(persona_dir: Path) -> list[Entry]:
    d = persona_dir / 'content' / 'youtube'
    entries = []
    for p in _iter_content_files(d, ('.md', '.txt')):
        fm = read_frontmatter(p)
        # Strip any secondary suffixes like `.en.txt` → stem `<id>.en`; try both.
        stem = p.stem
        root = stem.split('.', 1)[0]

        # Priority order: frontmatter `url:`/`source:` → body `**URL:**` marker
        # → filename-derived (if the stem is a video_id). Also pull `video_id:`
        # from frontmatter if present, since Lulu stores it there alongside a
        # title-slug filename.
        source = fm.get('source') or fm.get('url') or _body_url(p)
        video_id = fm.get('video_id')

        if not source:
            for candidate in (stem, root):
                if VIDEO_ID_RE.fullmatch(candidate):
                    video_id = video_id or candidate
                    source = f'https://www.youtube.com/watch?v={candidate}'
                    break
        elif not video_id:
            vm = re.search(r'[?&]v=([A-Za-z0-9_-]{10,12})', source)
            if vm:
                video_id = vm.group(1)

        title = fm.get('title') or first_heading(p) or slug_to_title(root)
        entries.append(Entry(
            title=title,
            extracted=f'content/youtube/{p.name}',
            source=source,
            video_id=video_id,
        ))
    return entries


def scan_articles(persona_dir: Path, inbox_index: dict[str, str]) -> list[Entry]:
    d = persona_dir / 'content' / 'articles'
    entries = []
    prefix = derive_url_template(inbox_index)
    for p in _iter_content_files(d, ('.md',)):
        fm = read_frontmatter(p)
        source = fm.get('source') or fm.get('url') or inbox_index.get(p.stem)
        if not source and prefix:
            source = f'{prefix}{p.stem}'
        title = fm.get('title') or first_heading(p) or slug_to_title(p.stem)
        entries.append(Entry(
            title=title,
            extracted=f'content/articles/{p.name}',
            source=source,
        ))
    return entries


def scan_podcasts(persona_dir: Path) -> list[Entry]:
    d = persona_dir / 'content' / 'podcasts'
    entries = []
    for p in _iter_content_files(d, ('.md', '.txt')):
        fm = read_frontmatter(p)
        source = fm.get('source') or fm.get('url')
        title = fm.get('title') or first_heading(p) or slug_to_title(p.stem)
        entries.append(Entry(
            title=title,
            extracted=f'content/podcasts/{p.name}',
            source=source,
        ))
    return entries


def scan_simple(persona_dir: Path, subdir: str) -> list[Entry]:
    """Generic scan for tweets/swipes — source tends to be filename-derived."""
    d = persona_dir / 'content' / subdir
    entries = []
    for p in _iter_content_files(d, ('.md', '.txt')):
        fm = read_frontmatter(p)
        title = fm.get('title') or first_heading(p) or slug_to_title(p.stem)
        entries.append(Entry(
            title=title,
            extracted=f'content/{subdir}/{p.name}',
            source=fm.get('source') or fm.get('url'),
        ))
    return entries


# --- inbox fallback -----------------------------------------------------

def load_inbox_index(persona_dir: Path) -> dict[str, str]:
    """Return {slug: url} from inbox/articles/_index.json if present."""
    p = persona_dir / 'inbox' / 'articles' / '_index.json'
    if not p.is_file():
        return {}
    try:
        data = json.loads(p.read_text())
    except Exception as e:
        print(f'warn: failed to parse {p}: {e}', file=sys.stderr)
        return {}
    if not isinstance(data, list):
        return {}
    out = {}
    for item in data:
        if isinstance(item, dict):
            slug, url = item.get('slug'), item.get('url')
            if slug and url:
                out[slug] = url
    return out


def derive_url_template(index: dict[str, str]) -> str | None:
    """If ≥80% of inbox URLs share a `<base>/<slug>` shape, return `<base>/`.

    Lets disk-only articles (not present in inbox/_index.json) still get a
    best-effort URL by assuming the persona writes on one platform with a
    consistent URL scheme. If the data doesn't agree, returns None — we'd
    rather ship an entry with no URL than a wrong one.
    """
    if not index:
        return None
    from collections import Counter
    prefixes: Counter = Counter()
    for slug, url in index.items():
        if url.endswith('/' + slug):
            prefixes[url[:-len(slug)]] += 1
    if not prefixes:
        return None
    (top_prefix, top_count), = prefixes.most_common(1)
    if top_count / len(index) >= 0.8:
        return top_prefix
    return None


# --- existing manifest merge -------------------------------------------

SKIPPED_HEADER_RE = re.compile(r'^##\s+Skipped\s*$', re.MULTILINE)
ANY_SECTION_RE = re.compile(r'^##\s', re.MULTILINE)
# Matches `- title: X` followed by its indented fields.
EXISTING_ENTRY_RE = re.compile(
    r'^-\s*title:\s*(?P<title>[^\n]+)\n'
    r'(?P<fields>(?:[ \t]+[\w-]+:\s*[^\n]*\n?)*)',
    re.MULTILINE,
)


def parse_existing(manifest_path: Path) -> tuple[str, dict[str, dict], str]:
    """Return (preamble, {extracted: preserved_fields}, skipped_block)."""
    if not manifest_path.is_file():
        return ('', {}, '')
    text = manifest_path.read_text()

    first = ANY_SECTION_RE.search(text)
    if not first:
        return (text, {}, '')
    preamble = text[:first.start()].rstrip() + '\n'
    body = text[first.start():]

    skipped = ''
    skipped_m = SKIPPED_HEADER_RE.search(body)
    if skipped_m:
        skipped = body[skipped_m.start():].rstrip() + '\n'
        body = body[:skipped_m.start()]

    preserved: dict[str, dict] = {}
    for m in EXISTING_ENTRY_RE.finditer(body):
        fields = {'title': m.group('title').strip()}
        for line in m.group('fields').splitlines():
            line = line.strip()
            if ':' not in line:
                continue
            k, _, v = line.partition(':')
            v = v.strip()
            # Strip inline `  # comment` trailers. Require 2+ spaces before `#`
            # so URL fragments like `https://foo#anchor` survive intact.
            v = re.sub(r'\s{2,}#.*$', '', v).rstrip()
            fields[k.strip()] = v
        extracted = fields.get('extracted')
        if not extracted:
            continue
        preserved[extracted] = fields

    return (preamble, preserved, skipped)


def _is_placeholder_url(url: str | None) -> bool:
    """True if a recorded URL is a `<unknown>`-style placeholder that would
    render as a broken link. Reserved characters `<` and `>` aren't legal in
    URLs, so their presence is a clear signal of 'URL not actually recorded'."""
    return bool(url) and ('<' in url or '>' in url)


# Notes that only exist to flag a missing URL. If the generator finds a real
# URL on a later run, these become lies and must be dropped. Pattern is
# deliberately narrow — anything substantive (word count, voice guidance,
# "primary source", etc.) survives even if it also mentions a URL.
STALE_URL_NOTE_RE = re.compile(
    r'^\s*(?:per-?essay\s+)?(?:source\s+)?URLs?\s+not\s+(?:captured|recorded)\s*(?:at\s+fetch\s+time)?\s*\.?\s*$',
    re.IGNORECASE,
)


def merge_preserved(entries: list[Entry], preserved: dict[str, dict]) -> None:
    """Layer human-edited fields from the existing manifest onto fresh entries.

    Humans pick cleaner titles than any filename-derivation can (epub metadata
    often has cruft like `_OceanofPDF.com_...`). Treat any prior title as the
    authoritative one — disk title was just a fallback when the entry was new.
    Same logic for `source:` when disk can't recover it (books without URLs).
    Notes, type, and added date are human-set and usually win — except for
    notes whose sole content is "source URL not captured," which become
    contradictory once a URL is later harvested.
    """
    for e in entries:
        p = preserved.get(e.extracted)
        if not p:
            continue
        if p.get('title'):
            e.title = p['title']
        if p.get('notes') and not e.notes:
            note = p['notes']
            if e.source and STALE_URL_NOTE_RE.match(note):
                pass  # drop — note claims "URL not captured" but we have one
            else:
                e.notes = note
        if p.get('type') and not e.type:
            e.type = p['type']
        if p.get('added') and not e.added:
            e.added = p['added']
        if not e.source and p.get('source') and not _is_placeholder_url(p['source']):
            e.source = p['source']


# --- emit ---------------------------------------------------------------

SECTIONS: list[tuple[str, str]] = [
    ('Books',    'books'),
    ('YouTube',  'youtube'),
    ('Podcasts', 'podcasts'),
    ('Articles', 'articles'),
    ('Tweets',   'tweets'),
    ('Swipes',   'swipes'),
]


def emit_entry(e: Entry) -> str:
    lines = [f'- title: {e.title}']
    if e.source:
        lines.append(f'  source: {e.source}')
    if e.video_id:
        lines.append(f'  video_id: {e.video_id}')
    if e.type:
        lines.append(f'  type: {e.type}')
    lines.append(f'  extracted: {e.extracted}')
    if e.added:
        lines.append(f'  added: {e.added}')
    if e.notes:
        lines.append(f'  notes: {e.notes}')
    return '\n'.join(lines) + '\n\n'


def emit(preamble: str, sections: dict[str, list[Entry]], skipped: str) -> str:
    out = []
    if preamble.strip():
        # Drop any trailing `---` rule lines from the preamble — emit() adds
        # its own rule before each section header, and leftover preamble
        # rules render as empty hr blocks (`---\n\n---\n\n## Section`).
        # Strip greedily: a preamble that was already run through emit once
        # may have multiple `---` lines stacked up.
        lines = preamble.splitlines()
        while lines and lines[-1].strip() in ('', '---'):
            lines.pop()
        cleaned = '\n'.join(lines)
        out.append(cleaned.strip() + '\n\n')
    for label, key in SECTIONS:
        entries = sections.get(key) or []
        if not entries:
            continue
        out.append(f'---\n\n## {label}\n\n')
        for e in entries:
            out.append(emit_entry(e))
    if skipped.strip():
        out.append(f'---\n\n{skipped.strip()}\n')
    return ''.join(out)


# --- driver -------------------------------------------------------------

def generate_for(persona_dir: Path) -> int:
    content = persona_dir / 'content'
    if not content.is_dir():
        print(f'{persona_dir.name}: no content/ dir, skipping', file=sys.stderr)
        return 1

    manifest_path = content / 'MANIFEST.md'
    preamble, preserved, skipped = parse_existing(manifest_path)
    inbox_index = load_inbox_index(persona_dir)

    sections: dict[str, list[Entry]] = {
        'books':    scan_books(persona_dir),
        'youtube':  scan_youtube(persona_dir),
        'podcasts': scan_podcasts(persona_dir),
        'articles': scan_articles(persona_dir, inbox_index),
        'tweets':   scan_simple(persona_dir, 'tweets'),
        'swipes':   scan_simple(persona_dir, 'swipes'),
    }

    today = str(date.today())
    for entries in sections.values():
        merge_preserved(entries, preserved)
        for e in entries:
            if not e.added:
                e.added = today

    new_text = emit(preamble, sections, skipped)

    if manifest_path.is_file():
        backup = manifest_path.with_suffix(manifest_path.suffix + '.bak')
        backup.write_text(manifest_path.read_text())
    manifest_path.write_text(new_text)

    totals = ' '.join(f'{k}={len(v)}' for k, v in sections.items() if v)
    missing = sum(1 for v in sections.values() for e in v if not e.source)
    msg = f'{persona_dir.name}: wrote MANIFEST.md ({totals})'
    if missing:
        msg += f' — {missing} entries missing source URL'
    print(msg)
    return 0


def main(argv: list[str]) -> int:
    if not argv:
        print(__doc__, file=sys.stderr)
        return 2
    rc = 0
    for arg in argv:
        p = Path(arg).resolve()
        if not p.is_dir():
            print(f'skip (not a directory): {p}', file=sys.stderr)
            rc = 1
            continue
        rc |= generate_for(p)
    return rc


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
