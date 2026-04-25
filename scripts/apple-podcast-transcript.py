#!/usr/bin/env python3
"""
Purpose: Download and transcribe Apple Podcast episodes using OpenAI Whisper API
Dependencies:
  - openai (pip install openai)
  - requests (pip install requests)
  - ffmpeg (brew install ffmpeg)

Usage:
  python apple-podcast-transcript.py <apple_podcast_url> [output_dir]

Example:
  python apple-podcast-transcript.py "https://podcasts.apple.com/us/podcast/tobi-lutke/id1154105909?i=1000474333829" ./content/podcasts/
"""

import sys
import os
import re
import json
import subprocess
import tempfile
from datetime import date
from pathlib import Path

try:
    import requests
except ImportError:
    print("Error: requests not installed. Run: pip install requests")
    sys.exit(1)

try:
    from openai import OpenAI
except ImportError:
    print("Error: openai not installed. Run: pip install openai")
    sys.exit(1)


def extract_episode_info(apple_url: str) -> dict:
    """Extract podcast and episode IDs from Apple Podcast URL."""
    # Pattern: /podcast/.../id{podcast_id}?i={episode_id}
    podcast_match = re.search(r'/id(\d+)', apple_url)
    episode_match = re.search(r'[?&]i=(\d+)', apple_url)

    if not podcast_match or not episode_match:
        raise ValueError(f"Could not parse Apple Podcast URL: {apple_url}")

    return {
        'podcast_id': podcast_match.group(1),
        'episode_id': episode_match.group(1)
    }


def get_episode_metadata(podcast_id: str, episode_id: str) -> dict:
    """Fetch episode metadata from iTunes API, falling back to the podcast's RSS feed."""
    # Primary: direct episode lookup.
    url = f"https://itunes.apple.com/lookup?id={episode_id}&entity=podcastEpisode"
    response = requests.get(url, timeout=15)
    data = response.json()

    if data.get('resultCount', 0) > 0:
        return data['results'][0]

    # Secondary: list recent episodes for the podcast and match by trackId.
    # Limited to 200, so older episodes require the RSS-feed fallback below.
    url = f"https://itunes.apple.com/lookup?id={podcast_id}&entity=podcastEpisode&limit=200"
    response = requests.get(url, timeout=15)
    data = response.json()
    for result in data.get('results', []):
        if str(result.get('trackId')) == episode_id:
            return result

    # Tertiary: parse the podcast's RSS feed (handles older-than-200 episodes).
    feed_url = None
    for result in data.get('results', []):
        if 'feedUrl' in result:
            feed_url = result['feedUrl']
            break
    if not feed_url:
        raise ValueError(f"Episode {episode_id} not found and no feedUrl for podcast {podcast_id}")

    import xml.etree.ElementTree as ET
    feed_resp = requests.get(
        feed_url,
        timeout=30,
        headers={'User-Agent': 'Mozilla/5.0 (compatible; podcast-fetcher/1.0)'},
    )
    feed_resp.raise_for_status()
    root = ET.fromstring(feed_resp.content)
    # Loose title/ID match — most feeds don't publish iTunes trackId, so we locate
    # the episode by title fragment from the Apple page title when we can get it,
    # otherwise by hitting the iTunes page HTML for the title.
    page_resp = requests.get(
        f"https://podcasts.apple.com/us/podcast/id{podcast_id}?i={episode_id}",
        timeout=15,
        headers={'User-Agent': 'Mozilla/5.0 (compatible; podcast-fetcher/1.0)'},
    )
    page_title = ''
    m = re.search(r'<title[^>]*>([^<]+)</title>', page_resp.text)
    if m:
        page_title = m.group(1)
    # Normalize to the part before the show name.
    episode_title_hint = page_title.split(' - ')[0].strip() if page_title else ''

    ns = {'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'}
    for item in root.iter('item'):
        title_el = item.find('title')
        enclosure_el = item.find('enclosure')
        if title_el is None or enclosure_el is None:
            continue
        title_text = (title_el.text or '').strip()
        audio_url = enclosure_el.attrib.get('url', '')
        if episode_title_hint and episode_title_hint.split(':')[0].strip() in title_text:
            return {
                'trackName': title_text,
                'episodeUrl': audio_url,
                'releaseDate': '',
                'collectionName': '',
                'trackTimeMillis': 0,
            }

    raise ValueError(f"Episode {episode_id} not found via iTunes lookup or RSS feed for podcast {podcast_id}")


