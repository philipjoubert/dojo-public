#!/usr/bin/env python3
"""
Purpose: Inbox management functions for tracking content to acquire.
Dependencies: sqlite3 (standard library), re

These are importable functions for Claude to use conversationally,
not CLI scripts. Work with Claude to process inbox items.

Example Usage:
    from scripts.db.inbox import get_inbox_status, import_inbox_file
    status = get_inbox_status("naval-ravikant")
    result = import_inbox_file("naval-ravikant", "inbox/sources.txt")
"""

import re
import sqlite3
from pathlib import Path
from typing import Optional
from urllib.parse import urlparse


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


def detect_source_type_from_url(url: str) -> Optional[str]:
    """Detect source type from URL patterns."""
    url_lower = url.lower()

    if "youtube.com" in url_lower or "youtu.be" in url_lower:
        return "youtube"
    elif "twitter.com" in url_lower or "x.com" in url_lower:
        return "tweet"
    elif any(pod in url_lower for pod in ["podcast", "spotify.com/episode", "podcasts.apple.com"]):
        return "podcast"
    elif any(domain in url_lower for domain in ["medium.com", "substack.com", "blog", "article"]):
        return "article"
    else:
        return "article"  # Default to article for most URLs


def parse_inbox_line(line: str) -> Optional[dict]:
    """
    Parse a single line from an inbox file.

    Returns dict with url/file_path, or None if line should be skipped.
    Handles:
    - Bare URLs
    - Bullet-prefixed URLs (-, *, •)
    - Tab-indented URLs
    - Comments (#)
    - Prose notes (skipped)
    """
    line = line.strip()

    # Skip empty lines and comments
    if not line or line.startswith("#"):
        return None

    # Remove bullet prefixes
    line = re.sub(r"^[\-\*\•\t]+\s*", "", line)
    line = line.strip()

    if not line:
        return None

    # Check if it looks like a URL
    url_pattern = re.compile(r"https?://[^\s]+")
    match = url_pattern.search(line)

    if match:
        url = match.group(0)
        # Clean up trailing punctuation
        url = re.sub(r"[,;:\)\]]+$", "", url)
        source_type = detect_source_type_from_url(url)
        return {"url": url, "source_type": source_type}

    # Check if it looks like a file path
    if "/" in line or line.endswith((".md", ".txt", ".epub", ".pdf")):
        return {"file_path": line, "source_type": "other"}

    # Skip prose/notes that don't look like URLs or paths
    return None


def import_inbox_file(persona_name: str, inbox_file: str) -> dict:
    """
    Parse inbox file and add URLs to inbox_items table.

    Args:
        persona_name: Name of the persona
        inbox_file: Relative path to inbox file (e.g., "inbox/sources.txt")

    Returns:
        {added: N, skipped: N, errors: [str]}
    """
    db_path = get_db_path(persona_name)
    if not db_path.exists():
        raise ValueError(f"Database not found: {db_path}. Run init_db.py first.")

    persona_root = get_persona_root(persona_name)
    file_path = persona_root / inbox_file

    if not file_path.exists():
        raise ValueError(f"Inbox file not found: {file_path}")

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    added = 0
    skipped = 0
    errors = []

    lines = file_path.read_text(encoding="utf-8").split("\n")

    for i, line in enumerate(lines, 1):
        parsed = parse_inbox_line(line)

        if parsed is None:
            continue

        url = parsed.get("url")
        local_path = parsed.get("file_path")
        source_type = parsed.get("source_type")

        # Check for duplicate
        if url:
            cursor.execute("SELECT id FROM inbox_items WHERE url = ?", (url,))
        elif local_path:
            cursor.execute("SELECT id FROM inbox_items WHERE file_path = ?", (local_path,))

        if cursor.fetchone():
            skipped += 1
            continue

        try:
            cursor.execute("""
                INSERT INTO inbox_items (url, file_path, source_type, status)
                VALUES (?, ?, ?, 'pending')
            """, (url, local_path, source_type))
            added += 1
        except sqlite3.IntegrityError as e:
            errors.append(f"Line {i}: {str(e)}")
            skipped += 1

    conn.commit()
    conn.close()

    return {"added": added, "skipped": skipped, "errors": errors}


def get_inbox_status(persona_name: str) -> dict:
    """
    Get inbox status summary.

    Returns:
        {pending: N, acquired: N, skipped: N, total: N}
    """
    db_path = get_db_path(persona_name)
    if not db_path.exists():
        raise ValueError(f"Database not found: {db_path}")

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute("""
        SELECT status, COUNT(*) FROM inbox_items GROUP BY status
    """)

    counts = dict(cursor.fetchall())
    conn.close()

    return {
        "pending": counts.get("pending", 0),
        "acquired": counts.get("acquired", 0),
        "skipped": counts.get("skipped", 0),
        "total": sum(counts.values()),
    }


