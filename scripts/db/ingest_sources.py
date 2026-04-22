#!/usr/bin/env python3
"""
Purpose: Parse MANIFEST.md and populate sources/chunks tables.
Dependencies: sqlite3 (standard library), re

Example Input:
  python scripts/db/ingest_sources.py naval-ravikant

Expected Output:
  Populates sources and chunks tables from content/MANIFEST.md
  Creates one chunk per source (chunk_level='source')
  Sets extraction_status to 'pending' for each chunk
"""

import re
import sqlite3
import sys
from pathlib import Path
from typing import Optional


def get_paths(persona_name: str) -> tuple[Path, Path, Path]:
    """Get paths for persona root, db file, and manifest file."""
    script_dir = Path(__file__).parent
    repo_root = script_dir.parent.parent
    persona_root = repo_root / "personas" / persona_name
    db_path = persona_root / "content" / "content.db"
    manifest_path = persona_root / "content" / "MANIFEST.md"
    return persona_root, db_path, manifest_path


def detect_source_type(file_path: str, section: str) -> str:
    """Detect source type from file path and section header."""
    path_lower = file_path.lower()
    section_lower = section.lower()

    if "youtube" in section_lower or "youtube" in path_lower or path_lower.endswith(".vtt"):
        return "youtube"
    elif "podcast" in section_lower or "podcast" in path_lower:
        return "podcast"
    elif "article" in section_lower or "article" in path_lower:
        return "article"
    elif "book" in section_lower or "source" in section_lower or path_lower.endswith(".epub"):
        return "book"
    elif "interview" in section_lower:
        return "interview"
    elif "tweet" in section_lower or "twitter" in path_lower:
        return "tweet"
    else:
        return "other"


def count_words(file_path: Path) -> Optional[int]:
    """Count words in a file if it exists."""
    if file_path.exists():
        try:
            text = file_path.read_text(encoding="utf-8")
            return len(text.split())
        except Exception:
            return None
    return None


def parse_manifest(manifest_path: Path, persona_root: Path) -> list[dict]:
    """
    Parse MANIFEST.md and extract source information.

    Handles common formats:
    - Bullet lists: `- title` or `- [title](url)` or `- path/to/file.md`
    - Section headers: `## YouTube` or `### Articles`
    """
    if not manifest_path.exists():
        raise ValueError(f"MANIFEST.md not found: {manifest_path}")

    content = manifest_path.read_text(encoding="utf-8")
    lines = content.split("\n")

    sources = []
    current_section = "other"

    # Patterns
    header_pattern = re.compile(r"^#{1,4}\s+(.+)$")
    bullet_pattern = re.compile(r"^\s*[-*]\s+(.+)$")
    link_pattern = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")
    file_path_pattern = re.compile(r"^[\w\-./]+\.(md|txt|vtt)$")

    for line in lines:
        line = line.strip()

        # Check for section header
        header_match = header_pattern.match(line)
        if header_match:
            current_section = header_match.group(1).strip()
            continue

        # Check for bullet item
        bullet_match = bullet_pattern.match(line)
        if bullet_match:
            item = bullet_match.group(1).strip()

            # Try to extract link
            link_match = link_pattern.search(item)
            if link_match:
                title = link_match.group(1)
                url = link_match.group(2)
                # Guess file path from title
                file_path = None
            else:
                title = item
                url = None

                # Check if it looks like a file path
                if file_path_pattern.match(item) or "/" in item:
                    file_path = item
                    title = Path(item).stem.replace("-", " ").replace("_", " ").title()
                else:
                    file_path = None

            # Detect source type
            source_type = detect_source_type(file_path or title, current_section)

            # Count words if file exists
            word_count = None
            if file_path:
                full_path = persona_root / "content" / file_path
                word_count = count_words(full_path)

            sources.append({
                "file_path": file_path or f"unknown/{title.lower().replace(' ', '-')}.md",
                "title": title,
                "source_type": source_type,
                "url": url,
                "word_count": word_count,
            })

    return sources


def ingest_sources(persona_name: str) -> int:
    """
    Ingest sources from MANIFEST.md into database.

    Returns:
        Number of sources ingested
    """
    persona_root, db_path, manifest_path = get_paths(persona_name)

    if not db_path.exists():
        raise ValueError(f"Database not found: {db_path}. Run init_db.py first.")

    sources = parse_manifest(manifest_path, persona_root)

    if not sources:
        print("No sources found in MANIFEST.md")
        return 0

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    ingested = 0
    skipped = 0

    for source in sources:
        # Check if already exists
        cursor.execute("SELECT id FROM sources WHERE file_path = ?", (source["file_path"],))
        if cursor.fetchone():
            skipped += 1
            continue

        # Insert source
        cursor.execute("""
            INSERT INTO sources (file_path, title, source_type, url, word_count)
            VALUES (?, ?, ?, ?, ?)
        """, (
            source["file_path"],
            source["title"],
            source["source_type"],
            source["url"],
            source["word_count"],
        ))
        source_id = cursor.lastrowid

        # Create source-level chunk
        cursor.execute("""
            INSERT INTO chunks (source_id, title, file_path, sequence, word_count, chunk_level)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (
            source_id,
            source["title"],
            source["file_path"],
            1,
            source["word_count"],
            "source",
        ))
        chunk_id = cursor.lastrowid

        # Set extraction status to pending
        cursor.execute("""
            INSERT INTO extraction_status (chunk_id, status)
            VALUES (?, 'pending')
        """, (chunk_id,))

        ingested += 1

    conn.commit()
    conn.close()

    print(f"Ingested {ingested} sources ({skipped} already existed)")
    return ingested


def main():
    if len(sys.argv) < 2:
        print("Usage: python scripts/db/ingest_sources.py <persona-name>")
        print("Example: python scripts/db/ingest_sources.py naval-ravikant")
        sys.exit(1)

    persona_name = sys.argv[1]

    try:
        ingest_sources(persona_name)
    except ValueError as e:
        print(f"Error: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