def download_audio(audio_url: str, output_path: Path) -> Path:
    """Download podcast audio file."""
    print(f"Downloading audio from: {audio_url[:80]}...")
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 '
                      '(KHTML, like Gecko) Version/17.0 Safari/605.1.15',
        'Accept': '*/*',
    }
    response = requests.get(
        audio_url,
        stream=True,
        headers=headers,
        allow_redirects=True,
        timeout=(15, 120),
    )
    response.raise_for_status()

    with open(output_path, 'wb') as f:
        for chunk in response.iter_content(chunk_size=1024 * 64):
            if chunk:
                f.write(chunk)

    return output_path


def convert_to_mp3(input_path: Path, output_path: Path) -> Path:
    """Convert audio to MP3 if needed (Whisper works best with MP3)."""
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


def transcribe_audio_with_retry(audio_path: Path, client: OpenAI, max_retries: int = 4) -> str:
    """Transcribe with exponential backoff on transient OpenAI errors (429, 500s)."""
    import time
    from openai import APIError, APIConnectionError, InternalServerError, RateLimitError
    attempt = 0
    while True:
        try:
            return transcribe_audio(audio_path, client)
        except (InternalServerError, RateLimitError, APIConnectionError) as e:
            attempt += 1
            if attempt > max_retries:
                raise
            wait = 2 ** attempt
            print(f"  Transient error ({type(e).__name__}); retrying in {wait}s (attempt {attempt}/{max_retries})")
            time.sleep(wait)


def transcribe_audio(audio_path: Path, client: OpenAI) -> str:
    """Transcribe audio using OpenAI Whisper API."""
    print(f"Transcribing: {audio_path.name}...")

    with open(audio_path, 'rb') as audio_file:
        transcript = client.audio.transcriptions.create(
            model="whisper-1",
            file=audio_file,
            response_format="text"
        )

    return transcript


def format_transcript(text: str, title: str, source_url: str) -> str:
    """Format transcript with canonical YAML frontmatter (per DOJO-PERSONA-
    PROCESS.md) followed by title and the transcript paragraphs. The
    frontmatter `source:` field is what tools/generate-manifest.py harvests."""
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
    # Remove/replace problematic characters
    name = re.sub(r'[<>:"/\\|?*]', '', name)
    name = re.sub(r'\s+', '-', name)
    name = name[:100]  # Limit length
    return name


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    apple_url = sys.argv[1]
    output_dir = Path(sys.argv[2]) if len(sys.argv) > 2 else Path('.')
    output_dir.mkdir(parents=True, exist_ok=True)

    # Initialize OpenAI client
    api_key = os.environ.get('OPENAI_API_KEY')
    if not api_key:
        print("Error: OPENAI_API_KEY environment variable not set")
        sys.exit(1)

    client = OpenAI(api_key=api_key)

    # Extract episode info
    print(f"Processing: {apple_url}")
    info = extract_episode_info(apple_url)
    print(f"Podcast ID: {info['podcast_id']}, Episode ID: {info['episode_id']}")

    # Get episode metadata
    print("Fetching episode metadata...")
    metadata = get_episode_metadata(info['podcast_id'], info['episode_id'])

    title = metadata.get('trackName', f"Episode-{info['episode_id']}")
    audio_url = metadata.get('episodeUrl')

    if not audio_url:
        print("Error: Could not find audio URL in episode metadata")
        print(f"Metadata: {json.dumps(metadata, indent=2)}")
        sys.exit(1)

    print(f"Episode: {title}")

    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = Path(tmpdir)

        # Download audio
        audio_ext = Path(audio_url.split('?')[0]).suffix or '.mp3'
        audio_path = tmpdir / f"episode{audio_ext}"
        download_audio(audio_url, audio_path)

        # Convert to MP3 if needed
        mp3_path = tmpdir / "episode.mp3"
        mp3_path = convert_to_mp3(audio_path, mp3_path)

        # Split if needed
        chunks = split_audio(mp3_path)

        # Transcribe all chunks
        transcripts = []
        for chunk in chunks:
            transcript = transcribe_audio_with_retry(chunk, client)
            transcripts.append(transcript)

        # Combine transcripts
        full_transcript = ' '.join(transcripts)
        formatted = format_transcript(full_transcript, title, apple_url)

        # Save
        safe_name = sanitize_filename(title)
        output_path = output_dir / f"{safe_name}.md"
        output_path.write_text(formatted)

        print(f"\nTranscript saved to: {output_path}")
        print(f"Word count: {len(full_transcript.split())}")


if __name__ == '__main__':
    main()
