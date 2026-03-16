import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { getAllGuideSections, getGuidePagesBySection } from "@/lib/guide";

export const dynamic = "force-static";

export const metadata = {
  title: "Guide",
  description:
    "Learn about Egyptian hieroglyphs — how the writing system works, the Gardiner sign list, transliteration, and how to use PharaLex.",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "Guide — PharaLex",
    description:
      "Learn about Egyptian hieroglyphs — how the writing system works, the Gardiner sign list, transliteration, and how to use PharaLex.",
    url: "/guide",
  },
};

export default function GuidePage() {
  const sections = getAllGuideSections();

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
            <span className="text-brown">Guide</span>
          </nav>

          {/* Hero */}
          <div className="mb-10">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-brown mb-3">
              Guide to Egyptian Hieroglyphs
            </h1>
            <p className="text-brown-light leading-relaxed max-w-2xl">
              A practical introduction to the ancient Egyptian writing system and
              how to use PharaLex to explore it. Start with the basics or jump to
              any topic below.
            </p>
          </div>

          {/* Sections grid */}
          <div className="space-y-8">
            {sections.map((section) => {
              const pages = getGuidePagesBySection(section.id);
              return (
                <section key={section.id}>
                  <h2 className="font-display text-xl font-semibold text-brown mb-4">
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {pages.map((page) => (
                      <Link
                        key={page.slug}
                        href={`/guide/${page.slug}`}
                        className="
                          bg-ivory-dark/50 border border-sandstone/20 rounded-xl
                          p-5 hover:border-gold/40 hover:shadow-sm transition-all group
                        "
                      >
                        <h3 className="font-display text-base font-semibold text-brown group-hover:text-gold transition-colors mb-1.5">
                          {page.title}
                        </h3>
                        <p className="text-xs text-sandstone leading-relaxed">
                          {page.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </Container>
      </main>
    </div>
  );
}
