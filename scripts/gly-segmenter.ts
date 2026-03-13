/**
 * Deterministic DP segmenter for JSesh .gly sign-code sequences.
 *
 * Input:  a raw JSesh line string, e.g.
 *           "M4-t:ra-3:2-Abd:1*1*1-N5-V20\R270-..."
 *
 * Output: an array of MdC token strings, one per lexical word, preserving
 *         all original notation (rotations, damage markers, operators).
 *
 * Algorithm:
 *   1. Normalise — strip terminal "-!", split on "-" top-level separators
 *      (respecting JSesh grouping operators :, *, &, \R, #b…#e, backtick)
 *      → flat list of "atoms" with their original text
 *   2. Resolve each atom's base Gardiner code via MDC_ALIASES
 *   3. DP over the atom sequence:
 *        for each position i, for each length l (1..MAX_LEN):
 *          look up codes[i..i+l] in the lexicon index
 *          score the span and update dp[i+l]
 *   4. Backtrack to recover token boundaries
 *   5. Rebuild original MdC strings from atom spans
 *
 * Scoring (lower = better cost):
 *   exact lexicon match of length l  → cost 1/l   (longer = cheaper per atom)
 *   single alias-only atom           → cost 2
 *   unknown atom (no lexicon match)  → cost 10
 *   damage/lacuna token              → cost 0 (free — always its own token)
 */

import * as fs from "fs";
import * as path from "path";

// ─── MDC alias table (same as in mdc.ts) ─────────────────────────────────────

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
  // Strip rotation suffix for lookup purposes
  const base = code.replace(/\\R\d+$/, "");
  return MDC_ALIASES[base] ?? base;
}

// ─── Atom: one logical sign position from the JSesh line ─────────────────────

interface Atom {
  raw: string;      // original text as it appears in the .gly (e.g. "a:S")
  codes: string[];  // all resolved Gardiner codes in this atom (e.g. ["D36","N37"])
  special: "damage" | "stroke" | null;
}

/**
 * Parse a JSesh line into atoms.
 * The line uses "-" as the top-level separator between sign positions.
 * Within an atom, `:` `*` `&` `\R` mark sub-quadrat structure — these are
 * kept intact as part of the atom's raw string.
 *
 * Special handling:
 *   #b…#e  → single damage atom spanning the whole #b...#e block
 *   bare digit  → stroke count atom
 */
function parseAtoms(glyLine: string): Atom[] {
  // Strip trailing -!
  const line = glyLine.replace(/-!$/, "");

  // We need to collect damage blocks first, then split on "-"
  // Replace #b...#e spans with a placeholder so they aren't split
  const DAMAGE_MARKER = "\x00";
  const damageParts: string[] = [];
  const collapsed = line.replace(/#b[^#]*#e/g, (match) => {
    damageParts.push(match);
    return `${DAMAGE_MARKER}${damageParts.length - 1}${DAMAGE_MARKER}`;
  });

  // Split on "-" only — do NOT split on ":" or "*" (those are within-atom)
  const parts = collapsed.split("-");

  return parts
    .flatMap((raw): Atom[] => {
      const trimmed = raw.trim();
      if (!trimmed) return [];

      // Damage placeholder
      const dmgMatch = trimmed.match(/^\x00(\d+)\x00$/);
      if (dmgMatch) {
        const original = damageParts[parseInt(dmgMatch[1])];
        return [{ raw: original, codes: ["//"], special: "damage" }];
      }

      // Pure digit(s) — stroke counts
      if (/^\d+$/.test(trimmed)) {
        return [{ raw: trimmed, codes: ["Z1"], special: "stroke" }];
      }

      // Extract all sign codes from the atom (split on :, *, &, strip \RNNN)
      const signs = trimmed
        .split(/[:*&]/)
        .map((s) => s.replace(/\\R\d+$/, "").trim())
        .filter(Boolean)
        .map(resolveAlias);
      return [{ raw: trimmed, codes: signs, special: null }];
    });
}

// ─── Lexicon index ────────────────────────────────────────────────────────────

interface LexEntry {
  codes: string[];   // gardinerCodes array
  cost: number;      // lower is better
  grammar: string;
}

type LexIndex = Map<string, LexEntry[]>;

/** Build a map from "CODE-CODE-CODE" → entries for O(1) lookup during DP. */
function buildLexIndex(wordsJsonPath: string): LexIndex {
  const words = JSON.parse(fs.readFileSync(wordsJsonPath, "utf8")) as {
    gardinerCodes: string[];
    grammar: string;
    transliteration: string;
  }[];

  const index: LexIndex = new Map();

  for (const w of words) {
    if (!w.gardinerCodes || w.gardinerCodes.length === 0) continue;
    const key = w.gardinerCodes.join("-");
    const existing = index.get(key) ?? [];
    // Cost: shorter words cost more per atom; longer compounds are preferred
    const cost = Math.max(1, 4 - w.gardinerCodes.length);
    existing.push({ codes: w.gardinerCodes, cost, grammar: w.grammar ?? "" });
    index.set(key, existing);
  }

  return index;
}

// ─── DP segmenter ─────────────────────────────────────────────────────────────

const MAX_TOKEN_LEN = 12; // max atoms per lexical token
const UNKNOWN_COST  = 10;
const DAMAGE_COST   = 0;  // damage tokens are always free boundaries
const STROKE_COST   = 1;  // stroke counts attach cheaply

/** Codes that are common determinatives — can append to a lexicon match freely */
const DETERMINATIVE_CODES = new Set([
  "Z1","Z2","Z3","Z3A","Z4","Z4A","Z5",
  "A1","A2","B1","C1","D1","D2","G7",
  "N5","N33","N33A","T14","Y1","Y2","O50",
]);

