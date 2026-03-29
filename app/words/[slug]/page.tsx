// ISR: render on first visit, cache indefinitely until next deploy.
export const revalidate = false;

import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CopyableWordGlyph } from "@/components/CopyableWordGlyph";
import { FitWordGlyph } from "@/components/FitWordGlyph";
import { WordCardList } from "@/components/WordCardList";
import { BookmarkButton } from "@/components/BookmarkButton";
import {
  getWordsBySpellingSlug,
  getWordsBySlug,
  getPrimarySpellingForTranslit,
  spellingSlug,
  spellingHref,
  wordSlug,
  translitToUnicode,
  isSpellingSlug,
  getWordRelations,
} from "@/lib/words";
import { getAllTexts } from "@/lib/texts";
import { buildGlyphDetailsMap } from "@/lib/glyphs";
import { GlyphDetailsProvider } from "@/components/GlyphDetailsContext";
import { ReportIssueLink } from "@/components/ReportIssueLink";
import type { DictionaryWord } from "@/lib/types";

interface Props {
  params: Promise<{ slug: string }>;
}

const GRAMMAR_LABELS: Record<string, string> = {
  NOUN: "Noun", VERB: "Verb", ADJ: "Adjective", ADV: "Adverb",
  PREP: "Preposition", PRON: "Pronoun", PART: "Particle",
  CONJ: "Conjunction", INTJ: "Interjection", INTG: "Interrogative",
  IMPR: "Imperative", NUM: "Numeral", OTHER: "Other",
};

const SOURCE_LABELS: Record<string, string> = {
  vygus: "Vygus",
  tla: "TLA",
};

const GRAMMAR_BADGE_VARIANTS: Record<string, "gold" | "sandstone" | "outline" | "default"> = {
  NOUN: "gold", VERB: "default", ADJ: "sandstone", ADV: "sandstone",
  PREP: "outline", PRON: "outline",
};

// No generateStaticParams — 41k spelling pages are rendered on-demand
// to avoid inflating the Cloudflare Worker bundle size.

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entries = await resolveEntries(slug);
  if (!entries || entries.length === 0) return {};

  const translits = [...new Set(entries.map((e) => e.transliteration))];
  const w = entries[0];
  const title = `${translits.map(translitToUnicode).join(" / ")} — Middle Egyptian`;
  const readings = translits.length;
  const description = `${readings} reading${readings !== 1 ? "s" : ""}: ${translits.join(", ")}. ${w.translation}. Gardiner: ${slug}.`;

  return {
    title,
    description,
    alternates: { canonical: `/words/${slug}` },
    openGraph: { title: `${title} — PharaLex`, description, url: `/words/${slug}` },
    twitter: { title: `${title} — PharaLex`, description },
  };
}

/** Resolve entries: try spelling slug first, fall back to transliteration redirect. */
async function resolveEntries(slug: string): Promise<DictionaryWord[] | null> {
  // Try as Gardiner spelling first
  if (isSpellingSlug(slug)) {
    const entries = await getWordsBySpellingSlug(slug);
    if (entries.length > 0) return entries;
  }

  // Fall back to transliteration lookup (backward compat)
  const byTranslit = await getWordsBySlug(slug);
  if (byTranslit.length > 0) {
    // Redirect to primary spelling page
    const primary = byTranslit[0].gardinerCodes.join("-");
    redirect(`/words/${primary}`);
  }

  return null;
}

