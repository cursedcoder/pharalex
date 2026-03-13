/**
 * JSesh .gly line → structured JSON pipeline using the Anthropic API.
 *
 * Architecture (compiler-style):
 *   1. Intent layer    — parse CLI input into a structured task
 *   2. Split pass      — Claude segments a raw JSesh line into lexical MdC tokens
 *                        (decides word boundaries; never invents or changes signs)
 *   3. Annotate pass   — Claude maps each MdC token → transliteration + translation + grammar
 *   4. Validator       — check schema, grammar tags, non-empty fields
 *   5. Repair pass     — feed structured errors back (up to 3 rounds, temp 0)
 *   6. Output          — TypeScript snippet (stdout); diagnostics (stderr)
 *
 * Input:
 *   --gly <file>         path to a JSesh .gly file
 *   --line <n>           1-based line number within the .gly (text lines only, skipping headers)
 *   --title <title>      text title for the output comment
 *   --translation <str>  optional known whole-line translation
 *
 *   # Or pass MdC tokens directly (skip split pass):
 *   --mdc "token1" "token2" ...
 *
 * Usage:
 *   npx tsx scripts/generate-text.ts \
 *     --gly "~/Downloads/O. Gardiner 4.gly" \
 *     --line 1 \
 *     --title "O. Gardiner 4: Work-Attendance Register"
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
  /** Raw JSesh .gly line string — used when --gly is passed */
  glyLine?: string;
  /** Pre-split MdC tokens — used when --mdc is passed, or after split pass */
  mdcTokens: string[];
  knownTranslation?: string;
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
- Use standard Egyptological transliteration with proper diacritics (ꜣ ꜥ ḥ ḫ ẖ š ṯ ḏ).
- Transliteration conventions (follow these exactly):
    • Use "j" for the yod (M17, i-alias), not "i".
    • Do NOT use "=" as a suffix connector. Write suffix pronouns with a space (e.g. "rḏj.n n", not "rḏj.n=n"; "jrt k", not "jrt=k").
    • Use "-" as the infix separator within a compound token (e.g. jnḏ-ḥr k, nfr-ḥr).
    • Do NOT split a single MdC token into multiple transliteration words — one mdc → one transliteration string.
    • Verbal forms ending in .n use a dot (ṯs.n, sqꜣ.n), not a hyphen.
- Grammar tags: NOUN VERB ADJ PREP PRON PART CONJ ADV DET INTJ NUM OTHER
  • Tag the whole token, not just the stem. E.g. "jnḏ-ḥr k" is a VERB (greeting formula), not INTJ.
- If the whole-line translation is already provided, use it as lineTranslation unchanged.
- If lineTranslation is not provided, compose it from the per-token translations.
- For translation, render the token's contextual English meaning including prepositions
  (e.g. "of radiance", not just "radiance"; "hail to you", not "O, hail to you" when "O" belongs to the whole line).
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

// ─── Split pass (DP-first, LLM fallback for unknown spans) ───────────────────

import { buildLexIndex, segment } from "./gly-segmenter";

// Load lexicon once (lazy singleton)
let _lexIndex: ReturnType<typeof buildLexIndex> | null = null;
function getLexIndex(): ReturnType<typeof buildLexIndex> {
  if (!_lexIndex) {
    const wordsPath = path.join(__dirname, "../public/data/words.json");
    _lexIndex = buildLexIndex(wordsPath);
    console.error(`[segmenter] Lexicon loaded: ${_lexIndex.size} entries`);
  }
  return _lexIndex;
}

const SPLIT_SYSTEM_PROMPT = `You are an expert in JSesh hieroglyphic encoding and Manuel de Codage (MdC).

Your task: given a contiguous MdC sign sequence that could not be segmented automatically,
split it into lexical tokens — one token per Egyptian word or fixed phrase.

Rules:
- Return ONLY valid JSON — absolutely no prose, no explanation, no markdown fences.
- Each token is a contiguous MdC string using the original sign codes and operators exactly as given.
- Preserve ALL original notation: \\RNNN rotations, #b...#e damage markers, backtick half-cadrats, ligature operators (&, &&&, ^^^).
- Do NOT resolve aliases, do NOT change any sign codes.
- The concatenation of all tokens joined by "-" must equal the input span exactly.
- Determinatives (A1 seated man, A2 man to mouth, A40 seated god, G7 falcon…) belong to the token they determine.
- Number strokes that belong to the same numeral stay in one token.
- Output format (nothing else): {"tokens":["token1","token2",...],"notes":"..."}`;

function buildSplitFallbackMessage(span: string, title: string, lineNum: number): string {
  return `Text: "${title}", line ${lineNum}

Unknown MdC span (could not auto-segment):
${span}

Split this span into lexical MdC tokens.
Return JSON: { "tokens": ["...", "..."], "notes": "..." }`;
}

