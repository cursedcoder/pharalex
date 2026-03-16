import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { GuideNav } from "@/components/GuideNav";
import {
  getGuidePageBySlug,
  getAllGuideSlugs,
  getPrevNextPages,
  getAllGuideSections,
} from "@/lib/guide";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getGuidePageBySlug(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/guide/${slug}` },
    openGraph: {
      title: `${page.title} — PharaLex Guide`,
      description: page.description,
      url: `/guide/${slug}`,
    },
  };
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getGuidePageBySlug(slug);
  if (!page) notFound();

  const sections = getAllGuideSections();
  const section = sections.find((s) => s.id === page.section);
  const { prev, next } = getPrevNextPages(slug);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 sm:py-12">
        <Container size="lg">
          <div className="flex gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="sticky top-24">
                <Link
                  href="/guide"
                  className="flex items-center gap-1.5 text-sm text-sandstone hover:text-gold transition-colors mb-5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  All topics
                </Link>
                <GuideNav currentSlug={slug} />
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-sandstone mb-6 flex-wrap">
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link href="/guide" className="hover:text-gold transition-colors">
                  Guide
                </Link>
                <span>/</span>
                {section && (
                  <>
                    <span className="text-sandstone">{section.title}</span>
                    <span>/</span>
                  </>
                )}
                <span className="text-brown">{page.title}</span>
              </nav>

              {/* Article */}
              <article>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-brown mb-3">
                  {page.title}
                </h1>
                <p className="text-brown-light mb-8 leading-relaxed">
                  {page.description}
                </p>

                <div
                  className="guide-content"
                  dangerouslySetInnerHTML={{ __html: page.content }}
                />
              </article>

              {/* Prev / Next navigation */}
              <div className="mt-12 pt-6 border-t border-sandstone/20 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {prev ? (
                  <Link
                    href={`/guide/${prev.slug}`}
                    className="
                      flex flex-col p-4 rounded-xl border border-sandstone/20
                      hover:border-gold/40 hover:shadow-sm transition-all group
                    "
                  >
                    <span className="text-xs text-sandstone mb-1">Previous</span>
                    <span className="text-sm font-medium text-brown group-hover:text-gold transition-colors">
                      {prev.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
                {next && (
                  <Link
                    href={`/guide/${next.slug}`}
                    className="
                      flex flex-col items-end text-right p-4 rounded-xl
                      border border-sandstone/20 hover:border-gold/40
                      hover:shadow-sm transition-all group
                    "
                  >
                    <span className="text-xs text-sandstone mb-1">Next</span>
                    <span className="text-sm font-medium text-brown group-hover:text-gold transition-colors">
                      {next.title}
                    </span>
                  </Link>
                )}
              </div>

              {/* Mobile nav (below content) */}
              <div className="lg:hidden mt-10 pt-6 border-t border-sandstone/20">
                <h2 className="font-display text-lg font-semibold text-brown mb-4">
                  More topics
                </h2>
                <GuideNav currentSlug={slug} />
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
