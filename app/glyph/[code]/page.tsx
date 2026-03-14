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
import { translitToUnicode } from "@/lib/word-utils";
import { glyphSvgSrc } from "@/lib/glyph-utils";
import { UnicodeChar } from "@/components/UnicodeChar";
import type { ReactNode } from "react";

/** Gardiner code pattern: A1, Aa15, D53B, etc. */
const GARDINER_RE = /\b([A-Z][a-z]?\d+[A-Za-z]?)\b/g;

/** Strip inline Unicode hieroglyph characters (U+13000–U+143FF) — they duplicate our SVG pills. */
const HIERO_UNICODE_RE = /[\u{13000}-\u{143FF}]\s*/gu;

/** Strip leading zeros from Gardiner code numbers: S040 → S40, R011 → R11 */
function normalizeGardinerCode(code: string): string {
  return code.replace(/^([A-Z][a-z]?)0+(\d)/, "$1$2");
}

/** Turn Gardiner codes in text into linked glyph pills. */
function linkifyCodes(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(GARDINER_RE)) {
    const code = normalizeGardinerCode(match[1]);
    const start = match.index!;
    if (start > last) parts.push(text.slice(last, start).replace(HIERO_UNICODE_RE, ""));
    parts.push(
      <Link
        key={start}
        href={glyphHref(code)}
        className="inline-flex items-center gap-1 px-1.5 py-0.5 -my-0.5 rounded-md bg-gold/10 border border-gold/30 hover:bg-gold/20 hover:border-gold/50 transition-colors group"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={glyphSvgSrc(code)}
          alt={code}
          className="w-4 h-4 object-contain"
        />
        <span className="text-sm font-medium text-gold-dark group-hover:text-brown transition-colors">
          {code}
        </span>
      </Link>
    );
    last = start + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last).replace(HIERO_UNICODE_RE, ""));
  return parts.length > 0 ? parts : text.replace(HIERO_UNICODE_RE, "");
}

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
  const displayName = glyph.signName || primaryMeaning || glyph.categoryName;
  const title = `${glyph.code} ${glyph.unicode} — ${displayName}`;
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
  const wordsUsingGlyph = await getWordsByGardinerCode(glyph.code, 6);

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
                    <div className="flex items-center gap-3 mb-1">
                      <h1 className="font-display text-3xl sm:text-4xl font-bold text-brown">
                        {glyph.code}
                      </h1>
                      {glyph.unicode && (
                        <UnicodeChar char={glyph.unicode} className="text-2xl text-sandstone/60" />
                      )}
                      {glyph.signName && (
                        <span className="px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-sm font-medium">
                          {glyph.signName}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 flex-wrap mb-4">
                      <Link
                        href={`/categories/${glyph.category}`}
                        className="
                          inline-flex items-center gap-2
                          text-gold hover:text-gold-dark transition-colors
                        "
                      >
                        <span className="font-medium">{glyph.category}</span>
                        <span className="text-sandstone">·</span>
                        <span>{glyph.categoryName}</span>
                      </Link>
                      {glyph.unicode && (
                        <>
                          <span className="text-sandstone/40">·</span>
                          <span className="text-xs font-mono text-sandstone">
                            U+{glyph.unicode.codePointAt(0)?.toString(16).toUpperCase()}
                          </span>
                        </>
                      )}
                      {glyph.source && (
                        <>
                          <span className="text-sandstone/40">·</span>
                          <span className="text-xs text-sandstone capitalize">
                            {glyph.source}
                          </span>
                        </>
                      )}
                    </div>

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
                          {glyph.transliteration.map((t) => {
                            const count = glyph.transliterationCounts?.[t];
                            return count ? (
                              <Link
                                key={t}
                                href={`/search?q=${encodeURIComponent(t)}&show=words&exact=true`}
                                className="
                                  inline-flex items-baseline gap-1
                                  px-3 py-1.5
                                  bg-brown/5 rounded-lg
                                  text-brown-light italic font-medium
                                  hover:bg-gold/15 hover:text-gold-dark
                                  transition-colors group
                                "
                              >
                                {t}
                                <sup className="text-[10px] not-italic font-normal text-sandstone/70 group-hover:text-gold-dark/70 tabular-nums">
                                  {count}
                                </sup>
                              </Link>
                            ) : (
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
                            );
                          })}
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
                      {linkifyCodes(glyph.description)}
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
                      {linkifyCodes(glyph.description)}
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
                              {linkifyCodes(meaning.text)}
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
              {wordsUsingGlyph.length > 0 && (
                <section>
                  <h3 className="font-display text-lg font-semibold text-brown mb-3">
                    Words Using This Glyph
                  </h3>
                  <div className="space-y-2">
                    {wordsUsingGlyph.slice(0, 5).map((word) => (
                      <Link
                        key={word.transliteration}
                        href={wordHref(word.transliteration)}
                        className="block bg-ivory-dark/50 border border-sandstone/20 rounded-lg p-3 hover:border-gold/40 hover:shadow-sm transition-all group"
                      >
                        <div className="flex gap-2 mb-2 overflow-hidden">
                          {word.gardinerCodes.slice(0, 8).map((code, i) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              key={`${code}-${i}`}
                              src={glyphSvgSrc(code)}
                              alt={code}
                              className="w-6 h-6 object-contain shrink-0"
                            />
                          ))}
                          {word.gardinerCodes.length > 8 && (
                            <span className="text-xs text-sandstone self-center">…</span>
                          )}
                        </div>
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-sm font-medium text-brown group-hover:text-gold-dark transition-colors italic">
                            {translitToUnicode(word.transliteration)}
                          </span>
                          {word.grammar && (
                            <Badge variant="outline" size="sm">
                              {word.grammar}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-brown-light mt-1 line-clamp-1">
                          {word.translation}
                        </p>
                      </Link>
                    ))}
                  </div>
                  {wordsUsingGlyph.length > 5 && (
                    <Link
                      href={`/search?q=${encodeURIComponent(glyph.code)}&show=words&gardiner=true`}
                      className="mt-3 block text-center py-2 px-4 bg-gold/10 text-gold-dark rounded-lg hover:bg-gold/20 transition-colors font-medium text-sm"
                    >
                      See all words using {glyph.code} →
                    </Link>
                  )}
                </section>
              )}

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
                        glyphSize="md"
                      />
                    ))}
                  </div>
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