function lookupWithDeterminatives(
  flatCodes: string[],
  lexIndex: LexIndex,
): { cost: number; matchLen: number } | null {
  // Try exact match first
  const exactKey = flatCodes.join("-");
  const exact = lexIndex.get(exactKey);
  if (exact) {
    return { cost: Math.min(...exact.map((e) => e.cost)), matchLen: flatCodes.length };
  }

  // Try prefix match + trailing determinatives
  for (let prefixLen = flatCodes.length - 1; prefixLen >= 1; prefixLen--) {
    const suffix = flatCodes.slice(prefixLen);
    if (!suffix.every((c) => DETERMINATIVE_CODES.has(c))) continue;
    const prefixKey = flatCodes.slice(0, prefixLen).join("-");
    const prefixEntries = lexIndex.get(prefixKey);
    if (prefixEntries) {
      const baseCost = Math.min(...prefixEntries.map((e) => e.cost));
      return { cost: baseCost, matchLen: flatCodes.length };
    }
  }

  return null;
}

export interface SegmentResult {
  tokens: string[];           // MdC strings, one per lexical token
  coverage: number;           // fraction of atoms covered by lexicon matches
  unknownSpans: string[];     // raw strings for atoms that had no lexicon match
}

export function segment(glyLine: string, lexIndex: LexIndex): SegmentResult {
  const atoms = parseAtoms(glyLine);
  const n = atoms.length;

  // dp[i] = { cost, prev, tokenEnd }
  // tokenEnd: dp[i] was reached by a token ending at atom index i-1
  const dp: { cost: number; prev: number; tokenEnd: number }[] = Array.from(
    { length: n + 1 },
    () => ({ cost: Infinity, prev: -1, tokenEnd: -1 }),
  );
  dp[0] = { cost: 0, prev: -1, tokenEnd: -1 };

  for (let i = 0; i < n; i++) {
    if (dp[i].cost === Infinity) continue;

    // Damage atoms are always forced token boundaries
    if (atoms[i].special === "damage") {
      const next = i + 1;
      const c = dp[i].cost + DAMAGE_COST;
      if (c < dp[next].cost) dp[next] = { cost: c, prev: i, tokenEnd: i };
      continue;
    }

    // Try all spans of length 1..MAX_TOKEN_LEN from position i
    for (let l = 1; l <= Math.min(MAX_TOKEN_LEN, n - i); l++) {
      const span = atoms.slice(i, i + l);

      // Skip spans that cross a damage boundary
      if (l > 1 && span.some((a) => a.special === "damage")) break;

      // Flatten all codes across atoms in span for lexicon lookup
      const flatCodes = span.flatMap((a) => a.codes);
      const match = lookupWithDeterminatives(flatCodes, lexIndex);

      let spanCost: number;
      if (match) {
        spanCost = match.cost;
      } else if (l === 1) {
        spanCost = atoms[i].special === "stroke" ? STROKE_COST : UNKNOWN_COST;
      } else {
        // Multi-atom unknown span — allow only if all atoms are strokes
        if (span.every((a) => a.special === "stroke")) {
          spanCost = STROKE_COST * l;
        } else {
          continue;
        }
      }

      const next = i + l;
      const c = dp[i].cost + spanCost;
      if (c < dp[next].cost) {
        dp[next] = { cost: c, prev: i, tokenEnd: i + l - 1 };
      }
    }

    // Fallback: single unknown atom if no path found yet from i
    if (dp[i + 1].cost === Infinity) {
      dp[i + 1] = {
        cost: dp[i].cost + UNKNOWN_COST,
        prev: i,
        tokenEnd: i,
      };
    }
  }

  // Backtrack
  const boundaries: number[] = [];
  let pos = n;
  while (pos > 0) {
    const { prev } = dp[pos];
    boundaries.push(prev); // token starts at prev
    pos = prev;
  }
  boundaries.reverse();

  // Build token MdC strings from atom spans
  const tokens: string[] = [];
  const unknownSpans: string[] = [];
  let lexiconHits = 0;

  for (let b = 0; b < boundaries.length; b++) {
    const start = boundaries[b];
    const end = b + 1 < boundaries.length ? boundaries[b + 1] : n;
    const span = atoms.slice(start, end);
    const mdc = span.map((a) => a.raw).join("-");
    tokens.push(mdc);

    // Check coverage
    const flatCodes = span.flatMap((a) => a.codes);
    if (lookupWithDeterminatives(flatCodes, lexIndex)) {
      lexiconHits += span.length;
    } else if (span.some((a) => a.special !== "damage" && a.special !== "stroke")) {
      unknownSpans.push(mdc);
    }
  }

  return {
    tokens,
    coverage: n > 0 ? lexiconHits / n : 1,
    unknownSpans,
  };
}

// ─── CLI (for standalone testing) ────────────────────────────────────────────

if (require.main === module) {
  const args = process.argv.slice(2);
  const glyLine = args[0];
  if (!glyLine) {
    console.error("Usage: npx tsx scripts/gly-segmenter.ts '<gly line>'");
    process.exit(1);
  }

  const wordsPath = path.join(__dirname, "../public/data/words.json");
  const lexIndex = buildLexIndex(wordsPath);
  console.error(`[segmenter] Lexicon: ${lexIndex.size} entries`);

  const result = segment(glyLine, lexIndex);
  console.error(`[segmenter] Coverage: ${(result.coverage * 100).toFixed(0)}%`);
  if (result.unknownSpans.length > 0) {
    console.error(`[segmenter] Unknown spans: ${result.unknownSpans.join(", ")}`);
  }
  result.tokens.forEach((t, i) => console.log(`[${i}] ${t}`));
}

export { buildLexIndex };
