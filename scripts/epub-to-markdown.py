#!/usr/bin/env python3
"""
Purpose: Convert EPUB files to clean markdown
Dependencies: None (stdlib only)

Usage:
  python epub-to-markdown.py <epub_file_or_extracted_dir> <output.md>
  python epub-to-markdown.py book.epub output.md
  python epub-to-markdown.py /path/to/extracted/epub output.md
"""

import sys
import re
import zipfile
import tempfile
from pathlib import Path
from html.parser import HTMLParser
import xml.etree.ElementTree as ET


class XHTMLToMarkdown(HTMLParser):
    """Convert XHTML to markdown."""

    def __init__(self):
        super().__init__()
        self.text = []
        self.in_heading = False
        self.heading_level = 0
        self.skip_tags = {'script', 'style', 'nav', 'head'}
        self.skip = False
        self.list_depth = 0
        self.in_list_item = False

    def handle_starttag(self, tag, attrs):
        if tag in self.skip_tags:
            self.skip = True
        elif tag in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
            self.in_heading = True
            self.heading_level = int(tag[1])
            self.text.append('\n\n' + '#' * self.heading_level + ' ')
        elif tag == 'p':
            self.text.append('\n\n')
        elif tag == 'br':
            self.text.append('\n')
        elif tag in ('em', 'i'):
            self.text.append('*')
        elif tag in ('strong', 'b'):
            self.text.append('**')
        elif tag == 'blockquote':
            self.text.append('\n\n> ')
        elif tag in ('ul', 'ol'):
            self.list_depth += 1
            self.text.append('\n')
        elif tag == 'li':
            self.in_list_item = True
            indent = '  ' * (self.list_depth - 1)
            self.text.append(f'\n{indent}- ')

    def handle_endtag(self, tag):
        if tag in self.skip_tags:
            self.skip = False
        elif tag in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
            self.in_heading = False
            self.text.append('\n')
        elif tag in ('em', 'i'):
            self.text.append('*')
        elif tag in ('strong', 'b'):
            self.text.append('**')
        elif tag in ('ul', 'ol'):
            self.list_depth = max(0, self.list_depth - 1)
        elif tag == 'li':
            self.in_list_item = False

    def handle_data(self, data):
        if not self.skip:
            # Clean up whitespace
            data = re.sub(r'\s+', ' ', data)
            self.text.append(data)

    def get_markdown(self) -> str:
        text = ''.join(self.text)
        # Clean up multiple newlines
        text = re.sub(r'\n{3,}', '\n\n', text)
        return text.strip()


def convert_xhtml_to_markdown(xhtml_content: str) -> str:
    """Convert XHTML content to markdown."""
    parser = XHTMLToMarkdown()
    parser.feed(xhtml_content)
    return parser.get_markdown()


def get_spine_order(epub_dir: Path) -> list[Path]:
    """Get the reading order from the EPUB's content.opf file."""
    # Find content.opf (could be in OEBPS, OPS, or root)
    opf_file = None
    for pattern in ['**/content.opf', '**/*.opf']:
        matches = list(epub_dir.glob(pattern))
        if matches:
            opf_file = matches[0]
            break

    if not opf_file:
        # Fallback: just return all xhtml files sorted
        return sorted(epub_dir.glob('**/*.xhtml'))

    # Parse OPF to get spine order
    try:
        tree = ET.parse(opf_file)
        root = tree.getroot()

        # Handle namespaces
        ns = {'opf': 'http://www.idpf.org/2007/opf'}

        # Build manifest id -> href mapping
        manifest = {}
        for item in root.findall('.//opf:manifest/opf:item', ns):
            item_id = item.get('id')
            href = item.get('href')
            if item_id and href:
                manifest[item_id] = href

        # Get spine order
        spine_items = []
        for itemref in root.findall('.//opf:spine/opf:itemref', ns):
            idref = itemref.get('idref')
            if idref and idref in manifest:
                href = manifest[idref]
                full_path = opf_file.parent / href
                if full_path.exists():
                    spine_items.append(full_path)

        return spine_items if spine_items else sorted(epub_dir.glob('**/*.xhtml'))

    except Exception:
        # Fallback on error
        return sorted(epub_dir.glob('**/*.xhtml'))


def extract_epub(epub_path: Path, extract_dir: Path) -> None:
    """Extract EPUB file to directory."""
    with zipfile.ZipFile(epub_path, 'r') as zip_ref:
        zip_ref.extractall(extract_dir)


def convert_epub_to_markdown(epub_path: Path, output_path: Path) -> None:
    """Convert EPUB to markdown."""

    # Handle both .epub files and extracted directories
    if epub_path.suffix.lower() == '.epub':
        with tempfile.TemporaryDirectory() as tmpdir:
            extract_dir = Path(tmpdir)
            print(f"Extracting: {epub_path.name}")
            extract_epub(epub_path, extract_dir)
            _process_extracted(extract_dir, output_path, epub_path.stem)
    else:
        # Assume it's an extracted directory
        _process_extracted(epub_path, output_path, epub_path.name)


def _process_extracted(epub_dir: Path, output_path: Path, title: str) -> None:
    """Process extracted EPUB directory."""

    # Get files in reading order
    xhtml_files = get_spine_order(epub_dir)

    print(f"Found {len(xhtml_files)} content files")

    all_content = []
    all_content.append(f"# {title}\n")
    all_content.append("---\n")

    for xhtml_file in xhtml_files:
        print(f"Processing: {xhtml_file.name}")
        try:
            content = xhtml_file.read_text(encoding='utf-8', errors='ignore')
            md = convert_xhtml_to_markdown(content)
            if md and len(md) > 50:  # Skip nearly empty files
                all_content.append(md)
                all_content.append("\n\n---\n\n")
        except Exception as e:
            print(f"  Warning: {e}")

    full_text = '\n'.join(all_content)

    # Write output
    output_path.write_text(full_text)

    word_count = len(full_text.split())
    print(f"\nOutput: {output_path}")
    print(f"Word count: {word_count:,}")


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)

    epub_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2])

    if not epub_path.exists():
        print(f"Error: {epub_path} does not exist")
        sys.exit(1)

    convert_epub_to_markdown(epub_path, output_path)


if __name__ == '__main__':
    main()
