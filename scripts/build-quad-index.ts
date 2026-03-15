/**
 * Build a quad-pattern index from JSesh .gly files.
 *
 * Scans all .gly files in a given directory, extracts MdC quadrat patterns
 * (which signs stack vertically with : and which sit side-by-side with *),
 * and writes a JSON index that auto-quad can use for data-driven grouping.
 *
 * Usage:
 *   npx tsx scripts/build-quad-index.ts /path/to/jsesh-texts
 *
 * Output: public/data/quad-index.json
 */

import * as fs from "fs";
import * as path from "path";
import { globSync } from "glob";

const MDC_ALIASES: Record<string, string> = {
  nTrw:"R8A", nn:"M22B", mSa:"A12", xr:"A15", Xrd:"A17", sr:"A21", mniw:"A33",
  qiz:"A38", iry:"A47", Sps:"A50", Spsi:"A51", x:"Aa1", Hp:"Aa5", qn:"Aa8",
  mAa:"Aa11", M:"Aa15", im:"Aa13", gs:"Aa13", sA:"Aa17", apr:"Aa20", wDa:"Aa21",
  nD:"Aa27", qd:"Aa28", Xkr:"Aa30", msi:"B3", DHwty:"C3", Xnmw:"C4", inpw:"C6",
  stX:"C7", mnw:"C8", mAat:"C10", HH:"C11", tp:"D1", Hr:"D2", Sny:"D3", ir:"D4",
  rmi:"D9", wDAt:"D10", fnD:"D19", r:"D21", rA:"D21", spt:"D24", spty:"D25",
  mnD:"D27", kA:"D28", aHA:"D34", a:"D36", Dsr:"D45", d:"D46", Dba:"D50",
  mt:"D52", rd:"D56", sbq:"D56", gH:"D56", gHs:"D56", b:"D58", ab:"D59",
  wab:"D60", sAH:"D61", zzmt:"E6", zAb:"E17", mAi:"E22", rw:"E23", l:"E23",
  Aby:"E24", wn:"E34", HAt:"F4", SsA:"F5", wsr:"F12", wp:"F13", db:"F16",
  Hw:"F18", bH:"F18", ns:"F20", idn:"F21", msDr:"F21", sDm:"F21", DrD:"F21",
  pH:"F22", kfA:"F22", xpS:"F23", wHm:"F25", Xn:"F26", sti:"F29", Sd:"F30",
  ms:"F31", X:"F32", sd:"F33", ib:"F34", nfr:"F35", mHy:"F37B", zmA:"F36",
  imAx:"F39", Aw:"F40", spr:"F42", iwa:"F44", isw:"F44", pXr:"F46", qAb:"F46",
  A:"G1", AA:"G2", tyw:"G4", mwt:"G14", nbty:"G16", m:"G17", mm:"G18",
  nH:"G21", Db:"G22", rxyt:"G23", Ax:"G25", dSr:"G27", gm:"G28", bA:"G29",
  baHi:"G32", aq:"G35", wr:"G36", gb:"G38", zA:"G39", pA:"G40", xn:"G41",
  wSA:"G42", w:"G43", ww:"G44", mAw:"G46", TA:"G47", snD:"G54", wSm:"H2",
  pAq:"H3", Sw:"H6", aSA:"I1", Styw:"I2", mzH:"I3", sbk:"I4", sAq:"I5",
  km:"I6", Hfn:"I8", f:"I9", D:"I10", DD:"I11", in:"K1", ad:"K3", XA:"K4",
  bz:"K5", nSmt:"K6", xpr:"L1", bit:"L2", srqt:"L7", iAm:"M1", Hn:"M2",
  xt:"M3", rnp:"M4", tr:"M6", SA:"M8", zSn:"M9", wdn:"M11", xA:"M12",
  wAD:"M13", HA:"M16", i:"M17", ii:"M18", sxt:"M20", sm:"M21", sw:"M23",
  rsw:"M24", Sma:"M26", nDm:"M29", bnr:"M30", bdt:"M34", Dr:"M36", iz:"M40",
  pt:"N1", iAdt:"N4", idt:"N4", ra:"N5", zw:"N5", hrw:"N5", Hnmmt:"N8",
  pzD:"N9", Abd:"N11", iaH:"N11", dwA:"N14", sbA:"N14", dwAt:"N15", tA:"N16",
  iw:"N18", wDb:"N20", spAt:"N24", xAst:"N25", Dw:"N26", Axt:"N27", xa:"N28",
  q:"N29", iAt:"N30", n:"N35", mw:"N35A", S:"N37", Sm:"N40", id:"N42",
  pr:"O1", h:"O4", Hwt:"O6", aH:"O11", wsxt:"O15", kAr:"O18", zH:"O22",
  txn:"O25", iwn:"O28", aA:"O29", zxnt:"O30", z:"O34", zb:"O35", inb:"O36",
  Szp:"O42", ipt:"O45", nxn:"O47", niwt:"O49", zp:"O50", Snwt:"O51",
  aAv:"O29v", wHa:"P4", TAw:"P5", nfw:"P5", aHa:"P6", xrw:"P8", st:"Q1",
  wz:"Q2", p:"Q3", qrsw:"Q6", qrs:"Q6", xAwt:"R1", xAt:"R1", Htp:"R4",
  kAp:"R5", kp:"R5", snTr:"R7", nTr:"R8", bd:"R9", dd:"R11", Dd:"R11",
  imnt:"R14", iAb:"R15", wx:"R16", xm:"R22", HDt:"S1", N:"S3", dSrt:"S3",
  sxmty:"S6", xprS:"S7", Atf:"S8", Swty:"S9", mDH:"S10", wsx:"S11",
  nbw:"S12", tHn:"S15", THn:"S15", mnit:"S18", sDAw:"S19", xtm:"S20",
  sT:"S22", dmD:"S23", Tz:"S24", Sndyt:"S26", mnxt:"S27", s:"S29", sf:"S30",
  siA:"S32", Tb:"S33", anx:"S34", Swt:"S35", xw:"S37", HqA:"S38", awt:"S39",
  wAs:"S40", Dam:"S41", abA:"S42", sxm:"S42", xrp:"S42", md:"S43", Ams:"S44",
  nxxw:"S45", HD:"T3", HDD:"T6", pd:"T9", pD:"T10", zin:"T11", zwn:"T11",
  sXr:"T11", Ai:"T12", Ar:"T12", rwd:"T12", rwD:"T12", rs:"T13", qmA:"T14",
  wrrt:"T17", Sms:"T18", qs:"T19", wa:"T21", sn:"T22", iH:"T24", DbA:"T25",
  Xr:"T28", nmt:"T29", sSm:"T31", nm:"T34", mA:"U1", mr:"U6", it:"U10",
  HqAt:"U11", hb:"U13", Sna:"U13", tm:"U15", biA:"U16", grg:"U17", stp:"U21",
  mnx:"U22", Ab:"U23", Hmt:"U24", wbA:"U26", DA:"U28", rtH:"U31", zmn:"U32",
  ti:"U33", xsf:"U34", Hm:"U36", mxAt:"U38", St:"V1", Snt:"V1", sTA:"V2",
  sTAw:"V3", wA:"V4", snT:"V5", Sn:"V7", arq:"V12", T:"V13", iTi:"V15",
  mDt:"V19", XAr:"V19", TmA:"V19", mD:"V20", mH:"V22", wD:"V24", aD:"V26",
  H:"V28", wAH:"V29", sk:"V29", nb:"V30", k:"V31", msn:"V32", sSr:"V33",
  idr:"V37", bAs:"W2", Hb:"W3", Xnm:"W9", iab:"W10", g:"W11", nst:"W11",
  Hz:"W14", xnt:"W17", mi:"W19", Hnqt:"W22", nw:"W24", ini:"W25", t:"X1",
  rdi:"X8", di:"X8", mDAt:"Y1", zS:"Y3", mnhd:"Y3", mn:"Y5", ibA:"Y6",
  zSSt:"Y8", y:"Z4", W:"Z7", imi:"Z11", wnm:"Z11",
};

