import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="header-blur sticky top-0 z-40 bg-ivory/95 dark:bg-ivory-dark/95 border-b border-sandstone/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4 overflow-visible min-w-0">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="font-hieroglyph text-2xl">𓂀</span>
            <span className="font-display text-xl font-semibold text-brown hidden sm:block">
              PharaLex
            </span>
          </Link>

          <div className="flex-1 max-w-xl hidden md:block">
            <SearchBar size="sm" placeholder="Search hieroglyphs..." />
          </div>

          <nav className="flex items-center gap-0.5 sm:gap-1 shrink-0">
            <Link
              href="/browse"
              className="px-2 sm:px-3 py-2 text-sm font-medium text-brown-light hover:text-gold transition-colors hidden sm:block"
            >
              Browse
            </Link>
            <Link
              href="/categories"
              className="px-2 sm:px-3 py-2 text-sm font-medium text-brown-light hover:text-gold transition-colors hidden sm:block"
            >
              Categories
            </Link>
            <Link
              href="/pharaohs"
              className="px-2 sm:px-3 py-2 text-sm font-medium text-brown-light hover:text-gold transition-colors hidden sm:block"
            >
              Pharaohs
            </Link>
            <Link
              href="/texts"
              className="px-2 sm:px-3 py-2 text-sm font-medium text-brown-light hover:text-gold transition-colors hidden sm:block"
            >
              Texts
            </Link>
            <Link
              href="/words"
              className="px-2 sm:px-3 py-2 text-sm font-medium text-brown-light hover:text-gold transition-colors hidden sm:block"
            >
              Words
            </Link>
            <Link
              href="/alphabet"
              className="px-2 sm:px-3 py-2 text-sm font-medium text-brown-light hover:text-gold transition-colors hidden lg:block"
            >
              Alphabet
            </Link>
            <Link
              href="/search"
              className="px-2 py-2 text-sm font-medium text-brown-light hover:text-gold transition-colors md:hidden"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </Link>
            <Link
              href="/browse"
              className="px-2 py-2 text-sm font-medium text-brown-light hover:text-gold transition-colors sm:hidden"
              aria-label="Browse"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </Link>
            <a
              href="https://github.com/cursedcoder/pharalex"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              className="p-2 rounded-lg text-brown-light hover:text-gold hover:bg-gold/10 transition-colors"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