def get_pending_items(
    persona_name: str,
    source_type: Optional[str] = None,
    limit: int = 50,
) -> list[dict]:
    """
    Get pending inbox items.

    Args:
        persona_name: Name of the persona
        source_type: Optional filter by source type
        limit: Maximum items to return

    Returns:
        List of inbox item dicts
    """
    db_path = get_db_path(persona_name)
    if not db_path.exists():
        raise ValueError(f"Database not found: {db_path}")

    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    query = "SELECT * FROM inbox_items WHERE status = 'pending'"
    params = []

    if source_type:
        query += " AND source_type = ?"
        params.append(source_type)

    query += f" ORDER BY added_at LIMIT {limit}"

    cursor.execute(query, params)
    rows = cursor.fetchall()
    conn.close()

    return [dict(row) for row in rows]


def get_acquired_items(persona_name: str, limit: int = 100) -> list[dict]:
    """Get acquired inbox items with their linked source info."""
    db_path = get_db_path(persona_name)
    if not db_path.exists():
        raise ValueError(f"Database not found: {db_path}")

    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    cursor.execute("""
        SELECT i.*, s.title as source_title, s.file_path as source_file_path
        FROM inbox_items i
        LEFT JOIN sources s ON i.source_id = s.id
        WHERE i.status = 'acquired'
        ORDER BY i.processed_at DESC
        LIMIT ?
    """, (limit,))

    rows = cursor.fetchall()
    conn.close()

    return [dict(row) for row in rows]


def mark_acquired(persona_name: str, inbox_id: int, source_id: int) -> None:
    """
    Mark inbox item as acquired and link to source.

    Args:
        persona_name: Name of the persona
        inbox_id: ID of the inbox item
        source_id: ID of the created source
    """
    db_path = get_db_path(persona_name)
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute("""
        UPDATE inbox_items
        SET status = 'acquired', source_id = ?, processed_at = CURRENT_TIMESTAMP
        WHERE id = ?
    """, (source_id, inbox_id))

    if cursor.rowcount == 0:
        conn.close()
        raise ValueError(f"Inbox item not found: {inbox_id}")

    conn.commit()
    conn.close()


def mark_skipped(persona_name: str, inbox_id: int, reason: Optional[str] = None) -> None:
    """
    Mark inbox item as skipped.

    Args:
        persona_name: Name of the persona
        inbox_id: ID of the inbox item
        reason: Optional reason for skipping
    """
    db_path = get_db_path(persona_name)
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute("""
        UPDATE inbox_items
        SET status = 'skipped', notes = ?, processed_at = CURRENT_TIMESTAMP
        WHERE id = ?
    """, (reason, inbox_id))

    if cursor.rowcount == 0:
        conn.close()
        raise ValueError(f"Inbox item not found: {inbox_id}")

    conn.commit()
    conn.close()


def mark_skipped_bulk(persona_name: str, inbox_ids: list[int], reason: Optional[str] = None) -> int:
    """
    Mark multiple inbox items as skipped.

    Returns:
        Number of items updated
    """
    db_path = get_db_path(persona_name)
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    placeholders = ",".join("?" * len(inbox_ids))
    cursor.execute(f"""
        UPDATE inbox_items
        SET status = 'skipped', notes = ?, processed_at = CURRENT_TIMESTAMP
        WHERE id IN ({placeholders})
    """, [reason] + inbox_ids)

    updated = cursor.rowcount
    conn.commit()
    conn.close()

    return updated


def add_inbox_item(
    persona_name: str,
    url: Optional[str] = None,
    file_path: Optional[str] = None,
    title: Optional[str] = None,
    source_type: Optional[str] = None,
) -> int:
    """
    Manually add a single item to inbox.

    Args:
        persona_name: Name of the persona
        url: URL to acquire
        file_path: Local file path (if not URL)
        title: Optional title hint
        source_type: Type of source

    Returns:
        ID of created inbox item
    """
    if not url and not file_path:
        raise ValueError("Must provide either url or file_path")

    db_path = get_db_path(persona_name)
    if not db_path.exists():
        raise ValueError(f"Database not found: {db_path}")

    # Auto-detect source type from URL if not provided
    if not source_type and url:
        source_type = detect_source_type_from_url(url)

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO inbox_items (url, file_path, title, source_type, status)
        VALUES (?, ?, ?, ?, 'pending')
    """, (url, file_path, title, source_type))

    inbox_id = cursor.lastrowid
    conn.commit()
    conn.close()

    return inbox_id


def find_inbox_by_url(persona_name: str, url: str) -> Optional[dict]:
    """Find an inbox item by URL."""
    db_path = get_db_path(persona_name)
    if not db_path.exists():
        return None

    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM inbox_items WHERE url = ?", (url,))
    row = cursor.fetchone()
    conn.close()

    return dict(row) if row else None
