export const dynamic = "force-static";

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
  getVariantSiblings,
  glyphHref,
} from "@/lib/glyphs";
import { getPharaohsUsingGlyph, formatReign } from "@/lib/pharaohs";
import { getWordsByGardinerCode, wordHref } from "@/lib/words";

interface PageProps {
  params: Promise<{ code: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { code } = await params;
  const glyph = await getGlyphByCode(code);

  if (!glyph) {
    return { title: "Glyph Not Found - PharaLex" };
  }

  const primaryMeaning = glyph.meanings[0]?.text || "";
  const title = `${glyph.code} ${glyph.unicode} — ${primaryMeaning || glyph.categoryName}`;
  const description = `${glyph.code}: ${primaryMeaning} — Egyptian hieroglyph from the ${glyph.categoryName} (${glyph.category}) category.`;

  return {
    title,
    description,
    alternates: { canonical: `/glyph/${glyph.code}` },
    openGraph: {
      title: `${title} - PharaLex`,
      description,
      url: `/glyph/${glyph.code}`,
    },
    twitter: {
      title: `${title} - PharaLex`,
      description,
    },
  };
}

export async function generateStaticParams() {
  const glyphs = await getAllGlyphs();
  return glyphs.map((g) => ({ code: g.code.replace(/\+/g, "%2B") }));
}

export default async function GlyphPage({ params }: PageProps) {
  const { code } = await params;
  const glyph = await getGlyphByCode(code);

  if (!glyph) {
    notFound();
  }

  const relatedGlyphs = await getRelatedGlyphs(glyph.code);
  const category = await getCategoryById(glyph.category);
  const variants = await getGlyphVariants(glyph.code);
  const baseCode = getBaseCode(glyph.code);
  const baseGlyph = baseCode ? await getGlyphByCode(baseCode) : null;
  const variantSiblings = await getVariantSiblings(glyph.code);
  const pharaohsUsingGlyph = getPharaohsUsingGlyph(glyph.code);
  const wordsUsingGlyph = await getWordsByGardinerCode(glyph.code, 12);

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: glyph.code,
    description: glyph.meanings[0]?.text
      ? `${glyph.code}: ${glyph.meanings[0].text} — Egyptian hieroglyph from the ${glyph.categoryName} category`
      : `Egyptian hieroglyph ${glyph.code} from the ${glyph.categoryName} category`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Gardiner Sign List",
      url: "https://pharalex.app/categories",
    },
    url: `https://pharalex.app/glyph/${glyph.code}`,
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
                      <span className="text-2xl text-sandstone/60">
                        {glyph.unicode}
                      </span>
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

