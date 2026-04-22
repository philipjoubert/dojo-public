#!/usr/bin/env python3
"""
Purpose: Scrape the /inspiration gallery from marketingexamples.com
Dependencies: requests, beautifulsoup4

Fetches all pages from the lazy-loading API, extracts image URLs,
text overlays, and source links, then downloads all images.

Expected Output:
  inspiration/ directory with images and a manifest
"""

import html
import json
import os
import re
import sys
import time

import requests
from bs4 import BeautifulSoup

BASE_API = "https://marketingexamples.com/api/lazyceg/{page}/all"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
}


def fetch_page(page: int) -> str:
    """Fetch a single API page."""
    url = BASE_API.format(page=page)
    resp = requests.get(url, headers=HEADERS, timeout=30)
    if resp.status_code != 200 or len(resp.text.strip()) == 0:
        return ""
    return resp.text


def parse_items(page_html: str) -> list:
    """Parse inspiration items from API HTML response."""
    soup = BeautifulSoup(page_html, "html.parser")
    items = []

    for item_div in soup.find_all("div", class_="cegio"):
        entry = {}

        # Extract text from data-html attribute
        center = item_div.find("div", class_="cegi__center")
        if center and center.get("data-html"):
            decoded = html.unescape(center["data-html"])
            # Strip HTML for plain text
            text = re.sub(r"<[^>]+>", " ", decoded)
            text = re.sub(r"\s+", " ", text).strip()
            entry["text"] = text
            entry["html"] = decoded

        # Extract real image URL (not the square.png placeholder)
        # The real ceg image URL is in the item HTML but not in an img src
        item_html = str(item_div)
        ceg_match = re.search(
            r"https://ik\.imagekit\.io/o08ysq9vx/(?:life\d+|lifee?\d+)/ceg\d+\w*\.(?:png|jpg|svg)",
            item_html,
        )
        if ceg_match:
            entry["image_url"] = ceg_match.group(0)
            entry["image_filename"] = ceg_match.group(0).split("/")[-1]

        # Extract source link
        link = item_div.find("a", href=True)
        if link:
            href = link["href"]
            if href.startswith("http") and "imagekit" not in href:
                entry["source_url"] = href

        # Extract h/t credits
        ht = item_div.find("span", class_="cegdes")
        if ht:
            entry["credit"] = ht.get_text(strip=True)

        if entry.get("text") or entry.get("image_url"):
            items.append(entry)

    return items


def find_image_urls_in_html(page_html: str) -> list:
    """Find all real image URLs (not placeholders) in the API response."""
    # Match imagekit URLs that are NOT square.png
    urls = re.findall(
        r"https://ik\.imagekit\.io/o08ysq9vx/(?:life\d+|lifee?\d+)/ceg\d+\.(?:png|jpg|svg)",
        page_html,
    )
    return list(dict.fromkeys(urls))


def download_image(url: str, filepath: str) -> bool:
    """Download an image."""
    try:
        resp = requests.get(url, headers=HEADERS, timeout=30)
        resp.raise_for_status()
        with open(filepath, "wb") as f:
            f.write(resp.content)
        return True
    except Exception as e:
        print(f"  Failed: {url} -> {e}")
        return False


def main():
    if len(sys.argv) != 2:
        print("Usage: python scrape-inspiration.py <output_dir>")
        sys.exit(1)

    output_dir = sys.argv[1]
    images_dir = os.path.join(output_dir, "images")
    os.makedirs(images_dir, exist_ok=True)

    all_items = []
    all_image_urls = []

    # Fetch all pages
    for page in range(1, 60):
        print(f"Fetching page {page}...", end=" ")
        page_html = fetch_page(page)
        if not page_html:
            print("empty - done")
            break

        items = parse_items(page_html)
        image_urls = find_image_urls_in_html(page_html)

        print(f"{len(items)} items, {len(image_urls)} images")

        for item in items:
            item["page"] = page
        all_items.extend(items)
        all_image_urls.extend(image_urls)

        time.sleep(0.3)

    # Deduplicate image URLs
    all_image_urls = list(dict.fromkeys(all_image_urls))

    print(f"\nTotal items: {len(all_items)}")
    print(f"Total unique images: {len(all_image_urls)}")

    # Download all images
    print(f"\nDownloading {len(all_image_urls)} images...")
    downloaded = 0
    for i, url in enumerate(all_image_urls):
        filename = url.split("/")[-1]
        filepath = os.path.join(images_dir, filename)
        if os.path.exists(filepath):
            downloaded += 1
            continue
        if download_image(url, filepath):
            downloaded += 1
        if (i + 1) % 20 == 0:
            print(f"  {i+1}/{len(all_image_urls)} downloaded...")
            time.sleep(0.5)

    print(f"Downloaded {downloaded}/{len(all_image_urls)} images")

    # Save manifest
    manifest = {
        "total_items": len(all_items),
        "total_images": len(all_image_urls),
        "downloaded_images": downloaded,
        "items": all_items,
        "image_urls": all_image_urls,
    }

    manifest_path = os.path.join(output_dir, "manifest.json")
    with open(manifest_path, "w") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    # Also save a readable text version
    text_path = os.path.join(output_dir, "inspiration-text.md")
    with open(text_path, "w") as f:
        f.write("# Marketing Examples - Inspiration Gallery\n\n")
        f.write(f"Total items: {len(all_items)}\n")
        f.write(f"Total images: {len(all_image_urls)}\n\n---\n\n")
        for i, item in enumerate(all_items):
            f.write(f"## Item {i+1}\n\n")
            if item.get("text"):
                f.write(f"{item['text']}\n\n")
            if item.get("source_url"):
                f.write(f"**Source:** {item['source_url']}\n\n")
            if item.get("credit"):
                f.write(f"**Credit:** {item['credit']}\n\n")
            f.write("---\n\n")

    print(f"\nManifest: {manifest_path}")
    print(f"Text: {text_path}")


if __name__ == "__main__":
    main()
