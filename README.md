# PharaLex

**An open Egyptian hieroglyph dictionary** — 8,132 glyphs with full SVG coverage, 45,555 dictionary words, meanings, transliterations, phonetic values, and attested text examples from ancient corpora.

**[pharalex.app](https://pharalex.app)**

---

## Features

- **8,132 hieroglyphs** with 100% SVG coverage — every glyph renders sharply at any size
- **45,555 dictionary words** from the Vygus Middle Egyptian dictionary with auto-quadded hieroglyphic spellings
- **Wiktionary definitions** — 5,308 curated entries with part-of-speech, glosses, and etymology
- **Unified glyph data** — Gardiner codes, Unicode codepoints, phonetic values, physical descriptions, logogram/phonogram/determinative uses, and cross-references from six open datasets
- **Hieroglyphic quadrat rendering** — proper vertical stacking and horizontal grouping learned from 190 JSesh-authored texts
- **Related words** — 76,000+ weighted links connecting words by root, shared signs, and meaning
- **Pharaohs database** — 300+ rulers across 30+ dynasties with timeline and list views
- **Ancient text reader** — line-by-line hieroglyphic texts with interactive glyph tooltips
- **Full-text search** — Words and Glyphs tabs with grouped results and smart query detection
- **Gardiner categories** — all 26 thematic groups (Men, Women, Birds, Reptiles, etc.)
- **Hieroglyphic alphabet** — phonetic reference table for the 24 uniliteral signs
- Light and dark themes with no flash on load

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — search, featured glyphs, category grid |
| `/browse` | Virtualized grid of all 8,132 glyphs with filtering |
| `/glyph/[code]` | Glyph detail — SVG, Wiktionary meanings, phonetics, related words, related glyphs |
| `/words/[slug]` | Word detail — all senses, hieroglyphic spellings with quadrat rendering, related words |
| `/search` | Search with Words/Glyphs tabs, grouped results, sticky nav |
| `/texts/[slug]` | Ancient text reader with line-by-line hieroglyphs and tooltips |
| `/categories` | All 26 Gardiner categories |
| `/categories/[id]` | Glyphs within a category |
| `/alphabet` | Uniliteral (single-consonant) sign table |
| `/pharaohs` | Pharaohs browser — timeline and list views |
| `/pharaohs/[slug]` | Pharaoh detail page |
| `/acknowledgments` | Full attribution for every data and glyph source |

---

## Tech Stack

- **[Next.js 15](https://nextjs.org/)** — App Router, force-static pages, deployed on Cloudflare Workers
- **[React 19](https://react.dev/)**
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first, no component library
- **[TanStack Virtual](https://tanstack.com/virtual)** — windowed rendering for large glyph grids
- **[Fuse.js](https://www.fusejs.io/)** — fuzzy full-text search
- **[fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)** — parsing JSesh and St Andrews XML datasets
- **Fonts** — Cormorant Garamond (display), Source Serif 4 (body), Noto Sans Egyptian Hieroglyphs (glyphs)

---

## Data Sources

All glyph SVGs and dictionary data come from open-source and open-data projects. Full attribution is at [pharalex.app/acknowledgments](https://pharalex.app/acknowledgments) and in [`SOURCES.md`](./SOURCES.md).

**Glyph SVGs (8,132 total):**

| Source | Glyphs | License |
|---|---:|---|
| [JSesh](https://github.com/rosmord/jsesh) — Serge Rosmorduc | 6,725 | LGPL-3.0 |
| [NewGardiner / hierojax](https://github.com/nederhof/hierojax) — Mark-Jan Nederhof | 997 | GPL-3.0 |
| [Aegyptus 6.17](https://dn-works.com/ufas/) — George Douros | 423 | Freeware (non-commercial) |
| [Noto Sans Egyptian Hieroglyphs](https://github.com/notofonts/egyptian-hieroglyphs) — Google | 109 | OFL-1.1 |

**Dictionary & word data:**

| Source | Records | License |
|---|---:|---|
| [Vygus Middle Egyptian Dictionary](http://www.pyramidtextsonline.com/documents/VygusDictionaryJune2018.pdf) (2018) | 45,555 | Academic |
| [Unicode Unikemet](https://unicode.org/) | 4,376 | Unicode License |
| [JSesh sign descriptions](https://github.com/rosmord/jsesh) | 6,783 | LGPL-3.0 |
| [St Andrews Unicode Sign List](https://mjn.host.cs.st-andrews.ac.uk/egyptian/unicode/) | 1,071 | Academic open |
| [Wiktionary Egyptian](https://kaikki.org/dictionary/Ancient%20Egyptian/) | 5,308 | CC BY-SA 3.0 |
| [JSesh texts corpus](https://github.com/rosmord/jsesh) (190 .gly files) | 94,652 quad patterns | LGPL-3.0 |

---

## Getting Started

```bash
git clone https://github.com/cursedcoder/pharalex.git
cd pharalex
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
```

Deployed on [Cloudflare Workers](https://workers.cloudflare.com/) via OpenNext.

---

## Project Structure

```
app/                  # Next.js App Router pages
  ├── page.tsx        # Home
  ├── browse/         # All glyphs grid
  ├── glyph/[code]/   # Glyph detail
  ├── words/[slug]/   # Word detail
  ├── search/         # Search (Words/Glyphs tabs)
  ├── texts/[slug]/   # Ancient text reader
  ├── categories/     # Category browser
  ├── alphabet/       # Uniliteral table
  ├── pharaohs/       # Pharaohs browser
  └── acknowledgments/
components/           # Shared UI components
  ├── Quadrat.tsx     # Hieroglyphic quadrat renderer
  ├── WordCardList.tsx # Reusable word card list
  └── ui/             # Badge, Card, Container
lib/                  # Data loaders, types, utilities
  ├── mdc.ts          # Manuel de Codage parser
  ├── glyph-metrics.ts # Sign dimensions for layout
  ├── wiktionary.ts   # Wiktionary entry loader
  ├── words.ts        # Word data accessors + relations
  └── data/           # wiktionary-egyptian.jsonl
public/
  ├── glyphs/         # 8,132 SVG files ({code}.svg)
  └── data/           # glyphs.json, words.json, quad-index.json, etc.
scripts/              # Data processing pipeline
  ├── parse-vygus.ts           # Vygus PDF → words.json
  ├── post-process-words.ts    # Word cleanup, auto-quadding
  ├── post-process-glyphs.ts   # Glyph data cleanup
  ├── build-quad-index.ts      # Learn quad patterns from .gly texts
  ├── build-word-relations.ts  # Build word relation index
  ├── build-search-index.ts    # Build search indices
  ├── process-jsesh.ts         # JSesh sign descriptions
  ├── process-unikemet.ts      # Unicode Unikemet data
  ├── process-standrews.ts     # St Andrews sign list
  └── process-tla.ts           # TLA corpus texts
SOURCES.md            # Full data attribution
```

---

## License

The **application code** in this repository is released under the [MIT License](./LICENSE).

The **glyph SVGs** and **dataset files** bundled in `public/glyphs/` and `public/data/` retain the licenses of their original authors — see [`SOURCES.md`](./SOURCES.md) for the full breakdown. Several sources are non-commercial (Aegyptus 6.17, St Andrews sign list); please respect their terms.

The **"PharaLex" name and logo** are trademarks of cursedcoder and are not covered by the MIT License. Forks must use a different name and domain. See [`TRADEMARK.md`](./TRADEMARK.md).
