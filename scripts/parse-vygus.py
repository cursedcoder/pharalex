#!/usr/bin/env python3
"""
Parse the Vygus Middle Egyptian Dictionary (2018) PDF into structured word entries.

Uses PyMuPDF for font-aware extraction — the PDF uses distinct fonts for:
  - Transliteration (CIDFont+F1, ~12pt, italic)
  - Translation (CIDFont+F2, ~10pt, roman)
  - Grammar + Gardiner codes (CIDFont+F3, ~10pt, roman)

This eliminates the fragile ASCII heuristics previously used with pdftotext.

Usage:
  python3 scripts/parse-vygus.py [path/to/VYGUS_Dictionary_2018.pdf]

Output: public/data/words.json
"""

import sys
import os
import json
import re
from collections import Counter

try:
    import fitz  # PyMuPDF
except ImportError:
    print("ERROR: PyMuPDF required. Install with: pip3 install pymupdf", file=sys.stderr)
    sys.exit(1)

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_JSON = os.path.join(SCRIPT_DIR, "..", "public", "data", "words.json")

# ── Gardiner code pattern ─────────────────────────────────────────────────────
GARDINER_RE = re.compile(r'\b([A-Z][a-z]?[0-9]+[A-Za-z0-9]*)\b')

# ── Grammar normalisation ─────────────────────────────────────────────────────
GRAMMAR_MAP = [
    (r'\bverb\b', "VERB"),
    (r'\bnoun\b', "NOUN"),
    (r'\badjective\b', "ADJ"),
    (r'\badverb\b', "ADV"),
    (r'\bpreposition\b', "PREP"),
    (r'\bpronoun\b', "PRON"),
    (r'\bparticle\b', "PART"),
    (r'\bconjunction\b', "CONJ"),
    (r'\binterjection\b', "INTJ"),
    (r'\binterrogative\b', "INTG"),
    (r'\bimperative\b', "IMPR"),
    (r'\bnumber\b', "NUM"),
]

def normalise_grammar(raw):
    r = raw.lower().strip()
    for pattern, tag in GRAMMAR_MAP:
        if re.search(pattern, r):
            return tag
    return "OTHER"


# ── Font role discovery ───────────────────────────────────────────────────────

def discover_font_roles(doc):
    """Auto-discover which font maps to which role by analyzing size + frequency."""
    font_stats = Counter()
    for pn in range(10, min(100, len(doc))):
        page = doc[pn]
        for b in page.get_text("dict")["blocks"]:
            for line in b.get("lines", []):
                for span in line["spans"]:
                    key = (span["font"], round(span["size"], 1))
                    font_stats[key] += len(span["text"])

    by_size = {}
    for (font, size), count in font_stats.items():
        by_size.setdefault(size, []).append((font, count))

    sizes = sorted(by_size.keys(), reverse=True)
    if len(sizes) < 2:
        print("ERROR: Could not identify font roles", file=sys.stderr)
        sys.exit(1)

    translit_size = sizes[0]
    translit_font = max(by_size[translit_size], key=lambda x: x[1])[0]

    small_fonts = sorted(by_size[sizes[1]], key=lambda x: x[1], reverse=True)
    grammar_font = small_fonts[0][0]
    translation_font = small_fonts[1][0] if len(small_fonts) > 1 else small_fonts[0][0]

    print(f"Font roles:", file=sys.stderr)
    print(f"  Transliteration: {translit_font} ({translit_size}pt)", file=sys.stderr)
    print(f"  Translation:     {translation_font} ({sizes[1]}pt)", file=sys.stderr)
    print(f"  Grammar/codes:   {grammar_font} ({sizes[1]}pt)", file=sys.stderr)

    return {
        translit_font: "translit",
        translation_font: "translation",
        grammar_font: "grammar",
    }


# ── Entry parsing ─────────────────────────────────────────────────────────────

