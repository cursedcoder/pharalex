import Link from "next/link";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { GlyphCard } from "@/components/GlyphCard";
import { Container } from "@/components/ui/Container";
import { getAllGlyphs, getAllCategories, getGlyphStats } from "@/lib/glyphs";

export default function HomePage() {
  const glyphs = getAllGlyphs();
  const categories = getAllCategories();
  const stats = getGlyphStats();

  const featuredGlyphs = glyphs.slice(0, 6);

  const showcaseGlyphs = glyphs
    .filter((g) => g.unicode && g.meanings.length > 0)
    .slice(0, 12);

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-papyrus/30 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
            <div className="font-hieroglyph text-[20rem] text-brown whitespace-nowrap">
              {showcaseGlyphs.map((g) => g.unicode).join("")}
            </div>
          </div>

          <Container className="relative">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brown mb-6">
                Explore Ancient Egyptian
                <span className="block text-gold">Hieroglyphs</span>
              </h1>

              <p className="text-lg sm:text-xl text-brown-light mb-8 max-w-2xl mx-auto">
                Discover the sacred writing system of the pharaohs. Search,
                browse, and learn about {stats.totalGlyphs} hieroglyphic symbols
                across {stats.totalCategories} categories.
              </p>

              <div className="max-w-xl mx-auto mb-8">
                <SearchBar
                  size="lg"
                  placeholder="Search by meaning, Gardiner code, or transliteration..."
                  autoFocus
                />
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-sandstone">
                <span>Try:</span>
                <Link
                  href="/search?q=sun"
                  className="text-gold hover:text-gold-dark"
                >
                  &ldquo;sun&rdquo;
                </Link>
                <Link
                  href="/search?q=A1"
                  className="text-gold hover:text-gold-dark"
                >
                  &ldquo;A1&rdquo;
                </Link>
                <Link
                  href="/search?q=water"
                  className="text-gold hover:text-gold-dark"
                >
                  &ldquo;water&rdquo;
                </Link>
                <Link
                  href="/search?q=bird"
                  className="text-gold hover:text-gold-dark"
                >
                  &ldquo;bird&rdquo;
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-ivory-dark/30">
          <Container>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brown">
                Featured Hieroglyphs
              </h2>
              <Link
                href="/browse"
                className="text-gold hover:text-gold-dark font-medium"
              >
                View all &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredGlyphs.map((glyph) => (
                <GlyphCard key={glyph.code} glyph={glyph} />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brown mb-8 text-center">
              Browse by Category
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className="
                    group flex items-center gap-4 p-4
                    bg-ivory-dark/50 border border-sandstone/20 rounded-lg
                    hover:border-gold/40 hover:shadow-md transition-all
                  "
                >
                  <div
                    className="
                      w-12 h-12 rounded-lg
                      bg-gold/10 group-hover:bg-gold/20
                      flex items-center justify-center
                      font-display text-xl font-bold text-gold-dark
                      transition-colors
                    "
                  >
                    {category.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-brown truncate">
                      {category.name}
                    </h3>
                    <p className="text-sm text-sandstone">
                      {category.glyphCount} hieroglyphs
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 bg-brown text-ivory">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-display text-4xl font-bold text-gold mb-2">
                  {stats.totalGlyphs}
                </div>
                <div className="text-ivory/80">Hieroglyphic Symbols</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-gold mb-2">
                  {stats.totalCategories}
                </div>
                <div className="text-ivory/80">Gardiner Categories</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-gold mb-2">
                  {stats.byType.logogram + stats.byType.phonogram}
                </div>
                <div className="text-ivory/80">Phonograms & Logograms</div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container size="md">
            <div className="text-center">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brown mb-4">
                About PharaLex
              </h2>
              <p className="text-brown-light mb-6 max-w-2xl mx-auto">
                PharaLex is an interactive dictionary of ancient Egyptian
                hieroglyphs, organized using Sir Alan Gardiner&apos;s sign list.
                Each entry includes detailed meanings, transliterations, and
                etymological information sourced from scholarly references.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/browse"
                  className="
                    px-6 py-3 bg-gold text-brown font-medium rounded-lg
                    hover:bg-gold-light transition-colors
                  "
                >
                  Start Exploring
                </Link>
                <Link
                  href="/categories"
                  className="
                    px-6 py-3 border border-sandstone/40 text-brown font-medium rounded-lg
                    hover:border-gold hover:text-gold transition-colors
                  "
                >
                  View Categories
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="py-8 border-t border-sandstone/20">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-sandstone">
            <div className="flex items-center gap-2">
              <span className="font-hieroglyph text-lg">𓂀</span>
              <span>PharaLex</span>
            </div>
            <p>
              Data sourced from Wiktionary and the Gardiner Sign List
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
