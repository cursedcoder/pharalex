/**
 * MdC → structured JSON pipeline using the Anthropic API.
 *
 * Give it a raw MdC line (already split into per-token MdC strings) and an
 * optional known translation; get back a TextLine object ready to paste into
 * lib/data/texts.ts.
 *
 * Architecture (compiler-style, no hallucination-prone free generation):
 *   1. Intent layer    — parse CLI input into a structured task
 *   2. Lexicon layer   — expose MDC_ALIASES as a reference (LLM reads, never invents)
 *   3. Planner         — Claude maps each MdC token → transliteration + translation + grammar
 *                        It NEVER changes the MdC strings; it only annotates them.
 *   4. Validator       — check schema, grammar tags, non-empty fields
 *   5. Repair pass     — feed structured errors back (up to 3 rounds, temp 0)
 *   6. Output          — TypeScript snippet + raw JSON (stdout); diagnostics (stderr)
 *
 * Input modes:
 *   A) Pass individual MdC tokens directly:
 *      --mdc "i-Aa27-D&&&Y1-Hr*Z1:k" "nfr-f:r-Hr*Z1" "V30" "mA-A-G43&t-N8:Z2"
 *
 *   B) Pass a whole MdC line (space-separated quadrat groups) and let the
 *      script split it with --split:
 *      --mdc "i-Aa27-D&&&Y1-Hr*Z1:k nfr-f:r-Hr*Z1 V30 mA-A-G43&t-N8:Z2" --split
 *
 *   C) Provide a known translation to anchor the model:
 *      --translation "O, hail to you, beautiful of face, lord of radiance"
 *
 * Usage:
 *   npx tsx scripts/generate-text.ts \
 *     --title "Golden Mask of Tutankhamun" \
 *     --line 1 \
 *     --translation "O, hail to you, beautiful of face, lord of radiance," \
 *     --mdc "i-Aa27-D&&&Y1-Hr*Z1:k" "nfr-f:r-Hr*Z1" "V30" "mA-A-G43&t-N8:Z2"
 *
 * Env:
 *   ANTHROPIC_API_KEY  — required (or put it in .env.local)
 */

import Anthropic from "@anthropic-ai/sdk";
import * as fs from "fs";
import * as path from "path";

// ─── Load .env.local (no dotenv dep) ─────────────────────────────────────────

const envPath = path.join(__dirname, "../.env.local");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (!(key in process.env)) process.env[key] = val;
  }
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface Intent {
  title: string;
  line: number;
  mdcTokens: string[];          // one MdC string per word/token
  knownTranslation?: string;    // full-line translation if already known
}

interface PlannedToken {
  mdc: string;                  // original, untouched
  transliteration: string;      // e.g. "jnḏ-ḥr=k"
  translation: string;          // e.g. "hail to you"
  grammar: string;              // NOUN | VERB | ADJ | PREP | PRON | PART | CONJ | ADV | DET | INTJ | NUM
}

interface Plan {
  tokens: PlannedToken[];
  lineTranslation: string;
  notes?: string;
}

interface ValidationResult {
  valid: boolean;
  errors: string[];
}

// ─── Lexicon (alias reference for the model) ──────────────────────────────────

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

const VALID_GRAMMAR_TAGS = new Set([
  "NOUN","VERB","ADJ","PREP","PRON","PART","CONJ","ADV","DET","INTJ","NUM","OTHER",
]);

// ─── Validator ────────────────────────────────────────────────────────────────

function validatePlan(plan: Plan, expectedMdcTokens: string[]): ValidationResult {
  const errors: string[] = [];

  if (!Array.isArray(plan.tokens)) {
    return { valid: false, errors: ["plan.tokens is not an array"] };
  }

  if (plan.tokens.length !== expectedMdcTokens.length) {
    errors.push(
      `Expected ${expectedMdcTokens.length} tokens, got ${plan.tokens.length}. ` +
      `The number of output tokens must exactly match the number of input MdC tokens.`
    );
  }

  for (let i = 0; i < plan.tokens.length; i++) {
    const tok = plan.tokens[i];
    const prefix = `token[${i}]`;

    if (tok.mdc !== expectedMdcTokens[i]) {
      errors.push(
        `${prefix}: mdc must be "${expectedMdcTokens[i]}" (unchanged from input), got "${tok.mdc}"`
      );
    }

    if (!tok.transliteration || !tok.transliteration.trim()) {
      errors.push(`${prefix}: transliteration is empty`);
    }

    if (!tok.translation || !tok.translation.trim()) {
      errors.push(`${prefix}: translation is empty`);
    }

    if (!VALID_GRAMMAR_TAGS.has(tok.grammar)) {
      errors.push(
        `${prefix}: invalid grammar tag "${tok.grammar}". ` +
        `Must be one of: ${[...VALID_GRAMMAR_TAGS].join(", ")}`
      );
    }
  }

  if (!plan.lineTranslation || !plan.lineTranslation.trim()) {
    errors.push("lineTranslation is empty");
  }

  return { valid: errors.length === 0, errors };
}

