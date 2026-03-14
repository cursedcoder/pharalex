import { glyphSvgSrc } from "@/lib/glyph-utils";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { getGlyphByCode, glyphHref } from "@/lib/glyphs";

export const dynamic = "force-static";

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
  mdc: string;
  transName: string;
  signDescription: string;
  pronunciation: string;
  comments: string;
  objectDepicted: string;
}

const ALPHABET: AlphabetEntry[] = [
  {
    codes: ["G1"],
    transliteration: "ꜣ",
    mdc: "A",
    transName: "Aleph",
    signDescription: "Vulture",
    pronunciation: "a",
    comments: "a glottal stop as in German words beginning with a vowel",
    objectDepicted: "Egyptian vulture",
  },
  {
    codes: ["M17"],
    transliteration: "i͗",
    mdc: "i",
    transName: "Yod",
    signDescription: "Reed leaf",
    pronunciation: "y or i",
    comments: "seems to have sometimes the value of y, sometimes (mainly at the beginning of words) that of ꜣ. Thus can be pronounced 'i' or 'ee' as in French 'i'. At the beginning of some divine names it is pronounced 'a', e.g. 'imn' = Amun.",
    objectDepicted: "flowering reed leaf",
  },
  {
    codes: ["M17", "Z4"],
    transliteration: "y",
    mdc: "y",
    transName: "Y",
    signDescription: "Double reed leaf / Dual strokes",
    pronunciation: "y",
    comments: "pronounced 'y'",
    objectDepicted: "two reeds",
  },
  {
    codes: ["D36"],
    transliteration: "ꜥ",
    mdc: "a",
    transName: "Ayin",
    signDescription: "Arm",
    pronunciation: "a",
    comments: "a gutteral sound unknown to English which can be pronounced as a long a",
    objectDepicted: "forearm",
  },
  {
    codes: ["G43", "Z7"],
    transliteration: "w",
    mdc: "w",
    transName: "W",
    signDescription: "Quail chick / Coil of rope",
    pronunciation: "u",
    comments: "'u' or 'oo' as in 'pool'",
    objectDepicted: "(1) quail chick (2) coil of rope",
  },
  {
    codes: ["D58"],
    transliteration: "b",
    mdc: "b",
    transName: "B",
    signDescription: "Foot",
    pronunciation: "b",
    comments: "same as in English",
    objectDepicted: "leg and foot",
  },
  {
    codes: ["Q3"],
    transliteration: "p",
    mdc: "p",
    transName: "P",
    signDescription: "Reed mat or stool",
    pronunciation: "p",
    comments: "same as in English",
    objectDepicted: "stool",
  },
  {
    codes: ["I9"],
    transliteration: "f",
    mdc: "f",
    transName: "F",
    signDescription: "Horned viper",
    pronunciation: "f",
    comments: "same as in English",
    objectDepicted: "horned viper",
  },
  {
    codes: ["G17"],
    transliteration: "m",
    mdc: "m",
    transName: "M",
    signDescription: "Owl",
    pronunciation: "m",
    comments: "same as in English",
    objectDepicted: "(1) owl (2) unknown",
  },
  {
    codes: ["N35"],
    transliteration: "n",
    mdc: "n",
    transName: "N",
    signDescription: "Water",
    pronunciation: "n",
    comments: "same as in English",
    objectDepicted: "water line",
  },
  {
    codes: ["D21"],
    transliteration: "r",
    mdc: "r",
    transName: "R",
    signDescription: "Mouth",
    pronunciation: "r",
    comments: "same as in English",
    objectDepicted: "mouth",
  },
  {
    codes: ["O4"],
    transliteration: "h",
    mdc: "h",
    transName: "H",
    signDescription: "Enclosure",
    pronunciation: "h",
    comments: "same as in English",
    objectDepicted: "reed shelter in fields",
  },
  {
    codes: ["V28"],
    transliteration: "ḥ",
    mdc: "H",
    transName: "Dotted H",
    signDescription: "Rope",
    pronunciation: "h",
    comments: "strongly aspirated or emphatic 'h' sound unknown to English",
    objectDepicted: "wick of twisted flax",
  },
  {
    codes: ["Aa1"],
    transliteration: "ḫ",
    mdc: "x",
    transName: "Third H",
    signDescription: "Placenta",
    pronunciation: "kh",
    comments: "a gutteral sound unknown to English. Like 'ch' in Scottish 'loch'.",
    objectDepicted: "placenta(?)",
  },
  {
    codes: ["F32"],
    transliteration: "ẖ",
    mdc: "X",
    transName: "Fourth H",
    signDescription: "Belly and udder",
    pronunciation: "ch",
    comments: "perhaps like 'ch' in German 'ich'",
    objectDepicted: "animal belly",
  },
  {
    codes: ["O34"],
    transliteration: "z",
    mdc: "z",
    transName: "S (or Z)",
    signDescription: "Door bolt",
    pronunciation: "s",
    comments: "same as in English",
    objectDepicted: "(1) bolt (2) folded cloth",
  },
  {
    codes: ["S29"],
    transliteration: "s",
    mdc: "s",
    transName: "Second S",
    signDescription: "Bolt of cloth",
    pronunciation: "s",
    comments: "same as in English",
    objectDepicted: "(1) bolt (2) folded cloth",
  },
  {
    codes: ["N37"],
    transliteration: "š",
    mdc: "S",
    transName: "Shin",
    signDescription: "Pool",
    pronunciation: "sh",
    comments: "same as in English",
    objectDepicted: "pool",
  },
  {
    codes: ["N29"],
    transliteration: "q",
    mdc: "q",
    transName: "Dotted K (or Q)",
    signDescription: "Hill slope",
    pronunciation: "q",
    comments: "Arabic glottal sound, best represented by the English 'k'",
    objectDepicted: "hill-slope",
  },
  {
    codes: ["V31"],
    transliteration: "k",
    mdc: "k",
    transName: "K",
    signDescription: "Basket",
    pronunciation: "k",
    comments: "same as in English",
    objectDepicted: "basket with handle",
  },
  {
    codes: ["W12"],
    transliteration: "g",
    mdc: "g",
    transName: "G",
    signDescription: "Jar stand",
    pronunciation: "g",
    comments: "same as in English",
    objectDepicted: "stand for jar",
  },
  {
    codes: ["X1"],
    transliteration: "t",
    mdc: "t",
    transName: "T",
    signDescription: "Loaf of bread",
    pronunciation: "t",
    comments: "same as in English",
    objectDepicted: "loaf of bread",
  },
  {
    codes: ["V13"],
    transliteration: "ṯ",
    mdc: "T",
    transName: "Second T",
    signDescription: "Hobble",
    pronunciation: "tch",
    comments: "combination of two letters in English, 'ch'",
    objectDepicted: "tethering rope",
  },
  {
    codes: ["D46"],
    transliteration: "d",
    mdc: "d",
    transName: "D",
    signDescription: "Hand",
    pronunciation: "d",
    comments: "same as in English",
    objectDepicted: "hand",
  },
  {
    codes: ["I10"],
    transliteration: "ḏ",
    mdc: "D",
    transName: "Second D",
    signDescription: "Cobra",
    pronunciation: "dj",
    comments: "same as 'j' in English",
    objectDepicted: "snake",
  },
];

