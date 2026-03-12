import Link from "next/link";
import type { Category } from "@/lib/types";

interface CategoryNavProps {
  categories: Category[];
  activeCategory?: string;
  layout?: "horizontal" | "vertical" | "grid";
}

export function CategoryNav({
  categories,
  activeCategory,
  layout = "horizontal",
}: CategoryNavProps) {
  const layoutClasses = {
    horizontal: "flex flex-wrap gap-2",
    vertical: "flex flex-col gap-1",
    grid: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2",
  };

  return (
    <nav className={layoutClasses[layout]}>
      {categories.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className={`
              group flex items-center gap-2 px-3 py-2 rounded-lg
              border transition-all duration-200
              ${
                isActive
                  ? "bg-gold/20 border-gold text-brown"
                  : "bg-ivory-dark/50 border-sandstone/20 hover:border-gold/40 hover:bg-gold/5"
              }
            `}
          >
            <span
              className={`
                font-display font-semibold
                ${isActive ? "text-gold-dark" : "text-brown group-hover:text-gold-dark"}
              `}
            >
              {category.id}
            </span>
            {layout !== "horizontal" && (
              <>
                <span className="text-sm text-brown-light flex-1 truncate">
                  {category.name}
                </span>
                <span className="text-xs text-sandstone">
                  {category.glyphCount}
                </span>
              </>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
