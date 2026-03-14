---
name: data-validation-status
description: Current state of data validation work and known remaining issues
type: project
---

Data validation session completed 2026-03-14 with egyptologist wife's input.

## Completed
- MdC/Unicode transliteration dedup (bAH→bꜣḥ, sxt→sḫt, ra/Ra/rꜥ)
- MdC search aliases (ASCII forms searchable but not displayed)
- Grammatical suffix dot removal (sp.t→spt for display)
- Sign name badges from St Andrews (983 + 1767 inherited from parents)
- Truncated signName fixes (347 fixed)
- Meaning sort (phonogram→logogram→determinative→other)
- Description dedup against meanings
- Broken XML artifact descriptions fixed (67 glyphs)
- Variant descriptions from JSesh relationships (1253 glyphs)
- MdC→Unicode in meaning texts (1417 fixes)
- Reversed MdC corruption in 538 Classifier meanings (humꜥn→human)
- Name marker ^ conversion (115 transliterations)
- Noise word removal (Phonetic, Logogram, Phonemogram — 802 removed)
- U+ codes → Gardiner codes (977 renamed, 142 merged)
- Non-standard code normalization (US*, AA, EXTU, VAR)
- SVG renames to match new codes (980 files)
- Transliteration frequency ranking from TLA corpus (94K tokens)
- NewGardiner font (replaces Noto, much better coverage)
- Tofu detection for Unicode chars (UnicodeChar component)
- Tag typo fix (olw→owl, 32 glyphs)
- Backslash catalog references removed (18 meanings)
- Nested SVG transform handling in normalizer (13 SVGs fixed)
- Data integrity test suite (14 tests, all passing)
- Gardiner code word search (&gardiner=true)
- Exact match search (&exact=true)

## Known remaining issues
- Determinative-example words leaking into transliteration arrays (systemic in process-data.ts extractTransliterations)
- Fuse.js search returns false matches at low scores (e.g. "nfr" matches "ḏrḏry") — threshold tuning needed
- 2,450 variant glyphs with no data (no unicode, description, or meanings) — empty shells
- 506 TLA JSesh glyphs we don't have (70 base + 436 variants) — low priority
- TLA now has English translations — potential future data source
- A1 has too many meanings (17) — many redundant determinative entries

**Why:** Wife (egyptologist) flagged inaccuracies from mixed sources
**How to apply:** Continue fixing data quality issues, validate with wife