def parse_entry(translit_raw, translation_raw, grammar_codes_raw):
    """Parse font-separated fields into structured entries."""
    translit = re.sub(r'\s+', ' ', translit_raw).strip()
    translation = re.sub(r'\s+', ' ', translation_raw).strip()
    grammar_codes = re.sub(r'\s+', ' ', grammar_codes_raw).strip()

    if not translit:
        return []

    # Extract {notes} from all fields
    notes = []
    for field in [translit, translation, grammar_codes]:
        for m in re.finditer(r'\{([^}]*)\}', field):
            notes.append(m.group(1).strip())
    translit = re.sub(r'\{[^}]*\}', ' ', translit).strip()
    translation = re.sub(r'\{[^}]*\}', ' ', translation).strip()
    grammar_codes = re.sub(r'\{[^}]*\}', ' ', grammar_codes).strip()

    # Extract [grammar] from grammar_codes field
    grammar = None
    grammar_raw = None
    bracket_match = re.search(r'\[([^\]]+)\]', grammar_codes)
    if bracket_match:
        grammar_raw = bracket_match.group(1).strip()
        grammar = normalise_grammar(grammar_raw)
    # Also check translation field for brackets (some entries have grammar there)
    if not bracket_match:
        bracket_match = re.search(r'\[([^\]]+)\]', translation)
        if bracket_match:
            grammar_raw = bracket_match.group(1).strip()
            grammar = normalise_grammar(grammar_raw)
            translation = re.sub(r'\[[^\]]+\]', '', translation).strip()

    # Extract Gardiner codes from grammar_codes field
    codes_text = re.sub(r'\[[^\]]+\]', '', grammar_codes)
    gardiner_codes = GARDINER_RE.findall(codes_text)
    if not gardiner_codes:
        return []

    # Clean up transliteration
    translit = re.sub(r'\s*\?+$', '', translit).strip()
    translit = re.sub(r'\s+', ' ', translit).strip()

    # Clean up translation — strip brackets we already parsed
    translation = re.sub(r'\[[^\]]+\]', '', translation).strip()
    translation = re.sub(r'\s+', ' ', translation).strip()
    # Strip trailing/leading commas and whitespace
    translation = translation.strip(', ')

    if not translit or translit in ('?', '??'):
        return []
    if re.match(r'^[^a-zA-Z]+$', translit):
        return []

    # Handle slash alternates: "tsmt / tsmw" → two entries
    alt_translit = None
    slash_match = re.match(r'^(.+?)\s*/\s*(.+)$', translit)
    if slash_match:
        translit = slash_match.group(1).strip()
        alt_translit = slash_match.group(2).strip()

    # Strip trailing slash
    translit = re.sub(r'\s*/$', '', translit).strip()

    mdc = '-'.join(gardiner_codes)

    base = {
        "transliteration": translit,
        "translation": translation,
        "grammar": grammar,
        "grammarRaw": grammar_raw,
        "gardinerCodes": gardiner_codes,
        "mdc": mdc,
        "notes": notes,
    }

    results = [base]
    if alt_translit:
        results.append({**base, "transliteration": alt_translit})
    return results


# ── Main extraction ───────────────────────────────────────────────────────────

def extract_all(doc, font_roles):
    """Extract all dictionary entries from the PDF."""
    entries = []
    skipped = 0

    for pn in range(len(doc)):
        page = doc[pn]
        blocks = page.get_text("dict")["blocks"]

        for b in blocks:
            for line in b.get("lines", []):
                spans = line["spans"]
                if not spans:
                    continue

                translit_parts = []
                translation_parts = []
                grammar_parts = []

                for span in spans:
                    role = font_roles.get(span["font"])
                    text = span["text"]
                    if role == "translit":
                        translit_parts.append(text)
                    elif role == "translation":
                        translation_parts.append(text)
                    elif role == "grammar":
                        grammar_parts.append(text)
                    elif round(span["size"], 1) >= 11.5:
                        translit_parts.append(text)
                    else:
                        grammar_parts.append(text)

                translit = "".join(translit_parts).strip()
                translation = "".join(translation_parts).strip()
                grammar_codes = "".join(grammar_parts).strip()

                if not translit or not grammar_codes:
                    skipped += 1
                    continue

                parsed = parse_entry(translit, translation, grammar_codes)
                entries.extend(parsed)

    return entries, skipped


def main():
    default_pdf = os.path.expanduser("~/Downloads/VYGUS_Dictionary_2018.pdf")
    pdf_path = sys.argv[1] if len(sys.argv) > 1 else default_pdf

    if not os.path.exists(pdf_path):
        print(f"PDF not found: {pdf_path}", file=sys.stderr)
        print(f"Usage: python3 {sys.argv[0]} [path/to/VYGUS_Dictionary_2018.pdf]", file=sys.stderr)
        sys.exit(1)

    doc = fitz.open(pdf_path)
    print(f"Opened {pdf_path}: {len(doc)} pages", file=sys.stderr)

    font_roles = discover_font_roles(doc)
    entries, skipped = extract_all(doc, font_roles)

    print(f"Parsed: {len(entries)} entries, skipped {skipped} non-entry lines", file=sys.stderr)

    # Write compact JSON
    with open(OUTPUT_JSON, "w") as f:
        json.dump(entries, f, ensure_ascii=False)
    print(f"Words JSON written to {OUTPUT_JSON}", file=sys.stderr)

    # Grammar distribution
    grammar_counts = Counter(e.get("grammar") or "(none)" for e in entries)
    print("\nGrammar distribution:", file=sys.stderr)
    for k, v in grammar_counts.most_common():
        print(f"  {k:10s} {v}", file=sys.stderr)

    # Sample output
    print("\nFirst 3 entries:", file=sys.stderr)
    for e in entries[:3]:
        print(f"  {json.dumps(e)}", file=sys.stderr)
    print(f"\nLast 3 entries:", file=sys.stderr)
    for e in entries[-3:]:
        print(f"  {json.dumps(e)}", file=sys.stderr)


if __name__ == "__main__":
    main()
