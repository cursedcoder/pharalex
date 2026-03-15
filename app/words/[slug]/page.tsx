export const dynamic = "force-static";

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { WordGlyph } from "@/components/WordGlyph";
import { CopyableWordGlyph } from "@/components/CopyableWordGlyph";
import { WordCardList } from "@/components/WordCardList";
import {
  getWordsBySlug,
  getAllTransliterations,
  wordSlug,
  translitToUnicode,
  getWordRelations,
} from "@/lib/words";
import { getAllTexts } from "@/lib/texts";
import { buildGlyphDetailsMap } from "@/lib/glyphs";
import { GlyphDetailsProvider } from "@/components/GlyphDetailsContext";
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

const GRAMMAR_BADGE_VARIANTS: Record<string, "gold" | "sandstone" | "outline" | "default"> = {
  NOUN: "gold", VERB: "default", ADJ: "sandstone", ADV: "sandstone",
  PREP: "outline", PRON: "outline",
};

export async function generateStaticParams() {
  const translits = await getAllTransliterations();
  return translits.map((t) => ({ slug: wordSlug(t) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entries = await getWordsBySlug(slug);
  if (entries.length === 0) return {};

  const w = entries[0];
  const title = `${translitToUnicode(w.transliteration)} — Middle Egyptian`;
  const description = `${w.transliteration}: ${w.translation}${w.grammar ? ` (${GRAMMAR_LABELS[w.grammar] ?? w.grammar})` : ""}. ${entries.length} hieroglyphic spelling${entries.length !== 1 ? "s" : ""} in the Middle Egyptian dictionary.`;

  return {
    title,
    description,
    alternates: { canonical: `/words/${slug}` },
    openGraph: { title: `${title} — PharaLex`, description, url: `/words/${slug}` },
    twitter: { title: `${title} — PharaLex`, description },
  };
}

export default async function WordPage({ params }: Props) {
  const { slug } = await params;
  const entries = await getWordsBySlug(slug);
  if (entries.length === 0) notFound();

  const w = entries[0];

  // Group entries by meaning (translation + grammar). Each group is one "sense"
  // of the word; entries within a group are alternate spellings of that sense.
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
  const senses = [...senseMap.values()].filter((group) => {
    const rep = group[0];
    if (rep.translation.trim().toLowerCase() === "(unknown)") {
      // Keep only if it has at least one spelling not seen in any named sense
      return group.some((e) => !allMdcSet.has(e.mdc));
    }
    return true;
  });
  const primarySense = senses[0];
  const primaryEntry = primarySense[0]; // canonical entry shown in the hero

  // Find texts that contain this transliteration as a token
  const texts = getAllTexts().filter((text) =>
    text.lines.some((line) =>
      line.tokens.some(
        (token) =>
          token.transliteration.toLowerCase() === w.transliteration.toLowerCase()
      )
    )
  );

  // Related words
  const related = getWordRelations(w.transliteration);

  // Collect all Gardiner codes for glyph tooltips
  const allCodes = new Set<string>();
  for (const e of entries) {
    for (const c of e.gardinerCodes) allCodes.add(c);
  }
  const glyphDetails = await buildGlyphDetailsMap([...allCodes]);

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
            <span className="text-brown font-mono">{translitToUnicode(w.transliteration)}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start">
            {/* Main column */}
            <div className="space-y-8">

              {/* Header card */}
              <div className="bg-ivory-dark/50 border border-sandstone/20 rounded-2xl p-6 sm:p-8">
                <CopyableWordGlyph
                  mdc={primaryEntry.mdc}
                  baseSize={48}
                  className="mb-5"
                />

                <h1 className="font-mono text-3xl sm:text-4xl font-bold text-brown leading-tight mb-0.5">
                  {translitToUnicode(primaryEntry.transliteration)}
                </h1>
                <p className="font-mono text-sm text-sandstone mb-1">
                  {primaryEntry.transliteration.replace(/ /g, ".").replace(/\.{2,}/g, ".")}
                </p>
                <p className="text-brown-light text-lg leading-relaxed mb-3">
                  {primaryEntry.translation}
                </p>

                <div className="flex flex-wrap gap-2">
                  {primaryEntry.grammar && (
                    <Badge
                      variant={GRAMMAR_BADGE_VARIANTS[primaryEntry.grammar] ?? "outline"}
                      size="md"
                    >
                      {GRAMMAR_LABELS[primaryEntry.grammar] ?? primaryEntry.grammar}
                    </Badge>
                  )}
                  {primaryEntry.grammarRaw && primaryEntry.grammarRaw.toLowerCase() !== (GRAMMAR_LABELS[primaryEntry.grammar ?? ""] ?? "").toLowerCase() && (
                    <Badge variant="outline" size="md">{primaryEntry.grammarRaw}</Badge>
                  )}
                  {primaryEntry.notes.map((note, i) => (
                    <Badge key={i} variant="outline" size="md">{note}</Badge>
                  ))}
                </div>
              </div>

              {/* Senses — each sense is a distinct meaning, with its own spellings */}
              {senses.length > 0 && (
                <section>
                  <h2 className="font-display text-2xl font-semibold text-brown mb-4">
                    {senses.length === 1 ? "Hieroglyphic Spellings" : "Meanings & Spellings"}
                    <span className="ml-2 text-base font-normal text-sandstone">
                      {senses.length === 1
                        ? `${senses[0].length} spelling${senses[0].length !== 1 ? "s" : ""}`
                        : `${senses.length} senses, ${entries.length} spellings`}
                    </span>
                  </h2>
                  <div className="space-y-6">
                    {senses.map((spellings, si) => {
                      const rep = spellings[0];
                      // Notes already shown in the sense header — don't repeat in spelling cards
                      const headerNotes = new Set(
                        rep.notes.filter((n) => n.toLowerCase() !== (rep.grammarRaw ?? "").toLowerCase())
                      );
                      return (
                        <div key={si} className="rounded-xl border border-sandstone/20 overflow-hidden">
                          {/* Sense header */}
                          <div className="bg-papyrus/30 px-4 py-3 flex flex-wrap items-center gap-2 border-b border-sandstone/15">
                            <span className="text-xs text-sandstone font-medium uppercase tracking-wider w-5">
                              {si + 1}.
                            </span>
                            <span className="text-brown font-medium">{rep.translation}</span>
                            {rep.grammar && (
                              <Badge variant={GRAMMAR_BADGE_VARIANTS[rep.grammar] ?? "outline"} size="sm">
                                {GRAMMAR_LABELS[rep.grammar] ?? rep.grammar}
                              </Badge>
                            )}
                            {rep.grammarRaw && rep.grammarRaw.toLowerCase() !== (GRAMMAR_LABELS[rep.grammar ?? ""] ?? "").toLowerCase() && (
                              <span className="text-xs text-sandstone/60 italic">{rep.grammarRaw}</span>
                            )}
                            {[...headerNotes].map((n, i) => (
                              <Badge key={i} variant="outline" size="sm">{n}</Badge>
                            ))}
                          </div>
                          {/* Spellings for this sense */}
                          <div className="flex flex-wrap gap-3 p-4">
                            {spellings.map((entry, ei) => (
                              <SpellingCard key={ei} entry={entry} sharedNotes={headerNotes} />
                            ))}
                          </div>
                        </div>
                      );
                    })}
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
                    <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">Transliteration</dt>
                    <dd className="font-mono text-brown">{translitToUnicode(w.transliteration)}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">Translation</dt>
                    <dd className="text-brown-light">{primaryEntry.translation}</dd>
                  </div>
                  {primaryEntry.grammar && (
                    <div>
                      <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">Part of Speech</dt>
                      <dd className="text-brown-light">{GRAMMAR_LABELS[primaryEntry.grammar] ?? primaryEntry.grammar}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">Senses</dt>
                    <dd className="text-brown-light">{senses.length}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">Spellings</dt>
                    <dd className="text-brown-light">{entries.length}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">Source</dt>
                    <dd className="text-brown-light italic text-xs">Vygus Middle Egyptian Dictionary (2018)</dd>
                  </div>
                </dl>
              </div>

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
                    }))}
                    max={5}
                  />
                </section>
              )}

              <Link
                href="/search"
                className="flex items-center gap-2 text-sm text-sandstone hover:text-gold transition-colors"
              >
                ← Back to search
              </Link>
            </aside>
          </div>
        </Container>
      </main>
      </GlyphDetailsProvider>
    </>
  );
}

function SpellingCard({ entry, sharedNotes }: { entry: DictionaryWord; sharedNotes: Set<string> }) {
  const uniqueNotes = entry.notes.filter((n) => !sharedNotes.has(n));
  return (
    <div className="inline-flex flex-col items-start bg-ivory-dark/50 border border-sandstone/20 rounded-xl p-4 space-y-3">
      <WordGlyph mdc={entry.mdc} baseSize={36} />
      {uniqueNotes.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {uniqueNotes.map((n, i) => (
            <Badge key={i} variant="outline" size="sm">{n}</Badge>
          ))}
        </div>
      )}
    </div>
  );
}