export default async function AlphabetPage() {
  const entries = await Promise.all(
    ALPHABET.map(async (entry) => ({
      ...entry,
      glyphs: await Promise.all(
        entry.codes.map(async (code) => ({
          code,
          glyph: await getGlyphByCode(code),
        }))
      ),
    }))
  );

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
              <span className="font-display italic text-brown">i͗</span>{" "}
              (i with a stroke), with the legacy notation{" "}
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
                  <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-sandstone w-24">
                    MdC
                  </th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-sandstone w-28">
                    Transliteration
                  </th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-sandstone w-32">
                    Pronunciation
                  </th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-sandstone w-40">
                    Object Depicted
                  </th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-sandstone">
                    Comments
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
                                src={glyphSvgSrc(code)}
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

                    {/* MdC */}
                    <td className="px-5 py-4">
                      <span className="font-mono text-sm font-medium text-brown">
                        {entry.mdc}
                      </span>
                    </td>

                    {/* Transliteration */}
                    <td className="px-5 py-4">
                      <span className="font-display text-2xl font-semibold text-brown italic">
                        {entry.transliteration}
                      </span>
                      {entry.transliteration === "i͗" && (
                        <span className="ml-1.5 text-xs text-sandstone font-sans not-italic align-top">
                          (j)
                        </span>
                      )}
                    </td>

                    {/* Pronunciation */}
                    <td className="px-5 py-4">
                      <span className="text-sm font-medium text-brown-light">
                        {entry.pronunciation}
                      </span>
                    </td>

                    {/* Object Depicted */}
                    <td className="px-5 py-4">
                      <span className="text-sm text-brown-light">
                        {entry.objectDepicted}
                      </span>
                    </td>

                    {/* Comments */}
                    <td className="px-5 py-4">
                      <span className="text-sm text-sandstone">
                        {entry.comments}
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
                          src={glyphSvgSrc(code)}
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
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-display text-2xl font-semibold text-brown italic leading-none">
                      {entry.transliteration}
                    </span>
                    {entry.transliteration === "i͗" && (
                      <span className="text-xs text-sandstone font-sans not-italic">
                        (j)
                      </span>
                    )}
                    <span className="text-sm font-medium text-brown-light">
                      Pronunciation: {entry.pronunciation}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-brown-light mb-1">
                    {entry.objectDepicted}
                  </p>
                  <p className="text-xs text-sandstone leading-relaxed">
                    {entry.comments}
                  </p>
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
