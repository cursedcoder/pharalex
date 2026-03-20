export const dynamic = "force-static";

import { glyphSvgSrc } from "@/lib/glyph-utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { RoyalNamesDisplay } from "@/components/Cartouche";
import { GlyphDetailsProvider } from "@/components/GlyphDetailsContext";
import { ReportIssueLink } from "@/components/ReportIssueLink";
import { BookmarkButton } from "@/components/BookmarkButton";
import {
  getPharaohBySlug,
  getDynastyById,
  getPeriodById,
  getPharaohsByDynasty,
  getAdjacentPharaohs,
  formatReign,
} from "@/lib/pharaohs";
import { buildGlyphDetailsMap } from "@/lib/glyphs";
import { getTextsByPharaoh } from "@/lib/texts";
import { mdcToCodes } from "@/lib/mdc";
import { PHARAOHS } from "@/lib/data/pharaohs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PHARAOHS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const pharaoh = getPharaohBySlug(slug);
  if (!pharaoh) return {};

  const title = pharaoh.name;
  const reignMeta = formatReign(pharaoh);
  const description =
    pharaoh.summary ??
    `${pharaoh.name}${reignMeta !== "Unknown" ? ` (${reignMeta})` : ""}, pharaoh of ancient Egypt.`;

  return {
    title,
    description,
    alternates: { canonical: `/pharaohs/${pharaoh.slug}` },
    openGraph: {
      title: `${pharaoh.name} — PharaLex`,
      description,
      url: `/pharaohs/${pharaoh.slug}`,
    },
    twitter: {
      title: `${pharaoh.name} — PharaLex`,
      description,
    },
  };
}

