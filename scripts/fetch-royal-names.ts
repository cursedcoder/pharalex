/**
 * Fetch royal name (cartouche) data from pharaoh.se
 *
 * Scrapes the hieroglyphic titulary for each pharaoh, extracting:
 *   - Horus name, Nebty name, Golden Horus name, Prenomen (Throne), Nomen (Birth)
 *   - MdC notation → Gardiner codes (via our MdC parser)
 *   - Transliterations (converted to Unicode)
 *   - Translations and source citations
 *
 * Outputs raw JSON to lib/data/royal-names-raw.json for post-processing.
 *
 * Data source: pharaoh.se (CC BY 4.0)
 * Attribution: Lundström, Peter. (2024). Available at: https://pharaoh.se
 */

import * as fs from "fs";
import * as path from "path";
import { PHARAOHS } from "../lib/data/pharaohs";
import { mdcToCodes } from "../lib/mdc";
import { mdcToUnicode } from "./translit-utils";

// ─── Types ───────────────────────────────────────────────────────────────────

interface ScrapedName {
  label: string;           // e.g. "Horus name", "Throne name variant"
  displayName: string;     // e.g. "Narmer"
  transliteration: string; // Unicode transliteration
  translation: string;     // English meaning
  mdc: string;             // Raw MdC from pharaoh.se
  codes: string[];         // Gardiner codes (parsed from MdC)
  sources: string;         // Raw source text
}

type NameType = "horus" | "nebty" | "golden" | "prenomen" | "nomen";

interface ScrapedRoyalNames {
  horus: ScrapedName[];
  nebty: ScrapedName[];
  golden: ScrapedName[];
  prenomen: ScrapedName[];
  nomen: ScrapedName[];
}

interface FetchReport {
  slug: string;
  name: string;
  url: string;
  status: "found" | "not_found" | "error";
  error?: string;
  names: ScrapedRoyalNames;
}

// ─── Slug mappings (reused from enrich-pharaoh-names.ts) ─────────────────────

