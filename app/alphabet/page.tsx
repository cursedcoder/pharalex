import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { getGlyphByCode, glyphHref } from "@/lib/glyphs";

export const metadata = {
  title: "Hieroglyphic Alphabet - PharaLex",
  description:
    "The 24 ancient Egyptian uniliteral hieroglyphs — signs that each represent a single consonant sound, forming the backbone of the hieroglyphic writing system.",
  alternates: { canonical: "/alphabet" },
  openGraph: {
    title: "Hieroglyphic Alphabet - PharaLex",
    description:
      "The 24 ancient Egyptian uniliteral hieroglyphs — signs that each represent a single consonant sound.",
    url: "/alphabet",
  },
  twitter: {
    title: "Hieroglyphic Alphabet - PharaLex",
    description:
      "The 24 ancient Egyptian uniliteral hieroglyphs — signs that each represent a single consonant sound.",
  },
};

interface AlphabetEntry {
  codes: string[];
  transliteration: string;
  transName: string;
  signDescription: string;
}

const ALPHABET: AlphabetEntry[] = [
  {
    codes: ["G1"],
    transliteration: "ꜣ",
    transName: "Aleph",
    signDescription: "Vulture",
  },
  {
    codes: ["M17"],
    transliteration: "ꞽ",
    transName: "Yod",
    signDescription: "Reed leaf",
  },
  {
    codes: ["M17", "Z4"],
    transliteration: "y",
    transName: "Y",
    signDescription: "Double reed leaf / Dual strokes",
  },
  {
    codes: ["D36"],
    transliteration: "ꜥ",
    transName: "Ayin",
    signDescription: "Arm",
  },
  {
    codes: ["G43", "Z7"],
    transliteration: "w",
    transName: "W",
    signDescription: "Quail chick / Coil of rope",
  },
  {
    codes: ["D58"],
    transliteration: "b",
    transName: "B",
    signDescription: "Foot",
  },
  {
    codes: ["Q3"],
    transliteration: "p",
    transName: "P",
    signDescription: "Reed mat or stool",
  },
  {
    codes: ["I9"],
    transliteration: "f",
    transName: "F",
    signDescription: "Horned viper",
  },
  {
    codes: ["G17"],
    transliteration: "m",
    transName: "M",
    signDescription: "Owl",
  },
  {
    codes: ["N35"],
    transliteration: "n",
    transName: "N",
    signDescription: "Water",
  },
  {
    codes: ["D21"],
    transliteration: "r",
    transName: "R",
    signDescription: "Mouth",
  },
  {
    codes: ["O4"],
    transliteration: "h",
    transName: "H",
    signDescription: "Enclosure",
  },
  {
    codes: ["V28"],
    transliteration: "ḥ",
    transName: "Dotted H",
    signDescription: "Rope",
  },
  {
    codes: ["Aa1"],
    transliteration: "ḫ",
    transName: "Third H",
    signDescription: "Placenta",
  },
  {
    codes: ["F32"],
    transliteration: "ẖ",
    transName: "Fourth H",
    signDescription: "Belly and udder",
  },
  {
    codes: ["O34"],
    transliteration: "z",
    transName: "S (or Z)",
    signDescription: "Door bolt",
  },
  {
    codes: ["S29"],
    transliteration: "s",
    transName: "Second S",
    signDescription: "Bolt of cloth",
  },
  {
    codes: ["N37"],
    transliteration: "š",
    transName: "Shin",
    signDescription: "Pool",
  },
  {
    codes: ["N29"],
    transliteration: "q",
    transName: "Dotted K (or Q)",
    signDescription: "Hill slope",
  },
  {
    codes: ["V31"],
    transliteration: "k",
    transName: "K",
    signDescription: "Basket",
  },
  {
    codes: ["W12"],
    transliteration: "g",
    transName: "G",
    signDescription: "Jar stand",
  },
  {
    codes: ["X1"],
    transliteration: "t",
    transName: "T",
    signDescription: "Loaf of bread",
  },
  {
    codes: ["V13"],
    transliteration: "ṯ",
    transName: "Second T",
    signDescription: "Hobble",
  },
  {
    codes: ["D46"],
    transliteration: "d",
    transName: "D",
    signDescription: "Hand",
  },
  {
    codes: ["I10"],
    transliteration: "ḏ",
    transName: "Second D",
    signDescription: "Cobra",
  },
];

