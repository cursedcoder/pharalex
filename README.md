# PharaLex

**An open Egyptian hieroglyph dictionary** — 8,282 symbols with full SVG coverage, meanings, transliterations, phonetic values, and attested text examples from ancient corpora.

**[pharalex.app](https://pharalex.app)**

---

## Features

- **8,282 hieroglyphs** with 100% SVG coverage — every glyph renders sharply at any size
- **Unified data** — Gardiner codes, Unicode codepoints, phonetic values, physical descriptions, logogram/phonogram/determinative uses, and cross-references from five open datasets
- **16,379 attested text examples** from the Thesaurus Linguae Aegyptiae corpus (Old, Middle, and Late Egyptian)
- **Pharaohs database** — 300+ rulers across 30+ dynasties with timeline and list views
- **Full-text fuzzy search** across meanings, transliterations, Gardiner codes, and descriptions
- **Gardiner categories** — all 26 thematic groups (Men, Women, Birds, Reptiles, etc.)
- **Hieroglyphic alphabet** — phonetic reference table for the 24 uniliteral signs
- Light and dark themes with no flash on load

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — search, featured glyphs, category grid |
| `/browse` | Virtualized grid of all 8,282 glyphs |
| `/glyph/[code]` | Glyph detail — SVG, meanings, phonetics, examples |
| `/search` | Full-text search with live results |
| `/categories` | All 26 Gardiner categories |
| `/categories/[id]` | Glyphs within a category |
| `/alphabet` | Uniliteral (single-consonant) sign table |
| `/pharaohs` | Pharaohs browser — timeline and list views |
| `/pharaohs/[slug]` | Pharaoh detail page |
| `/acknowledgments` | Full attribution for every data and glyph source |

---

## Tech Stack

- **[Next.js 15](https://nextjs.org/)** — App Router, static export
- **[React 19](https://react.dev/)**
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first, no component library
- **[TanStack Virtual](https://tanstack.com/virtual)** — windowed rendering for large glyph grids
- **[Fuse.js](https://www.fusejs.io/)** — fuzzy full-text search
- **[fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)** — parsing JSesh and St Andrews XML datasets
- **Fonts** — Cormorant Garamond (display), Source Serif 4 (body), Noto Sans Egyptian Hieroglyphs (glyphs)

---

## Data Sources

All glyph SVGs and dictionary data come from open-source and open-data projects. Full attribution is at [pharalex.app/acknowledgments](https://pharalex.app/acknowledgments) and in [`SOURCES.md`](./SOURCES.md).

**Glyph SVGs (8,282 total):**

| Source | Glyphs | License |
|---|---:|---|
| [JSesh](https://github.com/rosmord/jsesh) — Serge Rosmorduc | 6,725 | LGPL-3.0 |
| [NewGardiner / hierojax](https://github.com/nederhof/hierojax) — Mark-Jan Nederhof | 997 | GPL-3.0 |
| [Aegyptus 6.17](https://dn-works.com/ufas/) — George Douros | 423 | Freeware (non-commercial) |
| [Noto Sans Egyptian Hieroglyphs](https://github.com/notofonts/egyptian-hieroglyphs) — Google | 109 | OFL-1.1 |

**Dictionary data:**

| Source | Records | License |
|---|---:|---|
| [Unicode Unikemet](https://unicode.org/) | 4,376 | Unicode License |
| [JSesh sign descriptions](https://github.com/rosmord/jsesh) | 6,783 | LGPL-3.0 |
| [St Andrews Unicode Sign List](https://mjn.host.cs.st-andrews.ac.uk/egyptian/unicode/) | 1,071 | Academic open |
| [TLA Earlier Egyptian corpus v18](https://huggingface.co/datasets/thesaurus-linguae-aegyptiae/tla-Earlier_Egyptian_original-v18-premium) | 12,773 | CC BY-SA 4.0 |
| [TLA Late Egyptian corpus v19](https://huggingface.co/datasets/thesaurus-linguae-aegyptiae/tla-late_egyptian-v19-premium) | 3,606 | CC BY-SA 4.0 |
| [Wiktionary Egyptian](https://kaikki.org/dictionary/Ancient%20Egyptian/) | ~260 | CC BY-SA 3.0 |

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
npm run build   # static export → out/
```

The output is a fully static site (`out/`) that can be deployed to any static host (Vercel, Cloudflare Pages, GitHub Pages, etc.).

---

## Project Structure

```
app/                  # Next.js App Router pages
  ├── page.tsx        # Home
  ├── browse/         # All glyphs grid
  ├── glyph/[code]/   # Glyph detail
  ├── search/         # Search
  ├── categories/     # Category browser
  ├── alphabet/       # Uniliteral table
  ├── pharaohs/       # Pharaohs browser
  └── acknowledgments/
components/           # Shared UI components
  └── ui/             # Badge, Card, Container
lib/                  # Data loaders and types
  └── data/           # glyphs.json, pharaohs.json
public/glyphs/        # 8,282 SVG files ({code}.svg)
scripts/              # Data processing scripts
SOURCES.md            # Full data attribution
```

---

## License

The **application code** in this repository is released under the [MIT License](./LICENSE).

The **glyph SVGs** and **dataset files** bundled in `public/glyphs/` and `lib/data/` retain the licenses of their original authors — see [`SOURCES.md`](./SOURCES.md) for the full breakdown. Several sources are non-commercial (Aegyptus 6.17, St Andrews sign list); please respect their terms.
