#!/usr/bin/env python3
"""
Purpose: Transcribe scanned-document PDFs (ads, clippings, letters) to clean
         markdown using OpenAI vision. Built for copywriting archives where
         faithful transcription matters more than description.

Dependencies:
    pip: openai, python-dotenv
    system: poppler (pdfinfo, pdftoppm) — brew install poppler

Usage:
    python transcribe-ad.py <pdf_dir> [--out <dir>] [--limit N] [--force] [--dpi 200] [--model gpt-5-mini]

Output:
    <out_dir>/<pdf_stem>.md — one markdown file per PDF (defaults to pdf_dir)
"""

import argparse
import base64
import os
import subprocess
import sys
import tempfile
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI

DEFAULT_MODEL = "gpt-5-mini"

SYSTEM_PROMPT = """You transcribe scanned documents — typically newspaper or magazine advertisements from the 1960s–80s, in the direct-response copywriting tradition (Eugene Schwartz, Gary Halbert, David Ogilvy, etc.).

Your job: produce a CLEAN, FAITHFUL transcription in markdown.

Rules:
- Transcribe text VERBATIM. Preserve wording, capitalization, punctuation exactly as printed.
- Preserve reading order: headline → deck/subhead → body copy → sidebars → captions → coupon/CTA.
- Use markdown:
    - `#` for the main headline
    - `##` for subheads and section heads ("Chapter One:", etc.)
    - Regular paragraphs for body copy
    - `>` for pull quotes
    - `**bold**` and `*italic*` where the original uses weight or italic
- Do NOT paraphrase, summarize, "clean up" grammar, or add commentary.
- Do NOT add wrapper headings like "Transcription:" or "Ad Copy:" — start directly with the content.
- Multi-column layouts: merge into a single continuous flow in natural reading order.
- Captions below images: render inline, prefixed with `*Caption:*`.
- Coupons / order forms at the bottom: render as a fenced block labelled "```coupon" so they're identifiable.
- Omit microfilm/archive metadata (page numbers, date stamps, ProQuest markers) UNLESS they appear inside the ad itself.
- If any text is truly illegible, mark `[illegible]`. Never invent text."""


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


def transcribe(client: OpenAI, model: str, image_paths: list[Path]) -> tuple[str, dict]:
    page_word = "page" if len(image_paths) == 1 else "pages"
    user_content: list[dict] = [
        {
            "type": "text",
            "text": f"Transcribe this scanned advertisement ({len(image_paths)} {page_word}). Produce the full text in markdown per the rules in your system prompt.",
        }
    ]
    for p in image_paths:
        b64 = encode_image(p)
        user_content.append(
            {
                "type": "image_url",
                "image_url": {"url": f"data:image/png;base64,{b64}"},
            }
        )

    resp = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_content},
        ],
    )
    text = resp.choices[0].message.content or ""
    usage = {
        "prompt": resp.usage.prompt_tokens if resp.usage else 0,
        "completion": resp.usage.completion_tokens if resp.usage else 0,
    }
    cached = getattr(getattr(resp.usage, "prompt_tokens_details", None), "cached_tokens", 0) or 0
    usage["cached"] = cached
    return text, usage


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("pdf_dir", type=Path, help="Directory of PDFs to transcribe")
    parser.add_argument("--out", type=Path, default=None, help="Output dir (default: pdf_dir)")
    parser.add_argument("--limit", type=int, default=None, help="Process only N PDFs")
    parser.add_argument("--force", action="store_true", help="Overwrite existing .md files")
    parser.add_argument("--dpi", type=int, default=200, help="Render DPI for PDF->PNG")
    parser.add_argument("--model", default=DEFAULT_MODEL, help=f"OpenAI model (default: {DEFAULT_MODEL})")
    args = parser.parse_args()

    load_dotenv(Path(__file__).parent / ".env")
    if not os.environ.get("OPENAI_API_KEY"):
        print("ERROR: OPENAI_API_KEY not set. Add it to scripts/.env or export it.")
        sys.exit(1)

    pdf_dir = args.pdf_dir.resolve()
    out_dir = (args.out or pdf_dir).resolve()
    out_dir.mkdir(parents=True, exist_ok=True)

    pdfs = sorted(pdf_dir.glob("*.pdf"))
    if args.limit:
        pdfs = pdfs[: args.limit]

    if not pdfs:
        print(f"No PDFs found in {pdf_dir}")
        sys.exit(0)

    print(f"Found {len(pdfs)} PDFs. Model: {args.model}. Output: {out_dir}\n")

    client = OpenAI()
    totals = {"prompt": 0, "completion": 0, "cached": 0}
    done = 0

    for i, pdf in enumerate(pdfs, 1):
        md_path = out_dir / f"{pdf.stem}.md"
        if md_path.exists() and not args.force:
            print(f"[{i}/{len(pdfs)}] skip (exists): {pdf.name}")
            continue

        with tempfile.TemporaryDirectory() as td:
            try:
                pages = pdf_to_images(pdf, Path(td), args.dpi)
            except subprocess.CalledProcessError as e:
                print(f"[{i}/{len(pdfs)}] {pdf.name} — pdftoppm failed: {e}")
                continue

            print(f"[{i}/{len(pdfs)}] {pdf.name} ({len(pages)}p)...", end=" ", flush=True)
            try:
                md, usage = transcribe(client, args.model, pages)
            except Exception as e:
                print(f"FAILED: {e}")
                continue

            md_path.write_text(md.strip() + "\n", encoding="utf-8")
            for k, v in usage.items():
                totals[k] += v
            print(
                f"ok ({len(md)} chars, prompt={usage['prompt']} "
                f"cached={usage['cached']} completion={usage['completion']})"
            )
            done += 1

    print(
        f"\n--- Summary ---\n"
        f"Transcribed: {done}/{len(pdfs)}\n"
        f"Tokens — prompt: {totals['prompt']:,}  cached: {totals['cached']:,}  "
        f"completion: {totals['completion']:,}"
    )


if __name__ == "__main__":
    main()
