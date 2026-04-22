#!/usr/bin/env python3
"""
Purpose: Convert SRT subtitle files to clean markdown transcripts
Dependencies: None (stdlib only)

Usage:
  python srt-to-markdown.py <input.srt> [output.md]
  python srt-to-markdown.py <directory>  # converts all SRT files in directory

Example:
  python srt-to-markdown.py content/youtube/
"""

import sys
import re
from pathlib import Path


def parse_srt(content: str) -> list[str]:
    """Parse SRT content and extract text lines."""
    lines = []

    # Split into blocks (separated by blank lines)
    blocks = re.split(r'\n\s*\n', content)

    for block in blocks:
        block_lines = block.strip().split('\n')
        if len(block_lines) >= 3:
            # SRT format: index, timestamp, text (possibly multiple lines)
            # Skip index (line 0) and timestamp (line 1)
            text_lines = block_lines[2:]
            for line in text_lines:
                # Remove HTML-style tags like <c> </c>
                line = re.sub(r'<[^>]+>', '', line)
                # Remove timing tags like <00:00:00.000>
                line = re.sub(r'<\d{2}:\d{2}:\d{2}\.\d{3}>', '', line)
                line = line.strip()
                if line:
                    lines.append(line)

    return lines


def deduplicate_lines(lines: list[str]) -> list[str]:
    """Remove duplicate consecutive lines (common in auto-generated subs)."""
    if not lines:
        return []

    result = [lines[0]]
    for line in lines[1:]:
        # Check if this line is NOT a subset of the previous line
        # Auto-subs often show "word word" then "word word word"
        if line not in result[-1] and result[-1] not in line:
            result.append(line)
        elif len(line) > len(result[-1]):
            # Replace with longer version
            result[-1] = line

    return result


def merge_to_paragraphs(lines: list[str], sentences_per_paragraph: int = 6) -> list[str]:
    """Merge lines into paragraphs."""
    # First, join all lines
    text = ' '.join(lines)

    # Fix spacing issues
    text = re.sub(r'\s+', ' ', text)

    # Split into sentences
    sentences = re.split(r'(?<=[.!?])\s+', text)

    # Group into paragraphs
    paragraphs = []
    current = []

    for sentence in sentences:
        current.append(sentence)
        if len(current) >= sentences_per_paragraph:
            paragraphs.append(' '.join(current))
            current = []

    if current:
        paragraphs.append(' '.join(current))

    return paragraphs


def convert_srt_to_markdown(srt_path: Path) -> str:
    """Convert SRT file to markdown."""
    content = srt_path.read_text(encoding='utf-8', errors='ignore')

    # Extract title from filename
    title = srt_path.stem
    # Remove common suffixes
    title = re.sub(r'\.en$', '', title)
    # Clean up special characters that might have been escaped
    title = title.replace('：', ':').replace('｜', '|')

    # Parse and process
    lines = parse_srt(content)
    lines = deduplicate_lines(lines)
    paragraphs = merge_to_paragraphs(lines)

    # Format as markdown
    md = f"# {title}\n\n"
    md += '\n\n'.join(paragraphs)

    return md


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    input_path = Path(sys.argv[1])

    if input_path.is_dir():
        # Process all SRT files in directory
        srt_files = list(input_path.glob('*.srt'))
        print(f"Found {len(srt_files)} SRT files")

        for srt_file in srt_files:
            md_path = srt_file.with_suffix('.md')
            md_content = convert_srt_to_markdown(srt_file)
            md_path.write_text(md_content)
            word_count = len(md_content.split())
            print(f"Converted: {srt_file.name} -> {md_path.name} ({word_count} words)")

    elif input_path.suffix.lower() == '.srt':
        # Single file
        output_path = Path(sys.argv[2]) if len(sys.argv) > 2 else input_path.with_suffix('.md')
        md_content = convert_srt_to_markdown(input_path)
        output_path.write_text(md_content)
        print(f"Converted: {input_path.name} -> {output_path.name}")

    else:
        print(f"Error: {input_path} is not an SRT file or directory")
        sys.exit(1)


if __name__ == '__main__':
    main()
