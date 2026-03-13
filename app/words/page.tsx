import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import WordsClient from "./WordsClient";

export const metadata: Metadata = {
  title: "Egyptian Word Dictionary",
  description:
    "Browse 45,000+ Middle Egyptian words with hieroglyphic spelling, Egyptological transliteration, English translation, and part-of-speech tags. Sourced from the Vygus Middle Egyptian Dictionary (2018).",
  alternates: { canonical: "/words" },
  openGraph: {
    title: "Egyptian Word Dictionary — PharaLex",
    description:
      "Browse 45,000+ Middle Egyptian words with hieroglyphic spelling, transliteration, and translation.",
    url: "/words",
  },
  twitter: {
    title: "Egyptian Word Dictionary — PharaLex",
    description:
      "Browse 45,000+ Middle Egyptian words with hieroglyphic spelling, transliteration, and translation.",
  },
};

export default function WordsPage() {
  return (
    <>
      <Header />
      <main className="py-8 sm:py-12">
        <Container size="lg">
          <WordsClient />
        </Container>
      </main>
    </>
  );
}
