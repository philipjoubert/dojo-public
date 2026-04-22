#!/usr/bin/env python3
"""
Purpose: Convert VTT subtitle files to clean markdown transcripts.
Dependencies: yt-dlp (for fetching video titles)

Example Input:
  Directory with .vtt files from yt-dlp

Expected Output:
  Markdown files with title, video URL, and cleaned transcript text
"""

import os
import re
import subprocess
import sys

def get_video_title(video_id: str) -> str:
    """Fetch video title from YouTube."""
    try:
        result = subprocess.run(
            ['yt-dlp', '--get-title', f'https://www.youtube.com/watch?v={video_id}'],
            capture_output=True, text=True, timeout=30
        )
        return result.stdout.strip() or "Unknown Title"
    except:
        return "Unknown Title"

def clean_vtt(content: str) -> str:
    """Remove VTT formatting and clean up transcript text."""
    # Remove WEBVTT header
    content = re.sub(r'^WEBVTT\n.*?\n\n', '', content, flags=re.DOTALL)

    # Remove timestamps (00:00:00.000 --> 00:00:00.000)
    content = re.sub(r'\d+:\d+:\d+\.\d+ --> \d+:\d+:\d+\.\d+.*\n', '', content)

    # Remove position markers and tags
    content = re.sub(r'<\d+:\d+:\d+\.\d+>|</?c>', '', content)

    # Remove duplicate consecutive lines
    lines = content.split('\n')
    seen = set()
    clean_lines = []
    for line in lines:
        line = line.strip()
        if line and line not in seen:
            seen.add(line)
            clean_lines.append(line)

    # Join into flowing text
    text = ' '.join(clean_lines)
    text = re.sub(r'\s+', ' ', text)

    return text.strip()

def convert_directory(directory: str):
    """Convert all VTT files in directory to markdown."""
    vtt_files = sorted([f for f in os.listdir(directory) if f.endswith('.vtt')])

    if not vtt_files:
        print(f"No VTT files found in {directory}")
        return

    print(f"Found {len(vtt_files)} VTT files")

    for vtt_file in vtt_files:
        # Extract video ID from filename
        video_id = vtt_file.replace('.en.vtt', '').replace('.vtt', '')
        md_file = os.path.join(directory, f"{video_id}.md")
        vtt_path = os.path.join(directory, vtt_file)

        # Get title
        title = get_video_title(video_id)
        print(f"Converting: {video_id} -> {title}")

        # Read and clean VTT
        with open(vtt_path, 'r', encoding='utf-8') as f:
            content = f.read()

        cleaned_text = clean_vtt(content)

        # Write markdown
        with open(md_file, 'w', encoding='utf-8') as f:
            f.write(f"# {title}\n\n")
            f.write(f"**Video:** https://www.youtube.com/watch?v={video_id}\n\n")
            f.write("---\n\n")
            f.write(cleaned_text)
            f.write("\n")

    md_count = len([f for f in os.listdir(directory) if f.endswith('.md')])
    print(f"\nConverted {md_count} files")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python vtt-to-markdown.py <directory>")
        sys.exit(1)

    directory = sys.argv[1]
    if not os.path.isdir(directory):
        print(f"Error: {directory} is not a directory")
        sys.exit(1)

    convert_directory(directory)