const SLUG_MAPPINGS: Record<string, string> = {
  "djedkara": "Djedkara-Isesi",
  "aha": "Hor-Aha",
  "djer": "Hor-Djer",
  "djet": "Hor-Djet",
  "nebra": "Raneb",
  "neferirkara-i": "Neferirkara-Kakai",
  "neferefra": "Neferefra-Isi",
  "niuserra": "Niuserra-Ini",
  "menkauhor": "Menkauhor-Kaiu",
  "nemtiemsaf-i": "Nemtiemsaf-I",
  "nemtiemsaf-ii": "Nemtiemsaf-II",
  "mentuhotep-i": "Mentuhotep-I",
  "mentuhotep-ii": "Mentuhotep-II",
  "mentuhotep-iii": "Mentuhotep-III",
  "mentuhotep-iv": "Mentuhotep-IV",
  "intef-i": "Intef-I",
  "intef-ii": "Intef-II",
  "intef-iii": "Intef-III",
  "senusret-i": "Senusret-I",
  "senusret-ii": "Senusret-II",
  "senusret-iii": "Senusret-III",
  "amenemhat-i": "Amenemhat-I",
  "amenemhat-ii": "Amenemhat-II",
  "amenemhat-iii": "Amenemhat-III",
  "amenemhat-iv": "Amenemhat-IV",
  "ahmose-i": "Ahmose-I",
  "amenhotep-i": "Amenhotep-I",
  "thutmose-i": "Thutmose-I",
  "thutmose-ii": "Thutmose-II",
  "thutmose-iii": "Thutmose-III",
  "amenhotep-ii": "Amenhotep-II",
  "thutmose-iv": "Thutmose-IV",
  "amenhotep-iii": "Amenhotep-III",
  "akhenaten": "Amenhotep-IV-Akhenaten",
  "tutankhamun": "Tutankhamun",
  "horemheb": "Horemheb",
  "ramesses-i": "Ramesses-I",
  "seti-i": "Seti-I",
  "ramesses-ii": "Ramesses-II",
  "merenptah": "Merenptah",
  "seti-ii": "Seti-II",
  "ramesses-iii": "Ramesses-III",
  "ramesses-iv": "Ramesses-IV",
  "ramesses-v": "Ramesses-V",
  "ramesses-vi": "Ramesses-VI",
  "ramesses-ix": "Ramesses-IX",
  "ramesses-xi": "Ramesses-XI",
  "shoshenq-i": "Shoshenq-I",
  "osorkon-i": "Osorkon-I",
  "osorkon-ii": "Osorkon-II",
  "cleopatra-vii": "Cleopatra-VII-Philopator",
  "ptolemy-i": "Ptolemy-I-Soter",
  "ptolemy-ii": "Ptolemy-II-Philadelphus",
  "ptolemy-iii": "Ptolemy-III-Euergetes",
  "ptolemy-iv": "Ptolemy-IV-Philopator",
  "ptolemy-v": "Ptolemy-V-Epiphanes",
  "ptolemy-vi": "Ptolemy-VI-Philometor",
  "ptolemy-viii": "Ptolemy-VIII-Euergetes-II",
  "ptolemy-ix": "Ptolemy-IX-Soter-II",
  "ptolemy-xii": "Ptolemy-XII-Neos-Dionysos",
  "ptolemy-xiii": "Ptolemy-XIII-Theos-Philopator",
  "ptolemy-xv": "Ptolemy-XV-Caesarion",
  "piye": "Piye",
  "taharqa": "Taharqa",
  "psamtik-i": "Psamtik-I",
  "necho-ii": "Necho-II",
  "necho-i": "Necho-I",
  "psamtik-ii": "Psamtik-II",
  "psamtik-iii": "Psamtik-III",
  "nectanebo-i": "Nectanebo-I",
  "nectanebo-ii": "Nectanebo-II",
  "alexander-the-great": "Alexander-the-Great",
  "cambyses-ii": "Cambyses-II",
  "darius-i": "Darius-I",
  "darius-ii": "Darius-II",
  "darius-iii": "Darius-III",
  "xerxes-i": "Xerxes-I",
  "artaxerxes-i": "Artaxerxes-I",
  "artaxerxes-ii": "Artaxerxes-II",
  "artaxerxes-iii": "Artaxerxes-III",
  "smendes-i": "Smendes-I",
  "psusennes-i": "Psusennes-I",
  "amenemope": "Amenemope",
  "siamun": "Siamun",
  "psusennes-ii": "Psusennes-II",
  "shoshenq-iii": "Shoshenq-III",
  "takelot-ii": "Takelot-II",
  "pedubast-i": "Pedubast-I",
  "osorkon-iii": "Osorkon-III",
  "shabaka": "Shabaka",
  "shebitku": "Shebitku",
  "tantamani": "Tantamani",
  "necho-i": "Necho-I",
  "apries": "Apries",
  "amasis-ii": "Amasis-II",
  "alexander-iv": "Alexander-IV",
  "philip-iii": "Philip-III-Arrhidaeus",
  "ptolemy-x": "Ptolemy-X-Alexander-I",
  "ptolemy-xi": "Ptolemy-XI-Alexander-II",
  "ptolemy-xiv": "Ptolemy-XIV",
  "sneferu": "Sneferu",
  "khufu": "Khufu",
  "radjedef": "Djedefra",
  "khafra": "Khafra",
  "menkaura": "Menkaura",
  "userkaf": "Userkaf",
  "sahura": "Sahura",
  "unas": "Unas",
  "teti": "Teti",
  "pepi-i": "Pepi-I",
  "pepi-ii": "Pepi-II",
  "djoser": "Djoser",
  "sekhemkhet": "Sekhemkhet",
  "huni": "Huni",
  "hatshepsut": "Hatshepsut",
  "smenkhkara": "Smenkhkara",
  "ay": "Ay",
  "amenmesse": "Amenmesse",
  "siptah": "Siptah",
  "tausret": "Tausret",
  "ramesses-vii": "Ramesses-VII",
  "ramesses-viii": "Ramesses-VIII",
  "ramesses-x": "Ramesses-X",
};

function toTitleCase(slug: string): string {
  return slug.split("-").map(part =>
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join("-");
}

// ─── HTML parsing ────────────────────────────────────────────────────────────

/** Decode HTML entities (&#42786; etc.) to Unicode characters. */
function decodeEntities(html: string): string {
  return html
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(parseInt(n, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/&Auml;/g, "Ä")
    .replace(/&auml;/g, "ä")
    .replace(/&Ouml;/g, "Ö")
    .replace(/&ouml;/g, "ö")
    .replace(/&Uuml;/g, "Ü")
    .replace(/&uuml;/g, "ü")
    .replace(/&szlig;/g, "ß")
    .replace(/&apos;/g, "'")
    .replace(/&laquo;/g, "«")
    .replace(/&raquo;/g, "»");
}

/** Strip HTML tags from a string. */
function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, "").trim();
}