function resolveAlias(code: string): string {
  return MDC_ALIASES[code] ?? code;
}

/** Check if a token looks like a Gardiner code or MdC alias. */
function isSign(token: string): boolean {
  if (!token || token.length === 0) return false;
  // Gardiner: A1, Aa1, N35, Z1, etc.
  if (/^(Aa|NL|NU|[A-Z])\d+[A-Za-z]?$/.test(token)) return true;
  // MdC alias
  if (token in MDC_ALIASES) return true;
  return false;
}

/**
 * Extract quad patterns from a single MdC line.
 * Returns pairs like { codes: ["N35","X1"], op: ":" }
 */
interface QuadPair {
  top: string;
  bottom: string;
  op: ":" | "*";
}

function extractPairsFromLine(line: string): QuadPair[] {
  const pairs: QuadPair[] = [];

  // Strip metadata lines, text annotations, comments
  if (line.startsWith("+") || line.startsWith("!") || line.trim() === "") return pairs;

  // Split into quadrats by -
  // But first, strip modifiers we don't care about: \R270, \red, _, etc.
  let cleaned = line;
  // Remove scale/rotation/mirror modifiers
  cleaned = cleaned.replace(/\\[a-zA-Z]*\d*/g, "");
  // Remove shading markers
  cleaned = cleaned.replace(/#[be1234]*/g, "");
  // Remove line numbers |1 etc
  cleaned = cleaned.replace(/\|[0-9]+/g, "");
  // Remove PF arrows
  cleaned = cleaned.replace(/PF\d-/g, "");
  // Remove blanks/lacunae
  cleaned = cleaned.replace(/\.\./g, "").replace(/\/\//g, "");

  // Now extract : and * patterns
  // Split by - (quadrat separator) first
  const quadrats = cleaned.split("-");

  for (const quad of quadrats) {
    // Find all A:B patterns (vertical stacking)
    // and A*B patterns (horizontal juxtaposition)
    // Handle nested groups like (A*B):C
    const tokens = quad.split(/([*:])/).filter(Boolean);

    for (let i = 0; i < tokens.length - 2; i += 2) {
      const left = tokens[i];
      const op = tokens[i + 1];
      const right = tokens[i + 2];

      if (op !== ":" && op !== "*") continue;

      // Clean up signs — strip parens, underscores
      const leftCode = resolveAlias(left.replace(/[()_`]/g, "").trim());
      const rightCode = resolveAlias(right.replace(/[()_`]/g, "").trim());

      if (!isSign(leftCode) || !isSign(rightCode)) continue;

      pairs.push({
        top: leftCode,
        bottom: rightCode,
        op: op as ":" | "*",
      });
    }
  }

  return pairs;
}

function processGlyFile(filePath: string): QuadPair[] {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");
  const allPairs: QuadPair[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    // Skip JSesh metadata and text annotations
    if (trimmed.startsWith("++") || trimmed.startsWith("+") || trimmed === "") continue;
    allPairs.push(...extractPairsFromLine(trimmed));
  }

  return allPairs;
}

// ── Main ──────────────────────────────────────────────────────────────────────

const textDir = process.argv[2];
if (!textDir) {
  console.error("Usage: npx tsx scripts/build-quad-index.ts <path-to-gly-directory>");
  console.error("  Scans all .gly files in the directory and builds quad-index.json");
  process.exit(1);
}

const resolvedDir = path.resolve(textDir);
const glyFiles = globSync(path.join(resolvedDir, "**/*.gly"));

if (glyFiles.length === 0) {
  console.error(`No .gly files found in ${resolvedDir}`);
  process.exit(1);
}

console.log(`Scanning ${glyFiles.length} .gly files in ${resolvedDir}...`);

// Collect all pairs
const vertCount = new Map<string, number>(); // "A,B" → count for A:B
const horizCount = new Map<string, number>(); // "A,B" → count for A*B

let totalPairs = 0;

for (const file of glyFiles) {
  const pairs = processGlyFile(file);
  totalPairs += pairs.length;
  for (const p of pairs) {
    const key = `${p.top},${p.bottom}`;
    if (p.op === ":") {
      vertCount.set(key, (vertCount.get(key) ?? 0) + 1);
    } else {
      horizCount.set(key, (horizCount.get(key) ?? 0) + 1);
    }
  }
}

console.log(`  Total pairs extracted: ${totalPairs}`);
console.log(`  Unique vertical (:) pairs: ${vertCount.size}`);
console.log(`  Unique horizontal (*) pairs: ${horizCount.size}`);

// Build the index: only include pairs seen at least 2 times
const MIN_COUNT = 2;

const vertPairs: Record<string, number> = {};
for (const [key, count] of vertCount) {
  if (count >= MIN_COUNT) vertPairs[key] = count;
}

const horizPairs: Record<string, number> = {};
for (const [key, count] of horizCount) {
  if (count >= MIN_COUNT) horizPairs[key] = count;
}

const index = {
  _meta: {
    generatedAt: new Date().toISOString(),
    sourceFiles: glyFiles.length,
    totalPairs,
    minCount: MIN_COUNT,
  },
  vert: vertPairs,
  horiz: horizPairs,
};

const outPath = path.join(process.cwd(), "public/data/quad-index.json");
fs.writeFileSync(outPath, JSON.stringify(index, null, 2));

console.log(`\nWrote ${Object.keys(vertPairs).length} vert + ${Object.keys(horizPairs).length} horiz pairs to ${outPath}`);

// Show top patterns
console.log("\nTop vertical (:) patterns:");
[...Object.entries(vertPairs)].sort((a, b) => b[1] - a[1]).slice(0, 20)
  .forEach(([k, v]) => console.log(`  ${k.replace(",", ":")} (${v}x)`));

console.log("\nTop horizontal (*) patterns:");
[...Object.entries(horizPairs)].sort((a, b) => b[1] - a[1]).slice(0, 20)
  .forEach(([k, v]) => console.log(`  ${k.replace(",", "*")} (${v}x)`));
