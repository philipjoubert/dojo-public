#!/usr/bin/env python3
"""
Purpose: Transcribe a single long scanned-book PDF to clean markdown, running
         OpenAI vision calls in parallel across pages. Different from
         transcribe-ad.py (which parallelizes across documents, not pages).

Dependencies:
    pip: openai, python-dotenv
    system: poppler (pdfinfo, pdftoppm) — brew install poppler

Usage:
    python transcribe-book.py <pdf_path> <output_md> [--workers 10] [--dpi 200] [--model gpt-5-mini]
"""

import argparse
import base64
import os
import subprocess
import sys
import tempfile
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI

DEFAULT_MODEL = "gpt-5-mini"

SYSTEM_PROMPT = """You transcribe scanned book pages to clean markdown.

Rules:
- Transcribe body text VERBATIM. Preserve wording, capitalization, punctuation exactly as printed.
- Preserve chapter titles and section headings with markdown `#` / `##` / `###` matching hierarchy.
- Preserve paragraph breaks. Preserve italic with `*italic*` and bold with `**bold**` where visible.
- Preserve numbered lists, bulleted lists, and indented blocks.
- Render footnotes inline as `[^N]` with the note text at the bottom of the page output.
- SKIP running headers/footers, page numbers, publisher decorations — everything that repeats across pages without content.
- SKIP scan artifacts (faint marks, library stamps, handwritten notes unless clearly authorial).
- Preserve poetry / ad copy examples as block quotes when they appear.
- If text is truly illegible, mark `[illegible]`. Do not invent text.
- Output the page's content only. No wrapper like "Page N:" or "Transcription:". Start with the content itself.
- If the page is blank or contains only running headers, output exactly: `[blank page]`"""

USER_TEMPLATE = "Transcribe page {page_num} of {total}. Output only the page's content in markdown per your system prompt."


def pdf_to_images(pdf_path: Path, out_dir: Path, dpi: int) -> list[Path]:
    stem = pdf_path.stem
    subprocess.run(
        ["pdftoppm", "-png", "-r", str(dpi), str(pdf_path), str(out_dir / stem)],
        check=True,
        stderr=subprocess.DEVNULL,
    )
    return sorted(out_dir.glob(f"{stem}-*.png"))


def encode_image(path: Path) -> str:
    return base64.b64encode(path.read_bytes()).decode("utf-8")


def transcribe_page(client: OpenAI, model: str, image_path: Path, page_num: int, total: int) -> tuple[int, str, dict]:
    b64 = encode_image(image_path)
    resp = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": USER_TEMPLATE.format(page_num=page_num, total=total)},
                    {"type": "image_url", "image_url": {"url": f"data:image/png;base64,{b64}"}},
                ],
            },
        ],
    )
    text = resp.choices[0].message.content or ""
    usage = {
        "prompt": resp.usage.prompt_tokens if resp.usage else 0,
        "completion": resp.usage.completion_tokens if resp.usage else 0,
        "cached": (getattr(getattr(resp.usage, "prompt_tokens_details", None), "cached_tokens", 0) or 0),
    }
    return page_num, text, usage


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("pdf_path", type=Path)
    parser.add_argument("output_md", type=Path)
    parser.add_argument("--workers", type=int, default=10)
    parser.add_argument("--dpi", type=int, default=200)
    parser.add_argument("--model", default=DEFAULT_MODEL)
    args = parser.parse_args()

    load_dotenv(Path(__file__).parent / ".env")
    if not os.environ.get("OPENAI_API_KEY"):
        print("ERROR: OPENAI_API_KEY not set.")
        sys.exit(1)

    if not args.pdf_path.exists():
        print(f"PDF not found: {args.pdf_path}")
        sys.exit(1)

    args.output_md.parent.mkdir(parents=True, exist_ok=True)

    with tempfile.TemporaryDirectory() as td:
        print(f"Rasterizing {args.pdf_path.name} at {args.dpi} dpi...", flush=True)
        pages = pdf_to_images(args.pdf_path, Path(td), args.dpi)
        total = len(pages)
        print(f"Got {total} pages. Transcribing with {args.workers} workers, model {args.model}.\n", flush=True)

        client = OpenAI()
        results: dict[int, str] = {}
        totals = {"prompt": 0, "completion": 0, "cached": 0}
        failed: list[tuple[int, str]] = []

        with ThreadPoolExecutor(max_workers=args.workers) as pool:
            futures = {
                pool.submit(transcribe_page, client, args.model, img, i + 1, total): (i + 1, img)
                for i, img in enumerate(pages)
            }
            for fut in as_completed(futures):
                page_num, img = futures[fut]
                try:
                    n, text, usage = fut.result()
                    results[n] = text
                    for k, v in usage.items():
                        totals[k] += v
                    done = len(results) + len(failed)
                    print(f"  [{done}/{total}] page {n}: ok ({len(text)} chars)", flush=True)
                except Exception as e:
                    failed.append((page_num, str(e)))
                    print(f"  [!] page {page_num}: FAILED {e}", flush=True)

        ordered = [results.get(i, f"[page {i} missing — transcription failed]") for i in range(1, total + 1)]
        body = "\n\n".join(f"<!-- page {i} -->\n\n{text.strip()}" for i, text in enumerate(ordered, 1))
        args.output_md.write_text(body + "\n", encoding="utf-8")

        print(
            f"\n--- Summary ---\n"
            f"Transcribed: {len(results)}/{total}  Failed: {len(failed)}\n"
            f"Tokens — prompt: {totals['prompt']:,}  cached: {totals['cached']:,}  completion: {totals['completion']:,}\n"
            f"Output: {args.output_md}"
        )
        if failed:
            print("\nFailed pages:")
            for n, err in failed:
                print(f"  {n}: {err}")


if __name__ == "__main__":
    main()