export default async function PharaohPage({ params }: Props) {
  const { slug } = await params;
  const pharaoh = getPharaohBySlug(slug);
  if (!pharaoh) notFound();

  const dynasty = getDynastyById(pharaoh.dynastyId);
  const period  = dynasty ? getPeriodById(dynasty.period) : undefined;

  // All pharaohs in the same dynasty (including current)
  const dynastyPharaohs = getPharaohsByDynasty(pharaoh.dynastyId);

  const relatedTexts = getTextsByPharaoh(pharaoh.slug);
  const { prev, next } = getAdjacentPharaohs(pharaoh.slug);
  const chronologicalIndex = PHARAOHS.findIndex((p) => p.slug === pharaoh.slug);

  const reignStr = formatReign(pharaoh);

  const allRoyalCodes: string[] = [];
  if (pharaoh.royalNames) {
    for (const rn of Object.values(pharaoh.royalNames)) {
      if (rn && typeof rn === "object" && "codes" in rn) {
        allRoyalCodes.push(...(rn as { codes: string[] }).codes);
      }
    }
  }
  const glyphDetails = await buildGlyphDetailsMap(allRoyalCodes);

  const baseDescription = pharaoh.summary ?? `${pharaoh.name}, pharaoh of ancient Egypt.`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: pharaoh.name,
    alternateName: pharaoh.alternateNames,
    description: reignStr !== "Unknown"
      ? `${baseDescription} Reign: ${reignStr}.`
      : baseDescription,
    url: `https://pharalex.app/pharaohs/${pharaoh.slug}`,
    jobTitle: "Pharaoh of Egypt",
    ...(dynasty && {
      memberOf: {
        "@type": "Organization",
        name: dynasty.name,
      },
    }),
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main id="main-content" className="py-8 sm:py-12">
        <Container size="lg">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-sandstone mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold">PharaLex</Link>
            <span aria-hidden="true">/</span>
            <Link href="/pharaohs" className="hover:text-gold transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold">Pharaohs</Link>
            {dynasty && (
              <>
                <span aria-hidden="true">/</span>
                <Link
                  href={`/pharaohs?period=${dynasty.period}`}
                  className="hover:text-gold transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold"
                >
                  {period?.name ?? dynasty.name}
                </Link>
              </>
            )}
            <span aria-hidden="true">/</span>
            <span className="text-brown" aria-current="page">{pharaoh.name}</span>
          </nav>

          {/* On-page section nav */}
          <nav aria-label="Page sections" className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-6 text-xs text-sandstone">
            {chronologicalIndex !== -1 && (
              <span className="tabular-nums">
                Ruler {chronologicalIndex + 1} of {PHARAOHS.length}
              </span>
            )}
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <a href="#details-card" className="hover:text-gold transition-colors hidden sm:inline">Overview</a>
            {pharaoh.royalNames && (
              <>
                <span aria-hidden="true">·</span>
                <a href="#royal-names-heading" className="hover:text-gold transition-colors">Royal Names</a>
              </>
            )}
            {relatedTexts.length > 0 && (
              <>
                <span aria-hidden="true">·</span>
                <a href="#attested-texts-heading" className="hover:text-gold transition-colors">Texts ({relatedTexts.length})</a>
              </>
            )}
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Single unified card */}
            <article id="details-card" className="lg:col-span-3 bg-papyrus/40 border border-sandstone/20 rounded-xl p-6 sm:p-8 scroll-mt-24">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: hero + details */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Hero */}
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        w-16 h-16 shrink-0 rounded-xl
                        bg-gold/15 border border-gold/20
                        flex items-center justify-center
                        overflow-hidden p-2
                      "
                    >
                      {pharaoh.royalNames?.nomen?.codes?.[0] ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={glyphSvgSrc(pharaoh.royalNames.nomen.codes[0])}
                          alt={`Hieroglyph from ${pharaoh.name}'s nomen`}
                          className="w-full h-full object-contain"
                        />
                      ) : pharaoh.royalNames?.prenomen?.codes?.[0] ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={glyphSvgSrc(pharaoh.royalNames.prenomen.codes[0])}
                          alt={`Hieroglyph from ${pharaoh.name}'s prenomen`}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="font-hieroglyph text-4xl text-gold-dark" aria-hidden="true">𓀭</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h1 className="font-display text-3xl sm:text-4xl font-bold text-brown">
                          {pharaoh.name}
                        </h1>
                        {pharaoh.notable && (
                          <span className="text-gold text-xl" title="Notable pharaoh" role="img" aria-label="Notable pharaoh">★</span>
                        )}
                        <BookmarkButton
                          type="pharaoh"
                          id={pharaoh.slug}
                          label={pharaoh.name}
                          size="sm"
                        />
                      </div>
                      {/* Transliterated royal names subtitle */}
                      {(pharaoh.royalNames?.prenomen?.transliteration || pharaoh.royalNames?.nomen?.transliteration) && (
                        <p className="text-sm italic text-sandstone tracking-wide">
                          {[
                            pharaoh.royalNames?.prenomen?.transliteration,
                            pharaoh.royalNames?.nomen?.transliteration,
                          ].filter(Boolean).join(" — ")}
                        </p>
                      )}
                    </div>
                  </div>

                  {pharaoh.summary && (
                    <p className="text-brown leading-relaxed">{pharaoh.summary}</p>
                  )}

                  {/* Details */}
                  <div className="border-t border-sandstone/15 pt-5">
                    <dl className="grid grid-cols-[auto_1fr] gap-x-4 sm:gap-x-6 gap-y-3 text-sm">
                      <dt className="text-sandstone">Reign</dt>
                      <dd className="text-brown font-medium">{reignStr}</dd>

                      <dt className="text-sandstone">Dynasty</dt>
                      <dd>
                        {dynasty ? (
                          <Link
                            href={`/pharaohs?period=${dynasty.period}`}
                            className="text-brown font-medium hover:text-gold transition-colors"
                          >
                            {dynasty.name}
                          </Link>
                        ) : (
                          <span className="text-brown font-medium">Unknown</span>
                        )}
                        {dynasty?.note && (
                          <span className="text-sandstone italic ml-2">{dynasty.note}</span>
                        )}
                      </dd>

                      {period && (
                        <>
                          <dt className="text-sandstone">Period</dt>
                          <dd>
                            <Link
                              href={`/pharaohs?period=${period.id}`}
                              className="text-brown font-medium hover:text-gold transition-colors"
                            >
                              {period.name}
                            </Link>
                            <span className="text-sandstone ml-2">
                              c. {Math.abs(period.approxStart)} BC –{" "}
                              {period.approxEnd < 0
                                ? `${Math.abs(period.approxEnd)} BC`
                                : `${period.approxEnd} CE`}
                            </span>
                          </dd>
                        </>
                      )}

                      {pharaoh.alternateNames.length > 0 && (
                        <>
                          <dt className="text-sandstone">Also known as</dt>
                          <dd className="flex flex-wrap gap-1.5">
                            {pharaoh.alternateNames.map((n) => (
                              <Badge key={n} variant="outline">{n}</Badge>
                            ))}
                          </dd>
                        </>
                      )}
                    </dl>
                  </div>

                  {/* External links */}
                  <div className="border-t border-sandstone/15 pt-4 flex flex-wrap gap-x-6 gap-y-2">
                    <a
                      href={`https://pharaoh.se/ancient-egypt/pharaoh/${pharaoh.name.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("-")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${pharaoh.name} on pharaoh.se (opens in new tab)`}
                      className="flex items-center gap-2 text-sm text-gold hover:text-gold-dark transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold"
                    >
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      pharaoh.se
                    </a>
                    <a
                      href={`https://en.wikipedia.org/wiki/${encodeURIComponent(pharaoh.alternateNames[0] ?? pharaoh.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${pharaoh.name} on Wikipedia (opens in new tab)`}
                      className="flex items-center gap-2 text-sm text-gold hover:text-gold-dark transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold"
                    >
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Wikipedia
                    </a>
                  </div>
                </div>

                {/* Right: dynasty list */}
                {dynastyPharaohs.length > 1 && (
                  <nav aria-label="Same dynasty pharaohs" className="lg:border-l lg:border-sandstone/15 lg:pl-8">
                    <h2 className="font-display text-lg font-semibold text-brown mb-1">
                      {dynasty?.name ?? "Same Dynasty"}
                    </h2>
                    <p className="text-xs text-sandstone mb-3 tabular-nums">
                      {dynastyPharaohs.length} ruler{dynastyPharaohs.length !== 1 ? "s" : ""}
                    </p>
                    <ul className="space-y-1.5">
                      {dynastyPharaohs.slice(0, 10).map((s) => {
                        const isCurrent = s.slug === pharaoh.slug;
                        return (
                          <li key={s.slug}>
                            {(() => {
                              const glyphCode = s.royalNames?.nomen?.codes?.[0] ?? s.royalNames?.prenomen?.codes?.[0];
                              const glyphEl = glyphCode ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={glyphSvgSrc(glyphCode)} alt="" className="w-4 h-4 object-contain shrink-0" />
                              ) : null;

                              return isCurrent ? (
                                <span aria-current="page" className="flex items-center gap-2 text-sm py-0.5 px-2 -mx-2 rounded-md bg-gold/10 border border-gold/20">
                                  {glyphEl}
                                  <span className="text-gold-dark font-semibold flex-1 min-w-0 truncate">
                                    {s.name}
                                    {s.notable && <span className="ml-1 text-xs">★</span>}
                                  </span>
                                  <span className="text-gold-dark/60 text-xs tabular-nums shrink-0">
                                    {formatReign(s)}
                                  </span>
                                </span>
                              ) : (
                                <Link
                                  href={`/pharaohs/${s.slug}`}
                                  className="flex items-center gap-2 text-sm group rounded focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold"
                                >
                                  {glyphEl && <span className="opacity-50 group-hover:opacity-100 transition-opacity">{glyphEl}</span>}
                                  <span className="text-brown group-hover:text-gold transition-colors flex-1 min-w-0 truncate">
                                    {s.name}
                                    {s.notable && <span className="ml-1 text-gold-dark text-xs">★</span>}
                                  </span>
                                  <span className="text-sandstone text-xs tabular-nums shrink-0">
                                    {formatReign(s)}
                                  </span>
                                </Link>
                              );
                            })()}
                          </li>
                        );
                      })}
                      {dynastyPharaohs.length > 10 && (
                        <li className="mt-1">
                          <Link
                            href={`/pharaohs?period=${dynasty?.period ?? ""}`}
                            className="text-xs text-gold hover:text-gold-dark transition-colors"
                          >
                            +{dynastyPharaohs.length - 10} more in this dynasty
                          </Link>
                        </li>
                      )}
                    </ul>
                  </nav>
                )}
              </div>
            </article>

            {/* Royal Names / Cartouches — full width */}
            {pharaoh.royalNames && (
              <section className="lg:col-span-3 scroll-mt-24" aria-labelledby="royal-names-heading">
                <div className="flex items-baseline gap-3 mb-6">
                  <h2 id="royal-names-heading" className="font-display text-xl font-semibold text-brown">
                    Royal Names in Hieroglyphs
                  </h2>
                  <span className="text-xs text-sandstone tabular-nums">
                    {[pharaoh.royalNames.horus, pharaoh.royalNames.prenomen, pharaoh.royalNames.nomen, pharaoh.royalNames.nebty, pharaoh.royalNames.golden].filter(Boolean).length} of 5 documented
                  </span>
                </div>
                <GlyphDetailsProvider details={glyphDetails}>
                  <RoyalNamesDisplay
                    prenomen={pharaoh.royalNames.prenomen}
                    nomen={pharaoh.royalNames.nomen}
                    horus={pharaoh.royalNames.horus}
                    nebty={pharaoh.royalNames.nebty}
                    golden={pharaoh.royalNames.golden}
                    dynastyId={pharaoh.dynastyId}
                    size="lg"
                  />
                </GlyphDetailsProvider>
                <p className="text-xs text-sandstone mt-6">
                  Select any glyph to learn more about it. The cartouche (oval frame)
                  indicates a royal name.
                </p>
              </section>
            )}

            {/* Fallback for pharaohs without cartouche data */}
            {!pharaoh.royalNames && (
              <div className="lg:col-span-3 border border-dashed border-sandstone/30 rounded-xl p-5 bg-ivory-dark/20 text-center">
                <p className="text-sm text-sandstone">
                  Royal name hieroglyphs not yet documented for this ruler.
                </p>
              </div>
            )}

            {/* Attested Texts */}
            {relatedTexts.length > 0 && (
              <section className="lg:col-span-3 border border-sandstone/20 rounded-xl p-5 sm:p-6 bg-ivory-dark/30 scroll-mt-24" aria-labelledby="attested-texts-heading">
                <div className="flex items-baseline gap-3 mb-4">
                  <h2 id="attested-texts-heading" className="font-display text-xl font-semibold text-brown">
                    Attested Texts
                  </h2>
                  <span className="text-xs text-sandstone tabular-nums">{relatedTexts.length} text{relatedTexts.length !== 1 ? "s" : ""}</span>
                </div>
                <div className="space-y-3">
                  {relatedTexts.map((text) => {
                    const previewCodes = text.lines[0]?.tokens
                      .slice(0, 5)
                      .flatMap((t) => mdcToCodes(t.mdc))
                      .slice(0, 8);
                    return (
                      <Link
                        key={text.slug}
                        href={`/texts/${text.slug}`}
                        className="group flex items-center gap-4 p-3 rounded-lg hover:bg-papyrus/40 transition-colors"
                      >
                        {/* Glyph preview */}
                        {previewCodes && previewCodes.length > 0 && (
                          <div className="flex items-center gap-0.5 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                            {previewCodes.map((code, i) => (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                key={`${code}-${i}`}
                                src={glyphSvgSrc(code)}
                                alt={code}
                                className="w-5 h-5 object-contain"
                              />
                            ))}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-brown group-hover:text-gold-dark transition-colors truncate">
                            {text.title}
                          </p>
                          <p className="text-xs text-sandstone">{text.date}</p>
                        </div>
                        <span className="text-xs text-gold-dark shrink-0 group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
                          Read →
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Prev / Next navigation */}
          {(prev || next) && (
            <nav aria-label="Previous and next pharaoh" className="mt-10 grid grid-cols-2 gap-4">
              {prev ? (
                <Link
                  href={`/pharaohs/${prev.slug}`}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-sandstone/20 hover:border-gold/40 hover:bg-papyrus/30 transition-all"
                >
                  <span className="text-sandstone group-hover:text-gold transition-colors shrink-0" aria-hidden="true">←</span>
                  {(() => {
                    const code = prev.royalNames?.nomen?.codes?.[0] ?? prev.royalNames?.prenomen?.codes?.[0];
                    return code ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={glyphSvgSrc(code)} alt="" className="w-8 h-8 object-contain shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                    ) : null;
                  })()}
                  <div className="min-w-0">
                    <div className="text-xs text-sandstone mb-0.5">Previous</div>
                    <div className="text-sm font-medium text-brown group-hover:text-gold-dark transition-colors truncate">{prev.name}</div>
                  </div>
                </Link>
              ) : <div />}
              {next ? (
                <Link
                  href={`/pharaohs/${next.slug}`}
                  className="group flex items-center justify-end gap-3 p-4 rounded-xl border border-sandstone/20 hover:border-gold/40 hover:bg-papyrus/30 transition-all text-right"
                >
                  <div className="min-w-0">
                    <div className="text-xs text-sandstone mb-0.5">Next</div>
                    <div className="text-sm font-medium text-brown group-hover:text-gold-dark transition-colors truncate">{next.name}</div>
                  </div>
                  {(() => {
                    const code = next.royalNames?.nomen?.codes?.[0] ?? next.royalNames?.prenomen?.codes?.[0];
                    return code ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={glyphSvgSrc(code)} alt="" className="w-8 h-8 object-contain shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                    ) : null;
                  })()}
                  <span className="text-sandstone group-hover:text-gold transition-colors shrink-0" aria-hidden="true">→</span>
                </Link>
              ) : <div />}
            </nav>
          )}

          <div className="mt-8 text-center">
            <ReportIssueLink title={`${pharaoh.name}: data correction`} />
          </div>
        </Container>
      </main>

      <footer className="py-5 border-t border-sandstone/20">
        <Container size="lg">
          <p className="text-xs text-sandstone text-center">
            Royal name data sourced from{" "}
            <a href="https://pharaoh.se" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark">
              pharaoh.se
            </a>{" "}
            (CC BY 4.0) · Dates are approximate and subject to scholarly revision.
          </p>
        </Container>
      </footer>
    </div>
  );
}

