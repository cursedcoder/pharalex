import * as fs from "fs";
import * as path from "path";
import { PHARAOHS } from "../lib/data/pharaohs";

interface PharaohSeData {
  slug: string;
  name: string;
  url: string;
  horusName?: string;
  nebtyName?: string;
  goldenHorusName?: string;
  throneNames: string[];
  birthNames: string[];
  greekNames: string[];
  kingListNames: string[];
  allExtractedNames: string[];
}

interface EnrichmentReport {
  pharaoh: string;
  slug: string;
  currentAlternateNames: string[];
  suggestedNames: string[];
  newNames: string[];
  sourceUrl: string;
  status: "found" | "not_found" | "error";
  error?: string;
}

// pharaoh.se uses Title-Case URLs (e.g., "Pepi-II" not "pepi-ii")
function toTitleCase(slug: string): string {
  return slug.split("-").map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join("-");
}

// Map our slugs to pharaoh.se slugs (before title-casing)
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
};

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchPharaohSe(slug: string): Promise<{ html: string; url: string } | null> {
  // Try the explicit mapping first, then title-cased slug
  const urlsToTry = [
    SLUG_MAPPINGS[slug],
    toTitleCase(slug),
  ].filter(Boolean);
  
  for (const mappedSlug of urlsToTry) {
    const url = `https://pharaoh.se/ancient-egypt/pharaoh/${mappedSlug}/`;
    
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent": "PharalexEnrichmentBot/1.0 (educational project)",
        },
      });
      
      if (response.ok) {
        return { html: await response.text(), url };
      }
    } catch {
      // Try next URL
    }
  }
  
  return null;
}

function cleanName(name: string): string {
  return name
    .replace(/[">]+$/g, "")  // Remove trailing HTML artifacts
    .replace(/^\s+|\s+$/g, "") // Trim whitespace
    .replace(/\*$/, "")  // Remove trailing asterisks
    .replace(/\s+/g, " "); // Normalize whitespace
}

function extractNames(html: string): PharaohSeData["allExtractedNames"] {
  const names: Set<string> = new Set();
  
  // Extract names from "Also known as" / "a.k.a." section
  const akaMatch = html.match(/a\.k\.a\.\s+([^\n<]+)/i);
  if (akaMatch) {
    const akaNames = akaMatch[1].split(/,\s*/).map(n => cleanName(n)).filter(Boolean);
    akaNames.forEach(n => names.add(n));
  }
  
  // Look for king list references: "Karnak (5) has Issi"
  const kingListPattern = /(?:Abydos|Karnak|Turin|Saqqara)[^)]*\)\s*has\s+([A-Za-z]+)/gi;
  const kingListMatches = html.matchAll(kingListPattern);
  for (const match of kingListMatches) {
    names.add(cleanName(match[1]));
  }
  
  // Extract Greek names from Manetho section - look for table rows
  // Pattern: "| Africanus ... | GreekName | Transcription | Reign |"
  const manethoPattern = /\|\s*(?:Africanus|Eusebius|Josephus)[^|]*\|[^|]*\|\s*([A-Za-z][A-Za-z\s]+?)\s*\|/g;
  const manethoMatches = html.matchAll(manethoPattern);
  for (const match of manethoMatches) {
    const name = cleanName(match[1]);
    if (name.length > 2 && !name.match(/^\d+\s*years?$/i)) {
      names.add(name);
    }
  }
  
  // Extract throne name variants - look for patterns like "Throne name variant" followed by name
  const throneVariantPattern = /Throne name(?: variant[^]*?)?\n\n([A-Z][a-z]+(?:\s+[a-z]+){0,3})\n/g;
  const throneMatches = html.matchAll(throneVariantPattern);
  for (const match of throneMatches) {
    const name = cleanName(match[1]);
    if (name.length > 2) {
      names.add(name);
    }
  }
  
  // Extract birth name variants
  const birthVariantPattern = /Birth name(?: variant[^]*?)?\n\n([A-Z][a-z]+(?:\*)?)\n/g;
  const birthMatches = html.matchAll(birthVariantPattern);
  for (const match of birthMatches) {
    const name = cleanName(match[1]);
    if (name.length > 2) {
      names.add(name);
    }
  }
  
  // Clean up and filter names
  return Array.from(names)
    .map(cleanName)
    .filter(name => {
      if (name.length < 3) return false;
      // Filter out common false positives
      if (/^(The|And|For|With|From|Dual|King|Son|Ra|Horus|name|variant|Personal|given|birth|oldest|form|years?)$/i.test(name)) return false;
      if (/^\d+$/.test(name)) return false;
      if (name.includes("|")) return false;
      return true;
    });
}

function normalizeForComparison(name: string): string {
  return name.toLowerCase().replace(/[\s\-_]/g, "").replace(/[^a-z]/g, "");
}

