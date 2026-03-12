import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PharaLex - Egyptian Hieroglyph Dictionary",
  description:
    "An interactive dictionary of ancient Egyptian hieroglyphs. Explore, search, and learn about the writing system of the pharaohs.",
  keywords: [
    "hieroglyphs",
    "Egyptian",
    "ancient Egypt",
    "dictionary",
    "Gardiner",
    "hieratic",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
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
