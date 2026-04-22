#!/usr/bin/env python3
"""
Purpose: Download and transcribe audio from any URL using OpenAI Whisper API
Dependencies:
  - openai (pip install openai)
  - yt-dlp (pip install yt-dlp) - handles SoundCloud, podcasts, direct URLs
  - ffmpeg (brew install ffmpeg)

Supports:
  - SoundCloud URLs
  - Direct audio file URLs (.mp3, .m4a, etc.)
  - Most podcast/audio platforms via yt-dlp

Usage:
  python transcribe-audio.py <audio_url> [output_dir] [--title "Custom Title"]

Examples:
  python transcribe-audio.py "https://soundcloud.com/factordaily/ep-06-naval-ravikant" ./content/podcasts/
  python transcribe-audio.py "https://example.com/podcast.mp3" ./output/ --title "My Podcast"
"""

import sys
import os
import re
import subprocess
import tempfile
import argparse
from datetime import date
from pathlib import Path

# Load .env file if present
try:
    from dotenv import load_dotenv
    # Check script directory, parent (personas root), and current directory
    script_dir = Path(__file__).parent
    for env_path in [script_dir / '.env', script_dir.parent / '.env', Path('.env')]:
        if env_path.exists():
            load_dotenv(env_path)
            break
except ImportError:
    pass  # dotenv not installed, rely on environment

try:
    from openai import OpenAI
except ImportError:
    print("Error: openai not installed. Run: pip install openai")
    sys.exit(1)


def download_audio_ytdlp(url: str, output_path: Path) -> tuple[Path, str]:
    """Download audio using yt-dlp. Returns (audio_path, title)."""
    print(f"Downloading audio from: {url[:80]}...")

    # First get the title
    result = subprocess.run([
        'yt-dlp', '--get-title', url
    ], capture_output=True, text=True)

    title = result.stdout.strip() if result.returncode == 0 else "Unknown"

    # Download audio only, convert to mp3
    audio_path = output_path / "audio.mp3"
    subprocess.run([
        'yt-dlp',
        '-x',  # Extract audio
        '--audio-format', 'mp3',
        '--audio-quality', '128K',
        '-o', str(audio_path.with_suffix('')),  # yt-dlp adds extension
        url
    ], check=True)

    # yt-dlp might create audio.mp3 or audio.mp3.mp3, find it
    possible_paths = [
        output_path / "audio.mp3",
        output_path / "audio.mp3.mp3",
    ]
    for p in possible_paths:
        if p.exists():
            return p, title

    # Fallback: find any mp3
    mp3s = list(output_path.glob("*.mp3"))
    if mp3s:
        return mp3s[0], title

    raise FileNotFoundError(f"Could not find downloaded audio in {output_path}")


def download_direct_url(url: str, output_path: Path) -> Path:
    """Download audio from direct URL using curl."""
    import requests

    print(f"Downloading audio from: {url[:80]}...")
    response = requests.get(url, stream=True)
    response.raise_for_status()

    # Determine extension from URL or content-type
    ext = Path(url.split('?')[0]).suffix or '.mp3'
    audio_path = output_path / f"audio{ext}"

    with open(audio_path, 'wb') as f:
        for chunk in response.iter_content(chunk_size=8192):
            f.write(chunk)

    return audio_path


def convert_to_mp3(input_path: Path, output_path: Path) -> Path:
    """Convert audio to MP3 if needed."""
    if input_path.suffix.lower() == '.mp3':
        return input_path

    print(f"Converting to MP3...")
    subprocess.run([
        'ffmpeg', '-i', str(input_path),
        '-acodec', 'libmp3lame', '-ab', '128k',
        '-y', str(output_path)
    ], check=True, capture_output=True)

    return output_path


def split_audio(audio_path: Path, max_size_mb: int = 24) -> list[Path]:
    """Split audio into chunks if larger than max_size_mb (Whisper has 25MB limit)."""
    file_size_mb = audio_path.stat().st_size / (1024 * 1024)

    if file_size_mb <= max_size_mb:
        return [audio_path]

    print(f"Audio file is {file_size_mb:.1f}MB, splitting into chunks...")

    # Get duration
    result = subprocess.run([
        'ffprobe', '-v', 'error', '-show_entries', 'format=duration',
        '-of', 'default=noprint_wrappers=1:nokey=1', str(audio_path)
    ], capture_output=True, text=True)
    duration = float(result.stdout.strip())

    # Calculate chunk duration (aim for ~20MB chunks)
    num_chunks = int(file_size_mb / 20) + 1
    chunk_duration = duration / num_chunks

    chunks = []
    for i in range(num_chunks):
        start_time = i * chunk_duration
        chunk_path = audio_path.parent / f"{audio_path.stem}_chunk{i:03d}.mp3"

        subprocess.run([
            'ffmpeg', '-i', str(audio_path),
            '-ss', str(start_time), '-t', str(chunk_duration),
            '-acodec', 'libmp3lame', '-ab', '128k',
            '-y', str(chunk_path)
        ], check=True, capture_output=True)

        chunks.append(chunk_path)

    return chunks