function findNewNames(extracted: string[], existing: string[], mainName: string): string[] {
  const existingNormalized = new Set([
    ...existing.map(normalizeForComparison),
    normalizeForComparison(mainName),
  ]);
  
  return extracted.filter(name => {
    const normalized = normalizeForComparison(name);
    return !existingNormalized.has(normalized) && normalized.length > 2;
  });
}

async function enrichPharaoh(pharaoh: typeof PHARAOHS[0]): Promise<EnrichmentReport> {
  const report: EnrichmentReport = {
    pharaoh: pharaoh.name,
    slug: pharaoh.slug,
    currentAlternateNames: pharaoh.alternateNames,
    suggestedNames: [],
    newNames: [],
    sourceUrl: `https://pharaoh.se/ancient-egypt/pharaoh/${SLUG_MAPPINGS[pharaoh.slug] || toTitleCase(pharaoh.slug)}/`,
    status: "not_found",
  };
  
  const result = await fetchPharaohSe(pharaoh.slug);
  
  if (!result) {
    return report;
  }
  
  report.sourceUrl = result.url;
  
  try {
    const extractedNames = extractNames(result.html);
    report.suggestedNames = extractedNames;
    report.newNames = findNewNames(extractedNames, pharaoh.alternateNames, pharaoh.name);
    report.status = "found";
  } catch (error) {
    report.status = "error";
    report.error = String(error);
  }
  
  return report;
}

async function main() {
  const args = process.argv.slice(2);
  const notableOnly = args.includes("--notable");
  const singleSlug = args.find(a => !a.startsWith("--"));
  const outputJson = args.includes("--json");
  
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
  
  console.log(`Processing ${pharaohsToProcess.length} pharaohs...\n`);
  
  const reports: EnrichmentReport[] = [];
  let found = 0;
  let notFound = 0;
  let withNewNames = 0;
  
  for (let i = 0; i < pharaohsToProcess.length; i++) {
    const pharaoh = pharaohsToProcess[i];
    process.stdout.write(`[${i + 1}/${pharaohsToProcess.length}] ${pharaoh.name}... `);
    
    const report = await enrichPharaoh(pharaoh);
    reports.push(report);
    
    if (report.status === "found") {
      found++;
      if (report.newNames.length > 0) {
        withNewNames++;
        console.log(`✓ Found ${report.newNames.length} new names: ${report.newNames.join(", ")}`);
      } else {
        console.log("✓ No new names");
      }
    } else if (report.status === "not_found") {
      notFound++;
      console.log("✗ Not found on pharaoh.se");
    } else {
      console.log(`✗ Error: ${report.error}`);
    }
    
    // Rate limiting - be nice to pharaoh.se
    await sleep(500);
  }
  
  // Summary
  console.log("\n" + "=".repeat(60));
  console.log("SUMMARY");
  console.log("=".repeat(60));
  console.log(`Total processed: ${pharaohsToProcess.length}`);
  console.log(`Found on pharaoh.se: ${found}`);
  console.log(`Not found: ${notFound}`);
  console.log(`With new suggested names: ${withNewNames}`);
  
  // Output reports with new names
  const reportsWithNewNames = reports.filter(r => r.newNames.length > 0);
  
  if (reportsWithNewNames.length > 0) {
    console.log("\n" + "=".repeat(60));
    console.log("PHARAOHS WITH SUGGESTED NEW NAMES");
    console.log("=".repeat(60));
    
    for (const report of reportsWithNewNames) {
      console.log(`\n${report.pharaoh} (${report.slug})`);
      console.log(`  Current: [${report.currentAlternateNames.join(", ")}]`);
      console.log(`  Suggested new: [${report.newNames.join(", ")}]`);
      console.log(`  Source: ${report.sourceUrl}`);
    }
  }
  
  // Save full report to JSON
  const outputPath = path.join(__dirname, "../lib/data/pharaoh-enrichment-report.json");
  fs.writeFileSync(outputPath, JSON.stringify(reports, null, 2));
  console.log(`\nFull report saved to: ${outputPath}`);
  
  // Generate code snippet for easy updating
  if (reportsWithNewNames.length > 0) {
    console.log("\n" + "=".repeat(60));
    console.log("SUGGESTED CODE UPDATES");
    console.log("=".repeat(60));
    console.log("// Add these names to the respective pharaohs in pharaohs.ts:\n");
    
    for (const report of reportsWithNewNames) {
      const allNames = [...report.currentAlternateNames, ...report.newNames];
      console.log(`// ${report.pharaoh}`);
      console.log(`alternateNames: [${allNames.map(n => `"${n}"`).join(", ")}],\n`);
    }
  }
}

main().catch(console.error);
