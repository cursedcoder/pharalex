import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { GlyphCard } from "@/components/GlyphCard";
import { CategoryNav } from "@/components/CategoryNav";
import {
  getCategoryById,
  getGlyphsByCategory,
  getAllCategories,
  getBaseCode,
} from "@/lib/glyphs";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { category: categoryId } = await params;
  const category = getCategoryById(categoryId);

  if (!category) {
    return { title: "Category Not Found - PharaLex" };
  }

  const title = `${category.id}: ${category.name}`;
  const description = `Browse ${category.glyphCount} Egyptian hieroglyphs in the ${category.name} (${category.id}) Gardiner category.`;

  return {
    title,
    description,
    alternates: { canonical: `/categories/${category.id}` },
    openGraph: {
      title: `${title} - PharaLex`,
      description,
      url: `/categories/${category.id}`,
    },
    twitter: {
      title: `${title} - PharaLex`,
      description,
    },
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((c) => ({ category: c.id }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categoryId } = await params;
  const category = getCategoryById(categoryId);

  if (!category) {
    notFound();
  }

  const glyphs = getGlyphsByCategory(category.id).filter(
    (g) => getBaseCode(g.code) === null
  );
  const allCategories = getAllCategories();

  const categoryDescriptions: Record<string, string> = {
    A: "Hieroglyphs depicting men in various poses and occupations, from seated scribes to workers and officials.",
    B: "Signs showing women and their activities, including mothers, queens, and goddesses.",
    C: "Human-form representations of Egyptian deities, with their distinctive attributes and crowns.",
    D: "Body parts including the eye, hand, arm, and leg, often used as phonetic signs.",
    E: "Mammals such as bulls, lions, and other animals significant in Egyptian culture.",
    F: "Parts of mammals including horns, tails, and hides, frequently used as determinatives.",
    G: "Birds from the Egyptian environment, one of the largest categories in the sign list.",
    H: "Parts of birds including wings, feathers, and eggs.",
    I: "Reptiles, amphibians, and invertebrates including snakes, frogs, and scarabs.",
    K: "Fish and fish parts from the Nile and Mediterranean.",
    L: "Insects and other small creatures including bees and grasshoppers.",
    M: "Trees, plants, and flowers from the Egyptian landscape.",
    N: "Celestial bodies, sky, earth, and water features.",
    O: "Buildings and architectural elements from temples to houses.",
    P: "Ships, boats, and their component parts.",
    Q: "Furniture used in daily life and funerary contexts.",
    R: "Sacred objects, temple furniture, and religious emblems.",
    S: "Royal regalia, clothing, and personal items.",
    T: "Weapons, hunting equipment, and butchery tools.",
    U: "Agricultural tools and implements of various crafts.",
    V: "Rope, baskets, and items made from plant fibers.",
    W: "Vessels made of stone and pottery.",
    X: "Bread and cakes in various forms.",
    Y: "Writing materials, games, and musical instruments.",
    Z: "Geometric shapes, strokes, and abstract signs.",
    Aa: "Signs that don't fit neatly into other categories.",
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 sm:py-12">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-sandstone mb-6">
            <Link href="/" className="hover:text-gold">
              Home
            </Link>
            <span>/</span>
            <Link href="/categories" className="hover:text-gold">
              Categories
            </Link>
            <span>/</span>
            <span className="text-brown">{category.id}</span>
          </nav>

          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="
                  w-16 h-16 rounded-xl
                  bg-gold/20
                  flex items-center justify-center
                  font-display text-3xl font-bold text-gold-dark
                "
              >
                {category.id}
              </div>
              <div>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-brown">
                  {category.name}
                </h1>
                <p className="text-sandstone">
                  {glyphs.length} hieroglyphs
                </p>
              </div>
            </div>

            {categoryDescriptions[category.id] && (
              <p className="text-brown-light max-w-3xl">
                {categoryDescriptions[category.id]}
              </p>
            )}
          </div>

          <div className="mb-8 overflow-x-auto pb-2">
            <CategoryNav
              categories={allCategories}
              activeCategory={category.id}
              layout="horizontal"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {glyphs.map((glyph) => (
              <GlyphCard key={glyph.code} glyph={glyph} />
            ))}
          </div>

          {glyphs.length === 0 && (
            <div className="text-center py-12 text-sandstone">
              <p>No hieroglyphs found in this category.</p>
            </div>
          )}
        </Container>
      </main>
    </div>
  );
}
