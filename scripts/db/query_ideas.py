#!/usr/bin/env python3
"""
Purpose: Query extracted ideas by type, category, status.
Dependencies: sqlite3 (standard library), argparse

Example Input:
  python scripts/db/query_ideas.py --persona naval-ravikant --type framework
  python scripts/db/query_ideas.py --persona naval-ravikant --needs-review
  python scripts/db/query_ideas.py --persona naval-ravikant --stats

Expected Output:
  Lists matching ideas with source provenance
"""

import argparse
import sqlite3
import sys
from pathlib import Path


def get_db_path(persona_name: str) -> Path:
    """Get path to persona's database."""
    script_dir = Path(__file__).parent
    repo_root = script_dir.parent.parent
    return repo_root / "personas" / persona_name / "content" / "content.db"


def query_ideas(
    persona_name: str,
    idea_type: str = None,
    category: str = None,
    needs_review: bool = False,
    limit: int = 50,
) -> list[dict]:
    """
    Query ideas with optional filters.

    Returns:
        List of idea dictionaries with source info
    """
    db_path = get_db_path(persona_name)
    if not db_path.exists():
        raise ValueError(f"Database not found: {db_path}")

    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    # Build query
    query = """
        SELECT
            i.id,
            i.idea_type,
            i.title,
            i.content,
            i.category,
            i.use_when,
            i.fails_when,
            i.conditions,
            i.evidence_type,
            i.actionability,
            i.needs_review,
            i.review_decision,
            GROUP_CONCAT(s.title, ' | ') as sources,
            GROUP_CONCAT(isrc.quote, ' | ') as quotes
        FROM ideas i
        LEFT JOIN idea_sources isrc ON i.id = isrc.idea_id
        LEFT JOIN chunks c ON isrc.chunk_id = c.id
        LEFT JOIN sources s ON c.source_id = s.id
        WHERE 1=1
    """
    params = []

    if idea_type:
        query += " AND i.idea_type = ?"
        params.append(idea_type)

    if category:
        query += " AND i.category = ?"
        params.append(category)

    if needs_review:
        query += " AND i.needs_review = TRUE"

    query += f" GROUP BY i.id ORDER BY i.idea_type, i.created_at LIMIT {limit}"

    cursor.execute(query, params)
    rows = cursor.fetchall()
    conn.close()

    return [dict(row) for row in rows]


def get_stats(persona_name: str) -> dict:
    """Get summary statistics for the database."""
    db_path = get_db_path(persona_name)
    if not db_path.exists():
        raise ValueError(f"Database not found: {db_path}")

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    stats = {}

    # Source counts
    cursor.execute("SELECT COUNT(*) FROM sources")
    stats["total_sources"] = cursor.fetchone()[0]

    cursor.execute("SELECT source_type, COUNT(*) FROM sources GROUP BY source_type")
    stats["sources_by_type"] = dict(cursor.fetchall())

    # Chunk counts
    cursor.execute("SELECT COUNT(*) FROM chunks")
    stats["total_chunks"] = cursor.fetchone()[0]

    # Extraction status
    cursor.execute("SELECT status, COUNT(*) FROM extraction_status GROUP BY status")
    stats["extraction_status"] = dict(cursor.fetchall())

    # Idea counts
    cursor.execute("SELECT COUNT(*) FROM ideas")
    stats["total_ideas"] = cursor.fetchone()[0]

    cursor.execute("SELECT idea_type, COUNT(*) FROM ideas GROUP BY idea_type")
    stats["ideas_by_type"] = dict(cursor.fetchall())

    cursor.execute("SELECT COUNT(*) FROM ideas WHERE needs_review = TRUE")
    stats["needs_review"] = cursor.fetchone()[0]

    conn.close()
    return stats


def format_idea(idea: dict) -> str:
    """Format an idea for display."""
    lines = []
    lines.append(f"\n[{idea['idea_type'].upper()}] {idea['title'] or '(untitled)'}")
    lines.append(f"  Content: {idea['content'][:200]}{'...' if len(idea['content']) > 200 else ''}")

    if idea['use_when']:
        lines.append(f"  Use when: {idea['use_when'][:100]}")
    if idea['fails_when']:
        lines.append(f"  Fails when: {idea['fails_when'][:100]}")
    if idea['sources']:
        lines.append(f"  Sources: {idea['sources']}")
    if idea['needs_review']:
        lines.append(f"  [NEEDS REVIEW]")

    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(description="Query extracted ideas")
    parser.add_argument("--persona", required=True, help="Persona name")
    parser.add_argument("--type", help="Filter by idea type")
    parser.add_argument("--category", help="Filter by category")
    parser.add_argument("--needs-review", action="store_true", help="Show only items needing review")
    parser.add_argument("--stats", action="store_true", help="Show statistics instead of ideas")
    parser.add_argument("--limit", type=int, default=50, help="Maximum number of results")

    args = parser.parse_args()

    try:
        if args.stats:
            stats = get_stats(args.persona)
            print(f"\nDatabase Statistics for {args.persona}:")
            print(f"  Sources: {stats['total_sources']}")
            for stype, count in stats.get('sources_by_type', {}).items():
                print(f"    - {stype}: {count}")
            print(f"  Chunks: {stats['total_chunks']}")
            print(f"  Extraction Status:")
            for status, count in stats.get('extraction_status', {}).items():
                print(f"    - {status}: {count}")
            print(f"  Ideas: {stats['total_ideas']}")
            for itype, count in stats.get('ideas_by_type', {}).items():
                print(f"    - {itype}: {count}")
            print(f"  Needs Review: {stats['needs_review']}")
        else:
            ideas = query_ideas(
                persona_name=args.persona,
                idea_type=args.type,
                category=args.category,
                needs_review=args.needs_review,
                limit=args.limit,
            )

            if not ideas:
                print("No ideas found matching criteria")
            else:
                print(f"\nFound {len(ideas)} ideas:")
                for idea in ideas:
                    print(format_idea(idea))

    except ValueError as e:
        print(f"Error: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
