# PharaLex — Glyph & Data Sources

This document describes where every glyph shape and every piece of dictionary data in PharaLex comes from, how it was obtained, and under what license it is used.

---

## Glyph Visual Sources

PharaLex displays **8,132 glyphs** with **100% SVG coverage**, drawn from four open-source glyph collections.

| # | Source | Glyphs | Coverage | How obtained | License |
|---|--------|-------:|----------|--------------|---------|
| 1 | **JSesh** | 6,725 | Gardiner A–Z + Aa + extended variants (classic corpus) | Cloned [`rosmord/jsesh`](https://github.com/rosmord/jsesh) on GitHub; SVGs live in `jseshGlyphs/src/main/resources/jseshGlyphs/` | LGPL-3.0 |
| 2 | **NewGardiner** (hierojax) | 997 | Unicode 16.0 Extended-A block (U+13460–U+143FF) | Cloned [`nederhof/hierojax`](https://github.com/nederhof/hierojax); extracted per-glyph SVGs from `docs/NewGardiner.ttf` using `fontTools` + `SVGPathPen` | GPL-3.0 |
| 3 | **Aegyptus 6.17** | 423 | Extended Hieroglyphica codes not present in JSesh | Downloaded Aegyptus 6.17 (last free release) from [dn-works.com/ufas](https://dn-works.com/ufas/); extracted SVGs from the TTF using `opentypesvg` | Free for personal/non-commercial use (older releases) |
| 4 | **Noto Sans Egyptian Hieroglyphs** | 109 | Rare basic-block codepoints (U+13000–U+1342F) not in JSesh | Downloaded `NotoSansEgyptianHieroglyphs-Regular.ttf` from [notofonts/egyptian-hieroglyphs](https://github.com/notofonts/egyptian-hieroglyphs); extracted SVGs using `opentypesvg` | OFL-1.1 |
| **Total** | | **8,132** | **100.0 %** | | |

### How SVG extraction works

For font-based sources (NewGardiner, Aegyptus, Noto), glyph outlines are extracted with Python:

```python
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen

font = TTFont("Font.ttf")
cmap = font.getBestCmap()
glyph_set = font.getGlyphSet()

for codepoint, glyph_name in cmap.items():
    glyph = glyph_set[glyph_name]
    pen = SVGPathPen(glyph_set)
    glyph.draw(pen)
    path_data = pen.getCommands()
    # Write SVG with Y-axis flip (fonts are bottom-up, SVG is top-down)
```

All extracted SVGs use `fill="currentColor"` so they respect the site's light/dark theme.

---

## Dictionary & Metadata Sources

Glyph names, meanings, transliterations, phonetic values, and Gardiner categorisation come from open datasets that were downloaded, parsed, and merged by the scripts in `scripts/`.

| Source | Records | What it provides | How obtained | License |
|--------|--------:|------------------|--------------|---------|
| **Vygus Middle Egyptian Dictionary** (2018) | 45,555 words | Complete Middle Egyptian word list with transliterations, translations, grammar, and hieroglyphic spellings (Gardiner codes) | Parsed from [PDF](http://www.pyramidtextsonline.com/documents/VygusDictionaryJune2018.pdf) with `scripts/parse-vygus.ts`; post-processed with `scripts/post-process-words.ts` | Academic |
| **Wiktionary Egyptian Dictionary** (kaikki.org) | 5,308 entries | Curated definitions with part-of-speech, glosses, and etymology | Downloaded JSONL from [kaikki.org](https://kaikki.org/dictionary/Ancient%20Egyptian/) and parsed with `scripts/process-data.ts` | CC BY-SA 3.0 |
| **Unicode Unikemet database** (Unicode 16.0) | 4,376 entries | Gardiner/Hieroglyphica codes, Unicode codepoints, phonetic values (`kEH_FVal`), descriptions (`kEH_Desc`), category (`kEH_Cat`), cross-references (`kEH_UniK`, `kEH_JSesh`) | Downloaded `Unikemet.txt` from [unicode.org](https://unicode.org/); parsed with `scripts/process-unikemet.ts` | Unicode License |
| **Aegyptus glyph list** | 3,900 entries | Additional Hieroglyphica sign codes (extended corpus beyond Unikemet) | Derived from Aegyptus font's character map; imported via `scripts/process-aegyptus.ts` | — |
| **JSesh sign descriptions** (`signs_description.xml`) | 6,783 entries | Shape/visual tags, additional phonetic transliterations with use/type metadata, composite part relationships | Cloned [`rosmord/jsesh`](https://github.com/rosmord/jsesh); parsed with `scripts/process-jsesh.ts` | LGPL-3.0 |
| **JSesh texts corpus** | 190 `.gly` files | Hieroglyphic quadrat patterns (94,652 sign pairs) for data-driven auto-quadding | From `jsesh-installer/src/binary/texts/`; parsed with `scripts/build-quad-index.ts` | CC BY (texts) |
| **St Andrews Unicode Sign List** | 1,071 entries | English physical descriptions, semantic uses (logogram/phonogram/determinative) with transliterations and translations | Downloaded from [mjn.host.cs.st-andrews.ac.uk](https://mjn.host.cs.st-andrews.ac.uk/egyptian/unicode/); parsed with `scripts/process-standrews.ts` | Academic open |
| **TLA Earlier Egyptian corpus** (v18) | 12,773 sentences | Attested text examples: hieroglyphs + transliteration + translation + date range, for Old/Middle Egyptian (~3000–1550 BCE) | Downloaded from [HuggingFace](https://huggingface.co/datasets/thesaurus-linguae-aegyptiae/tla-Earlier_Egyptian_original-v18-premium); parsed with `scripts/process-tla.ts` | CC BY-SA 4.0 |
| **TLA Late Egyptian corpus** (v19) | 3,606 sentences | Same as above for Late Egyptian period (~1550–700 BCE) | Downloaded from [HuggingFace](https://huggingface.co/datasets/thesaurus-linguae-aegyptiae/tla-late_egyptian-v19-premium); parsed with `scripts/process-tla.ts` | CC BY-SA 4.0 |
| **Combined glyphs** | **8,132** | All glyph data, deduplicated and merged by Gardiner code | Final output at `public/data/glyphs.json` | — |

---

## Data Pipeline

```
Vygus PDF                 → scripts/parse-vygus.ts         ─→ public/data/words.json (raw)
                          → scripts/post-process-words.ts  ─→ public/data/words.json (cleaned + auto-quadded)

kaikki.org JSONL          → scripts/process-data.ts        ─┐
Unicode Unikemet.txt      → scripts/process-unikemet.ts    ─┤
Aegyptus font cmap        → scripts/process-aegyptus.ts    ─┼→ public/data/glyphs.json
JSesh signs_description   → scripts/process-jsesh.ts       ─┤   → scripts/post-process-glyphs.ts
St Andrews sign list XMLs → scripts/process-standrews.ts   ─┘

JSesh .gly texts (190)    → scripts/build-quad-index.ts    ─→ public/data/quad-index.json
words.json                → scripts/build-word-relations.ts ─→ public/data/word-relations.json
words.json + glyphs.json  → scripts/build-search-index.ts  ─→ public/data/search-*.json

JSesh SVGs (repo)         ─┐
NewGardiner TTF extract   ─┤
Aegyptus TTF extract      ─┼→ public/glyphs/{code}.svg  (8,132 files)
Noto TTF extract          ─┘
```

---

## Licenses summary

| Asset | License | Commercial use |
|-------|---------|---------------|
| JSesh glyphs | LGPL-3.0 | Yes (with attribution) |
| JSesh sign descriptions | LGPL-3.0 | Yes (with attribution) |
| St Andrews sign list | Academic open | Non-commercial |
| TLA corpus (Earlier + Late Egyptian) | CC BY-SA 4.0 | Yes (with attribution) |
| NewGardiner / hierojax font | GPL-3.0 | Yes (with attribution) |
| Noto Sans Egyptian Hieroglyphs | OFL-1.1 | Yes |
| Aegyptus 6.17 (free release) | Freeware (non-commercial) | No |
| Wiktionary data | CC BY-SA 3.0 | Yes (with attribution) |
| Unicode Unikemet data | Unicode License | Yes |

> **Note:** Aegyptus 16.x (which adds full Unicode 16.0 Extended-A coverage at 99%) is a commercial product available at [dn-works.com/ufas](https://dn-works.com/ufas/). PharaLex uses the older free release (6.17) for a subset of signs, and the open-source NewGardiner font for the full Extended-A block.
