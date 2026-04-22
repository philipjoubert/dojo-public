# Database Scripts

SQLite-based tracking for the personas extraction pipeline. Tracks sources, chunks, and extracted ideas with provenance linking.

## Setup

Initialize database for a persona:

```bash
python scripts/db/init_db.py naval-ravikant
```

This creates `personas/naval-ravikant/content/content.db` with all tables.

## Workflow

### 1. Ingest Sources

Parse MANIFEST.md and populate the sources/chunks tables:

```bash
python scripts/db/ingest_sources.py naval-ravikant
```

Creates one chunk per source with `extraction_status = 'pending'`.

### 2. Insert Extracted Ideas

As you extract ideas from sources, insert them with provenance:

```bash
python scripts/db/insert_idea.py --persona naval-ravikant \
  --type framework \
  --title "The Wealth Equation" \
  --content "Wealth = Specific Knowledge + Accountability + Leverage" \
  --use-when "Building long-term wealth" \
  --fails-when "Seeking quick money" \
  --chunk-id 5 \
  --quote "Each element is necessary. None is sufficient alone."
```

### 3. Query Ideas

Query by type, category, or review status:

```bash
# All frameworks
python scripts/db/query_ideas.py --persona naval-ravikant --type framework

# Items needing review
python scripts/db/query_ideas.py --persona naval-ravikant --needs-review

# Database statistics
python scripts/db/query_ideas.py --persona naval-ravikant --stats
```

## Idea Types

| Type | Description |
|------|-------------|
| `framework` | Mental models with multiple components |
| `principle` | General rules or guidelines |
| `technique` | Specific actionable methods |
| `anti_pattern` | What to avoid |
| `story` | Illustrative examples or anecdotes |
| `quote` | Direct quotations |
| `value` | Core beliefs that guide decisions |
| `assumption` | Unstated premises underlying other ideas |
| `tradeoff` | Explicit acknowledgment of costs/benefits |
| `hero` | People or concepts held up as exemplars |
| `villain` | People or concepts criticized as cautionary |

## Inbox Management

The inbox tracks content to acquire. Work with Claude conversationally.

### Check inbox status

```python
from scripts.db.inbox import get_inbox_status
status = get_inbox_status("naval-ravikant")
# {'pending': 45, 'acquired': 41, 'skipped': 3, 'total': 89}
```

### Import inbox files

```python
from scripts.db.inbox import import_inbox_file
result = import_inbox_file("naval-ravikant", "inbox/sources.txt")
# {'added': 12, 'skipped': 5, 'errors': ['line 23: invalid URL']}
```

### Get pending items

```python
from scripts.db.inbox import get_pending_items
items = get_pending_items("naval-ravikant", source_type="youtube", limit=10)
for item in items:
    print(f"{item['id']}: {item['url']}")
```

### Mark items processed

```python
from scripts.db.inbox import mark_acquired, mark_skipped
mark_acquired("naval-ravikant", inbox_id=15, source_id=42)
mark_skipped("naval-ravikant", inbox_id=16, reason="404 dead link")
```

### Generate manifest

```python
from scripts.db.export_manifest import write_manifest
write_manifest("naval-ravikant")  # Writes content/MANIFEST.md from sources table
```

## Schema Overview

```
inbox_items → sources → chunks → extraction_status
                            ↓
                       idea_sources ← ideas
```

- **inbox_items**: URLs/files to acquire (pending → acquired/skipped)
- **sources**: Content files (books, articles, podcasts, etc.)
- **chunks**: Pieces of sources (can be source-level, chapter, or section)
- **extraction_status**: Tracks whether each chunk has been processed
- **ideas**: Extracted knowledge units with conditional logic
- **idea_sources**: Links ideas to their source chunks with quotes

## Conditional Logic Fields

Each idea can include:

- `use_when`: Conditions where this applies
- `fails_when`: Failure modes or anti-conditions
- `conditions`: JSON with scope, scale, prerequisites

## Resetting

To start fresh:

```bash
python scripts/db/init_db.py naval-ravikant --force
```

This deletes and recreates the database.
