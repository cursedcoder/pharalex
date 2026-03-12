import type { Metadata } from "next";
import SearchClient from "./SearchClient";

export const metadata: Metadata = {
  title: "Search Hieroglyphs",
  description:
    "Search ancient Egyptian hieroglyphs by meaning, Gardiner code, transliteration, or category. Find any of the 8,000+ signs in seconds.",
  alternates: { canonical: "/search" },
  openGraph: {
    title: "Search Hieroglyphs - PharaLex",
    description:
      "Search ancient Egyptian hieroglyphs by meaning, Gardiner code, transliteration, or category.",
    url: "/search",
  },
  twitter: {
    title: "Search Hieroglyphs - PharaLex",
    description:
      "Search ancient Egyptian hieroglyphs by meaning, Gardiner code, transliteration, or category.",
  },
};

export default function SearchPage() {
  return <SearchClient />;
}
