#!/usr/bin/env python3
"""
Purpose: Generate a manifest of all scraped articles with their images,
         organized for batch vision processing.
Dependencies: none (just reads the filesystem)

Example Input:
  scraped/ directory from scrape-marketing-examples.py

Expected Output:
  manifest.json with all articles grouped for batch processing
"""

import json
import os
import sys


def build_manifest(scraped_dir: str) -> dict:
    """Build a manifest of all articles and their images."""
    articles = []

    for dirname in sorted(os.listdir(scraped_dir)):
        article_dir = os.path.join(scraped_dir, dirname)
        if not os.path.isdir(article_dir):
            continue

        meta_path = os.path.join(article_dir, "meta.json")
        article_path = os.path.join(article_dir, "article.md")

        if not os.path.exists(meta_path):
            continue

        with open(meta_path, "r") as f:
            meta = json.load(f)

        # Read article text
        text = ""
        if os.path.exists(article_path):
            with open(article_path, "r") as f:
                text = f.read()

        # List actual image files
        images_dir = os.path.join(article_dir, "images")
        image_files = []
        if os.path.isdir(images_dir):
            for img_file in sorted(os.listdir(images_dir)):
                if img_file.startswith("img-"):
                    full_path = os.path.join(images_dir, img_file)
                    size = os.path.getsize(full_path)
                    image_files.append({
                        "filename": img_file,
                        "path": full_path,
                        "size_bytes": size,
                    })

        articles.append({
            "slug": dirname,
            "path": meta.get("path", ""),
            "url": meta.get("url", ""),
            "title": meta.get("title", ""),
            "category": meta.get("category", ""),
            "text_word_count": meta.get("text_word_count", 0),
            "images": image_files,
            "image_count": len(image_files),
            "needs_vision": meta.get("text_word_count", 0) < 200,
        })

    return {
        "total_articles": len(articles),
        "total_images": sum(a["image_count"] for a in articles),
        "needs_vision_count": sum(1 for a in articles if a["needs_vision"]),
        "text_rich_count": sum(1 for a in articles if not a["needs_vision"]),
        "articles": articles,
    }


def main():
    if len(sys.argv) != 2:
        print("Usage: python describe-images.py <scraped_dir>")
        sys.exit(1)

    scraped_dir = sys.argv[1]
    manifest = build_manifest(scraped_dir)

    # Print summary
    print(f"Total articles: {manifest['total_articles']}")
    print(f"Total images: {manifest['total_images']}")
    print(f"Text-rich (200+ words): {manifest['text_rich_count']}")
    print(f"Needs vision (<200 words): {manifest['needs_vision_count']}")

    # Save manifest
    manifest_path = os.path.join(scraped_dir, "manifest.json")
    with open(manifest_path, "w") as f:
        json.dump(manifest, f, indent=2)
    print(f"\nManifest saved to {manifest_path}")

    # Print articles needing vision, grouped by image count
    print("\n--- Articles needing vision processing ---")
    vision_articles = [a for a in manifest["articles"] if a["needs_vision"]]
    for a in sorted(vision_articles, key=lambda x: x["image_count"], reverse=True):
        print(f"  {a['slug']:40s}  {a['text_word_count']:4d} words  {a['image_count']:2d} images")

    # Count total vision images
    vision_images = sum(a["image_count"] for a in vision_articles)
    print(f"\nTotal images needing vision: {vision_images}")


if __name__ == "__main__":
    main()
