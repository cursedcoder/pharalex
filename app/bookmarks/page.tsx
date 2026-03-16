import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { BookmarksClient } from "./BookmarksClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Bookmarks",
  description: "Your saved hieroglyphs, words, and pharaohs.",
  alternates: { canonical: "/bookmarks" },
};

export default function BookmarksPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8 sm:py-12">
        <Container size="lg">
          <BookmarksClient />
        </Container>
      </main>
    </div>
  );
}
