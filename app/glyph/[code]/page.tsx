import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { GlyphCard } from "@/components/GlyphCard";
import { SmartGlyph } from "@/components/SmartGlyph";
import { Badge } from "@/components/ui/Badge";
import {
  getGlyphByCode,
  getRelatedGlyphs,
  getAllGlyphs,
  getCategoryById,
  getGlyphVariants,
  getBaseCode,
  glyphHref,
} from "@/lib/glyphs";

interface PageProps {
  params: Promise<{ code: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { code } = await params;
  const glyph = getGlyphByCode(code);

  if (!glyph) {
    return { title: "Glyph Not Found - PharaLex" };
  }

  const primaryMeaning = glyph.meanings[0]?.text || "";

  return {
    title: `${glyph.code} ${glyph.unicode} - PharaLex`,
    description: `${glyph.code}: ${primaryMeaning} - Egyptian hieroglyph from the ${glyph.categoryName} category`,
  };
}

export async function generateStaticParams() {
  const glyphs = getAllGlyphs();
  return glyphs.map((g) => ({ code: g.code }));
}

export default async function GlyphPage({ params }: PageProps) {
  const { code } = await params;
  const glyph = getGlyphByCode(code);

  if (!glyph) {
    notFound();
  }

  const relatedGlyphs = getRelatedGlyphs(glyph.code);
  const category = getCategoryById(glyph.category);
  const variants = getGlyphVariants(glyph.code);
  const baseCode = getBaseCode(glyph.code);
  const baseGlyph = baseCode ? getGlyphByCode(baseCode) : null;

  const typeColors: Record<string, "gold" | "sandstone" | "outline"> = {
    logogram: "gold",
    phonogram: "sandstone",
    determinative: "outline",
    other: "outline",
  };

  const typeDescriptions: Record<string, string> = {
    logogram: "Represents a complete word or concept",
    phonogram: "Represents a sound or phonetic value",
    determinative: "Clarifies the meaning of other signs",
    other: "Has a specialized or contextual function",
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
            <Link
              href={`/categories/${glyph.category}`}
              className="hover:text-gold"
            >
              {glyph.category}
            </Link>
            <span>/</span>
            <span className="text-brown">{glyph.code}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div
                className="
                  bg-ivory-dark/50 border border-sandstone/20 rounded-2xl
                  p-6 sm:p-8
                "
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <SmartGlyph glyph={glyph} size="xl" />

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="font-display text-3xl sm:text-4xl font-bold text-brown">
                        {glyph.code}
                      </h1>
                      {glyph.renderable !== false && (
                        <span className="text-2xl text-sandstone/60">
                          {glyph.unicode}
                        </span>
                      )}
                      {glyph.renderable === false && (
                        <Badge variant="outline">Unicode 16.0</Badge>
                      )}
                    </div>

                    <Link
                      href={`/categories/${glyph.category}`}
                      className="
                        inline-flex items-center gap-2 mb-4
                        text-gold hover:text-gold-dark transition-colors
                      "
                    >
                      <span className="font-medium">{glyph.category}</span>
                      <span className="text-sandstone">·</span>
                      <span>{glyph.categoryName}</span>
                    </Link>

                    {baseGlyph && (
                      <div className="mb-3 flex items-center gap-2 text-sm text-sandstone">
                        <span>Variant of</span>
                        <Link
                          href={glyphHref(baseGlyph.code)}
                          className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-gold/10 text-gold-dark hover:bg-gold/20 transition-colors font-medium"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={`/glyphs/${baseGlyph.code}.svg`} alt={baseGlyph.code} className="w-5 h-5 object-contain" />
                          {baseGlyph.code}
                        </Link>
                      </div>
                    )}

                    {glyph.transliteration.length > 0 && (
                      <div className="mb-4">
                        <h2 className="text-sm font-medium text-sandstone mb-2">
                          Transliteration
                        </h2>
                        <div className="flex flex-wrap gap-2">
                          {glyph.transliteration.map((t) => (
                            <span
                              key={t}
                              className="
                                px-3 py-1.5
                                bg-brown/5 rounded-lg
                                text-brown-light italic font-medium
                              "
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {glyph.meanings
                        .reduce((types, m) => {
                          if (!types.includes(m.type)) types.push(m.type);
                          return types;
                        }, [] as string[])
                        .map((type) => (
                          <Badge
                            key={type}
                            variant={
                              typeColors[type as keyof typeof typeColors]
                            }
                            size="md"
                          >
                            {type}
                          </Badge>
                        ))}
                    </div>

                    {glyph.tags && glyph.tags.length > 0 && (
                      <div className="mt-4">
                        <h2 className="text-sm font-medium text-sandstone mb-2">
                          Shape tags
                        </h2>
                        <div className="flex flex-wrap gap-1.5">
                          {glyph.tags.map((tag) => (
                            <span
                              key={tag}
                              className="
                                px-2 py-0.5 rounded-md
                                bg-sandstone/10 border border-sandstone/20
                                text-xs text-sandstone
                              "
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {variants.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-sandstone/15">
                        <p className="text-xs font-medium text-sandstone mb-2">
                          Variants ({variants.length})
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {variants.map((v) => (
                            <Link
                              key={v.code}
                              href={glyphHref(v.code)}
                              className="group flex flex-col items-center gap-1 p-2 rounded-lg border border-sandstone/20 bg-papyrus/40 hover:border-gold/50 hover:bg-gold/5 transition-all"
                              title={v.meanings[0]?.text || v.code}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={`/glyphs/${v.code}.svg`}
                                alt={v.code}
                                className="w-10 h-10 object-contain"
                              />
                              <span className="text-[11px] font-medium text-sandstone group-hover:text-gold-dark transition-colors">
                                {v.code}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {glyph.description && glyph.meanings.length === 0 && (
                <section>
                  <h2 className="font-display text-2xl font-semibold text-brown mb-4">
                    Description
                  </h2>
                  <div
                    className="
                      bg-ivory-dark/50 border border-sandstone/20 rounded-xl
                      p-4 sm:p-6
                    "
                  >
                    <p className="text-brown-light leading-relaxed">
                      {glyph.description}
                    </p>
                  </div>
                </section>
              )}

              {glyph.meanings.length > 0 && (
                <section>
                  <h2 className="font-display text-2xl font-semibold text-brown mb-4">
                    Meanings
                  </h2>

                  {glyph.description && (
                    <p className="text-sm text-brown-light/70 italic mb-4 leading-relaxed">
                      {glyph.description}
                    </p>
                  )}

                  <div className="space-y-4">
                    {glyph.meanings.map((meaning, index) => (
                      <div
                        key={index}
                        className="
                          bg-ivory-dark/50 border border-sandstone/20 rounded-xl
                          p-4 sm:p-6
                        "
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="
                              w-8 h-8 rounded-lg shrink-0
                              flex items-center justify-center
                              text-sm font-medium
                              bg-gold/10 text-gold-dark
                            "
                          >
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant={typeColors[meaning.type]}>
                                {meaning.type}
                              </Badge>
                              {meaning.period && (
                                <Badge variant="outline">{meaning.period}</Badge>
                              )}
                            </div>
                            <p className="text-brown-light leading-relaxed">
                              {meaning.text}
                            </p>
                            <p className="text-xs text-sandstone mt-2">
                              {typeDescriptions[meaning.type]}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {!glyph.description && glyph.meanings.length === 0 && (
                <section>
                  <div
                    className="
                      bg-ivory-dark/30 border border-dashed border-sandstone/30 rounded-xl
                      p-6 sm:p-8 text-center
                    "
                  >
                    <p className="text-sandstone font-medium mb-1">No description available</p>
                    <p className="text-sm text-sandstone/60">
                      This glyph has not yet been annotated in our dataset.
                    </p>
                  </div>
                </section>
              )}
            </div>

            <div className="space-y-6">
              <div
                className="
                  bg-ivory-dark/50 border border-sandstone/20 rounded-xl
                  p-4 sm:p-6 sticky top-24
                "
              >
                <h3 className="font-display text-lg font-semibold text-brown mb-4">
                  Quick Info
                </h3>

                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-sandstone">Gardiner Code</dt>
                    <dd className="font-medium text-brown">{glyph.code}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sandstone">Unicode</dt>
                    <dd className="font-mono text-brown">
                      U+{glyph.unicode.codePointAt(0)?.toString(16).toUpperCase()}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sandstone">Category</dt>
                    <dd className="text-brown">{glyph.category}</dd>
                  </div>
                  {glyph.meanings.length > 0 && (
                    <div className="flex justify-between">
                      <dt className="text-sandstone">Meanings</dt>
                      <dd className="text-brown">{glyph.meanings.length}</dd>
                    </div>
                  )}
                  {glyph.transliteration.length > 0 && (
                    <div className="flex justify-between">
                      <dt className="text-sandstone">Transliterations</dt>
                      <dd className="text-brown">{glyph.transliteration.length}</dd>
                    </div>
                  )}
                  {glyph.source && (
                    <div className="flex justify-between">
                      <dt className="text-sandstone">Source</dt>
                      <dd className="text-brown capitalize">{glyph.source}</dd>
                    </div>
                  )}
                </dl>

                {category && (
                  <div className="mt-6 pt-4 border-t border-sandstone/20">
                    <Link
                      href={`/categories/${glyph.category}`}
                      className="
                        block text-center py-2 px-4
                        bg-gold/10 text-gold-dark rounded-lg
                        hover:bg-gold/20 transition-colors
                        font-medium text-sm
                      "
                    >
                      View all {category.glyphCount} glyphs in {glyph.category}
                    </Link>
                  </div>
                )}
              </div>

              {relatedGlyphs.length > 0 && (
                <section>
                  <h3 className="font-display text-lg font-semibold text-brown mb-4">
                    Related Glyphs
                  </h3>
                  <div className="space-y-3">
                    {relatedGlyphs.map((related) => (
                      <GlyphCard
                        key={related.code}
                        glyph={related}
                        showDescription={false}
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