def transcribe_audio(audio_path: Path, client: OpenAI, chunk_num: int = 0, total_chunks: int = 1, max_retries: int = 3, model: str = "whisper-1") -> str:
    """Transcribe audio using OpenAI Whisper / gpt-4o-transcribe API with retry logic."""
    progress = f"[{chunk_num + 1}/{total_chunks}]" if total_chunks > 1 else ""
    print(f"Transcribing {progress}: {audio_path.name} (model={model})...")

    for attempt in range(max_retries):
        try:
            with open(audio_path, 'rb') as audio_file:
                transcript = client.audio.transcriptions.create(
                    model=model,
                    file=audio_file,
                    response_format="text"
                )
            return transcript
        except Exception as e:
            if attempt < max_retries - 1:
                wait_time = (attempt + 1) * 5  # 5s, 10s, 15s
                print(f"  Retry {attempt + 1}/{max_retries} after error: {e}")
                import time
                time.sleep(wait_time)
            else:
                print(f"  Failed after {max_retries} attempts: {e}")
                raise


def format_transcript(text: str, title: str, source_url: str) -> str:
    """Format transcript with canonical YAML frontmatter (per DOJO-PERSONA-
    PROCESS.md) followed by title and transcript paragraphs. The frontmatter
    `source:` field is what tools/generate-manifest.py harvests."""
    sentences = re.split(r'(?<=[.!?])\s+', text)
    paragraphs = []
    current = []
    for i, sentence in enumerate(sentences):
        current.append(sentence)
        if len(current) >= 6 or i == len(sentences) - 1:
            paragraphs.append(' '.join(current))
            current = []

    safe_title = title.replace('\n', ' ').strip()
    frontmatter = (
        "---\n"
        f"source: {source_url}\n"
        f"title: {safe_title}\n"
        f"fetched: {date.today().isoformat()}\n"
        "---\n\n"
    )
    return frontmatter + f"# {safe_title}\n\n" + '\n\n'.join(paragraphs)


def sanitize_filename(name: str) -> str:
    """Create a safe filename from title."""
    name = re.sub(r'[<>:"/\\|?*]', '', name)
    name = re.sub(r'\s+', '-', name)
    name = name[:100]
    return name


def is_direct_audio_url(url: str) -> bool:
    """Check if URL points directly to an audio file."""
    audio_extensions = ['.mp3', '.m4a', '.wav', '.ogg', '.flac', '.aac']
    url_path = url.split('?')[0].lower()
    return any(url_path.endswith(ext) for ext in audio_extensions)


def main():
    parser = argparse.ArgumentParser(description='Transcribe audio from any URL or local file')
    parser.add_argument('source', help='Audio URL (SoundCloud, direct audio, etc.) OR local file path (.mp3, .m4a, .m4b, .wav, .ogg, .flac, .aac)')
    parser.add_argument('output_dir', nargs='?', default='.', help='Output directory')
    parser.add_argument('--title', help='Custom title for the transcript')
    parser.add_argument('--model', default='whisper-1', help='OpenAI audio model: whisper-1 (default, $0.006/min), gpt-4o-transcribe ($0.006/min), gpt-4o-mini-transcribe ($0.003/min)')
    args = parser.parse_args()

    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    # Initialize OpenAI client
    api_key = os.environ.get('OPENAI_API_KEY')
    if not api_key:
        print("Error: OPENAI_API_KEY environment variable not set")
        sys.exit(1)

    client = OpenAI(api_key=api_key)

    # Detect local file vs URL
    local_path = Path(args.source).expanduser()
    is_local_file = local_path.exists() and local_path.is_file()

    print(f"Processing: {args.source}")
    print(f"Model: {args.model}")

    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = Path(tmpdir)

        # Acquire audio
        if is_local_file:
            print(f"Using local file: {local_path}")
            audio_path = local_path
            title = args.title or local_path.stem
            source_ref = local_path.name  # filename used as `source:` in frontmatter (per book convention)
        elif is_direct_audio_url(args.source):
            audio_path = download_direct_url(args.source, tmpdir)
            title = args.title or Path(args.source).stem
            source_ref = args.source
        else:
            # Use yt-dlp for SoundCloud, podcasts, etc.
            audio_path, title = download_audio_ytdlp(args.source, tmpdir)
            if args.title:
                title = args.title
            source_ref = args.source

        print(f"Title: {title}")

        # Convert to MP3 if needed
        mp3_path = tmpdir / "converted.mp3"
        mp3_path = convert_to_mp3(audio_path, mp3_path)

        # Split if needed
        chunks = split_audio(mp3_path)

        # Transcribe all chunks
        transcripts = []
        total_chunks = len(chunks)
        for i, chunk in enumerate(chunks):
            transcript = transcribe_audio(chunk, client, chunk_num=i, total_chunks=total_chunks, model=args.model)
            transcripts.append(transcript)

        # Combine transcripts
        full_transcript = ' '.join(transcripts)
        formatted = format_transcript(full_transcript, title, source_ref)

        # Save
        safe_name = sanitize_filename(title)
        output_path = output_dir / f"{safe_name}.md"
        output_path.write_text(formatted)

        print(f"\nTranscript saved to: {output_path}")
        print(f"Word count: {len(full_transcript.split())}")


if __name__ == '__main__':
    main()
