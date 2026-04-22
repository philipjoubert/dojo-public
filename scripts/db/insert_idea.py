#!/usr/bin/env python3
"""
Purpose: Insert extracted idea with provenance linking.
Dependencies: sqlite3 (standard library), json, argparse

Example Input:
  python scripts/db/insert_idea.py --persona naval-ravikant \
    --type framework \
    --title "The Wealth Equation" \
    --content "Wealth = Specific Knowledge + Accountability + Leverage" \
    --use-when "Building long-term wealth" \
    --fails-when "Seeking quick money" \
    --chunk-id 5 \
    --quote "Each element is necessary. None is sufficient alone."

Expected Output:
  Inserts idea into ideas table
  Links to source chunk via idea_sources
  Updates extraction_status if all ideas from chunk are inserted
"""

import argparse
import json
import sqlite3
import sys
from pathlib import Path
from typing import Optional


# Valid enum values
IDEA_TYPES = ["framework", "principle", "technique", "anti_pattern", "story", "quote", "value", "assumption", "tradeoff", "hero", "villain"]
EVIDENCE_TYPES = ["data", "case_study", "expert_opinion", "assertion"]
ACTIONABILITY_TYPES = ["immediate", "tactical", "strategic", "theoretical"]


def get_db_path(persona_name: str) -> Path:
    """Get path to persona's database."""
    script_dir = Path(__file__).parent
    repo_root = script_dir.parent.parent
    return repo_root / "personas" / persona_name / "content" / "content.db"


def validate_enum(value: Optional[str], valid_values: list[str], field_name: str) -> None:
    """Validate that value is in valid_values or None."""
    if value is not None and value not in valid_values:
        raise ValueError(f"Invalid {field_name}: '{value}'. Must be one of: {valid_values}")


def insert_idea(
    persona_name: str,
    idea_type: str,
    content: str,
    title: Optional[str] = None,
    category: Optional[str] = None,
    use_when: Optional[str] = None,
    fails_when: Optional[str] = None,
    conditions: Optional[str] = None,
    evidence_type: Optional[str] = None,
    actionability: Optional[str] = None,
    needs_review: bool = False,
    chunk_id: Optional[int] = None,
    quote: Optional[str] = None,
    location: Optional[str] = None,
) -> int:
    """
    Insert an extracted idea with optional provenance linking.

    Args:
        persona_name: Name of the persona
        idea_type: Type of idea (framework, principle, technique, etc.)
        content: The actual idea content
        title: Optional short name
        category: Optional grouping
        use_when: Conditions where this applies
        fails_when: Failure modes
        conditions: JSON string with scope, scale, prerequisites
        evidence_type: Type of evidence
        actionability: How actionable
        needs_review: Flag for human review
        chunk_id: Source chunk ID for provenance
        quote: Relevant quote from source
        location: Page number, timestamp, etc.

    Returns:
        ID of the inserted idea
    """
    # Validate enums
    validate_enum(idea_type, IDEA_TYPES, "idea_type")
    validate_enum(evidence_type, EVIDENCE_TYPES, "evidence_type")
    validate_enum(actionability, ACTIONABILITY_TYPES, "actionability")

    db_path = get_db_path(persona_name)
    if not db_path.exists():
        raise ValueError(f"Database not found: {db_path}. Run init_db.py first.")

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    try:
        # Insert idea
        cursor.execute("""
            INSERT INTO ideas (
                idea_type, category, title, content,
                use_when, fails_when, conditions,
                evidence_type, actionability, needs_review
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            idea_type, category, title, content,
            use_when, fails_when, conditions,
            evidence_type, actionability, needs_review
        ))
        idea_id = cursor.lastrowid

        # Link to source chunk if provided
        if chunk_id is not None:
            # Verify chunk exists
            cursor.execute("SELECT id FROM chunks WHERE id = ?", (chunk_id,))
            if not cursor.fetchone():
                raise ValueError(f"Chunk not found: {chunk_id}")

            cursor.execute("""
                INSERT INTO idea_sources (idea_id, chunk_id, quote, location)
                VALUES (?, ?, ?, ?)
            """, (idea_id, chunk_id, quote, location))

        conn.commit()
        return idea_id

    except Exception as e:
        conn.rollback()
        raise e
    finally:
        conn.close()


def mark_chunk_extracted(persona_name: str, chunk_id: int, notes: Optional[str] = None) -> None:
    """Mark a chunk as extracted."""
    db_path = get_db_path(persona_name)
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute("""
        UPDATE extraction_status
        SET status = 'extracted', extracted_at = CURRENT_TIMESTAMP, notes = ?
        WHERE chunk_id = ?
    """, (notes, chunk_id))

    conn.commit()
    conn.close()


def main():
    parser = argparse.ArgumentParser(description="Insert extracted idea with provenance")
    parser.add_argument("--persona", required=True, help="Persona name")
    parser.add_argument("--type", required=True, choices=IDEA_TYPES, help="Idea type")
    parser.add_argument("--content", required=True, help="The actual idea content")
    parser.add_argument("--title", help="Optional short name")
    parser.add_argument("--category", help="Optional grouping")
    parser.add_argument("--use-when", help="Conditions where this applies")
    parser.add_argument("--fails-when", help="Failure modes")
    parser.add_argument("--conditions", help="JSON with scope, scale, prerequisites")
    parser.add_argument("--evidence-type", choices=EVIDENCE_TYPES, help="Type of evidence")
    parser.add_argument("--actionability", choices=ACTIONABILITY_TYPES, help="How actionable")
    parser.add_argument("--needs-review", action="store_true", help="Flag for human review")
    parser.add_argument("--chunk-id", type=int, help="Source chunk ID for provenance")
    parser.add_argument("--quote", help="Relevant quote from source")
    parser.add_argument("--location", help="Page number, timestamp, etc.")

    args = parser.parse_args()

    try:
        idea_id = insert_idea(
            persona_name=args.persona,
            idea_type=args.type,
            content=args.content,
            title=args.title,
            category=args.category,
            use_when=args.use_when,
            fails_when=args.fails_when,
            conditions=args.conditions,
            evidence_type=args.evidence_type,
            actionability=args.actionability,
            needs_review=args.needs_review,
            chunk_id=args.chunk_id,
            quote=args.quote,
            location=args.location,
        )
        print(f"Inserted idea with ID: {idea_id}")
    except ValueError as e:
        print(f"Error: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