// ─── Prompts ──────────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are an Egyptologist specialising in Middle Egyptian and the Manuel de Codage (MdC) notation.

Your task: given a list of MdC hieroglyph strings (one per lexical token), produce the Egyptological transliteration, English translation, and grammatical tag for each token.

Rules:
- Return ONLY valid JSON — no prose, no markdown fences.
- The output tokens array must have EXACTLY the same number of entries as the input mdc_tokens array.
- The "mdc" field of each output token must be IDENTICAL to the corresponding input token — do not modify it.
- Use standard Egyptological transliteration with proper diacritics (ꜣ ꜥ ḥ ḫ ẖ š ṯ ḏ ṯ).
- Grammar tags: NOUN VERB ADJ PREP PRON PART CONJ ADV DET INTJ NUM OTHER
- If the whole-line translation is already provided, use it as lineTranslation unchanged.
- If lineTranslation is not provided, compose it from the per-token translations.
- Use the MdC alias table only as a reading aid — it tells you which Gardiner sign each alias refers to.`;

function buildAliasReference(): string {
  const lines: string[] = ["MdC alias reference (alias → Gardiner code):"];
  for (const [alias, code] of Object.entries(MDC_ALIASES)) {
    lines.push(`  ${alias} → ${code}`);
  }
  return lines.join("\n");
}

function buildPlannerMessage(intent: Intent): string {
  const knownTranslationNote = intent.knownTranslation
    ? `\nKnown whole-line translation (use this exactly as lineTranslation):\n"${intent.knownTranslation}"\n`
    : "";

  return `Text: "${intent.title}", line ${intent.line}
${knownTranslationNote}
Input MdC tokens (${intent.mdcTokens.length} tokens — do not change them):
${intent.mdcTokens.map((t, i) => `  [${i}] ${t}`).join("\n")}

${buildAliasReference()}

Return JSON:
{
  "tokens": [
    {
      "mdc": "<exact input token>",
      "transliteration": "...",
      "translation": "...",
      "grammar": "NOUN|VERB|ADJ|PREP|PRON|PART|CONJ|ADV|DET|INTJ|NUM|OTHER"
    }
  ],
  "lineTranslation": "...",
  "notes": "..."
}`;
}

function buildRepairMessage(
  previousJson: string,
  errors: string[],
  intent: Intent
): string {
  return `Your previous output had validation errors. Fix them and return corrected JSON only.

Errors:
${errors.map((e, i) => `  ${i + 1}. ${e}`).join("\n")}

Original input MdC tokens (${intent.mdcTokens.length} — keep them exactly):
${intent.mdcTokens.map((t, i) => `  [${i}] ${t}`).join("\n")}

Your previous output:
${previousJson}

