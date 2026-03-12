import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  getPharaohBySlug,
  getDynastyById,
  getPeriodById,
  getPharaohsByDynasty,
  formatReign,
  formatYear,
} from "@/lib/pharaohs";
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
  return {
    title: `${pharaoh.name} — PharaLex`,
    description: pharaoh.summary ?? `${pharaoh.name}, pharaoh of ancient Egypt.`,
  };
}

export default async function PharaohPage({ params }: Props) {
  const { slug } = await params;
  const pharaoh = getPharaohBySlug(slug);
  if (!pharaoh) notFound();

  const dynasty = getDynastyById(pharaoh.dynastyId);
  const period  = dynasty ? getPeriodById(dynasty.period) : undefined;

  // Siblings: other pharaohs in the same dynasty
  const siblings = getPharaohsByDynasty(pharaoh.dynastyId).filter(
    (p) => p.slug !== pharaoh.slug
  );

  const reignStr = formatReign(pharaoh);
  const startStr = pharaoh.reignStart !== null ? formatYear(pharaoh.reignStart) : null;
  const endStr   = pharaoh.reignEnd   !== null ? formatYear(pharaoh.reignEnd)   : null;

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 sm:py-12">
        <Container size="lg">
          {/* Breadcrumb */}
          <nav className="text-sm text-sandstone mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors">PharaLex</Link>
            <span>/</span>
            <Link href="/pharaohs" className="hover:text-gold transition-colors">Pharaohs</Link>
            {dynasty && (
              <>
                <span>/</span>
                <Link
                  href={`/pharaohs?period=${dynasty.period}`}
                  className="hover:text-gold transition-colors"
                >
                  {period?.name ?? dynasty.name}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-brown">{pharaoh.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hero card */}
              <div className="bg-papyrus/40 border border-sandstone/20 rounded-xl p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="
                      w-16 h-16 shrink-0 rounded-xl
                      bg-gold/15 border border-gold/20
                      flex items-center justify-center
                      font-hieroglyph text-4xl text-gold-dark
                    "
                  >
                    𓀭
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h1 className="font-display text-3xl sm:text-4xl font-bold text-brown">
                        {pharaoh.name}
                      </h1>
                      {pharaoh.notable && (
                        <span className="text-gold text-xl" title="Notable pharaoh">★</span>
                      )}
                    </div>
                    {pharaoh.alternateNames.length > 0 && (
                      <p className="text-sandstone text-sm">
                        Also known as:{" "}
                        <span className="italic">{pharaoh.alternateNames.join(", ")}</span>
                      </p>
                    )}
                  </div>
                </div>

                {pharaoh.summary && (
                  <p className="text-brown-light leading-relaxed">{pharaoh.summary}</p>
                )}
              </div>

              {/* Details grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoCard title="Reign">
                  <p className="text-brown font-medium">{reignStr}</p>
                  {startStr && (
                    <p className="text-sandstone text-sm mt-1">
                      {startStr}
                      {endStr ? ` – ${endStr}` : " – ?"}
                    </p>
                  )}
                </InfoCard>

                <InfoCard title="Dynasty">
                  <p className="text-brown font-medium">{dynasty?.name ?? "Unknown"}</p>
                  {dynasty?.note && (
                    <p className="text-sandstone text-sm mt-1 italic">{dynasty.note}</p>
                  )}
                </InfoCard>

                {period && (
                  <InfoCard title="Period">
                    <p className="text-brown font-medium">{period.name}</p>
                    <p className="text-sandstone text-sm mt-1">
                      c. {Math.abs(period.approxStart)} BC –{" "}
                      {period.approxEnd < 0
                        ? `${Math.abs(period.approxEnd)} BC`
                        : `${period.approxEnd} CE`}
                    </p>
                  </InfoCard>
                )}

                {pharaoh.alternateNames.length > 0 && (
                  <InfoCard title="Alternate Names">
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {pharaoh.alternateNames.map((n) => (
                        <Badge key={n} variant="outline">{n}</Badge>
                      ))}
                    </div>
                  </InfoCard>
                )}
              </div>

              {/* Hieroglyph decorative quote */}
              <div className="border border-sandstone/20 rounded-xl p-5 bg-ivory-dark/30 text-center">
                <p className="font-hieroglyph text-4xl tracking-widest text-gold/60 mb-2">
                  𓂀𓅱𓈖𓁹𓇌𓆑
                </p>
                <p className="text-xs text-sandstone italic">
                  "The Eye of Horus" — a symbol of protection and royal power
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              {/* Quick facts */}
              <div className="bg-ivory-dark/50 border border-sandstone/20 rounded-xl p-5">
                <h2 className="font-display text-lg font-semibold text-brown mb-3">Quick Facts</h2>
                <dl className="space-y-2 text-sm">
                  <FactRow label="Reign" value={reignStr} />
                  <FactRow label="Dynasty" value={dynasty?.name ?? "—"} />
                  <FactRow label="Period"  value={period?.name  ?? "—"} />
                  <FactRow label="Notable" value={pharaoh.notable ? "Yes ★" : "—"} />
                </dl>
              </div>

              {/* External link */}
              <div className="bg-ivory-dark/50 border border-sandstone/20 rounded-xl p-5">
                <h2 className="font-display text-lg font-semibold text-brown mb-2">
                  Learn More
                </h2>
                <a
                  href={`https://pharaoh.se/ancient-egypt/pharaoh/${pharaoh.slug.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("-")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 text-sm text-gold hover:text-gold-dark
                    transition-colors
                  "
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  pharaoh.se
                </a>
                <a
                  href={`https://en.wikipedia.org/wiki/${encodeURIComponent(pharaoh.alternateNames[0] ?? pharaoh.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 text-sm text-gold hover:text-gold-dark
                    transition-colors mt-2
                  "
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Wikipedia
                </a>
              </div>

              {/* Same dynasty */}
              {siblings.length > 0 && (
                <div className="bg-ivory-dark/50 border border-sandstone/20 rounded-xl p-5">
                  <h2 className="font-display text-lg font-semibold text-brown mb-3">
                    Same Dynasty
                  </h2>
                  <ul className="space-y-1.5">
                    {siblings.slice(0, 8).map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/pharaohs/${s.slug}`}
                          className="flex items-center justify-between text-sm group"
                        >
                          <span className="text-brown-light group-hover:text-gold transition-colors">
                            {s.name}
                            {s.notable && <span className="ml-1 text-gold-dark text-xs">★</span>}
                          </span>
                          <span className="text-sandstone text-xs tabular-nums">
                            {formatReign(s)}
                          </span>
                        </Link>
                      </li>
                    ))}
                    {siblings.length > 8 && (
                      <li className="text-xs text-sandstone mt-1">
                        +{siblings.length - 8} more in this dynasty
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Back to list */}
              <Link
                href="/pharaohs"
                className="
                  flex items-center gap-2 text-sm text-sandstone hover:text-gold
                  transition-colors
                "
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to all pharaohs
              </Link>
            </aside>
          </div>
        </Container>
      </main>
    </div>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-ivory-dark/50 border border-sandstone/20 rounded-lg p-4">
      <h3 className="text-xs font-medium text-sandstone uppercase tracking-wide mb-2">{title}</h3>
      {children}
    </div>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-2">
      <dt className="text-sandstone">{label}</dt>
      <dd className="text-brown-light text-right">{value}</dd>
    </div>
  );
}