/**
 * Clean up pharaoh.se MdC notation quirks before our parser sees it.
 *
 * pharaoh.se uses several extensions/conventions our parser doesn't handle:
 *   - Backslash rotation: C2\R90 → strip the \R90 suffix
 *   - Hash size hints: D36#12 → strip the #12 suffix
 *   - Standalone "." or "–" → remove (lacuna/gap markers)
 *   - Standalone "??" → remove (unknown signs)
 *   - Leading/trailing whitespace in tokens
 */
function cleanMdc(mdc: string): string {
  if (!mdc) return mdc;
  return mdc
    // Keep rotation suffixes (\R90, \R180, \R270) — our parser handles these
    // Only strip bare numeric suffixes after backslash that aren't rotations
    .replace(/\\(?!R?(90|180|270))\d+/g, "")
    // Remove size/position hints (#12, #40 etc.)
    .replace(/#\d+/g, "")
    // Remove standalone gap markers
    .replace(/(^|[-:*])\s*[–.?]{1,2}\s*(?=[-:*]|$)/g, "$1")
    // Remove leading/trailing operators left by gap removal
    .replace(/^[-:*]+|[-:*]+$/g, "")
    // Collapse doubled operators
    .replace(/([-:*]){2,}/g, "$1")
    .trim();
}

/** Classify an h2 section heading into a name type. */
function classifySection(heading: string): NameType | null {
  const h = heading.toLowerCase();
  if (h.includes("horus name") && !h.includes("golden")) return "horus";
  if (h.includes("nebty")) return "nebty";
  if (h.includes("golden")) return "golden";
  if (h.includes("throne") || h.includes("prenomen")) return "prenomen";
  if (h.includes("birth") || h.includes("nomen")) return "nomen";
  return null;
}

/**
 * Parse all name cards from the HTML of a pharaoh.se page.
 *
 * HTML structure (confirmed from raw source):
 *   <h2 ...>Horus names</h2>   ← section heading
 *   ...
 *   <div class="hiero">        ← name card
 *     <div ...> Horus name </div>                    ← label
 *     <img ... alt="Horus name">                     ← glyph image
 *     <div class="ha">Narmer</div>  OR  <div class="text-xl">Narmer</div>  ← display name
 *     <div class="tlit"> nꜥr-mr </div>              ← transliteration
 *     <div class="pt-1 pb-4"> Fierce catfish </div>  ← translation
 *     <div class="font-mono text-sm hidden"> K24-U23 </div>  ← MdC codes
 *     <div class="text-xs/snug ..."> sources </div>  ← sources
 *   </div>
 */
function parseNameCards(html: string): ScrapedRoyalNames {
  const result: ScrapedRoyalNames = {
    horus: [],
    nebty: [],
    golden: [],
    prenomen: [],
    nomen: [],
  };

  // Split at section headings (h2 tags with name type text)
  // We need to figure out which name type each card belongs to
  // Strategy: find all h2 headings and their positions, then find all .hiero cards
  // and assign each card to the nearest preceding section heading.

  // Find section headings
  const sectionPattern = /<h2[^>]*>([^<]*(?:Horus|Nebty|Golden|Throne|Birth|Prenomen|Nomen)[^<]*)<\/h2>/gi;
  const sections: { type: NameType; pos: number }[] = [];
  let sMatch;
  while ((sMatch = sectionPattern.exec(html)) !== null) {
    const type = classifySection(sMatch[1]);
    if (type) {
      sections.push({ type, pos: sMatch.index });
    }
  }

  // Find all hiero cards
  // Each card starts with <div class="hiero"> and we need to extract its contents
  const cardPattern = /<div class="hiero">([\s\S]*?)(?=<div class="hiero">|<\/div>\s*<\/div>\s*<\/div>|<h2|<\/section)/g;
  let cMatch;
  while ((cMatch = cardPattern.exec(html)) !== null) {
    const cardHtml = cMatch[1];
    const cardPos = cMatch.index;

    // Determine which section this card belongs to
    let nameType: NameType | null = null;
    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].pos < cardPos) {
        nameType = sections[i].type;
        break;
      }
    }

    // Fallback: check the card's own label
    if (!nameType) {
      const labelMatch = cardHtml.match(/>\s*(Horus|Nebty|Golden Horus|Throne|Birth|Prenomen|Nomen)\s*name/i);
      if (labelMatch) {
        nameType = classifySection(labelMatch[1] + " name");
      }
    }
    if (!nameType) continue;

    // Extract label (first div content — the title like "Horus name" or "Throne name variant")
    const labelMatch = cardHtml.match(/<div[^>]*>\s*([^<]*(?:name|variant)[^<]*)\s*<\/div>/i);
    const label = labelMatch ? decodeEntities(stripTags(labelMatch[1])).trim() : nameType;

    // Extract display name from div.ha or div.text-xl
    const nameMatch = cardHtml.match(/<div class="(?:ha|text-xl)">\s*([\s\S]*?)\s*<\/div>/);
    const displayName = nameMatch ? decodeEntities(stripTags(nameMatch[1])).trim() : "";

    // Extract transliteration from div.tlit
    const tlitMatch = cardHtml.match(/<div class="tlit">\s*([\s\S]*?)\s*<\/div>/);
    const rawTranslit = tlitMatch ? decodeEntities(stripTags(tlitMatch[1])).trim() : "";

    // Extract translation from div.pt-1.pb-4
    const transMatch = cardHtml.match(/<div class="pt-1 pb-4">\s*([\s\S]*?)\s*<\/div>/);
    const translation = transMatch ? decodeEntities(stripTags(transMatch[1])).trim() : "";

    // Extract MdC from div.font-mono.text-sm.hidden
    const mdcMatch = cardHtml.match(/<div class="font-mono text-sm hidden">\s*([\s\S]*?)\s*<\/div>/);
    const rawMdc = mdcMatch ? decodeEntities(stripTags(mdcMatch[1])).trim() : "";

    // Extract sources (last div with text-xs)
    const sourceMatch = cardHtml.match(/<div class="text-xs\/snug[^"]*">\s*([\s\S]*?)\s*<\/div>\s*$/);
    const sources = sourceMatch
      ? decodeEntities(sourceMatch[1].replace(/<br\s*\/?>/g, "\n").replace(/<[^>]+>/g, "")).trim()
      : "";

    // Skip cards with no MdC and no transliteration
    if (!rawMdc && !rawTranslit) continue;

    // Clean up pharaoh.se MdC extensions before parsing
    const cleanedMdc = cleanMdc(rawMdc);

    // Parse MdC to Gardiner codes
    let codes: string[] = [];
    if (cleanedMdc) {
      try {
        codes = mdcToCodes(cleanedMdc);
      } catch {
        // MdC parsing failed — store raw string, codes stay empty
      }
    }

    // Convert transliteration to Unicode
    const transliteration = mdcToUnicode(rawTranslit);

    result[nameType].push({
      label,
      displayName,
      transliteration,
      translation: translation === "–" ? "" : translation,
      mdc: rawMdc,
      codes,
      sources,
    });
  }

  return result;
}

