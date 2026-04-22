#!/usr/bin/env python3
"""
Purpose: Describe marketing example images using GPT-5.4 vision API
Dependencies: openai

Sends each image to GPT-5.4 with a marketing-focused prompt,
saves descriptions alongside the images.

Example Input:
  Directory of images (png/jpg/svg) + manifest.json

Expected Output:
  vision-descriptions.json with one description per image
"""

import base64
import json
import os
import sys
import time

from openai import OpenAI

SYSTEM_PROMPT = """You are a marketing analyst describing visual marketing examples for a copywriting knowledge base.

For each image, provide:
1. **What it shows** — Brand, type of content (ad, landing page, email, billboard, tweet, etc.), and what's visually present
2. **The copy/text** — Transcribe any text visible in the image exactly
3. **Why it's clever** — What marketing principle or copywriting technique makes this example noteworthy

Be specific and concise. Focus on the marketing insight, not general image description. If the image contains a before/after comparison, describe both sides."""

USER_PROMPT = """Describe this marketing example image. What does it show, what text is visible, and why is it a good marketing example?"""


def encode_image(filepath: str) -> tuple[str, str]:
    """Read and base64-encode an image file."""
    ext = os.path.splitext(filepath)[1].lower()
    media_type = {
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".webp": "image/webp",
    }.get(ext, "image/png")

    with open(filepath, "rb") as f:
        data = base64.b64encode(f.read()).decode("utf-8")
    return data, media_type


def describe_image(client: OpenAI, filepath: str, context: str = "") -> str:
    """Send an image to GPT-5.4 and get a marketing description."""
    data, media_type = encode_image(filepath)

    user_content = []
    if context:
        user_content.append({
            "type": "text",
            "text": f"Context from the page: {context}\n\n{USER_PROMPT}",
        })
    else:
        user_content.append({"type": "text", "text": USER_PROMPT})

    user_content.append({
        "type": "image_url",
        "image_url": {"url": f"data:{media_type};base64,{data}"},
    })

    response = client.chat.completions.create(
        model="gpt-5.4",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_content},
        ],
    )

    return response.choices[0].message.content


def main():
    if len(sys.argv) < 2:
        print("Usage: python vision-describe.py <images_dir> [manifest.json]")
        sys.exit(1)

    images_dir = sys.argv[1]
    manifest_path = sys.argv[2] if len(sys.argv) > 2 else None

    # Load manifest for context if available
    item_context = {}
    if manifest_path and os.path.exists(manifest_path):
        with open(manifest_path, "r") as f:
            manifest = json.load(f)
        # Build a map from image filename to context text
        for item in manifest.get("items", []):
            if item.get("image_url"):
                filename = item["image_url"].split("/")[-1]
                item_context[filename] = item.get("text", "")

    # Find all image files (skip SVGs - they often don't work well with vision)
    image_files = sorted([
        f for f in os.listdir(images_dir)
        if f.lower().endswith((".png", ".jpg", ".jpeg", ".gif", ".webp"))
    ])

    print(f"Found {len(image_files)} images to process")
    print(f"Context available for {len(item_context)} items")

    client = OpenAI()
    results = {}
    errors = []

    for i, filename in enumerate(image_files):
        filepath = os.path.join(images_dir, filename)
        context = item_context.get(filename, "")

        print(f"[{i+1}/{len(image_files)}] {filename}...", end=" ", flush=True)

        try:
            description = describe_image(client, filepath, context)
            results[filename] = {
                "filename": filename,
                "context": context,
                "description": description,
            }
            print(f"OK ({len(description)} chars)")
        except Exception as e:
            error_msg = str(e)
            errors.append({"filename": filename, "error": error_msg})
            print(f"FAILED: {error_msg[:100]}")

        # Rate limiting
        if (i + 1) % 10 == 0:
            time.sleep(1)

    # Save results
    output_path = os.path.join(os.path.dirname(images_dir), "vision-descriptions.json")
    with open(output_path, "w") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    # Also save as readable markdown
    md_path = os.path.join(os.path.dirname(images_dir), "vision-descriptions.md")
    with open(md_path, "w") as f:
        f.write("# Inspiration Gallery - Image Descriptions\n\n")
        f.write(f"Total described: {len(results)}\n")
        f.write(f"Failed: {len(errors)}\n\n---\n\n")
        for filename, data in sorted(results.items()):
            f.write(f"## {filename}\n\n")
            if data["context"]:
                f.write(f"**Page context:** {data['context']}\n\n")
            f.write(f"{data['description']}\n\n---\n\n")

    print(f"\n{'='*50}")
    print(f"Done! {len(results)}/{len(image_files)} described")
    print(f"Errors: {len(errors)}")
    print(f"Results: {output_path}")
    print(f"Markdown: {md_path}")

    # Print total word count
    total_words = sum(len(d["description"].split()) for d in results.values())
    print(f"Total words: {total_words:,}")


if __name__ == "__main__":
    main()
