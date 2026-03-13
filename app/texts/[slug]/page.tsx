import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { TextReader } from "@/components/TextReader";
import { GlyphDetailsProvider } from "@/components/GlyphDetailsContext";
import { getTextBySlug, getAllTexts } from "@/lib/texts";
import { getPharaohBySlug } from "@/lib/pharaohs";
import { buildGlyphDetailsMap } from "@/lib/glyphs";
import { mdcToCodes } from "@/lib/mdc";
import type { PeriodId } from "@/lib/types";

interface Props {
  params: Promise<{ slug: string }>;
}

const PERIOD_LABELS: Record<PeriodId, string> = {
  predynastic: "Predynastic",
  "early-dynastic": "Early Dynastic",
  "old-kingdom": "Old Kingdom",
  "first-intermediate": "1st Intermediate",
  "middle-kingdom": "Middle Kingdom",
  "second-intermediate": "2nd Intermediate",
  "new-kingdom": "New Kingdom",
  "third-intermediate": "3rd Intermediate",
  "late-period": "Late Period",
  ptolemaic: "Ptolemaic",
  roman: "Roman",
};

export async function generateStaticParams() {
  return getAllTexts().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const text = getTextBySlug(slug);
  if (!text) return {};

  const title = text.title;
  const description = text.description;

  return {
    title,
    description,
    alternates: { canonical: `/texts/${slug}` },
    openGraph: {
      title: `${title} — PharaLex`,
      description,
      url: `/texts/${slug}`,
    },
    twitter: {
      title: `${title} — PharaLex`,
      description,
    },
  };
}

export default async function TextPage({ params }: Props) {
  const { slug } = await params;
  const text = getTextBySlug(slug);
  if (!text) notFound();

  const pharaoh = text.pharaohSlug ? getPharaohBySlug(text.pharaohSlug) : null;
  const totalWords = text.lines.reduce((n, l) => n + l.tokens.length, 0);

  const allCodes = new Set<string>();
  for (const line of text.lines) {
    for (const token of line.tokens) {
      for (const code of mdcToCodes(token.mdc)) allCodes.add(code);
    }
  }
  const glyphDetails = await buildGlyphDetailsMap([...allCodes]);

  return (
    <>
      <Header />
      <main className="py-8 sm:py-12">
        <Container size="lg">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sandstone text-sm mb-8">
              <Link href="/" className="hover:text-gold transition-colors">
                PharaLex
              </Link>
              <span>/</span>
              <Link href="/texts" className="hover:text-gold transition-colors">
                Texts
              </Link>
              <span>/</span>
              <span className="text-brown-light truncate">{text.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
              {/* Main reader column */}
              <div className="space-y-6 min-w-0">
                {/* Text header */}
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="gold" size="sm">
                      {PERIOD_LABELS[text.period]}
                    </Badge>
                    {pharaoh && (
                      <Badge variant="outline" size="sm">
                        <Link
                          href={`/pharaohs/${pharaoh.slug}`}
                          className="hover:text-gold transition-colors"
                        >
                          {pharaoh.name}
                        </Link>
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-3xl font-display text-brown">{text.title}</h1>
                  <p className="text-sandstone text-sm">{text.date}</p>
                  <p className="text-brown-light leading-relaxed max-w-2xl">
                    {text.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-gold/20" />

                {/* Reader */}
                <GlyphDetailsProvider details={glyphDetails}>
                  <TextReader text={text} />
                </GlyphDetailsProvider>
              </div>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-24 space-y-6">
                {/* Text info card */}
                <div className="bg-papyrus/40 border border-gold/20 rounded-xl p-5 space-y-4">
                  <h2 className="font-display text-brown text-lg">
                    About this Text
                  </h2>

                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">
                        Period
                      </dt>
                      <dd className="text-brown-light">
                        {PERIOD_LABELS[text.period]}
                      </dd>
                    </div>

                    <div>
                      <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">
                        Date
                      </dt>
                      <dd className="text-brown-light">{text.date}</dd>
                    </div>

                    {text.object && (
                      <div>
                        <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">
                          Object
                        </dt>
                        <dd className="text-brown-light italic">{text.object}</dd>
                      </div>
                    )}

                    {text.location && (
                      <div>
                        <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">
                          Location
                        </dt>
                        <dd className="text-brown-light">{text.location}</dd>
                      </div>
                    )}

                    {pharaoh && (
                      <div>
                        <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">
                          Pharaoh
                        </dt>
                        <dd>
                          <Link
                            href={`/pharaohs/${pharaoh.slug}`}
                            className="text-gold-dark hover:text-gold transition-colors"
                          >
                            {pharaoh.name}
                          </Link>
                        </dd>
                      </div>
                    )}

                    <div>
                      <dt className="text-xs text-sandstone uppercase tracking-wider font-medium mb-0.5">
                        Length
                      </dt>
                      <dd className="text-brown-light">
                        {text.lines.length} lines · {totalWords} words
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Bibliography */}
                {text.bibliography.length > 0 && (
                  <div className="bg-papyrus/40 border border-gold/20 rounded-xl p-5 space-y-3 overflow-hidden">
                    <h2 className="font-display text-brown text-lg">
                      Bibliography
                    </h2>
                    <ul className="space-y-2">
                      {text.bibliography.map((ref, i) => (
                        <li
                          key={i}
                          className="text-xs text-brown-light leading-relaxed break-words"
                        >
                          {ref}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Back link */}
                <Link
                  href="/texts"
                  className="flex items-center gap-2 text-sm text-sandstone hover:text-gold transition-colors"
                >
                  ← All texts
                </Link>
              </aside>
            </div>
        </Container>
      </main>
    </>
  );
}