                    {baseGlyph && (() => {
                      const otherVariants = variantSiblings
                        ? variantSiblings.siblings.slice(1).filter(s => s.code !== glyph.code)
                        : [];
                      return (
                        <div className="mt-4 pt-4 border-t border-sandstone/15">
                          <p className="text-xs font-medium text-sandstone mb-2">Variant of</p>
                          <Link
                            href={glyphHref(baseGlyph.code)}
                            className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg border border-gold/40 bg-gold/5 hover:border-gold/70 hover:bg-gold/10 transition-all group max-w-xs mb-3"
                          >
                            <div className="shrink-0 w-8 h-8 rounded-md bg-gold/10 flex items-center justify-center p-1 group-hover:bg-gold/20 transition-colors">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={`/glyphs/${encodeURIComponent(baseGlyph.code)}.svg`}
                                alt={baseGlyph.code}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-bold text-gold-dark leading-none">
                                {baseGlyph.code}
                              </p>
                              {baseGlyph.meanings[0] && (
                                <p className="text-xs text-sandstone mt-0.5 truncate max-w-[160px]">
                                  {baseGlyph.meanings[0].text}
                                </p>
                              )}
                            </div>
                            <svg className="w-3.5 h-3.5 text-gold/40 group-hover:text-gold-dark shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          {otherVariants.length > 0 && (
                            <>
                              <p className="text-xs font-medium text-sandstone mb-2">
                                Other variants ({otherVariants.length})
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {otherVariants.map((v) => (
                                  <Link
                                    key={v.code}
                                    href={glyphHref(v.code)}
                                    className="group flex flex-col items-center gap-1 p-2 rounded-lg border border-sandstone/20 bg-papyrus/40 hover:border-gold/50 hover:bg-gold/5 transition-all"
                                    title={v.meanings[0]?.text || v.code}
                                  >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                      src={`/glyphs/${encodeURIComponent(v.code)}.svg`}
                                      alt={v.code}
                                      className="w-10 h-10 object-contain"
                                    />
                                    <span className="text-[11px] font-medium text-sandstone group-hover:text-gold-dark transition-colors">
                                      {v.code}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })()}

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
                            <Link
                              key={tag}
                              href={`/browse?tag=${encodeURIComponent(tag)}`}
                              className="
                                px-2 py-0.5 rounded-md
                                bg-sandstone/10 border border-sandstone/20
                                text-xs text-sandstone
                                hover:bg-gold/15 hover:border-gold/40 hover:text-gold-dark
                                transition-colors
                              "
                            >
                              {tag}
                            </Link>
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
                                src={`/glyphs/${encodeURIComponent(v.code)}.svg`}
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

              {glyph.examples && glyph.examples.length > 0 && (
                <section>
                  <h2 className="font-display text-2xl font-semibold text-brown mb-4">
                    Attested Examples
                    <span className="ml-2 text-base font-normal text-sandstone">
                      from the TLA corpus
                    </span>
                  </h2>
                  <div className="space-y-4">
                    {glyph.examples.map((ex, index) => (
                      <div
                        key={index}
                        className="
                          bg-ivory-dark/50 border border-sandstone/20 rounded-xl
                          p-4 sm:p-6
                        "
                      >
                        <p className="font-hieroglyph text-3xl leading-loose mb-3 text-brown">
                          {ex.hieroglyphs.replace(/<g>[^<]*<\/g>/g, "")}
                        </p>
                        <p className="text-sm italic text-brown-light mb-1">
                          {ex.transliteration}
                        </p>
                        <p className="text-sm text-sandstone">
                          {ex.translation}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {ex.period && (
                            <span className="text-xs px-2 py-0.5 rounded bg-sandstone/10 text-sandstone">
                              {ex.period}
                            </span>
                          )}
                          <span className="text-xs px-2 py-0.5 rounded bg-sandstone/10 text-sandstone capitalize">
                            {ex.corpus} Egyptian
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-sandstone/60">
                    Source: Thesaurus Linguae Aegyptiae corpus (CC BY-SA 4.0) — translations in German.
                  </p>
                </section>
              )}
            </div>

            <div className="space-y-6">
              <div
                className="
                  bg-ivory-dark border border-sandstone/20 rounded-xl
                  p-4 sm:p-6 shadow-sm
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
                  {glyph.examples && glyph.examples.length > 0 && (
                    <div className="flex justify-between">
                      <dt className="text-sandstone">Text examples</dt>
                      <dd className="text-brown">{glyph.examples.length}</dd>
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

              {wordsUsingGlyph.length > 0 && (
                <section>
                  <h3 className="font-display text-lg font-semibold text-brown mb-3">
                    Words Using This Glyph
                  </h3>
                  <div className="bg-ivory-dark/50 border border-sandstone/20 rounded-xl p-4 space-y-1">
                    {wordsUsingGlyph.map((word) => (
                      <Link
                        key={word.transliteration}
                        href={wordHref(word.transliteration)}
                        className="flex items-baseline justify-between gap-2 p-2 -mx-2 rounded-lg hover:bg-gold/10 transition-colors group"
                      >
                        <span className="font-mono text-sm font-medium text-brown group-hover:text-gold-dark transition-colors shrink-0">
                          {word.transliteration}
                        </span>
                        <span className="text-xs text-sandstone/70 truncate text-right">
                          {word.translation.length > 30
                            ? word.translation.slice(0, 30) + "…"
                            : word.translation}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href={`/words?q=${encodeURIComponent(glyph.code)}`}
                    className="mt-2 block text-xs text-gold-dark hover:text-gold transition-colors"
                  >
                    Search all words with {glyph.code} →
                  </Link>
                </section>
              )}

              {pharaohsUsingGlyph.length > 0 && (
                <section>
                  <h3 className="font-display text-lg font-semibold text-brown mb-4">
                    Royal Names Using This Glyph
                  </h3>
                  <div
                    className="
                      bg-ivory-dark/50 border border-sandstone/20 rounded-xl
                      p-4 space-y-2
                    "
                  >
                    {pharaohsUsingGlyph.slice(0, 10).map((pharaoh) => (
                      <Link
                        key={pharaoh.slug}
                        href={`/pharaohs/${pharaoh.slug}`}
                        className="
                          flex items-center justify-between gap-2 p-2
                          -mx-2 rounded-lg
                          hover:bg-gold/10 transition-colors
                          group
                        "
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <div
                            className="
                              w-8 h-8 shrink-0 rounded-md
                              bg-gold/10 group-hover:bg-gold/20
                              flex items-center justify-center
                              overflow-hidden p-1.5
                              transition-colors
                            "
                          >
                            {pharaoh.royalNames?.nomen?.codes?.[0] ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={`/glyphs/${pharaoh.royalNames.nomen.codes[0]}.svg`}
                                alt=""
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <span className="font-hieroglyph text-sm text-gold-dark">𓀭</span>
                            )}
                          </div>
                          <div className="min-w-0">
                            <span className="text-sm font-medium text-brown group-hover:text-gold-dark transition-colors block truncate">
                              {pharaoh.name}
                            </span>
                            {pharaoh.notable && (
                              <span className="text-[10px] text-gold-dark">★ Notable</span>
                            )}
                          </div>
                        </div>
                        <span className="text-xs text-sandstone tabular-nums shrink-0">
                          {formatReign(pharaoh)}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <p className="text-xs text-sandstone/70">
                      This glyph appears in {pharaohsUsingGlyph.length} royal name
                      {pharaohsUsingGlyph.length > 1 ? "s" : ""}.
                    </p>
                    {pharaohsUsingGlyph.length > 10 && (
                      <Link
                        href="/pharaohs"
                        className="text-xs text-gold-dark hover:text-gold transition-colors shrink-0"
                      >
                        See all {pharaohsUsingGlyph.length} →
                      </Link>
                    )}
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
