import type { Metadata } from "next";
import PharaohsClient from "./PharaohsClient";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Pharaohs of Ancient Egypt",
  description:
    "Explore the rulers of ancient Egypt — from the predynastic era to the Roman period. Browse pharaohs by dynasty, period, or search by name.",
  alternates: { canonical: "/pharaohs" },
  openGraph: {
    title: "Pharaohs of Ancient Egypt - PharaLex",
    description:
      "Explore the rulers of ancient Egypt — from the predynastic era to the Roman period. Browse pharaohs by dynasty, period, or search by name.",
    url: "/pharaohs",
  },
  twitter: {
    title: "Pharaohs of Ancient Egypt - PharaLex",
    description:
      "Explore the rulers of ancient Egypt — from the predynastic era to the Roman period. Browse pharaohs by dynasty, period, or search by name.",
  },
};

export default function PharaohsPage() {
  return <PharaohsClient />;
}
