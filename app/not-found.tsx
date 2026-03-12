import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16 sm:py-24">
        <Container size="sm">
          <div className="text-center">
            <div className="font-hieroglyph text-8xl text-sandstone/30 mb-6">
              𓂝𓏤𓏛
            </div>

            <h1 className="font-display text-4xl font-bold text-brown mb-4">
              Page Not Found
            </h1>

            <p className="text-brown-light mb-8 max-w-md mx-auto">
              The hieroglyph you&apos;re looking for seems to have been lost in
              the sands of time. Perhaps try a different path.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="
                  px-6 py-3 bg-gold text-brown font-medium rounded-lg
                  hover:bg-gold-light transition-colors
                "
              >
                Return Home
              </Link>
              <Link
                href="/browse"
                className="
                  px-6 py-3 border border-sandstone/40 text-brown font-medium rounded-lg
                  hover:border-gold hover:text-gold transition-colors
                "
              >
                Browse All Glyphs
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
