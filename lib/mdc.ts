/**
 * Manuel de Codage (MdC) parser
 *
 * MdC is a 1988 ISO standard for computer encoding of hieroglyphs.
 * Signs can be referenced either by Gardiner number (A1, D21, N35…) or by
 * their standard MdC transliteration-based alias (r, n, nfr, Hr…). Both are
 * equally valid — the alias map below converts aliases to Gardiner numbers
 * so we can look up the corresponding SVG.
 *
 * Layout operators:
 *   A1-B2-C3     sequential quadrats
 *   A1*B2        side-by-side within one quadrat (horizontal juxtaposition)
 *   A1:B2        stacked vertically within one quadrat (A1 on top of B2)
 *   (A1*B2):C3   grouping — parentheses treated as a nested quadrat
 *
 * Operator precedence (lowest → highest): - > : > *
 */

export type MdcNode =
  | { type: "sign"; code: string; rotation?: 90 | 180 | 270 }
  | { type: "horiz"; children: MdcNode[] }   // * — side by side
  | { type: "vert"; children: MdcNode[] }    // : — top over bottom
  | { type: "seq"; children: MdcNode[] }     // - — separate quadrats
  | { type: "ligature"; anchor: MdcNode; before?: MdcNode; after?: MdcNode } // &&& / ^^^
  | { type: "simpleLig"; children: MdcNode[] } // & — zone-based ligature
  | { type: "enclosure"; enclosure: "cartouche" | "serekh"; children: MdcNode[] } // <...>, |...|
  | { type: "lacuna"; size: "full" | "half" } // // — full lacuna, .. — half lacuna
  | { type: "restored"; children: MdcNode[] }; // [...] — scholarly restoration (signs on hatch)

/** MdC transliteration aliases → canonical Gardiner codes. */
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

/** Resolve a transliteration alias to its canonical Gardiner code. */
function resolveAlias(code: string): string {
  return MDC_ALIASES[code] ?? code;
}

// Internal placeholder chars for multi-character operators (replaced before parsing)
const LIGAFTER = "\x01"; // &&& → place after-group in anchor's bottom/after zone
const LIGBEFORE = "\x02"; // ^^^ or ^^ → place before-group in anchor's before zone
const SIMPLELAG = "\x03"; // & → simple zone-based ligature
const FULL_LACUNA = "\x04"; // // → full-width damage box
const HALF_LACUNA = "\x05"; // .. → half-width damage box

