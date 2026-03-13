import { glyphSvgSrc } from "@/lib/glyph-utils";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { GlyphCard } from "@/components/GlyphCard";
import { GlyphWatermark } from "@/components/GlyphWatermark";
import { PharaohCard } from "@/components/PharaohCard";
import { WordGlyph } from "@/components/WordGlyph";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { getAllGlyphs, getAllCategories, getGlyphStats } from "@/lib/glyphs";
import { getNotablePharaohs } from "@/lib/pharaohs";
import { getAllTexts } from "@/lib/texts";
import { getAllWords, wordHref, translitToUnicode } from "@/lib/words";
import { mdcToCodes } from "@/lib/mdc";
import { pickDaily } from "@/lib/daily";
import type { PeriodId, DictionaryWord } from "@/lib/types";

export const dynamic = "force-static";

const PERIOD_LABELS: Record<PeriodId, string> = {
  predynastic: "Predynastic",
  "early-dynastic": "Early Dynastic",
  "old-kingdom": "Old Kingdom",
  "first-intermediate": "1st Intermediate",
  "middle-kingdom": "Middle Kingdom",
  "second-intermediate": "2nd Intermediate",
  "new-kingdom": "New Kingdom",
  "third-intermediate": "3rd Intermediate",
  "late-period": "Late Period",
  ptolemaic: "Ptolemaic",
  roman: "Roman",
};