export default function AlphabetPage() {
  const entries = ALPHABET.map((entry) => ({
    ...entry,
    glyphs: entry.codes.map((code) => ({
      code,
      glyph: getGlyphByCode(code),
    })),
  }));

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 sm:py-12">
        <Container size="xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-sandstone mb-8">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-brown">Alphabet</span>
          </nav>

          {/* Hero */}
          <div className="mb-10">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-brown mb-4">
              Hieroglyphic Alphabet
            </h1>
            <p className="text-brown-light leading-relaxed text-base sm:text-lg">
              Ancient Egyptian writing uses a set of{" "}
              <span className="text-brown font-medium">24 uniliteral signs</span>
              {" "}— hieroglyphs that each represent a single consonant. Together
              they form the phonetic backbone of the writing system, though they
              were always used alongside logograms and determinatives rather than
              as a standalone alphabet.
            </p>
          </div>

          {/* Note box */}
          <div className="mb-10 p-4 sm:p-5 rounded-xl bg-gold/8 border border-gold/25">
            <p className="text-sm text-brown-light leading-relaxed">
              <span className="font-semibold text-gold-dark">Note:</span> Like
              most Semitic writing systems, Egyptian hieroglyphs record
              consonants only — vowels were not written. Signs are listed here in
              the conventional Egyptological dictionary order. Transliteration
              follows the{" "}
              <span className="font-medium text-brown">Leyden Unified Transliteration</span>{" "}
              standard; the yod sign (M17) is shown as{" "}
              <span className="font-display italic text-brown">ꞽ</span>{" "}
              (U+A7BD), with the legacy notation{" "}
              <span className="font-display italic text-brown">j</span>{" "}
              in parentheses.
            </p>
          </div>

          {/* Table — desktop */}
          <div className="hidden sm:block rounded-2xl overflow-hidden border border-sandstone/20 shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brown/8 border-b border-sandstone/20">
                  <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-sandstone w-48">
                    Sign(s)
                  </th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-sandstone w-28">
                    Transliteration
                  </th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-sandstone w-40">
                    Letter name
                  </th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-sandstone">
                    Sign description
                  </th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, i) => (
                  <tr
                    key={entry.transliteration + i}
                    className="
                      border-b border-sandstone/10 last:border-0
                      bg-ivory/60 hover:bg-papyrus/60
                      transition-colors duration-150 group
                    "
                  >
                    {/* Sign column */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        {entry.glyphs.map(({ code, glyph }) => (
                          <Link
                            key={code}
                            href={glyph ? glyphHref(glyph.code) : "#"}
                            title={glyph?.description ?? code}
                            className="
                              flex flex-col items-center gap-1 shrink-0
                              group/glyph
                            "
                          >
                            <div
                              className="
                                w-14 h-14 flex items-center justify-center
                                rounded-xl border bg-papyrus/60
                                border-sandstone/20
                                group-hover/glyph:border-gold/50
                                group-hover/glyph:bg-gold/8
                                transition-all duration-150 overflow-hidden p-1.5
                              "
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={`/glyphs/${code}.svg`}
                                alt={code}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="text-[10px] font-medium text-sandstone group-hover/glyph:text-gold-dark transition-colors">
                              {code}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </td>

                    {/* Transliteration */}
                    <td className="px-5 py-4">
                      <span className="font-display text-2xl font-semibold text-brown italic">
                        {entry.transliteration}
                      </span>
                      {entry.transliteration === "ꞽ" && (
                        <span className="ml-1.5 text-xs text-sandstone font-sans not-italic align-top">
                          (j)
                        </span>
                      )}
                    </td>

                    {/* Letter name */}
                    <td className="px-5 py-4">
                      <span className="text-sm font-medium text-brown-light">
                        {entry.transName}
                      </span>
                    </td>

                    {/* Sign description */}
                    <td className="px-5 py-4">
                      <span className="text-sm text-sandstone">
                        {entry.signDescription}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards — mobile */}
          <div className="sm:hidden space-y-3">
            {entries.map((entry, i) => (
              <div
                key={entry.transliteration + i}
                className="
                  rounded-xl border border-sandstone/20
                  bg-ivory-dark/40 p-4
                  flex items-start gap-4
                "
              >
                {/* Glyphs */}
                <div className="flex gap-2 shrink-0">
                  {entry.glyphs.map(({ code, glyph }) => (
                    <Link
                      key={code}
                      href={glyph ? glyphHref(glyph.code) : "#"}
                      title={code}
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="
                          w-12 h-12 flex items-center justify-center
                          rounded-lg border border-sandstone/20
                          bg-papyrus/60 overflow-hidden p-1.5
                        "
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/glyphs/${code}.svg`}
                          alt={code}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[9px] font-medium text-sandstone">
                        {code}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Text info */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-baseline gap-3 mb-0.5">
                    <span className="font-display text-2xl font-semibold text-brown italic leading-none">
                      {entry.transliteration}
                    </span>
                    {entry.transliteration === "ꞽ" && (
                      <span className="text-xs text-sandstone font-sans not-italic">
                        (j)
                      </span>
                    )}
                    <span className="text-sm font-medium text-brown-light">
                      {entry.transName}
                    </span>
                  </div>
                  <p className="text-sm text-sandstone">{entry.signDescription}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="mt-10 text-xs text-sandstone/60 max-w-lg">
            Signs link to their full glyph entries. Some letters have two
            alternate signs — either could be used in ancient texts.
          </p>
        </Container>
      </main>
    </div>
  );
}
