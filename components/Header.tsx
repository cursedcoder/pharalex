import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="header-blur sticky top-0 z-40 bg-ivory/95 dark:bg-ivory-dark/95 border-b border-sandstone/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4 overflow-visible">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="font-hieroglyph text-2xl">𓂀</span>
            <span className="font-display text-xl font-semibold text-brown hidden sm:block">
              PharaLex
            </span>
          </Link>

          <div className="flex-1 max-w-xl hidden md:block">
            <SearchBar size="sm" placeholder="Search hieroglyphs..." />
          </div>

          <nav className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/browse"
              className="px-3 py-2 text-sm font-medium text-brown-light hover:text-gold transition-colors"
            >
              Browse
            </Link>
            <Link
              href="/categories"
              className="px-3 py-2 text-sm font-medium text-brown-light hover:text-gold transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/pharaohs"
              className="px-3 py-2 text-sm font-medium text-brown-light hover:text-gold transition-colors"
            >
              Pharaohs
            </Link>
            <Link
              href="/alphabet"
              className="px-3 py-2 text-sm font-medium text-brown-light hover:text-gold transition-colors hidden sm:block"
            >
              Alphabet
            </Link>
            <Link
              href="/search"
              className="px-3 py-2 text-sm font-medium text-brown-light hover:text-gold transition-colors md:hidden"
            >
              Search
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