// ─── Fetching (with /tmp disk cache) ─────────────────────────────────────────

const CACHE_DIR = "/tmp/pharalex-pharaoh-se-cache";

function ensureCacheDir(): void {
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
  }
}

function cacheKey(mappedSlug: string): string {
  return path.join(CACHE_DIR, `${mappedSlug.replace(/\//g, "_")}.html`);
}

function readCache(mappedSlug: string): string | null {
  const file = cacheKey(mappedSlug);
  if (fs.existsSync(file)) {
    return fs.readFileSync(file, "utf-8");
  }
  return null;
}

function writeCache(mappedSlug: string, html: string): void {
  fs.writeFileSync(cacheKey(mappedSlug), html);
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchPage(slug: string): Promise<{ html: string; url: string; cached: boolean } | null> {
  ensureCacheDir();

  const urlsToTry = [
    SLUG_MAPPINGS[slug],
    toTitleCase(slug),
  ].filter(Boolean);

  for (const mappedSlug of urlsToTry) {
    const url = `https://pharaoh.se/ancient-egypt/pharaoh/${mappedSlug}/`;

    // Check disk cache first
    const cachedHtml = readCache(mappedSlug);
    if (cachedHtml) {
      return { html: cachedHtml, url, cached: true };
    }

    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent": "PharalexEnrichmentBot/1.0 (educational project; CC BY 4.0 attribution)",
        },
      });
      if (response.ok) {
        const html = await response.text();
        writeCache(mappedSlug, html);
        return { html, url, cached: false };
      }
    } catch {
      // Try next URL
    }
  }
  return null;
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const notableOnly = args.includes("--notable");
  const singleSlug = args.find(a => !a.startsWith("--"));
  const dryRun = args.includes("--dry-run");

  let pharaohsToProcess = PHARAOHS;

  if (singleSlug) {
    pharaohsToProcess = PHARAOHS.filter(p => p.slug === singleSlug);
    if (pharaohsToProcess.length === 0) {
      console.error(`Pharaoh with slug "${singleSlug}" not found`);
      process.exit(1);
    }
  } else if (notableOnly) {
    pharaohsToProcess = PHARAOHS.filter(p => p.notable);
  }

  console.log(`Fetching royal names for ${pharaohsToProcess.length} pharaohs from pharaoh.se...\n`);

  const reports: FetchReport[] = [];
  let found = 0;
  let notFound = 0;
  let totalNames = 0;

  for (let i = 0; i < pharaohsToProcess.length; i++) {
    const pharaoh = pharaohsToProcess[i];
    process.stdout.write(`[${i + 1}/${pharaohsToProcess.length}] ${pharaoh.name}... `);

    const report: FetchReport = {
      slug: pharaoh.slug,
      name: pharaoh.name,
      url: `https://pharaoh.se/ancient-egypt/pharaoh/${SLUG_MAPPINGS[pharaoh.slug] || toTitleCase(pharaoh.slug)}/`,
      status: "not_found",
      names: { horus: [], nebty: [], golden: [], prenomen: [], nomen: [] },
    };

    const result = await fetchPage(pharaoh.slug);

    if (!result) {
      notFound++;
      console.log("✗ Not found");
      reports.push(report);
      // Only sleep on actual network requests (not cached)
      await sleep(300);
      continue;
    }

    report.url = result.url;

    try {
      const names = parseNameCards(result.html);
      report.names = names;
      report.status = "found";
      found++;

      const count = names.horus.length + names.nebty.length +
        names.golden.length + names.prenomen.length + names.nomen.length;
      totalNames += count;

      const parts: string[] = [];
      if (names.horus.length) parts.push(`H:${names.horus.length}`);
      if (names.nebty.length) parts.push(`Nb:${names.nebty.length}`);
      if (names.golden.length) parts.push(`G:${names.golden.length}`);
      if (names.prenomen.length) parts.push(`P:${names.prenomen.length}`);
      if (names.nomen.length) parts.push(`N:${names.nomen.length}`);

      const cacheLabel = result.cached ? " (cached)" : "";
      if (count > 0) {
        console.log(`✓ ${count} names (${parts.join(", ")})${cacheLabel}`);
      } else {
        console.log(`✓ Page found, no name cards extracted${cacheLabel}`);
      }
    } catch (error) {
      report.status = "error";
      report.error = String(error);
      console.log(`✗ Parse error: ${error}`);
    }

    reports.push(report);

    // Rate limiting — only sleep on actual network requests
    if (!result.cached) {
      await sleep(300);
    }
  }

  // Summary
  console.log("\n" + "=".repeat(60));
  console.log("SUMMARY");
  console.log("=".repeat(60));
  console.log(`Total processed: ${pharaohsToProcess.length}`);
  console.log(`Found on pharaoh.se: ${found}`);
  console.log(`Not found: ${notFound}`);
  console.log(`Total name entries scraped: ${totalNames}`);

  // Stats by name type
  const typeTotals = { horus: 0, nebty: 0, golden: 0, prenomen: 0, nomen: 0 };
  for (const r of reports) {
    typeTotals.horus += r.names.horus.length;
    typeTotals.nebty += r.names.nebty.length;
    typeTotals.golden += r.names.golden.length;
    typeTotals.prenomen += r.names.prenomen.length;
    typeTotals.nomen += r.names.nomen.length;
  }
  console.log(`\nBy type: Horus=${typeTotals.horus} Nebty=${typeTotals.nebty} Golden=${typeTotals.golden} Prenomen=${typeTotals.prenomen} Nomen=${typeTotals.nomen}`);

  if (!dryRun) {
    const outputPath = path.join(__dirname, "../lib/data/royal-names-raw.json");
    fs.writeFileSync(outputPath, JSON.stringify(reports, null, 2));
    console.log(`\nRaw data saved to: ${outputPath}`);
    console.log("Run: npx tsx scripts/process-royal-names.ts  to generate updated royal-names.ts");
  }
}

main().catch(console.error);