/** Normalise MdC extras before parsing. */
function normalise(mdc: string): string {
  let s = mdc;

  // Replace multi-char ligature operators BEFORE any other processing
  // Order matters: &&& before && (which we ignore/treat as *)
  s = s.replace(/&&&/g, LIGAFTER);
  s = s.replace(/\^{2,3}/g, LIGBEFORE);

  // Protect lacuna markers from the digit-to-Z1 replacement and dash-splitting
  // // → full lacuna placeholder, .. → half lacuna placeholder
  s = s.replace(/\/\//g, FULL_LACUNA);
  s = s.replace(/\.\./g, HALF_LACUNA);

  // Map bare digit stroke counts to Z1
  s = s.replace(/(^|[-:*])\d+(?=$|[-:*])/g, (_, pre) => `${pre}Z1`);

  // && (absolute group) → treat as * (simplified)
  s = s.replace(/&&/g, "*");
  // Remaining & → simple ligature placeholder
  s = s.replace(/&/g, SIMPLELAG);

  return s;
}

/** Parse a full MdC token string into a node tree. */
export function parseMdc(mdc: string): MdcNode {
  const trimmed = normalise(mdc.trim());
  if (!trimmed) return { type: "sign", code: "?" };

  // Handle enclosures
  if (trimmed.startsWith("<-") && trimmed.endsWith("->")) {
    const content = trimmed.slice(2, -2);
    return {
      type: "enclosure",
      enclosure: "cartouche",
      children: splitAt(content, "-").map(parseVert),
    };
  }
  if (trimmed.startsWith("<") && trimmed.endsWith(">")) {
    const content = trimmed.slice(1, -1);
    return {
      type: "enclosure",
      enclosure: "cartouche",
      children: splitAt(content, "-").map(parseVert),
    };
  }

  // Handle scholarly restoration: [signs] — render signs on hatched background
  // Must check for balanced brackets — [A]-[B] has multiple [...] blocks
  // and should be parsed as a sequence, not a single restoration.
  if (trimmed.startsWith("[") && trimmed.endsWith("]") && !/[\[\]]/.test(trimmed.slice(1, -1))) {
    const content = trimmed.slice(1, -1);
    return {
      type: "restored",
      children: splitAt(content, "-").map(parseVert),
    };
  }

  // Handle multiple adjacent restorations: [A]-[B]-[C] — each [...] is restored
  if (trimmed.includes("[") && trimmed.includes("]")) {
    // Split at "-" first, then wrap each [...] segment as restored
    const seq = splitAt(trimmed, "-");
    if (seq.length > 1) {
      return {
        type: "seq",
        children: seq.map((seg) => {
          const s = seg.trim();
          if (s.startsWith("[") && s.endsWith("]")) {
            const inner = s.slice(1, -1);
            return {
              type: "restored" as const,
              children: [parseVert(inner)],
            };
          }
          return parseVert(s);
        }),
      };
    }
  }

  const seq = splitAt(trimmed, "-");
  if (seq.length > 1) {
    return { type: "seq", children: seq.map(parseVert) };
  }
  return parseVert(trimmed);
}

function parseVert(s: string): MdcNode {
  const parts = splitAt(s, ":");
  if (parts.length > 1) {
    return { type: "vert", children: parts.map(parseHoriz) };
  }
  return parseHoriz(s);
}

function parseHoriz(s: string): MdcNode {
  const parts = splitAt(s, "*");
  if (parts.length > 1) {
    return { type: "horiz", children: parts.map(parseLigature) };
  }
  return parseLigature(s);
}

/**
 * Parse complex ligature operators:
 *   D\x01Y1       → { type:"ligature", anchor:D, after:Y1 }
 *   X\x02D\x01Y1  → { type:"ligature", anchor:D, before:X, after:Y1 }
 *   X\x02D        → { type:"ligature", anchor:D, before:X }
 *
 * And simple ligature (&):
 *   G43\x03X1     → { type:"simpleLig", children:[G43, X1] }
 */
function parseLigature(s: string): MdcNode {
  const hasAfter = s.includes(LIGAFTER);
  const hasBefore = s.includes(LIGBEFORE);
  const hasSimple = s.includes(SIMPLELAG);

  if (!hasAfter && !hasBefore && !hasSimple) return parseAtom(s);

  // Simple ligature: A&B (or A&B&C…)
  if (hasSimple && !hasAfter && !hasBefore) {
    const parts = s.split(SIMPLELAG).map((p) => parseAtom(p.trim()));
    if (parts.length === 1) return parts[0];
    return { type: "simpleLig", children: parts };
  }

  if (hasAfter && hasBefore) {
    const [beforePart, rest] = splitAtStr(s, LIGBEFORE);
    const [anchorPart, afterPart] = splitAtStr(rest, LIGAFTER);
    return {
      type: "ligature",
      anchor: parseAtom(anchorPart),
      before: parseAtom(beforePart),
      after: parseAtom(afterPart),
    };
  }

  if (hasAfter) {
    const [anchorPart, afterPart] = splitAtStr(s, LIGAFTER);
    return {
      type: "ligature",
      anchor: parseAtom(anchorPart),
      after: parseAtom(afterPart),
    };
  }

  const [beforePart, anchorPart] = splitAtStr(s, LIGBEFORE);
  return {
    type: "ligature",
    anchor: parseAtom(anchorPart),
    before: parseAtom(beforePart),
  };
}

/** Split on the first occurrence of a single-char separator. */
function splitAtStr(s: string, sep: string): [string, string] {
  const idx = s.indexOf(sep);
  if (idx === -1) return [s, ""];
  return [s.slice(0, idx), s.slice(idx + sep.length)];
}

function parseAtom(s: string): MdcNode {
  if (s === FULL_LACUNA) return { type: "lacuna", size: "full" };
  if (s === HALF_LACUNA) return { type: "lacuna", size: "half" };
  if (s.startsWith("(") && s.endsWith(")")) {
    return parseMdc(s.slice(1, -1));
  }
  if (s.startsWith("[") && s.endsWith("]")) {
    const content = s.slice(1, -1);
    return {
      type: "restored",
      children: splitAt(content, "-").map(parseVert),
    };
  }

  // Parse optional rotation suffix: CODE\R90, CODE\R180, CODE\R270
  const rotMatch = s.match(/^(.+?)\\R(90|180|270)$/);
  if (rotMatch) {
    const code = resolveAlias(rotMatch[1].trim());
    const rotation = parseInt(rotMatch[2], 10) as 90 | 180 | 270;
    return { type: "sign", code, rotation };
  }

  return { type: "sign", code: resolveAlias(s.trim()) };
}

/**
 * Split string on a separator character, but only at the top level
 * (i.e. not inside parentheses or square brackets).
 */
function splitAt(s: string, sep: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let bracketDepth = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") depth++;
    else if (s[i] === ")") depth--;
    else if (s[i] === "[") bracketDepth++;
    else if (s[i] === "]") bracketDepth--;
    else if (s[i] === sep && depth === 0 && bracketDepth === 0) {
      parts.push(s.slice(start, i));
      start = i + 1;
    }
  }
  parts.push(s.slice(start));
  return parts;
}

/** Extract all Gardiner codes from a parsed node (for tooltips, linking, etc.) */
export function extractCodes(node: MdcNode): string[] {
  if (node.type === "sign") {
    if (!node.code || node.code === "?" || node.code === "") return [];
    return [node.code];
  }
  if (node.type === "lacuna") {
    return [];
  }
  if (node.type === "restored") {
    return node.children.flatMap(extractCodes);
  }
  if (node.type === "ligature") {
    const codes: string[] = [];
    if (node.before) codes.push(...extractCodes(node.before));
    codes.push(...extractCodes(node.anchor));
    if (node.after) codes.push(...extractCodes(node.after));
    return codes;
  }
  if (node.type === "enclosure") {
    return node.children.flatMap(extractCodes);
  }
  // simpleLig + horiz + vert + seq all have children
  return node.children.flatMap(extractCodes);
}

/** Extract all Gardiner codes directly from an MdC string. */
export function mdcToCodes(mdc: string): string[] {
  return extractCodes(parseMdc(mdc));
}