Return ONLY corrected JSON.`;
}

// ─── Pipeline ────────────────────────────────────────────────────────────────

async function runPipeline(intent: Intent): Promise<void> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error(
      "Error: ANTHROPIC_API_KEY is not set.\n" +
      "  • Export it: export ANTHROPIC_API_KEY=sk-ant-...\n" +
      "  • Or put ANTHROPIC_API_KEY=sk-ant-... in .env.local at the project root"
    );
    process.exit(1);
  }

  const client = new Anthropic({ apiKey });

  const MAX_ROUNDS = 3;
  let rawJson = "";
  let plan: Plan | null = null;
  let validation: ValidationResult = { valid: false, errors: ["not yet run"] };

  for (let round = 0; round <= MAX_ROUNDS; round++) {
    if (round === 0) {
      console.error(`[pipeline] Planning…`);
      const response = await client.messages.create({
        model: "claude-opus-4-5",
        max_tokens: 4096,
        temperature: 0.1,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: buildPlannerMessage(intent) }],
      });
      const block = response.content.find((b) => b.type === "text");
      rawJson = block?.text?.trim() ?? "";
    } else {
      console.error(`[pipeline] Repair round ${round}…`);
      const response = await client.messages.create({
        model: "claude-opus-4-5",
        max_tokens: 4096,
        temperature: 0,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: buildRepairMessage(rawJson, validation.errors, intent) }],
      });
      const block = response.content.find((b) => b.type === "text");
      rawJson = block?.text?.trim() ?? "";
    }

    try {
      const stripped = rawJson.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
      plan = JSON.parse(stripped) as Plan;
    } catch (e) {
      validation = { valid: false, errors: [`JSON parse error: ${e}`] };
      if (round >= MAX_ROUNDS) break;
      continue;
    }

    validation = validatePlan(plan, intent.mdcTokens);
    if (validation.valid) break;
    if (round >= MAX_ROUNDS) break;
  }

  if (!plan) {
    console.error("[pipeline] Failed to produce a valid plan.");
    process.exit(1);
  }

  if (!validation.valid) {
    console.error("[warning] Output has unresolved validation errors:");
    for (const e of validation.errors) console.error("  •", e);
    console.error("");
  }

  if (plan.notes) {
    console.error("[notes]", plan.notes, "\n");
  }

  // ── Output ────────────────────────────────────────────────────────────────
  const lineOutput = {
    tokens: plan.tokens.map(({ mdc, transliteration, translation, grammar }) => ({
      mdc,
      transliteration,
      translation,
      grammar,
    })),
    lineTranslation: plan.lineTranslation,
  };

  // Print TypeScript snippet to stdout
  console.log(formatAsTs(lineOutput, intent));
}

// ─── TypeScript formatter ─────────────────────────────────────────────────────

interface LineOutput {
  tokens: { mdc: string; transliteration: string; translation: string; grammar: string }[];
  lineTranslation: string;
}

function formatAsTs(line: LineOutput, intent: Intent): string {
  const ind = "        ";
  const tokensTs = line.tokens
    .map(
      (t) =>
        `${ind}{\n` +
        `${ind}  mdc: ${JSON.stringify(t.mdc)},\n` +
        `${ind}  transliteration: ${JSON.stringify(t.transliteration)},\n` +
        `${ind}  translation: ${JSON.stringify(t.translation)},\n` +
        `${ind}  grammar: ${JSON.stringify(t.grammar)},\n` +
        `${ind}}`
    )
    .join(",\n");

  return (
    `// ${intent.title} — line ${intent.line}\n` +
    `      {\n` +
    `        tokens: [\n` +
    tokensTs + "\n" +
    `        ],\n` +
    `        lineTranslation: ${JSON.stringify(line.lineTranslation)},\n` +
    `      },`
  );
}

// ─── CLI ──────────────────────────────────────────────────────────────────────

function parseArgs(): Intent {
  const args = process.argv.slice(2);

  function flag(name: string): string | undefined {
    const idx = args.indexOf(name);
    if (idx === -1) return undefined;
    return args[idx + 1];
  }

  const title       = flag("--title")       ?? "Unknown text";
  const lineStr     = flag("--line")        ?? "1";
  const translation = flag("--translation");
  const splitMode   = args.includes("--split");

  // Collect --mdc values: everything after --mdc that doesn't start with --
  const mdcIdx = args.indexOf("--mdc");
  if (mdcIdx === -1) {
    console.error(
      "Usage:\n" +
      "  npx tsx scripts/generate-text.ts \\\n" +
      '    --title "Text title" \\\n' +
      "    --line 1 \\\n" +
      '    [--translation "Full line translation"] \\\n' +
      '    --mdc "token1-mdc" "token2-mdc" ...\n' +
      "\n" +
      '  # Or pass one space-separated string and let the script split it:\n' +
      '    --mdc "token1-mdc token2-mdc ..." --split'
    );
    process.exit(1);
  }

  const rawMdcValues: string[] = [];
  for (let i = mdcIdx + 1; i < args.length; i++) {
    if (args[i].startsWith("--")) break;
    rawMdcValues.push(args[i]);
  }

  if (rawMdcValues.length === 0) {
    console.error("Error: --mdc requires at least one token.");
    process.exit(1);
  }

  const mdcTokens = splitMode
    ? rawMdcValues.join(" ").split(/\s+/).filter(Boolean)
    : rawMdcValues;

  return {
    title,
    line: parseInt(lineStr, 10),
    mdcTokens,
    knownTranslation: translation,
  };
}

runPipeline(parseArgs()).catch((err) => {
  console.error("[fatal]", err);
  process.exit(1);
});
