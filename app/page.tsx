import Link from "next/link";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { GlyphCard } from "@/components/GlyphCard";
import { GlyphWatermark } from "@/components/GlyphWatermark";
import { Container } from "@/components/ui/Container";
import { getAllGlyphs, getAllCategories, getGlyphStats } from "@/lib/glyphs";

export default function HomePage() {
  const glyphs = getAllGlyphs();
  const categories = getAllCategories();
  const stats = getGlyphStats();

  const featuredGlyphs = glyphs.slice(0, 6);

  const renderableGlyphs = glyphs.filter((g) => {
    if (!g.unicode || g.meanings.length === 0) return false;
    const cp = g.unicode.codePointAt(0) ?? 0;
    return cp >= 0x13000 && cp <= 0x1342f;
  });

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative py-12 sm:py-16">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-papyrus/30 to-transparent" />
            <GlyphWatermark glyphs={renderableGlyphs} />
          </div>

          <Container className="relative">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brown mb-4">
                Explore Ancient Egyptian
                <span className="block text-gold">Hieroglyphs</span>
              </h1>

              <p className="text-base sm:text-lg text-brown-light mb-6 max-w-xl mx-auto">
                {stats.totalGlyphs.toLocaleString()} symbols across{" "}
                {stats.totalCategories} Gardiner categories.
              </p>

              <div className="max-w-lg mx-auto mb-4">
                <SearchBar
                  size="lg"
                  placeholder="Search by meaning, Gardiner code, or transliteration..."
                  autoFocus
                />
              </div>

              <div className="flex flex-wrap justify-center gap-3 text-sm text-sandstone">
                <span>Try:</span>
                {["sun", "A1", "water", "bird"].map((q) => (
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
                  {stats.totalCategories}
                </div>
                <div className="text-xs text-sandstone mt-0.5">Categories</div>
              </div>
              <div className="px-4">
                <div className="font-display text-2xl font-bold text-gold-dark">
                  {(
                    stats.byType.logogram + stats.byType.phonogram
                  ).toLocaleString()}
                </div>
                <div className="text-xs text-sandstone mt-0.5">
                  Phonograms &amp; Logograms
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Featured glyphs */}
        <section className="py-10 bg-ivory-dark/30">
          <Container>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-brown">
                Featured Hieroglyphs
              </h2>
              <Link
                href="/browse"
                className="text-gold hover:text-gold-dark text-sm font-medium"
              >
                View all &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {featuredGlyphs.map((glyph) => (
                <GlyphCard key={glyph.code} glyph={glyph} />
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
          </div>
        </Container>
      </footer>
    </div>
  );
}
