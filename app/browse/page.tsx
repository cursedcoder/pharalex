import type { Metadata } from "next";
import BrowseClient from "./BrowseClient";
import { getAllGlyphs, getAllCategories } from "@/lib/glyphs";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Browse Hieroglyphs",
  description:
    "Browse all ancient Egyptian hieroglyphs in the collection. Filter by Gardiner category, type (logogram, phonogram, determinative), or shape tag.",
  alternates: { canonical: "/browse" },
  openGraph: {
    title: "Browse Hieroglyphs",
    description:
      "Browse all ancient Egyptian hieroglyphs in the collection. Filter by Gardiner category, type, or shape tag.",
    url: "/browse",
  },
  twitter: {
    title: "Browse Hieroglyphs",
    description:
      "Browse all ancient Egyptian hieroglyphs in the collection. Filter by Gardiner category, type, or shape tag.",
  },
};

export default async function BrowsePage() {
  const [allGlyphs, categories] = await Promise.all([
    getAllGlyphs(),
    getAllCategories(),
  ]);

  return <BrowseClient allGlyphs={allGlyphs} categories={categories} />;
}