async function runSplitPass(
  client: Anthropic,
  glyLine: string,
  title: string,
  lineNum: number,
): Promise<string[]> {
  console.error("[pipeline] DP segmentation…");
  const lexIndex = getLexIndex();
  const result = segment(glyLine, lexIndex);

  console.error(`[segmenter] Coverage: ${(result.coverage * 100).toFixed(0)}%`);
  if (result.unknownSpans.length > 0) {
    console.error(`[segmenter] Unknown spans (→ LLM fallback): ${result.unknownSpans.join(", ")}`);
  }

  // If nothing unknown, we're done
  if (result.unknownSpans.length === 0) {
    console.error(`[segmenter] ${result.tokens.length} tokens (fully deterministic)`);
    result.tokens.forEach((t, i) => console.error(`  [${i}] ${t}`));
    return result.tokens;
  }

  // LLM fallback for unknown spans — replace each unknown span in result.tokens
  // with LLM-produced sub-tokens
  const finalTokens: string[] = [];
  for (const tok of result.tokens) {
    if (!result.unknownSpans.includes(tok)) {
      finalTokens.push(tok);
      continue;
    }

    console.error(`[pipeline] LLM fallback for span: ${tok}`);
    let subTokens: string[];
    try {
      subTokens = await runLlmSplitSpan(client, tok, title, lineNum);
    } catch (e) {
      console.error(`[pipeline] LLM fallback failed for "${tok}", keeping as-is:`, e);
      subTokens = [tok];
    }
    finalTokens.push(...subTokens);
  }

  console.error(`[segmenter] ${finalTokens.length} tokens (DP + LLM):`);
  finalTokens.forEach((t, i) => console.error(`  [${i}] ${t}`));
  return finalTokens;
}

async function runLlmSplitSpan(
  client: Anthropic,
  span: string,
  title: string,
  lineNum: number,
): Promise<string[]> {
  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    temperature: 0,
    system: SPLIT_SYSTEM_PROMPT,
    messages: [{ role: "user", content: buildSplitFallbackMessage(span, title, lineNum) }],
  });

  const block = response.content.find((b) => b.type === "text");
  const raw = block?.text?.trim() ?? "";

  let parsed: { tokens: string[]; notes?: string };
  try {
    const stripped = raw.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    parsed = JSON.parse(stripped);
  } catch (e) {
    const retry = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      temperature: 0,
      system: SPLIT_SYSTEM_PROMPT,
      messages: [
        { role: "user", content: buildSplitFallbackMessage(span, title, lineNum) },
        { role: "assistant", content: raw },
        { role: "user", content: "Return ONLY valid JSON. No prose, no explanation." },
      ],
    });
    const retryBlock = retry.content.find((b) => b.type === "text");
    const retryRaw = retryBlock?.text?.trim() ?? "";
    const stripped2 = retryRaw.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    parsed = JSON.parse(stripped2);
  }

  if (parsed.notes) console.error("[split fallback notes]", parsed.notes);
  return parsed.tokens ?? [span];
}



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

  // Split pass — only when a raw .gly line was provided
  if (intent.glyLine) {
    intent.mdcTokens = await runSplitPass(client, intent.glyLine, intent.title, intent.line);
  }

  const MAX_ROUNDS = 3;
  let rawJson = "";
  let plan: Plan | null = null;
  let validation: ValidationResult = { valid: false, errors: ["not yet run"] };

  for (let round = 0; round <= MAX_ROUNDS; round++) {
    if (round === 0) {
      console.error(`[pipeline] Planning…`);
      const response = await client.messages.create({
        model: "claude-sonnet-4-6",
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
        model: "claude-sonnet-4-6",
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

/** Read a .gly file and extract the Nth text line (1-based, skipping JSesh headers and metadata). */
function extractGlyLine(glyFile: string, lineNum: number): string {
  const raw = fs.readFileSync(glyFile, "utf8");
  const textLines = raw
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => {
      // Skip JSesh header/metadata lines
      if (l.startsWith("++")) return false; // settings
      if (l.startsWith("+b") || l.startsWith("+i")) return false; // bold/italic labels
      if (l === "") return false;
      return true;
    });

  if (lineNum < 1 || lineNum > textLines.length) {
    console.error(`Error: line ${lineNum} not found. File has ${textLines.length} text lines.`);
    process.exit(1);
  }

  // Strip trailing "-!" line terminator
  return textLines[lineNum - 1].replace(/-!$/, "");
}

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
  const glyFile     = flag("--gly");

  // --gly mode: read file and extract line
  if (glyFile) {
    const resolvedPath = glyFile.replace(/^~/, process.env.HOME ?? "");
    const glyLine = extractGlyLine(resolvedPath, parseInt(lineStr, 10));
    console.error(`[pipeline] .gly line ${lineStr}: ${glyLine}`);
    return {
      title,
      line: parseInt(lineStr, 10),
      glyLine,
      mdcTokens: [],
      knownTranslation: translation,
    };
  }

  // --mdc mode: tokens passed directly
  const mdcIdx = args.indexOf("--mdc");
  if (mdcIdx === -1) {
    console.error(
      "Usage:\n" +
      "  # From a JSesh .gly file (recommended):\n" +
      "  npx tsx scripts/generate-text.ts \\\n" +
      '    --gly "/path/to/file.gly" --line 1 \\\n' +
      '    --title "Text title" \\\n' +
      '    [--translation "Full line translation"]\n' +
      "\n" +
      "  # Or pass MdC tokens directly:\n" +
      "  npx tsx scripts/generate-text.ts \\\n" +
      '    --title "Text title" --line 1 \\\n' +
      '    --mdc "token1" "token2" ...'
    );
    process.exit(1);
  }

  const mdcTokens: string[] = [];
  for (let i = mdcIdx + 1; i < args.length; i++) {
    if (args[i].startsWith("--")) break;
    mdcTokens.push(args[i]);
  }

  if (mdcTokens.length === 0) {
    console.error("Error: --mdc requires at least one token.");
    process.exit(1);
  }

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