export default async function WordPage({ params }: Props) {
  const { slug } = await params;
  const entries = await resolveEntries(slug);
  if (!entries || entries.length === 0) notFound();

  const w = entries[0];

  // Group entries by reading (transliteration), then by meaning within each reading
  const readingMap = new Map<string, DictionaryWord[]>();
  for (const e of entries) {
    const g = readingMap.get(e.transliteration);
    if (g) g.push(e);
    else readingMap.set(e.transliteration, [e]);
  }
  const readings = [...readingMap.entries()];
  const isSingleReading = readings.length === 1;

  // For single-reading words, group by meaning (sense) for detail
  const senses = isSingleReading ? buildSenses(readings[0][1]) : [];

  // Find texts containing any of the transliterations
  const translitSet = new Set(entries.map((e) => e.transliteration.toLowerCase()));
  const texts = getAllTexts().filter((text) =>
    text.lines.some((line) =>
      line.tokens.some((token) => translitSet.has(token.transliteration.toLowerCase()))
    )
  );

  // Related words (use first transliteration)
  const related = await getWordRelations(w.transliteration);

  // Glyph tooltips
  const allCodes = new Set<string>();
  for (const e of entries) {
    for (const c of e.gardinerCodes) allCodes.add(c);
  }
  const glyphDetails = await buildGlyphDetailsMap([...allCodes]);

  const currentSlug = spellingSlug(w.gardinerCodes);

  return (
    <>
      <Header />
      <GlyphDetailsProvider details={glyphDetails}>
      <main className="py-8 sm:py-12">
        <Container size="lg">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sandstone text-sm mb-8">
            <Link href="/" className="hover:text-gold transition-colors">PharaLex</Link>
            <span>/</span>
            <span className="text-brown font-mono">{currentSlug}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start">
            {/* Main column */}
            <div className="space-y-8">

              {/* Hero: the spelling (glyphs) IS the word */}
              <div className="bg-ivory-dark/50 border border-sandstone/20 rounded-2xl p-6 sm:p-8">
                <CopyableWordGlyph
                  mdc={w.mdc}
                  baseSize={48}
                  className="mb-5"
                />

                <div className="flex items-center gap-3 mb-2">
                  <p className="font-mono text-sm text-sandstone">
                    {currentSlug}
                  </p>
                  <BookmarkButton
                    type="word"
                    id={currentSlug}
                    label={`${currentSlug} – ${readings.map(([t]) => translitToUnicode(t)).join(" / ")}`}
                    size="sm"
                  />
                </div>

                {isSingleReading ? (
                  <>
                    <h1 className="text-3xl sm:text-4xl font-medium text-brown italic font-translit leading-tight mb-1">
                      {translitToUnicode(readings[0][0])}
                    </h1>
                    <p className="text-brown-light text-lg leading-relaxed mb-3">
                      {readings[0][1][0].translation}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {readings[0][1][0].grammar && (
                        <Badge variant={GRAMMAR_BADGE_VARIANTS[readings[0][1][0].grammar] ?? "outline"} size="md">
                          {GRAMMAR_LABELS[readings[0][1][0].grammar] ?? readings[0][1][0].grammar}
                        </Badge>
                      )}
                      {readings[0][1][0].gender && (readings[0][1][0].grammar === "NOUN" || readings[0][1][0].grammar === "ADJ") && (
                        <Badge variant="outline" size="md">
                          {readings[0][1][0].gender === "m" ? "masc." : "fem."}
                        </Badge>
                      )}
                    </div>
                  </>
                ) : (
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-medium text-brown italic font-translit leading-tight mb-1">
                      {readings.map(([t]) => translitToUnicode(t)).join(" / ")}
                    </h1>
                    <p className="text-sm text-sandstone">
                      {readings.length} readings for this spelling
                    </p>
                  </div>
                )}
              </div>

              {/* Readings section — shown when multiple transliterations */}
              {!isSingleReading && (
                <section>
                  <h2 className="font-display text-2xl font-semibold text-brown mb-4">
                    Readings
                    <span className="ml-2 text-base font-normal text-sandstone">
                      {readings.length} readings, {entries.length} entries
                    </span>
                  </h2>
                  <div className="space-y-6">
                    {readings.map(([translit, rEntries], ri) => (
                      <div key={translit} className="rounded-xl border border-sandstone/20 overflow-hidden">
                        <div className="bg-papyrus/30 px-4 py-3 flex flex-wrap items-center gap-2 border-b border-sandstone/15">
                          <span className="text-xs text-sandstone font-medium uppercase tracking-wider w-5">
                            {ri + 1}.
                          </span>
                          <span className="text-lg font-medium text-brown italic font-translit">
                            {translitToUnicode(translit)}
                          </span>
                          <span className="text-xs text-sandstone">{translit}</span>
                        </div>
                        <div className="p-4 space-y-2">
                          {rEntries.map((entry, ei) => (
                            <div key={ei} className="flex flex-wrap items-center gap-2">
                              <span className="text-brown">{entry.translation}</span>
                              {entry.grammar && (
                                <Badge variant={GRAMMAR_BADGE_VARIANTS[entry.grammar] ?? "outline"} size="sm">
                                  {GRAMMAR_LABELS[entry.grammar] ?? entry.grammar}
                                </Badge>
                              )}
                              {entry.gender && (entry.grammar === "NOUN" || entry.grammar === "ADJ") && (
                                <Badge variant="outline" size="sm">
                                  {entry.gender === "m" ? "masc." : "fem."}
                                </Badge>
                              )}
                              {entry.grammarRaw && entry.grammarRaw.toLowerCase() !== (GRAMMAR_LABELS[entry.grammar ?? ""] ?? "").toLowerCase() && (
                                <span className="text-xs text-sandstone/60 italic">{entry.grammarRaw}</span>
                              )}
                              {entry.notes.map((n, i) => (
                                <Badge key={i} variant="outline" size="sm">{n}</Badge>
                              ))}
                              {(entry.source || entry.attestations) && (
                                <span className="text-[10px] text-sandstone/50 uppercase tracking-wider">
                                  {entry.source ? (SOURCE_LABELS[entry.source] ?? entry.source) : ""}
                                  {entry.attestations ? `${entry.source ? " · " : ""}${entry.attestations}×` : ""}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Senses — for single-reading words with multiple meanings */}
              {isSingleReading && senses.length > 1 && (
                <section>
                  <h2 className="font-display text-2xl font-semibold text-brown mb-4">
                    Meanings
                    <span className="ml-2 text-base font-normal text-sandstone">
                      {senses.length} senses
                    </span>
                  </h2>
                  <div className="space-y-4">
                    {senses.map((sense, si) => (
                      <div key={si} className="rounded-xl border border-sandstone/20 overflow-hidden">
                        <div className="bg-papyrus/30 px-4 py-3 flex flex-wrap items-center gap-2 border-b border-sandstone/15">
                          <span className="text-xs text-sandstone font-medium uppercase tracking-wider w-5">
                            {si + 1}.
                          </span>
                          <span className="text-brown font-medium">{sense[0].translation}</span>
                          {sense[0].grammar && (
                            <Badge variant={GRAMMAR_BADGE_VARIANTS[sense[0].grammar] ?? "outline"} size="sm">
                              {GRAMMAR_LABELS[sense[0].grammar] ?? sense[0].grammar}
                            </Badge>
                          )}
                          {sense[0].gender && (sense[0].grammar === "NOUN" || sense[0].grammar === "ADJ") && (
                            <Badge variant="outline" size="sm">
                              {sense[0].gender === "m" ? "masc." : "fem."}
                            </Badge>
                          )}
                          {sense[0].grammarRaw && sense[0].grammarRaw.toLowerCase() !== (GRAMMAR_LABELS[sense[0].grammar ?? ""] ?? "").toLowerCase() && (
                            <span className="text-xs text-sandstone/60 italic">{sense[0].grammarRaw}</span>
                          )}
                          {sense[0].notes.map((n, i) => (
                            <Badge key={i} variant="outline" size="sm">{n}</Badge>
                          ))}
                          {(sense[0].source || sense[0].attestations) && (
                            <span className="text-[10px] text-sandstone/50 uppercase tracking-wider">
                              {sense[0].source ? (SOURCE_LABELS[sense[0].source] ?? sense[0].source) : ""}
                              {sense[0].attestations ? `${sense[0].source ? " · " : ""}${sense[0].attestations}×` : ""}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Attested in texts */}
              {texts.length > 0 && (
                <section>
                  <h2 className="font-display text-2xl font-semibold text-brown mb-4">
                    Attested in Texts
                  </h2>
                  <div className="space-y-3">
                    {texts.map((text) => (
                      <Link
                        key={text.slug}
                        href={`/texts/${text.slug}`}
                        className="group flex items-center gap-4 p-4 rounded-xl bg-ivory-dark/50 border border-sandstone/20 hover:border-gold/40 hover:bg-papyrus/30 transition-all"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-brown group-hover:text-gold-dark transition-colors truncate">
                            {text.title}
                          </p>
                          <p className="text-xs text-sandstone mt-0.5">{text.date}</p>
                        </div>
                        <svg className="w-4 h-4 text-sandstone/30 group-hover:text-gold transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-4">
              <div className="bg-papyrus/40 border border-gold/20 rounded-xl p-5 space-y-4">
                <h3 className="font-display text-lg text-brown">Quick Info</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">Gardiner</dt>
                    <dd className="font-mono text-brown">{currentSlug}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">
                      {readings.length === 1 ? "Reading" : "Readings"}
                    </dt>
                    <dd className="font-mono text-brown">
                      {readings.map(([t]) => translitToUnicode(t)).join(", ")}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">Entries</dt>
                    <dd className="text-brown-light">{entries.length}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">{entries.some((e) => e.source === "tla") && entries.some((e) => !e.source || e.source === "vygus") ? "Sources" : "Source"}</dt>
                    <dd className="text-brown-light italic text-xs space-y-0.5">
                      {entries.some((e) => !e.source || e.source === "vygus") && (
                        <p>Vygus Middle Egyptian Dictionary (2018)</p>
                      )}
                      {entries.some((e) => e.source === "tla") && (
                        <p>Thesaurus Linguae Aegyptiae (2024)</p>
                      )}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* External links (TLA / Wikidata) */}
              {(() => {
                const tlaId = entries.find((e) => e.tlaId)?.tlaId;
                const wikidataId = entries.find((e) => e.wikidataId)?.wikidataId;
                if (!tlaId && !wikidataId) return null;
                return (
                  <div className="bg-papyrus/40 border border-gold/20 rounded-xl p-5 space-y-3">
                    <h3 className="font-display text-lg text-brown">External Links</h3>
                    <div className="flex flex-col gap-2">
                      {tlaId && (
                        <a
                          href={`https://thesaurus-linguae-aegyptiae.de/lemma/${tlaId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gold hover:text-gold-dark transition-colors"
                        >
                          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Thesaurus Linguae Aegyptiae
                        </a>
                      )}
                      {wikidataId && (
                        <a
                          href={`https://www.wikidata.org/wiki/${wikidataId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gold hover:text-gold-dark transition-colors"
                        >
                          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Wikidata
                        </a>
                      )}
                    </div>
                  </div>
                );
              })()}

              {related.length > 0 && (
                <section>
                  <h3 className="font-display text-lg font-semibold text-brown mb-3">
                    Related Words
                  </h3>
                  <WordCardList
                    words={related.map((r) => ({
                      transliteration: r.translit,
                      translation: r.translation,
                      grammar: r.grammar,
                      mdc: r.mdc,
                      gardinerCodes: r.gardinerCodes,
                    }))}
                    max={5}
                  />
                </section>
              )}

              <div className="flex items-center gap-3">
                <Link
                  href="/search"
                  className="flex items-center gap-2 text-sm text-sandstone hover:text-gold transition-colors"
                >
                  ← Back to search
                </Link>
                <ReportIssueLink title={`${currentSlug}: data correction`} />
              </div>
            </aside>
          </div>
        </Container>
      </main>
      </GlyphDetailsProvider>
    </>
  );
}

/** Group entries by meaning (translation + grammar) into senses. */
function buildSenses(entries: DictionaryWord[]): DictionaryWord[][] {
  const senseMap = new Map<string, DictionaryWord[]>();
  for (const e of entries) {
    const key = `${e.grammar ?? ""}||${e.translation.toLowerCase().trim()}`;
    const g = senseMap.get(key);
    if (g) g.push(e);
    else senseMap.set(key, [e]);
  }

  // Drop "(unknown)" senses whose spellings are all already covered by other senses
  const allMdcSet = new Set<string>();
  for (const [key, group] of senseMap) {
    if (!key.includes("(unknown)")) group.forEach((e) => allMdcSet.add(e.mdc));
  }
  return [...senseMap.values()].filter((group) => {
    const rep = group[0];
    if (rep.translation.trim().toLowerCase() === "(unknown)") {
      return group.some((e) => !allMdcSet.has(e.mdc));
    }
    return true;
  });
}
