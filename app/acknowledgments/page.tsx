import { glyphSvgSrc } from "@/lib/glyph-utils";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export const dynamic = "force-static";

export const metadata = {
  title: "Acknowledgments - PharaLex",
  description:
    "The open-source projects, datasets, and authors whose work makes PharaLex possible.",
  alternates: { canonical: "/acknowledgments" },
  openGraph: {
    title: "Acknowledgments - PharaLex",
    description:
      "The open-source projects, datasets, and authors whose work makes PharaLex possible.",
    url: "/acknowledgments",
  },
};

// ── Types ─────────────────────────────────────────────────────────────────────

interface GlyphSource {
  name: string;
  glyphs: number;
  coverage: string;
  author: string;
  repo?: string;
  url?: string;
  license: string;
  licenseVariant: "default" | "gold" | "sandstone" | "outline";
  commercial: boolean;
  how: string;
}

interface DataSource {
  name: string;
  records: string;
  provides: string;
  author: string;
  url: string;
  license: string;
  licenseVariant: "default" | "gold" | "sandstone" | "outline";
  commercial: boolean;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const GLYPH_SOURCES: GlyphSource[] = [
  {
    name: "JSesh",
    glyphs: 6725,
    coverage: "Gardiner A–Z + Aa + extended variants",
    author: "Serge Jean Paul Thomas & Serge Rosmorduc",
    repo: "https://github.com/rosmord/jsesh",
    url: "https://jsesh.qenherkhopeshef.org/page/fonts_license",
    license: "Custom font license",
    licenseVariant: "sandstone",
    commercial: true,
    how:
      "Cloned from GitHub; SVGs live in jseshGlyphs/src/main/resources/jseshGlyphs/. Glyphs by S.J.P. Thomas may be used freely in publications, databases, and websites. The few signs by Rosmorduc are OFL-1.1.",
  },
  {
    name: "NewGardiner (hierojax)",
    glyphs: 997,
    coverage: "Unicode 16.0 Extended-A block (U+13460–U+143FF)",
    author: "Mark-Jan Nederhof",
    repo: "https://github.com/nederhof/hierojax",
    license: "GPL-3.0",
    licenseVariant: "gold",
    commercial: true,
    how:
      "Extracted per-glyph SVGs from NewGardiner.ttf using fontTools + SVGPathPen",
  },
  {
    name: "Aegyptus 6.17",
    glyphs: 423,
    coverage: "Extended Hieroglyphica codes not in JSesh",
    author: "George Douros",
    url: "https://dn-works.com/ufas/",
    license: "Freeware (non-commercial)",
    licenseVariant: "sandstone",
    commercial: false,
    how:
      "Downloaded last free release (6.17) from dn-works.com; extracted SVGs from TTF using opentypesvg",
  },
  {
    name: "Noto Sans Egyptian Hieroglyphs",
    glyphs: 109,
    coverage: "Rare basic-block codepoints (U+13000–U+1342F) not in JSesh",
    author: "Google Fonts / Noto Project",
    repo: "https://github.com/notofonts/egyptian-hieroglyphs",
    license: "OFL-1.1",
    licenseVariant: "gold",
    commercial: true,
    how:
      "Downloaded NotoSansEgyptianHieroglyphs-Regular.ttf; extracted SVGs using opentypesvg",
  },
];

const DATA_SOURCES: DataSource[] = [
  {
    name: "Wiktionary Egyptian Dictionary",
    records: "~260",
    provides: "Meanings, transliterations, etymology, usage examples",
    author: "Wiktionary contributors (via kaikki.org)",
    url: "https://kaikki.org/dictionary/Ancient%20Egyptian/",
    license: "CC BY-SA 3.0",
    licenseVariant: "gold",
    commercial: true,
  },
  {
    name: "Unicode Unikemet Database",
    records: "4,376",
    provides:
      "Gardiner/Hieroglyphica codes, Unicode codepoints, phonetic values, descriptions, categories, cross-references",
    author: "The Unicode Consortium",
    url: "https://unicode.org/",
    license: "Unicode License",
    licenseVariant: "gold",
    commercial: true,
  },
  {
    name: "JSesh Sign Descriptions",
    records: "6,783",
    provides:
      "Shape/visual tags, additional phonetic transliterations with use/type metadata, composite part relationships",
    author: "Serge Rosmorduc",
    url: "https://github.com/rosmord/jsesh",
    license: "LGPL-3.0 (code only)",
    licenseVariant: "sandstone",
    commercial: true,
  },
  {
    name: "St Andrews Unicode Sign List",
    records: "1,071",
    provides:
      "English physical descriptions, semantic uses (logogram/phonogram/determinative) with transliterations and translations",
    author: "Mark-Jan Nederhof, University of St Andrews",
    url: "https://mjn.host.cs.st-andrews.ac.uk/egyptian/unicode/",
    license: "Academic open",
    licenseVariant: "sandstone",
    commercial: false,
  },
  {
    name: "Aegyptus Glyph List",
    records: "3,900",
    provides:
      "Additional Hieroglyphica sign codes (extended corpus beyond Unikemet)",
    author: "George Douros",
    url: "https://dn-works.com/ufas/",
    license: "—",
    licenseVariant: "outline",
    commercial: false,
  },
];

// ── License legend ─────────────────────────────────────────────────────────────

const LICENSE_LEGEND = [
  {
    license: "Custom (JSesh fonts)",
    label: "JSesh Fonts License — free for publications, databases, websites",
    url: "https://jsesh.qenherkhopeshef.org/page/fonts_license",
  },
  {
    license: "GPL-3.0",
    label: "GNU General Public License 3.0",
    url: "https://www.gnu.org/licenses/gpl-3.0.html",
  },
  {
    license: "OFL-1.1",
    label: "SIL Open Font License 1.1",
    url: "https://openfontlicense.org/",
  },
  {
    license: "CC BY-SA 3.0",
    label: "Creative Commons Attribution-ShareAlike 3.0",
    url: "https://creativecommons.org/licenses/by-sa/3.0/",
  },
  {
    license: "CC BY-SA 4.0",
    label: "Creative Commons Attribution-ShareAlike 4.0",
    url: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    license: "Unicode License",
    label: "Unicode, Inc. License Agreement",
    url: "https://www.unicode.org/license.txt",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AcknowledgmentsPage() {
  const totalGlyphs = GLYPH_SOURCES.reduce((sum, s) => sum + s.glyphs, 0);
  const totalRecords = "~32,000+";

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
            <span className="text-brown">Acknowledgments</span>
          </nav>

          {/* Hero */}
          <div className="mb-10">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-brown mb-3">
              Acknowledgments
            </h1>
            <p className="text-brown-light max-w-2xl leading-relaxed">
              PharaLex is built entirely on the shoulders of open scholarship.
              Every glyph shape, every meaning, every transliteration comes from
              the generous work of researchers, linguists, type designers, and
              open-data contributors listed here. This page is our thanks.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {[
              { label: "Total Glyphs", value: totalGlyphs.toLocaleString() },
              { label: "SVG Coverage", value: "100%" },
              { label: "Data Records", value: totalRecords },
              { label: "Open Licenses", value: `${LICENSE_LEGEND.length}` },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-papyrus/50 border border-sandstone/20 rounded-lg px-4 py-3 text-center"
              >
                <div className="font-display text-2xl font-bold text-gold-dark">
                  {s.value}
                </div>
                <div className="text-xs text-sandstone mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── Glyph Visual Sources ─────────────────────────────────────────── */}
          <section className="mb-12">
            <SectionHeader
              glyph="Y1"
              title="Glyph Visual Sources"
              subtitle={`${totalGlyphs.toLocaleString()} SVG glyphs drawn from four open-source collections`}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {GLYPH_SOURCES.map((src) => (
                <GlyphSourceCard key={src.name} source={src} />
              ))}
            </div>

            <div className="mt-4 p-4 sm:p-5 rounded-xl bg-gold/8 border border-gold/25">
              <p className="text-sm text-brown-light leading-relaxed">
                <span className="font-semibold text-gold-dark">Note: </span>
                All SVGs use{" "}
                <code className="text-xs bg-brown/8 px-1.5 py-0.5 rounded font-mono">
                  fill=&quot;currentColor&quot;
                </code>{" "}
                so they adapt to PharaLex&apos;s light and dark themes. Font-based
                sources (NewGardiner, Aegyptus, Noto) were converted to SVG
                paths using{" "}
                <a
                  href="https://github.com/fonttools/fonttools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-dark"
                >
                  fontTools
                </a>{" "}
                and{" "}
                <a
                  href="https://github.com/paulirish/opentypesvg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-dark"
                >
                  opentypesvg
                </a>
                .
              </p>
            </div>
          </section>

          {/* ── Dictionary & Metadata Sources ───────────────────────────────── */}
          <section className="mb-12">
            <SectionHeader
              glyph="Aa1"
              title="Dictionary & Metadata"
              subtitle="Seven datasets merged into a single unified glyph index"
            />

            <div className="space-y-3">
              {DATA_SOURCES.map((src) => (
                <DataSourceRow key={src.name} source={src} />
              ))}
            </div>
          </section>

          {/* ── License Reference ───────────────────────────────────────────── */}
          <section className="mb-12">
            <SectionHeader
              glyph="V28"
              title="License Reference"
              subtitle="Full text of every license used"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LICENSE_LEGEND.map((l) => (
                <a
                  key={l.license}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-3 p-4
                    bg-ivory-dark/50 border border-sandstone/20 rounded-lg
                    hover:border-gold/40 hover:shadow-sm transition-all group
                  "
                >
                  <div
                    className="
                      w-9 h-9 shrink-0 rounded-md
                      bg-gold/10 group-hover:bg-gold/20
                      flex items-center justify-center
                      transition-colors
                    "
                  >
                    <svg
                      className="w-4 h-4 text-gold-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-brown group-hover:text-gold transition-colors">
                      {l.license}
                    </div>
                    <div className="text-xs text-sandstone truncate">{l.label}</div>
                  </div>
                  <svg
                    className="w-3.5 h-3.5 text-sandstone/50 group-hover:text-gold/70 transition-colors shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </section>

          {/* ── Open Source Thanks ──────────────────────────────────────────── */}
          <section className="mb-12">
            <SectionHeader
              glyph="D36"
              title="Built With Open Source"
              subtitle="The frameworks and tools powering this site"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                {
                  name: "Next.js",
                  role: "React framework (App Router, SSG/SSR)",
                  url: "https://nextjs.org/",
                  license: "MIT",
                },
                {
                  name: "React",
                  role: "UI component model",
                  url: "https://react.dev/",
                  license: "MIT",
                },
                {
                  name: "Tailwind CSS",
                  role: "Utility-first styling (v4)",
                  url: "https://tailwindcss.com/",
                  license: "MIT",
                },
                {
                  name: "TanStack Virtual",
                  role: "Virtualized list rendering for 8,000+ glyphs",
                  url: "https://tanstack.com/virtual",
                  license: "MIT",
                },
                {
                  name: "Fuse.js",
                  role: "Fuzzy full-text search",
                  url: "https://www.fusejs.io/",
                  license: "Apache-2.0",
                },
                {
                  name: "fast-xml-parser",
                  role: "Parsing JSesh & St Andrews XML data",
                  url: "https://github.com/NaturalIntelligence/fast-xml-parser",
                  license: "MIT",
                },
                {
                  name: "fontTools",
                  role: "SVG path extraction from TTF fonts",
                  url: "https://github.com/fonttools/fonttools",
                  license: "MIT",
                },
                {
                  name: "Cormorant Garamond",
                  role: "Display typeface (headings)",
                  url: "https://fonts.google.com/specimen/Cormorant+Garamond",
                  license: "OFL-1.1",
                },
                {
                  name: "Source Serif 4",
                  role: "Body typeface",
                  url: "https://fonts.google.com/specimen/Source+Serif+4",
                  license: "OFL-1.1",
                },
              ].map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-start gap-3 p-4
                    bg-ivory-dark/50 border border-sandstone/20 rounded-lg
                    hover:border-gold/40 hover:shadow-sm transition-all group
                  "
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <span className="font-medium text-sm text-brown group-hover:text-gold transition-colors">
                        {tool.name}
                      </span>
                      <Badge variant="outline" size="sm">
                        {tool.license}
                      </Badge>
                    </div>
                    <p className="text-xs text-sandstone leading-relaxed">
                      {tool.role}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </Container>
      </main>

      <footer className="py-5 border-t border-sandstone/20">
        <Container>
          <p className="text-xs text-sandstone text-center">
            For the full machine-readable attribution document, see{" "}
            <a
              href="https://github.com/search?q=pharalex+SOURCES.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-dark"
            >
              SOURCES.md
            </a>{" "}
            in the repository.
          </p>
        </Container>
      </footer>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionHeader({
  glyph,
  title,
  subtitle,
}: {
  glyph: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="h-px flex-1 bg-sandstone/20" />
      <div className="flex items-center gap-3 px-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={glyphSvgSrc(glyph)}
          alt={glyph}
          className="w-7 h-7 object-contain text-gold-dark opacity-80"
          style={{ filter: "invert(55%) sepia(30%) saturate(600%) hue-rotate(5deg) brightness(90%)" }}
        />
        <div>
          <h2 className="font-display text-xl font-semibold text-brown leading-tight">
            {title}
          </h2>
          <p className="text-xs text-sandstone">{subtitle}</p>
        </div>
      </div>
      <div className="h-px flex-1 bg-sandstone/20" />
    </div>
  );
}

function GlyphSourceCard({ source }: { source: GlyphSource }) {
  const href = source.repo ?? source.url;

  return (
    <div className="bg-ivory-dark/50 border border-sandstone/20 rounded-xl p-5 flex flex-col gap-4">
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-display text-lg font-semibold text-brown">
              {source.name}
            </h3>
            <Badge variant={source.licenseVariant} size="sm">
              {source.license}
            </Badge>
          </div>
          <p className="text-xs text-sandstone">by {source.author}</p>
        </div>
        <div className="text-right shrink-0">
          <div className="font-display text-2xl font-bold text-gold-dark">
            {source.glyphs.toLocaleString()}
          </div>
          <div className="text-xs text-sandstone">glyphs</div>
        </div>
      </div>

      {/* Coverage */}
      <p className="text-sm text-brown-light leading-relaxed">{source.coverage}</p>

      {/* How obtained */}
      <p className="text-xs text-sandstone leading-relaxed border-t border-sandstone/15 pt-3">
        {source.how}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
        <div className="flex items-center gap-1.5">
          {source.commercial ? (
            <span className="text-xs text-gold-dark">✓ Commercial use</span>
          ) : (
            <span className="text-xs text-sandstone">✗ Non-commercial only</span>
          )}
        </div>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gold hover:text-gold-dark transition-colors flex items-center gap-1"
          >
            {source.repo ? "View on GitHub" : "Visit source"}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

function DataSourceRow({ source }: { source: DataSource }) {
  return (
    <div className="bg-ivory-dark/50 border border-sandstone/20 rounded-lg px-5 py-4">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sm text-brown hover:text-gold transition-colors"
            >
              {source.name}
            </a>
            <Badge variant={source.licenseVariant} size="sm">
              {source.license}
            </Badge>
            {source.commercial ? (
              <span className="text-xs text-gold-dark">✓ Commercial</span>
            ) : (
              <span className="text-xs text-sandstone">✗ Non-commercial</span>
            )}
          </div>
          <p className="text-xs text-sandstone mb-1">by {source.author}</p>
          <p className="text-xs text-brown-light leading-relaxed">{source.provides}</p>
        </div>
        <div className="text-right shrink-0">
          <div className="font-display text-xl font-bold text-gold-dark">
            {source.records}
          </div>
          <div className="text-xs text-sandstone">entries</div>
        </div>
      </div>
    </div>
  );
}
