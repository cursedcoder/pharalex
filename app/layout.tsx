import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://pharalex.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PharaLex - Egyptian Hieroglyph Dictionary",
    template: "%s | PharaLex",
  },
  description:
    "An interactive dictionary of ancient Egyptian hieroglyphs. Explore, search, and learn about the writing system of the pharaohs.",
  keywords: [
    "hieroglyphs",
    "Egyptian hieroglyphs",
    "ancient Egypt",
    "hieroglyph dictionary",
    "Gardiner sign list",
    "hieratic",
    "Egyptian writing",
    "pharaohs",
  ],
  authors: [{ name: "PharaLex" }],
  creator: "PharaLex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "PharaLex",
    title: "PharaLex - Egyptian Hieroglyph Dictionary",
    description:
      "An interactive dictionary of ancient Egyptian hieroglyphs. Explore, search, and learn about the writing system of the pharaohs.",
  },
  twitter: {
    card: "summary",
    title: "PharaLex - Egyptian Hieroglyph Dictionary",
    description:
      "An interactive dictionary of ancient Egyptian hieroglyphs. Explore, search, and learn about the writing system of the pharaohs.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');if(s==='dark'){document.documentElement.classList.add('dark')}else if(s==='light'){document.documentElement.classList.add('light')}})()`,
          }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${sourceSerif.variable} font-serif antialiased bg-ivory text-brown min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
