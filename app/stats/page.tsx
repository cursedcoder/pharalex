import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { StatCard } from "@/components/StatCard";
import { BarChart } from "@/components/BarChart";
import { computeCorpusStats } from "@/lib/stats";
import { getAllGlyphs, getAllCategories } from "@/lib/glyphs";
import { getAllWords } from "@/lib/words";
import { getAllPharaohs, getAllDynasties } from "@/lib/pharaohs";
import { getAllTexts } from "@/lib/texts";

export const dynamic = "force-static";

export const metadata = {
  title: "Corpus Statistics",
  description:
    "Explore the PharaLex corpus: glyph counts by category, word distributions by grammar, texts by period, and more.",
  alternates: { canonical: "/stats" },
  openGraph: {
    title: "Corpus Statistics — PharaLex",
    description:
      "Explore the PharaLex corpus: glyph counts by category, word distributions by grammar, texts by period, and more.",
    url: "/stats",
  },
};

export default async function StatsPage() {
  const [glyphs, categories, words, pharaohs, texts, dynasties] = await Promise.all([
    getAllGlyphs(),
    getAllCategories(),
    getAllWords(),
    Promise.resolve(getAllPharaohs()),
    Promise.resolve(getAllTexts()),
    Promise.resolve(getAllDynasties()),
  ]);

  const stats = computeCorpusStats(glyphs, categories, words, pharaohs, texts, dynasties);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 sm:py-12">
        <Container size="lg">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-sandstone mb-8">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-brown">Statistics</span>
          </nav>

          {/* Hero */}
          <div className="mb-10">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-brown mb-3">
              Corpus Statistics
            </h1>
            <p className="text-brown-light leading-relaxed">
              A quantitative overview of the PharaLex dataset — hieroglyphic signs, dictionary
              entries, ancient texts, and pharaohs across three millennia of Egyptian history.
            </p>
          </div>

          {/* Summary cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
            <StatCard label="Hieroglyphs" value={stats.totalGlyphs} icon="𓊛" />
            <StatCard label="Dictionary Words" value={stats.totalWords} icon="𓏛" />
            <StatCard label="Pharaohs" value={stats.totalPharaohs} icon="𓋹" />
            <StatCard label="Ancient Texts" value={stats.totalTexts} icon="𓂋" />
          </div>

          {/* Charts grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Glyphs by category */}
            <section className="bg-ivory-dark/50 border border-sandstone/20 rounded-xl p-5 sm:p-6">
              <h2 className="font-display text-lg font-semibold text-brown mb-1">
                Glyphs by Gardiner Category
              </h2>
              <p className="text-xs text-sandstone mb-4">
                {stats.totalCategories} categories, sorted by glyph count
              </p>
              <BarChart data={stats.glyphsByCategory} color="gold" />
            </section>

            {/* Words by grammar */}
            <section className="bg-ivory-dark/50 border border-sandstone/20 rounded-xl p-5 sm:p-6">
              <h2 className="font-display text-lg font-semibold text-brown mb-1">
                Words by Part of Speech
              </h2>
              <p className="text-xs text-sandstone mb-4">
                {stats.totalWords.toLocaleString()} dictionary entries classified by grammar
              </p>
              <BarChart data={stats.wordsByGrammar} color="sandstone" />
            </section>

            {/* Meaning types */}
            <section className="bg-ivory-dark/50 border border-sandstone/20 rounded-xl p-5 sm:p-6">
              <h2 className="font-display text-lg font-semibold text-brown mb-1">
                Sign Functions
              </h2>
              <p className="text-xs text-sandstone mb-4">
                How glyphs are used: as logograms, phonograms, or determinatives
              </p>
              <BarChart data={stats.meaningsByType} color="gold" />
            </section>

            {/* Texts by period */}
            <section className="bg-ivory-dark/50 border border-sandstone/20 rounded-xl p-5 sm:p-6">
              <h2 className="font-display text-lg font-semibold text-brown mb-1">
                Texts by Period
              </h2>
              <p className="text-xs text-sandstone mb-4">
                {stats.totalTexts} texts across Egyptian history
              </p>
              <BarChart data={stats.textsByPeriod} color="sandstone" />
            </section>

            {/* Pharaohs by period */}
            <section className="bg-ivory-dark/50 border border-sandstone/20 rounded-xl p-5 sm:p-6 lg:col-span-2">
              <h2 className="font-display text-lg font-semibold text-brown mb-1">
                Pharaohs by Period
              </h2>
              <p className="text-xs text-sandstone mb-4">
                {stats.totalPharaohs} rulers from Predynastic through Roman Egypt
              </p>
              <BarChart data={stats.pharaohsByPeriod} color="gold" />
            </section>
          </div>
        </Container>
      </main>
    </div>
  );
}