export default async function HomePage() {
  const glyphs = await getAllGlyphs();
  const categories = await getAllCategories();
  const stats = await getGlyphStats();

  // Only pick from glyphs with actual meaning data for a better showcase
  const richGlyphs = glyphs.filter(
    (g) =>
      g.meanings.length > 0 &&
      (g.source === "wiktionary" || g.source === "both"),
  );
  const featuredGlyphs = pickDaily(richGlyphs, 4, 0);
  const featuredPharaohs = pickDaily(getNotablePharaohs(), 3, 1);
  const featuredTexts = pickDaily(getAllTexts(), 3, 2);

  // Featured words — deduplicated pool of short, recognisable core vocabulary
  const allWords = await getAllWords();
  const seenTranslits = new Set<string>();
  const wordCandidates: DictionaryWord[] = [];
  for (const w of allWords) {
    if (seenTranslits.has(w.transliteration)) continue;
    if (
      w.transliteration.length <= 6 &&
      w.grammar &&
      !["PRON", "PART", "CONJ", "INTJ", "INTG", "IMPR"].includes(w.grammar) &&
      w.translation.length >= 4 &&
      w.translation.length <= 45 &&
      !w.translation.startsWith("(") &&
      !w.notes.includes("cryptic") &&
      !w.notes.includes("late egyptian") &&
      w.gardinerCodes.length >= 1 &&
      w.gardinerCodes.length <= 6
    ) {
      seenTranslits.add(w.transliteration);
      wordCandidates.push(w);
    }
  }
  const featuredWords = pickDaily(wordCandidates, 8, 99);

  const renderableGlyphs = glyphs.filter((g) => {
    if (!g.unicode || g.meanings.length === 0) return false;
    const cp = g.unicode.codePointAt(0) ?? 0;
    return cp >= 0x13000 && cp <= 0x1342f;
  });
  const watermarkGlyphs = pickDaily(
    renderableGlyphs,
    16,
    Math.floor(Date.now() / 1_800_000),
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PharaLex",
    url: "https://pharalex.app",
    description:
      "An interactive dictionary of ancient Egyptian hieroglyphs. Explore, search, and learn about the writing system of the pharaohs.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://pharalex.app/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative py-12 sm:py-16">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-papyrus/30 to-transparent" />
            <GlyphWatermark glyphs={watermarkGlyphs} />
          </div>

          <Container className="relative">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-center font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brown mb-4">
                Explore Egyptian
                <span className="block text-gold">Writing & Hieroglyphs</span>
              </h1>

              <p className="text-center text-base sm:text-lg text-brown-light mb-6">
                {stats.totalGlyphs.toLocaleString()} hieroglyphs and{" "}
                {allWords.length.toLocaleString()} dictionary words — search
                everything at once.
              </p>

              <div className="max-w-2xl mx-auto mb-4">
                <SearchBar
                  size="lg"
                  placeholder="Search hieroglyphs, words, or meanings..."
                  autoFocus
                />
              </div>

              <div className="flex flex-wrap justify-center gap-3 text-sm text-sandstone">
                <span>Try:</span>
                {["nfr", "sun", "A1", "beautiful", "bird"].map((q) => (
                  <Link
                    key={q}
                    href={`/search?q=${q}`}
                    className="text-gold hover:text-gold-dark"
                  >
                    &ldquo;{q}&rdquo;
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Stats bar */}
        <div className="border-y border-sandstone/20 bg-ivory-dark/40">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-sandstone/20 text-center py-4">
              <div className="px-4">
                <div className="font-display text-2xl font-bold text-gold-dark">
                  {stats.totalGlyphs.toLocaleString()}
                </div>
                <div className="text-xs text-sandstone mt-0.5">Symbols</div>
              </div>
              <div className="px-4">
                <div className="font-display text-2xl font-bold text-gold-dark">
                  {(
                    stats.byType.phonogram + stats.byType.logogram
                  ).toLocaleString()}
                </div>
                <div className="text-xs text-sandstone mt-0.5">
                  Phonograms &amp; Logograms
                </div>
              </div>
              <div className="px-4">
                <div className="font-display text-2xl font-bold text-gold-dark">
                  {allWords.length.toLocaleString()}
                </div>
                <div className="text-xs text-sandstone mt-0.5">
                  Dictionary Words
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Featured glyphs + pharaohs */}
        <section className="py-10 bg-ivory-dark/30">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Featured Hieroglyphs */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-semibold text-brown">
                      Featured Hieroglyphs
                    </h2>
                    <p className="text-xs text-sandstone mt-0.5">
                      Refreshes daily
                    </p>
                  </div>
                  <Link
                    href="/browse"
                    className="text-gold hover:text-gold-dark text-sm font-medium shrink-0"
                  >
                    Browse all &rarr;
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {featuredGlyphs.map((glyph) => (
                    <GlyphCard key={glyph.code} glyph={glyph} />
                  ))}
                </div>
              </div>

              {/* Featured Pharaohs */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-semibold text-brown">
                      Notable Pharaohs
                    </h2>
                    <p className="text-xs text-sandstone mt-0.5">
                      Refreshes daily
                    </p>
                  </div>
                  <Link
                    href="/pharaohs"
                    className="text-gold hover:text-gold-dark text-sm font-medium shrink-0"
                  >
                    All pharaohs &rarr;
                  </Link>
                </div>

                <div className="flex flex-col gap-3">
                  {featuredPharaohs.map((pharaoh) => (
                    <PharaohCard key={pharaoh.slug} pharaoh={pharaoh} />
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Featured Texts */}
        <section className="py-10">
          <Container>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-brown">
                  Featured Texts
                </h2>
                <p className="text-xs text-sandstone mt-0.5">Refreshes daily</p>
              </div>
              <Link
                href="/texts"
                className="text-gold hover:text-gold-dark text-sm font-medium shrink-0"
              >
                All texts &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {featuredTexts.map((text) => {
                const previewCodes = text.lines[0]?.tokens
                  .slice(0, 5)
                  .flatMap((t) => mdcToCodes(t.mdc))
                  .slice(0, 8);
                return (
                  <Link
                    key={text.slug}
                    href={`/texts/${text.slug}`}
                    className="group flex flex-col bg-papyrus/30 border border-gold/20 rounded-xl p-4 hover:border-gold/50 hover:bg-papyrus/50 transition-all duration-200"
                  >
                    {/* Glyph preview */}
                    {previewCodes && previewCodes.length > 0 && (
                      <div className="flex items-center gap-0.5 mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                        {previewCodes.map((code, i) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={`${code}-${i}`}
                            src={glyphSvgSrc(code)}
                            alt={code}
                            className="w-6 h-6 object-contain"
                          />
                        ))}
                        <span className="text-sandstone/40 text-xs ml-0.5">
                          …
                        </span>
                      </div>
                    )}
                    <div className="self-start mb-2">
                      <Badge variant="gold" size="sm">
                        {PERIOD_LABELS[text.period]}
                      </Badge>
                    </div>
                    <h3 className="text-sm font-display font-semibold text-brown group-hover:text-gold-dark transition-colors leading-snug mb-1">
                      {text.title}
                    </h3>
                    <p className="text-xs text-sandstone mb-3">{text.date}</p>
                    <p className="text-xs text-brown-light leading-relaxed line-clamp-2 flex-1">
                      {text.description}
                    </p>
                    <span className="mt-3 text-xs text-gold-dark group-hover:translate-x-0.5 transition-transform self-end">
                      Read →
                    </span>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Featured Words */}
        <section className="py-10 bg-ivory-dark/30">
          <Container>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-brown">
                  Featured Words
                </h2>
                <p className="text-xs text-sandstone mt-0.5">Refreshes daily</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {featuredWords.map((word) => (
                <Link
                  key={word.transliteration}
                  href={wordHref(word.transliteration)}
                  className="group flex flex-col bg-ivory-dark/50 border border-sandstone/20 rounded-lg p-4 h-full hover:shadow-md hover:border-gold/40 transition-all duration-200"
                >
                  <div className="flex items-center min-h-10 mb-3 group-hover:scale-105 transition-transform origin-left overflow-hidden">
                    <WordGlyph mdc={word.mdc} baseSize={28} disableLinks />
                  </div>
                  <p className="text-sm text-brown-light line-clamp-2 mb-2 flex-1">
                    {word.translation}
                  </p>
                  {word.grammar && (
                    <span className="self-start text-xs px-2 py-0.5 rounded-full border border-sandstone/30 text-sandstone">
                      {word.grammar.charAt(0) +
                        word.grammar.slice(1).toLowerCase()}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* Categories */}
        <section className="py-10">
          <Container>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-brown">
                Browse by Category
              </h2>
              <Link
                href="/categories"
                className="text-gold hover:text-gold-dark text-sm font-medium"
              >
                All categories &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className="
                    group flex items-center gap-3 px-3 py-2.5
                    bg-ivory-dark/50 border border-sandstone/20 rounded-lg
                    hover:border-gold/40 hover:shadow-sm transition-all
                  "
                >
                  <div
                    className="
                      w-9 h-9 shrink-0 rounded-md
                      bg-gold/10 group-hover:bg-gold/20
                      flex items-center justify-center
                      font-display text-sm font-bold text-gold-dark
                      transition-colors
                    "
                  >
                    {category.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-brown truncate">
                      {category.name}
                    </h3>
                    <p className="text-xs text-sandstone">
                      {category.glyphCount.toLocaleString()} glyphs
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <footer className="py-5 border-t border-sandstone/20">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sandstone">
            <div className="flex items-center gap-2">
              <span className="font-hieroglyph text-lg">𓂀</span>
              <span>PharaLex</span>
            </div>
            <p>Data sourced from Wiktionary and the Gardiner Sign List</p>
            <Link
              href="/acknowledgments"
              className="hover:text-gold transition-colors"
            >
              Acknowledgments
            </Link>
          </div>
        </Container>
      </footer>
    </div>
  );
}
