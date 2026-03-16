import Link from "next/link";
import { getAllGuideSections, getGuidePagesBySection } from "@/lib/guide";

interface GuideNavProps {
  currentSlug?: string;
}

export function GuideNav({ currentSlug }: GuideNavProps) {
  const sections = getAllGuideSections();

  return (
    <nav className="space-y-5" aria-label="Guide navigation">
      {sections.map((section) => {
        const pages = getGuidePagesBySection(section.id);
        return (
          <div key={section.id}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-sandstone mb-2">
              {section.title}
            </h3>
            <ul className="space-y-0.5">
              {pages.map((page) => {
                const isActive = page.slug === currentSlug;
                return (
                  <li key={page.slug}>
                    <Link
                      href={`/guide/${page.slug}`}
                      className={`
                        block px-3 py-1.5 text-sm rounded-lg transition-colors
                        ${isActive
                          ? "bg-gold/15 text-gold-dark font-medium"
                          : "text-brown-light hover:text-gold hover:bg-gold/8"
                        }
                      `}
                    >
                      {page.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
