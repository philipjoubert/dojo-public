#!/usr/bin/env python3
"""
Purpose: Initialize a persona's SQLite database from schema.
Dependencies: sqlite3 (standard library)

Example Input:
  python scripts/db/init_db.py naval-ravikant

Expected Output:
  Creates personas/naval-ravikant/content/content.db with all tables
"""

import sqlite3
import sys
from pathlib import Path


def get_paths(persona_name: str) -> tuple[Path, Path, Path]:
    """Get paths for persona root, db file, and schema file."""
    script_dir = Path(__file__).parent
    repo_root = script_dir.parent.parent
    persona_root = repo_root / "personas" / persona_name
    db_path = persona_root / "content" / "content.db"
    schema_path = script_dir / "schema.sql"
    return persona_root, db_path, schema_path


def init_db(persona_name: str, force: bool = False) -> Path:
    """
    Initialize database for a persona.

    Args:
        persona_name: Name of the persona (e.g., 'naval-ravikant')
        force: If True, delete existing database first

    Returns:
        Path to the created database
    """
    persona_root, db_path, schema_path = get_paths(persona_name)

    # Validate persona exists
    if not persona_root.exists():
        raise ValueError(f"Persona not found: {persona_root}")

    # Validate schema exists
    if not schema_path.exists():
        raise ValueError(f"Schema not found: {schema_path}")

    # Handle existing database
    if db_path.exists():
        if force:
            db_path.unlink()
            print(f"Removed existing database: {db_path}")
        else:
            raise ValueError(f"Database already exists: {db_path}. Use --force to overwrite.")

    # Ensure content directory exists
    db_path.parent.mkdir(parents=True, exist_ok=True)

    # Create database and run schema
    conn = sqlite3.connect(db_path)
    conn.executescript(schema_path.read_text())
    conn.commit()
    conn.close()

    print(f"Initialized database: {db_path}")
    return db_path


def main():
    if len(sys.argv) < 2:
        print("Usage: python scripts/db/init_db.py <persona-name> [--force]")
        print("Example: python scripts/db/init_db.py naval-ravikant")
        sys.exit(1)

    persona_name = sys.argv[1]
    force = "--force" in sys.argv

    try:
        init_db(persona_name, force=force)
    except ValueError as e:
        print(f"Error: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
