import { glyphSvgSrc } from "@/lib/glyph-utils";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { getAllCategories, getGlyphsByCategory } from "@/lib/glyphs";

export const dynamic = "force-static";

export const metadata = {
  title: "Categories",
  description: "Browse Egyptian hieroglyphs by Gardiner category. Explore all 26 Gardiner categories from humans and animals to buildings and abstract signs.",
  alternates: { canonical: "/categories" },
  openGraph: {
    title: "Hieroglyph Categories",
    description: "Browse Egyptian hieroglyphs by Gardiner category. Explore all 26 Gardiner categories.",
    url: "/categories",
  },
  twitter: {
    title: "Hieroglyph Categories",
    description: "Browse Egyptian hieroglyphs by Gardiner category. Explore all 26 Gardiner categories.",
  },
};

export default async function CategoriesPage() {
  const categories = await getAllCategories();
  const categoryGlyphs = await Promise.all(
    categories.map(async (c) => ({
      id: c.id,
      mainGlyphs: (await getGlyphsByCategory(c.id)).filter(
        (g) => /^[A-Z][a-z]?\d+$/.test(g.code)
      ),
    }))
  );
  const glyphsByCategory = Object.fromEntries(
    categoryGlyphs.map((c) => [c.id, c.mainGlyphs])
  );

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 sm:py-12">
        <Container>
          <div className="mb-8">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-brown mb-4">
              Gardiner Categories
            </h1>
            <p className="text-brown-light max-w-2xl">
              Sir Alan Gardiner organized Egyptian hieroglyphs into 26
              categories based on what they depict. Browse each category to
              explore the signs within.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => {
              const mainGlyphs = glyphsByCategory[category.id] ?? [];
              const glyphs = mainGlyphs.slice(0, 8);

              return (
                <Link
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className="
                    group block p-6
                    bg-ivory-dark/50 border border-sandstone/20 rounded-xl
                    hover:border-gold/40 hover:shadow-lg transition-all
                  "
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="
                        w-14 h-14 rounded-xl shrink-0
                        bg-gold/10 group-hover:bg-gold/20
                        flex items-center justify-center
                        font-display text-2xl font-bold text-gold-dark
                        transition-colors
                      "
                    >
                      {category.id}
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-semibold text-brown mb-1">
                        {category.name}
                      </h2>
                      <p className="text-sm text-sandstone">
                        {category.glyphCount} hieroglyphs
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {glyphs.map((glyph) => (
                        <div
                          key={glyph.code}
                          className="
                            w-10 h-10 rounded-lg
                            bg-papyrus/50 border border-sandstone/10
                            flex items-center justify-center
                            group-hover:border-gold/20
                            transition-colors overflow-hidden
                          "
                          title={glyph.code}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={glyphSvgSrc(glyph.code)}
                            alt={glyph.code}
                            className="w-7 h-7 object-contain"
                          />
                        </div>
                    ))}
                    {mainGlyphs.length > 8 && (
                      <span
                        className="
                          text-sm text-sandstone
                          w-10 h-10 rounded-lg
                          bg-sandstone/10
                          flex items-center justify-center
                        "
                      >
                        +{mainGlyphs.length - 8}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </main>
    </div>
  );
}
