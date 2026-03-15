import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="py-5 border-t border-sandstone/20 mt-8">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sandstone">
          <div className="flex items-center gap-2">
            <span className="font-hieroglyph text-lg">𓂀</span>
            <span>PharaLex</span>
          </div>
          <p>
            Community project — data may contain inaccuracies.{" "}
            <a
              href="https://github.com/cursedcoder/pharalex/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-dark"
            >
              Report issues
            </a>
          </p>
          <Link href="/about" className="hover:text-gold transition-colors">
            About
          </Link>
        </div>
      </Container>
    </footer>
  );
}
