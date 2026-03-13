import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Quadrat } from "@/components/Quadrat";
import {
  getWordsBySlug,
  getAllTransliterations,
  wordSlug,
  wordHref,
} from "@/lib/words";
import { getGlyphByCode, glyphHref } from "@/lib/glyphs";
import { getAllTexts } from "@/lib/texts";
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
  const translits = getAllTransliterations();
  return translits.map((t) => ({ slug: wordSlug(t) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entries = getWordsBySlug(slug);
  if (entries.length === 0) return {};

  const w = entries[0];
  const title = `${w.transliteration} — Middle Egyptian`;
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
  const entries = getWordsBySlug(slug);
  if (entries.length === 0) notFound();

  const w = entries[0];
  const grammar = w.grammar;

  // Collect all unique Gardiner codes across all spelling variants
  const allCodes = [...new Set(entries.flatMap((e) => e.gardinerCodes))];

  // Find texts that contain this transliteration as a token
  const texts = getAllTexts().filter((text) =>
    text.lines.some((line) =>
      line.tokens.some(
        (token) =>
          token.transliteration.toLowerCase() === w.transliteration.toLowerCase()
      )
    )
  );

  return (
    <>
      <Header />
      <main className="py-8 sm:py-12">
        <Container size="lg">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sandstone text-sm mb-8">
            <Link href="/" className="hover:text-gold transition-colors">PharaLex</Link>
            <span>/</span>
            <Link href="/words" className="hover:text-gold transition-colors">Words</Link>
            <span>/</span>
            <span className="text-brown font-mono">{w.transliteration}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start">
            {/* Main column */}
            <div className="space-y-8">

              {/* Header card */}
              <div className="bg-ivory-dark/50 border border-sandstone/20 rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  {/* Primary glyph rendering */}
                  <div className="flex-shrink-0 flex items-center justify-center bg-ivory/70 rounded-xl border border-gold/15 p-4 min-w-[80px] min-h-[80px]">
                    <Quadrat mdc={w.mdc} baseSize={48} />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div>
                      <h1 className="font-mono text-3xl sm:text-4xl font-bold text-brown leading-tight">
                        {w.transliteration}
                      </h1>
                      <p className="text-brown-light text-lg mt-1 leading-relaxed">
                        {w.translation}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {grammar && (
                        <Badge
                          variant={GRAMMAR_BADGE_VARIANTS[grammar] ?? "outline"}
                          size="md"
                        >
                          {GRAMMAR_LABELS[grammar] ?? grammar}
                        </Badge>
                      )}
                      {w.grammarRaw && w.grammarRaw !== grammar && (
                        <Badge variant="outline" size="md">{w.grammarRaw}</Badge>
                      )}
                      {w.notes.map((note, i) => (
                        <Badge key={i} variant="outline" size="md">{note}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Spelling variants */}
              {entries.length > 1 && (
                <section>
                  <h2 className="font-display text-2xl font-semibold text-brown mb-4">
                    Hieroglyphic Spellings
                    <span className="ml-2 text-base font-normal text-sandstone">
                      {entries.length} variants
                    </span>
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {entries.map((entry, i) => (
                      <SpellingCard key={i} entry={entry} index={i} />
                    ))}
                  </div>
                </section>
              )}

              {/* Constituent signs */}
              {allCodes.length > 0 && (
                <section>
                  <h2 className="font-display text-2xl font-semibold text-brown mb-4">
                    Constituent Signs
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {allCodes.map((code) => {
                      const glyph = getGlyphByCode(code);
                      return (
                        <Link
                          key={code}
                          href={glyphHref(code)}
                          className="group flex flex-col items-center gap-1.5 p-3 rounded-xl bg-ivory-dark/50 border border-sandstone/20 hover:border-gold/50 hover:bg-papyrus/30 transition-all"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`/glyphs/${code}.svg`}
                            alt={code}
                            className="w-10 h-10 object-contain"
                          />
                          <span className="text-xs font-mono font-semibold text-sandstone group-hover:text-gold-dark transition-colors">
                            {code}
                          </span>
                          {glyph?.meanings[0] && (
                            <span className="text-[10px] text-sandstone/60 text-center leading-tight max-w-[70px]">
                              {glyph.meanings[0].text.length > 20
                                ? glyph.meanings[0].text.slice(0, 20) + "…"
                                : glyph.meanings[0].text}
                            </span>
                          )}
                        </Link>
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
            <aside className="lg:sticky lg:top-24 space-y-4">
              {/* Quick info */}
              <div className="bg-papyrus/40 border border-gold/20 rounded-xl p-5 space-y-4">
                <h3 className="font-display text-lg text-brown">Quick Info</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">Transliteration</dt>
                    <dd className="font-mono text-brown">{w.transliteration}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">Translation</dt>
                    <dd className="text-brown-light">{w.translation}</dd>
                  </div>
                  {grammar && (
                    <div>
                      <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">Part of Speech</dt>
                      <dd className="text-brown-light">{GRAMMAR_LABELS[grammar] ?? grammar}</dd>
                    </div>
                  )}
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

              {/* Back link */}
              <Link
                href="/words"
                className="flex items-center gap-2 text-sm text-sandstone hover:text-gold transition-colors"
              >
                ← Search words
              </Link>
            </aside>
          </div>
        </Container>
      </main>
    </>
  );
}

function SpellingCard({
  entry,
  index,
}: {
  entry: DictionaryWord;
  index: number;
}) {
  return (
    <div className="bg-ivory-dark/50 border border-sandstone/20 rounded-xl p-4 space-y-3">
      {/* Glyph rendering */}
      <div className="flex items-center justify-center min-h-[56px] bg-ivory/60 rounded-lg border border-gold/10 p-2">
        <Quadrat mdc={entry.mdc} baseSize={36} />
      </div>

      {/* MdC */}
      <p className="font-mono text-xs text-sandstone/70 text-center break-all">
        {entry.mdc}
      </p>

      {/* Grammar/notes if different from primary */}
      {entry.grammarRaw && (
        <p className="text-xs text-sandstone/60 text-center italic">{entry.grammarRaw}</p>
      )}
      {entry.notes.length > 0 && (
        <div className="flex flex-wrap justify-center gap-1">
          {entry.notes.map((n, i) => (
            <Badge key={i} variant="outline" size="sm">{n}</Badge>
          ))}
        </div>
      )}
    </div>
  );
}
