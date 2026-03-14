import type { Metadata } from "next";
import { getAllTexts } from "@/lib/texts";
import { getAllPeriods, getPharaohBySlug } from "@/lib/pharaohs";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import TextsClient from "./TextsClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Hieroglyphic Texts",
  description:
    "Read ancient Egyptian hieroglyphic inscriptions with interactive sign-level transliteration and translation. Study royal inscriptions, pyramid texts, and canonical literature.",
  alternates: { canonical: "/texts" },
  openGraph: {
    title: "Hieroglyphic Texts",
    description:
      "Read ancient Egyptian hieroglyphic inscriptions with interactive sign-level transliteration and translation.",
    url: "/texts",
  },
  twitter: {
    title: "Hieroglyphic Texts",
    description:
      "Read ancient Egyptian hieroglyphic inscriptions with interactive sign-level transliteration and translation.",
  },
};

export default function TextsPage() {
  const allTexts = getAllTexts();
  const periods = getAllPeriods();

  // Enrich texts with pharaoh names for display
  const enrichedTexts = allTexts.map((text) => ({
    ...text,
    pharaohName: text.pharaohSlug
      ? getPharaohBySlug(text.pharaohSlug)?.name
      : undefined,
  }));

  const periodsInUse = Array.from(new Set(allTexts.map((t) => t.period)));
  const availablePeriods = periods.filter((p) => periodsInUse.includes(p.id));

  return (
    <>
      <Header />
      <main className="py-8 sm:py-12">
        <Container size="lg">
          <TextsClient texts={enrichedTexts} availablePeriods={availablePeriods} />
        </Container>
      </main>
    </>
  );
}