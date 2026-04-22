#!/usr/bin/env python3
"""
Purpose: Scrape articles from marketingexamples.com
Dependencies: requests, beautifulsoup4

Fetches each article page, extracts text content and content image URLs,
downloads images, and saves structured markdown per article.

Example Input:
  urls.txt with one URL path per line (e.g. "copywriting/bou")

Expected Output:
  Per article: {slug}.md (text + image references) and images/{slug}/ directory
"""

import os
import re
import sys
import time
import json
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

BASE_URL = "https://marketingexamples.com"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
}


def fetch_article(path: str) -> dict:
    """Fetch an article and extract text + image URLs."""
    url = f"{BASE_URL}/{path}"
    resp = requests.get(url, headers=HEADERS, timeout=30)
    resp.raise_for_status()

    soup = BeautifulSoup(resp.text, "html.parser")

    # Extract title
    title_tag = soup.find("h1") or soup.find("h2")
    title = title_tag.get_text(strip=True) if title_tag else path

    # Extract category and read time from meta or page structure
    category = path.split("/")[0] if "/" in path else "unknown"

    # Find the main article content area
    # Marketing Examples uses various structures - try to find the article body
    article = soup.find("article") or soup.find("main") or soup.find("div", class_=re.compile(r"content|article|post|body"))

    # If no article container found, use body but exclude nav/footer
    if not article:
        article = soup.find("body")
        if article:
            for tag in article.find_all(["nav", "footer", "header", "script", "style"]):
                tag.decompose()

    # Extract all text paragraphs
    text_parts = []
    if article:
        for el in article.find_all(["p", "h1", "h2", "h3", "h4", "h5", "h6", "li", "blockquote"]):
            text = el.get_text(strip=True)
            if text and len(text) > 5:
                prefix = ""
                if el.name in ["h1", "h2", "h3", "h4", "h5", "h6"]:
                    level = int(el.name[1])
                    prefix = "#" * level + " "
                elif el.name == "li":
                    prefix = "- "
                elif el.name == "blockquote":
                    prefix = "> "
                text_parts.append(f"{prefix}{text}")

    # Extract content images (not UI/nav images)
    images = []
    if article:
        for img in article.find_all("img"):
            src = img.get("src", "") or img.get("data-src", "")
            if not src:
                continue
            # Skip tiny UI images, logos, icons
            if any(skip in src.lower() for skip in [
                "logo", "icon", "avatar", "mebits/q1", "mebits/tape",
                "mebits/tmm", "mebits/stars", "mebits/jf", "roast/fcc",
                "cebits/newsletter", "square.png"
            ]):
                continue
            # Skip thumbnail images from the article list at bottom
            if "/main/" in src and src.endswith(".jpg"):
                # These are typically article card thumbnails in the sidebar/footer
                # But the hero image also uses /main/ - keep the first one
                pass
            # Make absolute URL
            if src.startswith("//"):
                src = "https:" + src
            elif src.startswith("/"):
                src = BASE_URL + src
            alt = img.get("alt", "")
            images.append({"url": src, "alt": alt})

    # Deduplicate images by URL
    seen_urls = set()
    unique_images = []
    for img in images:
        if img["url"] not in seen_urls:
            seen_urls.add(img["url"])
            unique_images.append(img)

    # Filter: only keep images that are likely content (not sidebar article cards)
    # Content images tend to be from /newsletters/, /s3.amazonaws/, or the first /main/ image
    content_images = []
    main_count = 0
    for img in unique_images:
        url = img["url"]
        if "/main/" in url:
            main_count += 1
            if main_count <= 1:  # Keep only hero image from /main/
                content_images.append(img)
        else:
            content_images.append(img)

    return {
        "path": path,
        "url": url,
        "title": title,
        "category": category,
        "text": "\n\n".join(text_parts),
        "text_parts": text_parts,
        "images": content_images,
        "all_images": unique_images,
    }


def download_image(url: str, filepath: str) -> bool:
    """Download an image to a local file."""
    try:
        resp = requests.get(url, headers=HEADERS, timeout=30)
        resp.raise_for_status()
        with open(filepath, "wb") as f:
            f.write(resp.content)
        return True
    except Exception as e:
        print(f"  Failed to download {url}: {e}")
        return False


def save_article(article: dict, output_dir: str):
    """Save article text and images to disk."""
    slug = article["path"].replace("/", "-")
    article_dir = os.path.join(output_dir, slug)
    images_dir = os.path.join(article_dir, "images")
    os.makedirs(images_dir, exist_ok=True)

    # Download images
    downloaded_images = []
    for i, img in enumerate(article["images"]):
        ext = os.path.splitext(img["url"].split("?")[0])[1] or ".jpg"
        filename = f"img-{i+1}{ext}"
        filepath = os.path.join(images_dir, filename)
        if download_image(img["url"], filepath):
            downloaded_images.append({
                "filename": filename,
                "url": img["url"],
                "alt": img["alt"],
            })

    # Write markdown
    md_path = os.path.join(article_dir, "article.md")
    with open(md_path, "w", encoding="utf-8") as f:
        f.write(f"# {article['title']}\n\n")
        f.write(f"**Source:** {article['url']}\n")
        f.write(f"**Category:** {article['category']}\n\n")
        f.write("---\n\n")
        f.write("## Text Content\n\n")
        f.write(article["text"])
        f.write("\n\n")
        if downloaded_images:
            f.write("---\n\n")
            f.write("## Images\n\n")
            for img in downloaded_images:
                f.write(f"![{img['alt']}](images/{img['filename']})\n")
                f.write(f"*Source: {img['url']}*\n\n")

    # Write metadata JSON for later processing
    meta_path = os.path.join(article_dir, "meta.json")
    with open(meta_path, "w", encoding="utf-8") as f:
        json.dump({
            "path": article["path"],
            "url": article["url"],
            "title": article["title"],
            "category": article["category"],
            "text_word_count": len(article["text"].split()),
            "image_count": len(downloaded_images),
            "images": downloaded_images,
        }, f, indent=2)

    return len(downloaded_images)


def main():
    if len(sys.argv) != 3:
        print("Usage: python scrape-marketing-examples.py <urls.txt> <output_dir>")
        sys.exit(1)

    urls_file = sys.argv[1]
    output_dir = sys.argv[2]

    # Read URLs
    with open(urls_file, "r") as f:
        paths = [
            line.strip()
            for line in f
            if line.strip() and not line.strip().startswith("#")
        ]

    print(f"Found {len(paths)} article URLs")
    os.makedirs(output_dir, exist_ok=True)

    stats = {"total": 0, "success": 0, "failed": 0, "images": 0, "words": 0}

    for i, path in enumerate(paths):
        stats["total"] += 1
        print(f"\n[{i+1}/{len(paths)}] Fetching {path}...")
        try:
            article = fetch_article(path)
            word_count = len(article["text"].split())
            img_count = save_article(article, output_dir)
            stats["success"] += 1
            stats["images"] += img_count
            stats["words"] += word_count
            print(f"  OK: {word_count} words, {img_count} images")
            # Be polite
            time.sleep(0.5)
        except Exception as e:
            stats["failed"] += 1
            print(f"  FAILED: {e}")

    print(f"\n{'='*50}")
    print(f"Done! {stats['success']}/{stats['total']} articles scraped")
    print(f"Total words: {stats['words']:,}")
    print(f"Total images: {stats['images']}")
    if stats["failed"]:
        print(f"Failed: {stats['failed']}")


if __name__ == "__main__":
    main()
