#!/usr/bin/env python3
"""
Purpose: Generate MANIFEST.md from the sources table.
Dependencies: sqlite3 (standard library)

The manifest is an output artifact, not a source of truth.
The database sources table is canonical.

Example Usage:
    from scripts.db.export_manifest import write_manifest
    write_manifest("naval-ravikant")
"""

import sqlite3
from pathlib import Path
from typing import Optional


def get_db_path(persona_name: str) -> Path:
    """Get path to persona's database."""
    script_dir = Path(__file__).parent
    repo_root = script_dir.parent.parent
    return repo_root / "personas" / persona_name / "content" / "content.db"


def get_persona_root(persona_name: str) -> Path:
    """Get path to persona's root directory."""
    script_dir = Path(__file__).parent
    repo_root = script_dir.parent.parent
    return repo_root / "personas" / persona_name


def format_persona_title(persona_name: str) -> str:
    """Convert persona-name to Title Case."""
    return persona_name.replace("-", " ").title()


def export_manifest(persona_name: str) -> str:
    """
    Generate MANIFEST.md content from sources table.

    Returns:
        Markdown string for MANIFEST.md
    """
    db_path = get_db_path(persona_name)
    if not db_path.exists():
        raise ValueError(f"Database not found: {db_path}")

    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    # Get all sources grouped by type
    cursor.execute("""
        SELECT * FROM sources
        ORDER BY source_type, title
    """)
    sources = cursor.fetchall()
    conn.close()

    # Group by source_type
    by_type: dict[str, list] = {}
    for source in sources:
        source_type = source["source_type"]
        if source_type not in by_type:
            by_type[source_type] = []
        by_type[source_type].append(dict(source))

    # Build markdown
    lines = []
    title = format_persona_title(persona_name)
    lines.append(f"# {title} - Source Manifest")
    lines.append("")
    lines.append("Everything that went into the book. This file is generated from the database.")
    lines.append("")

    # Order: books first, then alphabetical
    type_order = ["book", "article", "podcast", "youtube", "interview", "tweet", "other"]
    sorted_types = sorted(by_type.keys(), key=lambda t: (type_order.index(t) if t in type_order else 99, t))

    for source_type in sorted_types:
        sources_list = by_type[source_type]
        section_title = source_type.replace("_", " ").title() + "s"
        if source_type == "youtube":
            section_title = "YouTube"

        lines.append(f"## {section_title}")
        lines.append("")

        for source in sources_list:
            title = source["title"]
            file_path = source["file_path"]
            url = source.get("url")

            # Format: - "Title" — `path/to/file.md`
            if url:
                lines.append(f"- [{title}]({url}) — `{file_path}`")
            else:
                lines.append(f"- {title} — `{file_path}`")

        lines.append("")

    return "\n".join(lines)


def write_manifest(persona_name: str) -> Path:
    """
    Write MANIFEST.md to persona's content folder.

    Returns:
        Path to written file
    """
    content = export_manifest(persona_name)
    persona_root = get_persona_root(persona_name)
    manifest_path = persona_root / "content" / "MANIFEST.md"

    manifest_path.write_text(content, encoding="utf-8")

    return manifest_path


def get_manifest_stats(persona_name: str) -> dict:
    """
    Get statistics about what would be in the manifest.

    Returns:
        {total: N, by_type: {book: N, article: N, ...}}
    """
    db_path = get_db_path(persona_name)
    if not db_path.exists():
        raise ValueError(f"Database not found: {db_path}")

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute("SELECT COUNT(*) FROM sources")
    total = cursor.fetchone()[0]

    cursor.execute("SELECT source_type, COUNT(*) FROM sources GROUP BY source_type")
    by_type = dict(cursor.fetchall())

    conn.close()

    return {"total": total, "by_type": by_type}


if __name__ == "__main__":
    import sys

    if len(sys.argv) < 2:
        print("Usage: python scripts/db/export_manifest.py <persona-name>")
        print("Example: python scripts/db/export_manifest.py naval-ravikant")
        sys.exit(1)

    persona_name = sys.argv[1]

    try:
        path = write_manifest(persona_name)
        print(f"Wrote manifest to: {path}")

        stats = get_manifest_stats(persona_name)
        print(f"Total sources: {stats['total']}")
        for stype, count in stats["by_type"].items():
            print(f"  - {stype}: {count}")
    except ValueError as e:
        print(f"Error: {e}")
        sys.exit(1)
