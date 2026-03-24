/**
 * Royal names (titulary) for Egyptian pharaohs.
 *
 * Auto-generated from pharaoh.se data (CC BY 4.0).
 * Attribution: Lundström, Peter. (2024). Available at: https://pharaoh.se
 *
 * Generated: 2026-03-16
 * Pharaohs: 205, Name entries: 665
 */

import type { RoyalNames } from "@/lib/types";

export const ROYAL_NAMES: Record<string, RoyalNames> = {
  seka: {
    nomen: {
      codes: ["S29", "D28"],
      mdc: "s-kA",
      transliteration: "s-kꜢ",
    },
  },

  khayu: {
    nomen: {
      codes: ["L6", "E9"],
      mdc: "L6-E9",
      transliteration: "ḫꜤ-iw",
    },
  },

  tiu: {
    nomen: {
      codes: ["X1", "M17", "G43"],
      mdc: "t-i-w",
      transliteration: "t-i͗-w",
    },
  },

  tjesh: {
    nomen: {
      codes: ["V13", "N37"],
      mdc: "T:N37",
      transliteration: "ṯš",
    },
  },

  neheb: {
    nomen: {
      codes: ["N35", "U13"],
      mdc: "n:U13",
      transliteration: "n-hb",
    },
  },

  wenegbu: {
    nomen: {
      codes: ["M13", "K2"],
      mdc: "wAD-K2",
      transliteration: "wng-bw / wꜢḏ-bw",
    },
  },

  mekh: {
    nomen: {
      codes: ["G17", "F32"],
      mdc: "m:X",
      transliteration: "m-ẖ / i͗mi͗-ẖt",
    },
  },

  narmer: {
    horus: {
      codes: ["K24", "U23"],
      mdc: "K24-U23",
      transliteration: "nꜤr-mr",
      translation: "Fierce catfish of Horus",
      sources: [
        { text: "Narmer Palette (JE32169)" },
        { text: "Petrie, Royal Tombs, II, plate II (3)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 36-37, x+4:H1" },
      ],
      variants: [
        {
          codes: ["K24", "U23", "G47"],
          mdc: "K24-U23-G47",
          transliteration: "nꜤr-mr-ṯꜢi͗",
          translation: "Manly catfish of Horus",
          sources: [
            { text: "Petrie, Tarkhan, I, plate II (2)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 36-37, x+4:H4" },
          ],
        },
        {
          codes: ["K24"],
          mdc: "K24",
          transliteration: "nꜤr",
          translation: "Catfish of Horus",
        },
      ],
    },
    nebty: {
      codes: ["Y5"],
      mdc: "mn",
      transliteration: "mn",
    },
    prenomen: {
      codes: ["Y5", "N35", "M17"],
      mdc: "mn:n-i",
      transliteration: "mni͗",
      translation: "He who endures",
      sources: [
        { text: "Abydos Canon no. 1" },
        { text: "Mariette, Abydos, I, plate 43 (1)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 38-39, 1:E1" },
      ],
      variants: [
        {
          codes: ["Y5", "N35", "M18"],
          mdc: "mn:n-ii",
          transliteration: "mny",
          translation: "He who endures",
        },
      ],
    },
  },

  aha: {
    horus: {
      codes: ["D34"],
      mdc: "D34",
      transliteration: "ꜤḥꜢ",
      translation: "Horus the fighter",
    },
    prenomen: {
      codes: ["X1", "X1", "M17"],
      mdc: "t-t-i",
      transliteration: "tti͗",
      translation: "of true greatness",
      sources: [
        { text: "Abydos Canon no. 2" },
        { text: "Mariette, Abydos, I, plate 43 (2)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 38-39, 2:E1" },
      ],
      variants: [
        {
          codes: ["M17", "X1", "Z4"],
          mdc: "i-t:y",
          transliteration: "i͗ty",
        },
      ],
    },
  },

  djer: {
    horus: {
      codes: ["M37"],
      mdc: "M37",
      transliteration: "ḏr",
      translation: "Defender of Horus",
    },
    golden: {
      codes: ["N35", "S12"],
      mdc: "n:nbw",
      transliteration: "ni͗-nbw",
      translation: "He who belongs to the Golden One",
    },
    prenomen: {
      codes: ["M17", "X1", "U33"],
      mdc: "i-t-ti",
      transliteration: "i͗tti͗",
      translation: "The ruler",
      sources: [
        { text: "Abydos Canon no. 3" },
        { text: "Mariette, Abydos, I, plate 43 (3)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 38-39, 3:E" },
      ],
      variants: [
        {
          codes: ["M17", "U33", "X1"],
          mdc: "i-ti-t",
          transliteration: "i͗tti͗",
          translation: "The ruler has arrived",
          sources: [
            { text: "Cairo fragment 1 recto" },
            { text: "Wilkinson, Royal Annals of Ancient Egypt" },
          ],
        },
        {
          codes: ["M17", "X1"],
          mdc: "i-t-//",
          transliteration: "i͗t...",
        },
      ],
    },
  },

  djet: {
    horus: {
      codes: ["I10"],
      mdc: "I10",
      transliteration: "ḏt",
      translation: "Serpent of Horus",
      sources: [
        { text: "Petrie, Royal Tombs, I, plate XVII, 125-127" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 38-39, 4:H" },
      ],
      variants: [
        {
          codes: ["M13", "I10"],
          mdc: "M13-I10",
          transliteration: "wꜢḏ",
          translation: "Reinvigorated serpent of Horus",
        },
      ],
    },
    prenomen: {
      codes: ["M17", "X1", "G1"],
      mdc: "i-t-A",
      transliteration: "i͗tꜢ",
      sources: [
        { text: "Abydos Canon no. 4" },
        { text: "Mariette, Abydos, I, plate 43 (4)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 38-39, 4:E1" },
      ],
      variants: [
        {
          codes: [],
          mdc: "[jt]-tjw",
          transliteration: "i͗ty",
        },
      ],
    },
  },

  den: {
    horus: {
      codes: ["D46", "N35"],
      mdc: "d:n",
      transliteration: "d-n",
      translation: "The slaughterer",
    },
    golden: {
      codes: ["I12", "S12", "V9"],
      mdc: "I12-nbw:V9",
      transliteration: "i͗Ꜥr.t-nbw-šn",
      translation: "Golden cobra",
    },
    prenomen: {
      codes: ["N25", "N25", "X1"],
      mdc: "N25:N25-t",
      transliteration: "ḫꜢsti͗",
      translation: "He of the Two Deserts",
      sources: [
        { text: "Petrie, Royal Tombs, I, plate V (8-9, 11-12)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 38-39, 5:N" },
      ],
      variants: [
        {
          codes: ["N24", "N24"],
          mdc: "N24-N24",
          transliteration: "spꜢti͗",
          translation: "He of the great districts",
          sources: [
            { text: "Abydos Canon no. 5" },
            { text: "Mariette, Abydos, I, plate 43 (5)" },
            { text: "The signs for desert (N25) were likely misread during the NK as districts (N24)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 38-39, 5:1" },
          ],
        },
        {
          codes: ["Aa8", "X1", "Z4"],
          mdc: "qn:t*y",
          transliteration: "ḳnti͗",
        },
      ],
    },
  },

  adjib: {
    horus: {
      codes: ["V27", "F34"],
      mdc: "V27:ib",
      transliteration: "Ꜥḏ-i͗b",
      translation: "Brave of heart",
    },
    prenomen: {
      codes: ["U7", "D21", "N42", "Q3"],
      mdc: "U7-r:N42*p",
      transliteration: "mr(i͗)-biꜢ-p",
      translation: "Beloved one of the iron throne",
      sources: [
        { text: "Abydos Canon no. 6" },
        { text: "Mariette, Abydos, I, plate 43 (6)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 40-41, 6:1" },
      ],
      variants: [
        {
          codes: ["U7", "D21", "Z4", "N42", "Q3", "N35"],
          mdc: "U7:r-y-N42*p:n",
          transliteration: "mr(i͗)-biꜢ-pn",
          translation: "Beloved one of the iron throne",
          sources: [
            { text: "Saqqara Canon no. 58" },
            { text: "Meyer, Ägyptische Chronologie, plate 1 (1)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 40-41, 6:2" },
          ],
        },
        {
          codes: ["U7", "D21", "U17", "Q3", "N35"],
          mdc: "U7:r-U17-p:n",
          transliteration: "mri͗-grg-i͗pn",
          translation: "Beloved one of the iron throne",
        },
      ],
    },
  },

  semerkhet: {
    horus: {
      codes: ["U23", "S29", "F32"],
      mdc: "U23-s-X",
      transliteration: "s-mr-ḥt",
      translation: "Companion of the Gods",
    },
    prenomen: {
      codes: ["A469"],
      mdc: "A469",
      transliteration: "i͗ry",
      translation: "The Dual king who belongs to the Two Ladies",
      sources: [
        { text: "Ivory label British Museum EA 32668" },
        { text: "Petrie, Royal Tombs, I, plate XII (1)" },
        { text: "The archaic sign (A469) is similar to A17 and was likely confused by the NK scribes." },
      ],
      variants: [
        {
          codes: ["A23D"],
          mdc: "A23D",
          transliteration: "smsw",
          translation: "The eldest",
          sources: [
            { text: "Abydos Canon no. 7" },
            { text: "Mariette, Abydos, I, plate 43 (7)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 40-41, 7:2" },
          ],
        },
        {
          codes: ["S29", "G17", "S29", "G17"],
          mdc: "s-m-s-m",
          transliteration: "smsm",
          translation: "The elder (of Horus)",
        },
      ],
    },
  },

  qaa: {
    horus: {
      codes: ["N29", "D36"],
      mdc: "q:a",
      transliteration: "ḳꜢi͗-Ꜥ",
      translation: "Raised arm of Horus",
    },
    nebty: {
      codes: ["T22", "D20", "N35"],
      mdc: "T22*D20:n",
      transliteration: "sn-nbti͗",
      translation: "The one whom the Two Ladies have kissed",
      sources: [
        { text: "Petrie, Royal Tombs, I, plate XII (6)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 40-41, 8:N3" },
      ],
    },
    prenomen: {
      codes: ["N29", "D36"],
      mdc: "q:a",
      transliteration: "ḳꜢi͗-Ꜥ",
      translation: "The Dual king with raised arm of the Two Ladies",
      sources: [
        { text: "Petrie, Royal Tombs, I, plate VIII-IX" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 40-41, 8:N1" },
      ],
      variants: [
        {
          codes: ["N29", "D58", "V28"],
          mdc: "q-b-H",
          transliteration: "ḳbḥ",
          translation: "He from the north",
          sources: [
            { text: "Abydos Canon no. 8" },
            { text: "Mariette, Abydos, I, plate 43 (8)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 40-41, 8:1" },
          ],
        },
        {
          codes: ["N29", "D58", "V28", "G43", "W15"],
          mdc: "q-b-H-w-W15",
          transliteration: "ḳbhw",
          translation: "He from the cool north",
          sources: [
            { text: "Saqqara Canon no. 57" },
            { text: "Meyer, Ägyptische Chronologie, plate 1 (2)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 40-41, 8:2" },
          ],
        },
        {
          codes: ["D58", "V28"],
          mdc: "//-b-H",
          transliteration: "..bḥ",
        },
      ],
    },
  },

  hotepsekhemwy: {
    horus: {
      codes: ["R4", "S42", "S42"],
      mdc: "Htp-S42-S42",
      transliteration: "ḥtp-sḫm.wi͗",
      translation: "Horus, reconciliation of the two powers",
    },
    nebty: {
      codes: ["R4"],
      mdc: "Htp",
      transliteration: "ḥtp",
      translation: "The Two Ladies are satisfied",
    },
    prenomen: {
      codes: ["D58", "U28", "G43", "P11"],
      mdc: "b-DA-w-P11",
      transliteration: "bḏꜢw",
      translation: "The smelter",
      sources: [
        { text: "Abydos Canon no. 9" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 42-43, 1:E2" },
      ],
      variants: [
        {
          codes: ["D58", "U28", "U30", "G43"],
          mdc: "b-DA-U30-w",
          transliteration: "bḏtꜢw",
          sources: [
            { text: "Giza writing board from Mastaba G 1011 C, Egyptian Museum, Cairo JE 37734" },
            { text: "Brovarski, Two Old Kingdom writing boards from Giza in ASAE 71, plate 1" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 42-43, 2:E1" },
          ],
        },
        {
          codes: ["R8", "G30"],
          mdc: "nTr-G30",
          transliteration: "bꜢw-nṯr",
          translation: "Divine soul",
          sources: [
            { text: "Saqqara Canon no. 56" },
            { text: "Can also be read as Netjeribau" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 42-43, 1:1" },
          ],
        },
        {
          codes: ["G30", "R4", "Z2"],
          mdc: "nTr#-G30-R4:Z2",
          transliteration: "..-bꜢ.w-ntr.w",
          translation: "Divine souls",
        },
      ],
    },
  },

  nebra: {
    horus: {
      codes: ["V30", "N5"],
      mdc: "nb:ra",
      transliteration: "nb-rꜤ",
      translation: "Lord of the sun of Horus",
      sources: [
        { text: "Emery, Archaic Egypt, p.93, fig. 56" },
        { text: "Winkler, Rock-drawings of Southern Upper Egypt, I, plate 11 (4)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 42-43, 2:H2" },
      ],
      variants: [
        {
          codes: ["N5", "V30"],
          mdc: "ra:nb",
          transliteration: "rꜤ-nb",
          translation: "Ra is my lord",
        },
      ],
    },
    prenomen: {
      codes: ["D28", "D52", "D52", "D52"],
      mdc: "kA-D52:D52:D52",
      transliteration: "kꜢ-kꜢw",
      translation: "Bull of bulls",
      sources: [
        { text: "Abydos Canon no. 10" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 42-43, 2:1" },
      ],
      variants: [
        {
          codes: ["S12", "F35"],
          mdc: "nbw:nfr",
          transliteration: "nbw-nfr",
        },
      ],
    },
  },

  ninetjer: {
    horus: {
      codes: ["R8", "N35"],
      mdc: "nTr-n",
      transliteration: "ni͗-nṯr",
      translation: "Godlike one of Horus",
    },
    nebty: {
      codes: ["R8", "N35"],
      mdc: "nTr:n",
      transliteration: "ni͗-nṯr",
      translation: "Godlike one of the Two Ladies",
    },
    golden: {
      codes: ["M22", "D21", "N35", "S12"],
      mdc: "M22-(r:n:nbw)",
      transliteration: "rn-nbw",
      translation: "Name of gold / Golden offspring",
    },
    prenomen: {
      codes: ["W10A", "E11", "R8", "N35"],
      mdc: "W10A*E11-nTr:n",
      transliteration: "bꜢ-nṯr",
      sources: [
        { text: "Abydos Canon no. 11" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 42-43, 3:1" },
      ],
      variants: [
        {
          codes: ["W10A", "G29", "R8", "X1", "D21", "G43"],
          mdc: "W10A-G29-nTr-t:r-w",
          transliteration: "",
          sources: [
            { text: "Saqqara Canon no. 54" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 42-43, 3:2" },
          ],
        },
        {
          codes: ["R8", "D21", "N35"],
          mdc: "//-nTr-r:n",
          transliteration: "..nṯr-rn",
        },
      ],
    },
  },

  wadjenes: {
    nebty: {
      codes: [],
      mdc: "??",
      transliteration: "wng",
    },
    prenomen: {
      codes: ["M13", "N35", "S29"],
      mdc: "wAD-n-s",
      transliteration: "wꜢḏ-n-s",
      sources: [
        { text: "Abydos Canon no. 12" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 42-43, 4:1" },
      ],
      variants: [
        {
          codes: ["S29"],
          mdc: "//-s",
          transliteration: "..s",
          sources: [
            { text: "Turin King List 3.23" },
            { text: "Gardiner, The Royal Canon of Turin (1959) II:23" },
          ],
        },
        {
          codes: ["M13", "F20", "Z1", "F51"],
          mdc: "wAD-F20:Z1-F51",
          transliteration: "wꜢḏ-l-s",
        },
      ],
    },
  },

  senedj: {
    prenomen: {
      codes: ["S29", "N35", "D46", "M17"],
      mdc: "s-n:d-i",
      transliteration: "snḏ",
      translation: "The frightful one",
      sources: [
        { text: "Abydos Canon no. 13" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 42-43, 5:E3" },
      ],
      variants: [
        {
          codes: ["S29", "N35", "D46"],
          mdc: "s-n:d",
          transliteration: "snd",
          translation: "The frightful one",
          sources: [
            { text: "Dynasty IV tomb of Shery" },
            { text: "Mariette, Les mastabas de l'ancien empire, pp. 92-93" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 42-43, 5:E2" },
          ],
        },
        {
          codes: ["M23", "S29", "N35", "D46"],
          mdc: "sw-s-n:d",
          transliteration: "(n)swt-snd",
          translation: "The frightful one",
        },
      ],
    },
  },

  sekhemib: {
    horus: {
      codes: ["S29", "S42", "F34"],
      mdc: "s-sxm-ib",
      transliteration: "sḫm-i͗b",
      translation: "The resolute one",
      sources: [
        { text: "Abydos Tomb P, IÄF 266-268" },
        { text: "Mitteilungen des Deutschen Archäologischen Instituts, Abteilung Kairo 20 no. 52" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 44-45, a:H1" },
      ],
      variants: [
        {
          codes: ["S29", "S42", "F34", "O1", "N35", "U4", "X1"],
          mdc: "s-sxm-ib:pr:n-U4:t",
          transliteration: "sḫm-i͗b-pr-n-mꜢꜤt",
          translation: "The resolute one who comes forth for Maat",
        },
      ],
    },
    nebty: {
      codes: ["S29", "S42", "F34", "O1", "N35", "U4", "X1"],
      mdc: "s-sxm-ib:pr:n-U4:t",
      transliteration: "sḫm-i͗b-pr-n-mꜢꜤt",
      translation: "The resolute one who comes forth for Maat",
    },
  },

  peribsen: {
    horus: {
      codes: ["E146", "O1", "F34", "S29", "N35"],
      mdc: "E146-(pr:ib)*s:n",
      transliteration: "stḥ-pr-i͗b-sn",
    },
    nebty: {
      codes: ["O1", "F34", "S29", "N35"],
      mdc: "(pr:ib)*s:n",
      transliteration: "pr-i͗b-sn",
    },
    prenomen: {
      codes: ["O1", "F34", "S29", "N35"],
      mdc: "(pr:ib)*s:n",
      transliteration: "pr-i͗b-sn",
      sources: [
        { text: "Petrie, Royal Tombs, II, plate XXII (190)" },
      ],
    },
  },

  sneferka: {
    horus: {
      codes: ["S29", "F35", "D28"],
      mdc: "s-nfr-kA",
      transliteration: "s-nfr-kꜢ",
    },
    nomen: {
      codes: ["N5", "F35", "D28"],
      mdc: "ra-nfr-kA",
      transliteration: "nfr-kꜢ-rꜤ",
      sources: [
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 44-45, 6:E1" },
      ],
      variants: [
        {
          codes: ["F35", "D28", "Z1"],
          mdc: "nfr-kA-Z1",
          transliteration: "nfr-kꜢ",
        },
      ],
    },
  },

  neferkasokar: {
    prenomen: {
      codes: ["O34", "V31", "D21", "F35", "D28"],
      mdc: "z:k:r-nfr-kA",
      transliteration: "nfr-kꜢ-skr",
      translation: "The perfect one of the ka of Sokar",
      sources: [
        { text: "Saqqara Canon no. 50" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 44-45, 7:E1" },
      ],
      variants: [
        {
          codes: ["F35", "D28", "Z1", "O34", "V31", "D21", "Z5", "G7"],
          mdc: "nfr-kA-Z1-z:k:r-Z5-G7",
          transliteration: "nfr-kꜢ-skr",
          translation: "The perfect one of the Ka of Sokar",
        },
      ],
    },
  },

  "hudjefa-i": {
    prenomen: {
      codes: ["V28", "I10", "I9", "G1", "G41", "G37"],
      mdc: "H-D:f-A-G41:G37",
      transliteration: "ḥw-ḏfꜢ",
      translation: "Missing",
      sources: [
        { text: "\"Missing\" indicates that there was a gap in the Ramesside records." },
        { text: "Turin King List 4.2" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 44-45, 8:2" },
        { text: "Gardiner, The Royal Canon of Turin (1959) III:2" },
      ],
    },
  },

  khasekhemwy: {
    horus: {
      codes: ["N28", "S42"],
      mdc: "xa-sxm",
      transliteration: "ḫꜤ-sḫm",
      translation: "The powerful one has appeared",
      sources: [
        { text: "Quibell, Hierakonpolis, I, plate XXXVIII" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 44-45, 9:H1" },
      ],
      variants: [
        {
          codes: ["N28", "S42", "S42"],
          mdc: "xa-sxm-sxm",
          transliteration: "ḫꜤ-sḫm-wi͗",
          translation: "The powerful ones have appeared",
          sources: [
            { text: "Petrie, Royal Tombs, II, plate XXIV" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 44-45, 9:H3" },
          ],
        },
        {
          codes: ["N28", "S42", "S42", "G141", "G141", "R4", "Z11", "I9"],
          mdc: "xa:sxm*sxm-G141-G141-Htp:Z11:f",
          transliteration: "ḫꜤ-sḫm-wi͗-ḥtp-nṯwi͗-i͗mf",
          translation: "The two powerful ones have appeared, the two lords being satisfied with him",
        },
      ],
    },
    nebty: {
      codes: ["N28", "S42", "S42", "G141", "G141", "R4", "Z11A", "I9"],
      mdc: "xa:sxm*sxm-G141\\-G141-Htp*Z11A:f",
      transliteration: "ḫꜤ-sḫm-wi͗-ḥtp-nṯwi͗-i͗mf",
      translation: "The two powerful ones have appeared, the two lords being satisfied with him",
      sources: [
        { text: "Petrie, Royal Tombs, II, plate XXIII (201)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 44-45, 9:N1" },
      ],
      variants: [
        {
          codes: ["N28", "S42", "S42", "F32", "S29", "N35"],
          mdc: "xa:sxm*sxm-X:s-(n)",
          transliteration: "ḫꜤ-sḫm-wi͗-nbw-ḫt-sn",
          translation: "The two powerful ones have appeared, the golden one of their bodies",
        },
      ],
    },
    prenomen: {
      codes: ["U28", "U28", "D1", "M17", "M17"],
      mdc: "DA-DA-D1-i-i",
      transliteration: "ḏꜢ-ḏꜢ-y",
      sources: [
        { text: "Abydos Canon no. 14" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 44-45, 9:1" },
      ],
      variants: [
        {
          codes: ["D58", "D58", "N21", "M17", "M17"],
          mdc: "b-b-N21-i-i",
          transliteration: "bbty",
          sources: [
            { text: "Saqqara Canon no. 48" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 44-45, 9:2" },
          ],
        },
        {
          codes: ["D58", "D58", "X1", "Z4"],
          mdc: "b-b-t:y-//",
          transliteration: "bbty",
        },
      ],
    },
  },

  nebka: {
    horus: {
      codes: ["V18", "N35", "M3"],
      mdc: "V18-n:M3",
      transliteration: "sꜢ-nḫt",
    },
    prenomen: {
      codes: ["V30", "D28", "Z1"],
      mdc: "nb-kA-Z1-//",
      transliteration: "nb-kꜢ",
      sources: [
        { text: "The cartouche is missing on the papyrus." },
        { text: "Turin King List 4.4" },
        { text: "Gardiner, The Royal Canon of Turin (1959) III:4" },
      ],
      variants: [
        {
          codes: ["N5", "V30", "D28"],
          mdc: "ra:nb-kA",
          transliteration: "nb-kꜢ-rꜤ*",
        },
      ],
    },
  },

  djoser: {
    horus: {
      codes: ["R8", "D21", "F32"],
      mdc: "nTr-r:X",
      transliteration: "nṯri͗-ẖt",
      translation: "Divine of body",
      sources: [
        { text: "Garstang, Mahasna, plates VIII to X" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 2f" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 48-49, 2:H1" },
      ],
      variants: [
        {
          codes: ["R8", "X1", "D21", "F32", "X1", "F51B"],
          mdc: "nTr-t:r-X:t*F51B",
          transliteration: "nṯri͗-ẖt",
        },
      ],
    },
    nebty: {
      codes: ["R8", "D21", "F32"],
      mdc: "nTr-r:X",
      transliteration: "nṯri͗-ẖt",
      translation: "The one whose body is divine",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 2f" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 48-49, 2:N" },
      ],
      variants: [
        {
          codes: ["R8", "D21", "F32", "S12"],
          mdc: "nTr-r:X:nbw",
          transliteration: "nṯri͗-ẖt-nbw",
        },
      ],
    },
    golden: {
      codes: ["N5", "S12"],
      mdc: "ra:nbw",
      transliteration: "nbw-rꜤ",
    },
    prenomen: {
      codes: ["D45", "D21"],
      mdc: "Dsr-r",
      transliteration: "ḏsr",
      translation: "The sacred one",
      sources: [
        { text: "Saqqara Canon no. 47" },
        { text: "Statue of Djoser dedicated by Senusret II, ÄM 7702" },
        { text: "Aegyptische Inschriften aus den Staatlichen Museum zu Berlin. I, 144 (7702)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 48-49, 2:E2" },
      ],
      variants: [
        {
          codes: ["D45", "D21", "M17", "X1", "G7"],
          mdc: "Dsr:r-i-t-G7",
          transliteration: "ḏsr-i͗t",
          sources: [
            { text: "Turin King List 4.5" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 48-49, 2:E3" },
            { text: "Gardiner, The Royal Canon of Turin (1959) III:5" },
          ],
        },
        {
          codes: ["D45", "V17"],
          mdc: "//-Dsr-V17",
          transliteration: "ḏsr-sꜢ",
          sources: [
            { text: "Abydos Canon no. 16" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 48-49, 2:E1" },
          ],
        },
        {
          codes: ["D251", "O34", "D21"],
          mdc: "D251-z:r",
          transliteration: "ḏsr",
        },
      ],
    },
  },

  sekhemkhet: {
    horus: {
      codes: ["S29", "S42", "F32"],
      mdc: "s*sxm:X",
      transliteration: "sḫm-ẖt",
      translation: "The one whose body is powerful",
    },
    nebty: {
      codes: ["R4", "D21", "N35"],
      mdc: "Htp:r:n",
      transliteration: "ḥtp-rn",
      translation: "The Two Ladies are pleased with his name",
    },
    prenomen: {
      codes: ["X1", "X1", "M17"],
      mdc: "t:t-i",
      transliteration: "t-t-i͗",
      translation: "of true greatness",
      sources: [
        { text: "Abydos Canon no. 17" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 48-49, 3:E1" },
      ],
      variants: [
        {
          codes: ["D45", "M17", "X1", "X1"],
          mdc: "Dsr-i-t:t",
          transliteration: "ḏsr-t-t-i͗",
          translation: "The blessed one, of true greatness",
          sources: [
            { text: "Saqqara Canon no. 46" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 48-49, 3:E2" },
          ],
        },
        {
          codes: ["D45", "D21", "X1", "Z4", "G7"],
          mdc: "Dsr:r-t:y-G7",
          transliteration: "ḏsr-ti͗",
          translation: "The blessed one, of true greatness",
        },
      ],
    },
  },

  "hudjefa-ii": {
    prenomen: {
      codes: ["G41", "G37", "G7"],
      mdc: "//-G41:G37-G7",
      transliteration: "ḥwḏfꜢ",
      translation: "Missing",
      sources: [
        { text: "\"Missing\" indicates that there was a gap in the Ramesside records." },
        { text: "Turin King List 4.7" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 48-49, 4:2" },
        { text: "Gardiner, The Royal Canon of Turin (1959) III:7" },
      ],
      variants: [
        {
          codes: ["O34", "I10", "S29"],
          mdc: "z:D-s",
          transliteration: "sḏs",
          translation: "It is broken",
        },
      ],
    },
  },

  nebkara: {
    prenomen: {
      codes: ["N5", "V30", "D28"],
      mdc: "ra:nb-kA",
      transliteration: "nb-kꜢ-rꜤ",
    },
  },

  huni: {
    horus: {
      codes: ["N28", "G29"],
      mdc: "xa:G29",
      transliteration: "ḫꜤ-bꜢ",
      sources: [
        { text: "Quibell, Hierakonpolis, plate LXX (1)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 50-51, b:H \"Hor Chaba\"" },
      ],
      variants: [
        {
          codes: ["N29", "S1"],
          mdc: "q-S1",
          transliteration: "ḳꜢ-ḥḏt",
          translation: "(whose) White Crown is high",
        },
      ],
    },
    prenomen: {
      codes: ["V28", "A25", "N35", "Z4", "D40"],
      mdc: "H-A25-n:y:D40",
      transliteration: "ḥw-ni͗",
      translation: "The smiter",
      sources: [
        { text: "Saqqara Canon no. 44" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 48-49, 6:E2" },
      ],
      variants: [
        {
          codes: ["V28", "Z5", "A25"],
          mdc: "H-Z5-A25-//",
          transliteration: "ḥwi͗..",
          sources: [
            { text: "Turin King List 4.8" },
            { text: "Gardiner, The Royal Canon of Turin (1959) III:8" },
          ],
        },
        {
          codes: ["M23", "X1", "N35", "V28"],
          mdc: "sw-t:n-H",
          transliteration: "nsw.t-hw",
          sources: [
            { text: "Elephantine stele JE 41556" },
            { text: "ZÄS , 81, 22" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 48-49, 6:E1" },
          ],
        },
        {
          codes: ["M23", "V28", "X1", "N35"],
          mdc: "sw-H-t:n",
          transliteration: "nsw.t-ḥw",
        },
      ],
    },
  },

  sneferu: {
    horus: {
      codes: ["V30", "U4", "X1"],
      mdc: "nb:U4-t",
      transliteration: "nb-mꜢꜤt",
      translation: "The Lord of Maat",
      sources: [
        { text: "Cairo Museum JE 38568" },
        { text: "relief from Wadi Maghara, Sinai" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 2a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 52-53, 1:H1" },
      ],
      variants: [
        {
          codes: ["V30", "U1", "Aa11", "X1", "S29", "F35", "D21", "G43"],
          mdc: "nb:U1-Aa11:t-s-nfr-r:w",
          transliteration: "nb-mꜢꜤt snfr-w",
          translation: "The Lord of Maat, has made me perfect",
        },
      ],
    },
    nebty: {
      codes: ["V30", "U4", "X1"],
      mdc: "nb:U4-t",
      transliteration: "nb-mꜢꜤt",
      translation: "Lord of Maat",
    },
    golden: {
      codes: ["G5", "S12"],
      mdc: "G5:nbw",
      transliteration: "bi͗k-nbw",
      translation: "Golden falcon",
    },
    prenomen: {
      codes: ["S29", "F35", "D21", "I9", "G43"],
      mdc: "s-nfr-r:f-w",
      transliteration: "s-nfr-w",
      translation: "The one who has been made perfect",
      sources: [
        { text: "Tomb of Nefermaat II (Giza G7060)" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 17a" },
      ],
      variants: [
        {
          codes: ["S29", "F35", "I9", "D21", "G43"],
          mdc: "s-nfr-f:r-w",
          transliteration: "n-nfr-w",
          translation: "The one who has been made perfect",
          sources: [
            { text: "Saqqara Canon no. 43" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 52-53, 1:E4" },
          ],
        },
        {
          codes: ["S29", "F35", "G7"],
          mdc: "s-nfr-//-G7",
          transliteration: "s-nfr..",
          translation: "The one who has been made perfect",
          sources: [
            { text: "Turin King List 4.6" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 52-53, 1:E5" },
            { text: "Gardiner, The Royal Canon of Turin (1959) III:9" },
          ],
        },
      ],
    },
  },

  khufu: {
    horus: {
      codes: ["Aa24", "G43"],
      mdc: "Aa24-w",
      transliteration: "mḏdw",
      translation: "Who has been adhered to/followed",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 2b+d" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 52-53, 2:H1" },
      ],
      variants: [
        {
          codes: ["Aa24"],
          mdc: "Aa24",
          transliteration: "mḏd",
          translation: "Who has been adhered to/followed",
        },
      ],
    },
    nebty: {
      codes: ["Aa24", "D21"],
      mdc: "Aa24:r",
      transliteration: "mḏd-r",
      translation: "Who has adhered to the Two Ladies",
    },
    golden: {
      codes: ["G5", "G5", "S12"],
      mdc: "G5*G5:nbw",
      transliteration: "bi͗k.wi͗-nb.w",
      translation: "The golden double falcon",
    },
    prenomen: {
      codes: ["Aa1", "G43", "I9", "G43"],
      mdc: "x-w-f-w",
      transliteration: "ḫwfw",
      translation: "He protects me",
      sources: [
        { text: "Tomb of Iymeri (Giza G6020)" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 50b" },
      ],
      variants: [
        {
          codes: ["Aa1", "I9", "Z7"],
          mdc: "x:f-W",
          transliteration: "ḫfw",
          translation: "He protects me",
          sources: [
            { text: "Westcar Papyrus, 6.18" },
          ],
        },
        {
          codes: ["Aa1", "I9", "G43"],
          mdc: "x:f-w",
          transliteration: "ḫfw",
          translation: "He protects me",
          sources: [
            { text: "Abydos Canon no. 21" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 52-53, 2:E4" },
          ],
        },
        {
          codes: ["Aa1", "I9", "G43", "I9"],
          mdc: "x:f-w-f",
          transliteration: "ḫwfwf",
          translation: "He protects me",
          sources: [
            { text: "Saqqara Canon no. 42" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 52-53, 2:E5" },
          ],
        },
        {
          codes: ["Aa1", "G43", "I9"],
          mdc: "x-w-f",
          transliteration: "ḫfw",
          translation: "He protects me",
          sources: [
            { text: "Wadi Hammamat inscription" },
            { text: "Drioton, Une Liste des Rois de la IV Dynastie dans l'Ouadi Hammamat. BSFE 16, 41-49" },
          ],
        },
        {
          codes: ["E10", "Aa1", "G43", "I9"],
          mdc: "W9R-E10-x-w-f",
          transliteration: "ḫnmw ḫwfw",
          translation: "Khnum protects me",
          sources: [
            { text: "Tomb of Iymeri (Giza G6020)" },
            { text: "Tallet, Des papyrus du temps de Chéops au ouadi el-Jarf, BSFE 188 (2014), 42, fig. 17" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 50a" },
          ],
        },
      ],
    },
  },

  radjedef: {
    horus: {
      codes: ["L1"],
      mdc: "xpr",
      transliteration: "ḫpr",
      translation: "The one who has manifested (himself)",
    },
    nebty: {
      codes: ["L1", "G17"],
      mdc: "xpr-m",
      transliteration: "ḫpr-m",
      translation: "Who has manifested (himself) by means of the Two Ladies",
    },
    golden: {
      codes: ["G5", "G5", "G5", "S12"],
      mdc: "G5*G5*G5:nbw",
      transliteration: "bi͗k-wi͗-nbw",
      translation: "The (divine) falcons are golden",
    },
    prenomen: {
      codes: ["N5", "R11", "I9"],
      mdc: "ra-Dd-f",
      transliteration: "rꜤ-ḏd.f",
      translation: "Ra is his stability",
      sources: [
        { text: "Abydos Canon no. 22" },
        { text: "Fondation Eugene Piot, Monuments et mémoires, Volume 25, p. 63" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 52-53, 3:E1" },
      ],
    },
  },

  khafra: {
    horus: {
      codes: ["F12", "F34"],
      mdc: "wsr-ib",
      transliteration: "wsr-i͗b",
      translation: "Strong-minded",
    },
    nebty: {
      codes: ["F12", "G17"],
      mdc: "wsr-m",
      transliteration: "wsr-m",
      translation: "Who is strong by means of the Two Ladies",
    },
    golden: {
      codes: ["S42", "G7", "S12"],
      mdc: "S42*G7:S12",
      transliteration: "sḫm-bi͗k-nbw",
      translation: "The golden falcon is powerful",
    },
    prenomen: {
      codes: ["N5", "N25", "I9"],
      mdc: "ra-N25-f",
      transliteration: "ḫꜤ-f-rꜤ",
      translation: "He appears (as) Ra",
      sources: [
        { text: "Passim" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 41a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 54-55, 4:E1" },
      ],
      variants: [
        {
          codes: ["N5", "N28", "G43", "I9"],
          mdc: "ra-xa-w-f",
          transliteration: "ḫꜤ.w-f-rꜤ",
          translation: "He appears (as) Ra",
          sources: [
            { text: "Saqqara Canon no. 40" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 54-55, 4:E4" },
          ],
        },
        {
          codes: ["F12", "F34", "Z1", "N5", "N28", "I9"],
          mdc: "wsr-ib:Z1-ra-xa:f",
          transliteration: "wsr-i͗b-ḫꜤ-f-rꜤ",
          translation: "With a strong heart, he appears (as) Ra",
          sources: [
            { text: "Aegyptische Inschriften aus den Königlichen Museen zu Berlin, I, p.2 (15387)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 54-55, 4:E2" },
          ],
        },
        {
          codes: ["N28", "G7"],
          mdc: "//-xa://-G7",
          transliteration: "..-ḫꜤ-..",
        },
      ],
    },
  },

  menkaura: {
    horus: {
      codes: ["D28", "E1", "F32"],
      mdc: "kA-E1:X",
      transliteration: "kꜢ-ẖt",
      translation: "The bull of the (divine) Corporation",
      sources: [
        { text: "Legrain, Achats à Louqsor, ASAE 4 (1903): 134" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 54-55, 6:H1" },
      ],
    },
    nebty: {
      codes: ["D28", "E1"],
      mdc: "kA-E1",
      transliteration: "kꜢ",
      translation: "The bull (by means) of the Two Ladies",
    },
    golden: {
      codes: ["R8", "G7", "S12"],
      mdc: "nTr*G7:nbw",
      transliteration: "nṯr-bi͗k-nbw",
      translation: "The golden falcon is divine",
    },
    prenomen: {
      codes: ["N5", "Y5", "D28"],
      mdc: "ra-mn-kA",
      transliteration: "mn-kꜢ-rꜤ",
      translation: "The established one of the ka of Ra",
      sources: [
        { text: "Kaplony Die Rollsiegel des Alten Reiches, II, plate XXXV" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 54-55, 6:E2" },
      ],
      variants: [
        {
          codes: ["N5", "Y5", "D28", "D28", "D28"],
          mdc: "ra:mn-kA*kA:kA",
          transliteration: "mn-kꜢw-rꜤ",
          translation: "The established one of the kas of Ra",
          sources: [
            { text: "Saqqara Canon no. 39" },
            { text: "(only attested by Mariette in 1864.)" },
            { text: "George Fraser, “The early tombs at Tehneh”, ASAE 3 (1903) 122-130, pl. IV (p. 192f)" },
            { text: "Urk I 24-25" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 54-55, 6:E1" },
          ],
        },
        {
          codes: ["N5", "Y5", "N35", "D28", "Z2"],
          mdc: "ra-mn:n-kA:Z2",
          transliteration: "mn-kꜢw-rꜤ",
          translation: "The established one of the kas of Ra",
          sources: [
            { text: "Abydos Canon no. 24" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 54-55, 6:E3" },
          ],
        },
      ],
    },
  },

  shepseskaf: {
    horus: {
      codes: ["A50"],
      mdc: "Sps-Xt",
      transliteration: "šps-ẖt",
      translation: "The noble one of the (divine) Corporation",
    },
    nebty: {
      codes: ["A50"],
      mdc: "Sps",
      transliteration: "šps",
      translation: "The noble one (by means) of the Two Ladies",
    },
    prenomen: {
      codes: ["A50", "S29", "S29", "D28", "I9"],
      mdc: "Sps-s-s-kA:f",
      transliteration: "šps-s-kꜢ-f",
      translation: "His ka is noble",
      sources: [
        { text: "Urkunden des Ägyptische Alterthums , I, 166" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 41a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 54–55, 7:E1" },
      ],
      variants: [
        {
          codes: ["A51", "O34", "O34", "D28", "I9"],
          mdc: "A51-z:z-kA:f",
          transliteration: "šps-s-kꜢ-f",
          translation: "His soul is noble",
          sources: [
            { text: "Abydos Canon no. 25" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 54–55, 7:E3" },
          ],
        },
        {
          codes: ["M23", "X1", "L2", "X1", "A50", "S29", "S29", "D28", "I9"],
          mdc: "sw:t-bit:t-Sps-s-s-kA:f",
          transliteration: "nswt-biti šps-s-kꜢ.f",
          translation: "The Dual King, his ka is noble",
          sources: [
            { text: "Urkunden des Ägyptische Alterthums , I 160" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 54–55, 7:E2" },
          ],
        },
      ],
    },
  },

  baufra: {
    golden: {
      codes: ["V30", "S1", "S12"],
      mdc: "nb-S1:nbw",
      transliteration: "nb-ḥḏdt-nwb",
    },
    prenomen: {
      codes: ["N5", "G29", "I9"],
      mdc: "ra-G29-f",
      transliteration: "bꜢ.f-rꜤ",
      translation: "His soul is that of Ra",
      sources: [
        { text: "Wadi Hammamat inscription" },
        { text: "Drioton, Une Liste des Rois de la IV Dynastie dans l'Ouadi Hammamat. Bulletin de la Société Français d'Égyptologie 16, 41-49" },
      ],
      variants: [
        {
          codes: ["N5", "G30", "Z7", "Y1", "Z2", "I9"],
          mdc: "ra-G30&W-Y1:Z2:f",
          transliteration: "bꜢw.f-rꜤ",
          translation: "His souls are those of Ra",
          sources: [
            { text: "Westcar papyrus 4.18" },
          ],
        },
        {
          codes: ["G29", "D28", "Z1"],
          mdc: "G29-kA-Z1",
          transliteration: "bꜢ-kꜢ",
          translation: "Ba and Ka",
          sources: [
            { text: "ASAE , 7, 266-280" },
          ],
        },
        {
          codes: ["E10", "D28", "Z1"],
          mdc: "E10-kA-Z1",
          transliteration: "bꜢ-kꜢ",
          translation: "Ba and Ka",
          sources: [
            { text: "ASAE , 7, 266-280" },
          ],
        },
      ],
    },
  },

  hordjedef: {
    prenomen: {
      codes: ["N5", "G5", "R11", "I9"],
      mdc: "ra-G5-Dd-f",
      transliteration: "ḥr-ḏd-f-rꜤ",
    },
    nomen: {
      codes: ["G5", "D37", "D37", "I9"],
      mdc: "G5-D37:D37-f",
      transliteration: "ḥr-ḏḏ.f",
    },
  },

  userkaf: {
    horus: {
      codes: ["D4", "U1", "Aa11", "X1"],
      mdc: "ir:mA*(mAa:t)",
      transliteration: "i͗ri͗-mꜢꜤt",
      translation: "The one who has accomplished Maat",
    },
    nebty: {
      codes: ["D4", "U1", "Aa11", "X1"],
      mdc: "ir:mA*(mAa:t)",
      transliteration: "i͗ri͗-mꜢꜤt",
      translation: "The one who has accomplished Maat (for the Two Ladies)",
    },
    golden: {
      codes: ["F35", "G7", "S12"],
      mdc: "nfr*G7:nbw",
      transliteration: "bi͗k-nbw-nfr",
      translation: "The perfect golden falcon",
    },
    prenomen: {
      codes: ["F12", "S29", "D28", "I9"],
      mdc: "wsr-s-kA-f",
      transliteration: "wsr-kꜢ-f",
      translation: "His ka is strong",
      sources: [
        { text: "Abydos Canon no. 26" },
        { text: "Saqqara Canon no. 34" },
        { text: "Mariette, Monuments divers recueillis en Égypte et en Nubie, II, plate 54e" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 56–57, 1:E2" },
      ],
      variants: [
        {
          codes: ["D28", "Z1", "G7"],
          mdc: "//-kA-Z1-G7",
          transliteration: "..kꜢ",
        },
      ],
    },
  },

  sahura: {
    horus: {
      codes: ["V30", "N28", "G43"],
      mdc: "nb:xa-w",
      transliteration: "nb-ḫꜤw",
      translation: "Possessor of appearances",
      sources: [
        { text: "Cerny, Inscriptions of Sinai, I, plate 5" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 56–57, 2:H" },
      ],
      variants: [
        {
          codes: ["V30", "N28", "G43", "N5", "D61", "G43"],
          mdc: "nb:xa-w-ra-sAH-w",
          transliteration: "nb-ḫꜤw sꜢḥ-w-rꜤ",
          translation: "Possessor of appearances, Ra has endowed me",
        },
      ],
    },
    nebty: {
      codes: ["V30", "N28", "G43"],
      mdc: "nb:xa-w",
      transliteration: "nb-ḫꜤw",
      translation: "Possessor of appearances",
    },
    golden: {
      codes: ["G7", "G7", "S12"],
      mdc: "G7*G7:nbw",
      transliteration: "bi͗kwi͗-nbw",
      translation: "The golden double falcon",
    },
    prenomen: {
      codes: ["N5", "D61", "G43"],
      mdc: "ra-sAH-w",
      transliteration: "sꜢḥw-rꜤ",
      translation: "Ra has endowed me",
      sources: [
        { text: "Abydos Canon no. 27" },
        { text: "Saqqara Canon no. 33" },
        { text: "Karnak Canon no. 3" },
        { text: "Mariette, Abydos, I, plate 43 (27)" },
        { text: "Meyer, Ägyptische Chronologie, plate 1 (33)" },
        { text: "Borchardt, Das grabdenkmal des Sahu-Re, I, 45–46" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 56–57, 2:E" },
      ],
    },
  },

  neferefra: {
    horus: {
      codes: ["F35"],
      mdc: "nfr-xaw",
      transliteration: "nfr-ḫꜤw",
      translation: "Perfect of appearances",
    },
    nebty: {
      codes: ["F35", "G17"],
      mdc: "nfr-m",
      transliteration: "nfr-m",
      translation: "Who is perfect by means of the Two Ladies",
    },
    golden: {
      codes: ["F35", "G7", "S12"],
      mdc: "nfr*G7:nbw",
      transliteration: "nfr-bi͗k-nbw",
      translation: "The perfect golden falcon",
    },
    prenomen: {
      codes: ["N5", "F35", "I9"],
      mdc: "ra-nfr-f",
      transliteration: "nfr.f-rꜤ",
      translation: "He is perfect (like) Ra",
      sources: [
        { text: "Abydos Canon no. 29" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 58-59, 5:T1" },
      ],
      variants: [
        {
          codes: ["N5", "N28", "F35"],
          mdc: "ra-xa-nfr",
          transliteration: "ḫꜤ-nfr-rꜤ",
          translation: "Perfect appearance (like) Ra",
        },
      ],
    },
    nomen: {
      codes: ["M17", "O34", "M17"],
      mdc: "i-z-i",
      transliteration: "i͗zi͗",
    },
  },

  niuserra: {
    horus: {
      codes: ["Q1", "X1", "F34", "N16", "N16"],
      mdc: "st-t:ib-N16:N16",
      transliteration: "s-t-i͗b-tꜤwi͗",
      translation: "The favorite of the Two Lands",
    },
    nebty: {
      codes: ["Q1", "X1", "F34"],
      mdc: "st-t:ib",
      transliteration: "s-t-i͗b",
      translation: "The favorite of the Two Ladies",
    },
    golden: {
      codes: ["R8", "G5", "S12"],
      mdc: "nTr*G5:nbw",
      transliteration: "bi͗k-nbw-nṯr",
      translation: "The divine golden falcon",
    },
    prenomen: {
      codes: ["N5", "N35", "F12", "S29", "D21"],
      mdc: "ra-n-wsr*s:r",
      transliteration: "ni͗-wsr-rꜤ",
      translation: "Possessed of Ra's power",
    },
    nomen: {
      codes: ["M17", "K1", "N35"],
      mdc: "i-in:n",
      transliteration: "i͗ni͗",
      variants: [
        {
          codes: ["K1", "N35"],
          mdc: "in:n",
          transliteration: "i͗n",
        },
      ],
    },
  },

  menkauhor: {
    horus: {
      codes: ["Y5", "N28", "G43"],
      mdc: "mn:xa-w",
      transliteration: "mn-kꜢ-w",
      translation: "Established of appearances",
    },
    golden: {
      codes: ["T3", "G5", "S12"],
      mdc: "T3*G5:nbw",
      transliteration: "bik-nbw-ḥḏ",
      translation: "The radiant golden falcon",
    },
    prenomen: {
      codes: ["G5", "Y5", "D28"],
      mdc: "G5-mn:kA",
      transliteration: "mn-kꜢ-ḥr",
      translation: "The established one of the ka of Horus",
      sources: [
        { text: "Saqqara Canon no. 29" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 58-59, 7:T2" },
      ],
      variants: [
        {
          codes: ["G5", "Y5", "N35", "D28", "D28", "D28"],
          mdc: "G5-mn:n-kA*kA:kA",
          transliteration: "mn-kꜢw-ḥr",
          translation: "The established one of the kas of Horus",
        },
      ],
    },
    nomen: {
      codes: ["G5", "M17", "D28", "G43"],
      mdc: "G5-i-kA-w",
      transliteration: "i-kꜢw-ḥr",
      sources: [
        { text: "Derived from the Throne name, meaning it was likely not the birth name" },
        { text: "Tomb of Seshemnefer IV (LG 53)" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 80b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 58-59, 7:E1" },
      ],
      variants: [
        {
          codes: ["D28", "M17", "G43"],
          mdc: "kA-i-w",
          transliteration: "i͗kꜢw",
        },
      ],
    },
  },

  djedkara: {
    horus: {
      codes: ["R11", "N28", "G43"],
      mdc: "Dd-xa-w",
      transliteration: "ḏd-ḫꜤw",
      translation: "Enduring of appearances",
    },
    nebty: {
      codes: ["R11", "N28", "G43"],
      mdc: "Dd-xa-w",
      transliteration: "ḏd-ḫꜤw",
      translation: "Enduring of appearances (by means of) the Two Ladies",
    },
    golden: {
      codes: ["R11", "G5", "S12"],
      mdc: "Dd*G5:nbw",
      transliteration: "bi͗k-nbw-ḏd",
      translation: "The enduring golden falcon",
    },
    prenomen: {
      codes: ["N5", "R11", "D28"],
      mdc: "ra-Dd-kA",
      transliteration: "ḏd-kꜢ-rꜤ",
      translation: "The soul of Ra is enduring",
      sources: [
        { text: "Abydos Canon no. 32" },
        { text: "Saqqara pyramid Tomb 17" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 65/67" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 60-61, 8:T1" },
      ],
      variants: [
        {
          codes: ["R11", "R11"],
          mdc: "Dd-Dd",
          transliteration: "ḏdw",
          sources: [
            { text: "Turin King List 4.24" },
            { text: "Gardiner, The Royal Canon of Turin (1959) III:24" },
          ],
        },
        {
          codes: ["G5", "R11", "D28"],
          mdc: "G5-Dd-kA",
          transliteration: "ḏd-kꜢ-ḥr",
          translation: "The soul of Horus is enduring",
          sources: [
            { text: "Adams, Ancient Nekhen, 126" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 60-61, 8:T2" },
          ],
        },
        {
          codes: ["N5", "H6", "D28"],
          mdc: "N5-H6-D28",
          transliteration: "mꜢꜤt-kꜢ-rꜤ",
          translation: "The soul of Ra is justified",
        },
      ],
    },
    nomen: {
      codes: ["M17", "S29", "S29", "M17"],
      mdc: "i-s-s-i",
      transliteration: "issi",
      sources: [
        { text: "Papyrus Prisse" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 60-61, 8:E2" },
      ],
      variants: [
        {
          codes: ["M17", "O34", "O34", "M17"],
          mdc: "i-z:z-i",
          transliteration: "i͗ssi͗",
          sources: [
            { text: "Saqqara pyramid Tomb 17" },
            { text: "Tomb of Seshemnefer IV (LG 53)" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 67 & 80" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 60-61, 8:E1" },
          ],
        },
        {
          codes: ["M17", "Y1v", "S29", "S29"],
          mdc: "M17-Y1v-S29-S29",
          transliteration: "i͗ss",
        },
      ],
    },
  },

  unas: {
    horus: {
      codes: ["M13", "N18", "N18"],
      mdc: "wAD-N18:N18",
      transliteration: "wꜢḏ-tꜢwi͗",
      translation: "The sturdy one of the Two Lands",
    },
    nebty: {
      codes: ["M13", "G17"],
      mdc: "wAD-m",
      transliteration: "wꜢḏ-m",
      translation: "The one who is sturdy by means of the Two Ladies",
    },
    golden: {
      codes: ["M13", "G5", "S12"],
      mdc: "wAD*G5:nbw",
      transliteration: "bi͗k-nbw-wꜢḏ",
      translation: "The sturdy golden falcon",
    },
    prenomen: {
      codes: ["E34", "N35", "M17", "S29"],
      mdc: "wn:n-i*s",
      transliteration: "wni͗s",
      sources: [
        { text: "Abydos Canon no. 33" },
        { text: "Saqqara Canon no. 27" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 60-61, 8:E2" },
      ],
    },
  },

  teti: {
    horus: {
      codes: ["S29", "R4", "X1", "Q3", "N16", "N16"],
      mdc: "s-Htp:t*p-N16:N16",
      transliteration: "s-ḥtp-tꜢwi͗",
      translation: "The one who pacifies the Two Lands",
    },
    nebty: {
      codes: ["S29", "R4", "X1", "Q3"],
      mdc: "s-Htp:t*p",
      transliteration: "s-ḥtp",
      translation: "The one who has satisfied the Two Ladies",
    },
    golden: {
      codes: ["F36", "G5", "S12"],
      mdc: "F36*G5:nbw",
      transliteration: "bi͗k-nbw-smꜢ",
      translation: "The uniter",
    },
    nomen: {
      codes: ["X1", "X1", "M17"],
      mdc: "t:t-i",
      transliteration: "tti͗",
      sources: [
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 62-63, 1:E2" },
      ],
      variants: [
        {
          codes: ["X1", "X1", "M17", "M17"],
          mdc: "t:t-i-i",
          transliteration: "tty",
          sources: [
            { text: "Uncertain reading as the cartouche is damaged" },
            { text: "Prisse d'Avennes, Monuments Égyptiens, plate I" },
          ],
        },
        {
          codes: ["X1", "X1", "M17", "Q3", "X1", "V28", "U6", "D21", "N35"],
          mdc: "t:t-i-p:t-H-mr-r:n",
          transliteration: "tty-mr.n-ptḥ",
          translation: "Teti, beloved of Ptah",
          sources: [
            { text: "Dynasty XIX stela from pyramid of Teti, CG 34188 (JE 36852)" },
            { text: "ASAE , XIII, 255" },
          ],
        },
        {
          codes: ["G39", "N5", "X1", "X1", "M17"],
          mdc: "zA&ra-t:t-i",
          transliteration: "zꜢ-rꜤ tti",
          translation: "Son of Ra, Teti",
        },
      ],
    },
  },

  userkara: {
    prenomen: {
      codes: ["N5", "F12", "S29", "D28"],
      mdc: "ra-wsr*s-kA",
      transliteration: "wsr-kꜢ-rꜤ",
      translation: "The strong one belonging to the ka of Ra",
      sources: [
        { text: "Abydos Canon no. 35" },
        { text: "BIFAO , No. 95, 23-92" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 62-63, 2:T" },
      ],
    },
  },

  "pepi-i": {
    horus: {
      codes: ["U6", "M17", "M17", "N17", "N17"],
      mdc: "mr-i-i-N17:N17",
      transliteration: "mry-tꜢwi͗",
      translation: "Beloved of the Two Lands",
    },
    nebty: {
      codes: ["U6", "M17", "M17", "F32", "X1"],
      mdc: "mr-i-i-X:t",
      transliteration: "mry-ẖt",
      translation: "Beloved of the Two Ladies’ bodies",
    },
    golden: {
      codes: ["G5", "G5", "G5", "S12"],
      mdc: "G5*G5*G5:nbw",
      transliteration: "bi͗k-wi͗-nbw",
      translation: "The triple golden falcons",
    },
    prenomen: {
      codes: ["N5", "U6", "M17", "M17"],
      mdc: "ra-mr-i-i",
      transliteration: "mry-rꜤ",
      translation: "Beloved of Ra",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 115c & 116a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 62-63, 3:T2" },
      ],
      variants: [
        {
          codes: ["G5", "F35", "V18"],
          mdc: "G5-nfr-V18",
          transliteration: "nfr-zꜢ-ḥr",
          translation: "Perfect is the protection of Horus",
          sources: [
            { text: "Early throne name, later changed to Meryra." },
            { text: "Urkunden des Ägyptische Alterthums , I, 208-209" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 62-63, 3:T1" },
          ],
        },
      ],
    },
    nomen: {
      codes: ["Q3", "Q3", "M17", "M17"],
      mdc: "p-p-i-i",
      transliteration: "pi͗pi͗",
    },
  },

  "nemtiemsaf-i": {
    horus: {
      codes: ["S34", "N28", "G43"],
      mdc: "anx-xa-w",
      transliteration: "Ꜥnḫ-ḫꜤw",
      translation: "(Whose) appearances are (very much) alive",
    },
    nebty: {
      codes: ["S34", "N28", "G43"],
      mdc: "anx-xa-w",
      transliteration: "Ꜥnḫ-ḫꜤw",
      translation: "(for whom) The appearances of the Two Ladies are alive",
    },
    golden: {
      codes: ["G5", "G5", "S12"],
      mdc: "G5*G5:S12",
      transliteration: "bi͗kwi͗-nbw",
      translation: "The golden double falcon",
      sources: [
        { text: "Alabaster vase, Cairo Museum CG 18694 (JE2090)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 62-63, 4:G2" },
      ],
    },
    prenomen: {
      codes: ["N5", "U7", "D21", "N35"],
      mdc: "ra:U7-r:n",
      transliteration: "mr-n-rꜤ",
      translation: "The one whom Ra has loved",
      sources: [
        { text: "Abydos Canon no. 37" },
        { text: "Karnak Canon no. 16" },
        { text: "Chenoboskion Tomb 1" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 113g" },
      ],
    },
    nomen: {
      codes: ["G7A", "G17", "V18", "I9"],
      mdc: "G7A-m-V18-f",
      transliteration: "nmty-m-sꜢf",
      translation: "Nemty is his protection",
    },
  },

  "pepi-ii": {
    horus: {
      codes: ["R8", "N28", "G43"],
      mdc: "nTr-xa-w",
      transliteration: "nṯr.i͗-ẖꜤw",
      translation: "Divine of appearances",
      sources: [
        { text: "Sethe, Die Altaegyptischen Pyramidentexte nach den Papierabdrucken und Photographien des Berliner Museums, I, 7" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 64-65, 5:H" },
      ],
      variants: [
        {
          codes: ["R8", "N28", "G43", "N5", "F35", "D28"],
          mdc: "nTr-xa-w-ra-nfr-kA",
          transliteration: "nṯr.i͗-ẖꜤw nfr-kꜢ-rꜤ",
          translation: "Divine of appearances, the perfect one of the ka of Ra",
        },
      ],
    },
    nebty: {
      codes: ["R8", "N28", "G43"],
      mdc: "nTr-xa-w",
      transliteration: "nṯr.i͗-ẖꜤw",
      translation: "The divine one of the appearances of the Two Ladies",
    },
    golden: {
      codes: ["S42", "G5", "S12"],
      mdc: "sxm*G5:nbw",
      transliteration: "bi͗k-nbw-sẖm",
      translation: "The powerful golden falcon",
    },
    prenomen: {
      codes: ["N5", "F35", "D28"],
      mdc: "ra-nfr-kA",
      transliteration: "nfr-kꜢ-rꜤ",
      translation: "The perfect one of the ka of Ra",
      sources: [
        { text: "Abydos Canon no. 38" },
        { text: "Saqqara Canon no. 23" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 113g" },
      ],
      variants: [
        {
          codes: ["Q3", "Q3", "M17", "M17", "N5", "F35", "D28"],
          mdc: "p:p-i-i-ra-nfr-kA",
          transliteration: "pi͗pi͗ nfr-kꜢ-rꜤ",
          translation: "Pepi, perfect is the soul of Ra",
        },
      ],
    },
    nomen: {
      codes: ["Q3", "Q3", "M17", "M17"],
      mdc: "p:p-i-i",
      transliteration: "pi͗pi͗",
      translation: "Pepi",
      sources: [
        { text: "Passim" },
        { text: "Sethe, Die Altaegyptischen Pyramidentexte nach den Papierabdrucken und Photographien des Berliner Museums, I" },
      ],
      variants: [
        {
          codes: ["G39", "N5", "Q3", "Q3", "M17", "M17"],
          mdc: "zA&ra-p:p-i-i",
          transliteration: "zꜢ-rꜤ-pi͗pi͗",
          translation: "Son of Ra, Pepi",
          sources: [
            { text: "Urkunden des Ägyptische Alterthums , I, 114" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 64-65, 5:E2" },
          ],
        },
        {
          codes: ["Q3", "Q3", "M17", "M17"],
          mdc: "p-p-i-i",
          transliteration: "pi͗pi͗",
        },
      ],
    },
  },

  "nemtiemsaf-ii": {
    nomen: {
      codes: ["G7A", "G17", "V18", "I9"],
      mdc: "G7A-m-V18:f",
      transliteration: "nmty-m-sꜢf",
      translation: "Nemty is his protection",
    },
  },

  netjerikara: {
    prenomen: {
      codes: ["N5", "R8", "D28"],
      mdc: "ra-nTr-kA",
      transliteration: "nṯri͗-kꜢ-rꜤ",
      translation: "The divine one of the ka of Ra",
      variants: [
        {
          codes: ["N35", "X1", "Z5", "M17", "N29", "D21", "X1", "Z4", "G7", "G7", "G39", "Z1", "Q3", "X1", "V28"],
          mdc: "n:t*Z5-i-q:r-t:y-G7-G7-zA-Z1-p:t-H",
          transliteration: "ni͗t-i͗ḳr-ti͗ zꜢ-ptḥ",
          translation: "Neith is excellent, born of Ptah?",
        },
      ],
    },
  },

  menkara: {
    prenomen: {
      codes: ["N5", "Y5", "N35", "D28"],
      mdc: "ra-mn:n-kA",
      transliteration: "mn-kꜢ-rꜤ",
      translation: "The established one of the ka of Ra",
    },
  },

  "neferkara-ii": {
    prenomen: {
      codes: ["N5", "F35", "D28"],
      mdc: "ra-nfr-kA",
      transliteration: "nfr-kꜢ-rꜤ",
      translation: "The perfect one of the ka of Ra",
    },
  },

  "neferkara-neby": {
    prenomen: {
      codes: ["N5", "F35", "D28", "V30", "D58", "M17", "M17"],
      mdc: "ra-nfr-kA-nb-b-i-i",
      transliteration: "nfr-kꜢ-rꜤ nb-i͗i͗",
      translation: "The perfect one of the ka of Ra, who belongs to (his) lord",
    },
  },

  "djedkara-shemai": {
    prenomen: {
      codes: ["N5", "R11", "D28", "U4", "A33"],
      mdc: "ra-Dd-kA-U4-A33",
      transliteration: "ḏd-kꜢ-rꜤ-šmꜢi͗",
      translation: "The enduring one of the ka of Ra, the nomad",
    },
  },

  "neferkara-khendu": {
    prenomen: {
      codes: ["N5", "F35", "D28", "Aa1", "N35", "D46", "G43", "D56"],
      mdc: "ra-nfr-kA-x:n:d-w-D56",
      transliteration: "nfr-kꜢ-rꜤ ḫndw",
      translation: "The perfect one of the ka of Ra, the wanderer",
    },
  },

  merenhor: {
    prenomen: {
      codes: ["G5", "U7", "D21", "N35"],
      mdc: "G5-U7:r:n",
      transliteration: "mr-n-ḥr",
      translation: "Beloved of Horus",
    },
  },

  "neferkamin-i": {
    prenomen: {
      codes: ["R22", "F35", "D28"],
      mdc: "R22-nfr-kA",
      transliteration: "nfr-kꜢ-mnw",
      translation: "The perfect one of the ka of Min",
      sources: [
        { text: "Gold plaque, British Museum EA 8444 (possibly a modern forgery?)" },
      ],
      variants: [
        {
          codes: ["O34", "F35", "D28"],
          mdc: "z-nfr-kA",
          transliteration: "s-nfr-kꜢ",
          sources: [
            { text: "Abydos Canon no. 47" },
            { text: "Sign R22 might have been misread as a \"s\", O34 (see 1)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 66-67, 8:T1" },
          ],
        },
        {
          codes: ["S29", "F35", "D28"],
          mdc: "s-nfr-kA",
          transliteration: "s-nfr-kꜢ",
        },
      ],
    },
  },

  nikara: {
    prenomen: {
      codes: ["N5", "N35", "D28"],
      mdc: "ra:n-kA",
      transliteration: "ni͗-kꜢ-rꜤ",
      translation: "Who belongs to the Ka of Ra",
    },
  },

  "neferkara-tereru": {
    prenomen: {
      codes: ["N5", "F35", "D28", "X1", "D21", "D21", "E23"],
      mdc: "N5-F35-D28-X1:D21:D21-E23",
      transliteration: "nfr-kꜢ-rꜤ tr-r-rw",
      translation: "The perfect one of the ka of Ra, the respected one?",
    },
  },

  neferkahor: {
    prenomen: {
      codes: ["G5", "F35", "D28"],
      mdc: "G5-nfr-kA",
      transliteration: "nfr-kꜢ-ḥr",
      translation: "The perfect one of the ka of Horus",
    },
  },

  "neferkara-pepiseneb": {
    prenomen: {
      codes: ["N5", "F35", "D28", "Q3", "Q3", "M17", "M17", "S29", "N35", "D58"],
      mdc: "ra-nfr-kA-p:p-i-i-s-n:b",
      transliteration: "nfr-kꜢ-rꜤ pi-pi-snb",
      translation: "The perfect one of the ka of Ra, Pepi is healthy",
      variants: [
        {
          codes: ["F35", "D28", "Z1", "G7", "A17", "G7", "S29", "N35", "D58", "A1"],
          mdc: "nfr-kA-Z1-G7-A17-G7-s-n:b-A1",
          transliteration: "nfr-kꜢ-ẖrd-snb",
          translation: "The perfect one of the ka (of Ra), the child is healthy",
        },
      ],
    },
  },

  "neferkamin-anu": {
    prenomen: {
      codes: ["O34", "F35", "D28", "D36", "N35", "W24", "G43"],
      mdc: "O34:F35*D28-D36:N35-W24-G43",
      transliteration: "nfr-kꜢ-mnw Ꜥ-nw",
      translation: "The perfect one of the ka of Min, the beautiful",
      sources: [
        { text: "Abydos Canon no. 52" },
        { text: "The reading of O34 (s) can replace R22 (mnw) for the god Min." },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 68-69, 13:T+E" },
      ],
      variants: [
        {
          codes: ["F35", "I9", "D21", "G7"],
          mdc: "F35-I9:D21-G7",
          transliteration: "nfr",
          translation: "The perfect one?",
        },
      ],
    },
  },

  "qakara-ibi": {
    prenomen: {
      codes: ["N5", "D115", "D28"],
      mdc: "N5-D115-D28",
      transliteration: "ḳꜢ-kꜢ-rꜤ",
      translation: "The exalted one of the ka of Ra",
      sources: [
        { text: "Jéquier, La pyramide d'Aba, Passim cf. especially 20ff." },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 68-69, 14:T1" },
      ],
      variants: [
        {
          codes: ["N5", "A28", "D28", "Z2"],
          mdc: "N5-A28-D28:Z2",
          transliteration: "ḳꜢ-kꜢw-rꜤ",
          translation: "The exalted one of the ka of Ra",
        },
      ],
    },
    nomen: {
      codes: ["M17", "D58", "M17"],
      mdc: "M17-D58-M17",
      transliteration: "i͗-b-i͗",
      translation: "The kid",
      sources: [
        { text: "Jéquier, La pyramide d'Aba, Passim" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 68-69, 14:E1" },
      ],
    },
  },

  neferkaura: {
    prenomen: {
      codes: ["N5", "F35", "D28", "Z2"],
      mdc: "ra-nfr-kA:Z2",
      transliteration: "nfr-kꜢw-rꜤ",
      translation: "The perfect one of the kas of Ra",
      sources: [
        { text: "Abydos Canon no. 54" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 68-69, 15:T" },
      ],
    },
  },

  neferkauhor: {
    horus: {
      codes: ["R8", "G30"],
      mdc: "R8-G30",
      transliteration: "nṯr-bꜢw",
      translation: "Divine might",
    },
    prenomen: {
      codes: ["G5", "F35", "D28", "Z2"],
      mdc: "G5-F35-D28:Z2",
      transliteration: "nfr-kꜢw-hr",
      translation: "Perfect are the Kas of Horus",
      sources: [
        { text: "Abydos Canon no. 55" },
        { text: "Urkunden des Ägyptische Alterthums , I, 298" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). VIII, 16 T" },
      ],
      variants: [
        {
          codes: ["G5", "F35", "D28", "D28", "D28"],
          mdc: "G5-F35-D28:D28*D28",
          transliteration: "nfr-kꜢw-ḥr",
          sources: [
            { text: "Coptos decrees" },
            { text: "Urkunden des Ägyptische Alterthums . I. 296" },
          ],
        },
      ],
    },
    nomen: {
      codes: ["E99", "Aa1", "G43", "Z1", "G43"],
      mdc: "E99-Aa1:G43-Z1:G43",
      transliteration: "ḫwi͗-wi͗-ḥpw",
      translation: "Hapi protects me",
    },
  },

  "neferirkara-ii": {
    horus: {
      codes: ["Aa6", "F34", "N18", "N18"],
      mdc: "Aa6-ib:N18:N18",
      transliteration: "dmḏ-i͗b-tꜢwi͗",
      translation: "Who has united the will of the Two Lands",
    },
    prenomen: {
      codes: ["N5", "F35", "D4", "D28"],
      mdc: "ra-nfr-ir-kA",
      transliteration: "nfr-i͗r-kꜢ-rꜤ",
      sources: [
        { text: "Abydos Canon no. 56" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 68-69, 17:T" },
      ],
    },
  },

  "meribra-khety-i": {
    horus: {
      codes: ["U7", "F34", "M17", "M17", "N17", "N17"],
      mdc: "U7:F34-M17-M17-N17:N17",
      transliteration: "mri͗-i͗b-tꜢwi͗",
      translation: "Beloved by the heart of the Two Lands",
      sources: [
        { text: "Ebony wand (Cairo Museum JE 42835)" },
        { text: "ASAE , 10, 185; 11, 47-48" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 74-75, e:H1" },
      ],
    },
    nebty: {
      codes: ["U7", "M17", "M17", "F34", "N17", "N17"],
      mdc: "U7:M17*M17-F34:N17:N17",
      transliteration: "mri͗-i͗b-tꜢwi͗",
      translation: "Beloved by the heart of the Two Lands",
      sources: [
        { text: "Ebony wand (Cairo Museum JE 42835)" },
        { text: "ASAE , 10, 185" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 74-75, e:N" },
      ],
    },
    golden: {
      codes: ["W11", "X1", "G8"],
      mdc: "W11:X1-G8",
      transliteration: "nst-t-nbw",
    },
    prenomen: {
      codes: ["N5", "U6", "M17", "M17", "F34"],
      mdc: "N5-U6-M17-M17-F34",
      transliteration: "mri͗-ib-rꜤ",
      translation: "Beloved by the heart of Ra",
      sources: [
        { text: "Ebony wand (Cairo Museum JE 42835)" },
        { text: "ASAE , 10, 185" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 74-75, e:T1" },
      ],
    },
    nomen: {
      codes: ["F32", "X1", "M17", "M17"],
      mdc: "F32:X1-M17-M17",
      transliteration: "ḫty",
      translation: "The one belonging to the divine Ennead",
      sources: [
        { text: "Copper brazier, Louvre E10501" },
        { text: "Proceedings of the Society of Biblical Archaeology, XIII, 429-431" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 74-75, e:E1" },
      ],
      variants: [
        {
          codes: ["G39", "N5", "F32", "X1", "M17", "M17"],
          mdc: "G39&N5-F32:X1-M17-M17",
          transliteration: "sꜢ-rꜤ-ḫty",
          translation: "The one belonging to the divine Ennead",
        },
      ],
    },
  },

  "neferkara-iii": {
    prenomen: {
      codes: ["N5", "F35", "D28", "Z1", "G7"],
      mdc: "ra-nfr-kA-Z1-G7",
      transliteration: "nfr-kꜢ-rꜤ",
      translation: "The perfect one of the ka of Ra",
    },
  },

  "wahkara-khety-ii": {
    prenomen: {
      codes: ["N5", "V29", "D28"],
      mdc: "ra-wAH-kA",
      transliteration: "wꜢh-kꜢ-rꜤ",
      translation: "The enduring one of the ka of Ra",
    },
    nomen: {
      codes: ["F32", "X1", "M17", "M17"],
      mdc: "X:t-i-i",
      transliteration: "ḫty",
      translation: "The one belonging to the divine Ennead",
      sources: [
        { text: "Sarcophagus of Nefri (Cairo Museum JE 32869 , CG 28088)" },
        { text: "RecTrav , XXIV, 90-92" },
      ],
      variants: [
        {
          codes: ["F32", "X1", "A50", "U33", "M17", "G7"],
          mdc: "X:t-Sps-U33-i-G7-//",
          transliteration: "ḫt-i͗ti͗",
        },
      ],
    },
  },

  senen: {
    prenomen: {
      codes: ["S29", "A53", "V28", "G1", "D36"],
      mdc: "S29-//-A53-V28-G1-.:D36#12-//",
      transliteration: "s...{twt-hꜢ}",
    },
  },

  "neferkara-khety-iii": {
    nomen: {
      codes: ["F32", "X1", "F35", "D28"],
      mdc: "X:t-//-// ra-nfr-kA",
      transliteration: "ḫt[y] nfr-kꜢ-rꜤ",
      translation: "Khety, the perfect one of the ka of Ra",
    },
  },

  "nebkaura-khety-iv": {
    prenomen: {
      codes: ["N5", "V30", "D28", "Z2"],
      mdc: "N5:V30-D28:Z2",
      transliteration: "nb-kꜢw-rꜤ",
      translation: "Lord of the Ka is Ra",
      sources: [
        { text: "Papyrus Berlin 3025, (The Eloquent Peasant) fragment E, column 72-73" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 74-75, d:T2" },
      ],
      variants: [
        {
          codes: ["M23", "X1", "L2", "X1", "F32", "X1", "M17", "M17", "V30", "D28", "D28", "D28", "S34", "I10", "X1", "N17"],
          mdc: "M23:X1-L2:X1-F32:X1-M17-M17-V30-D28:D28*D28-S34-I10&&&(X1:N17)",
          transliteration: "nsw-bi͗ti͗ ḫty-nb-kꜢw-rꜤ Ꜥnḫ-ḏt",
        },
      ],
    },
  },

  merikara: {
    prenomen: {
      codes: ["N5", "U7", "M17", "M17", "D28"],
      mdc: "N5:U7-M17-M17-D28",
      transliteration: "mri͗-kꜢ-rꜤ",
      translation: "The beloved one of the ka of Ra",
      sources: [
        { text: "Proceedings of the Society of Biblical Archaeology, XIII, 430" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 74-75, f:T1" },
      ],
    },
  },

  "mentuhotep-i": {
    horus: {
      codes: ["D1", "Q3", "D36", "Z1"],
      mdc: "tp*p:a*1",
      transliteration: "tp-i͗Ꜥ",
      translation: "The ancestor",
    },
    nomen: {
      codes: ["Y5", "N35"],
      mdc: "mn:n:h/-//",
      transliteration: "mn..",
      sources: [
        { text: "The Horus name (above) is visible before the cartouche." },
        { text: "Urkunden des Ägyptische Alterthums IV, 608 (II.4)" },
      ],
      variants: [
        {
          codes: ["M17", "X1", "Z1", "I9", "R8A", "Y5", "N35", "V13", "G43", "R4", "X1", "Q3", "O29v", "S29", "F29", "X1", "X1", "V30", "X1", "U23B", "D58", "N25", "O49", "U6", "M17", "M17"],
          mdc: "M17-X1*Z1:I9-R8A-Y5:N35:V13-G43-R4:X1*Q3-O29v-S29-F29-X1:X1-V30:X1-U23B-D58-N25:O49-U6-M17-M17",
          transliteration: "i͗t-nṯrw mnṯw-ḥtp(w) ꜤꜢ-mri͗i͗-sṯt-nbt-Ꜣbw",
          translation: "The God's father Mentuhotep the great, beloved of Satet, lady of Elephantine",
        },
      ],
    },
  },

  "intef-i": {
    horus: {
      codes: ["S29", "O4", "D21", "N17", "N17"],
      mdc: "s-h-r:N17:N17",
      transliteration: "s-hr-tꜢ.wy",
      translation: "Maker of peace in the Two Lands",
    },
    nomen: {
      codes: ["W25", "N35", "X1", "I9"],
      mdc: "ini-n:t:f",
      transliteration: "i͗n-t-f",
      translation: "The one whom his father has brought forth",
      sources: [
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 76-77, 2:E2" },
      ],
      variants: [
        {
          codes: ["G39", "N5", "W25", "N35", "X1", "I9"],
          mdc: "zA&ra-ini-n:t:f",
          transliteration: "zꜢ-rꜤ i͗ni͗-i͗t.f",
          translation: "Intef, son of Ra",
        },
      ],
    },
  },

  "intef-ii": {
    horus: {
      codes: ["V29", "S34"],
      mdc: "wAH-anx",
      transliteration: "wꜢh-Ꜥnḫ",
      translation: "Strong in life",
    },
    prenomen: {
      codes: ["G39", "N5", "W25", "N35", "X1", "I9"],
      mdc: "zA&ra-ini-n:t:f",
      transliteration: "zꜢ-rꜤ-i͗ni͗-i͗t.f",
    },
    nomen: {
      codes: ["G39", "N5", "W25", "O29v", "N35", "X1", "I9"],
      mdc: "zA&ra-ini-O29v-n:t:f",
      transliteration: "i͗ni͗t.f ꜤꜢ",
      translation: "Intef the great, son of Ra",
      sources: [
        { text: "Bibliotheca Aegyptica, X, §16-20" },
        { text: "Stele of King Intef II, at the Metropolitan Museum of Art in New York (13.182.3)" },
      ],
      variants: [
        {
          codes: ["G39", "N5", "W25", "O29v", "X1", "I9"],
          mdc: "zA&ra-ini-O29v-t:f",
          transliteration: "i͗ni͗-i͗t.f ꜤꜢ",
          translation: "Intef the great, son of Ra",
          sources: [
            { text: "Bibliotheca Aegyptica, X, §16, 11" },
          ],
        },
        {
          codes: ["G39", "N5", "W25", "N35", "X1", "I9", "O29v"],
          mdc: "zA&ra-ini-n:t:f-O29v",
          transliteration: "i͗ni͗-i͗t.f ꜤꜢ",
          translation: "Intef the great, son of Ra",
          sources: [
            { text: "Bibliotheca Aegyptica, X, §17, 13" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 76-77, 3:E1" },
          ],
        },
        {
          codes: ["G39", "N5", "W25", "O29v"],
          mdc: "zA&ra-ini-O29v",
          transliteration: "i͗ni͗ ꜤꜢ",
          translation: "Ini the great",
        },
      ],
    },
  },

  "intef-iii": {
    horus: {
      codes: ["N35", "M3", "X1", "V30", "D1", "Z1", "F35"],
      mdc: "n:xt:t-nb:tp*Z1-nfr",
      transliteration: "nḫt-nb-tp-nfr",
      translation: "The possessor of a perfect beginning is victorious",
      sources: [
        { text: "Bibliotheca Aegyptica, X, §20.13" },
        { text: "Limestone stela of Tjetji in British Museum, EA614 (row 13)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 76-77, 4:H1" },
      ],
      variants: [
        {
          codes: ["V30", "D1", "Z1", "F35"],
          mdc: "nb:tp*Z1-nfr",
          transliteration: "nb-tp-nfr",
          translation: "The possessor of a perfect beginning?",
        },
      ],
    },
    nomen: {
      codes: ["G39", "N5", "W25", "N35", "X1", "I9"],
      mdc: "zA-ra-ini-n:t:f",
      transliteration: "zꜢrꜤ-i͗ni͗-i͗t.f",
      translation: "Intef, son of Ra",
    },
  },

  "mentuhotep-ii": {
    horus: {
      codes: ["S29", "S34", "F34", "N19"],
      mdc: "s-anx-ib:N19",
      transliteration: "s-Ꜥnḫ-i͗b-tꜢwi͗",
      translation: "The one who invigorates the heart of the Two lands",
      sources: [
        { text: "First part of reign" },
        { text: "British Museum, stela EA1203" },
        { text: "Bibliotheca Aegyptica, X, §23.3" },
        { text: "Hieroglyphic Texts in the British Museum, I, plate 53" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 78-79, 5:H1" },
      ],
      variants: [
        {
          codes: ["R8", "S2"],
          mdc: "nTr-S2",
          transliteration: "nṯr-hḏt",
          translation: "The divine one of the white crown",
          sources: [
            { text: "Second part of reign" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 150b" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 78-79, 5:H3" },
          ],
        },
        {
          codes: ["F36", "N19"],
          mdc: "zmA-N19",
          transliteration: "smꜢ-tꜢwi͗",
          translation: "The uniter of the Two Lands",
        },
      ],
    },
    nebty: {
      codes: ["R8", "S2"],
      mdc: "nTr-S2",
      transliteration: "nṯr-hḏt",
      translation: "The divine one of the White Crown",
      sources: [
        { text: "Second part of reign" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 150b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 78-79, 5:N1" },
      ],
      variants: [
        {
          codes: ["F36", "N19"],
          mdc: "zmA-N19",
          transliteration: "smꜢ-tꜢwi͗",
          translation: "The uniter of the Two Lands",
        },
      ],
    },
    golden: {
      codes: ["N29", "G5", "S12", "H6", "H6"],
      mdc: "q*G5:nbw-Sw-Sw",
      transliteration: "bi͗k-nbw ḳꜢ-šwti͗",
      translation: "Lofty of plumes",
    },
    prenomen: {
      codes: ["N5", "V30", "P8"],
      mdc: "ra:nb-P8",
      transliteration: "nb-ḥꜢpt-rꜤ",
      translation: "The possessor of the rudder of Ra",
      sources: [
        { text: "Abydos Canon no. 57" },
        { text: "Karnak Canon no. 29" },
        { text: "Third part of reign" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 78-79, 5:T4" },
      ],
      variants: [
        {
          codes: ["N5", "V30", "Aa5", "G39", "N5", "Y5", "V13", "G43", "R4", "X1", "Q3"],
          mdc: "ra-nb:Aa5-zA&ra-mn:T-w-Htp:t*p",
          transliteration: "nb-ḥꜢpt-rꜤ zꜢ-rꜤ-mnṯw-ḥtp",
          translation: "The possessor of the rudder of Ra, son of Ra, Mentuhotep",
        },
      ],
    },
    nomen: {
      codes: ["Y5", "N35", "V13", "G43", "R4", "X1", "Q3"],
      mdc: "mn:n:T-w-Htp:t*p",
      transliteration: "mnṯw-ḥtp",
      translation: "Montu is satisfied",
      sources: [
        { text: "First part of reign" },
        { text: "British Museum, stela EA1203" },
        { text: "Bibliotheca Aegyptica, X, §23.3" },
        { text: "Hieroglyphic Texts in the British Museum, I, plate 53" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 78-79, 5:E1 (1)" },
      ],
      variants: [
        {
          codes: ["G39", "N5", "Y5", "N35", "V13", "G43", "R4", "X1", "Q3"],
          mdc: "zA&ra-mn:n:T-w-Htp:t*p",
          transliteration: "zꜢ-rꜤ-mnṯw-ḥtp",
          translation: "Mentuhotep, son of Ra",
        },
      ],
    },
  },

  "mentuhotep-iii": {
    horus: {
      codes: ["S29", "S34", "N17", "N17", "I9"],
      mdc: "s-anx-N17:N17:f",
      transliteration: "sꜤnḫ-tꜢwi͗.f",
      translation: "The one who invigorates the Two Lands",
    },
    nebty: {
      codes: ["S29", "S34", "N17", "N17", "I9"],
      mdc: "s-anx-N17:N17:f",
      transliteration: "sꜤnḫ-tꜢwi͗.f",
      translation: "The one who invigorates the Two Lands",
    },
    golden: {
      codes: ["R4", "G5", "S12"],
      mdc: "Htp*G5:nbw",
      transliteration: "bi͗k-nbw-ḥtp",
      translation: "The one who is satisfied",
      sources: [
        { text: "Bibliotheca Aegyptica, X, §34" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 80-81, 6:G1" },
      ],
      variants: [
        {
          codes: ["U22", "G5", "S12"],
          mdc: "mnx*G5:nbw",
          transliteration: "bik-nbw-mnḫ",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "S29", "S34", "D28"],
      mdc: "ra-s-anx-kA",
      transliteration: "s-Ꜥnḫ-kꜢ-rꜤ",
      translation: "The one whom the ka of Ra has sustained",
      sources: [
        { text: "Abydos Canon no. 58" },
        { text: "Saqqara Canon no. 14" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 80-81, 6:T1" },
      ],
      variants: [
        {
          codes: ["S29", "S34", "N35", "Aa1", "D28"],
          mdc: "s-anx-n:x-kA",
          transliteration: "s-Ꜥnḫ-kꜢ..",
          sources: [
            { text: "Turin King List 6.17" },
            { text: "Gardiner, The Royal Canon of Turin (1959) V:17" },
          ],
        },
        {
          codes: ["N5", "S29", "F35", "D28"],
          mdc: "ra-s-nfr-kA",
          transliteration: "s-nfr-kꜢ-rꜤ",
          translation: "The one whom the ka of Ra has made perfect",
        },
      ],
    },
    nomen: {
      codes: ["Y5", "N35", "V13", "G43", "R4", "X1", "Q3"],
      mdc: "mn:n:T-w-Htp:t*p",
      transliteration: "mnṯw-ḥtp",
      translation: "Montu is content",
    },
  },

  "mentuhotep-iv": {
    horus: {
      codes: ["V30", "N17", "N17"],
      mdc: "nb:N17:N17",
      transliteration: "nb-tꜢwi͗",
      translation: "The Lord of the Two Lands",
    },
    nebty: {
      codes: ["V30", "N17", "N17"],
      mdc: "nb:N17:N17",
      transliteration: "nb-tꜢwi͗",
      translation: "The Lord of the Two Lands",
    },
    golden: {
      codes: ["R8A", "S12"],
      mdc: "nTrw:nbw",
      transliteration: "nṯrw-nbw",
      translation: "The golden one of the Gods",
    },
    prenomen: {
      codes: ["N5", "V30", "N17", "N17"],
      mdc: "ra-nb:N17:N17",
      transliteration: "nb-tꜢwi͗-rꜤ",
      translation: "The lord of the Two Lands of Ra",
    },
    nomen: {
      codes: ["Y5", "N35", "V13", "G43", "R4", "X1", "Q3"],
      mdc: "mn:n:T-w-Htp:t*p",
      transliteration: "mnṯw-ḥtp",
      translation: "Montu is satisfied",
    },
  },

  "amenemhat-i": {
    horus: {
      codes: ["S29", "R4", "F34", "N17", "N17"],
      mdc: "s-Htp:ib:N17:N17",
      transliteration: "s-ḥtp-i͗b-tꜢwi͗",
      translation: "The one who has appeased the heart of the Two Lands",
      sources: [
        { text: "Early reign" },
        { text: "ZÄS , 92, plate 3" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 82-83, 1:H1" },
      ],
      variants: [
        {
          codes: ["F25", "F31", "X1", "G43"],
          mdc: "wHm-ms:t-w",
          transliteration: "wḥm-mswt",
          translation: "The one who has repeated births",
        },
      ],
    },
    nebty: {
      codes: ["S29", "R4", "F34", "N17", "N17"],
      mdc: "s-Htp:ib:N17:N17",
      transliteration: "s-ḥtp-ib-tꜢwi͗",
      translation: "The one who has appeased the heart of the Two Lands",
      sources: [
        { text: "Early reign" },
        { text: "ZÄS , 92, plate 3" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 82-83, 1: N1" },
      ],
      variants: [
        {
          codes: ["F25", "F31", "G43", "X1"],
          mdc: "wHm-ms-w&t",
          transliteration: "wḥm-mswt",
          translation: "The one who has repeated births",
        },
      ],
    },
    golden: {
      codes: ["F36", "G5", "S12"],
      mdc: "F36*G5:nbw",
      transliteration: "bi͗k-nbw-zmꜢ",
      translation: "The uniter",
      sources: [
        { text: "Early reign" },
        { text: "ZÄS , 92, plate 3" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 82-83, 1:G1" },
      ],
      variants: [
        {
          codes: ["F31", "G5", "S12"],
          mdc: "ms*G5:nbw",
          transliteration: "bik-nbw-ms",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "S29", "R4", "F34"],
      mdc: "ra-s-Htp:ib",
      transliteration: "s-ḥtp-ib-rꜤ",
      translation: "He who satisfies the heart of Ra",
      sources: [
        { text: "Benihassan Tomb 2" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 124 a28" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 82-83, 1:T1" },
      ],
      variants: [
        {
          codes: ["F34", "Z1"],
          mdc: "..p-ib-1",
          transliteration: "//-p-ib",
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "G17", "F4"],
      mdc: "i-mn:n-m-HAt",
      transliteration: "i͗mn-m-ḥꜢt",
      translation: "Amun is in the front",
      sources: [
        { text: "Early reign" },
        { text: "ZÄS , 92, plate 3" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 82-83, 1:E1" },
      ],
    },
  },

  "senusret-i": {
    horus: {
      codes: ["S34", "F31", "X1", "G43"],
      mdc: "anx-ms-t-w",
      transliteration: "Ꜥnḫ-mswt",
      translation: "Living of births",
      sources: [
        { text: "Heliopolis Obelisk" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 118h" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 82-83, 2:H2" },
      ],
    },
    nebty: {
      codes: ["S34", "F31", "X1", "G43"],
      mdc: "anx-ms-t-w",
      transliteration: "Ꜥnḫ-mswt",
      translation: "Living of births",
      sources: [
        { text: "Heliopolis Obelisk" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 118h" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 82-83, 2:N1" },
      ],
    },
    golden: {
      codes: ["S34", "F31", "X1", "G5", "S12"],
      mdc: "(anx*ms:t)*G5:nbw",
      transliteration: "Ꜥnḫ-mswt",
      translation: "Living of births",
      sources: [
        { text: "Heliopolis Obelisk" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 118h" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 82-83, 2:G1" },
      ],
    },
    prenomen: {
      codes: ["N5", "L1", "D28"],
      mdc: "ra-xpr-kA",
      transliteration: "ḫpr-kꜢ-rꜤ",
      translation: "The Ka of Ra is created",
      sources: [
        { text: "Abydos Canon no. 60" },
        { text: "Saqqara Canon no. 16" },
        { text: "Heliopolis Obelisk" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 118h" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 82-83, 2:T" },
      ],
      variants: [
        {
          codes: ["D28", "Z1"],
          mdc: "//-kA-Z1",
          transliteration: "//-kꜢ-//",
        },
      ],
    },
    nomen: {
      codes: ["F12", "S29", "D21", "X1", "O34", "N35"],
      mdc: "wsr-s-r:t-z:n",
      transliteration: "zn-wsrt",
      translation: "Man of Wosret",
    },
  },

  "amenemhat-ii": {
    horus: {
      codes: ["V28", "V31", "N35", "G17", "C10"],
      mdc: "H-k:n-m-C10",
      transliteration: "ḥkn-m-mꜢꜤt",
      translation: "Horus who delights in Maat",
      sources: [
        { text: "Funerary stele from Abydos (Cairo Museum, JE 12644, CG 20541)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 84-85, 3:H1" },
      ],
    },
    nebty: {
      codes: ["V28", "V31", "N35", "G17", "C10"],
      mdc: "H-k:n-m-C10",
      transliteration: "ḥkn-m-mꜢꜤt",
      translation: "He who delights in Maat",
      sources: [
        { text: "Funerary stele from Abydos (Cairo Museum, JE 12644, CG 20541)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 84-85, 3:N1" },
      ],
      variants: [
        {
          codes: ["V28", "V31", "N35", "G17", "U4", "X1"],
          mdc: "H-k:n-m-U4:t",
          transliteration: "ḥkn-mꜢꜤt",
          translation: "He who delights in Maat",
        },
      ],
    },
    golden: {
      codes: ["U1", "Aa11", "P8"],
      mdc: "U1:Aa11-P8",
      transliteration: "mꜢꜤt-ḫrw",
      translation: "True of voice",
      sources: [
        { text: "Funerary stele from Abydos (Cairo Museum, JE 12644, CG 20541)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 84-85, 3:G1" },
      ],
      variants: [
        {
          codes: ["P8", "G5", "S12"],
          mdc: "xrw*Aa11v*G5:nbw",
          transliteration: "mꜢꜤ(t)-ḫrw",
          translation: "True of voice",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "S12", "D28", "D28", "D28"],
      mdc: "ra:nbw-kA*kA:kA",
      transliteration: "nbw-kꜢw-rꜤ",
      translation: "Golden are the souls of Ra",
      sources: [
        { text: "Abydos Canon no. 61" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 123-124" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 84-85, 3:T" },
      ],
      variants: [
        {
          codes: ["N5", "S12", "D28"],
          mdc: "ra-nbw-kA",
          transliteration: "nbw-kꜢ-rꜤ",
          translation: "The soul of Ra is golden",
          sources: [
            { text: "Saqqara Canon no. 17" },
            { text: "Kitchen, Ramesside Inscriptions , III, 481 (17)" },
          ],
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "G17", "F4", "X1"],
      mdc: "i-mn:n-m-HAt:t",
      transliteration: "i͗mn-m-ḥꜢt",
      translation: "Amun is in front",
      sources: [
        { text: "Niche-stela from Abydos (CG 20531)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 84-85, 3:E2" },
      ],
    },
  },

  "senusret-ii": {
    horus: {
      codes: ["S29", "T32", "G43", "N17", "N17"],
      mdc: "s-T32-w-N17:N17",
      transliteration: "sšmw-tꜢwi͗",
      translation: "He who leads the Two Lands",
    },
    nebty: {
      codes: ["S29", "N28", "D36", "Y1", "Aa11", "D36", "X1", "H6"],
      mdc: "s-xa:a:Y1-mAa:a:t-Sw",
      transliteration: "sḫꜤi͗-mꜢꜤt",
      translation: "He who causes Maat to appear",
      sources: [
        { text: "Tomb of Khnumhotep II (Beni Hassan 3)" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 125 (a129)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 84-85, 4:N1" },
      ],
    },
    golden: {
      codes: ["R8A", "R4", "G5", "S12"],
      mdc: "(nTrw:Htp)*G5:nbw",
      transliteration: "ḥtp-nṯrw",
      translation: "He who appeases the gods",
    },
    prenomen: {
      codes: ["N5", "N28", "L1"],
      mdc: "ra-xa-xpr",
      transliteration: "ḫꜤ-ḫpr-rꜤ",
      translation: "The Ka of Ra comes into being",
      sources: [
        { text: "Abydos Canon no. 62" },
        { text: "Saqqara Canon no. 18" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 84-85, 4:T1" },
      ],
    },
    nomen: {
      codes: ["F12", "S29", "D21", "X1", "O34", "N35"],
      mdc: "wsr-s-r:t-z:n",
      transliteration: "s-n-wsrt",
      translation: "Man of Wosret",
    },
  },

  "senusret-iii": {
    horus: {
      codes: ["R8", "L1", "G43"],
      mdc: "nTr-xpr-w",
      transliteration: "nṯr-ḫprw",
      translation: "Horus, divine of form",
    },
    nebty: {
      codes: ["R8", "F31", "G43", "X1"],
      mdc: "nTr-ms-w-t",
      transliteration: "nṯri͗-mswt",
      translation: "The Two Ladies, divine of birth",
    },
    golden: {
      codes: ["L1", "G5", "S12"],
      mdc: "xpr*G5:nbw",
      transliteration: "ḫpr",
      translation: "The golden Horus has been created",
    },
    prenomen: {
      codes: ["N5", "N28", "D28", "D28", "D28"],
      mdc: "ra-xa-kA*kA:kA",
      transliteration: "ḫꜤ-kꜢw-rꜤ",
      translation: "The Kas of Ra have appeared",
      sources: [
        { text: "Abydos Canon no. 63" },
        { text: "Stela of Ikhernofret, (Berlin, ÄM 1204)" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 135h" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 84-85, 5:T1" },
      ],
      variants: [
        {
          codes: ["N5", "N28", "D28", "Z2"],
          mdc: "ra:xa-kA:Z2",
          transliteration: "ḫꜤ-kꜤw-rꜤ",
          translation: "The Kas of Ra have appeared",
          sources: [
            { text: "Griffith, Hieratic Papyri from Kahun and Gurob (1898), pl. 21" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 84-85, 5:T3" },
          ],
        },
        {
          codes: ["N5", "N28", "D28"],
          mdc: "ra-xa-kA",
          transliteration: "ḫꜤ-kꜢ-rꜤ",
          translation: "The Ka of Ra has appeared",
          sources: [
            { text: "Saqqara Canon no. 19" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 84-85, 5:T4" },
          ],
        },
      ],
    },
    nomen: {
      codes: ["F12", "S29", "D21", "X1", "O34", "N35"],
      mdc: "wsr-s-r:t:z:n",
      transliteration: "s-n-wsrt",
      translation: "Man of Wosret",
    },
  },

  "amenemhat-iii": {
    horus: {
      codes: ["O29v", "G30"],
      mdc: "aAv:G30",
      transliteration: "ꜤꜢ-bꜢw",
      translation: "Great of might",
      sources: [
        { text: "Stela of Sehotepibra (CG 20538 recto)" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 140g" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 86-87, 6:H1" },
      ],
      variants: [
        {
          codes: ["O29v", "G30"],
          mdc: "O29v:G30",
          transliteration: "",
        },
      ],
    },
    nebty: {
      codes: ["V15", "F44", "N17", "N17"],
      mdc: "V15:F44-N17:N17",
      transliteration: "i͗ṯi͗-i͗wꜢt-tꜢwi͗",
      translation: "He who inherited the Two Lands",
      sources: [
        { text: "Funerary stela CG 20536" },
      ],
      variants: [
        {
          codes: ["V15", "X1", "E9", "D36", "X1", "Z2", "N31"],
          mdc: "iTi:t-E9:a-t:Z2:N31",
          transliteration: "i͗ṯi͗-i͗wꜢt-ḥr",
          translation: "He who inherited the Two Lands",
        },
      ],
    },
    golden: {
      codes: ["G5", "V29", "S34", "S12"],
      mdc: "G5-wAH*anx:nbw",
      transliteration: "wꜤḥ-Ꜥnḫ",
      translation: "Enduring of life",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 138g" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 86-87, 6:G3" },
      ],
      variants: [
        {
          codes: ["V29", "S34", "G5", "S12"],
          mdc: "wAH*anx*G5:nbw",
          transliteration: "wꜢḥ-Ꜥnḫ",
          translation: "Enduring of life",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "N35", "C10"],
      mdc: "ra:n-mAat",
      transliteration: "ni͗-mꜢꜤt-rꜤ",
      translation: "He who belongs to the Maat of Ra",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 138g" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 86-87, 6:T1" },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "G17", "F4", "X1"],
      mdc: "i-mn:n-m-HAt:t",
      transliteration: "i͗mn-m-ḥꜢt",
      translation: "Amun is in front",
    },
  },

  "amenemhat-iv": {
    horus: {
      codes: ["L1", "L1", "Z3", "G43"],
      mdc: "xpr-xpr-Z3-w",
      transliteration: "ḫpr-ḫprw",
      translation: "Everlasting of manifestations",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 140o" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 86-87, 7:H1" },
      ],
    },
    nebty: {
      codes: ["S29", "V28", "D58", "W4", "N17", "N17"],
      mdc: "s-H-b-W4:N17:N17",
      transliteration: "s-ḥꜢb-tꜢwi͗",
      translation: "He who makes the Two Lands festive",
    },
    golden: {
      codes: ["S42", "G5", "S12", "R8A"],
      mdc: "sxm*G5:nbw-nTrw",
      transliteration: "sḫm-nṯrw",
      translation: "The golden Horus, powerful one of the gods",
    },
    prenomen: {
      codes: ["N5", "U4", "D36", "P8", "G43"],
      mdc: "ra-U4:a-P8-w",
      transliteration: "mꜢꜤ-ḫrw-rꜤ",
      translation: "The righteous one of Ra",
      sources: [
        { text: "Abydos Canon no. 65" },
        { text: "Saqqara Canon no. 21" },
        { text: "Karnak Canon no. 21" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 86-87, 7:T1" },
      ],
      variants: [
        {
          codes: ["N5", "U4", "D36", "P8", "Z7", "A17"],
          mdc: "ra-U4:a-P8-W-A17",
          transliteration: "mꜢꜤ-ḫrw-rꜤ",
          translation: "The voice of Ra is true",
          sources: [
            { text: "Turin King List 7.1" },
            { text: "Gardiner, The Royal Canon of Turin (1959) VI:1" },
          ],
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "G17", "F4", "X1"],
      mdc: "i-mn:n-m-HAt:t",
      transliteration: "i͗mn-m-ḥꜢt",
      translation: "Amun is in front",
    },
  },

  neferusobek: {
    horus: {
      codes: ["N5", "Z1", "U7", "X1"],
      mdc: "ra:Z1-U7:t",
      transliteration: "mri-t-rꜤ",
      translation: "Beloved of Ra",
      sources: [
        { text: "Petrie, A history of Egypt, I, p. 197 (British Museum EA16581)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 86-87, 8:H2" },
      ],
      variants: [
        {
          codes: ["N5", "U6", "M17", "M17", "X1"],
          mdc: "ra-mr-i-i-t",
          transliteration: "mry.t-rꜤ",
          translation: "Beloved of Ra",
        },
      ],
    },
    nebty: {
      codes: ["G39", "X1", "S42", "V30", "X1", "N17", "N17"],
      mdc: "zA&t-sxm-nb:t:N17:N17",
      transliteration: "sꜢt-sḫm-nbt-tꜢwi͗",
      translation: "Daughter of the powerful one, mistress of the Two Lands",
    },
    golden: {
      codes: ["R11", "X1", "N28", "G5", "S12"],
      mdc: "Dd*(t:xa)*G5:nbw",
      transliteration: "ḏdt-ḫꜤw",
      translation: "Established of crowns",
    },
    prenomen: {
      codes: ["N5", "I4", "D28"],
      mdc: "ra-I4-kA",
      transliteration: "sbk-kꜢ-rꜤ",
      translation: "Sobek is the Ka of Ra",
    },
    nomen: {
      codes: ["N5", "I4", "F35", "G43"],
      mdc: "ra-I4-nfr-w",
      transliteration: "sbk-nfrw-rꜤ",
      translation: "The beauty of Sobek and Ra",
      sources: [
        { text: "Urkunden des Ägyptische Alterthums , IV, 609 (III 5)" },
        { text: "Traces of neferu visible on early drawings." },
      ],
      variants: [
        {
          codes: ["N5", "F35", "F35", "F35", "I3", "G7"],
          mdc: "ra-F35-F35-F35-I3-G7",
          transliteration: "nfrw-sbk-rꜤ",
          translation: "The beauty of Sobek and Ra",
          sources: [
            { text: "Turin King List 7.2" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 86-87, 8:E5" },
            { text: "Gardiner, The Royal Canon of Turin (1959) VI:2" },
          ],
        },
        {
          codes: ["N5", "I4", "F35", "F35", "F35", "H8", "X1"],
          mdc: "N5-I4-F35-F35-F35-H8:X1",
          transliteration: "nfrw-sbk",
          translation: "The beauty of Sobek",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 140e-f" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 86-87, 8:E4" },
          ],
        },
        {
          codes: ["I5", "O200", "O200", "F35", "F35", "F35"],
          mdc: "I5-O200*O200-F35-F35-F35",
          transliteration: "nfrw-sbk",
          translation: "The beauty of Sobek",
          sources: [
            { text: "Petrie, A history of Egypt, I, p. 197 (Cylinder seal EA16581)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 86-87, 8:E3" },
          ],
        },
        {
          codes: ["F35", "F35", "F35", "I3"],
          mdc: "F35-F35-F35-I3",
          transliteration: "nfrw-sbk",
          translation: "The beauty of Sobek",
        },
      ],
    },
  },

  "sobekhotep-i": {
    horus: {
      codes: ["Y5", "N35", "Aa1", "U22"],
      mdc: "mn:n-x:mnx-//",
      transliteration: "mnḫ..",
      translation: "Potent of...",
    },
    golden: {
      codes: ["S34", "Z3", "R8"],
      mdc: "anx-Z3-nTr",
      transliteration: "Ꜥnḫ-nṯrw",
      translation: "The (very) life of the Gods",
    },
    prenomen: {
      codes: ["N5", "Y8", "D43", "N17", "N17"],
      mdc: "ra-Y8-D43:N17:N17",
      transliteration: "sḫm-rꜤ ḫwi͗-tꜢwi͗",
      translation: "The powerful one of Ra is the protection of the Two Lands",
      variants: [
        {
          codes: ["N5", "Y8", "D43", "N17", "N17", "I4", "R4", "X1", "Q3"],
          mdc: "ra-Y8-D43:N17:N17-sbk-Htp:t*p",
          transliteration: "sḫm-rꜤ ḫwi͗-tꜢwi͗ sbk-ḥtp(w)",
          translation: "Ra is the protection of the Two Lands",
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "G17", "F4", "X1", "I4", "R4", "X1", "Q3"],
      mdc: "i-mn:n-m-HAt:t-I4-Htp:t*p",
      transliteration: "i͗mn--m-ḥꜢt sbk-ḥtp",
      translation: "Amenemhat's son, Sobekhotep",
    },
  },

  "neferhotep-i": {
    horus: {
      codes: ["U17", "N17", "N17"],
      mdc: "U17:N17:N17",
      transliteration: "grg-tꜢwi͗",
      translation: "The founder of the Two Lands",
      sources: [
        { text: "Mariette, Abydos, II, plate 28" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 96-97, 22:H1" },
      ],
    },
    nebty: {
      codes: ["F13", "Q3", "Z9", "U5", "D36", "X1", "Y1", "H6B"],
      mdc: "F13:p*Z9-U5:a-t:Y1-H6B",
      transliteration: "wp-mꜢꜤt",
      translation: "The one who has inaugurated Maat",
    },
    golden: {
      codes: ["Y5", "N35", "U7", "D21", "G43", "X1"],
      mdc: "mn:n-U7:r-w&t",
      transliteration: "mn-mrwt",
      translation: "Enduring of love",
    },
    prenomen: {
      codes: ["N5", "N28", "D36", "Y8"],
      mdc: "ra-xa:a-Y8",
      transliteration: "ḫꜤi͗-sḫm-rꜤ",
      translation: "The (very) appearance of the power of Ra",
      sources: [
        { text: "Mariette, Abydos, II, plate 28" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 96-97, 22:T" },
      ],
      variants: [
        {
          codes: ["N5", "N28", "S42"],
          mdc: "ra-xa-sxm",
          transliteration: "ḫꜤ-sḫm-rꜤ",
          translation: "The (very) appearance of the power of Ra",
        },
        {
          codes: ["N5", "N28", "D36", "S42", "F35", "R4", "X1", "Q3"],
          mdc: "ra-xa:a-//-sxm-nfr-Htp:t-p",
          transliteration: "ḫꜤi͗-sḫm-rꜤ nfr-ḥtp",
        },
        {
          codes: ["N5", "N28", "Y8", "F35", "R4", "X1", "Q3"],
          mdc: "ra:xa-Y8-nfr-Htp:t*p",
          transliteration: "ḫꜤ-sḫm-rꜤ nfr-ḥtp",
        },
      ],
    },
    nomen: {
      codes: ["F35", "R4", "X1", "Q3"],
      mdc: "nfr-Htp:t*p",
      transliteration: "nfr-ḥtp",
      translation: "The beautiful/perfect one is satisfied",
      sources: [
        { text: "Mariette, Abydos, II, plate 28" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, II, 151h" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 96-97, 22:E1" },
      ],
    },
  },

  "sobekhotep-iv": {
    horus: {
      codes: ["S34", "F34", "N17", "N17"],
      mdc: "anx-ib:N17:N17",
      transliteration: "Ꜥnḫ-i͗b-tꜢwi͗",
      translation: "The (very) life of the heart of the Two Lands",
      sources: [
        { text: "Legrain, Second rapport sur les travaux exécutés à Karnak, ASAE 4 (1903): 26" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 96-97, 24:H1" },
      ],
    },
    nebty: {
      codes: ["M13", "N28", "D36", "G43", "Y1", "Z2"],
      mdc: "wAD-xa:a-w-Y1:Z2",
      transliteration: "wꜢḏ-ḫꜤw",
      translation: "Flourishing of appearances",
    },
    golden: {
      codes: ["F12", "S29", "G30"],
      mdc: "wsr-s-G30",
      transliteration: "wsr-bꜤw",
      translation: "Rich in might",
    },
    prenomen: {
      codes: ["N5", "N28", "F35"],
      mdc: "ra-xa-nfr",
      transliteration: "ḫꜤi͗-nfr-rꜤ",
      translation: "The (very) appearance of the perfection of Ra",
      sources: [
        { text: "Karnak Canon no. 33" },
        { text: "Louvre, statue A17" },
        { text: "Mariette, Karnak, plate 8 n" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 96-97, 24:T1" },
      ],
      variants: [
        {
          codes: ["N5", "N28", "D36", "F35", "I3", "R4", "X1", "Q3"],
          mdc: "ra-xa:a-nfr-I3-Htp:t-p",
          transliteration: "ḫꜤi͗-nfr-rꜤ",
          translation: "The (very) appearance of the perfection of Ra, Sobekhotep",
        },
      ],
    },
    nomen: {
      codes: ["I4", "R4", "X1", "Q3"],
      mdc: "sbk-Htp:t*p",
      transliteration: "sbk-ḥtp",
      translation: "Sobek is satisfied",
      sources: [
        { text: "Legrain, Second rapport sur les travaux exécutés à Karnak, ASAE 4 (1903): 26" },
        { text: "Louvre statue A17" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 96-97, 24:E1" },
      ],
    },
  },

  "sobekhotep-v": {
    prenomen: {
      codes: ["N5", "U6", "R4", "X1", "Q3"],
      mdc: "ra-mr-Htp:t*p",
      transliteration: "mr-ḥtp-rꜤ",
      translation: "The one whom the peace of Ra has loved",
    },
    nomen: {
      codes: ["I4", "R4", "X1", "Q3"],
      mdc: "I4-Htp:t*p",
      transliteration: "sbk-ḥtp",
      translation: "Sobek is satisfied",
    },
  },

  khendjer: {
    prenomen: {
      codes: ["N5", "F12", "S29", "D28"],
      mdc: "ra-wsr-s-kA",
      transliteration: "wsr-kꜢ-rꜤ",
      translation: "The strong one of the ka of Ra",
      sources: [
        { text: "Jéquier, Deux pyramides du moyen empire, plate 6" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 94-95, 17:T1" },
      ],
      variants: [
        {
          codes: ["N5", "F12", "N5", "N35", "M36"],
          mdc: "ra-wsr-//-ra:n-Dr",
          transliteration: "wsr-..-rꜤ ḫnḏr",
        },
      ],
    },
    nomen: {
      codes: ["Aa1", "N35", "M37", "D21"],
      mdc: "x:n-M37:r",
      transliteration: "ḫnḏr",
      translation: "The wild boar",
    },
  },

  khyan: {
    horus: {
      codes: ["M17", "N35", "N29", "D32", "N21", "Z1"],
      mdc: "i-n:q-D32-N21:3",
      transliteration: "inḳ-tꜢw",
      translation: "The one who has embraced the lands",
    },
    prenomen: {
      codes: ["N5", "S29", "F78", "N35"],
      mdc: "ra-s*F78:n",
      transliteration: "s-wsr.n-rꜤ",
      translation: "The one whom Ra has made strong",
      variants: [
        {
          codes: ["R8", "F35", "N5", "S29", "F78", "N35", "G39", "N5", "Aa1", "M17", "M17", "G1", "N35"],
          mdc: "nTr-nfr-ra-s-F78-n-zA&&&ra-x-i-i-A-n",
          transliteration: "nṯr-nfr swsr.n-rꜤ ḫyꜢn",
          translation: "The Good God, the one whom Ra has made strong, Khyan",
        },
      ],
    },
    nomen: {
      codes: ["Aa1", "M17", "M17", "G1", "N35"],
      mdc: "x-i-i-A:n",
      transliteration: "ḫyꜢn",
      sources: [
        { text: "Lower part of usurped statue, (Cairo Museum, CG 389, JE 28574)" },
        { text: "Naville, Bubastis, 23, pls. 21; 35A" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 114-115, 4:E1" },
      ],
      variants: [
        {
          codes: ["S38", "N29", "N25", "Z2", "Aa1", "M17", "M17", "G1", "N35"],
          mdc: "HqA-q-N25:Z2-x-i-i-A:n",
          transliteration: "hḳꜢ-ḫꜢswt ḫyꜢn",
          translation: "The Ruler of Foreign Lands, Khyan",
        },
      ],
    },
  },

  apepi: {
    horus: {
      codes: ["S29", "R4", "X1", "Q3", "N17", "N17"],
      mdc: "s-Htp:t*p-N17:N17",
      transliteration: "sḥtp-tꜢwi",
      translation: "The one who has pacified the Two Lands",
    },
    prenomen: {
      codes: ["N5", "V30", "F23"],
      mdc: "ra:nb-xpS",
      transliteration: "nb-ḫpš-rꜤ",
      translation: "Possessor of the strong arm of Ra",
      sources: [
        { text: "Early reign" },
        { text: "Dagger in Luxor Museum, (CG 52768, JE 32735)" },
        { text: "ASAE , 7, 119" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 116-117, e:T1" },
      ],
      variants: [
        {
          codes: ["N5", "O29v", "D36", "N29", "N35", "N35"],
          mdc: "ra-aAv:a-q:n:n",
          transliteration: "ꜤꜢ-ḳni͗.n-rꜤ",
          translation: "The great one, whom Ra has made brave",
          sources: [
            { text: "Middle reign" },
            { text: "Offering table, (Cairo Museum, CG 23073, JE 39605)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 114-115, 5:T1" },
          ],
        },
        {
          codes: ["N5", "O29v", "Z1", "D36", "Y1", "F78", "S29"],
          mdc: "ra-aAv:Z1:a:Y1-F78-s",
          transliteration: "ꜤꜢ-wsr-rꜤ",
          translation: "The great one, whom Ra has made strong",
          sources: [
            { text: "Late reign" },
            { text: "Proceedings of the Society of Biblical Archaeology, 15, 494ff (XVII)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 114-115, 5:T2" },
          ],
        },
        {
          codes: ["N5", "O29v", "F12"],
          mdc: "ra:aAv-wsr",
          transliteration: "ꜤꜢ-wsr-rꜤ",
          translation: "The great one, whom Ra has made strong",
          sources: [
            { text: "Late reign" },
            { text: "Vase, Metropolitan Museum, 21.7.7" },
            { text: "Journal of Egyptian Archaeology, 3, plate 21 (1)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 114-115, 5:T3" },
          ],
        },
        {
          codes: ["S38", "N29", "Y1", "N35", "O6", "X1", "D56", "X1", "N35", "N5", "O29v", "D36", "F12", "S29"],
          mdc: "HqA-q:Y1:n-O6:t-D56-t:n-ra-aAv:a-wsr-s",
          transliteration: "ḥḳꜢ n ḥwt-wꜤrt ꜤꜢ-wsr-rꜤ",
          translation: "The ruler of Avaris, Aauserra",
        },
      ],
    },
    nomen: {
      codes: ["M17", "Q3", "Q3"],
      mdc: "i-p:p",
      transliteration: "i͗-p-p",
      sources: [
        { text: "Early reign" },
        { text: "ASAE , 7, 119" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 114-115, 5:E1" },
      ],
      variants: [
        {
          codes: ["M17", "A2", "Q3", "Q3", "M17"],
          mdc: "i-A2-p:p-i",
          transliteration: "i͗ppi͗",
          sources: [
            { text: "Red granite jar, Berlin ÄM 20366" },
            { text: "Naville, Bubastis, plate XXXV (C)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 114-115, 5:E2" },
          ],
        },
        {
          codes: ["M17", "A2", "Q3", "Q3", "M17", "A14"],
          mdc: "i-A2-p:p-i-A14",
          transliteration: "i͗ppi͗",
          sources: [
            { text: "Habachi, The second Stela of Kamose, pl. 7, row 20" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 114-115, 5:E3" },
          ],
        },
        {
          codes: ["M17", "A2", "Q3", "Q3"],
          mdc: "i-A2-p:p",
          transliteration: "i͗pp(i͗)",
        },
      ],
    },
  },

  khamudy: {
    prenomen: {
      codes: ["N5", "R4", "X1", "Q3", "F34"],
      mdc: "ra-Htp:t*p-ib",
      transliteration: "ḥtp-ib-rꜤ",
      translation: "The satisfied one of the mind of Ra",
    },
    nomen: {
      codes: ["S38", "N29", "N25", "X1", "Z1", "M12", "G1", "G17", "Z7", "D46", "Z4", "T14", "A1"],
      mdc: "HqA-q-N25:t*1-xA-A-m-W-d:y-qmA-A1",
      transliteration: "ḥḳꜢ-ḫꜢswt ḫꜢmwdi͗",
      translation: "The ruler of foreign lands, Khamudy",
    },
  },

  seqenenra: {
    horus: {
      codes: ["N28", "D36", "Aa15", "S40"],
      mdc: "N28-D36:Aa15-S40",
      transliteration: "ḫꜤi͗-m-wꜢs",
      translation: "The one who has appeared in Thebes",
    },
    prenomen: {
      codes: ["N5", "S29", "N29", "N35", "D40", "N35"],
      mdc: "-N5-S29-N29-N35:D40:N35",
      transliteration: "sḳn.n-rꜤ",
      translation: "The one whom Ra has made brave",
      sources: [
        { text: "Coffin of king Tao (Cairo Museum, CG 61001, JE 26209)" },
        { text: "Piehl, Inscriptions hieroglyphiques, I, LXXVI (N)" },
        { text: "Porter & Moss, Topographical Bibliography , I.2, 658" },
      ],
    },
    nomen: {
      codes: ["X1", "O47", "Z2", "O29", "D36", "Y1"],
      mdc: "X1:O47:Z2-O29:D36:Y1",
      transliteration: "ḏḥwty ꜤꜢ(.w)",
      translation: "Taa (\"Thoth is great\")",
      sources: [
        { text: "Axe head, LACMA M.80.203.43" },
        { text: "Coffin of king Tao (Cairo Museum, CG 61001, JE 26209)" },
        { text: "Porter & Moss, Topographical Bibliography , I.2, 658" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 128-129, 14:E1" },
      ],
      variants: [
        {
          codes: ["X1", "X2", "O47", "Z2", "O29", "N29", "N35", "D40"],
          mdc: "X1:X2-O47:Z2-O29-N29:N35:D40",
          transliteration: "ḏḥwty ꜤꜢ(.w) ḳn",
          translation: "Taa (\"Thoth is great\") the Brave",
          sources: [
            { text: "Shroud of princess Ahmose from tomb QV47, now in Museo Egizio in Turin" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 130-131, 14:E5" },
          ],
        },
        {
          codes: ["X1", "O47", "O29", "D36", "N29", "N35"],
          mdc: "X1:O47-O29:D36-N29:N35",
          transliteration: "ḏḥwty ꜤꜢ(.w) ḳn",
          translation: "Taa (\"Thoth is great\") the Brave",
          sources: [
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 130-131, 14:E3" },
          ],
        },
      ],
    },
  },

  kamose: {
    horus: {
      codes: ["N28", "D36", "D2", "Z1", "W11", "X1", "I9"],
      mdc: "xa:a-D2:Z1-g*t:f",
      transliteration: "ḫꜤi͗-ḥr-nst.f",
      translation: "The one who has appeared on his throne",
      sources: [
        { text: "Lacau, Une stèle du roi “Kamosis”, ASAE 39 (1939): 245-271, pls. 37-38" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 130-131, 15:H1" },
      ],
      variants: [
        {
          codes: ["F35", "K4", "G1", "D58", "N11", "N17", "N17"],
          mdc: "nfr-K4:A-b-N11:N17:N17",
          transliteration: "nfr-hꜤb-tꜢwi͗",
          translation: "The perfect one is the sickle of the Two Lands",
          sources: [
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 130-131, 15:H3" },
          ],
        },
        {
          codes: ["S29", "I10", "I9", "D40", "N17", "N17"],
          mdc: "s-D:f-D40:N17:N17",
          transliteration: "sḏfꜢ-tꜢwi͗",
          translation: "The one who has provisioned the Two Lands",
        },
      ],
    },
    nebty: {
      codes: ["F25", "Y5", "N35", "W24", "W24", "W24"],
      mdc: "F25-Y5:N35-W24*W24:W24",
      transliteration: "wḥm-mnw",
      translation: "Who has renewed monuments",
      sources: [
        { text: "Vandersleyen, L'Egypte et la vallée du Nil, 2, 195" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 130-131, 15:N1" },
      ],
    },
    golden: {
      codes: ["S29", "O4", "D21", "Y1", "N17", "N17", "N23", "N23"],
      mdc: "s-h:r-Y1-N17:N17:N23*N23",
      transliteration: "shrw-tꜢwi͗",
      translation: "The one who has pleased the Two Lands",
    },
    prenomen: {
      codes: ["N5", "M13", "Y1v", "L1"],
      mdc: "N5-M13-Y1v-L1",
      transliteration: "wꜢḏ-ḫpr-rꜤ",
      translation: "The flourishing one is the manifestation of Ra",
      sources: [
        { text: "Habachi, The Second Stela of Kamose and the struggle against the Hyksos Ruler and His Capital, ADAIK 8 (1972): pl. 7" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 130-131, 15:T1" },
      ],
      variants: [
        {
          codes: ["N5", "M13", "Y1v", "L1", "A24"],
          mdc: "ra-wAD-Y1v-xpr-A24",
          transliteration: "wꜢḏ-ḫpr-rꜤ nḫt",
          translation: "The flourishing one is the manifestation of Ra is victorious",
        },
      ],
    },
    nomen: {
      codes: ["D170A", "E1", "F31", "S29", "Z5"],
      mdc: "D170A-E1-ms-s-Z5",
      transliteration: "kꜢ-ms(w)",
      translation: "The bull is born",
      sources: [
        { text: "Gardiner, The Defeat of the Hyksos by Kamōse: The Carnarvon Tablet, No. I, JEA 3 (1916): 97" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 130-131, 15:E3" },
      ],
      variants: [
        {
          codes: ["D28", "F31", "S29", "A24"],
          mdc: "kA-ms-s-A24",
          transliteration: "kꜢ-ms(w) nḫt(w)",
          translation: "Kamose the victorious",
          sources: [
            { text: "Lacau, Une stèle du roi “Kamosis”, ASAE 39 (1939): 245-271, pls. 37-38" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 130-131, 15:E1" },
          ],
        },
        {
          codes: ["D28", "D52", "F31", "S29", "A24"],
          mdc: "kA:D52-ms-s-A24",
          transliteration: "kꜢ-ms(w) nḫt(w)",
          translation: "Kamose the victorious",
        },
      ],
    },
  },

  senebkay: {
    prenomen: {
      codes: ["N5", "F12", "S29", "D21", "F34", "Z1"],
      mdc: "ra-wsr-s-r:ib*1",
      transliteration: "wsr-i͗b-rꜤ",
      translation: "Strong (like) the mind of Ra",
    },
    nomen: {
      codes: ["S29", "N35", "D58", "D28", "M17", "M17"],
      mdc: "s-n:b-kA-i-i",
      transliteration: "snb-k3y",
    },
  },

  wepwawetemsaf: {
    prenomen: {
      codes: ["N5", "S42", "F35", "N28", "D36", "Y1", "Z2"],
      mdc: "ra-sxm-nfr-xa:a-Y1:Z2",
      transliteration: "sḫm-rꜤ nfr-ḫꜤw",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text II, 76" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 104-105, L:T2" },
      ],
    },
    nomen: {
      codes: ["F13", "N31", "X1", "Z2", "G17", "V17", "Z1", "I9"],
      mdc: "F13-N31:t*Z2-m-V17-Z1:f",
      transliteration: "wpwꜢwt-m-zꜢ.f",
    },
  },

  pantjeny: {
    prenomen: {
      codes: ["N5", "S42", "D43", "N17", "N17"],
      mdc: "ra-sxm-D43:N17:N17",
      transliteration: "sḫm-rꜤ ḫwi͗-tꜢwi͗",
      translation: "The powerful one of Ra is the protection of the Two Lands",
    },
    nomen: {
      codes: ["Q3", "N35", "V13", "N35", "T14", "G41"],
      mdc: "p:n-T:n-T14-G41",
      transliteration: "p(Ꜣ)-n-ṯni͗",
      translation: "Pantjeny (\"The man of Thinis\")",
    },
  },

  snaaib: {
    horus: {
      codes: ["S29", "M13", "N16", "N16"],
      mdc: "s-wAD-(N16:N16)",
      transliteration: "swꜢḏ-tꜢwi͗",
    },
    prenomen: {
      codes: ["N5", "Y5", "N35", "N28", "D36", "Z2"],
      mdc: "ra-mn:n-xa-a:Z2",
      transliteration: "mn-ḫꜤw-rꜤ",
    },
    nomen: {
      codes: ["Y4", "Y1", "F34", "Z1"],
      mdc: "Y4-Y1:ib*Z1",
      transliteration: "snꜤꜤ-i͗b",
    },
  },

  "ahmose-i": {
    horus: {
      codes: ["O29v", "L1", "G43"],
      mdc: "aAv:xpr*w",
      transliteration: "ꜤꜢ-ḫprw",
      translation: "Great of manifestations",
      sources: [
        { text: "Cairo Museum stela CG 34001" },
        { text: "ASAE , 4, 27" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 1:H1" },
      ],
      variants: [
        {
          codes: ["E1", "G17", "R19", "X1"],
          mdc: "E1-m-R19:t",
          transliteration: "kꜢ-m-wꜢst",
          translation: "The bull in Thebes",
        },
      ],
    },
    nebty: {
      codes: ["X1", "X1", "A53", "F31", "X1", "G43"],
      mdc: "t:t-A53-ms:t-w",
      transliteration: "twt-mswt",
      translation: "The (very) image of (re-)birth",
      sources: [
        { text: "Cairo Museum stela CG 34001" },
        { text: "ASAE , 4, 27" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 1:N" },
      ],
    },
    golden: {
      codes: ["S24", "O34", "N17", "N17"],
      mdc: "Tz:z:N17:N17",
      transliteration: "ṯs-tꜢwi͗",
      translation: "The one who has bound the Two Lands",
      sources: [
        { text: "Cairo Museum stela CG 34001" },
        { text: "ASAE , 4, 27" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 1:G" },
      ],
    },
    prenomen: {
      codes: ["N5", "V30", "F9"],
      mdc: "ra-nb-F9",
      transliteration: "nb-pḥti͗-rꜤ",
      translation: "The possessor of the might of Ra",
      sources: [
        { text: "Bracelet of queen Ahhotep, CG 52069 (JE 4684)" },
        { text: "ZÄS 136. 126–129, pl. XVII" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 1:T2" },
      ],
    },
    nomen: {
      codes: ["N12", "F31"],
      mdc: "N12\\R180-ms",
      transliteration: "i͗Ꜥh-msi͗(w)",
      translation: "Ahmose (Iah is born)",
      sources: [
        { text: "Bracelet of queen Ahhotep, CG 52069 (JE 4684)" },
        { text: "ZÄS 136. 126–129, pl. XVII" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 1:E3" },
      ],
      variants: [
        {
          codes: ["N12", "F31", "S29"],
          mdc: "N12-ms-s",
          transliteration: "i͗Ꜥḥms(i͗w)",
          translation: "Ahmose (Iah is born)",
          sources: [
            { text: "Cairo Museum stela CG 34001" },
            { text: "ASAE , 4, 27" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 1:E1" },
          ],
        },
        {
          codes: ["N12", "F31", "S29", "D40"],
          mdc: "N12\\R180-ms-s-D40",
          transliteration: "i͗Ꜥh-msi͗(w) nḫt",
          translation: "Ahmose (Iah is born) the victorious",
          sources: [
            { text: "Axe of Ahmose handle, CG 52645 (plate XLII)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 1:E4" },
          ],
        },
      ],
    },
  },

  "amenhotep-i": {
    horus: {
      codes: ["E1", "G43", "D36", "I9", "N17", "N17", "N17"],
      mdc: "E1-w-a:f-N17:N17:N17",
      transliteration: "kꜢ-wꜤf-tꜢw",
      translation: "Bull who subdues the lands",
      sources: [
        { text: "Limestone statue, British Museum, EA 683" },
        { text: "Naville, The XIth dynasty temple at Deir el-Bahari, I, p.60" },
        { text: "Doorway to the Chapel of Amenhotep I (Karnak Open Air Museum)" },
        { text: "Legrain, Second rapport sur les travaux exécutés à Karnak, ASAE 4 (1903): 15" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 2:H1" },
      ],
      variants: [
        {
          codes: ["G43", "D36", "I9", "N16", "N16", "N16"],
          mdc: "w-a:f-N16:N16:N16",
          transliteration: "wꜤf-tꜢwi͗",
          translation: "He who subdues the lands",
        },
      ],
    },
    nebty: {
      codes: ["O29v", "N35", "D21", "H4", "G43"],
      mdc: "aAv:n:r-H4-w",
      transliteration: "ꜤꜢ-nrw",
      translation: "He who inspires great fear",
      sources: [
        { text: "Legrain, Second rapport sur les travaux exécutés à Karnak, ASAE 4 (1903): 15" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 2:N" },
      ],
    },
    golden: {
      codes: ["V29", "M4", "M4", "M4"],
      mdc: "V29-M4-M4-M4",
      transliteration: "wꜢḥ-rnpwt",
      translation: "Enduring of years",
      sources: [
        { text: "Gauthier, Livre des Rois d'Égypte , II, 200 (XIV)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 2:G" },
      ],
      variants: [
        {
          codes: ["V29", "M4"],
          mdc: "V29-M4",
          transliteration: "wꜢḥ-rnp",
          translation: "Enduring of years",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "D45", "D28"],
      mdc: "ra-Dsr-kA",
      transliteration: "ḏsr-kꜢ-rꜤ",
      translation: "Holy is the soul of Ra",
      sources: [
        { text: "Abydos Canon no. 67" },
        { text: "Saqqara Canon no. 11" },
        { text: "Legrain, Second rapport sur les travaux exécutés à Karnak, ASAE 4 (1903): 15" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 2:T1" },
      ],
      variants: [
        {
          codes: ["N5", "D45", "D28", "M17", "Y5", "N35", "R4"],
          mdc: "ra:D45-kA-i-mn:n:Htp",
          transliteration: "ḏsr-kꜢ-rꜤ i͗mn-ḥtp",
          translation: "Holy is the soul of Ra, Amun is satisfied",
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "R4", "X1", "Q3"],
      mdc: "i-mn:n-Htp:t*p",
      transliteration: "i͗mn-ḥtp",
      translation: "Amun is satisfied",
      sources: [
        { text: "Legrain, Second rapport sur les travaux exécutés à Karnak, ASAE 4 (1903): 16" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 2:E1" },
      ],
      variants: [
        {
          codes: ["M17", "Y5", "N35", "R4", "X1", "Q3", "Z7", "G7"],
          mdc: "i-mn:n-Htp:t*p-W-G7",
          transliteration: "i͗mn-ḥtpw",
          translation: "Amun is satisfied",
          sources: [
            { text: "Ostracon CG 25234" },
            { text: "Cerny, BIFAO 27. 183–184" },
            { text: "Kitchen, Ramesside Inscriptions , VI, 370" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 2:E3" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "R4", "S38", "R19"],
          mdc: "i-mn:n:Htp-HqA-R19",
          transliteration: "i͗mn-ḥtp ḥḳꜢ-wꜢst",
          translation: "Amun is satisfied, ruler of Thebes",
        },
      ],
    },
  },

  "thutmose-i": {
    horus: {
      codes: ["E1", "D40", "C10A", "U6"],
      mdc: "E1:D40-C10A-mr",
      transliteration: "kꜢ-nḫt-mri͗-mꜢꜤt",
      translation: "Strong bull, beloved of Maat",
      sources: [
        { text: "Karnak Obelisk D - east and west faces" },
        { text: "Urkunden des Ägyptische Alterthums , IV, 93 (15)" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 6" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "C10", "U6", "M17", "M17"],
          mdc: "E1:D40-mAat-mr-i-i",
          transliteration: "kꜢ-nḫt mri͗-mꜢꜤt",
          translation: "Strong bull, beloved of Maat",
          sources: [
            { text: "Rock inscription at Tombos" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 87e" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 3:H3" },
          ],
        },
        {
          codes: ["E1", "N35", "M3", "Aa1", "X1", "D40", "C10", "U6"],
          mdc: "E1-n:xt:x*t-D40-mAat-mr",
          transliteration: "kꜢ-nḫt mri͗-mꜢꜤt",
          translation: "Strong bull, beloved of Maat",
          sources: [
            { text: "Coronation decree of Tuthmosis I" },
            { text: "Erman, Zeitschrift für ägyptische Sprache und Altertumskunde, 29, 116-119" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 3:H2" },
          ],
        },
        {
          codes: ["E1", "A24", "C10A", "U6"],
          mdc: "E1-A24-C10A-mr",
          transliteration: "kꜢ-nḫt mri͗-mꜢꜤt",
          translation: "Strong bull, beloved of Maat",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 5a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 3:H2" },
          ],
        },
        {
          codes: ["E1", "D40", "N35", "N5", "Z1", "A40"],
          mdc: "E1:D40-n:ra*Z1-A40",
          transliteration: "kꜢ-nḫt-n-rꜤ",
          translation: "Strong bull of Ra",
          sources: [
            { text: "Karnak Obelisk D - south face" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 6" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 3:H4" },
          ],
        },
        {
          codes: ["N5", "U7", "N28", "G17", "S1"],
          mdc: "ra:U7-xa-m-S1",
          transliteration: "mri͗-rꜤ ḫꜤi͗-m-ḥḏt",
          translation: "Beloved of Ra, who has appeared in the White Crown",
        },
      ],
    },
    nebty: {
      codes: ["G17", "N28", "N35", "O34", "D21", "X1", "O29v", "F9", "F9"],
      mdc: "m&xa-n:z:r-t:aAv:F9*F9",
      transliteration: "ḫꜤi͗-m-nsrt ꜤꜢ-pḥti͗",
      translation: "He who appears with the uraeus, great of stength",
      sources: [
        { text: "Karnak Obelisk D - east face" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 6" },
      ],
      variants: [
        {
          codes: ["N28", "D36", "G17", "N35", "F20", "D21", "X1", "I13", "D40", "F9", "F9"],
          mdc: "xa:a-m-n:ns&r:t-I13-D40:F9*F9",
          transliteration: "ḫꜤi͗-m-nsrt ꜤꜢ-pḥti",
          translation: "He who appears with the uraeus, great of stength",
          sources: [
            { text: "Year 2 commemorative stele of Nubian campaign victory" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 82" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 5a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 3:N1" },
          ],
        },
        {
          codes: ["X1", "U15", "A51D", "N14", "N28", "A30", "N28", "G43"],
          mdc: "t:U15-A51D-N14:xa-A30-xa:w",
          transliteration: "dwꜢ-i͗tm ḫꜤi͗-ḫꜤw",
          translation: "Who worships Atum, radiant of appearances",
          sources: [
            { text: "Karnak Obelisk D - north face" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 6" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 132-133, 3:N3" },
          ],
        },
        {
          codes: ["V15", "N17", "N17", "N17", "V30"],
          mdc: "V15-N17:N17:N17:nb",
          transliteration: "i͗ṯi͗-tꜢw-nb(w)",
          translation: "Who has seized all lands",
        },
      ],
    },
    golden: {
      codes: ["O29v", "F9", "F9", "F12", "S29", "F23", "M13", "M4", "M4", "M4", "G17", "O8", "C10", "X1", "O1"],
      mdc: "aAv:F9*F9-wsr-s-xpS-wAD-rnp-rnp-rnp-m-O8-mAat-t:pr",
      transliteration: "ꜤꜢ-pḥti͗ wsr-ḫpš wꜢḏ-rnpwt-m-ḥwt-ꜤꜢt-mꜢꜤt",
      translation: "Great of strength and strong-armed, enduring of years in the temple of Maat",
      sources: [
        { text: "Karnak Obelisk D - north face" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 6" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 3:G3" },
      ],
      variants: [
        {
          codes: ["V28", "A24", "T10", "Z3", "Z3", "Z3"],
          mdc: "H-A24-pD:Z3:Z3*Z3",
          transliteration: "ḥwi͗-pḏt-9",
          translation: "Who has struck down the Nine Bows",
          sources: [
            { text: "Karnak Obelisk D - south face" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 6" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 3:G2" },
          ],
        },
        {
          codes: ["F35", "M4", "M4", "M4", "S29", "S34", "F34", "F34", "F34"],
          mdc: "nfr-rnp-rnp-rnp-s-anx-ib:ib:ib",
          transliteration: "nfr-rnpwt sꜤnḫ-ibw",
          translation: "He whose years are perfect/beautiful, and makes hearts live",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "O29v", "L1", "D28"],
      mdc: "ra-O29v-xpr-kA",
      transliteration: "ꜤꜢ-ḫpr-kꜢ-rꜤ",
      translation: "Great is the manifestation of the soul of Ra",
      sources: [
        { text: "Tombos stela of Nubian campaign victory" },
        { text: "Urkunden des Ägyptische Alterthums , IV, 82" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 5a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 3:T1" },
      ],
      variants: [
        {
          codes: ["N5", "O29v", "L1", "D28", "U21", "N5", "N35"],
          mdc: "ra:aAv-xpr-kA-stp&ra:n",
          transliteration: "ꜤꜢ-ḫpr-kꜢ-rꜤ stp.n-rꜤ",
          translation: "Great is the manifestation of the soul of Ra, chosen of Ra",
          sources: [
            { text: "Karnak Obelisk D - east face" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 6" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 3:T3" },
          ],
        },
        {
          codes: ["N5", "O29v", "L1", "D28", "N5", "D4", "N35"],
          mdc: "ra:aAv-xpr-kA:ra-ir:n",
          transliteration: "ꜤꜢ-ḫpr-kꜢ-rꜤ i͗ri͗.n-rꜤ",
          translation: "Great is the manifestation of the soul of Ra, who Ra has made",
          sources: [
            { text: "Karnak Obelisk D - north face" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 6" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 3:T2" },
          ],
        },
        {
          codes: ["N5", "O29v", "L1", "D28", "M17", "Y5", "N35", "D17"],
          mdc: "ra:aAv-xpr-kA-i-mn:n:D17",
          transliteration: "ꜤꜢ-ḫpr-kꜢ-rꜤ i͗ti͗-i͗mn",
          translation: "Great is the manifestation of the soul of Ra, the image of Amun",
          sources: [
            { text: "Karnak Obelisk D - west face" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 6" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 3:T4" },
          ],
        },
        {
          codes: ["N5", "O29v", "L1", "D28", "N5", "U7", "N35"],
          mdc: "ra:aAv-xpr-kA:ra-U7:n",
          transliteration: "ꜤꜢ-ḫpr-kꜢ-rꜤ mri͗.n-rꜤ",
          translation: "Great is the manifestation of the soul of Ra, beloved of Ra",
        },
      ],
    },
    nomen: {
      codes: ["G26", "F31", "S29"],
      mdc: "G26-ms-s",
      transliteration: "ḏḥwti͗-msi(w)",
      translation: "Thoth is born",
      sources: [
        { text: "Zeitschrift für ägyptische Sprache und Altertumskunde, 29, pp. 116-119" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 5a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 3:E1" },
      ],
      variants: [
        {
          codes: ["G26", "N28", "F31", "F35", "Z2", "O34"],
          mdc: "G26-xa-ms-nfr-Z2:z",
          transliteration: "ḏḥwti͗-ms ḫꜤi͗-nfrw",
          translation: "Thoth is born, who has appeared perfectly",
          sources: [
            { text: "Karnak Obelisk D - east face" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 6" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 3:E3" },
          ],
        },
        {
          codes: ["G26", "N28", "N5", "F31", "W19", "O34"],
          mdc: "G26-xa:ra-ms*mi:z",
          transliteration: "ḏḥwti͗-ms ḫꜤi͗-mi͗-rꜤ",
          translation: "Thoth is born, who has appeared like Ra",
        },
      ],
    },
  },

  "thutmose-ii": {
    horus: {
      codes: ["E1", "D40", "F12", "S29", "F9", "F9"],
      mdc: "E1:D40-wsr-s-F9:F9",
      transliteration: "kꜢ-nḫt-wst-pḥti͗",
      translation: "The strong bull, rich of strength",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 16f" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 4:H" },
      ],
      variants: [
        {
          codes: ["E1", "N35", "M3", "Aa1", "X1", "D40", "F12", "S29"],
          mdc: "E1-n:xt:x*t:D40-wsr-s",
          transliteration: "kꜢ-nḫt-wsr-pḥti͗",
          translation: "The strong bull, rich of strength",
        },
      ],
    },
    nebty: {
      codes: ["R8", "M23", "M17", "M17"],
      mdc: "nTr-sw-i-i",
      transliteration: "nṯri͗-nsyt",
      translation: "He whose royalty is divine",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 16a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 4:N1" },
      ],
    },
    golden: {
      codes: ["S42", "L1", "G43", "Y1", "Z2"],
      mdc: "sxm-xpr-w-Y1:Z2",
      transliteration: "sḫm-ḫprw",
      translation: "He whose manifestations are powerful",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 16a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 4:G1" },
      ],
    },
    prenomen: {
      codes: ["N5", "O29v", "L1", "N35"],
      mdc: "ra:aAv-xpr:n",
      transliteration: "ꜤꜢ-ḫpr-n-rꜤ",
      translation: "Great is the manifestation of Ra",
      sources: [
        { text: "Abydos Canon no. 69" },
        { text: "Saqqara Canon no. 9" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 4:T1" },
      ],
    },
    nomen: {
      codes: ["G26", "F31", "S29"],
      mdc: "G26-ms-s",
      transliteration: "ḏḥwti-msi(w)",
      translation: "Born of Thoth",
      sources: [
        { text: "ASAE , 8, 44" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 4:E2" },
      ],
      variants: [
        {
          codes: ["G26", "F31", "F35", "O34", "N28", "Z2"],
          mdc: "G26-ms*nfr:z-xa:Z2",
          transliteration: "ḏḥwti͗-msi͗(w) nfr-ḫꜤw",
          translation: "Born of Thoth, he whose apparitions are perfect",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 16a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 4:E1" },
          ],
        },
        {
          codes: ["G26", "F31", "S29", "F35", "N28", "Z2"],
          mdc: "G26-ms-s-nfr-xa:Z2",
          transliteration: "ḏḥwti͗-msi͗(w) nfr-ḫꜤw",
          translation: "Born of Thoth, he whose apparitions are perfect",
        },
      ],
    },
  },

  hatshepsut: {
    horus: {
      codes: ["F12", "S29", "X1", "D28", "D28", "D28"],
      mdc: "wsr-s-t:kA-kA:kA",
      transliteration: "wsr.t-kꜢ.w",
      translation: "Mighty of Ka's",
    },
    nebty: {
      codes: ["M13", "X1", "M4", "M4", "M4"],
      mdc: "wAD:t-rnp-rnp-rnp",
      transliteration: "wꜢḏ.t-rnp.wt",
      translation: "Flourishing of years",
      sources: [
        { text: "Karnak Obelisk E" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 22" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 5:N" },
      ],
      variants: [
        {
          codes: ["V15", "N17", "N17", "N17", "V30", "Z3"],
          mdc: "V15-N17:N17:N17:nb-Z3",
          transliteration: "i͗ti͗-tꜢw-nbw",
          translation: "Who has seized all lands",
        },
      ],
    },
    golden: {
      codes: ["R8", "X1", "N28", "Z2"],
      mdc: "nTr-t:xa:Z2",
      transliteration: "nṯrt-ḫꜤw",
      translation: "Divine of appearance",
      sources: [
        { text: "Karnak Obelisk E" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 22" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 5:G1" },
      ],
      variants: [
        {
          codes: ["S29", "S34", "F34", "F34", "F34"],
          mdc: "s-anx-ib:ib:ib",
          transliteration: "s-Ꜥnḫ-i͗bw",
          translation: "Who has sustained minds",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "C10A", "D28"],
      mdc: "ra-C10A-kA",
      transliteration: "mꜢꜤt-kꜢ-rꜤ",
      translation: "The true one of the ka of Ra",
      sources: [
        { text: "Karnak Obelisk E" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 22-23" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 5:T1" },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "W9", "X1", "F4", "X1", "A51", "Z3"],
      mdc: "i-mn:n-W9:t-HAt-t&A51-Z3",
      transliteration: "i͗mn-ẖnmt ḥꜢ.t-šps.wt",
      translation: "United with Amun, foremost of noble ladies",
      sources: [
        { text: "Karnak Obelisk E" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 22-23" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 5:E2" },
      ],
      variants: [
        {
          codes: ["M17", "Y5", "N35", "W9", "F4", "A51"],
          mdc: "i-mn:n-W9:HAt-A51",
          transliteration: "i͗mn-ẖnm ḥꜢt-šps.wt",
          translation: "United with Amun, foremost of noble ladies",
          sources: [
            { text: "Urkunden des Ägyptische Alterthums , IV, 397" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 134-135, 5:E3" },
          ],
        },
        {
          codes: ["F4", "X1", "A51", "X1", "Z2"],
          mdc: "HAt:t-A51-t:Z2",
          transliteration: "ḥꜢ.t-šps.wt",
          translation: "Foremost of noble ladies",
        },
      ],
    },
  },

  "thutmose-iii": {
    horus: {
      codes: ["E1", "D40", "N28", "G17", "R19", "X1", "O49"],
      mdc: "E1:D40-xa:m-R19-t:O49",
      transliteration: "kꜢ-nḫt ḫꜤ-m-wꜢst",
      translation: "The strong bull arising in Thebes",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 55a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:H1" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "N28", "C10", "G17"],
          mdc: "E1:D40-xa-C10*m",
          transliteration: "kꜢ-nḫt ḫꜤ-m-mꜢꜤt",
          translation: "The strong bull arising in Maat",
          sources: [
            { text: "Lateran obelisk, western face" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 585 (4)" },
            { text: "Theodosius obelisk, Istanbul, western face" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 587 (4)" },
          ],
        },
        {
          codes: ["E1", "D40", "N28", "G17", "C10A"],
          mdc: "E1:D40-xa-m-C10A",
          transliteration: "kꜢ-nḫt ḫꜤi͗-m-mꜢꜤt",
          translation: "The strong bull, who has appeared in Truth",
          sources: [
            { text: "London obelisk, eastern face" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 591 (4)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:H8" },
          ],
        },
        {
          codes: ["E1", "D40", "V28", "D36", "Y1", "G17", "C10A"],
          mdc: "E1:D40-H-a:Y1-m-C10A",
          transliteration: "kꜢ-nḫt ḫꜤ-m-mꜢꜤt",
          translation: "The strong bull, who has appeared in Truth",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 33c" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:H10" },
          ],
        },
        {
          codes: ["E1", "D40", "C2A", "U6"],
          mdc: "E1:D40-C2A-mr",
          transliteration: "kꜢ-nḫt mri͗-rꜤ",
          translation: "The strong bull, beloved of Ra",
          sources: [
            { text: "Theodosius obelisk, Istanbul, northern face" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 587 (3)" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 60" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:H6" },
          ],
        },
        {
          codes: ["E1", "D40", "N5", "Z1", "U6"],
          mdc: "E1:D40-ra:Z1-mr",
          transliteration: "kꜢ-nḫt mri͗-rꜤ",
          translation: "The strong bull, beloved of Ra",
          sources: [
            { text: "Lateran obelisk, northern face" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 585 (3)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:H7" },
          ],
        },
        {
          codes: ["N5", "Z1", "A41", "N29", "S2", "U6", "M17", "M17"],
          mdc: "ra:Z1-A41-q-S2-mr-i-i",
          transliteration: "mri͗-rꜤ ḳꜢi͗-ḥḏt",
          translation: "Beloved of Ra, whose White Crown is high",
          sources: [
            { text: "Lateran obelisk, eastern face" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 584 (2)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:H3" },
          ],
        },
        {
          codes: ["S1", "N29", "C2A", "U6"],
          mdc: "S1-q-C2A-mr",
          transliteration: "ḳꜢi͗-ḥḏt mri͗-rꜤ",
          translation: "Whose White Crown is high, beloved of Ra",
          sources: [
            { text: "New York obelisk, northern face" },
            { text: "Champollion, Monuments de l'Egypte, IV, plate 444" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 593 (3)" },
          ],
        },
        {
          codes: ["S1", "N29", "C2A", "U6", "M17", "M17"],
          mdc: "HDt-q-C2A-mr-i-i",
          transliteration: "ḳꜢi͗-ḥḏt mri͗-rꜤ",
          translation: "Whose White Crown is high, beloved of Ra",
          sources: [
            { text: "London obelisk, western face" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 591 (1)" },
          ],
        },
        {
          codes: ["S1", "N29", "A28", "C2A", "U6"],
          mdc: "HDt-q-A28-C2A-mr",
          transliteration: "ḳꜢi͗-ḥḏt mri͗-rꜤ",
          translation: "Whose White Crown is high, beloved of Ra",
        },
      ],
    },
    nebty: {
      codes: ["V29", "V28", "M23", "M17", "M17", "X1"],
      mdc: "wAH-H-sw-i-i-t",
      transliteration: "wꜢḥ-nsi͗t",
      translation: "Enduring of kingship",
      sources: [
        { text: "Before 21st year" },
        { text: "Urkunden des Ägyptische Alterthums , IV, 193" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:N1" },
      ],
      variants: [
        {
          codes: ["V29", "X1", "M23", "N5", "Z1", "W19", "G17", "Q3", "X1", "N1"],
          mdc: "wAH-t-sw-ra:Z1-mi-m-p*t:N1",
          transliteration: "wꜢḥ-nsyt-mi͗-rꜤ-m-pt",
          translation: "Enduring of kingship like Ra in heaven",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 833" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:N2" },
          ],
        },
        {
          codes: ["E154", "S34", "N35", "Aa1", "N35", "X1", "U15", "A40", "L1", "D21", "G17", "L1", "D21", "M17", "A40", "R4", "X1", "Q3", "G30", "O28", "W24", "O49", "D2", "Z1", "Aa11", "D36", "X1", "I9"],
          mdc: "E154-anx-n:x-n:t:U15-A40-xpr:r-m-xpr:r-i-A40-Htp:t*p-G30-iwn-nw:O49-D2:Z1-Aa11:a:t:f",
          transliteration: "šsp-Ꜥnḫ-n-i͗tm ḫpr-m-ḫpri͗ ḥtpw-bꜢw-i͗wnw-ḥr-mꜢꜤt.f",
          translation: "The living image of Atum who appeared as Khepri, with whose offerings the souls of Heliopolis are satisfied",
          sources: [
            { text: "Name especially for the Sed festival" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 600" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:N5" },
          ],
        },
        {
          codes: ["O29v", "F8", "X1", "G17", "N17", "N17", "N17", "V30"],
          mdc: "aAv-F8:t-m-N17:N17:N17:nb",
          transliteration: "ꜤꜢ-šfi͗t-m-tꜢw-nb(w)",
          translation: "Great of majesty in all lands",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 585 (3)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:N4" },
          ],
        },
        {
          codes: ["S29", "N28", "C10A", "U6", "M17", "M17", "N17", "N17"],
          mdc: "s-xa-C10A-mr-i-i-N17:N17",
          transliteration: "sḫꜤi͗-mꜢꜤt mri͗-tꜢwi͗",
          translation: "Who has made Maat appear, beloved of the Two Lands",
        },
      ],
    },
    golden: {
      codes: ["D45", "D21", "Y1", "N28", "G43", "Y1", "Z2"],
      mdc: "Dsr-r:Y1-xa-w-Y1:Z2",
      transliteration: "ḏsr-ḫꜤw",
      translation: "Sacred of appearances",
      sources: [
        { text: "Before 21st year" },
        { text: "Urkunden des Ägyptische Alterthums , IV, 193" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:G1" },
      ],
      variants: [
        {
          codes: ["D45", "N28", "S42", "F9", "F9"],
          mdc: "Dsr:xa-sxm-F9:F9",
          transliteration: "ḏsr-ḫꜤw sḫm-pḥti͗",
          translation: "Sacred of appearances and powerful of might",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 833" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:G2" },
          ],
        },
        {
          codes: ["O4", "D21", "D2", "D40"],
          mdc: "h:r-D2:D40",
          transliteration: "hrw-ḥr-nḫtw",
          translation: "Pleased with (his) victories",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 584 (2)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:G5" },
          ],
        },
        {
          codes: ["O4", "D21", "D2", "Z1", "D40", "V28", "A24", "S38", "S38", "S38", "N25", "X1", "Z2", "F22", "Z2", "M23", "G43"],
          mdc: "h:r-D2:Z1-D40-H-A24-HqA-HqA-HqA-N25:t*Z2-F22:Z2-sw-w",
          transliteration: "hrw-ḥr-nḫtwḥwi͗-ḥḳꜢw-ḫꜢswt-pḥw-sw",
          translation: "Pleased with (his) victories, he who struck down the rulers of the foreign lands who approached him",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 591 (1)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:G4" },
          ],
        },
        {
          codes: ["S42", "F9", "F9", "D45", "N28", "D36", "Z3"],
          mdc: "sxm-F9:F9-Dsr-xa:a-Z3",
          transliteration: "sḫm-pḥti͗ ḏsr-ḫꜤw",
          translation: "Powerful of might and sacred of appearances",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 811" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:G3" },
          ],
        },
        {
          codes: ["O29v", "F24", "V28", "A24", "T10", "Z2", "Z2", "Z2"],
          mdc: "aAv:F24\\-H-A24-pD:Z2-Z2:Z2",
          transliteration: "ꜤꜢ-ḫpš ḥwi͗-pḏt",
          translation: "He of great of strength who has struck down the Nine Bows",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 585 (3)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:G6" },
          ],
        },
        {
          codes: ["S29", "D36", "D21", "N31", "C10A", "S29", "R4", "X1", "Q3", "C2"],
          mdc: "s-a:r-N31-C10A-s-Htp:t*p-C2",
          transliteration: "sꜤr-mꜢꜤt sḥtp-rꜤ",
          translation: "Who has elevated Maat and satisfied Ra",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "Y5", "L1"],
      mdc: "ra:mn-xpr",
      transliteration: "mn-ḫpr-rꜤ",
      translation: "Lasting is the Manifestation of Ra",
      sources: [
        { text: "Abydos Canon no. 70" },
        { text: "Saqqara Canon no. 8" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:T1" },
      ],
      variants: [
        {
          codes: ["N5", "Y5", "L1", "D28"],
          mdc: "ra-mn-xpr-kA",
          transliteration: "mn-ḫpr-kꜢ-rꜤ",
          translation: "Lasting is the Manifestation of the soul of Ra",
          sources: [
            { text: "Before 21st year" },
            { text: "Cerny, Inscriptions of Sinai, I, plate 61 (180)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:T3" },
          ],
        },
        {
          codes: ["N5", "Y5", "L1", "N5", "F44"],
          mdc: "ra:mn-xpr-ra:F44",
          transliteration: "mn-ḫpr-rꜤ i͗wꜤ-rꜤ",
          translation: "Lasting is the Manifestation of Ra, the heir of Ra",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 601" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:T5" },
          ],
        },
        {
          codes: ["N5", "Y5", "L1", "N5", "D4", "N35"],
          mdc: "ra:mn-xpr-ra-ir:n",
          transliteration: "mn-ḫpr-rꜤ i͗ri͗,n-rꜤ",
          translation: "Lasting is the Manifestation of Ra, whom Ra made",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 587 (4)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:T6" },
          ],
        },
        {
          codes: ["N5", "Y5", "L1", "N5", "U7", "N35"],
          mdc: "ra:mn-xpr-ra-U7:n",
          transliteration: "mn-ḫpr-rꜤ mri͗.n-rꜤ",
          translation: "Lasting is the Manifestation of Ra, beloved of Ra",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 584 (2)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:T7" },
          ],
        },
        {
          codes: ["N5", "Y5", "L1", "U21", "N35", "N5"],
          mdc: "ra:mn-xpr-stp&n&ra",
          transliteration: "mn-ḫpr-rꜤ stp.n-rꜤ",
          translation: "Lasting is the Manifestation of Ra, chosen by Ra",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 811" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:T8" },
          ],
        },
        {
          codes: ["N5", "Y5", "L1", "O34", "O29v", "N35"],
          mdc: "ra:mn-xpr-z:aAv:n",
          transliteration: "mn-ḫpr-rꜤ sꜤꜢ.n-rꜤ",
          translation: "Lasting is the Manifestation of Ra, whom Ra made great",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 587 (3)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:T9" },
          ],
        },
        {
          codes: ["N5", "Y5", "L1", "V30", "F24"],
          mdc: "ra:mn-xpr-nb:F24\\",
          transliteration: "mn-ḫpr-rꜤ nb-ḫpš",
          translation: "Lasting is the Manifestation of Ra, possessor of a strong arm",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 601" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:T10" },
          ],
        },
        {
          codes: ["N5", "Y5", "L1", "D40", "F24"],
          mdc: "ra:mn-xpr-D40:F24\\",
          transliteration: "mn-ḫpr-rꜤ nḫt-ḫpš",
          translation: "Lasting is the Manifestation of Ra, the mighty-armed one",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 601" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:T11" },
          ],
        },
        {
          codes: ["N5", "Y5", "L1", "N5", "D17"],
          mdc: "ra:mn-xpr-ra:D17",
          transliteration: "mn-ḫpr-rꜤ ti͗t-rꜤ",
          translation: "Lasting is the Manifestation of Ra, the (very) image of Ra",
        },
      ],
    },
    nomen: {
      codes: ["G26", "F31", "S29"],
      mdc: "G26-ms-s",
      transliteration: "ḏḥwti-msi(w)",
      translation: "Thoth is born",
      sources: [
        { text: "Before 21st year" },
        { text: "Urkunden des Ägyptische Alterthums , IV, 193" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:E1" },
      ],
      variants: [
        {
          codes: ["G26", "X1", "Z4", "F31", "S29"],
          mdc: "G26-t:y-ms-s",
          transliteration: "ḏhwti͗-msi͗(w)",
          translation: "Thoth is born",
          sources: [
            { text: "Before 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 1384" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 136-137, 6:E2" },
          ],
        },
        {
          codes: ["C3", "F31"],
          mdc: "C3-ms",
          transliteration: "ḏḥwti͗-msi͗(w)",
          translation: "Thoth is born",
          sources: [
            { text: "After 21st year" },
            { text: "CG 61014" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 6:E4" },
          ],
        },
        {
          codes: ["E35", "F31"],
          mdc: "E35-ms",
          transliteration: "ḏḥwti͗-msi͗(w)",
          translation: "Thoth is born",
          sources: [
            { text: "After 21st year" },
            { text: "CG 61014" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 6:E5" },
          ],
        },
        {
          codes: ["G26", "F31", "O34", "F35", "L1"],
          mdc: "G26-ms:z-nfr-xpr",
          transliteration: "ḏḥwti͗-msi͗(w) nfr-ḫpr",
          translation: "Thoth is born, beautiful of form",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 811" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 6:E6" },
          ],
        },
        {
          codes: ["G26", "F31", "F35", "L1", "Z2"],
          mdc: "G26-ms-nfr-xpr:Z2",
          transliteration: "ḏḥwti͗-msi͗(w) nfr-ḫprw",
          translation: "Thoth is born, beautiful of forms",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 145" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 6:E7" },
          ],
        },
        {
          codes: ["G26", "F31", "O34", "F36", "L1"],
          mdc: "G26-ms:z-zmA-xpr",
          transliteration: "ḏḥwti͗-msi͗(w) zmꜢ-ḫpr",
          translation: "Thoth is born, united of manifestations",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 161" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 6:E8" },
          ],
        },
        {
          codes: ["G26", "F31", "O34", "S38", "H6"],
          mdc: "G26-ms:z-HqA-Sw",
          transliteration: "ḏḥwti͗-msi͗(w) ḥḳꜢ-mꜢꜤt",
          translation: "Thoth is born, ruler of Maat",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 591 (3)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 6:E9" },
          ],
        },
        {
          codes: ["G26", "F31", "O34", "S38", "O28"],
          mdc: "G26-ms:z-HqA-iwn",
          transliteration: "ḏḥwti͗-msi͗(w) ḥḳꜢ-i͗wnw",
          translation: "Thoth is born, ruler of Heliopolis",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 592 (4)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 6:E10" },
          ],
        },
        {
          codes: ["G26", "F31", "O34", "S38", "N29", "R8"],
          mdc: "G26-ms:z-HqA-q-nTr",
          transliteration: "ḏḥwti͗-msi͗(w) ḥḳꜢ-nṯri͗",
          translation: "Thoth is born, divine ruler",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 601" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 6:E11" },
          ],
        },
        {
          codes: ["G26", "F31", "S38", "R19"],
          mdc: "G26-ms-HqA-R19",
          transliteration: "ḏḥwti͗-msi͗(w) ḥḳꜢ-wꜢst",
          translation: "Thoth is born, ruler of Thebes",
          sources: [
            { text: "After 21st year" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 601" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 6:E12" },
          ],
        },
        {
          codes: ["X1", "Aa1", "C53A", "G39", "N35", "F32", "X1", "I9", "G31", "S29", "N35", "N35", "I9", "V30", "X1", "O49", "G26", "F31", "S29"],
          mdc: "t:x-C53A-zA-n:X:t:f-G31-s-n:n:f-nb:t*O49-G26-ms-s",
          transliteration: "ḏḥwti͗-msi͗(w) zꜤ-i͗tm-n-ẖt.f msi͗.n-n.f-nbt-i͗wnt",
          translation: "The bodily son of Atum, whom Nebet-Iunet bore for him",
        },
      ],
    },
  },

  "amenhotep-ii": {
    horus: {
      codes: ["E1", "D40", "G36", "F9", "F9"],
      mdc: "E1:D40-wr:F9*F9",
      transliteration: "kꜢ-nḫt wr-pḥti͗",
      translation: "The strong bull, great of power",
      sources: [
        { text: "Karnak third pylon, southern wall; Tomb of Qenamun (TT93)" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 61; 63a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 7:H1" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "O29v", "F9", "F9"],
          mdc: "E1:D40-aAv:F9*F9",
          transliteration: "kꜢ-nḫt ꜤꜢ-pḥti͗",
          translation: "The strong bull, great of might",
          sources: [
            { text: "Gauthier, Livre des Rois d'Égypte, II, 277 (II)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 7:H2" },
          ],
        },
        {
          codes: ["E1", "D40", "M44", "F16", "F16"],
          mdc: "E1:D40-M44-F16:F16",
          transliteration: "kꜢ-nḫt spd-Ꜥbwi͗",
          translation: "The strong bull, sharp of horns",
          sources: [
            { text: "Urkunden des Ägyptische Alterthums , IV, 1301" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 7:H3" },
          ],
        },
        {
          codes: ["E1", "D40", "S42", "X1", "F9"],
          mdc: "E1:D40-sxm-t-F9",
          transliteration: "kꜢ-nḫt sḫm-pḥti͗",
          translation: "The strong bull, powerful of might",
        },
      ],
    },
    nebty: {
      codes: ["N28", "N28", "Z2", "G17", "M17", "Q3", "X1", "Q1", "X1", "Z2", "Aa1"],
      mdc: "xa*xa:Z2-m-i-p:t-Q1-t:Z2:x",
      transliteration: "ḫꜤ-ḫꜤw m ipt-swt",
      translation: "Radiant of crowns in Karnak",
      sources: [
        { text: "Gauthier, Livre des Rois d'Égypte, II, 277 (II)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 7:N2" },
      ],
      variants: [
        {
          codes: ["F12", "S29", "I9", "F40", "G43", "S29", "N28", "D36", "G17", "R19", "X1", "O49"],
          mdc: "wsr-s-f:F40-w-s-xa:a-m-R19-t:O49",
          transliteration: "wsr-fꜢw sḫꜤi-m-wꜢst",
          translation: "Powerful of splendour, appearing in Thebes",
        },
      ],
    },
    golden: {
      codes: ["V15", "S42", "G17", "I9", "G17", "N17", "N17", "N17", "V30"],
      mdc: "iTi-sxm*m:f-m-N17:N17:N17:nb",
      transliteration: "iṯi-sḫm.f-m-tꜢw-nb(w)",
      translation: "Who seizes by his strength in all lands",
      sources: [
        { text: "No hieroghlyphs shown by von Beckerath." },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 64b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 7:G2" },
      ],
    },
    prenomen: {
      codes: ["N5", "O29v", "L1", "Z2"],
      mdc: "ra:aAv-xpr-Z2",
      transliteration: "ꜤꜢ-ḫprw-rꜤ",
      translation: "Great are the Manifestations of Ra",
      sources: [
        { text: "Abydos Canon no. 71" },
        { text: "Saqqara Canon no. 7" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 7:T1" },
      ],
      variants: [
        {
          codes: ["N5", "O29v", "L1", "Z2", "N35"],
          mdc: "ra:aAv-xpr:Z2-n",
          transliteration: "ꜤꜢ-ḫprw-n-rꜤ",
          translation: "Great are the Manifestations of Ra",
          sources: [
            { text: "Marseille Stela 14" },
            { text: "Note, despite the extra en it must belong to Amenhotep II" },
          ],
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "R4", "X1", "Q3"],
      mdc: "i-mn:n-Htp:t*p",
      transliteration: "i͗mn-ḥtp(w)",
      translation: "Amun is Satisfied",
      sources: [
        { text: "Urkunden des Ägyptische Alterthums , IV, 1316" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 7:E1" },
      ],
      variants: [
        {
          codes: ["M17", "Y5", "N35", "R4", "R8", "S38", "O28"],
          mdc: "i-mn:n:Htp-nTr-HqA-iwn",
          transliteration: "i͗mn-htp nṯr-ḥḳꜢ-i͗wnw",
          translation: "Amenhotep, God and ruler of Heliopolis",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 61-65" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 7:E2" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "R4", "S38", "O28"],
          mdc: "i-mn:n-Htp-HqA-iwn",
          transliteration: "i͗mn-ḥtp(w) hḳꜢ-i͗wnw",
          translation: "Amenhotep, ruler of Heliopolis",
          sources: [
            { text: "Urkunden des Ägyptische Alterthums , IV, 1319" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 7:E4" },
          ],
        },
      ],
    },
  },

  "thutmose-iv": {
    horus: {
      codes: ["E2", "D40", "X1", "G43", "X1", "N28", "Z2"],
      mdc: "E2:D40-t-w-t-xa:Z2",
      transliteration: "kꜢ-nḫt-twt-ḫꜤw",
      translation: "The strong bull, the (very) image of appearances",
      sources: [
        { text: "Dream stele of Thutmose IV (a.k.a. Sphinx stele)" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 68" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 8:H1" },
      ],
      variants: [
        {
          codes: ["E2", "D40", "U6", "M17", "M17", "R19", "X1", "O49"],
          mdc: "E2:D40-mr-i-i-R19-t:O49",
          transliteration: "kꜢ-nḫt mri͗-wꜢst",
          translation: "The strong bull, beloved of Thebes",
          sources: [
            { text: "Offering table CG 23088 (JE39616)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 8:H2" },
          ],
        },
        {
          codes: ["E2", "D40", "G39", "X1", "U15"],
          mdc: "E2:D40-zA-t:U15",
          transliteration: "kꜢ-nḫt zꜢ-i͗tm",
          translation: "The strong bull, son of Atum",
        },
      ],
    },
    nebty: {
      codes: ["R11", "R11", "M23", "X1", "M17", "M17", "W19", "X1", "U15"],
      mdc: "Dd-Dd-sw-t-i-i-mi-t:U15",
      transliteration: "ḏd-nsyt mi-itm",
      translation: "Stable of kingship like Atum",
      sources: [
        { text: "Dream stele of Thutmose IV (a.k.a. Sphinx stele)" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 68" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 138-139, 8:N1" },
      ],
      variants: [
        {
          codes: ["S42", "N28", "Z2", "G17", "N17", "N17", "N17", "V30"],
          mdc: "sxm-xa:Z2-m-N17:N17:N17:nb",
          transliteration: "sḫm-ḫꜤw-m-tꜢw-nb(w)",
          translation: "Powerful of appearances in all lands",
        },
      ],
    },
    golden: {
      codes: ["F12", "S29", "T16A", "D46", "D21", "D40", "T10", "Z2", "Z2", "Z2"],
      mdc: "wsr-s-T16A-d:r:D40-pD:Z2:Z2*Z2",
      transliteration: "wsr-ḫpš dr-pḏt-9",
      translation: "The one great of strength who has repelled the Nine Bows",
      sources: [
        { text: "Dream stele of Thutmose IV (a.k.a. Sphinx stele)" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 68" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 8:G1" },
      ],
      variants: [
        {
          codes: ["F12", "S29", "F24", "D46", "D21", "D40", "T10", "Z2", "Z2", "Z2"],
          mdc: "wsr-s-F24:d:r-D40:pD:Z2*Z2*Z2",
          transliteration: "wsr-ḫpš dr-pḏt",
          translation: "The one great of strength who has repelled the Nine Bows",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "Y5", "L1", "Z2"],
      mdc: "ra-mn-xpr-Z2",
      transliteration: "mn-ḫprw-rꜤ",
      translation: "Established manifestations of Ra",
      sources: [
        { text: "Abydos Canon no. 72" },
        { text: "Saqqara Canon no. 6" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 8:T1" },
      ],
      variants: [
        {
          codes: ["N5", "Y5", "L1", "N5", "Z2", "U7", "N35"],
          mdc: "ra:mn-xpr-ra:Z2-U7:n",
          transliteration: "mn-ḫprw-rꜤ mri͗.n.rꜤ",
          translation: "Established manifestations of Ra, whom Ra has loved",
          sources: [
            { text: "Lateran obelisk (south side, right column)" },
            { text: "Urkunden des Ägyptische Alterthums IV 1549" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 8:T3" },
          ],
        },
        {
          codes: ["N5", "Y5", "L1", "N5", "Z2", "D4", "N35"],
          mdc: "ra:mn-xpr-ra:Z2-ir:n",
          transliteration: "mn-ḫprw-rꜤ i͗ri͗-n-rꜤ",
          translation: "Established manifestations of Ra, whom Ra made",
          sources: [
            { text: "Lateran obelisk (south side, left column)" },
            { text: "Urkunden des Ägyptische Alterthums IV 1550" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 8:T4" },
          ],
        },
        {
          codes: ["N5", "Y5", "L1", "Z2", "N35"],
          mdc: "ra:mn-xpr:Z2-n",
          transliteration: "mn-ḫprw-n-rꜤ",
          translation: "Established manifestations of Ra",
          sources: [
            { text: "Marseille stela 15 and 25" },
            { text: "de Saulcy, Mémoires de l'Académie nationale de Metz, 1864, Pt. 2, 257-358" },
          ],
        },
        {
          codes: ["N5", "Y5", "L1", "Z2", "U21", "N35", "N5"],
          mdc: "ra:mn-xpr:Z2-stp&n&ra",
          transliteration: "mn-ḫprw-rꜤ stp.n-rꜤ",
          translation: "Established manifestations of Ra , whom Ra chose",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 69f" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 8:T5" },
          ],
        },
        {
          codes: ["N5", "Y5", "L1", "L1", "L1", "S38", "H6"],
          mdc: "ra:mn-xpr-xpr-xpr-HqA-H6",
          transliteration: "mn-ḫprw-rꜤ ḥḳꜢ-mꜢꜤt",
          translation: "Established manifestations of Ra, ruler of Maat",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 69b" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 8:T6" },
          ],
        },
      ],
    },
    nomen: {
      codes: ["G26", "F31", "S29"],
      mdc: "G26-ms-s",
      transliteration: "ḏḥwti͗-msi͗(w)",
      translation: "Thoth is born",
      sources: [
        { text: "Dream stele of Thutmose IV (a.k.a. Sphinx stele)" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 68" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 8:E1" },
      ],
      variants: [
        {
          codes: ["N28", "G26", "F31", "S29", "N28", "Z2"],
          mdc: "xa-G26-ms-s-xa:Z2",
          transliteration: "ḏḥwti͗-ms(w) ḫꜤi͗-ḫꜤw",
          translation: "Thoth is born, radiant of crowns",
          sources: [
            { text: "Dream stele of Thutmose IV (a.k.a. Sphinx stele)" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 68" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 8:E2" },
          ],
        },
        {
          codes: ["N28", "G26", "F31", "N28", "Z2"],
          mdc: "xa-G26-ms-xa:Z2",
          transliteration: "ḏḥwti͗-ms ḫꜤi͗-ḫꜤw",
          translation: "Thoth is born, radiant of crowns",
        },
      ],
    },
  },

  "amenhotep-iii": {
    horus: {
      codes: ["E1", "D40", "N28", "G17", "H6"],
      mdc: "E1:D40-xa-m-H6",
      transliteration: "kꜢ-nḫt-ḫꜤ-m-mꜢꜤt",
      translation: "The strong bull, appearing in truth",
      sources: [
        { text: "Description de l'Egypte, II, plates 20-22 (Memnon statues)" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 80a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 9:H1b" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "N28", "G17", "C10A"],
          mdc: "E1:D40-xa-m-C10A",
          transliteration: "kꜢ-nḫt ḫꜤ-m-mꜢꜤt",
          translation: "The strong bull, appearing in truth",
          sources: [
            { text: "Konosso Island" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 82a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 9:H1a" },
          ],
        },
        {
          codes: ["E1", "D40", "S42", "I9", "F40"],
          mdc: "E1:D40-sxm-f:Aw",
          transliteration: "kꜢ-nḫt sḫm-fꜢw",
          translation: "The strong bull, powerful of splendor",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 85a5" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 9:H2" },
          ],
        },
        {
          codes: ["V29", "M4", "M4", "M4", "I1", "Z2", "W3", "Z2"],
          mdc: "wAH-rnp-rnp-rnp-I1:Z2-W3:Z2",
          transliteration: "wꜢḥ-rnpwt ꜤšꜢ-ḥꜢbw",
          translation: "Enduring of years and numerous of festivals",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 83a4" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 9:H3" },
          ],
        },
        {
          codes: ["U39", "T3B", "X1", "S1", "U6", "O28", "W24", "O49"],
          mdc: "U39-T3B-t-HDt-mr-iwn-nw:O49",
          transliteration: "wṯz-ḥḏt mri͗-i͗wnw",
          translation: "Who has raised the White Crown, the beloved one of Heliopolis",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 83a6" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 9:H4" },
          ],
        },
        {
          codes: ["E1", "D40", "S38", "S38", "S38", "S38"],
          mdc: "E1:D40-HqA-HqA-HqA-HqA",
          transliteration: "kꜢ-nḫt ḥḳꜢ-ḥḳꜢw",
          translation: "The strong bull and ruler of rulers",
        },
      ],
    },
    nebty: {
      codes: ["S29", "Y5", "N35", "Y1", "O4", "Q3", "G43", "S29", "W11", "D21", "V28", "D36", "Y1", "N17", "N17"],
      mdc: "s-mn:n:Y1-h:p-w&3-s-g:r-H-a:Y1:N17:N17",
      transliteration: "smn-hpw sgrḥ-tꜢwi͗",
      translation: "Who has established laws and pacified the Two Lands",
      sources: [
        { text: "St. Petersburg sphinx A" },
        { text: "Urkunden des Ägyptische Alterthums , IV, 1747 (A)" },
      ],
      variants: [
        {
          codes: ["G36", "D21", "Y5", "W24", "W24", "W24", "D21", "U29", "X1", "F9", "F9", "Z4", "I9"],
          mdc: "wr:r-mn:nw*nw*nw:r-U29-t:F9*F9-Z4:f",
          transliteration: "wr-mnw-r-ḏꜢt-pḥti͗.f",
          translation: "Great of monuments extending his strength",
          sources: [
            { text: "Backside of southern Memnon colossi" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 1746 (583.2)" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text III, 144" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 9:N5" },
          ],
        },
        {
          codes: ["O29v", "N35", "D21", "G43", "H1", "D40", "Z2", "D2", "Z1", "N25", "V30", "X1"],
          mdc: "aAv:n:r-w-H1:D40:Z2-D2:1-N25:nb:t",
          transliteration: "ꜤꜢ-nrw-ḥr-ḫꜢst-nbt",
          translation: "Dreaded in every foreign land",
          sources: [
            { text: "St. Petersburg sphinx B" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 1747 (B)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 9:N4" },
          ],
        },
        {
          codes: ["S29", "Y5", "N35", "Y1", "O4", "Q3", "Z1", "G43", "W19", "M17", "V30", "R19", "X1", "O49"],
          mdc: "s-mn:n:Y1-h:p*3-w-mi-i-nb-R19-t:O49",
          transliteration: "smn-hpw mi-nb-wꜢst",
          translation: "Who has established laws like the lord of Thebes",
        },
      ],
    },
    golden: {
      codes: ["O29v", "F23", "D40", "V28", "A24", "S22", "X1", "G1", "Z2"],
      mdc: "aAv:xpS:D40-H-A24-S22:t-A&Z2",
      transliteration: "ꜤꜢ-ḫpš-hwi͗-sṯti͗w",
      translation: "Great of valour, smiting the Asiatics",
      sources: [
        { text: "Konosso Island" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 82a" },
      ],
      variants: [
        {
          codes: ["E1", "N35", "M23", "X1", "A43E", "A43E", "A43E", "D46", "D21", "D40", "T10", "X1", "Z2", "Z2", "Z2"],
          mdc: "E1:n-sw&t-A43E-A43E-A43E-d:r:D40-T10:t*Z2:Z2*Z2",
          transliteration: "kꜢ-n-nswt dr-pḏt-9",
          translation: "The bull of kings who has repelled the Nine Bows",
          sources: [
            { text: "St. Petersburg sphinx A" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 1747 (A)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 9:G3" },
          ],
        },
        {
          codes: ["S15", "L1", "G43", "G36", "D21", "U16", "X1", "Z2"],
          mdc: "THn-xpr-w&3-wr:r-U16:t*Z2",
          transliteration: "ṯḥn-ḫprw wr-bi͗Ꜣwt",
          translation: "Dazzling of manifestations and great of wonders",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 83a7" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 9:G4" },
          ],
        },
        {
          codes: ["V28", "I9", "N35", "I8", "Z2", "W3", "Z2", "N5", "Z1", "W19", "X1", "Z4"],
          mdc: "H-f:n:I8*Z2-W3:Z2-ra:Z1-mi-t:Z4",
          transliteration: "ḥfnw-ḥꜢbw mi͗ti͗-rꜤ",
          translation: "Immeasureable of festivals, the (very) likeness of Ra",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 83a1" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 9:G6" },
          ],
        },
        {
          codes: ["O34", "O29v", "D36", "O7", "X1", "I9", "N35", "X1", "I10", "X1", "N17"],
          mdc: "z:aAv:a-O7-t:f:n:t-D&t:N17",
          transliteration: "sꜤꜢ-ḥwt.f-nt-ḏt",
          translation: "Who has magnified his temple of eternity",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "V30", "C10"],
      mdc: "ra:nb-mAat",
      transliteration: "nb-mꜢꜤt-rꜤ",
      translation: "The possessor of the Maat of Ra",
      sources: [
        { text: "Passim" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 140-141, 9:T1" },
      ],
      variants: [
        {
          codes: ["D36", "V30", "C10A", "N5", "X1", "D17"],
          mdc: "a:nb-C10A-ra*t:D17",
          transliteration: "nb-mꜢꜤt-rꜤ ti͗t-rꜤ",
          translation: "The possessor of the Maat of Ra, the (very) image of Ra",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 73c+81c" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 142-143, 9:T5" },
          ],
        },
        {
          codes: ["N5", "V30", "C10A", "M17", "Y5", "N35", "D17"],
          mdc: "ra:nb-C10A-i*(mn:n):D17",
          transliteration: "nb-mꜢꜤt-rꜤ ti͗t-i͗mn",
          translation: "The possessor of the Maat of Ra, the (very) image of Amun",
          sources: [
            { text: "Gardiner, The Inscriptions of Sinai, plate LXVI (212 face)" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 71d" },
          ],
        },
        {
          codes: ["N5", "V30", "C10A", "U21", "N35", "N5"],
          mdc: "ra:nb-C10A-stp&n&ra",
          transliteration: "nb-mꜢꜤt-rꜤ stp-n-rꜤ",
          translation: "The possessor of the Maat of Ra, whom Ra has chosen",
          sources: [
            { text: "Urkunden des Ägyptische Alterthums , IV, 1686" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 73a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 142-143, 9:T8" },
          ],
        },
        {
          codes: ["N5", "V30", "C10A", "N5", "X1", "F44"],
          mdc: "ra:nb-C10A-ra:t:F44",
          transliteration: "nb-mꜢꜤt-rꜤ i͗wꜢ-rꜤ",
          translation: "The possessor of the Maat of Ra, the heir of Ra",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 73d" },
          ],
        },
        {
          codes: ["N5", "V30", "C10A", "N5", "D4", "N35"],
          mdc: "ra:nb-C10A-ra:ir:n",
          transliteration: "nb-mꜢꜤt-rꜤ i͗ri͗.n-rꜤ",
          translation: "The possessor of the Maat of Ra, whom Ra has made",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 73a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 142-143, 9:T10" },
          ],
        },
        {
          codes: ["N5", "V30", "C10A", "N5", "U7", "N35"],
          mdc: "ra:nb-C10A-ra:U7:n",
          transliteration: "nb-mꜢꜤt-rꜤ mri͗.n-rꜤ",
          translation: "The possessor of the Maat of Ra, whom Ra has loved",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 73d+e" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 142-143, 9:T11" },
          ],
        },
        {
          codes: ["N5", "V30", "C10A", "N5", "H8"],
          mdc: "ra:nb-C10A-ra:H8",
          transliteration: "nb-mꜢꜤt-rꜤ zꜢ-rꜤ",
          translation: "The possessor of the Maat of Ra, son of Ra",
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "R4", "S38", "R19"],
      mdc: "i-mn:n:Htp-HqA-R19",
      transliteration: "i͗mn-ḥtp ḥḳꜢ-wꜢst",
      translation: "Amenhotep, ruler of Thebes",
      sources: [
        { text: "Passim" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 70-90" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 142-143, 9:E1" },
      ],
      variants: [
        {
          codes: ["M17", "Y5", "N35", "R4", "X1", "Q3", "R8", "S38", "N29", "S40"],
          mdc: "i-mn:n-Htp:t*p-nTr-HqA-q-S40",
          transliteration: "i͗mn-ḥtp nṯr-ḥḳꜢ-wꜢst",
          translation: "Amenhotep, God and ruler of Thebes",
          sources: [
            { text: "Papyrus Berlin 9784" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 142-143, 9:E2" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "R4", "S38", "R19", "N5", "F44"],
          mdc: "i-mn:n:Htp-HqA-R19-ra:F44",
          transliteration: "i͗mn-ḥtp iwꜢ-rꜤ ḥḳꜢ-wꜢst",
          translation: "Amenhotep, heir of Ra, ruler of Thebes",
          sources: [
            { text: "Urkunden des Ägyptische Alterthums , IV, 1681" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 142-143, 9:E3" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "R4", "X1", "Q3"],
          mdc: "i-mn:n:Htp-t:p",
          transliteration: "i͗mn-ḥtp",
          translation: "Amun is satisfied",
        },
      ],
    },
  },

  neferneferuaten: {
    prenomen: {
      codes: ["N5", "S34", "X1", "L1", "Z2", "N36", "X1", "N5", "T21", "N35"],
      mdc: "ra-anx:t-xpr:Z2-N36:t*ra-wa:n",
      transliteration: "Ꜥnḫt-ḫprw-rꜤ mri-wꜤ-n-rꜤ",
      translation: "The (very) life of the manifestations of Ra, beloved of Waenra",
      sources: [
        { text: "Scarab seal" },
        { text: "Petrie, Tell el Amarna, plate XV (94)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 142-143, 10bis:T" },
      ],
      variants: [
        {
          codes: ["N5", "S34", "L1", "Z2", "N37", "N5", "F35", "L1"],
          mdc: "ra-anx-xpr-Z2:N37-ra-nfr-xpr",
          transliteration: "Ꜥnḫ-ḫprw-rꜤ mri͗ nfr-ḫprw-rꜤ",
          translation: "The (very) life of the manifestations of Ra, beloved of Neferkheperura",
        },
      ],
    },
    nomen: {
      codes: ["M17", "X1", "N35", "N5", "F35", "F35", "F35", "F35", "X1", "G25", "X1", "N35", "O4", "O34"],
      mdc: "i-t:n:ra-nfr-nfr-nfr-nfr-t&G25&t-n:O4:z",
      transliteration: "nfr-nfrw-itn Ꜣḫt-n-h(i͗).s",
      translation: "Perfect is the perfection of Aten, effective for her husband",
      sources: [
        { text: "Gabolde, D’Akhenaton à Tout-ânkhamon, fig. 9 and 10" },
      ],
      variants: [
        {
          codes: ["M17", "X1", "N35", "N5", "F35", "F35", "F35", "F35", "N37", "N5", "T21", "N35"],
          mdc: "i-t:n:ra-nfr-nfr-nfr-nfr-N37:ra-wa:n",
          transliteration: "nfr-nfrw-i͗tn mri͗-wꜤ-n-rꜤ",
          translation: "Perfect is the perfection of Aten, beloved of Waenra",
        },
      ],
    },
  },

  smenkhkara: {
    prenomen: {
      codes: ["N5", "S34", "L1", "Z2"],
      mdc: "ra-anx-xpr-Z2",
      transliteration: "Ꜥnḫ-ḫprw-rꜤ",
      translation: "Living are the manifestations of Ra",
    },
    nomen: {
      codes: ["N5", "O34", "U22", "D28", "D45", "L1", "Z2"],
      mdc: "ra-z:mnx*kA-D45-xpr:Z2",
      transliteration: "smnḫ-kꜢ-rꜤ ḏsr-ḫprw",
      translation: "Potent is the soul of Ra, holy of forms",
      sources: [
        { text: "Petrie, Tell el Amarna, plate XV (103)" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 99a" },
      ],
    },
  },

  tutankhamun: {
    horus: {
      codes: ["E1", "D40", "X1", "G43", "X1", "F31", "S29", "G43", "X1", "Z2"],
      mdc: "E1:D40-t-w&t-ms-s-w-t:Z2",
      transliteration: "kꜢ-nḫt twt-mswt",
      translation: "The strong bull, pleasing of birth",
      sources: [
        { text: "Urkunden des Ägyptische Alterthums , IV, 2056" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 144-145, 12:H1" },
      ],
    },
    nebty: {
      codes: ["F35", "O4", "Q3", "G43", "M40", "Z3", "S29", "W11", "D21", "V28", "D36", "N17", "N17", "N21", "N21"],
      mdc: "nfr-h:p-w-iz-Z3-s-g:r-H-a:N17:N17-N21:N21",
      transliteration: "nfr-hpw sgrḥ-tꜢwi͗",
      translation: "One of perfect laws, who pacifies the Two Lands",
      sources: [
        { text: "Urkunden des Ägyptische Alterthums , IV, 2054" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 144-145, 12:N1" },
      ],
      variants: [
        {
          codes: ["F35", "O4", "Q3", "G43", "Z3", "S29", "W11", "D21", "V28", "D36", "N17", "N17", "S29", "R4", "X1", "Q3", "R8A", "V30", "G43"],
          mdc: "nfr-h:p-w-Z3-s-g:r-H-a:N17:N17-s-Htp:t*p-nTrw:nb-w",
          transliteration: "nfr-hpw sgrḥ-tꜢwi͗ sḥtp-nṯrw-nbw",
          translation: "One of perfect laws, who pacifies the Two Lands and satisfied the gods",
          sources: [
            { text: "Petrie, Illahun, Kahun and Gurob, plate 24 (12)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 144-145, 12:N3" },
          ],
        },
        {
          codes: ["G36", "D21", "O11", "O1", "Z1", "M17", "Y5", "N35"],
          mdc: "wr:r-aH-pr:Z1-i-mn:n",
          transliteration: "wr-Ꜥḥ-i͗mn",
          translation: "Great of the palace of Amun",
        },
      ],
    },
    golden: {
      codes: ["U39", "N28", "Z2", "S29", "R4", "X1", "Q3", "R8A"],
      mdc: "U39-xa:Z2-s-Htp:t*p-nTrw",
      transliteration: "wṯs-ḫꜤw sḥtp-nṯrw",
      translation: "Elevated of appearances who satisfied the gods",
      sources: [
        { text: "Urkunden des Ägyptische Alterthums , IV, 2054" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 144-145, 12:G1" },
      ],
      variants: [
        {
          codes: ["U39", "N28", "Z2", "O34", "R4", "X1", "Q3", "R8A"],
          mdc: "U39-xa:Z2-z:Htp:t*p-nTrw",
          transliteration: "wṯz-ḫꜤw sḥtp-nṯrw",
          translation: "Elevated of appearances who satisfied the gods",
          sources: [
            { text: "Restoration stele, CG 34183" },
            { text: "Urkunden des Ägyptische Alterthums , IV, 2056" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 144-145, 12:G2" },
          ],
        },
        {
          codes: ["G43", "V13", "O34", "U39", "N28", "Z2", "M17", "X1", "I9", "A40", "I9", "A40E"],
          mdc: "w-T:z-U39-xa:Z2-i-t:f-A40:f-A40E",
          transliteration: "wṯz ḫꜤw-i͗t.f-rꜤ",
          translation: "Who has elevated the appearances of his father Ra",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "L1", "Z2", "V30"],
      mdc: "ra-xpr-Z2:nb",
      transliteration: "nb-ḫprw-rꜤ",
      translation: "Lord of the forms of Ra",
      sources: [
        { text: "Urkunden des Ägyptische Alterthums , IV, 2043" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 115,118; III, 119b, Text 79" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 144-145, 12:T1" },
      ],
      variants: [
        {
          codes: ["N5", "V30", "L1", "Z3", "S38", "H6"],
          mdc: "ra:nb-xpr-Z3-HqA-Sw",
          transliteration: "nb-ḫprw-rꜤ ḥḳꜢ-mꜢꜤt",
          translation: "Lord of the forms of Ra, ruler of Maat",
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "X1", "G43", "X1", "S34"],
      mdc: "i-mn:n-t&w&t-anx",
      transliteration: "twt-Ꜥnḫ-i͗mn",
      translation: "The living image of Amun",
      sources: [
        { text: "Statue of Tutankhamun CG 42091 (JE 36583)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 144-145, 12:E3" },
      ],
      variants: [
        {
          codes: ["M17", "Y5", "N35", "X1", "G43", "X1", "S34", "S38", "O28", "M26"],
          mdc: "i-mn:n-t&w&t-anx-HqA-iwn-Sma",
          transliteration: "twt-Ꜥnḫ-i͗mn ḥḳꜢ-i͗wnw-šmꜤi͗",
          translation: "The living image of Amun, ruler of southern Heliopolis",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 115+119b; Text III, 79" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 144-145, 12:E2" },
          ],
        },
        {
          codes: ["M17", "X1", "N35", "N5", "X1", "G43", "X1", "S34", "N35", "Aa1"],
          mdc: "i-t:n:ra-t&w&t-anx-n:x",
          transliteration: "twt-Ꜥnḫ-i͗tn",
          translation: "The living image of Aton",
        },
      ],
    },
  },

  ay: {
    horus: {
      codes: ["E1", "D40", "S15A", "N28", "Z2"],
      mdc: "E1:D40-S15A:xa*Z2",
      transliteration: "kꜢ-nḫt tḥn-ḫꜤw",
      translation: "The strong bull, the one of glittering crowns",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 113b+c" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 146-147, 14:H1" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "U33", "V28", "N35", "W24", "G43", "S15", "N28", "Z2"],
          mdc: "E1:D40-U33-V28-n:nw*w-THn:xa*Z2",
          transliteration: "kꜢ-nḫt ṯḥn-ḫꜤw",
          translation: "The strong bull, the one of glittering crowns",
          sources: [
            { text: "Stela found at Giza (CG 34187)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 146-147, 14:H2" },
          ],
        },
        {
          codes: ["E1", "D40", "S15", "L1", "Z2"],
          mdc: "E1:D40-THn-xpr:Z2",
          transliteration: "kꜢ-nḫt ṯḥn-ḫprw",
          translation: "The strong bull, the one of dazzling manifestations",
        },
      ],
    },
    nebty: {
      codes: ["S42", "Aa15", "F9", "F9", "D46", "D21", "S22", "X1", "X1", "N25"],
      mdc: "sxm-Aa15:F9*F9-d:r-S22:t*t:N25",
      transliteration: "sḫm-pḥti͗ dr-sṯt",
      translation: "Who is mighty of strength, who subdues the Asiatics",
    },
    golden: {
      codes: ["S38", "N29", "C10A", "S29", "L1", "D21", "N17", "N17"],
      mdc: "HqA-q-C10A-s-xpr-r:N17:N17",
      transliteration: "ḥḳꜢ-mꜢꜤt sḫpr-tꜢwi͗",
      translation: "The ruler of truth, who created the Two Lands",
    },
    prenomen: {
      codes: ["N5", "L1", "L1", "L1"],
      mdc: "ra-xpr-xpr-xpr",
      transliteration: "ḫpr-ḫprw-rꜤ",
      translation: "Everlasting are the Manifestations of Ra",
      sources: [
        { text: "Tomb of Tutankhamun KV62, burial chamber, north wall" },
        { text: "Porter & Moss, Topographical Bibliography , I, 570 (8:1)" },
      ],
      variants: [
        {
          codes: ["N5", "L1", "L1", "C10A", "Z2A", "D4"],
          mdc: "ra-xpr-xpr-C10A-Z2A-D4",
          transliteration: "ḫpr-ḫprw-rꜤ i͗ri͗-mꜢꜤt",
          translation: "Everlasting are the Manifestations of Ra, who does what is right",
          sources: [
            { text: "Panopolis Grotto" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 114b+c" },
          ],
        },
        {
          codes: ["N5", "L1", "L1", "Z3", "D4", "Aa11", "X1"],
          mdc: "ra-xpr-xpr-Z3-ir:Aa11:t",
          transliteration: "ḫpr-ḫprw-rꜤ i͗ri͗-mꜢꜤt",
          translation: "Everlasting are the Manifestations of Ra, who does what is right",
          sources: [
            { text: "Tomb of Ay (KV23)" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 113a+d" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 146-147, 14:T1" },
          ],
        },
        {
          codes: ["N5", "L1", "L1", "Z2", "D4", "Aa11"],
          mdc: "ra-xpr-xpr-Z2:D4:Aa11",
          transliteration: "ḫpr-ḫprw-rꜤ i͗ri͗-mꜢꜤt",
          translation: "Everlasting are the Manifestations of Ra, who does what is right",
          sources: [
            { text: "Sarcophagus of Ay" },
            { text: "d'Avennes, Histoire de l'art Egyptien, Atlas I, plate 6" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 113d" },
          ],
        },
        {
          codes: ["N5", "L1", "L1", "Z3", "D4", "Aa11", "C10A"],
          mdc: "ra-xpr-xpr-Z3-D4:Aa11-C10A",
          transliteration: "ḫpr-ḫprw-rꜤ i͗ri͗-mꜢꜤt",
          translation: "Everlasting are the Manifestations of Ra, who does what is right",
          sources: [
            { text: "Urkunden des Ägyptische Alterthums , IV, 2107" },
          ],
        },
        {
          codes: ["N5", "L1", "L1", "Z3", "C10A", "D4"],
          mdc: "ra-xpr-xpr-Z3-C10A-ir",
          transliteration: "ḫpr-ḫprw-rꜤ i͗ri͗-mꜢꜤt",
          translation: "Everlasting are the Manifestations of Ra, who does what is right",
        },
      ],
    },
    nomen: {
      codes: ["R8", "M17", "X1", "I9", "M17", "A2", "M17", "M17"],
      mdc: "nTr-i-t:f-i-A2-i-i",
      transliteration: "i͗ti͗-nṯr Ꜥy",
      translation: "God's father, Ay",
      sources: [
        { text: "The Journal of Egyptian Archaeology 18, 50-52" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 146-147, 14:E2" },
      ],
      variants: [
        {
          codes: ["X2", "R8", "M17", "A2", "M17", "M17", "R8", "S38", "R19"],
          mdc: "X2-nTr-i-A2-i-i-nTr-HqA-R19",
          transliteration: "i͗t-nṯr Ꜥy nṯr-ḥḳꜢ-wꜢst",
          translation: "God's father, Ay, God and ruler of Thebes",
        },
      ],
    },
  },

  horemheb: {
    horus: {
      codes: ["E1", "D40", "M44", "S29", "Aa1", "D21", "Y1", "Z2"],
      mdc: "E1:D40-M44-s-x:r-Y1:Z2",
      transliteration: "kꜢ-nḫt spd-sḫrw",
      translation: "The Strong bull, whose plans are clever",
      sources: [
        { text: "Medinet Habu stele fragment" },
        { text: "ASAE , 17, 85" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 112d" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 146-147, 14:H" },
      ],
    },
    nebty: {
      codes: ["G36", "D21", "U16A", "X1", "Z2", "G17", "M17", "Q3", "X1", "Q1", "Q1", "Q1"],
      mdc: "wr:r-U16A:t*Z2-m-i-p:t-st-st-Q1",
      transliteration: "wr-biꜢwt-m-ipt-swt",
      translation: "Great of marvels in Ipetsut (Karnak)",
    },
    golden: {
      codes: ["O4", "D21", "Y1", "D2", "Z1", "C10", "S29", "L1", "N17", "N17"],
      mdc: "h:r:Y1-D2:Z1-mAat-s-xpr:N17:N17",
      transliteration: "hrw-ḥr-mꜢꜤt sḫpr-tꜢwi͗",
      translation: "Pleased with Maat, who (re)-created the Two Lands",
    },
    prenomen: {
      codes: ["N5", "D45", "L1", "Z2", "U21", "N35", "N5"],
      mdc: "ra:Dsr-xpr:Z2-stp&n&ra",
      transliteration: "ḏsr-ḫprw stp-n-rꜤ",
      translation: "The sacred one of the manifestations of Ra, chosen of Ra",
      sources: [
        { text: "Abydos Canon no. 74" },
        { text: "Saqqara Canon no. 4" },
        { text: "Karnak pylon IX" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 112b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 146-147, 14:T1" },
      ],
      variants: [
        {
          codes: ["N5", "D45", "S38", "L1", "H6", "Z2", "N5", "U21", "N35"],
          mdc: "ra:Dsr-HqA-xpr-Sw-Z2*ra:stp:n",
          transliteration: "ḏsr-ḫprw-rꜤ ḥḳꜢ-mꜢꜤt",
          translation: "The sacred one of the manifestations of Ra, ruler of Maat",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 119f" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 146-147, 14:T2" },
          ],
        },
        {
          codes: ["N5", "D45", "L1", "Z2", "N35"],
          mdc: "ra:Dsr-xpr:Z2-n",
          transliteration: "ḏsr-ḫprw-n-rꜤ",
          translation: "The sacred one of the manifestations of Ra",
        },
      ],
    },
    nomen: {
      codes: ["G5", "Aa15", "W3", "A42A"],
      mdc: "G5-Aa15:Hb-A42A",
      transliteration: "ḥr-m-ḥꜢb",
      translation: "Horus is in jubilation",
      sources: [
        { text: "Journal of Egyptian Archaeology, 39, plate II, row 15 (as hereditary prince)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 146-147, 14:E1" },
      ],
      variants: [
        {
          codes: ["M17", "Y5", "N35", "U7", "G5", "S3", "Aa15", "W3"],
          mdc: "i-mn:n:U7-G5-S3-Aa15:W3",
          transliteration: "ḥr-m-ḥꜢb mri͗.n-i͗mn",
          translation: "Horemheb, whom Amun has loved",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 119-122" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 146-147, 14:E2" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "U7", "G5", "N35", "Aa15", "W3"],
          mdc: "i-mn:n:U7-G5-n:Aa15:W3",
          transliteration: "ḥr-m-ḥꜢb mri͗.n-i͗mn",
          translation: "Horemheb, whom Amun has loved",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 120b" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 146-147, 14:E3" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "N36", "G5", "N35", "Aa15", "W3"],
          mdc: "i-mn:n:N36-G5-n:Aa15:W3",
          transliteration: "ḥr-m-ḥꜢb mri͗.n-i͗mn",
          translation: "Horemheb, whom Amun has loved",
          sources: [
            { text: "Medinet Habu stele fragment" },
            { text: "ASAE , 17, 85" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "G5", "G17", "W3", "N5", "U7", "N35"],
          mdc: "i-mn:n-G5-m-W3:ra-U7:n",
          transliteration: "ḥr-m-ḥꜢb mri͗.n-i͗mn",
          translation: "Horemheb, whom Amun has loved",
        },
      ],
    },
  },

  "ramesses-i": {
    horus: {
      codes: ["E1", "D40", "M13", "M23", "X1", "M17", "M17", "Y1", "Z2"],
      mdc: "E1:D40-wAD-sw-t-i-i-Y1:Z2",
      transliteration: "kꜢ-nḫt wꜢḏ-nsyt",
      translation: "The strong bull, he who rejuvenates the royalty",
      sources: [
        { text: "Brussels E.2171" },
        { text: "Gardiner, Peet, Cerny The Inscriptions of Sinai, I, plate LXVIII (244)" },
        { text: "Kitchen, Ramesside Inscriptions , I, 1:8" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 1:H" },
      ],
    },
    nebty: {
      codes: ["N28", "D36", "Y1", "G17", "X1", "M23", "A44", "W19", "M17", "X1", "U15", "Aa15"],
      mdc: "xa:a:Y1-m&t-sw-A44-mi-i-t:U15:Aa15",
      transliteration: "ḫꜤi͗-m-nsw-mi͗-i͗tm",
      translation: "He who appears as a king, like Atum",
    },
    golden: {
      codes: ["S29", "Y5", "N35", "U32", "M3", "Aa1", "X1", "D54", "N21", "N21"],
      mdc: "s-mn:n-U32-Aa11v-xt:x*t:D54-N21:N21",
      transliteration: "smn-mꜢꜤt-ḫt-tꜢwi͗",
      translation: "Who established Maat throughout the Two Lands",
    },
    prenomen: {
      codes: ["N5", "Y5", "F9"],
      mdc: "ra:mn-F9",
      transliteration: "mn-pḥti͗-rꜤ",
      translation: "Eternal is the Strength of Ra",
      sources: [
        { text: "Copenhagen National Museum obelisk fragment No. 468" },
        { text: "Kitchen, Ramesside Inscriptions , I, 5:3" },
      ],
      variants: [
        {
          codes: ["N5", "Y5", "S38", "F9", "H6"],
          mdc: "ra:mn-HqA-F9-H6",
          transliteration: "mn-pḥti͗-rꜤ ḥḳꜢ-mꜢꜤt",
          translation: "Eternal is the Strength of Ra, ruler of Maat",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , I, 5:4" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 1:T5" },
          ],
        },
        {
          codes: ["N5", "Y5", "F9", "F9", "N5", "D17", "X1"],
          mdc: "ra:mn-F9-F9-ra:D17:t",
          transliteration: "mn-pḥti͗-rꜤ ti͗t-rꜤ",
          translation: "Eternal is the Strength of Ra, the image of Ra",
        },
      ],
    },
    nomen: {
      codes: ["N5", "F31", "S29", "M23", "G43"],
      mdc: "ra-ms-s-sw-w",
      transliteration: "rꜤ-msi͗-sw",
      translation: "Ra has fashioned him",
      sources: [
        { text: "Kitchen, Ramesside Inscriptions , I, 1:15" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 123a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 1:E1" },
      ],
      variants: [
        {
          codes: ["N5", "F31", "S29", "S29", "S38", "N29", "H6"],
          mdc: "ra-ms-s-s-HqA-q-H6",
          transliteration: "rꜤ-msi͗-sw ḥḳꜢ-mꜢꜤt",
          translation: "Ramesses, ruler of Maat",
        },
      ],
    },
  },

  "seti-i": {
    horus: {
      codes: ["E1", "D40", "G17", "N28", "R19", "S29", "M127", "S34", "M13"],
      mdc: "E1:D40-m&xa-R19-s-M127-anx-wAD",
      transliteration: "kꜢ-nḫt ḫꜤi͗-m-wꜢst sꜤnḫ-tꜢwi͗",
      translation: "The Strong bull who appeared in Thebes and sustains the Two Lands",
      sources: [
        { text: "Chapels of Isis and Horus ceiling insription" },
        { text: "Calverley, The Temple of Sethos I at Abydos , I, 40 j/k/m" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H1b" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "G17", "N28", "R19"],
          mdc: "E1:D40-m&xa-R19",
          transliteration: "kꜢ-nḫt ḫꜤi͗-m-wꜢst",
          translation: "The Strong bull who appeared in Thebes",
          sources: [
            { text: "Passim" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 150-151, 2:H28" },
          ],
        },
        {
          codes: ["E1", "D40", "S29", "S34", "N35", "Aa1", "N17", "N17"],
          mdc: "E1:D40-s-anx-n:x-N17:N17",
          transliteration: "kꜢ-nḫt sꜤnḫ-tꜤwi͗",
          translation: "The Strong bull who sustains the Two Lands",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , I, 39:2, alabaster stele" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H2" },
          ],
        },
        {
          codes: ["E1", "D40", "S29", "S34", "N17", "N17"],
          mdc: "E1:D40-s-anx-N17:N17",
          transliteration: "kꜢ-nḫt sꜤnḫ-tꜤwi͗",
          translation: "The Strong bull who sustains the Two Lands",
          sources: [
            { text: "East face, Qantara truncated obelisk" },
            { text: "Kitchen, Ramesside Inscriptions , I, 106:5, §51" },
          ],
        },
        {
          codes: ["E1", "D40", "O34", "S34", "N35", "Aa1", "N17", "N17", "N21", "N21"],
          mdc: "E1:D40-z:anx*(n:Aa1)-N17:N17:N21*N21",
          transliteration: "kꜢ-nḫt sꜤnḫ-tꜤwi͗",
          translation: "The Strong bull who sustains the Two Lands",
          sources: [
            { text: "Flaminian Obelisk South base" },
          ],
        },
        {
          codes: ["E1", "D40", "S29", "S34", "N17", "N17", "N21", "N21"],
          mdc: "E1:D40-s-anx-N17:N17:N21*N21",
          transliteration: "kꜢ-nḫt sꜤnḫ-tꜤwi͗",
          translation: "The Strong bull who sustains the Two Lands",
          sources: [
            { text: "Main text Qantara truncated obelisk" },
            { text: "Kitchen, Ramesside Inscriptions , I, 105:9, §51" },
          ],
        },
        {
          codes: ["E1", "D40", "N5", "Z1", "A41", "U6", "M17", "M17"],
          mdc: "E1:D40-ra:Z1-A41-mr-i-i",
          transliteration: "kꜢ-nḫt mri͗-rꜤ",
          translation: "The strong bull, beloved of Ra",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , I, 233:13" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H3" },
          ],
        },
        {
          codes: ["E1", "D40", "N5", "Z1", "A41", "C10A", "U6"],
          mdc: "E1:D40-ra:Z1-A41-C10A-mr",
          transliteration: "kꜢ-nḫt mri͗-mꜢꜤt-rꜤ",
          translation: "The strong bull, beloved of Maat and Ra",
          sources: [
            { text: "Flaminian obelisk, western center face" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H4" },
          ],
        },
        {
          codes: ["E1", "D40", "U7", "D21", "N35", "M17", "Y5", "N35"],
          mdc: "E1:D40-U7:r:n-i-mn:n",
          transliteration: "kꜢ-nḫt mri͗.n-i͗mn",
          translation: "Strong bull beloved of Amun",
          sources: [
            { text: "Chapel of Amun-Ra entrance thickness" },
            { text: "Calverley, The Temple of Sethos I at Abydos , II, 40" },
          ],
        },
        {
          codes: ["E1", "D40", "H8", "Z1", "X1", "U15"],
          mdc: "E1:D40-H8:Z1-t:U15",
          transliteration: "kꜢ-nḫt zꜢ-i͗tm",
          translation: "The Strong bull, son of Atum",
          sources: [
            { text: "Flaminian Obelisk North base" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H8" },
          ],
        },
        {
          codes: ["E1", "D40", "G39", "Z1", "M17", "Y5", "N35"],
          mdc: "E1:D40-zA&Z1-i-mn:n",
          transliteration: "kꜢ-nḫt zꜢ-i͗mn",
          translation: "Strong bull and son of Amun",
          sources: [
            { text: "Chapel of Amun-Ra entrance thickness" },
            { text: "Calverley, The Temple of Sethos I at Abydos , II, 40" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H20" },
          ],
        },
        {
          codes: ["E1", "D40", "N28", "D36", "N28", "Z2"],
          mdc: "E1:D40-xa:a:xa*Z2",
          transliteration: "kꜢ-nḫt ḫꜤ-ḫꜤw",
          translation: "Strong bull the (very) appearance of appearances",
          sources: [
            { text: "Mariette, Abydos, I, 49b" },
            { text: "Kitchen, Ramesside Inscriptions , I, 185:12" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 150-151, 2:H27" },
          ],
        },
        {
          codes: ["E1", "D40", "N29", "A28", "S1", "C2A", "U6"],
          mdc: "E1:D40-q-A28-S1-C2A-mr",
          transliteration: "kꜢ-nḫt ḳꜢi͗-ḥḏt mri͗-rꜤ",
          translation: "Strong bull (whose) White Crown is hign, beloved of Ra",
          sources: [
            { text: "ASAE , 9, 81" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H11" },
          ],
        },
        {
          codes: ["E1", "D40", "G17", "N28", "S1", "C2A", "U6"],
          mdc: "E1:D40-m&xa-S1-C2A-mr",
          transliteration: "kꜢ-nḫt ḫꜤi͗-m-ḥḏt mri͗-rꜤ",
          translation: "Strong bull who appeared in the White Crown, beloved of Ra",
          sources: [
            { text: "ASAE , 9, 81" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H9" },
          ],
        },
        {
          codes: ["E1", "D40", "S42", "G87", "Aa1", "Q3", "N37", "F24"],
          mdc: "E1:D40-sxm-G87-x*p:N37:F24",
          transliteration: "kꜢ-nḫt sḫm-ḫpš",
          translation: "The strong bull and strong-armed one",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , III, 18" },
            { text: "Thickness of entrance from inner Osiris hall to chapel of Osiris" },
          ],
        },
        {
          codes: ["E1", "D40", "S42", "G17", "D40", "F24"],
          mdc: "E1:D40-sxm-m-D40:F24",
          transliteration: "kꜢ-nḫt sḫm-ḫpš",
          translation: "The strong bull and strong-armed one",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , IV, 53 (B)" },
            { text: "Second hypostyle Hall, east wall, Ptah entrance thickness" },
          ],
        },
        {
          codes: ["E1", "D40", "S42", "T16A"],
          mdc: "E1:D40-sxm-T16A",
          transliteration: "kꜢ-nḫt sḫm-ḫpš",
          translation: "The strong bull and strong-armed one",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , II, 35" },
          ],
        },
        {
          codes: ["E1", "D40", "S42", "G17", "Aa1", "Q3", "N37", "F24", "T16"],
          mdc: "E1:D40-sxm-m-x*p:N37:F24-T16",
          transliteration: "kꜢ-nḫt sḫm-ḫpš",
          translation: "The strong bull and strong-armed one",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , IV, 53 (E)" },
            { text: "Second hypostyle Hall, east wall, Re-Harakhti entrance thickness" },
          ],
        },
        {
          codes: ["E1", "D40", "S42", "G17", "D40", "F23", "D40"],
          mdc: "E1:D40-sxm-m-D40:xpS:D40",
          transliteration: "kꜢ-nḫt sḫm-ḫpš",
          translation: "The strong bull and strong-armed one",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , IV, 55 (A)" },
            { text: "Second hypostyle Hall, east wall, Osiris entrance thickness" },
          ],
        },
        {
          codes: ["E1", "D40", "S42", "T16A", "D21", "T10", "X1", "Z2", "Z2", "Z2"],
          mdc: "E1:D40-sxm-T16A-r:pD-t*Z2:Z2*Z2",
          transliteration: "kꜢ-nḫt sḫm-ḫpš-pḏt",
          translation: "The strong bull of who defeated the Nine Bows",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , IV, 55 (D)" },
            { text: "Second hypostyle Hall, east wall, Isis entrance thickness" },
          ],
        },
        {
          codes: ["E1", "D40", "S42", "F9", "F9", "D40"],
          mdc: "E1:D40-sxm-F9*F9:D40",
          transliteration: "kꜢ-nḫt sḫm-pḥty",
          translation: "The strong bull, powerful of might",
          sources: [
            { text: "Mariette, Abydos, I, plate 49b+c (stairs)" },
          ],
        },
        {
          codes: ["E1", "D40", "S29", "N28", "Z2", "D37", "T10", "X1", "Z2", "Z2", "Z2"],
          mdc: "E1:D40-s-xa:Z2-D37:pD-t*Z2:Z2*Z2",
          transliteration: "kꜢ-nḫt s-ḫꜤw-pḏt",
          translation: "The strong bull of appearances has repelled the Nine Bows",
          sources: [
            { text: "Chapel of Ptah, southern thickness of entrance door" },
            { text: "Calverley, The Temple of Sethos I at Abydos , II, plate 41" },
          ],
        },
        {
          codes: ["E1", "D40", "F25", "G17", "F31", "X1", "G43", "Z2"],
          mdc: "E1:D40-F25-m-ms-t&w&Z2",
          transliteration: "kꜢ-nḫt wḥm-mswt",
          translation: "Strong bull who has renewed births",
          sources: [
            { text: "Chapel of Isis, south side entrance door thickness" },
            { text: "Calverley, The Temple of Sethos I at Abydos , I, 36" },
          ],
        },
        {
          codes: ["E1", "D40", "F25", "G17", "F31", "G43", "X1", "Z2"],
          mdc: "E1:D40-F25-m-ms*w:t*Z2",
          transliteration: "kꜢ-nḫt wḥm-mswt",
          translation: "Strong bull who has renewed births",
          sources: [
            { text: "Chapel of Re-Harakhti, north side" },
            { text: "Calverley, The Temple of Sethos I at Abydos , II, 40" },
          ],
        },
        {
          codes: ["E1", "D40", "F25", "F31", "S29", "G43", "X1", "Z2"],
          mdc: "E1:D40-F25-ms-s-w:t*Z2",
          transliteration: "kꜢ-nḫt wḥm-mswt",
          translation: "Strong bull who has renewed births",
          sources: [
            { text: "Chapel of Osiris entrance thickness" },
            { text: "Calverley, The Temple of Sethos I at Abydos , III, 18" },
          ],
        },
        {
          codes: ["E1", "D40", "D46", "D21", "D40", "T10", "X1", "Z2", "Z2", "Z2"],
          mdc: "E1:D40-d:r:D40-pD:t*Z2:Z2*Z2",
          transliteration: "kꜢ-nḫt dr-pḏt",
          translation: "The strong bull who repelled the Nine Bows",
          sources: [
            { text: "Second hypostyle Hall, chapels entrance thicknesses" },
            { text: "Calverley, The Temple of Sethos I at Abydos , IV, plate 53" },
          ],
        },
        {
          codes: ["E1", "D40", "F25", "N28", "Z2"],
          mdc: "E1:D40-F25-xa:Z2",
          transliteration: "kꜢ-nḫt wḥm-ḫꜤw",
          translation: "Strong bull who has repeated apparitions",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , II, 35" },
          ],
        },
        {
          codes: ["E1", "D40", "F25", "G17", "N28", "D36", "Y1", "Z2"],
          mdc: "E1:D40-F25-m-xa:a-Y1:Z2",
          transliteration: "kꜢ-nḫt wḥm-ḫꜤw",
          translation: "Strong bull who has repeated apparitions",
          sources: [
            { text: "Second hypostyle Hall, east wall, Re-Harakhti entrance thickness" },
            { text: "Calverley, The Temple of Sethos I at Abydos , IV, 53 (E)" },
          ],
        },
        {
          codes: ["E1", "D40", "V29", "V28", "Y1v", "M23", "M17", "M17", "X1", "Z2"],
          mdc: "E1:D40-wAH-H-Y1v-sw*i*i:t*Z2",
          transliteration: "kꜢ-nḫt wꜢḥ-nswt",
          translation: "The strong bull, enduring of kingship",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , II, 41" },
            { text: "Chapel of Ptah entrance thickness" },
          ],
        },
        {
          codes: ["E1", "D40", "G36", "D21", "U16", "X1", "Z2"],
          mdc: "E1:D40-wr:r-U16:t*Z2",
          transliteration: "kꜢ-nḫt wr-biꜢ-tw",
          translation: "Strong bull, great of marvels",
          sources: [
            { text: "Chapel of Ptah north side entrance thickness" },
            { text: "Calverley, The Temple of Sethos I at Abydos , II, 41" },
          ],
        },
        {
          codes: ["E1", "D40", "G36", "D21", "M23", "X1", "M17", "M17"],
          mdc: "E1:D40-wr:r-sw-t-i-i",
          transliteration: "kꜢ-nḫt wr-nsyt",
          translation: "The strong bull, great of kingship",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , I, 36" },
            { text: "Chapel of Horus, south side entrance thickness" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H14" },
          ],
        },
        {
          codes: ["E1", "D40", "F25", "G17", "S5", "Z3"],
          mdc: "E1:D40-F25-m-S5-Z3",
          transliteration: "kꜢ-nḫt wḥm-sḫmty",
          translation: "Strong bull who has renewed power",
          sources: [
            { text: "Mariette, Abydos, I, plate 14a" },
            { text: "Calverley, The Temple of Sethos I at Abydos , III, plate 18 and IV, plate 53" },
          ],
        },
        {
          codes: ["E1", "D40", "X1", "D17", "M17", "Y5", "N35"],
          mdc: "E1:D40-t:D17-i-mn:n",
          transliteration: "kꜢ-nḫt ti͗t-i͗mn",
          translation: "The strong bull, the (very) image of Amun",
          sources: [
            { text: "Chapel of Re-Harakhti entrance thickness" },
            { text: "Calverley, The Temple of Sethos I at Abydos , II, 40" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H21" },
          ],
        },
        {
          codes: ["E1", "D40", "N5", "D17", "X1", "X1", "U15"],
          mdc: "E1:D40-ra:D17:t-t:U15",
          transliteration: "kꜢ-nḫt ti͗t-rꜤ-i͗tm",
          translation: "The strong bull, the (very) image of Ra-Atum",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , II, 40" },
            { text: "Chapel of Re-Harkhti, south side entrance thickness" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H18" },
          ],
        },
        {
          codes: ["E1", "D40", "F12", "S29", "T10", "T10", "T10"],
          mdc: "E1:D40-wsr-s-pD:pD:pD",
          transliteration: "kꜢ-nḫt wsr-s-pḏtw",
          translation: "The strong bull with strong troops",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , II, 41; III, 18" },
          ],
        },
        {
          codes: ["E1", "D40", "F12", "S29", "T10", "X1", "Z2"],
          mdc: "E1:D40-wsr-s-pD:t:Z2",
          transliteration: "kꜢ-nḫt wsr-pḏt",
          translation: "The strong bull with strong troops",
          sources: [
            { text: "Second hypostyle Hall, east wall, Ptah entrance, south thickness" },
            { text: "Calverley, The Temple of Sethos I at Abydos , IV, plate 53 (B)" },
          ],
        },
        {
          codes: ["E1", "D40", "F12", "S29", "D28", "D28", "D28"],
          mdc: "E1:D40-wsr-s-kA:kA*kA",
          transliteration: "kꜢ-nḫt wsr-kꜢw",
          translation: "The strong bull, who has a strong soul",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , I, 36" },
            { text: "Chapel of Horus, south side entrance thickness" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H13" },
          ],
        },
        {
          codes: ["E1", "D40", "S29", "L1", "D21", "N17", "N17", "N21", "N21"],
          mdc: "E1:D40-s-xpr:r-N17:N17:N21*N21",
          transliteration: "kꜢ-nḫt sḫpr-tꜢwi͗",
          translation: "Strong bull who has created the Two Lands",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , IV, 55 (D)" },
            { text: "Second hypostyle hall Isis entrance thickness" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H16" },
          ],
        },
        {
          codes: ["E1", "D40", "U21", "Q3", "N35", "M17", "Y5", "N35"],
          mdc: "E1:D40-stp:p:n-i-mn:n",
          transliteration: "kꜢ-nḫt stp.n-i͗mn",
          translation: "Strong bull, chosen of Amun",
          sources: [
            { text: "Chapel of Amun-Ra entrance thickness" },
            { text: "Calverley, The Temple of Sethos I at Abydos , II, 40" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 150-151, 2:H22" },
          ],
        },
        {
          codes: ["E1", "D40", "F25", "G17", "S1", "S3", "S8A"],
          mdc: "E1:D40-F25-m-S1-S3-S8A",
          transliteration: "kꜢ-nḫt wḥm-ḥḏt-dšrt-Ꜣtf",
          translation: "The strong bull with renewed crowns",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , IV, 55" },
          ],
        },
        {
          codes: ["E1", "D40", "O29v", "F8", "C2A", "U6"],
          mdc: "E1:D40-aAv:F8-C2A-mr",
          transliteration: "kꜢ-nḫt ꜤꜢ-šfi͗t mri͗-rꜤ",
          translation: "Stong bull great of majesty and beloved of Ra",
          sources: [
            { text: "ASAE , 9, 81" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H10" },
          ],
        },
        {
          codes: ["E1", "D40", "D46", "D21", "D40", "N25", "X1", "Z2", "Aa15", "X1", "Z2", "D40", "I9"],
          mdc: "E1:D40-d:r:D40-N25:t*Z2:Aa15-t*Z2:D40:f",
          transliteration: "kꜢ-nḫt dr-ḫꜢswt-m-nḫtw.f",
          translation: "The strong bull who has repelled foreign lands with his victories",
          sources: [
            { text: "Flaminian obelisk, southern center face" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H5" },
          ],
        },
        {
          codes: ["E1", "D40", "R4", "X1", "Q3", "D2", "Z1", "C10A"],
          mdc: "E1:D40-Htp:t*p-D2:Z1-C10A",
          transliteration: "kꜢ-nḫt ḥtp-ḥr-mꜢꜤt",
          translation: "The strong bull who has satisfied Maat",
          sources: [
            { text: "Flaminian Obelisk North center face" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H6" },
          ],
        },
        {
          codes: ["E1", "D40", "D4", "N35", "C2"],
          mdc: "E1:D40-ir:n-C2",
          transliteration: "kꜢ-nḫt i͗ri͗.n-rꜤ",
          translation: "Strong bull begotten of Ra",
          sources: [
            { text: "Chapel of Re-Harakhti entrance thickness" },
            { text: "Calverley, The Temple of Sethos I at Abydos , II, 40" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H19" },
          ],
        },
        {
          codes: ["E1", "D40", "W19", "X1", "X1", "Y1", "Y5", "N35", "V13", "C17A"],
          mdc: "E1:D40-mi-t*t:Y1-mn:n:T-C17A",
          transliteration: "kꜢ-nḫt mi͗ti͗-mnṯw",
          translation: "The strong bull, and the likeness of Montu",
          sources: [
            { text: "Flaminian obelisk, western base" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H7" },
          ],
        },
        {
          codes: ["E1", "D40", "Aa27", "W24", "X1", "Z4", "D40", "N5", "Z1", "A40"],
          mdc: "E1:D40-Aa27-nw:t*y:D40-ra:Z1-A40",
          transliteration: "kꜢ-nḫt nḏti͗-rꜤ",
          translation: "The strong bull and protector of Ra",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , I, 36" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 150-151, 2:H25" },
          ],
        },
        {
          codes: ["E1", "D40", "G39", "Z1", "L1", "D21", "M17"],
          mdc: "E1:D40-zA&Z1-xpr:r-i",
          transliteration: "kꜢ-nḫt zꜢ-ḫpri͗",
          translation: "Strong bull and son of Khepri",
          sources: [
            { text: "Chapel of Re-Harakhti entrance thickness" },
            { text: "Calverley, The Temple of Sethos I at Abydos , II, 40" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 148-149, 2:H17" },
          ],
        },
        {
          codes: ["E1", "D40", "G39", "Z1", "D4", "Q1", "A40"],
          mdc: "E1:D40-zA&Z1-ir:st*A40",
          transliteration: "kꜢ-nḫt zꜢ-wsi͗ri͗",
          translation: "Strong bull and son of Osiris",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , I, 36" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 150-151, 2:H24" },
          ],
        },
        {
          codes: ["E1", "D40", "S29", "N28", "D36", "D36", "N35", "N5", "Z1", "A41"],
          mdc: "E1:D40-s-xa:a:a:n-ra:Z1-A41",
          transliteration: "kꜢ-nḫt s-ḫꜤ-n-rꜤ",
          translation: "Strong bull whom Ra has caused to appear",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , I, 36" },
            { text: "Chapel of Isis, north side entrance thickness" },
          ],
        },
        {
          codes: ["E1", "D40", "O34", "V30", "O1", "O1", "O1", "O49", "O49", "O49"],
          mdc: "E1:D40-z:nb-pr:pr-pr:O49-O49:O49",
          transliteration: "kꜢ-nḫt s-nb-pr(w)-niwt(w)",
          translation: "The strong bull...",
          sources: [
            { text: "Chapel of Re-Harakhti north side entrance thickness" },
            { text: "Calverley, The Temple of Sethos I at Abydos , II, 40" },
          ],
        },
        {
          codes: ["E1", "D40", "O29v", "D36", "F23"],
          mdc: "E1:D40-aAv:a:xpS",
          transliteration: "kꜢ-nḫt ꜤꜢ-ḫpš",
          translation: "The Strong bull, great of strong arm",
          sources: [
            { text: "Mariette, Abydos, I, 49b" },
            { text: "Kitchen, Ramesside Inscriptions , I, 185:10" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 150-151, 2:H26" },
          ],
        },
        {
          codes: ["E1", "D40", "O29v", "F9", "F9"],
          mdc: "E1:D40-aAv:F9*F9",
          transliteration: "kꜢ-nḫt ꜤꜢ-pḥty",
          translation: "The Strong bull great of might",
        },
      ],
    },
    nebty: {
      codes: ["F25", "F31", "S29", "G43", "X1", "S42", "Aa1", "Q3", "O39", "F23", "D46", "D21", "D40", "T10", "X1", "Z2", "Z2", "Z2"],
      mdc: "F25-ms-s-w-t-sxm-x*p:O39:xpS-d:r:D40-pD:t-Z2:Z2:Z2",
      transliteration: "wḥm-mswt sḫm-ḫpš dr-pḏt-Ꜣ",
      translation: "Renewing births, the strong-armed one who has repelled the Nine Bows",
      sources: [
        { text: "Beth-Shan stele of Seti I" },
        { text: "Kitchen, Ramesside Inscriptions , I, 11:15" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 2:N1a" },
      ],
      variants: [
        {
          codes: ["S42", "F9", "X1", "X1", "D46", "D21", "D40", "T10", "X1", "Z2", "Z2", "Z2"],
          mdc: "sxm-F9:t*t-d:r:D40-T10:t*Z2:Z2*Z2",
          transliteration: "sḫm-pḥty dr-pḏt-9",
          translation: "The powerful of might who has repelled the Nine Bows",
          sources: [
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 150-151, 2:N2b" },
          ],
        },
        {
          codes: ["S42", "F9", "F9", "D46", "D21", "D40", "T10", "X1", "Z2", "Z2", "Z2"],
          mdc: "sxm-F9:F9-d:r:D40-T10:t*Z2:Z2*Z2",
          transliteration: "sḫm-pḥty dr-pḏt-9",
          translation: "The powerful of might who has repelled the Nine Bows",
          sources: [
            { text: "Main text Qantara truncated obelisk" },
            { text: "Kitchen, Ramesside Inscriptions , I, 105:9, §51" },
          ],
        },
        {
          codes: ["S42", "G87", "Aa1", "Q3", "O39", "F23", "D46", "D21", "D40", "T10", "X1", "Z2", "Z2", "Z2"],
          mdc: "sxm-G87-x*p:O39-xpS-d:r:D40-pD:t*Z2-Z2:Z2",
          transliteration: "sḫm-ḫpš dr-pḏt-9",
          translation: "The strong-armed one who has repelled the Nine Bows",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , I, 233:15" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 2:N2a" },
          ],
        },
        {
          codes: ["Y5", "N35", "Y1", "Y5", "W24", "W24", "W24", "I10", "X1", "N17", "V28", "N5", "V28"],
          mdc: "mn:n:Y1-mn:nw*nw*nw-D&t:N17-H-ra-H",
          transliteration: "mn-mnw-ḏt-nḥḥ",
          translation: "Enduring of monuments forever",
          sources: [
            { text: "Flaminian obelisk, southern center face" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 2:N4" },
          ],
        },
        {
          codes: ["Y5", "N35", "Y1", "Y5", "N35", "W24", "W24", "W24", "G17", "O90", "X1", "O1", "H6"],
          mdc: "mn:n:Y1-mn:n:nw*nw*nw-m-O90-t:pr-Sw",
          transliteration: "mn-mnw-m-ḥwt-ꜤꜢt-mꜢꜤt",
          translation: "Enduring of monuments in the Great Mansion of Maat",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , I, 233:13" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 2:N3" },
          ],
        },
        {
          codes: ["Y5", "N35", "V13", "G43", "A40", "N35", "N17", "Aa15", "D36", "V31", "I6", "X1", "O49"],
          mdc: "mn:n:T-w-A40-n:N17-Aa15:a:k-I6:t*O49",
          transliteration: "mnṯw-n-tꜢ mk-kmt",
          translation: "Montu of the land, the protector of Egypt",
          sources: [
            { text: "Flaminian obelisk, northern center face" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 2:N6" },
          ],
        },
        {
          codes: ["G45", "I9", "Z7", "D40", "N25", "Z2", "D46", "D21", "D40", "Y5", "N35", "G4", "X1", "Z2", "T14"],
          mdc: "G45-f:W:D40-N25:Z2-d:r:D40-mn:n-G4&t-Z2-T14",
          transliteration: "wꜤf-ḫꜢswt dr-mnṯi͗w",
          translation: "Who has subdued the foreign lands and repelled the bedouin",
        },
      ],
    },
    golden: {
      codes: ["F25", "N28", "D36", "Z2", "F12", "S29", "D21", "D40", "T10", "X1", "Z2", "G17", "N17", "N17", "N17", "V30", "Z2"],
      mdc: "F25-xa:a:Z2-wsr-s-r:D40-pD:t*Z2-m-N17:N17:N17-nb:Z2",
      transliteration: "wḥm-ḫꜤw wsr-pḏwt-m-tꜢw-nbw",
      translation: "Who has repeated appearances, strong of troops in all lands",
      sources: [
        { text: "Beth-Shan stele of Seti I" },
        { text: "Kitchen, Ramesside Inscriptions , I, 11:15-16" },
      ],
      variants: [
        {
          codes: ["F12", "O34", "D21", "D40", "T10", "T10", "T10", "G17", "N17", "N17", "N17", "N21", "N21", "N21", "V30", "V30", "V30"],
          mdc: "wsr-z:r:D40-T10:T10:T10-m-N17:N17:N17:N21*N21*N21-nb:nb:nb",
          transliteration: "wsr-pḏwt-m-tꜢw-nbw",
          translation: "The one who is strong of troops in all lands",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , I, 39" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 2:G2" },
          ],
        },
        {
          codes: ["F12", "S29", "T10", "X1", "Z2", "Aa15", "N17", "N17", "N17", "V30", "Z2"],
          mdc: "wsr-s-T10:t*Z2:M-N17:N17:N17-nb:Z2",
          transliteration: "wsr-pḏwt-m-tꜢw-nbw",
          translation: "The one who is strong of troops in all lands",
          sources: [
            { text: "East face, Qantara truncated obelisk" },
            { text: "Kitchen, Ramesside Inscriptions , I, 106:5, §51" },
          ],
        },
        {
          codes: ["F12", "S29", "T10", "T10", "T10", "Aa15", "N17", "N17", "N17", "V30", "Z2"],
          mdc: "wsr-s-T10:T10:T10-M:N17:N17:N17-nb:Z2",
          transliteration: "wsr-pḏwt-m-tꜢw-nbw",
          translation: "The one who is strong of troops in all lands",
          sources: [
            { text: "Main text Qantara truncated obelisk" },
            { text: "Kitchen, Ramesside Inscriptions , I, 105:9, §51" },
          ],
        },
        {
          codes: ["C2", "U6", "D21", "N35", "S29", "O29v", "D29", "I9"],
          mdc: "C2-mr-r:n-s-aAv-D29:f",
          transliteration: "mri͗.n-rꜤ sꜤꜢ-kꜢ-f",
          translation: "Whom Ra has loved, who has magnified his ka",
          sources: [
            { text: "Flaminian obelisk, western center face" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 2:G6" },
          ],
        },
        {
          codes: ["F35", "M4", "M4", "M4", "S29", "S34", "N35", "Aa1", "N17", "N17"],
          mdc: "nfr-rnp-rnp-rnp-s-anx-n:x:N17:N17",
          transliteration: "nfr-rnpwt sꜤnḫ-tꜢwi͗",
          translation: "Perfect of years, who has sustained the Two Lands",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , I, 161" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 2:G7" },
          ],
        },
        {
          codes: ["G25", "Aa1", "N35", "X1", "I9", "I9", "I9", "S29", "N29", "A28", "O1", "Z1", "O34", "N35", "Z2"],
          mdc: "G25&x:n-t:f:f:f-s-q-A28-O1:Z1-z:n:Z2",
          transliteration: "Ꜣḫ-n-i͗tw.f sḳꜢ pr.sn",
          translation: "The one beneficial to his fathers, who has exalted their temples",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , I, 233" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 2:G3" },
          ],
        },
        {
          codes: ["S29", "R4", "X1", "Q3", "G17", "N5", "U7", "D21", "D21", "X1", "Z2", "I9"],
          mdc: "s-Htp:t*p-m&ra-U7:r:r-t*Z2:f",
          transliteration: "sḥtp-rꜤ m mrrt.f",
          translation: "Who pleases Ra with whatever he (i.e., Ra) wishes",
          sources: [
            { text: "Flaminian obelisk, southern face" },
            { text: "Kitchen, Ramesside Inscriptions , I, 118:4" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 2:G4" },
          ],
        },
        {
          codes: ["S42", "Z1", "A43L", "R8", "X1", "D4", "Y1", "N35", "L1", "D21", "M17", "A40"],
          mdc: "sxm-Z1-A43L-nTr-t:D4:Y1:n-xpr:r-i-A40",
          transliteration: "sḫm-nṯri͗ i͗r.n ḫpri͗",
          translation: "Divine power whom Khepri has begotten",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "C10A", "Y5"],
      mdc: "ra-C10A-mn",
      transliteration: "mn-mꜢꜤt-rꜤ",
      translation: "Eternal is the Truth of Ra",
      sources: [
        { text: "Abydos Canon no. 76" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 150-151, 2:T1" },
      ],
      variants: [
        {
          codes: ["N5", "Y5", "C10A", "S38", "N29", "N17", "N17"],
          mdc: "ra:mn-C10A-HqA-q:N17:N17",
          transliteration: "mn-mꜢꜤt-rꜤ ḥḳꜢ-tꜢwi",
          translation: "Eternal is the Truth of Ra, ruler of the Two Lands",
          sources: [
            { text: "Assuan Year 9 lesser stela" },
            { text: "Kitchen, Ramesside Inscriptions , I, 73:13" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 141i" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 150-151, 2:T11" },
          ],
        },
        {
          codes: ["N5", "Y5", "C10A", "S38", "R19"],
          mdc: "ra:mn-C10A-HqA-R19",
          transliteration: "mn-mꜢꜤt-rꜤ ḥḳꜢ-wꜢst",
          translation: "Eternal is the Truth of Ra, ruler of Thebes",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , I, 34, 40k" },
          ],
        },
        {
          codes: ["N5", "S38", "C10A", "H6", "Y5"],
          mdc: "ra-HqA-C10A-Sw-mn",
          transliteration: "mn-mꜢꜤt-rꜤ ḥḳꜢ-mꜢꜤt",
          translation: "Eternal is the Truth of Ra, ruler of Maat",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , I, 40b" },
            { text: "Chapel of Osiris ceiling inscription" },
          ],
        },
        {
          codes: ["N5", "Y5", "C10A", "S38", "O28"],
          mdc: "ra:mn-C10A-HqA-iwn",
          transliteration: "mn-mꜢꜤt-rꜤ ḥḳꜢ-i͗wnw",
          translation: "Eternal is the Truth of Ra, ruler of Heliopolis",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , I, 34, 36a" },
          ],
        },
        {
          codes: ["N5", "Y5", "C10A", "N5", "Z1", "U7", "N35"],
          mdc: "ra:mn-C10A-ra*Z1:U7:n",
          transliteration: "mn-mꜢꜤt-rꜤ mr.n-rꜤ",
          translation: "Eternal is the Truth of Ra, whom Ra has loved",
          sources: [
            { text: "Inner Osiris Hall, eastern architrave" },
            { text: "Calverley, The Temple of Sethos I at Abydos , III, 30" },
            { text: "Kitchen, Ramesside Inscriptions , I, 163:14" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 150-151, 2:T12" },
          ],
        },
        {
          codes: ["N5", "Y5", "C10A", "N5", "Z1", "D4", "N35"],
          mdc: "ra:mn-C10A-ra*Z1:ir:n",
          transliteration: "mn-mꜢꜤt-rꜤ i͗ri͗.n-rꜤ",
          translation: "Eternal is the Truth of Ra, whom Ra engendered",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , IV, 80" },
          ],
        },
        {
          codes: ["N5", "Y5", "C10A", "N5", "Z1", "F44"],
          mdc: "ra:mn-C10A-ra*Z1:iwa",
          transliteration: "mn-mꜢꜤt-rꜤ i͗wꜤ-rꜤ",
          translation: "Eternal is the Truth of Ra, the heir of Ra",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , II, plate 9" },
          ],
        },
        {
          codes: ["N5", "Y5", "C10A", "N5", "D17"],
          mdc: "ra:mn-C10A-ra:D17",
          transliteration: "mn-mꜢꜤt-rꜤ ti͗t-rꜤ",
          translation: "Eternal is the Truth of Ra, the (very) image of Ra",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , I, plate 36b" },
          ],
        },
        {
          codes: ["N5", "Y5", "C10A", "U21", "N35", "N5"],
          mdc: "ra:mn-C10A-stp&n&ra",
          transliteration: "mn-mꜢꜤt-rꜤ stp.n-rꜤ",
          translation: "Eternal is the Truth of Ra, chosen of Ra",
        },
      ],
    },
    nomen: {
      codes: ["Q3", "X1", "V28", "C7", "M17", "M17", "U6", "N35"],
      mdc: "p:t-H-C7-i*i*mr:n",
      transliteration: "stḥy mri͗.n-ptḥ",
      translation: "Seti, beloved of Ptah",
      sources: [
        { text: "Kitchen, Ramesside Inscriptions , I, 39" },
      ],
      variants: [
        {
          codes: ["M17", "Y5", "N35", "U7", "C7", "M17", "M17", "N35"],
          mdc: "i-mn:n:U7-stX*i*i:n",
          transliteration: "stḥy mri͗.n-imn",
          translation: "Seti, beloved of Amun",
          sources: [
            { text: "Variant used at Thebes" },
            { text: "Karnak Northern War scene, great Hyptstyle Hall" },
            { text: "Kitchen, Ramesside Inscriptions , I, 7" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 150-151, 2:E3" },
          ],
        },
        {
          codes: ["Q3", "X1", "V28", "A43", "V39", "M17", "M17", "N36", "N35"],
          mdc: "p:t-H-A43-V39-i-i-N36:n",
          transliteration: "wsi͗ri͗ stḥi͗ mr.i͗-n-ptḥ",
          translation: "Osiris Seti, beloved of Ptah",
          sources: [
            { text: "Calverley, The Temple of Sethos I at Abydos , I-IV" },
          ],
        },
        {
          codes: ["C7", "M17", "M17"],
          mdc: "stX-i-i",
          transliteration: "stḥy",
          translation: "The one who belongs to (the god) Seth",
        },
      ],
    },
  },

  "ramesses-ii": {
    horus: {
      codes: ["E1", "D40", "C2", "U6"],
      mdc: "E1:D40-C2-mr",
      transliteration: "kꜢ-nḫt mri-rꜤ",
      translation: "The strong bull, beloved of Ra",
      sources: [
        { text: "Place de la Concorde obelisk North right column" },
        { text: "Rosellini, I Monumenti dell' Egitto e della Nubia, IV-1, plate CXVII a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 3:H3" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "N5", "Z1", "A40", "N36"],
          mdc: "E1:D40-ra:1-A40-N36",
          transliteration: "kꜢ-nḫt mri͗-rꜤ",
          translation: "The strong bull, beloved of Ra",
          sources: [
            { text: "Place de la Concorde obelisk, West right column" },
            { text: "Rosellini, I Monumenti dell' Egitto e della Nubia, IV-1, plate CXVII a" },
          ],
        },
        {
          codes: ["E1", "D40", "N5", "Z1", "A40", "U6", "M17", "M17"],
          mdc: "E1:D40-ra:1-A40-mr-i-i",
          transliteration: "kꜢ-nḫt mri͗-rꜤ",
          translation: "The strong bull, beloved of Ra",
          sources: [
            { text: "Luxor obelisk, West left column" },
            { text: "Rosellini, I Monumenti dell' Egitto e della Nubia, IV-1, plate CXVII b" },
          ],
        },
        {
          codes: ["E1", "D40", "C2", "U6", "Q3", "Q3", "X1", "X1", "D40"],
          mdc: "E1:D40-C2-mr-p*p:t*t:D40",
          transliteration: "kꜢ-nḫt-mri͗-rꜤ ptpt-ḫꜢswt-nb(w)t ḫr-ṯbwt.f",
          translation: "Strong bull, beloved of Ra, who has trampled all the foreign countries under his sandals",
          sources: [
            { text: "Rhetorical stela (Tanis V, face C)" },
            { text: "Kitchen, Ramesside Inscriptions , II 294:10" },
            { text: "Petrie, Tanis, II, pl. III (81)" },
          ],
        },
        {
          codes: ["E1", "D40", "C10A", "U6"],
          mdc: "E1:D40-C10A-mr",
          transliteration: "kꜢ-nḫt mri͗-mꜢꜤt",
          translation: "The strong bull, beloved of Maat",
          sources: [
            { text: "Place de la Concorde obelisk, North center column" },
            { text: "Rosellini, I Monumenti dell' Egitto e della Nubia, IV-1, plate CXVII a" },
          ],
        },
        {
          codes: ["E1", "D40", "X1", "C10A", "N36"],
          mdc: "E1:D40-Aa11v:t-C10A-N36",
          transliteration: "kꜢ-nḫt mri͗-mꜢꜤt",
          translation: "The strong bull, beloved of Maat",
          sources: [
            { text: "Place de la Concorde obelisk, West left column" },
            { text: "Rosellini, I Monumenti dell' Egitto e della Nubia, IV-1, plate CXVII a" },
          ],
        },
        {
          codes: ["E1", "D40", "X1", "C10A", "U6", "M17", "M17"],
          mdc: "E1:D40-Aa11v:t-C10A-mr-i-i",
          transliteration: "kꜢ-nḫt mri͗-mꜢꜤt",
          translation: "The strong bull, beloved of Maat",
          sources: [
            { text: "Place de la Concorde obelisk, South right column" },
            { text: "Rosellini, I Monumenti dell' Egitto e della Nubia, IV-1, plate CXVII a" },
          ],
        },
        {
          codes: ["E1", "D40", "U6", "M17", "M17", "X1", "C10A"],
          mdc: "E1:D40-mr-i-i-Aa11v:t-C10A",
          transliteration: "kꜢ-nḫt mri͗-mꜢꜤt",
          translation: "The strong bull, beloved of Maat",
          sources: [
            { text: "Mariette, Abydos, II, pl. 20a (1)" },
          ],
        },
        {
          codes: ["E1", "D40", "C10A", "U6", "V30", "O23D", "Z3", "W19", "X1", "I9", "Z1", "I9", "Q3", "X1", "V28", "C18C"],
          mdc: "E1:D40-C10A-mr-nb:O23D-Z3-mi-t:f:Z1:f-p:t-H-C18C",
          transliteration: "kꜢ-nḫt mri͗-mꜢꜤt nb-ḥꜢbw-sd-mi͗-i͗t.f-ptḥ-tꜢṯnn",
          translation: "The strong bull, beloved of Maat, possessor of Sed festivals like his father Ptah-Tatenen",
          sources: [
            { text: "Blessing of Ptah, Karnak Pylon IX (west)" },
            { text: "Kitchen, Ramesside Inscriptions , II, 259:2-4" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 3:H2" },
          ],
        },
        {
          codes: ["E1", "D40", "M17", "Y5", "N35", "G39"],
          mdc: "E1:D40-i-mn:n-zA&1",
          transliteration: "kꜢ-nḫt i͗mn-zꜢ",
          translation: "The strong bull, son of Amun",
          sources: [
            { text: "Place de la Concorde obelisk, South left column" },
            { text: "Rosellini, I Monumenti dell' Egitto e della Nubia, IV-1, plate CXVII a" },
          ],
        },
        {
          codes: ["E1", "D40", "M17", "Y5", "N35", "H8", "Z1"],
          mdc: "E1:D40-i-mn:n:H8*1",
          transliteration: "kꜢ-nḫt i͗mn-zꜢ",
          translation: "The strong bull, son of Amun",
          sources: [
            { text: "Luxor obelisk, North right column" },
            { text: "Rosellini, I Monumenti dell' Egitto e della Nubia, IV-1, plate CXVII b" },
          ],
        },
        {
          codes: ["E1", "D40", "G39", "X1", "U15"],
          mdc: "E1:D40-zA&1-t:tm",
          transliteration: "kꜢ-nḫt zꜢ-ttm",
          translation: "The strong bull, son of Atum",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , II, 501:4" },
          ],
        },
        {
          codes: ["E1", "D40", "G39", "X1", "U15"],
          mdc: "E1:D40-zA-t:tm",
          transliteration: "kꜢ-nḫt zꜢ-i͗tm",
          translation: "The strong bull, son of Atum",
          sources: [
            { text: "Petrie, Tanis, I, plate VII (44)" },
          ],
        },
        {
          codes: ["E1", "D40", "X1", "U15", "H8", "Z1"],
          mdc: "E1:D40-t:tm-H8:Z1",
          transliteration: "kꜢ-nḫt zꜢ-i͗tm",
          translation: "The strong bull, son of Atum",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , II, 424:3 (1)" },
            { text: "Porter & Moss, Topographical Bibliography IV, 20 (163)" },
            { text: "Petrie, Tanis, I, plate XI (60)" },
          ],
        },
        {
          codes: ["E1", "D40", "C18C", "H8", "Z1"],
          mdc: "E1:D40-C18C-H8:1",
          transliteration: "kꜢ-nḫt zꜢ-ṯꜢ-tnn",
          translation: "The strong bull, son of Tatenen",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , II, 501:8" },
          ],
        },
        {
          codes: ["E1", "D40", "C20", "H8", "Z1"],
          mdc: "E1:D40-C20-H8:1",
          transliteration: "kꜢ-nḫt zꜢ-ptḥ",
          translation: "The strong bull, son of Ptah",
          sources: [
            { text: "Petrie, Tanis, I, plate VII (46)" },
          ],
        },
        {
          codes: ["E1", "D40", "C12", "H8", "Z1"],
          mdc: "E1:D40-C12-H8:1",
          transliteration: "kꜢ-nḫt zꜢ-ptḥ",
          translation: "The strong bull, son of Ptah",
          sources: [
            { text: "Petrie, Tanis, I, plate VI (43 B)" },
          ],
        },
        {
          codes: ["E1", "D40", "Q3", "X1", "V28", "H8", "Z1"],
          mdc: "E1:D40-p:t-H-H8:Z1",
          transliteration: "kꜢ-nḫt zꜢ-ptḥ",
          translation: "The strong bull, son of Ptah",
          sources: [
            { text: "Petrie, Tanis, I, pl. IX (52), pl. VI (43 B)" },
          ],
        },
        {
          codes: ["E1", "D40", "F12", "F9", "F9"],
          mdc: "E1:D40-wsr-F9:F9",
          transliteration: "kꜢ-nḫt wsr-pḥty",
          translation: "The strong bull, strong of might",
          sources: [
            { text: "Place de la Concorde obelisk, North left column" },
            { text: "Rosellini, I Monumenti dell' Egitto e della Nubia, IV-1, plate CXVII a" },
          ],
        },
        {
          codes: ["E1", "D40", "F12", "S29", "F9", "F9"],
          mdc: "E1:D40-wsr-s-F9:F9",
          transliteration: "kꜢ-nḫt wsr-pḥti͗",
          translation: "The strong bull, strong of might",
          sources: [
            { text: "Petrie, Tanis, I, plate VIII (50)" },
          ],
        },
        {
          codes: ["E1", "D40", "G36", "D21", "F9", "F9"],
          mdc: "E1:D40-wr:r-F9:F9",
          transliteration: "kꜢ-nḫt wr-pḥty",
          translation: "The strong bull, great of might",
          sources: [
            { text: "Place de la Concorde obelisk, West center column" },
            { text: "Rosellini, I Monumenti dell' Egitto e della Nubia, IV-1, plate CXVII a" },
          ],
        },
        {
          codes: ["E1", "D40", "G36", "F9", "F9"],
          mdc: "E1:D40-wr:F9*F9",
          transliteration: "kꜢ-nḫt wr-pḥti͗",
          translation: "The strong bull, great of might",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , II, 424/3 (2)" },
            { text: "Porter & Moss, Topographical Bibliography , IV, 20 (163)" },
            { text: "Petrie, Tanis, I, plate XI (60)" },
          ],
        },
        {
          codes: ["E1", "D40", "C177", "U6"],
          mdc: "E1:D40-C177-mr",
          transliteration: "kꜢ-nḫt mri͗ wsr-mꜢꜤt-rꜤ",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , II, 405 (152A)" },
            { text: "Petrie Hyksos and Israelite cities, plates XXIX-XXX" },
          ],
        },
        {
          codes: ["E1", "D40", "C177", "N36"],
          mdc: "E1:D40-C177-N36",
          transliteration: "kꜢ-nḫt mri͗ wsr-mꜢꜤt-rꜤ",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 152g" },
          ],
        },
        {
          codes: ["E1", "D40", "Q3", "X1", "V28", "U6"],
          mdc: "E1:D40-p:t-H-mr",
          transliteration: "kꜢ-nḫt mri͗-ptḥ",
          translation: "The strong bull, beloved of Ptah",
          sources: [
            { text: "Petrie, Tanis, I, plate VII (45)" },
          ],
        },
        {
          codes: ["E1", "D40", "G20", "V31", "S32", "X1", "O49"],
          mdc: "E1:D40-G20-k:S32:t*O49",
          transliteration: "kꜢ-nḫt mk-kmt",
          translation: "The strong bull, protector of Egypt",
          sources: [
            { text: "Mariette, Abydos, II, plate 20a (2)" },
          ],
        },
        {
          codes: ["E1", "N35", "C2A", "S42"],
          mdc: "E1:n-C2A-sxm",
          transliteration: "kꜢ-n-sḫm-rꜤ",
          translation: "The powerful bull of Ra",
          sources: [
            { text: "Petrie, Tanis, I, plate VII (47)" },
          ],
        },
        {
          codes: ["E1", "D40", "G36", "D21", "O23K", "Z2", "N36", "N17", "N17", "N21", "N21"],
          mdc: "E1:D40-wr:r-O23K:Z2-N36:N17:N17:N21*N21",
          transliteration: "kꜢ-nḫt wr-ḥꜢbw-sd mri͗-tꜢwi͗",
          translation: "The Strong bull, great of Sed festivals and beloved of the Two Lands",
          sources: [
            { text: "Place de la Concorde obelisk, East right column" },
            { text: "Rosellini, I Monumenti dell' Egitto e della Nubia, IV-1, plate CXVII a" },
          ],
        },
        {
          codes: ["E1", "D40", "G36", "O23", "Z2A"],
          mdc: "E1:D40-wr:O23-Z2A",
          transliteration: "kꜢ-nḫt wr-ḥb-sd-3",
          translation: "The Strong bull, great of Sed festivals",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , II, 501:3" },
          ],
        },
        {
          codes: ["G36", "D21", "O23P", "Z1", "Z1", "W19", "C18C"],
          mdc: "wr:r-O23P-1:2-mi-C18C",
          transliteration: "wr-ḥꜢbw(-sd)-mi͗-tꜢtnn",
          translation: "Great of Sed festivals like Tatenen",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , III, 111 (65)" },
            { text: "University Museum of Philadelphia E 13566" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 3:H26" },
          ],
        },
        {
          codes: ["E1", "D40", "G36", "D21", "N35", "M3", "Aa1", "X1", "Z2", "D40", "D34", "D2", "F23", "I9"],
          mdc: "E1:D40-wr:r-n:xt:x*t-Z2:D40-D34-D2-xpS:f",
          transliteration: "kꜢ-nḫt wr-nḫtw ꜤḥꜢ-ḥr-ḫpš.f",
          translation: "The strong bull, who has fought with his strong arm",
          sources: [
            { text: "Place de la Concorde obelisk, East left column" },
            { text: "Rosellini, I Monumenti dell' Egitto e della Nubia, IV-1, plate CXVII a" },
          ],
        },
        {
          codes: ["E1", "D40", "D34", "D2", "Z1", "F23", "D40", "I9"],
          mdc: "E1:D40-D34-D2:Z1-xpS:D40:f",
          transliteration: "kꜢ-nḫt ꜤḥꜢ-ḥr-ḫpš.f",
          translation: "The strong bull, who has fought with his strong arm",
          sources: [
            { text: "Place de la Concorde obelisk, South center column" },
            { text: "Rosellini, I Monumenti dell' Egitto e della Nubia, IV-1, plate CXVII a" },
          ],
        },
        {
          codes: ["E1", "D40", "S24", "O34", "D40", "N17", "N17", "N21", "N21"],
          mdc: "E1:D40-Tz:z:D40-N17:N17:N21*N21",
          transliteration: "kꜢ-nḫt ṯz-tꜢwi͗",
          translation: "The strong bull, who has governed the Two Lands",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , II, 420:9" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 3:H20" },
          ],
        },
        {
          codes: ["E1", "D40", "S29", "D46", "N21", "Z9", "D40", "S22", "X1", "X1", "G4", "Z2"],
          mdc: "E1:D40-s-d:N21*Z9:D40-S22:t*t-G4&Z2",
          transliteration: "kꜢ-nḫt sḏ-sṯti͗w",
          translation: "The strong bull, who shattered the Asiatics",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , II, 605:15" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 3:H24" },
          ],
        },
        {
          codes: ["E1", "D40", "L1", "D21", "A40", "Z1"],
          mdc: "E1:D40-xpr:r-A40:1",
          transliteration: "kꜢ-nḫt ḫpr-r-nṯr",
          sources: [
            { text: "Petrie, Tanis, I, plate VIII (50)" },
          ],
        },
        {
          codes: ["E1", "D40", "L1", "H8", "A40"],
          mdc: "E1:D40-xpr:H8-A40",
          transliteration: "kꜢ-nḫt ḫpr-sꜢ-nṯr",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , II, 424:5 (1)" },
            { text: "Porter & Moss, Topographical Bibliography , IV, 20 (163)" },
          ],
        },
        {
          codes: ["E1", "D40", "F12", "C10A"],
          mdc: "E1:D40-wsr-C10A",
          transliteration: "kꜢ-nḫt wsr-mꜢꜤt",
          translation: "The strong bull, strong of Maat",
          sources: [
            { text: "Mariette, Abydos, II, plate 20 g" },
          ],
        },
        {
          codes: ["E1", "D40", "F12", "T16A"],
          mdc: "E1:D40-wsr-T16A",
          transliteration: "kꜢ-nḫt wsr-ḫpš",
          translation: "The strong bull, strong with sword",
          sources: [
            { text: "Mariette, Abydos, II, plate 20 d (3)" },
          ],
        },
        {
          codes: ["E1", "D40", "F12", "M4", "X1", "Z1"],
          mdc: "E1:D40-wsr-rnp-t:3",
          transliteration: "kꜢ-nḫt wsr-rnpwt",
          translation: "The strong bull, rich in years",
          sources: [
            { text: "Mariette, Abydos, II, plate 20 b (2)" },
          ],
        },
        {
          codes: ["E1", "D40", "F12", "S29", "M4", "M4", "M4", "I8A", "I8A", "I8A"],
          mdc: "E1:D40-wsr-s-rnp-rnp-rnp-I8A-I8A-I8A",
          transliteration: "kꜢ-nḫt wsr-rnpt ḥfnw",
          translation: "The strong bull rich in immesureable years",
          sources: [
            { text: "Mariette, Abydos, II, plate 19 d" },
          ],
        },
        {
          codes: ["E1", "D40", "O29v", "D36", "H4", "Z1"],
          mdc: "E1:D40-aAv:a:H4*3",
          transliteration: "kꜢ-nḫt ꜤꜢꜤ-rm-3",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , II, 501:7" },
          ],
        },
        {
          codes: ["E1", "D40", "V28", "A24", "N17", "V30"],
          mdc: "E1:D40-H-A24-N17:nb",
          transliteration: "kꜢ-nḫt ḥwi͗-tꜢ-nb",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , II, 424:6 (2)" },
            { text: "Porter & Moss, Topographical Bibliography , IV, 20 (163)" },
          ],
        },
        {
          codes: ["E1", "D40", "O29v", "F7", "X1", "Z1"],
          mdc: "E1:D40-aAv:F7-t:3",
          transliteration: "kꜢ-nḫt ꜤꜢ-šfi͗t",
          translation: "The strong bull, great of majesty",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , II, 424/5 (2)" },
            { text: "Porter & Moss, Topographical Bibliography , IV, 20 (163)" },
          ],
        },
        {
          codes: ["E1", "D40", "V28", "D36", "Z4", "D2", "C10A"],
          mdc: "E1:D40-H-a:y-D2-C10A",
          transliteration: "kꜢ-nḫt hꜤi͗-ḥr-mꜢꜤt",
          translation: "The strong bull, who rejoiced Maat",
          sources: [
            { text: "Headless statue of Ramesses II (Cairo museum JE 36652, CG 42140)" },
            { text: "Kitchen, Ramesside Inscriptions , II, 586:9" },
          ],
        },
        {
          codes: ["E1", "D40", "U39", "C10"],
          mdc: "E1:D40-U39-C10",
          transliteration: "kꜢ-nḫt wṯz-mꜢꜤt",
          translation: "The strong bull, who has upheld Maat",
          sources: [
            { text: "Mariette, Abydos, II, plate 20 c (3)" },
          ],
        },
        {
          codes: ["E1", "D40", "N35", "N5", "Z1", "A40", "S29", "D46", "N21", "Z9", "D40", "S22", "X1", "G4", "X1", "Z2"],
          mdc: "E1:D40-n:(ra:Z1)*A40-s-d:N21*Z9:D40-S22-t*G4*t:Z2",
          transliteration: "kꜢ-nḫt m-rꜤ sḏ-sṯti͗w",
          sources: [
            { text: "Place de la Concorde obelisk, East center column" },
            { text: "Rosellini, I Monumenti dell' Egitto e della Nubia, IV-1, plate CXVII a" },
          ],
        },
        {
          codes: ["E1", "D40", "S42", "F9", "F9", "D40"],
          mdc: "E1:D40-S42-F9*F9:D40",
          transliteration: "kꜢ-nḫt sḫm-pḥti͗-nḫt",
          translation: "The strong bull, powerful of might",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , II, 409:9" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 3:H9" },
          ],
        },
        {
          codes: ["E1", "D40", "Y5", "N35", "Y1", "F34", "Z1", "S42", "F9", "F9", "X1", "X1", "D40"],
          mdc: "E1:D40-mn:n:Y1-ib:Z1-sxm-F9*F9:t*t:D40",
          transliteration: "kꜢ-nḫt mn-i͗b sḫm-pḥti͗",
          translation: "The strong bull, decisive and mighty",
          sources: [
            { text: "Luxor obelisk, West center column" },
            { text: "Rosellini, I Monumenti dell' Egitto e della Nubia, IV-1, plate CXVII b" },
          ],
        },
        {
          codes: ["E1", "D40", "N29", "A28", "S1"],
          mdc: "E1:D40-q-A28-S1",
          transliteration: "kꜢ-nḫt ḳꜢi͗-ḥḏt",
          translation: "The strong bull, whose White Crown is high",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , II, 424:6 (1)" },
            { text: "Porter & Moss, Topographical Bibliography , IV, 20 (163)" },
          ],
        },
        {
          codes: ["E1", "D40", "S29", "N29", "A28", "R19"],
          mdc: "E1:D40-s-q-A28-R19",
          transliteration: "kꜢ-nḫt sḳꜢi͗-wꜢst",
          translation: "The strong bull, who has elevated Thebes",
          sources: [
            { text: "Luxor obelisk, North center column" },
            { text: "Rosellini, I Monumenti dell' Egitto e della Nubia, IV-1, plate CXVII b" },
          ],
        },
        {
          codes: ["E1", "D40", "M44", "F16", "F16"],
          mdc: "E1:D40-M44-F16:F16",
          transliteration: "kꜢ-nḫt spd-Ꜥbwi͗",
          translation: "The sharp-horned strong bull",
          sources: [
            { text: "Petrie, Tanis, I, plate VII (45)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 3:H17" },
          ],
        },
        {
          codes: ["E1", "N35", "S38", "S38", "S38", "C12C", "U6"],
          mdc: "E1:n-HqA-HqA-HqA-C12C-mr",
          transliteration: "kꜢ-n-ḥḳꜢw mri͗-i͗mn",
          translation: "The strong bull of the rulers, beloved of Amun",
          sources: [
            { text: "Petrie, Tanis, I, plate VIII (48)" },
          ],
        },
        {
          codes: ["E1", "D40", "G45", "I9", "D206", "N25", "X1", "Z2"],
          mdc: "E1:D40-G45:f-D206:N25:t*Z2",
          transliteration: "kꜤ-nḫt wꜢf-ḫꜢswt",
          translation: "Strong bull, who has subdued the foreign lands",
        },
      ],
    },
    nebty: {
      codes: ["G20", "V31", "I6", "X1", "O49", "G45", "I9", "Z7", "D40", "N25", "X1", "Z2"],
      mdc: "G20-k:I6-t:O49-G45-f:W:D40-N25:t*Z2",
      transliteration: "mk-kmt wꜤf-ḫꜢswt",
      translation: "Protector of Egypt who curbs foreign lands",
      sources: [
        { text: "Passim" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 3:N1" },
      ],
      variants: [
        {
          codes: ["Aa15", "D36", "V31", "I6", "X1", "O49", "G45", "I9", "D40", "N25", "X1", "Z2", "C2", "F31", "S29", "R8A", "W11", "D21", "U17", "Y1", "N17", "N17", "N21", "N21"],
          mdc: "Aa15:a:k-I6:t*O49-G45-f:D40-N25:t*Z2-C2-ms-s-nTrw-g:r-U17:Y1-N17:N17:N21*N21",
          transliteration: "mk-kmt wꜤf-ḫꜢswt rꜤ-msi͗-nṯrw grg-tꜢwi͗",
          translation: "Protector of Egypt, who has subdued foreign lands, Ra whom the gods have borne, the founder of the Two Lands",
          sources: [
            { text: "Passim" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 3:N2" },
          ],
        },
        {
          codes: ["G20", "V31", "I6", "X1", "O49", "G45", "I9", "D40", "N25", "N25", "N25"],
          mdc: "G20-k:I6-t:O49-G45-f:D40-N25:N25:N25",
          transliteration: "mk kmt wꜤf ḫꜢswt",
          translation: "Protector of Egypt, who has subdued foreign lands",
          sources: [
            { text: "Luxor obelisk, South face marginal" },
            { text: "Kitchen, Ramesside Inscriptions II, 600:10" },
          ],
        },
        {
          codes: ["S29", "O42B", "Q3", "A53", "R8", "X1", "D21", "Z4", "Y1", "N35", "L1", "D21", "A41"],
          mdc: "s-O42B:p-A53-nTr-t:r:Z4-Y1:n-xpr:r-A41",
          transliteration: "šzp-nṯri͗-n-ḫpri͗",
          translation: "The divine image of Khepri",
          sources: [
            { text: "Headless statue of Ramesses II (Cairo museum JE 36652, CG 42140)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 3:N3" },
          ],
        },
        {
          codes: ["G36", "D21", "F7", "X1", "G20", "V31", "I6", "X1", "O49"],
          mdc: "wr:r-F7:t-G20-k:I6-t:O49",
          transliteration: "wr-šfi͗y.t mk-kmt",
          translation: "Great of majesty, the Protector of Egypt",
          sources: [
            { text: "Luxor Obelisk (west face)" },
            { text: "Kitchen, Ramesside Inscriptions , II, 599:5" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 3:N4" },
          ],
        },
        {
          codes: ["V71", "A28", "Y1v", "D2", "X1", "X1", "C10", "W19", "N27", "X1", "Z4", "O1", "O1"],
          mdc: "V71-A28-Y1v-D2:t-Aa11v:t-mAat-mi-N27:t*Z4:O1*O1",
          transliteration: "ḥꜤi͗-ḥr-mꜢꜤt-mi͗-Ꜣḫti͗",
          translation: "Who has rejoiced in Maat like Horakhty",
          sources: [
            { text: "Luxor Obelisk (south face)" },
            { text: "Kitchen, Ramesside Inscriptions , II, 599:8" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 3:N6" },
          ],
        },
        {
          codes: ["S29", "Y5", "N35", "Aa1", "U22", "Y1", "Y5", "W24", "W24", "W24", "Aa15", "O45", "O1", "M24", "X1", "Z1", "N35", "X1", "I9", "M17", "Y5", "N35", "X8", "M23", "G43", "D2", "X1", "W11", "O1", "I9"],
          mdc: "s-mn:n:x*mnx:mDAt-mn:nw*nw*nw:Aa15-O45:O1-M24-t:1-n:t:f-i-mn:n-X8-sw-w-(Hr:t-g:O1):f",
          transliteration: "smnḫ mnw m ipt-rsy(t) n it.f imn di sw ḥr nst.f",
          translation: "Who has made monuments splendid in Ipet-Resyt for his father Amun who put him on the throne",
          sources: [
            { text: "Luxor pylon" },
            { text: "Kitchen, Ramesside Inscriptions , II, 605:11" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:N5" },
          ],
        },
        {
          codes: ["D34", "D40", "N35", "C11", "Z1", "Z1", "E22", "S42", "G17", "F34"],
          mdc: "D34-D40:n-C11-1:3-E22-sxm-m&ib",
          transliteration: "ꜤḥꜢ n ḥḥw mꜢi sḫm-ib",
          translation: "Who has fought for millions, a stout-hearted lion",
          sources: [
            { text: "Luxor obelisk, East face, center" },
            { text: "Kitchen, Ramesside Inscriptions , II, 602:15" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:N7" },
          ],
        },
        {
          codes: ["D34", "D40", "D2", "Z1", "F23", "D40", "I9", "Aa15", "D36", "V31", "A12", "Z3", "I9"],
          mdc: "D34-D40:D2*Z1-xpS:D40:f-Aa15:a:k-A12*Z3:f",
          transliteration: "ꜤḥꜢ ḥr ḫpš.f mk mšꜤw.f",
          translation: "Who has fought with his strong arm, the protector of his armies",
          sources: [
            { text: "Luxor pylon, east wing, north facade" },
            { text: "Kitchen, Ramesside Inscriptions , II, 605:15" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:N8" },
          ],
        },
        {
          codes: ["S29", "Aa1", "A15", "D40", "F22", "D54", "M23", "W25", "N35", "F22", "Z7", "Z4", "N17"],
          mdc: "s-x:A15:D40-F22:D54-sw-W25-n:F22-W*Z4:N17",
          transliteration: "sḫr pḥw sw in pḥwy tꜢ",
          translation: "Who has felled those who attacked him and who has captured the ends of the earth",
        },
      ],
    },
    golden: {
      codes: ["F12", "S29", "M4", "M4", "M4", "O29v", "D40", "Z2"],
      mdc: "wsr-s-rnp-rnp-rnp-aAv:D40:Z2",
      transliteration: "wsr-rnpwt ꜤꜢ-nḫtw",
      translation: "Rich in years, great in victories",
      sources: [
        { text: "Passim" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:G1a" },
      ],
      variants: [
        {
          codes: ["F12", "S29", "M4", "M4", "M4", "O29v", "M23", "M17", "M17", "X1", "Z1", "W19", "M17", "X1", "U15", "Aa15", "A304", "M17", "U33", "M17", "M17", "A23A", "F31", "S29", "A17", "R8", "A40", "Z1", "S29", "L1", "D21", "M13", "M13"],
          mdc: "wsr-s-M4-M4-M4-O29v-sw-i-i-t:3-W19-i-t:U15:M-A304-i-ti-i-i-A23A-ms-s-A17-R8-A40:3-s-xpr:r-wAD-wAD",
          transliteration: "wsr-rnpwt ꜤꜢ-nsyt mi itmw ity ms nṯrw sḫpr tꜢwy",
          translation: "Rich in years and great of kingship like Atum, the sovereign whom the gods fashioned, the one who has fostered the Two Lands",
          sources: [
            { text: "Karnak Temple of Amun, girdle wall" },
            { text: "Kitchen, Ramesside Inscriptions II 583:4" },
          ],
        },
        {
          codes: ["F12", "F23", "N36", "N17", "N17"],
          mdc: "F12-F23:N36:N17:N17",
          transliteration: "wsr-ḫpš mri͗-tꜢwi͗",
          translation: "Strong of might, beloved of the Two Lands",
          sources: [
            { text: "Luxor obelisk, south face" },
            { text: "Kitchen, Ramesside Inscriptions , II, 599:8" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:G3" },
          ],
        },
        {
          codes: ["F12", "Aa1", "Q3", "N37", "F24", "N36", "N17", "N17", "N21", "N21"],
          mdc: "wsr-x*p:N37:F24-N36:N17:N17:N21*N21",
          transliteration: "wsr-ḫpš mry tꜢwy",
          translation: "Strong of might, beloved of the Two Lands",
          sources: [
            { text: "Luxor pylon IV East wing, South face (upper)" },
            { text: "Kitchen, Ramesside Inscriptions 352:13" },
          ],
        },
        {
          codes: ["F12", "Aa1", "Q3", "N37", "T16"],
          mdc: "wsr-x*p:N37:T16",
          transliteration: "wsr-ḫpš",
          translation: "Strong of might",
          sources: [
            { text: "Derr temple, Nubia" },
            { text: "Kitchen, Ramesside Inscriptions II, 740:6" },
          ],
        },
        {
          codes: ["O29v", "F23", "U6", "M17", "M17", "N17", "N17", "N21", "N21"],
          mdc: "aAv:xpS-mr-i-i-N17:N17:N21*N21",
          transliteration: "ꜤꜢ-ḫpš mri͗-tꜢwi͗",
          translation: "Great of effectiveness, beloved of the Two Lands",
          sources: [
            { text: "Headless statue of Ramesses II (Cairo museum JE 36652, CG 42140)" },
            { text: "Kitchen, Ramesside Inscriptions , II, 586:10" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 152-153, 3:G2" },
          ],
        },
        {
          codes: ["R16", "W19", "Z11", "R19", "A40"],
          mdc: "R16-mi-Z11-R19-A40",
          transliteration: "wḫꜢ mi͗-i͗mi͗-wꜢst",
          translation: "A pillar, like the one who is in Thebes",
          sources: [
            { text: "Luxor obelisk north center column" },
            { text: "Kitchen, Ramesside Inscriptions , II, 599:3" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:G4" },
          ],
        },
        {
          codes: ["V28", "V28", "Z4", "D54", "X1", "G25", "Aa1", "Z2", "S3", "F31", "S29", "S29"],
          mdc: "H-H-y:D54-t&G25&x:Z2-N-ms-s-s",
          transliteration: "ḥḥ-Ꜣḫwt-n-msi͗-sw",
          translation: "Who seeks benefits for the one who bore him",
          sources: [
            { text: "Luxor pylon, west wing" },
            { text: "Kitchen, Ramesside Inscriptions , II, 605:12" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:G5" },
          ],
        },
        {
          codes: ["S42", "Aa15", "D40", "F23", "D46", "D21", "D40", "T10", "X1", "Z1", "Z1", "Z1"],
          mdc: "sxm-Aa15:D40:xpS-d:r:D40-pD:t*3:3*3",
          transliteration: "sḫm-ḫpš dr-pḏt-9",
          translation: "The powerful of arm, who has repelled the Nine Bows",
          sources: [
            { text: "Luxor pylon, west wing" },
            { text: "Kitchen, Ramesside Inscriptions , II, 605:15-16" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:G6" },
          ],
        },
        {
          codes: ["G36", "D21", "N35", "M3", "G248", "Aa1", "Z2", "D2", "Z1", "N25", "V30", "X1"],
          mdc: "wr:r-n:M3-G248-x:Z2-D2:Z1-N25:nb:t",
          transliteration: "wr-nḫtw-ḥr-ḫꜢst-nbt",
          translation: "Great of victories in every foreign country",
          sources: [
            { text: "Place de la Concorde obelisk, east center column" },
            { text: "Kitchen, Ramesside Inscriptions , II, 602:16" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:G7" },
          ],
        },
        {
          codes: ["G36", "D21", "I9", "F40", "Z7", "X1", "Z1", "S42", "F9", "F9", "D40"],
          mdc: "wr:r:f-F40&W-t:3-sxm-F9*F9:D40",
          transliteration: "wr-fꜢwt sḫm-pḥti͗",
          translation: "Great of splendor and powerful of strength",
          sources: [
            { text: "Luxor obelisk, east center column" },
            { text: "Kitchen, Ramesside Inscriptions , II, 603:2-3" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:G8" },
          ],
        },
        {
          codes: ["G45", "I9", "Z7", "D40", "N25", "X1", "Z2", "D46", "D21", "D40", "D58", "N37", "X1", "Z7", "A14", "Z2"],
          mdc: "G45-f:W:D40-N25:t*Z2-d:r:D40-b-N37:t*W-A14:Z2",
          transliteration: "wꜢf-ḫꜢswt dr-bšṯw",
          translation: "Who has subdued foreign countries and repelled the rebellious ones",
          sources: [
            { text: "Luxor obelisk west center column" },
            { text: "Kitchen, Ramesside Inscriptions , II, 599:5-6" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:G9" },
          ],
        },
        {
          codes: ["G45", "I9", "D58", "N37", "X1", "A14A"],
          mdc: "G45:f-b-N37:t*A14A",
          transliteration: "wꜤf-bštw",
          translation: "Who has subdued the rebellious ones",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "F12", "C10A", "U21", "N35", "N5"],
      mdc: "ra-wsr-C10A-stp&n&ra",
      transliteration: "wsr-mꜢꜤt-rꜤ stp.n-rꜤ",
      translation: "The justice of Ra is powerful, chosen of Ra",
      sources: [
        { text: "Saqqara Canon no. 1" },
        { text: "Passim" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:T9" },
      ],
      variants: [
        {
          codes: ["N5", "C177", "U21", "N35", "N5"],
          mdc: "ra-C177-stp&n&ra",
          transliteration: "wsr-mꜢꜤt-rꜤ stp-n-rꜤ",
          translation: "The justice of Ra is powerful, chosen of Ra",
          sources: [
            { text: "Abu Simbel" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 159.185ff" },
          ],
        },
        {
          codes: ["N5", "F12", "H6", "U21", "N35", "N5"],
          mdc: "ra-wsr-H6-stp&n&ra",
          transliteration: "wsr-mꜢꜤt-rꜤ stp-n-rꜤ",
          translation: "The justice of Ra is powerful, chosen of Ra",
          sources: [
            { text: "ASAE , 9, 75" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:T10" },
          ],
        },
        {
          codes: ["C59A", "U21", "N35", "N5"],
          mdc: "C59A-stp&n&ra",
          transliteration: "wsr-mꜢꜤt-rꜤ stp-n-rꜤ",
          translation: "The justice of Ra is powerful, chosen of Ra",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 190" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:T15" },
          ],
        },
        {
          codes: ["N5", "C178", "N5", "D17"],
          mdc: "N5-C178-N5:D17",
          transliteration: "esr-mꜢꜤt-rꜤ ti͗t-rꜤ",
          translation: "The justice of Ra is powerful, the (very) image of Ra",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , I, 82:15" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 175d" },
          ],
        },
        {
          codes: ["N5", "C178", "N5", "D17", "X1"],
          mdc: "ra-C178-ra:D17&t",
          transliteration: "wsr-mꜢꜤt-rꜤ ti͗t-rꜤ",
          translation: "The justice of Ra is powerful, the (very) image of Ra",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , I, 85:2" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 175a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:T5" },
          ],
        },
        {
          codes: ["N5", "F12", "C10A", "V30", "F23"],
          mdc: "ra-wsr-C10A-nb:xpS",
          transliteration: "",
          translation: "The justice of Ra is powerful, posessor of a strong arm/sword",
          sources: [
            { text: "CG 42143" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:T12" },
          ],
        },
        {
          codes: ["N5", "F12", "C10A", "O34", "V30", "F23"],
          mdc: "ra-wsr-C10A-z:nb-xpS",
          transliteration: "wsr-mꜢꜤt-rꜤ nb-ḫpš",
          translation: "The justice of Ra is powerful, posessor of a strong arm/sword",
          sources: [
            { text: "CG 42142" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:T13" },
          ],
        },
        {
          codes: ["N5", "C178", "S38", "N29", "R19"],
          mdc: "ra-C178-HqA-q-R19",
          transliteration: "wsr-mꜢꜤt-rꜤ ḥḳꜢ-wꜢst",
          translation: "The justice of Ra is powerful, ruler of Thebes",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , I, 89:14" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 175a" },
          ],
        },
        {
          codes: ["N5", "N5", "F44"],
          mdc: "ra-C178C-ra:iwa",
          transliteration: "wsr-mꜢꜤt-rꜤ i͗wꜢ-rꜤ",
          translation: "The justice of Ra is powerful, the heir of Ra",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , I, 90:10" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 175a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:T7" },
          ],
        },
        {
          codes: ["N5", "C178", "N5", "Z1", "U7"],
          mdc: "ra-C178-ra*Z1:U7",
          transliteration: "wsr-mꜢꜤt-rꜤ mri͗-rꜤ",
          translation: "The justice of Ra is powerful, beloved of Ra",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , I, 91:1" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 175a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:T8" },
          ],
        },
        {
          codes: ["N5", "F12", "C10A", "O34"],
          mdc: "ra-wsr-C10A-z",
          transliteration: "wsr-mꜢꜤt-rꜤ",
          translation: "The justice of Ra is powerful",
          sources: [
            { text: "Porter & Moss, Topographical Bibliography , VII, 26" },
            { text: "Kitchen, Ramesside Inscriptions , II, 717 (F)" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 177" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:T1" },
          ],
        },
        {
          codes: ["N5", "F12", "S29", "C10A"],
          mdc: "ra-wsr-s-C10A",
          transliteration: "wsr-mꜢꜤt-rꜤ",
          translation: "The justice of Ra is powerful",
          sources: [
            { text: "Porter & Moss, Topographical Bibliography , VII, 16" },
            { text: "Kitchen, Ramesside Inscriptions , II, 717 (E)" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 177a+e (top)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:T2" },
          ],
        },
        {
          codes: ["N5", "C178"],
          mdc: "ra-C178",
          transliteration: "wsr-mꜢꜤt-rꜤ",
          translation: "The justice of Ra is powerful",
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "N36", "N5", "Z1", "F31", "S29", "M23"],
      mdc: "i-mn:n:N36-ra:Z1-ms-s-sw",
      transliteration: "rꜤ-msi-sw mri͗-i͗mn",
      translation: "Ramesses (Ra has fashioned him), beloved of Amun",
      sources: [
        { text: "Kitchen, Ramesside Inscriptions , II, 337" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:E2" },
      ],
      variants: [
        {
          codes: ["C59", "C12I", "N36", "F31", "S29", "S29"],
          mdc: "C59\\-C12I-N36:ms*s*s",
          transliteration: "rꜤ-msi͗-sw mri͗-i͗mn",
          translation: "Ramesses (Ra has fashioned him), beloved of Amun",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 190" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:E1" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "N36", "C2", "F31", "S29", "M23"],
          mdc: "i-mn:n:N36-C2-ms-s-sw",
          transliteration: "rꜤ-msi͗-sw mri͗-i͗mn",
          translation: "Ramesses (Ra has fashioned him), beloved of Amun",
          sources: [
            { text: "Passim" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:E3" },
          ],
        },
        {
          codes: ["N5", "M17", "Y5", "N35", "U7", "F31", "S29", "M23"],
          mdc: "ra-i-mn:n:U7-ms*s-sw",
          transliteration: "rꜤ-msi͗-sw mri͗-i͗mn",
          translation: "Ramesses (Ra has fashioned him), beloved of Amun",
          sources: [
            { text: "Gardiner, The Inscriptions of Sinai, I, plate 70 (212)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:E4" },
          ],
        },
        {
          codes: ["N5", "C12", "F31", "S29", "S29", "U6"],
          mdc: "ra-C12-ms-s-s-mr",
          transliteration: "rꜤ-msi͗-sw mri͗-i͗mn",
          translation: "Ramesses (Ra has fashioned him), beloved of Amun",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , II, 337" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:E5" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "N36", "C2A", "F31", "S29", "O34"],
          mdc: "i-mn:n:N36-C2A-ms*s:z",
          transliteration: "rꜤ-msi͗-sw mri͗-i͗mn",
          translation: "Ramesses (Ra has fashioned him), beloved of Amun",
          sources: [
            { text: "Passim" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:E6" },
          ],
        },
        {
          codes: ["N5", "M17", "Y5", "N35", "N36", "F31", "S29", "S29"],
          mdc: "ra-i-mn:n:N36-ms-s-s",
          transliteration: "rꜤ-msi͗-sw mri͗-i͗mn",
          translation: "Ramesses (Ra has fashioned him), beloved of Amun",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , II, 151" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:E7" },
          ],
        },
        {
          codes: ["C12", "C2", "F31", "S29", "M23"],
          mdc: "mr\\-C12\\-C2-ms-s-sw",
          transliteration: "rꜤ-msi͗-sw mri͗-i͗mn",
          translation: "Ramesses (Ra has fashioned him), beloved of Amun",
          sources: [
            { text: "ASAE , 38, 217" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:E8" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "N36", "C2A", "F31", "O34", "O34"],
          mdc: "i-mn:n:N36-C2A-ms-z:z",
          transliteration: "rꜤ-msi͗-sw mri͗-i͗mn",
          translation: "Ramesses (Ra has fashioned him), beloved of Amun",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , II, 10" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 154-155, 3:E9" },
          ],
        },
        {
          codes: ["C12", "C2", "N36", "F31", "S29", "M23"],
          mdc: "C12\\-C2-N36-ms-s-sw",
          transliteration: "rꜤ-msi͗-sw mri͗-i͗mn",
          translation: "Ramesses (Ra has fashioned him), beloved of Amun",
          sources: [
            { text: "Journal of Egyptian Archaeology, 58, 177" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 3:E10" },
          ],
        },
        {
          codes: ["C177", "N36", "N5", "Z1", "F31", "S29", "O34"],
          mdc: "C177:N36-(ra:Z1)*ms*s:z",
          transliteration: "rꜤ-msi͗-sw mri͗-i͗mn",
          translation: "Ramesses (Ra has fashioned him), beloved of Amun",
          sources: [
            { text: "Mariette, Abydos, II, plate 19 d" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 3:E17" },
          ],
        },
        {
          codes: ["C12", "C2", "N36", "F31", "O34", "S38", "R8", "O28"],
          mdc: "C12\\-C2-N36-ms:z-HqA-nTr-iwn",
          transliteration: "rꜤ-msi͗-se mri͗-i͗mn nṯr-ḥḳꜢ-i͗wnw",
          translation: "Ramesses (Ra has fashioned him), beloved of Amun, divine ruler of Heliopolis",
          sources: [
            { text: "CG 38429-30" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 3:E12" },
          ],
        },
        {
          codes: ["C12", "C2", "N36", "F31", "R8", "S38", "O28", "O34", "O34"],
          mdc: "C12\\-C2-N36-ms-nTr-HqA-iwn-z:z",
          transliteration: "rꜤ-msi͗-se mri͗-i͗mn nṯr-ḥḳꜢ-i͗wnw",
          translation: "Ramesses (Ra has fashioned him), beloved of Amun, divine ruler of Heliopolis",
          sources: [
            { text: "ZÄS , 70, 47" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 3:E13" },
          ],
        },
        {
          codes: ["C12", "C2", "N36", "F31", "S29", "M23", "U7", "D21", "X1", "Z4", "W19", "C98B"],
          mdc: "C12\\-C2-N36-ms-s-sw-U7:r:t*Z4-mi-C98B",
          transliteration: "rꜤ-msi͗-se mri͗-i͗mn mrwti͗-mi͗-i͗tm",
          translation: "Ramesses, the beloved one of Amun, like Atum",
          sources: [
            { text: "ASAE , 5, 114" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 3:E15" },
          ],
        },
        {
          codes: ["C12", "C2", "F31", "S29", "M23", "G36", "Y5", "W24", "W24", "W24"],
          mdc: "mr\\-C12\\-C2-ms-s-sw-wr:mn:nw*nw*nw",
          transliteration: "rꜤ-msi͗-sw mri͗-i͗mn we-mnw",
          translation: "Ramesses (Ra has fashioned him), beloved of Amun, great of monuments",
        },
      ],
    },
  },

  merenptah: {
    horus: {
      codes: ["E1", "D40", "V71", "A28", "G17", "H6"],
      mdc: "E1:D40-V71-A28-m-H6",
      transliteration: "kꜢ-nḫt ḥi-m-mꜢꜤt",
      translation: "The strong bull who rejoiced in Truth",
      sources: [
        { text: "Libyan war stela of Merenptah (Athribis stela), Cairo JdE 50568 (recto)" },
        { text: "Kitchen, Ramesside Inscriptions , IV, 20:8" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 4:H1" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "A28", "Aa15", "X1", "C10A"],
          mdc: "E1:D40-A28-Aa15-Aa11v:t-C10A",
          transliteration: "kꜢ-nḫt ḥꜤi͗-m-mꜢꜤt",
          translation: "The strong bull who rejoiced in Truth",
          sources: [
            { text: "CG 34025 (Israel stele)" },
            { text: "Petrie, Six temples at Thebes, plate XIII and XIV" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 13:7" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 4:H2" },
          ],
        },
        {
          codes: ["E1", "D40", "V28", "A28", "D36", "G17", "C10A"],
          mdc: "E1:D40-H*A28:a-m-C10A",
          transliteration: "kꜢ-nḫt ḥꜤi͗-m-mꜢꜤt",
          translation: "The strong bull who rejoiced in Truth",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , IV, 64:5" },
          ],
        },
        {
          codes: ["E1", "D40", "V28", "A137", "G17", "X1", "H6"],
          mdc: "E1:D40-H-A137-m&t-H6",
          transliteration: "kꜢ-nḫt ḥꜤi͗-m-mꜢꜤt",
          translation: "The strong bull who rejoiced in Truth",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , IV, 43:16" },
            { text: "Petrie, Tanis, II, plate VII (137)" },
          ],
        },
        {
          codes: ["E1", "D40", "V71", "A28", "Aa15", "Aa11"],
          mdc: "E1:D40-V71-A28-M:mAa",
          transliteration: "kꜢ-nḫt ḥꜤi͗-m-mꜢꜤt",
          translation: "The strong bull who rejoiced in Truth",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , IV, 51:13" },
          ],
        },
        {
          codes: ["E1", "D40", "V28", "D36", "Z4", "A28", "G17", "C10A"],
          mdc: "E1:D40-H-a:Z4*A28-m-C10A",
          transliteration: "kꜢ-nḫt ḥꜤi͗-m-mꜢꜤt",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , IV, 72:14" },
          ],
        },
        {
          codes: ["E1", "D40", "V28", "D36", "Z4", "A28", "H6", "Aa15"],
          mdc: "E1:D40-H-a:Z4-A28*H6:Aa15",
          transliteration: "kꜢ-nḫt ḥꜤi͗-m-mꜢꜤt",
          translation: "The strong bull who rejoiced in Truth",
          sources: [
            { text: "Usurped Ramesses II colossus, dorsal pillar (Cairo JdE 35126)" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 59:1-2" },
          ],
        },
        {
          codes: ["E1", "D40", "V28", "Z4", "A28", "D36", "G17", "C10A"],
          mdc: "E1:D40-H-Z4-A28-a-m-C10A",
          transliteration: "kꜢ-nḫt ḥꜤi͗-m-mꜢꜤt",
          translation: "The strong bull who rejoiced in Truth",
          sources: [
            { text: "Memphis Palace of Merenptah" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 55:5" },
          ],
        },
        {
          codes: ["E1", "D40", "V28", "D36", "Z4", "A28", "G17", "C10A", "V28", "M2", "N35", "V31", "D38", "M23", "G43", "N35", "N5", "Z1", "A40", "Aa15", "T28", "D21", "N5", "Z1", "X1"],
          mdc: "E1:D40-H-a:y-A28-m-C10A-H-M2:n-k:D38-sw-w-n:(ra:Z1)*A40-Aa15:T28:r-ra:Z1:t",
          transliteration: "kꜢ-nḫt ḥꜤi͗-m-mꜢꜤt ḥnk-sw-n-rꜤ-m-ẖrt-hrw",
          translation: "The strong bull who rejoiced in Truth, and who offers it to Ra every day",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 200d" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 4:H3" },
          ],
        },
        {
          codes: ["E1", "D40", "D46", "D21", "T10", "Z1", "Z1", "Z1"],
          mdc: "E1:D40-d:r:pD-3:3:3",
          transliteration: "kꜢ-nḫt dr-pḏt",
          translation: "The strong bull who repelled the Nine Bows",
          sources: [
            { text: "ASAE , 15, 104" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 54:11" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 4:H9" },
          ],
        },
        {
          codes: ["E1", "D40", "V28", "A24", "T10", "X1", "Z1", "Z1", "Z1"],
          mdc: "E1:D40-H-A24-T10:t*3:3*3",
          transliteration: "kꜢ-nḫt dr-pḏt-9",
          translation: "The strong bull (who defeated?) the Nine Bows",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , IV, 13:8" },
            { text: "CG 34025 (Israel stele)" },
          ],
        },
        {
          codes: ["E1", "D40", "E22A", "V28", "D58", "N35", "W24", "Z7", "T30", "D40", "N35", "I9"],
          mdc: "E1:D40-E22A-H*b:n:nw*W-T30:D40:n:f",
          transliteration: "kꜢ-nḫt i͗w-ḥbn.n.f",
          translation: "The strong bull (like) a triumphant lion",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , IV, 1:8" },
            { text: "Wall stele of Merenptah at temple of Amada" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 4:H4" },
          ],
        },
        {
          codes: ["E1", "D40", "G39", "Z1", "M17", "Y5", "N35"],
          mdc: "E1:D40-zA&Z1-i-mn:n",
          transliteration: "kꜢ-nḫt zꜢ-i͗mn",
          translation: "The strong bull, son of Amun",
          sources: [
            { text: "Petrie, Tanis, II, plate 7" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 4:H11" },
          ],
        },
        {
          codes: ["E1", "D40", "C12A", "H8", "Z1"],
          mdc: "E1:D40-C12A-H8:1",
          transliteration: "kꜢ-nḫt zꜢ-i͗mn",
          sources: [
            { text: "Petrie, Tanis, II, plate VII 136" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 43:5" },
          ],
        },
        {
          codes: ["E1", "D40", "G39", "N5"],
          mdc: "E1:D40-zA&ra",
          transliteration: "kꜢ-nḫt zꜢ-rꜤ",
          translation: "The strong bull, son of Ra",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , IV, 55:1" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 4:H10" },
          ],
        },
        {
          codes: ["E1", "D40", "C18C", "H8", "Z1"],
          mdc: "E1:D40-C18C-H8:1",
          transliteration: "kꜢ-nḫt zꜢ-ṯꜢ-tnn",
          translation: "The strong bull, son of Tatenen",
          sources: [
            { text: "Petrie, Tanis, II, plate 7" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 43:7" },
          ],
        },
        {
          codes: ["E1", "D40", "M23", "X1", "N17", "N17"],
          mdc: "E1:D40-sw-t:N17:N17",
          transliteration: "kꜢ-nḫt nsw-tꜢwi͗",
          translation: "The strong bull and king of the Two Lands",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , IV, 54:16" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 4:H14" },
          ],
        },
        {
          codes: ["E1", "D40", "O1", "D54", "Aa15", "N5", "Z1"],
          mdc: "E1:D40-pr:D54-Aa15:ra*Z1",
          transliteration: "kꜢ-nḫt pri͗-m-rꜤ",
          translation: "The strong bull who has emerged as Ra",
          sources: [
            { text: "Qaha obelisk in Egyptian Museum in Cairo (face 4)" },
            { text: "CG 17025" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 31:12" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 4:H5" },
          ],
        },
        {
          codes: ["R4", "D2", "Z1", "C10A", "C18F", "W19"],
          mdc: "Htp:D2*Z1-C10A-C18F-mi",
          transliteration: "ḥtp-ḥr-mꜢꜤt mi͗-tꜢṯnn",
          translation: "Satisfied with Maat,like Tatenen",
          sources: [
            { text: "Qaha obelisk in Egyptian Museum in Cairo (face 1 left)" },
            { text: "CG 17025" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 31:5" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 4:H7" },
          ],
        },
        {
          codes: ["E1", "N35", "N5", "Z1", "I10", "X1", "Z1", "X1", "U15"],
          mdc: "E1:n-ra:Z1-D&&&(t*Z1)-t:U15",
          transliteration: "kꜢ-nḫt bꜢ-n-rꜤ ḏt-i͗tmw",
          translation: "The strong bull, (with) spirit of Ra and body of Atum",
          sources: [
            { text: "Qaha obelisk in Egyptian Museum in Cairo (face 1 right)" },
            { text: "CG 17025" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 31:4" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 4:H6" },
          ],
        },
        {
          codes: ["E1", "D40", "V28", "A137", "N17", "N17"],
          mdc: "E1:D40-H-A137:N17:N17",
          transliteration: "kꜢ-nḫt hꜤꜤ-tꜢwi͗",
          sources: [
            { text: "Usurped R2 colossus, base block (Cairo JdE 35126)" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 59:6" },
          ],
        },
        {
          codes: ["E1", "D40", "G25", "Aa1", "N35", "X1", "U15", "Aa15"],
          mdc: "E1:D40-Ax&x:n-t:U15:Aa15",
          transliteration: "kꜢ-nḫt Ꜣḫ-n-i͗tm",
          translation: "The strong bull, beneficial to Atum",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , IV, 50:13" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 4:H13" },
          ],
        },
        {
          codes: ["E1", "D40", "G25", "Aa1", "N35", "N5", "C2", "V30"],
          mdc: "E1:D40-G25&x:n-ra*C2:nb",
          transliteration: "kꜢ-nḫt Ꜣḫ-n-rꜤ",
          translation: "The strong bull, beneficial to Ra",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , IV, 50:10" },
          ],
        },
        {
          codes: ["V30", "O23K", "Z3", "N28", "N28", "N28"],
          mdc: "nb:O23K*Z3-xa:xa*xa",
          transliteration: "nb-ḥꜢbw-ḫꜤw",
          translation: "Possessor of festivals and crowns",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , IV, 54:14" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 4:H12" },
          ],
        },
        {
          codes: ["Aa27", "W24", "D40", "D2", "Z1", "X1", "I9", "Z1", "I9", "W19", "X1", "H6", "C10A"],
          mdc: "Aa27-nw:D40-D2*Z1:t:f-Z1:f-mi:t-H6-C10A",
          transliteration: "nḏ-ḥr-i͗t.f mi͗ti͗-mꜢꜤt",
          translation: "Protector of his father, the likeness of Maat",
        },
      ],
    },
    nebty: {
      codes: ["D4", "G30", "Z3", "D21", "N16", "Z1", "N21", "S3", "U33", "G17", "V28", "G43", "T14", "A1", "A1", "N17", "Z3"],
      mdc: "D4:G30-Z3-r:N16:Z1*N21-N-ti-m-H-w-T14-A1*A1:N17-Z3",
      transliteration: "i͗ri͗-bꜢw-r-tꜢ-n-ṯmhw",
      translation: "Who exercised power against the land of the Temehu",
      sources: [
        { text: "Kitchen, Ramesside Inscriptions , IV, 20:9" },
        { text: "Athribis stela, Cairo JdE 50568" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 4:N1" },
      ],
      variants: [
        {
          codes: ["N28", "D36", "Y1", "W19", "Q3", "X1", "V28", "G17", "F26", "N35", "I8A", "Z2"],
          mdc: "xa:a:Y1-mi-p:t-H-m-F26:n-I8A:Z2",
          transliteration: "ḫꜤi͗-mi͗-ptḥ-m-ẖnw-ḥfnw",
          translation: "Who has appeared like Ptah among hundreds of thousands",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 200d (1)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 4:N3" },
          ],
        },
        {
          codes: ["N28", "Q3", "X1", "V28", "W19", "Aa15", "F26", "N35", "W24", "O1", "I8", "I8", "I8", "D21", "S29", "Y5", "N35", "Y1", "O4A", "Q3", "G43", "V12", "Z1", "F35", "Z3", "Aa15", "M3", "Aa1", "X1", "N21", "N21"],
          mdc: "xa:(p:t)*H-mi-Aa15:F26:n:nw*O1-I8:I8:I8-r:s*(mn:n:Y1)-O4A:p-w-V12:3-nfr-Z3-Aa15:M3:x*t:N21*N21",
          transliteration: "ḫꜤi͗-mi͗-ptḥ-m-ẖnw-ḥfnw-r-smn-hpw-nfrw-m-ḫt-tꜢwi͗",
          translation: "Who has appeared like Ptah among hundreds of thousands in order to establish the perfect laws throughout the Two Lands",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , iV, 58:7" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 198e" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 4:N2" },
          ],
        },
        {
          codes: ["O29v", "D36", "F9", "F9", "G36", "D21", "N35", "M3", "Aa1", "D40", "X1", "Z7"],
          mdc: "aAv:a:F9*F9-wr:r-n:xt:x^^^D40:t*W",
          transliteration: "ꜤꜢ-pḥti͗ wr-nḫtw",
          translation: "Great of might and important of victories",
        },
      ],
    },
    golden: {
      codes: ["V30", "G54", "O29v", "N37", "I9", "F8"],
      mdc: "nb:snD-aAv:N37:f-F8",
      transliteration: "nb-snḏ ꜤꜢ-šfit",
      translation: "Lord of fear and great of majesty",
      sources: [
        { text: "Kitchen, Ramesside Inscriptions , IV, 1:9" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 156-157, 4:G1" },
      ],
      variants: [
        {
          codes: ["S29", "N35", "M3", "Aa1", "X1", "D40", "I6", "Aa15", "X1", "O49", "D46", "D21", "D40", "T10", "X1", "Z2", "Z2", "Z2", "D21", "X1", "D36", "R4", "R8", "R8", "R8", "G17", "U7", "D21", "O34", "N35", "Z2"],
          mdc: "s-n:M3:x*t:D40-I6:Aa15:t*niwt-d:r:D40-T10:t*Z2:Z2*Z2-r:t:a:Htp-R8*R8*R8-m-U7:r-z:n:Z2",
          transliteration: "snḫt-kmt dr-pḏt-r-di͗t-ḥtp-nṯrw-mr.sn",
          translation: "Who has strengthened Egypt and repelled the Nine Bows in order to satisfy the gods with what they love",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "E1", "N35", "N36", "R8A"],
      mdc: "ra-E1:n-N36:R8A",
      transliteration: "bꜢ-n-rꜤ mri͗-nṯrw",
      translation: "The soul of Ra, beloved of the Gods",
      sources: [
        { text: "Mariette, Abydos II, pl. 50" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 158-159, 4:T8" },
      ],
      variants: [
        {
          codes: ["C2A", "C12A", "N36", "E11", "Z1", "N35"],
          mdc: "C2A\\-C12A-N36-E11*Z1:n",
          transliteration: "bꜢ-n-rꜤ mri͗-i͗mn",
          translation: "The soul of Ra, beloved of Amun",
          sources: [
            { text: "Black granite statue, CG 42148" },
          ],
        },
        {
          codes: ["U6", "C12", "C2", "E1", "N35"],
          mdc: "U6\\-C12\\-C2-E1:n",
          transliteration: "bꜢ-n-rꜤ mri͗-i͗mn",
          translation: "The soul of Ra, beloved of Amun",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 200d (1)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 158-159, 4:T1" },
          ],
        },
        {
          codes: ["E1", "N35", "C53A", "C12M", "N36"],
          mdc: "E1:n-C53A-C12M-N36",
          transliteration: "bꜢ-n-rꜤ mri͗-i͗mn",
          translation: "The soul of Ra, beloved of Amun",
          sources: [
            { text: "Black granite statue, CG 42148" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 158-159, 4:T3" },
          ],
        },
        {
          codes: ["N5", "E1", "N35", "C12", "U6"],
          mdc: "ra-E1:n-C12-mr",
          transliteration: "bꜢ-n-rꜤ mri͗-i͗mn",
          translation: "The soul of Ra, beloved of Amun",
          sources: [
            { text: "Black granite statue, CG 42148" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 158-159, 4:T4" },
          ],
        },
        {
          codes: ["N5", "G29", "G7", "N35", "U6", "M17", "Y5", "N35"],
          mdc: "ra-G29&1*G7:n-mr-i-mn:n",
          transliteration: "bꜢ-n-rꜤ mri͗-i͗mn",
          translation: "The soul of Ra, beloved of Amun",
        },
      ],
    },
    nomen: {
      codes: ["C102", "C10A", "N36", "N35", "R4", "D2", "Z1"],
      mdc: "C102\\-C10A-N36:n-Htp:D2*Z1",
      transliteration: "mri͗-n-ptḥ ḥtp-ḥr-mꜢꜤt",
      translation: "Beloved of Ptah, Maat is satisfied",
      sources: [
        { text: "Kitchen, Ramesside Inscriptions , IV, 31" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 158-159, 4:E1" },
      ],
      variants: [
        {
          codes: ["U6", "C102", "C10A", "N35", "R4", "D2", "Z1"],
          mdc: "U6\\-C102\\-C10A-n:Htp:D2*Z1",
          transliteration: "mri͗.n-ptḥ ḥtp-ḥr-mꜢꜤt",
          translation: "Beloved of Ptah, Maat is satisfied",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 200d (1)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 158-159, 4:E2" },
          ],
        },
        {
          codes: ["C19", "N36", "N35", "C178", "R4", "D2", "Z1"],
          mdc: "C19-N36:n-C178-Htp:D2*Z1",
          transliteration: "mri͗.n-ptḥ ḥtp-ḥr-mꜢꜤt",
          translation: "Beloved of Ptah, Maat is satisfied",
          sources: [
            { text: "Walking statue of Merenptah, Cairo CG 42148" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 158-159, 4:E3" },
          ],
        },
        {
          codes: ["U6", "Q3", "X1", "V28", "C10A", "N35", "R4", "D2", "Z1"],
          mdc: "U6\\-p:t-H-C10A-n:Htp:D2*Z1",
          transliteration: "mri͗.n-ptḥ ḥtp-ḥr-mꜢꜤt",
          translation: "Beloved of Ptah, Maat is satisfied",
        },
      ],
    },
  },

  "seti-ii": {
    horus: {
      codes: ["E1", "D40", "G36", "D21", "F9", "F9"],
      mdc: "E1:D40-wr:r-F9-F9",
      transliteration: "kꜢ-nḫt wr-pḥti",
      translation: "The strong bull, great of might",
      sources: [
        { text: "Seti II Athribis obelisk usurped from Ramesses II (Berlin ÄM 12800)" },
        { text: "Kitchen, Ramesside Inscriptions , IV, 244:5-16" },
        { text: "Roeder, Ägyptische Inschriften aus den Königlichen Museum zu Berlin, II , p. 28, 30, 32" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 158-159, 6:H1" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "U6", "M17", "M17", "C2A"],
          mdc: "E1:D40-mr-i-i-C2A",
          transliteration: "kꜢ-nḫt mri͗-rꜤ",
          translation: "The strong bull, beloved of Ra",
          sources: [
            { text: "Daressy, Notes et remarques, RecTrav 14 (1893): 30-31 (XLIX)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 158-159, 6:H3" },
          ],
        },
        {
          codes: ["E1", "D40", "U6", "C2"],
          mdc: "E1:D40-mr-C2",
          transliteration: "kꜢ-nḫt mri͗-rꜤ",
          translation: "The strong bull, beloved of Ra",
          sources: [
            { text: "Sandstone seated statue of Seti II ( British Museum EA26)" },
            { text: "Sandstone statue, Turin 1383" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 268:3" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 158-159, 6:H5" },
          ],
        },
        {
          codes: ["E1", "D40", "U6", "M17", "M17", "N5", "Z1", "A40"],
          mdc: "E1:D40-mr-i-i-ra:Z1-A40",
          transliteration: "kꜢ-nḫt mri͗-rꜤ",
          translation: "The strong bull, beloved of Ra",
        },
      ],
    },
    nebty: {
      codes: ["N35", "M3", "Aa1", "X1", "D40", "F23", "D46", "D21", "D40", "T10", "X1", "Z1", "Z1", "Z1"],
      mdc: "n:xt:x*t:D40-xpS:d:r:D40-pD:t*3:3*3",
      transliteration: "nḫt-ḫpš dr-pḏt-9",
      translation: "The strong-armed one who has repelled the Nine Bows",
      sources: [
        { text: "Seti II Athribis obelisk usurped from Ramesses II (Berlin ÄM 12800)" },
        { text: "Kitchen, Ramesside Inscriptions , IV, 244:8/11" },
        { text: "Roeder, Ägyptische Inschriften aus den Königlichen Museum zu Berlin, II , p. 28" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 160-161, 6:N1" },
      ],
      variants: [
        {
          codes: ["Aa15", "D36", "V31", "I6", "Aa15", "X1", "O49", "G43", "D36", "I9", "D40", "N25", "X1", "Z1"],
          mdc: "Aa15:a:k-I6:Aa15:t*O49-w-a:f:D40-N25:t*3",
          transliteration: "mk-kmt wꜤf-ḫꜢswt",
          translation: "The protector of Egypt who has subdued foreign countries",
          sources: [
            { text: "Sandstone statue, Turin 1383" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 268:5" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 160-161, 6:N3" },
          ],
        },
        {
          codes: ["G20", "V31", "I6", "Aa15", "X1", "O49", "G45", "I9", "Z7", "D40", "N25", "X1", "Z2"],
          mdc: "G20:k-I6-Aa15:t*O49-G45-f:W:D40-N25:t*Z2",
          transliteration: "mk-kmt wꜤf-ḫꜢswt",
          translation: "The protector of Egypt",
        },
      ],
    },
    golden: {
      codes: ["O29v", "Aa15", "N17", "N17", "N17", "V30", "Z7", "Z2"],
      mdc: "aAv:nr:Aa15-N17:N17:N17:nb:W*Z2",
      transliteration: "ꜤꜢ-nrw-m-tꜢw-nbw",
      translation: "He whose victories are great in all the lands",
      sources: [
        { text: "Seti II Athribis obelisk usurped from Ramesses II (Berlin ÄM 12800)" },
        { text: "Kitchen, Ramesside Inscriptions , IV, 244:8/11" },
        { text: "Roeder, Ägyptische Inschriften aus den Königlichen Museum zu Berlin, II , p. 28, 30" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 160-161, 6:G1" },
      ],
      variants: [
        {
          codes: ["O29v", "D36", "Y1", "N35", "M3", "Aa1", "D40", "X1", "Z2", "Aa15", "N17", "N17", "N17", "V30", "Z7", "Z2"],
          mdc: "aAv:a:Y1-n:M3-x^^^D40:t*Z2-Aa15:N17:N17:N17-nb:W*Z2",
          transliteration: "ꜤꜢ-nḫtw m tꜢw-nbw",
          translation: "Great of victories in all lands",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "F12", "L1", "Z2", "U21", "N35", "N5"],
      mdc: "ra-wsr-xpr:Z2-stp&n&ra",
      transliteration: "wsr-ḫprw-rꜤ stp.n-rꜤ",
      translation: "Powerful are the manifestations of Ra, the chosen one of Ra",
      sources: [
        { text: "Seti II Athribis obelisk usurped from Ramesses II (Berlin ÄM 12800)" },
        { text: "Roeder, Ägyptische Inschriften aus den Königlichen Museum zu Berlin, II , p. 29" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 160-161, 6:T1" },
      ],
      variants: [
        {
          codes: ["N5", "F12", "L1", "Z2", "U21", "N35", "N5", "C12E", "U6"],
          mdc: "ra-wsr-xpr:Z2-stp&n&ra-C12E-mr",
          transliteration: "wsr-ḫprw-rꜤ stp.n-rꜤ",
          translation: "The strong one of the manifestations of Ra, whom Ra has chosen",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , IV, 294:13" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 160-161, 6:T7" },
          ],
        },
        {
          codes: ["N5", "F12", "L1", "Z2", "U21", "N35", "N5", "U7", "D21", "M17", "M17", "A2", "M17", "Y5", "N35", "G7"],
          mdc: "ra-wsr-xpr:Z2-stp&n&ra-U7:r-i-i-A2-i-mn:n-G7",
          transliteration: "wsr-ḫprw-rꜤ stp.n-rꜤ",
          translation: "The strong one of the manifestations of Ra, whom Ra has chosen",
          sources: [
            { text: "Griffith, Petrie Papyri (1898), pl. 39, line 34" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 160-161, 6:T8" },
          ],
        },
        {
          codes: ["N5", "F12", "L1", "Z2", "N35", "U21", "N35", "N5"],
          mdc: "ra-wsr-xpr:Z2:n-stp&n&ra",
          transliteration: "wsr-ḫprw-rꜤ stp.n-rꜤ",
          translation: "The strong one of the manifestations of Ra, whom Ra has chosen",
          sources: [
            { text: "Papyrus Anastasi VI" },
            { text: "Gardiner, Bibliotheca Aegyptiaca VII (1937), 72:8" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 160-161, 6:T2" },
          ],
        },
        {
          codes: ["N5", "F12", "L1", "Z2", "C12E", "U6"],
          mdc: "ra-wsr-xpr:Z2-C12E-mr",
          transliteration: "wsr-ḫprw-rꜤ mri͗.i͗mn",
          translation: "The strong one of the manifestations of Ra, beloved of Amun",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , IV, 248:3" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 160-161, 6:T3" },
          ],
        },
        {
          codes: ["N5", "F12", "L1", "Z2", "N36", "M17", "Y5", "N35"],
          mdc: "ra-wsr-xpr:Z2-N36:i*(mn:n)",
          transliteration: "wsr-ḫprw-rꜤ mri͗.i͗mn",
          translation: "The strong one of the manifestations of Ra, beloved of Amun",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , IV, 246:14" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 160-161, 6:T5" },
          ],
        },
        {
          codes: ["N5", "F12", "L1", "Z2", "M17", "Y5", "N35", "U7"],
          mdc: "ra-wsr-xpr:Z2-i-mn:n:U7",
          transliteration: "wsr-ḫprw-rꜤ mri͗.i͗mn",
          translation: "The strong one of the manifestations of Ra, beloved of Amun",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 204e" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 160-161, 6:T6" },
          ],
        },
        {
          codes: ["N5", "F12", "L1", "Z2", "U6", "C7"],
          mdc: "ra-wsr-xpr:Z2-mr-stX",
          transliteration: "wsr-ḫprw-rꜤ mri͗.stẖ",
          translation: "The strong one of the manifestations of Ra, beloved of Seth",
        },
      ],
    },
    nomen: {
      codes: ["Q3", "X1", "V28", "U6", "C7", "M17", "M17", "N35"],
      mdc: "p:t-H-mr-stX*i*i:n",
      transliteration: "stḥy mri͗ n ptḥ",
      translation: "The one who belongs to Seth, beloved of Ptah",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 237c" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 160-161, 6:E1" },
      ],
      variants: [
        {
          codes: ["E21", "M17", "M17"],
          mdc: "E21-i-i",
          transliteration: "stḥy",
          translation: "The one who belongs to Seth",
        },
      ],
    },
  },

  amenmesse: {
    horus: {
      codes: ["E1", "D40", "C10", "U6", "U32", "N35", "N17", "N17", "N21", "N21"],
      mdc: "E1:D40-mAat-mr-U32-n:N17:N17:N21*N21",
      transliteration: "kꜢ-nḫt mri͗-mꜢꜤt-smn-tꜢwi͗",
      translation: "Strong bull, beloved of Maat, he who strengthen the Two Lands",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 204e" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 158-159, 5:H3" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "U7", "M17", "M17", "C10A", "S29", "Y1", "N35", "Y1v", "U32", "N17", "N17", "N21", "N21"],
          mdc: "E1:D40-U7:i*i-C10A-s-Y1:n-Y1v-U32-[[-#b-N17:N17:N21*N21-#e-]]",
          transliteration: "kꜢ-nḫt mri͗-mꜢꜤt-smn-tꜢwi͗",
          translation: "Strong bull, beloved of Maat, he who strengthen [the Two Lands]",
          sources: [
            { text: "Grapow, Ägyptologische Studien, VIO 29 (1955), 19" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 158-159, 5:H2" },
          ],
        },
      ],
    },
    nebty: {
      codes: ["G36", "D21", "D58", "M17", "G1", "M17", "X1", "M17", "U16A", "Aa15", "M17", "Q3", "X1", "Q1", "Z2", "O49"],
      mdc: "wr:r-b-i-A-i-t-i-U16A:Aa15-i-p:t-st-Z2:O49",
      transliteration: "wr-biꜢwt-m-ipt-swt",
      translation: "He who is great of miracles in Karnak Temple",
    },
    golden: {
      codes: ["O29v", "F23", "S29", "O29", "D36", "R19", "X1", "O49", "N35", "F31", "S29", "M23"],
      mdc: "aAv:xpS-s-aAv:a-R19-t:O49-n:ms*s*sw",
      transliteration: "ꜤꜢ-ḫpš sꜤꜢ wꜢst n ms sw",
      translation: "The one great of might, who has magnified Thebes for the one who bore him",
    },
    prenomen: {
      codes: ["N5", "Y5", "W19", "M17", "U21", "N35", "N5"],
      mdc: "ra:mn-mi-i-stp&n&ra",
      transliteration: "mn-mi͗-rꜤ stp.n-rꜤ",
      translation: "Eternal like Ra, the chosen one of Ra",
      sources: [
        { text: "Valley of Kings, tomb KV 10, gate B" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 202e" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 158-159, 5:T1" },
      ],
    },
    nomen: {
      codes: ["C12", "F31", "S29", "S29", "S38", "N29", "R19"],
      mdc: "C12-ms-s-s-HqA-q-R19",
      transliteration: "i͗mn-msi͗-sw ḥḳꜢ-wꜢst",
      translation: "Amenmesse, the Ruler of Thebes",
      sources: [
        { text: "Valley of Kings, tomb KV 10, gate B" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 202e" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 158-159, 5:E1" },
      ],
      variants: [
        {
          codes: ["C2", "C12", "F31", "O34", "O34", "S38", "R19", "N36"],
          mdc: "C2\\-C12-ms-z:z-HqA-R19-N36",
          transliteration: "i͗mn-msi͗-sw mri͗-rꜤ ḥḳꜤ-wꜢst",
          translation: "Amenmesse, the beloved of Ra and Ruler of Thebes",
        },
      ],
    },
  },

  siptah: {
    horus: {
      codes: ["E1", "D40", "U6", "V71", "Q3", "N35A", "S29", "S34", "N16A", "V30", "Aa15", "D28", "Z1", "I9", "N5", "Z1", "V30"],
      mdc: "E1:D40-mr-V71-p-N35A-s-anx-N16A:nb-Aa15:kA*Z1:f-ra*Z1:nb",
      transliteration: "kꜢ-nḫt mri͗-ḥꜤpi͗ sꜤnḫ-tꜢ-nb-m-kꜢ.f-rꜤ-nb",
      translation: "Strong bull, beloved of Hapi, who daily sustains the lands by means of his Ka",
      sources: [
        { text: "Year 1–2" },
        { text: "Kitchen, Ramesside Inscriptions , IV, 363:2" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 160-161, 7:H1" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "C92A", "U6"],
          mdc: "E1:D40-C92A-mr",
          transliteration: "kꜢ-nḫt mri͗-ḥꜤpi͗",
          translation: "The strong bull, beloved of Hapi",
          sources: [
            { text: "Year 2–6" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 344:15" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 162-163, 7:H4" },
          ],
        },
        {
          codes: ["E1", "D40", "N36", "V28", "D36", "Q3", "Z4", "N36", "N35", "N35", "N35"],
          mdc: "E1:D40-N36-H-a:p*Z4-N36:n:n:n",
          transliteration: "kꜢ-nḫt mri͗-ḥꜤpi͗",
          translation: "The strong bull, beloved of Hapi",
          sources: [
            { text: "Davis, The tomb of Siphthah, xiii, pl. 4" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 162-163, 7:H3" },
          ],
        },
        {
          codes: ["E1", "D40", "G36", "D21", "F9", "X1", "Z1", "Z1", "D40"],
          mdc: "E1:D40-wr:r-F9*(t:Z1*Z1):D40",
          transliteration: "kꜢ-nḫt wr-pḥti͗",
          translation: "The strong bull, great of might",
        },
      ],
    },
    nebty: {
      codes: ["S29", "O29v", "D36", "G1", "Y1", "O28", "W24", "O49"],
      mdc: "s-aAv:a-A-Y1-iwn-nw:O49",
      transliteration: "sꜤꜢ-iwnw ḳꜢb ꜤꜢbt dit mꜢꜤt n rꜤ m-ẖrt-hrw",
      translation: "Enlarging Heliopolis, doubling the offerings, presenting Right to Ra daily",
    },
    golden: {
      codes: ["W19", "M17", "M17", "X1", "I9", "G7", "D21", "D36", "N5", "G7"],
      mdc: "//-mi-i-i-t:f-G7-r:a:ra-G7",
      transliteration: "..-mi-it.f-rꜤ",
      translation: "..like his father Ra",
    },
    prenomen: {
      codes: ["N5", "S29", "N28", "N35", "N36", "M17", "Y5", "N35"],
      mdc: "ra-s-xa:n-N36-i-mn:n",
      transliteration: "sḫꜤi͗.n-rꜤ mri͗-i͗mn",
      translation: "He whom Ra causes to appear, beloved of Amun",
      sources: [
        { text: "Year 1–2" },
        { text: "Kitchen, Ramesside Inscriptions , IV, 363:16" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 160-161, 7:T1" },
      ],
      variants: [
        {
          codes: ["N5", "G25", "N35", "U21", "N35", "N5"],
          mdc: "ra-G25:n-stp&n&ra",
          transliteration: "Ꜣḫ-n-rꜤ stp.n-rꜤ",
          translation: "Akh spirit of Ra, chosen of Ra",
          sources: [
            { text: "Year 2–6" },
            { text: "Randall-McIver, Buhen, I, 36" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 162-163, 7:T3" },
          ],
        },
        {
          codes: ["N5", "Aa1", "G25", "Y1", "N35", "U21", "N35", "N5"],
          mdc: "ra-Aa1&Ax-Y1:n-stp&n&ra",
          transliteration: "Ꜣḫ-n-rꜤ stp.n-rꜤ",
          translation: "Akh spirit of Ra, chosen of Ra",
          sources: [
            { text: "Year 2–6" },
            { text: "Tomb of Siptah, KV 47" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 348:2" },
          ],
        },
        {
          codes: ["N5", "G25", "Y1v", "S3", "U21", "N35", "N5"],
          mdc: "ra-G25-Y1v-N-stp&n&ra",
          transliteration: "Ꜣḫ-n-rꜤ stp.n-rꜤ",
          translation: "Akh spirit of Ra, chosen of Ra",
        },
      ],
    },
    nomen: {
      codes: ["C2", "F31", "O34", "O34", "H8", "Z1", "Q3", "X1", "V28"],
      mdc: "C2-ms-z:z-H8:Z1-p:t-H",
      transliteration: "rꜤ-msi͗-sw sꜢ-ptḥ",
      translation: "Ramesses, son of Ptah",
      sources: [
        { text: "Year 1–2" },
        { text: "Kitchen, Ramesside Inscriptions , IV, 363:3" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 160-161, 7:E1" },
      ],
      variants: [
        {
          codes: ["Q3", "X1", "V28", "N36", "N35", "H6", "Z1", "Q3", "X1", "V28"],
          mdc: "p:t-H-N36:n:H6*Z1-p:t-H",
          transliteration: "zꜢ-ptḥ mri͗.n-ptḥ",
          translation: "Son of Ptah, beloved of Ptah",
          sources: [
            { text: "Year 2–6" },
            { text: "Tomb of Siptah, KV 47, ceiling corridor (B)" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 347:15" },
          ],
        },
        {
          codes: ["C102", "H8", "Z1", "C102", "S3"],
          mdc: "mr\\-C102\\-H8:Z1-C102-S3",
          transliteration: "zꜤ-ptḥ mri͗.n-ptḥ",
          translation: "Son of Ptah, beloved of Ptah",
          sources: [
            { text: "Year 2–6" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 345:7" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 162-163, 7:E3" },
          ],
        },
        {
          codes: ["C102", "U6", "N35", "C102", "H8", "Z1"],
          mdc: "C102*mr:n-C102-H8:Z1",
          transliteration: "zꜢ-ptḥ mri͗.n-ptḥ",
          translation: "Son of Ptah, beloved of Ptah",
          sources: [
            { text: "Year 2–6" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 202a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 162-163, 7:E4" },
          ],
        },
        {
          codes: ["C102", "U6", "N35", "H8", "Z1", "C102"],
          mdc: "C102*mr:n-H8:Z1-C102",
          transliteration: "zꜢ-ptḥ mri͗.n-ptḥ",
          translation: "Son of Ptah, beloved of Ptah",
          sources: [
            { text: "Year 2–6" },
            { text: "Petrie, Six Temples, plate XVII (11)" },
          ],
        },
        {
          codes: ["Q3", "X1", "V28", "U7", "N35", "C102", "H8", "Z1"],
          mdc: "p:t-H-U7:n-C102-H8:Z1",
          transliteration: "zꜢ-ptḥ meri͗.n-ptḥ",
          translation: "Son of Ptah, beloved of Ptah",
        },
      ],
    },
  },

  tausret: {
    horus: {
      codes: ["E1", "D40", "C10A", "U6"],
      mdc: "E1:D40-C10A-mr",
      transliteration: "kꜢ-nḫt mri͗-mꜢꜤt",
      translation: "The strong bull, beloved of Maat",
      sources: [
        { text: "Kitchen, Ramesside Inscriptions , IV, 352:11" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "C10A", "U6", "M17", "M17", "V30", "D36", "N35", "D6", "Aa15", "M23", "X1", "N35", "A41", "W19", "A304G"],
          mdc: "E1:D40-C10A-mr-i-i-nb:a:n-D6:Aa15-sw-t:n-A41-mi-A304G",
          transliteration: "kꜢ-nḫt mri͗-mꜢꜤt nb-Ꜥn-m-nsw-mi͗-i͗tm",
          translation: "The strong bull, beloved of Maat, Lord beautiful of kingship, like Atum",
        },
      ],
    },
    nebty: {
      codes: ["U17", "Y1", "I6", "Aa15", "X1", "O49", "G43", "D40", "I9", "N25", "X1", "Z1"],
      mdc: "U17\\:Y1-I6:Aa15:t*O49-w:D40:f-N25:t*3",
      transliteration: "grg-kmt wꜤf-ḫꜢswt",
      translation: "Founder of Egypt, who vainquishes foreign countries",
    },
    prenomen: {
      codes: ["C2", "C12", "N36", "N35", "N17", "G39", "X1"],
      mdc: "C2-C12-N36:n:N17-zA&t",
      transliteration: "sꜢ.t-rꜤ mri͗.t-n-i͗mn",
      translation: "Daughter of Ra, beloved of Amun",
      sources: [
        { text: "Petrie, Six Temples at Thebes, plate 16.1" },
        { text: "Kitchen, Ramesside Inscriptions , IV, 354:3" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 162-163, 8:T2" },
      ],
      variants: [
        {
          codes: ["C2A", "C12", "N36", "H8", "X1"],
          mdc: "C2A\\-C12-N36:H8*t",
          transliteration: "zꜢt-rꜤ mri͗(t)-n-i͗mn",
          translation: "Daughter of Ra, beloved of Amun",
          sources: [
            { text: "Gardiner, Peet, Cerny, Six Temples, plate 16 (5)" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 354:4" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 162-163, 8:T3" },
          ],
        },
        {
          codes: ["C2", "C12", "N36", "H8", "X1", "M17", "M17"],
          mdc: "C2\\-C12-N36:(H8:t-i-i)",
          transliteration: "zꜢt-rꜤ mri͗(t)-n-i͗mn",
          translation: "Daughter of Ra, beloved of Amun",
          sources: [
            { text: "British Museum EA 29952" },
            { text: "Gardiner, Peet, Cerny, Six Temples, plate 17 (2)" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 353:15" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 162-163, 8:T4" },
          ],
        },
        {
          codes: ["H8", "X1", "C2", "C12", "U6", "M17", "M17"],
          mdc: "H8:t-C2-C12-mr-i-i",
          transliteration: "zꜢt-rꜤ mri͗(t)-i͗mn",
          translation: "Daughter of Ra, beloved of Amun",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , IV, 352:9" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 162-163, 8:T5" },
          ],
        },
        {
          codes: ["U6", "C2", "C12", "H8", "X1", "M17", "M17"],
          mdc: "mr-C2-C12-H8:t-i-i",
          transliteration: "zꜢt-rꜤ mri͗(t)-i͗mn",
          translation: "Daughter of Ra, beloved of Amun",
        },
      ],
    },
    nomen: {
      codes: ["X1", "G1", "F12", "S29", "D21", "D40", "B7F"],
      mdc: "t-A-wsr-s-r:D40-B7F",
      transliteration: "tꜢ-Wsrt",
      translation: "Mighty Lady",
      sources: [
        { text: "Valley of the Kings, tomb KV 14" },
        { text: "Kitchen, Ramesside Inscriptions 351:13" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 201a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 162-163, 8:E1" },
      ],
      variants: [
        {
          codes: ["X1", "G1", "F12", "D21", "X1", "D40", "G14", "S3", "U6"],
          mdc: "t-A-wsr-r:t:D40-G14-S3-mr",
          transliteration: "tꜢ-wsrt mri͗(t).n-mwt",
          translation: "Tausret, beloved of Mut",
          sources: [
            { text: "Gauthier, Amada, I, plate 21" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 162-163, 8:E2" },
          ],
        },
        {
          codes: ["X1", "F12", "C183A"],
          mdc: "t-wsr-C183A-(stp&t:n)",
          transliteration: "tꜢ-Wsrt stp.n-mwt",
          translation: "Mighty Lady, chosen of Mut",
          sources: [
            { text: "British Museum EA 29952" },
            { text: "Kitchen, Ramesside Inscriptions , IV, 353:15" },
            { text: "Gardiner, Peet, Cerny, Six Temples, plate 17 (2)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 162-163, 8:E3" },
          ],
        },
        {
          codes: ["X1", "G1", "F12", "C183A", "X1", "U21", "N35"],
          mdc: "t:A-wsr-C183A-t:stp:n",
          transliteration: "tꜢ-Wsrt stp.n-mwt",
          translation: "Mighty Lady, chosen of Mut",
        },
      ],
    },
  },

  setnakht: {
    horus: {
      codes: ["E1", "D40", "G36", "D21", "F9", "F9", "X1", "Z4"],
      mdc: "E1:D40-wr:r-F9*F9:t*Z4",
      transliteration: "kꜢ-nḫt wr-pḥti",
      translation: "The strong bull, great of might",
      sources: [
        { text: "Mitteilungen des Deutschen Archäologischen Instituts, Abteilung Kairo , 28, plate 49" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 164-165, 1:H" },
      ],
    },
    nebty: {
      codes: ["X1", "G43", "X1", "A53", "N28", "D36", "Z2", "W19", "C18"],
      mdc: "t-w&t-A53-xa:a:Z2-mi-C18",
      transliteration: "twt-ḫꜤw-mi-ṯꜢ-ṯnn",
      translation: "The image of appearances like Tatenen",
    },
    golden: {
      codes: ["S42", "Aa15", "D40", "Aa1", "Q3", "N37", "F23", "D46", "D21", "D40", "D21", "N29", "M17", "M17", "Z1", "Z1", "Z1", "A14", "I9"],
      mdc: "sxm-Aa15:D40-x*p:N37:xpS-d:r:D40-r:q-i-i-Z1:Z1*Z1-A14:f",
      transliteration: "sḫm-ḫpš dr-[ḥr]w.f",
      translation: "Powerful of effectiveness, who has subdued his enemies",
      sources: [
        { text: "Mitteilungen des Deutschen Archäologischen Instituts, Abteilung Kairo , 28, plate 49" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 164-165, 1:G1" },
      ],
      variants: [
        {
          codes: ["T10", "Z1", "Z1", "Z1", "A24", "M17", "D36", "N35", "G17", "M23", "M17", "M17"],
          mdc: "pD:3*3:3-A24-i-a:n-m-sw-i-i",
          transliteration: "ḥꜤi͗-pḏt Ꜥn-m-snyt",
          translation: "Who has struck the Nine Bows, beautiful in kingship",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "F12", "C12", "N36", "N28", "Z2", "U21", "N35", "N5"],
      mdc: "ra-wsr-C12-N36:xa:Z2-stp&n&ra",
      transliteration: "wsr-ḫꜤw-rꜤ stp.n-rꜤ mri͗-i͗mn",
      translation: "Powerful are the forms of Ra, chosen of Ra, beloved of Amun",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 206d" },
      ],
      variants: [
        {
          codes: ["N5", "F12", "N28", "D36", "Y1", "U21", "N35", "N5", "U6", "M17", "Y5", "N35", "A40"],
          mdc: "ra-wsr-xa:a-Y1-stp&n&ra-mr-i-mn:n-A40",
          transliteration: "wsr-ḫꜤw-rꜤ stp.n-rꜤ mri͗-i͗mn",
          sources: [
            { text: "Papyrus Harris, I, 75,7" },
            { text: "Bibliotheca Aegyptiaca, V, 91:15-16" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 164-165, 1:T7" },
          ],
        },
        {
          codes: ["N5", "F12", "N28", "Z2", "U21", "N35", "N5"],
          mdc: "ra-wsr-xa:Z2-stp&n&ra",
          transliteration: "wsr-ḫꜤw-rꜤ stp.n-rꜤ",
          translation: "Powerful are the forms of Ra, chosen of Ra",
          sources: [
            { text: "Mitteilungen des Deutschen Archäologischen Instituts, Abteilung Kairo , 28, plate 49" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 164-165, 1:T1" },
          ],
        },
        {
          codes: ["N5", "F12", "N28", "D36", "Y1", "M17", "M17", "U21", "N35", "N5"],
          mdc: "-ra-wsr-xa:a*Y1-i-i-stp&n&ra#2-#b--#e",
          transliteration: "wsr-ḫꜤw-rꜤ stp.n-rꜤ",
          translation: "Powerful are the forms of Ra, chosen of Ra",
          sources: [
            { text: "Kitchen, Ramesside Inscriptions , V, 1:15" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 164-165, 1:T2" },
          ],
        },
        {
          codes: ["N5", "F12", "N28", "Z1", "N36", "M17", "Y5", "N35"],
          mdc: "ra-wsr-xa:3-N36:(i-mn:n)",
          transliteration: "wsr-ḫꜤw-rꜤ mri͗-i͗mn",
          translation: "Powerful are the forms of Ra, belived of Amun",
        },
      ],
    },
    nomen: {
      codes: ["N5", "C12", "C7A", "D40", "N36", "D21", "D21"],
      mdc: "ra-C12\\-C7A-D40:N36-r:r",
      transliteration: "stẖ-nḫt(w) mrr-i͗mn-rꜤ",
      translation: "Seth is victorious, beloved of Amun-Ra",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 206d" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 164-165, 1:E3" },
      ],
      variants: [
        {
          codes: ["C12", "C7A", "N36", "D21", "D21", "D40"],
          mdc: "C12\\-C7A-N36:r:r-D40",
          transliteration: "stẖ-nḫt(w) mrr-i͗mn",
          translation: "Seth is victorious, beloved of Amun",
          sources: [
            { text: "Mitteilungen des Deutschen Archäologischen Instituts, Abteilung Kairo , 28, plate 49" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 164-165, 1:E1" },
          ],
        },
        {
          codes: ["U6", "C12", "N5", "C7A", "D40", "X1", "D21", "D21"],
          mdc: "U6\\-C12\\-ra-C7A-D40:t-r:r",
          transliteration: "stẖ-nḫt(w) mrr-i͗mn",
          translation: "Seth is victorious, beloved of Amun-Ra",
        },
      ],
    },
  },

  "ramesses-iii": {
    horus: {
      codes: ["E1", "D40", "O29v", "M23", "M17", "M17", "X1", "Z2"],
      mdc: "E1:D40-aAv-sw-i-i-t:Z2",
      transliteration: "kꜢ-nḫt ꜤꜢ-nsyt",
      translation: "The great bull, great of kingship",
      sources: [
        { text: "Passim" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 164-165, 2:H1" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "Z1", "E23", "F9", "F9", "X1", "Z4", "D40", "N35", "M3", "Aa1", "X1", "D40", "Z1", "D36", "V30", "F24", "D40", "M16", "N29", "Z9", "D40", "S22", "X1", "X1", "T14", "A1", "A40", "Z2", "N25"],
          mdc: "E1:D40-1:l-F9:F9-t*y:D40-n:xt:x*t-D40:Z1:a-nb:F24:D40-M16-q:Z9-D40-S22:t*t-T14-A1*A40-Z2:N25",
          transliteration: "kꜢ-nḫt mꜢi͗-pḥti͗ nḫt-Ꜥ nb-ḫpš ẖꜢḳ-sṯti͗w",
          translation: "The strong bull and powerful lion, strong-armed, the Lord of strength who has captured the Asiatics",
          sources: [
            { text: "The Epigraphic Survey, Medinet Habu, I, plate 46 (1)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 164-165, 2:H2" },
          ],
        },
        {
          codes: ["E1", "D40", "Y5", "N35", "Aa1", "U22", "Y1v", "Y5", "N35", "W24", "W24", "W24", "A53", "Z3", "S29", "R4", "X1", "Q3", "V30", "D21", "M36", "D21", "A40", "G17", "N35", "T12", "M17", "Z2", "I9", "Aa1", "G25", "X1", "Z2"],
          mdc: "E1:D40-mn:n:x-mnx-Y1v-mn:n:nw*nw*nw-A53-Z3-s-Htp:t*p-nb:r-M36:r-A40-m-n:Ai*i:Z2:f-Aa1&Ax&t:Z2",
          transliteration: "kꜢ-nḫt mnḫ-mnw sḥtp-mb-r-ḏr-m-nꜢ(y).f-Ꜣḫwt",
          translation: "The strong bull, splendid of monuments, who has satisfied the Lord of All with his benefactions",
          sources: [
            { text: "The Epigraphic Survey, Medinet Habu, VI, plate 391 (b)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 164-165, 2:H3" },
          ],
        },
        {
          codes: ["E1", "D40", "S29", "G43", "O34", "Aa1", "D56", "D54", "I6", "X1", "O49", "F12", "T16A", "Z1", "N35", "M3", "Aa1", "X1", "D40", "Z1", "D36", "O34", "G3", "Aa15", "T30", "D40", "V13", "V28", "N35", "W24", "Z7", "T14", "A1", "Z1"],
          mdc: "E1:D40-s-w-z:x-D56-D54-I6:t*O49-wsr-T16A\\-2-n:xt:x*t-D40:1:a-z:G3-Aa15:T30-D40:T-H-n:nw*W-T14*A1:3",
          transliteration: "kꜢ-nḫt swsḫ-kmt wsr-ḫpš nḫt-Ꜥ smꜢ-ṯḥnw",
          translation: "The strong bull who has enlarged Egypt, the one powerful of sword and strong of arm who has slaughtered the Libyans",
          sources: [
            { text: "The Epigraphic Survey, Medinet Habu, I, plate 27 (1)" },
            { text: "Kitchen, Ramesside Inscriptions , V, 20:14" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 164-165, 2:H4" },
          ],
        },
        {
          codes: ["E1", "N35", "M3", "Aa1", "X1", "D40", "Z1", "D36", "D46", "Aa15", "T30", "V28", "U8", "N35", "Z7", "Z1", "F16", "F16", "Y5", "U32", "Y1v", "F34", "Z1", "G36", "D21", "F9", "X1", "Z4", "D40", "D2", "Z1", "E10", "Z7", "Z4", "N21", "Z1", "S3", "N29", "N35", "D40"],
          mdc: "E1-n:M3:x*t-D40:Z1:a-d:Aa15:T30-H-U8:n:W*2-F16:F16-mn:U32*Y1v*(ib:1)-wr:r-F9:t:Z4-D40:D2*Z1-E10&1-W:Z4:N21*1-N-q:n:D40",
          transliteration: "kꜢ-nḫt-Ꜥ dm-ḥnwti͗ mn-i͗b wr-pḥti͗-ḥr-bꜢwi͗-n-ḳn",
          translation: "The strong-armed bull who has sharpened (his) two horns, decisive and great of strength on the battlefield of bravery",
          sources: [
            { text: "The Epigraphic Survey, Medinet Habu, VI, plate 392 (c)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 164-165, 2:H5" },
          ],
        },
        {
          codes: ["E1", "F9", "F9", "X1", "Z4", "D40", "S42", "Aa15", "D40", "F23", "N35", "M3", "Aa1", "X1", "D40", "Z1", "D36", "V30", "N35", "D21", "M17", "D40", "Aa15", "N17", "N17", "N17", "N25", "X1", "Z2", "I9", "Aa1", "V12", "D40", "U33", "G17", "V28", "T14", "A1"],
          mdc: "E1-F9*F9:t*Z4:D40-sxm-M:D40-xpS:n:M3:x*t-D40:Z1:a-nb:n:r-i-nr:D40-M:N17:N17:N17-N25:t*Z2-f:x:V12:D40-ti-m-H-T14-A1",
          transliteration: "kꜤ-pḥti͗ sḫm-hpš nḫt-Ꜥ nb-nrw-m-tꜢw-ḫꜢswt-fnḫw-ṯmḥw",
          translation: "The powerful bull, potent of sword, strong-armed, lord of dread in the lowlands and the highlands of the Fenkhu-Asiatics and the Temehu-Libyans",
          sources: [
            { text: "The Epigraphic Survey, Medinet Habu, II, plate 79 (1)" },
            { text: "Kitchen, Ramesside Inscriptions , V, 49:14" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 164-165, 2:H6" },
          ],
        },
        {
          codes: ["S42", "Aa15", "D40", "F9", "X1", "Z4", "D40", "O4A", "D46", "D36", "D40", "I8", "I8", "I8", "Z2", "D46", "Aa1", "A15", "D40", "N35", "G4", "F22", "D54", "O34", "S23", "D46", "S33", "S33", "I9"],
          mdc: "sxm-Aa15:D40-F9-t:y-D40:O4A:d-a:D40-I8*I8*I8:Z2-d:x-A15:D40:n-G4&F22-D54:z-S23:d-S33*S33:f",
          transliteration: "sḫm-pḥti͗ hd-ḥfnw dḫ-nꜢ-pḥw-sw-dmḏ-(ẖr)-ṯbwi͗.f",
          translation: "Powerful of strength, who has attacked hundreds of thousands, overthrown those who have attacked him, and gathered (them) (under) his sandals",
          sources: [
            { text: "The Epigraphic Survey, Medinet Habu, I, plate 33 (10)" },
            { text: "Kitchen, Ramesside Inscriptions , V, 30:14" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 164-165, 2:H7" },
          ],
        },
        {
          codes: ["I1", "X1", "Z2", "Y5", "N35", "W24", "W24", "W24"],
          mdc: "I1:t:Z2-mn:n:nw*nw*nw",
          transliteration: "ꜤšꜢ-mnw",
          translation: "With many monuments",
          sources: [
            { text: "The Epigraphic Survey, Medinet Habu, VI, plate 393 (g)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 164-165, 2:H8" },
          ],
        },
        {
          codes: ["V30", "O23F", "Z3", "W19", "C18C"],
          mdc: "nb:O23F-Z3-mi-C18C",
          transliteration: "nb-ḥꜢbu-sd-mi͗-tꜢṯnn",
          translation: "Possessor of Sed festivals like Tatenen",
          sources: [
            { text: "The Epigraphic Survey, The Excavation of Medinet Habu, III (OIP 54), plate 35 B" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 164-165, 2:H9" },
          ],
        },
        {
          codes: ["D36", "N35", "D6", "D2", "Z1", "S29", "D21", "Aa1", "O33", "W19", "H8", "Z1", "Q1", "X1", "H8"],
          mdc: "a:n:D6-D2:Z1-s-r:x:O33-mi-H8:Z1-st-t:H8",
          transliteration: "Ꜥn-ḥr-srḫ-mi͗-zꜢ-Ꜣst",
          translation: "Beautiful on the throne like the son of Isis",
          sources: [
            { text: "The Epigraphic Survey, The Excavation of Medinet Habu, III (OIP 54), plate 35 C" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 164-165, 2:H11" },
          ],
        },
        {
          codes: ["S3", "M17", "A20", "Y5", "N35", "W24", "W24", "W24", "G36", "D21", "U16", "X1", "Z2", "V22", "Y1", "M17", "Q3", "X1", "Q1", "Z1", "O49", "Aa15", "Y5", "W24", "W24", "W24", "D2", "Z1", "D21", "N35", "V10", "I9"],
          mdc: "S3-i-A20-mn:n:nw*nw*nw-wr:r-U16:t*Z2-V22:Y1-i-p:t-st-3:O49-Aa15:mn:nw*nw*nw-D2:Z1-r:n:V10:f",
          transliteration: "bi͗ti͗-wr-mnw wr-bi͗Ꜣwt mḥ-i͗ptswt-hr-rn.f",
          translation: "The reigning king, great of monuments and wonders, who has filled Karnak with his renown",
          sources: [
            { text: "The Epigraphic Survey, Medinet Habu, III, plate 32 A" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 164-165, 2:H14" },
          ],
        },
        {
          codes: ["O34", "O29v", "D36", "Y1", "N28", "Z1", "W19", "N27", "X1", "Z4", "O1", "Z7", "D58", "N35", "N8", "I9", "S34", "X1", "G24A", "Z1"],
          mdc: "z:aAv:a:Y1-xa:3-mi-N27:t-y:pr-W*b:n-N8:f-anx:t-G24A:3",
          transliteration: "sꜤꜢ-ḫꜤw-mi͗-Ꜣḫti͗ wbn.f-Ꜥnḫ-rḫyt",
          translation: "Who has magnified his appearances like the One of the Two Horizons when he rises, the life of the Rekhyet people",
          sources: [
            { text: "The Epigraphic Survey, Medinet Habu, III, plate 32 A" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 166-167, 2:H15" },
          ],
        },
        {
          codes: ["D36", "N35", "D6", "G17", "M23", "X1", "A42B", "W19", "A304G", "U7", "D21", "Z7", "X1", "A2", "X1", "G43", "I9", "R15", "D58", "Z7", "A53", "X1", "G43", "I9", "W19", "M17", "U36", "Z1", "A42", "S3", "N5", "Z1", "A40"],
          mdc: "a:n:D6-m-sw-t-A42B-mi-A304G-U7\\:r:W*t-A2-t&w:f-R15-b-W-A53-t&w:f-mi-i-U36-Z1-A42-S3-ra:Z1-A40",
          transliteration: "Ꜥn-m-nsw-mi͗-i͗tm mri͗.tw.f-Ꜣb.tw.f-mi͗-ḥm-n-rꜤ",
          translation: "Beautiful as king like Atum, he is loved and wished for like the majesty of Ra",
        },
      ],
    },
    nebty: {
      codes: ["G36", "D21", "O23F", "Z3", "W19", "C18C"],
      mdc: "wr:r-O23F-Z3-mi-C18C",
      transliteration: "wr-ḥꜤbw-sd-mi͗-tꜢ-ṯnn",
      translation: "Great of Sed festivals like Tatenen",
      sources: [
        { text: "Passim" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 166-167, 2:N1a" },
      ],
      variants: [
        {
          codes: ["G36", "D21", "O23F", "Z3", "W19", "M17", "N16", "V13", "N35", "N35", "C18C"],
          mdc: "wr:r-O23F-Z3-mi-i-N16:T:n:n-C18C",
          transliteration: "wr-ḥꜤbw-sd-mi͗-tꜢṯnn",
          translation: "Great of Sed festivals like Tatenen",
          sources: [
            { text: "The Epigraphic Survey, Medinet Habu, I, plate 46 (bottom)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 166-167, 2:N1b" },
          ],
        },
        {
          codes: ["F12", "S29", "D21", "D40", "F9", "X1", "Z4", "D40", "W19", "M17", "M17", "X1", "I9", "A40", "Z1", "I9", "Y5", "N35", "V13", "G43", "A40", "S29", "V116", "S29", "V116", "T30", "D40", "T10", "X1", "Z1", "Z1", "Z1", "D46", "D21", "D40", "Aa15", "N17", "Z1", "N21", "O34", "N35", "Z1"],
          mdc: "wsr-s-r:D40-F9:t*y:D40-mi-i-i-t:f-A40*1:f-mn:n:T-w-A40-s-V116-s-V116-T30:D40-pD:t*3:3*3-d:r:D40-Aa15:N17:Z1*N21-z:n:3",
          transliteration: "wsr-pḥti͗-mi͗-i͗t.f-mnṯw sksk-pḏt-dr-m-tꜢ.sn",
          translation: "Powerful of strength like his father Montu, who has annihilated the Nine Bows and repelled (them) in their (own) countries",
          sources: [
            { text: "The Epigraphic Survey, Medinet Habu, I, plate 46 (1)" },
            { text: "Kitchen, Ramesside Inscriptions , V, 37:10-11" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 166-167, 2:N2" },
          ],
        },
        {
          codes: ["D4", "X1", "Aa11", "N35", "N10", "X1", "R8", "Z3", "S29", "V28", "D58", "W3", "D21", "Z1", "O1", "Z1", "Z3", "Z1", "O49", "O49", "Z3", "Aa15", "D28", "Z1", "Z2", "N5", "Z1", "V30"],
          mdc: "ir:t:Aa11:n-N10:t-nTr-Z3-s*H*b:W3-r:2:pr:2-Z3:Z1-O49:O49-Z3-Aa15:kA*1:Z2-ra*Z1:nb",
          transliteration: "i͗ri͗-mꜢꜤt-n-psḏt sḥꜢb-rꜢw-pr-mi͗-kꜢw-rꜤ-nb",
          translation: "Who has accomplished Maat for the Ennead and made (their) temples festive daily",
        },
      ],
    },
    golden: {
      codes: ["F12", "M4", "M4", "M4", "W19", "A45"],
      mdc: "wsr-rnp*rnp*rnp-mi-A45",
      transliteration: "wsr-rnpwt-mi-itm",
      translation: "Rich in years like Atum",
      sources: [
        { text: "Passim" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 166-167, 2:G1a" },
      ],
      variants: [
        {
          codes: ["D36", "N35", "D6", "U33", "N35", "Z2", "D21", "Z1", "D40", "G17", "F31", "R8", "Z3", "R8", "X1", "D21", "Z1", "M17", "M17", "X1", "H8", "I12", "Z1", "N29", "D58", "F47", "Y1", "M19", "W3", "N5", "O34", "N35", "Z2"],
          mdc: "a:n:D6-U33-n:Z2:r*Z1:D40-m-ms-nTr-Z3-nTr-t:r:2-i-i-t:H8-I12:3-q&b-F47:Y1-M19-W3:ra-z:n:Z2",
          transliteration: "Ꜥn-ṯl-m-mswt-nṯrw-nṯrwt ḳꜢb-ꜤꜢbt.sn",
          translation: "Beautiful and mighty, as the (very) progeny of gods and goddesses, who has doubled their offerings",
          sources: [
            { text: "The Epigraphic Survey, Medinet Habu, VI, plate 391 (b)" },
            { text: "Kitchen, Ramesside Inscriptions , V, 314:9" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 166-167, 2:G3" },
          ],
        },
        {
          codes: ["R8", "X1", "D21", "Z4", "Y1", "Aa15", "O1", "D21", "D54", "I9", "Aa15", "F32", "X1", "Z1", "F51B", "S29", "G43", "V28", "X1", "H8", "M17", "N29", "D21", "X1", "Y1", "S29", "D58", "N29", "X1", "A53", "G5", "N19"],
          mdc: "nTr-t:r:y-Y1:Aa15:pr*(r:D54)-f:Aa15:X-t:Z1:F51B-s-w-H-t:H8-i-q:r:t-Y1:s*b*(q:t)*A53-G5&N19",
          transliteration: "nṯri͗-m-pri͗.f-m-ẖt swḥt-i͗ḳrt-sbḳt-n-ḥrꜢḫti͗",
          translation: "Divine as soon as he emerged from the womb, the excellent and precious egg of Harakhty",
          sources: [
            { text: "The Epigraphic Survey, Medinet Habu, I, plate 46 (1-2)" },
            { text: "Kitchen, Ramesside Inscriptions , V, 37:11" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 166-167, 2:G2" },
          ],
        },
        {
          codes: ["N29", "N35", "D40", "V30", "F23", "F23", "Z4", "Z7", "D4", "X1", "N37", "Z9", "N21", "D21", "U7", "D21", "I9", "Aa15", "Aa18", "Z1", "Aa1", "I9", "A14A", "I9"],
          mdc: "q:n:D40-nb:xpS:xpS-y:W-ir:t:N37-Z9*N21:r-U7:r:f-Aa15:Aa18*1-x:f-A14A:f",
          transliteration: "ḳnw nb-ḫpšwi͗ i͗ri͗-tꜢš-r-mri͗.f-m-sꜢ-ḫfti͗w.f",
          translation: "The brave one, possessor of a strong arm, who has made (his) border as he wished, behind his enemies",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "F12", "C10", "N36", "M17", "Y5", "N35"],
      mdc: "ra-wsr-mAat-N36-i-mn:n",
      transliteration: "wsr-mꜢꜤt-rꜤ mri-imn",
      translation: "Strong is the Maat of Ra, beloved of Amun",
      sources: [
        { text: "Passim" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 166-167, 2:T1" },
      ],
      variants: [
        {
          codes: ["N5", "F12", "C10A", "M17", "Y5", "N35", "N36"],
          mdc: "ra-wsr-C10A-i-mn:n:N36",
          transliteration: "wsr-mꜢꜤt-rꜤ mri͗-i͗mn",
          translation: "Strong is the Maat of Ra, beloved of Amun",
        },
      ],
    },
    nomen: {
      codes: ["C2", "F31", "S29", "S29", "S38", "O28"],
      mdc: "C2-ms-s-s-HqA-iwn",
      transliteration: "rꜤ-msi͗-sw ḥḳꜢ-i͗wnw",
      translation: "Ramesses, ruler of Heliopolis",
      sources: [
        { text: "Passim" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 166-167, 2:E1" },
      ],
      variants: [
        {
          codes: ["C2", "F31", "O34", "O34", "S38", "N29", "O28"],
          mdc: "C2-ms-z:z-HqA-q-iwn",
          transliteration: "rꜤ-msi-sw ḥḳꜢ-iwnw",
          translation: "Ramesses, ruler of Heliopolis",
          sources: [
            { text: "Passim" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 166-167, 2:E2" },
          ],
        },
      ],
    },
  },

  "ramesses-iv": {
    horus: {
      codes: ["E1", "D40", "C10", "S34", "Aa11"],
      mdc: "E1:D40-mAat*anx:Aa11",
      transliteration: "kꜢ-nḫt Ꜥnḫ-m-mꜢꜤt",
      translation: "Horus, the strong bull, his Maat lives",
      sources: [
        { text: "Year 1" },
        { text: "Kitchen, Ramesside Inscriptions , VI, 36" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 166-167, 3:H3" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "S34", "G17", "H6", "V30", "O23F", "Z3", "W19", "M17", "X1", "I9", "Z1", "I9", "Q3", "X1", "V28", "C18F"],
          mdc: "E1:D40-anx-m-Sw-nb:O23F*Z3-mi-i-t:f:Z1:f-p:t-H-C18F",
          transliteration: "kꜢ-nḫt Ꜥnḫ-m-mꜢꜤt nb-ḥꜢbw-sd-mi͗-i͗t.f-pth-tꜢṯnn",
          translation: "Horus, the strong bull, his Maat lives, master of the Heb-Sed like his father Ptah-Tatenen",
        },
      ],
    },
    nebty: {
      codes: ["Aa11", "D36", "V31", "I6", "Aa15", "X1", "O49", "G45", "I9", "V1", "D40", "T10", "X1", "Z1", "Z1", "Z1"],
      mdc: "Aa11:a:k-I6:Aa15:t*O49-G45:f-V1:D40-pD:t*3:3*3",
      transliteration: "mk-kmt wꜤf-pḏt-9",
      translation: "The protector of Egypt, he who vanquishes the Nine Bows",
    },
    golden: {
      codes: ["F12", "S29", "M4", "M4", "M4", "G36", "D21", "N35", "M3", "Aa1", "X1", "D40", "Z3"],
      mdc: "wsr-s-rnp-rnp-rnp-wr:r-n:xt:x*t:D40-Z3",
      transliteration: "wsr-rnpwt wr-nḫtw",
      translation: "The golden falcon, rich in years, whose victories are great",
    },
    prenomen: {
      codes: ["N5", "F12", "H6", "C12", "U21", "S3"],
      mdc: "ra-wsr-Sw-C12-stp-S3",
      transliteration: "wsr-mꜢꜤt-rꜤ stp.n-i͗mn",
      translation: "Usermaatra, chosen one of Amun",
      sources: [
        { text: "Year 1" },
        { text: "Couyat, Montet, Les inscriptions hiéroglyphiques et hiératiques du Ouadi Hammamat, 86" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 166-167, 3:T1" },
      ],
      variants: [
        {
          codes: ["N5", "S38", "C12B", "U21", "N35"],
          mdc: "ra-HqA-C12B-stp:n",
          transliteration: "ḥḳꜢ-mꜢꜤt-rꜤ stp.n-i͗mn",
          translation: "Ruler of the Maat like Ra, the chosen one of Amun",
          sources: [
            { text: "After year 1" },
            { text: "Kitchen, Ramesside Inscriptions , VI, 12" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 168-169, 3:T5" },
          ],
        },
        {
          codes: ["C10A", "N5", "S38", "C12", "U21", "S3"],
          mdc: "C10A\\-ra:HqA-C12-stp*S3",
          transliteration: "ḥḳꜢ-mꜢꜤt-rꜤ stp.n-i͗mn",
          translation: "Ruler of the Maat like Ra, the chosen one of Amun",
          sources: [
            { text: "After year 1" },
            { text: "The Epigraphic Survey, Medinet Habu, V, plate 360 B" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 168-169, 3:T6" },
          ],
        },
        {
          codes: ["N5", "S38", "C10A", "Y5", "N35", "U21", "N35"],
          mdc: "ra-HqA-C10A-mn:n:stp:n",
          transliteration: "ḥḳꜢ-mꜢꜤt-rꜤ stp.n-i͗mn",
          translation: "Ruler of the Maat like Ra, the chosen one of Amun",
          sources: [
            { text: "After year 1" },
            { text: "Couyat, Montet, Les inscriptions hiéroglyphiques et hiératiques du Ouadi Hammamat, 240" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 168-169, 3:T7" },
          ],
        },
        {
          codes: ["N5", "S38", "C10A", "U21", "N35", "N5"],
          mdc: "ra-HqA-C10A-stp&n&ra",
          transliteration: "ḥḳꜢ-mꜢꜤt-rꜤ stp.n-rꜤ",
          translation: "Ruler of the Maat like Ra, the chosen one of Ra",
          sources: [
            { text: "After year 1" },
            { text: "Gardiner, Peet, Cerny, The Inscriptions of Sinai, I, plate LXXV (277)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 168-169, 3:T9" },
          ],
        },
        {
          codes: ["N5", "S38", "C102F", "U21", "N35"],
          mdc: "ra-HqA-C102F-stp:n",
          transliteration: "ḥḳꜢ-mꜢꜤt-rꜤ stp.n-ptḥ",
          translation: "Ruler of the Maat like Ra, the chosen one of Ptah",
          sources: [
            { text: "After year 1" },
            { text: "Kitchen, Ramesside Inscriptions , VI, 35" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 168-169, 3:T10" },
          ],
        },
        {
          codes: ["N5", "C10C"],
          mdc: "ra-C10C",
          transliteration: "ḥḳꜢ-mꜢꜤt-rꜤ",
          translation: "Ruler of the Maat like Ra",
        },
      ],
    },
    nomen: {
      codes: ["N5", "C2", "C12A", "N36", "S38", "F31", "O34", "O34", "H6"],
      mdc: "ra-C2\\*C12A-N36-HqA-ms:z:z-Sw",
      transliteration: "rꜤ-msi͗-sw ḥḳꜢ-mꜢꜤt mri͗-i͗mn",
      translation: "Ramesses, ruler of Maat, beloved of Amun",
      sources: [
        { text: "Year 1" },
        { text: "The Epigraphic Survey, Medinet Habu, VIII, plate 593" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 168-169, 3:E1" },
      ],
      variants: [
        {
          codes: ["U6", "C12B", "N5", "S38", "C2", "F31", "S29", "M23"],
          mdc: "U6\\-C12B\\-ra:HqA-C2-ms-s-sw",
          transliteration: "rꜤ-msi͗-sw ḥḳꜢ-mꜢꜤt mri͗-i͗mn",
          translation: "Ramesses, ruler of the Maat, beloved of Amun",
          sources: [
            { text: "Year 1" },
            { text: "Kitchen, Ramesside Inscriptions , VI, 10" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 168-169, 3:E2" },
          ],
        },
        {
          codes: ["U6", "C12", "C2", "F31", "N5", "S38", "C10A", "O34", "O34"],
          mdc: "U6\\-C12\\-C2-ms*(ra:HqA)*C10A:z:z",
          transliteration: "rꜤ-msi͗-sw ḥḳꜢ-mꜢꜤt mri͗.i͗mn",
          translation: "Ramesses, ruler of Maat, beloved of Amun",
          sources: [
            { text: "Year 1" },
            { text: "The Epigraphic Survey, Medinet Habu, II, plate 101 (bottom)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 168-169, 3:E3" },
          ],
        },
      ],
    },
  },

  "ramesses-v": {
    horus: {
      codes: ["E1", "D40", "C10", "O25"],
      mdc: "E1:D40-mAat-O25",
      transliteration: "kꜢ-nḫt mn-mꜢꜤt",
      translation: "Strong bull, whose Maat is permanent",
    },
    golden: {
      codes: ["F12", "S29", "M4", "M4", "M4", "W19", "M17", "X1", "U15", "Aa15", "A40"],
      mdc: "wsr-s-rnp-rnp-rnp-mi-i-t:U15:M-A40",
      transliteration: "wsr-rnpwt-mi͗-i͗tm",
      translation: "Rich in years like Atum",
    },
    prenomen: {
      codes: ["N5", "F12", "C10A", "S29", "N5", "L1", "N35"],
      mdc: "ra-wsr-C10A-s-ra-xpr:n",
      transliteration: "wsr-mꜢꜤt-rꜤ sḫpr.n-rꜤ",
      translation: "Ra is rich in Maat, he who Ra has raised",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 223a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 168-169, 4:T1" },
      ],
    },
    nomen: {
      codes: ["N5", "C12", "C12F", "N36", "S29", "F31", "M23", "I9"],
      mdc: "ra-C12\\-C12F-N36-s-ms-sw-f",
      transliteration: "rꜤ-msi͗-sw i͗mn-(ḥr)-ḫpš.f mri͗.i͗mn",
      translation: "Ra created him, Amun is his force, beloved of Amun",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 223b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 168-169, 4:E1" },
      ],
      variants: [
        {
          codes: ["N5", "C12A", "T16A", "C12A", "N36", "M23", "F31", "S29"],
          mdc: "ra-C12A\\-T16A-C12A-N36-sw-ms-s",
          transliteration: "rꜤ-msi͗-sw i͗mn-(ḥr)-ḫpš mri͗.i͗mn",
          translation: "Ra created him, Amun is his force, beloved of Amun",
          sources: [
            { text: "Usurped" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 223a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 168-169, 4:E5" },
          ],
        },
      ],
    },
  },

  "ramesses-vi": {
    horus: {
      codes: ["E1", "D40", "O29v", "D36", "Y1", "N35", "M3", "Aa1", "X1", "D40", "Z2", "S29", "S34", "M127", "M13"],
      mdc: "E1:D40-aAv:a:Y1-n:xt:x*t-D40:Z2-s-anx-M127-wAD",
      transliteration: "kꜢ-nḫt ꜤꜢ-nḫtw sꜤnḫ-tꜢwi͗",
      translation: "The strong bull, whose victories are great, he who gives life to the Two Lands",
      sources: [
        { text: "The Epigraphic Survey, Medinet Habu, II, plate 102, usurped" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 170-171, 5:H1" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "O29v", "N35", "M3", "Aa1", "X1", "D40"],
          mdc: "E1:D40-aAv:n:xt-x*t:D40",
          transliteration: "kꜢ-nḫt ꜤꜢ-nḫt(w)",
          translation: "The strong bull, whose victories are great",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text III, 201" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 170-171, 5:H3" },
          ],
        },
        {
          codes: ["O29v", "D36", "Y1", "N35", "M3", "Aa1", "X1", "A24", "X1", "Z7"],
          mdc: "aAv:a:Y1-n:xt:x*t-A24:t*W",
          transliteration: "kꜢ-nḫt ꜤꜢ-nḫt(w)",
          translation: "The strong bull, whose victories are great",
        },
      ],
    },
    nebty: {
      codes: ["F12", "S29", "Z7", "A24", "Aa1", "Q3", "N37", "F23", "O4", "G4", "F46", "D36", "A24", "V28", "I9", "N35", "W24", "Z7", "I8", "Z2"],
      mdc: "wsr-s-W-A24-x:p-N37:xpS-h-G4-F46:a-A24-H-f:n:nw*W-I8:Z2",
      transliteration: "wsr-ḥpš hd-ḥfnw",
      translation: "He whose blow is powerful, he whose attacks are countless",
      sources: [
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 170-171, 5:N1" },
      ],
    },
    golden: {
      codes: ["F12", "S29", "M4", "M4", "M4", "W19", "N17", "V13", "M23", "M23", "N35", "N35"],
      mdc: "wsr-s-rnp-rnp-rnp-mi-N17:T-sw*sw:n:n",
      transliteration: "wsr-rnpwt-mi͗-tꜢ-ṯnn",
      translation: "Rich in years like Tatenen",
      sources: [
        { text: "Kitchen, Ramesside Inscriptions , VI, 372" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 170-171, 5:G1" },
      ],
    },
    prenomen: {
      codes: ["N5", "C10A", "C12", "N36", "V30"],
      mdc: "ra-C10A\\-C12-N36:nb",
      transliteration: "nb-mꜢꜤt-rꜤ mri͗-i͗mn",
      translation: "Lord of the Maat like Ra, beloved of Amun",
      sources: [
        { text: "Tomb KV9, Passim" },
        { text: "Petrie, Koptos, plate XIX, bottom" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 170-171, 5:T2" },
      ],
    },
    nomen: {
      codes: ["N5", "C12B", "F31", "O34", "O34", "R8", "S38", "O28"],
      mdc: "ra-C12B-ms:z:z-nTr-HqA-iwn",
      transliteration: "rꜤ-msi͗-sw i͗mn-ḥr-ḫpš.f nṯr-ḥḳꜢ-i͗wnw",
      translation: "Ramesses, Amun is his force, god and ruler of Heliopolis",
      sources: [
        { text: "Tomb KV9, passim" },
        { text: "Found throughout the tomb." },
      ],
    },
  },

  "ramesses-vii": {
    horus: {
      codes: ["E1", "D40", "D36", "N35", "D6", "G17", "M23", "A42A"],
      mdc: "E1:D40-a:n:D6-m-sw-A42A",
      transliteration: "kꜢ-nḫt Ꜥn-m-nsw",
      translation: "The strong bull, magnificent of royalty",
      sources: [
        { text: "Valley of Kings, Tomb KV11" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 233a (top row)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 170-171, 6:H1" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "D36", "N35", "D6", "Aa15", "R8", "A40"],
          mdc: "E1:D40-a:n-D6:Aa15-nTr-A40",
          transliteration: "kꜢ-nḫt Ꜥn-m-nṯr",
          sources: [
            { text: "BIFAO 29, p. 74" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 170-171, 6:H3" },
          ],
        },
        {
          codes: ["E1", "D40", "N5", "Z1", "F35", "D2", "Z1", "V30", "O23F", "Z3", "W19", "M17", "X1", "I9", "Z1", "I9", "Q3", "X1", "V28", "N17", "V13", "N35", "N35"],
          mdc: "E1:D40-ra:Z1-nfr-D2:Z1-nb-O23F-Z3-mi-i-t:f:Z1:f-p:t-H-N17:T:n:n",
          transliteration: "kꜢ nꜤkht rꜤ nefer her nb ḥbw-sd mi it.f ptḥ-tꜢ-ṯnn",
          translation: "The victorious bull of Ra, beautiful of face, possessor of Sed festivals like his father Ptah-Tatenen",
        },
      ],
    },
    nebty: {
      codes: ["Aa15", "D36", "V31", "Y1", "I6", "Aa15", "X1", "O49", "G45", "I9", "Z7", "D40", "T10", "X1", "Z2"],
      mdc: "Aa15:a:k-Y1:I6:Aa15-t:O49-G45:f-W:D40:pD:t*Z2",
      transliteration: "mk-kmt wꜤf-ḫꜢsti͗w",
      translation: "Protector of Egypt, he who vanquishes the foreigners",
      sources: [
        { text: "Valley of Kings, Tomb KV11" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 233a (top row)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 170-171, 6:N2" },
      ],
      variants: [
        {
          codes: ["G17", "D36", "V31", "Y1", "I6", "X1", "O49", "G43", "D36", "I9", "V1", "Y1v", "A24", "N25", "X1", "Z1", "T14", "A1", "B1", "Z2", "N25"],
          mdc: "m-a:k:Y1-I6:t*O49-w-a:f:V1-Y1v-A24-N25:t*Z1-T14-A1*B1:Z2-N25",
          transliteration: "mk kmt wꜤf ḫꜢstyw",
          translation: "The protector of Egypt who has subdued the foreigners",
        },
      ],
    },
    golden: {
      codes: ["F12", "M4", "M4", "M4", "W19", "M17", "A304G"],
      mdc: "wsr-rnp-rnp-rnp-mi-i-A304G",
      transliteration: "wsr-rnpwt-mi͗-i͗mn",
      translation: "Rich in years like Amum",
    },
    prenomen: {
      codes: ["N5", "F12", "C12B", "U6", "U21", "N35", "N5"],
      mdc: "ra-wsr-C12B-mr-stp&n&ra",
      transliteration: "wsr-mꜢꜤt-rꜤ stp.n-rꜤ mri͗-i͗mn",
      translation: "Rich in Maat like Ra, the chosen one of Ra, beloved of Amun",
      sources: [
        { text: "Valley of Kings, Tomb KV11" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 233a (top row)" },
      ],
    },
    nomen: {
      codes: ["N5", "C12", "F31", "O34", "O34", "M17", "X1", "R8", "S38", "O28"],
      mdc: "N5-C12-F31-O34:O34-M17:X1-R8-S38-O28",
      transliteration: "rꜤ-msi͗-sw i͗t(.i͗)-i͗mn nṯr-ḥḳꜢ-i͗nwn",
      translation: "Ramesses, his father is Amun, god and ruler of Heliopolis",
      sources: [
        { text: "Valley of Kings, Tomb KV11" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 233a" },
      ],
      variants: [
        {
          codes: ["F31", "O34", "O34", "M17", "X1", "C2", "C12", "M17", "X1", "R8", "S38", "O28"],
          mdc: "ms:z:z-i:t-C2\\-C12-i:t-nTr-HqA-iwn",
          transliteration: "rꜤ-msi͗-sw i͗t(.i͗)-i͗mn nṯr-ḥḳꜢ-i͗wnw",
          translation: "Ramesses, his father is Amun, god and ruler of Heliopolis",
          sources: [
            { text: "Valley of Kings, Tomb KV11" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 233a (top row)" },
          ],
        },
      ],
    },
  },

  "ramesses-viii": {
    prenomen: {
      codes: ["C2", "F12", "C12B", "G25", "Aa1", "N35"],
      mdc: "C2\\-wsr-C12B-Ax&x:n",
      transliteration: "wsr-mꜢꜤt-rꜤ Ꜣḫ-n-i͗mn",
      translation: "The strong one of the Maat of Ra, beneficial to Amun",
      sources: [
        { text: "The Epigraphic Survey, Medinet Habu, V, plate 301 (4)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 172-173, 7:T1" },
      ],
    },
    nomen: {
      codes: ["N5", "C7", "C12", "N36", "F31", "S29", "H6"],
      mdc: "ra-C7-C12-N36-ms-s-H6",
      transliteration: "rꜤ-msi͗-sw stẖ-ḥr-ḫpš.f mri͗-i͗mn",
      translation: "Ramesses, Seth is on his strong arm, beloved of Amun",
      sources: [
        { text: "The Epigraphic Survey, Medinet Habu, V, plate 299 (4)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 172-173, 7:E1" },
      ],
    },
  },

  "ramesses-ix": {
    horus: {
      codes: ["E1", "D40", "G17", "N28", "R19"],
      mdc: "E1:D40-m&xa-R19",
      transliteration: "kꜢ-nḫt ḫꜤi-m-wꜢst",
      translation: "The strong bull, he who appears in Thebes",
    },
    nebty: {
      codes: ["F12", "T16A", "S29", "S34", "M127", "M13"],
      mdc: "wsr-T16A-s-anx-M127-wAD",
      transliteration: "wsr-ḫpš sꜤnḫ-tꜢwi͗",
      translation: "He whose blow is powerful, he invigorates the Two Lands",
    },
    golden: {
      codes: ["F12", "M4", "X1", "Z1", "W19", "M17", "C18C", "M17", "U33", "M17", "M17", "C57", "G36", "D21", "M23", "X1", "M17", "M17", "Y1v", "X1", "Z3", "D46", "D21", "N21", "D40", "T10", "X1", "Z1", "Z1", "Z1"],
      mdc: "wsr-rnp-t:3-mi-i-C18C-i-U33-i-i-C57-wr:r-sw-t-i-i-Y1v-t:Z3-d:r:N21&D40-pD:t*3:3*3",
      transliteration: "wsr-rnpwt-mi͗-Ꜥnḏti͗ wr-nsyt dr-pḏt-9",
      translation: "He who is rich in years like Tatenen, the great king who has repelled the Nine Bows",
    },
    prenomen: {
      codes: ["C2", "F35", "D28", "U21", "N35", "N5"],
      mdc: "C2-nfr-kA-stp&n&ra",
      transliteration: "nfr-kꜢ-rꜤ stp.n-rꜤ",
      translation: "Perfect is the Ka of Ra, the chosen one of Ra",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 235" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 172-173, 8:T1" },
      ],
    },
    nomen: {
      codes: ["N28", "C12", "R19", "C2", "N36", "M23", "F31", "S29", "D21", "D21"],
      mdc: "xa-C12\\-R19-C2-N36-sw-ms-s-r:r",
      transliteration: "rꜤ-msi͗-sw ḫꜤi͗-m-wꜢst mrr-i͗mn",
      translation: "Ramesses, he who appears in Thebes, beloved of Amun",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 235" },
      ],
      variants: [
        {
          codes: ["C2A", "R19", "C12", "F31", "S29", "S29", "U7", "D21", "D21"],
          mdc: "C2A\\-R19-C12-ms-s-s-U7:r:r",
          transliteration: "rꜤ-msi͗-sw ḫꜤi͗(m)-wꜢst mrr-i͗mn",
          translation: "Ramesses, he who appears in Thebes, beloved of Amun",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 235" },
          ],
        },
        {
          codes: ["N28", "C2A", "R19", "C12A", "N36", "F31", "S29", "M23", "D21", "D21"],
          mdc: "xa-C2A\\-R19-C12A-N36-ms-s-sw-r:r",
          transliteration: "rꜤ-msi͗-sw ḫꜤi͗(m)-wꜢst mrr-i͗mn",
          translation: "Ramesses, he who appears in Thebes, beloved of Amun",
        },
      ],
    },
  },

  "ramesses-x": {
    horus: {
      codes: ["E1", "D40", "C2", "O34", "N28", "D36", "D36", "N35"],
      mdc: "E1:D40-C2-z:xa-a:a:n",
      transliteration: "kꜢ-nḫt sḫꜤꜤ-rꜤ",
      translation: "The strong bull, he who appears at the behest of Ra",
    },
    prenomen: {
      codes: ["N5", "L1", "C10A", "U21", "N35", "N5"],
      mdc: "ra-xpr-C10A-stp&n&ra",
      transliteration: "ḫpr-mꜢꜤt-rꜤ stp.n-rꜤ",
      translation: "The (very) manifestation of the Maat of Ra, chosen by Ra",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 239b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 174-175, 9:T1" },
      ],
      variants: [
        {
          codes: ["C10A", "L1", "C2", "N35", "U21", "N35", "N5"],
          mdc: "C10A\\-xpr-C2-n:stp&n&ra",
          transliteration: "ḫpr-mꜢꜤt-n-rꜤ stp.n-rꜤ",
          translation: "The (very) manifestation of the Maat of Ra, chosen by Ra",
        },
      ],
    },
    nomen: {
      codes: ["C2", "C12", "M23", "F31", "S29"],
      mdc: "C2\\-C12-sw-ms-s",
      transliteration: "rꜤ-msi͗-sw i͗mn-(ḥr)-ḫpš.f",
      translation: "Ra fashioned him, upon the strong arm of Amun",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 239b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 174-175, 9:E1" },
      ],
      variants: [
        {
          codes: ["C2A", "F31", "C12F", "O34", "O34", "N36", "M17", "Y5", "N35", "I9"],
          mdc: "C2A\\-ms-C12F-z:z:N36-i-mn:n:f",
          transliteration: "rꜤ-msi͗-sw i͗mn-(ḥr)-ḫpš.f mri͗-i͗mn",
          translation: "Ra fashioned him, upon the strong arm of Amun, beloved of Amun",
          sources: [
            { text: "British Museum Ostracon EA5621" },
            { text: "Birch, Inscriptions in the Hieratic and Demotic Character from the Collections of the British Museum, plate II" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 174-175, 9:E2" },
          ],
        },
        {
          codes: ["C12F", "N5", "F31", "O34", "O34", "N36", "M17", "Y5", "N35"],
          mdc: "C12F-ra:ms-z:z:N36-i-mn:n",
          transliteration: "rꜤ-msi͗-sw i͗mn-(ḥr)-ḫpš.f mri͗-i͗mn",
          translation: "Ra fashioned him, upon the strong arm of Amun, beloved of Amun",
        },
      ],
    },
  },

  "ramesses-xi": {
    horus: {
      codes: ["E1", "D40", "C2", "U6"],
      mdc: "E1:D40-C2-mr",
      transliteration: "kꜢ-nḫt mri-rꜤ",
      translation: "The strong bull, beloved of Ra",
    },
    nebty: {
      codes: ["F12", "S29", "T16A", "O4", "D46", "D36", "D40", "I8", "Z2"],
      mdc: "wsr-s-T16A-h:d-a:D40-I8:Z2",
      transliteration: "wsr-ḫpš hd-ḥfnw",
      translation: "He whose blow is powerful, he whose attacks are countless",
    },
    golden: {
      codes: ["G36", "D21", "F22", "X1", "Z5", "A24", "S29", "S34", "N17", "N17", "N23", "N23", "M17", "A2", "U33", "M17", "M17", "A23", "G7", "S34", "U28", "S29", "O4", "D21", "Y1", "F34", "U5", "D36", "Z1", "H6", "Y1", "S29", "R4", "X1", "Q3", "Y1", "N17", "N17", "N23", "N23"],
      mdc: "wr:r-F22:t*Z5-A24-s-anx-N17:N17:N23*N23-i-A2-U33-i-i-A23-G7-anx-DA-s-h:r-Y1:ib-U5:a*Z1-Sw:Y1-s-Htp:t*p:Y1-N17:N17:N23*N23",
      transliteration: "Wr-pḥti͗-s.Ꜥnḫ-tꜢwi͗-i͗ti͗-Ꜥnḫ-wḏ-snb-shr-i͗b-MꜢꜤt-s.ḥtp-tꜢwi͗",
      translation: "He whose power is great, he gives new life to the Two Lands, life, prosperity, health, he reconciles the Two Lands under the majesty of Maat",
    },
    prenomen: {
      codes: ["N5", "Y5", "C10A", "C102G", "U21", "N35"],
      mdc: "ra:mn-C10A\\-C102G-stp:n",
      transliteration: "mn-mꜢꜤt-rꜤ stp.n-ptḥ",
      translation: "The justice of Ra is enduring, chosen by Ptah",
      sources: [
        { text: "The Epigraphic Survey, The Temple of Khonsu, II, plate 201" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 174-175, 10:T1" },
      ],
    },
    nomen: {
      codes: ["F31", "O34", "O34", "C2A", "N28", "R19", "C12A", "D21", "D21", "U6", "S38", "R8", "O28"],
      mdc: "ms:z:z-C2A\\-xa:R19-C12A-r*r:mr*HqA*nTr*iwn",
      transliteration: "rꜤ-msi͗-sw ḫꜤi-(m)-wꜢst mrr-i͗mn nṯr-ḥḳꜢ-i͗wnw",
      translation: "Ramesses, he appeared in Thebes. Beloved of Amun, divine ruler of Heliopolis",
      sources: [
        { text: "The Epigraphic Survey, The Temple of Khonsu, II, plate 201" },
      ],
      variants: [
        {
          codes: ["C2A", "N28", "R19", "C12A", "N36", "D21", "D21", "F31", "S38", "R8", "O28"],
          mdc: "C2A\\-xa:R19-C12A-N36:r:r-ms-HqA-nTr-iwn",
          transliteration: "rꜤ-msi͗-sw ḫꜤi͗-(m)-wꜢst mrr-i͗mn nṯr-ḥḳ3-i͗wnw",
          translation: "Ramesses, he appeared in Thebes. Beloved of Amun, divine ruler of Heliopolis",
          sources: [
            { text: "The Epigraphic Survey, The Temple of Khonsu, II, plate 203" },
          ],
        },
        {
          codes: ["C2", "N28", "R19", "C12", "N36", "D21", "D21", "F31", "S38", "R8", "O28", "O34", "O34"],
          mdc: "C2\\-xa:R19-C12-N36:r:r-ms-HqA-nTr-iwn-z:z",
          transliteration: "rꜤ-msi͗-sw ḫꜤi͗-(m)-wꜢst mrr-i͗mn nṯr-ḥḳ3-i͗wnw",
          translation: "Ramesses, he appeared in Thebes. Beloved of Amun, divine ruler of Heliopolis",
        },
      ],
    },
  },

  "smendes-i": {
    horus: {
      codes: ["E2", "D40", "N5", "Z1", "U6", "S29", "F12", "S29", "D21", "D40", "M17", "Y5", "N35", "F23", "I9", "D21", "S29", "N29", "A28", "U5", "D36", "X1", "H8"],
      mdc: "E2:D40-ra:Z1-mr-s-wsr-s-r:D40-i-mn:n-xpS:f:r-s-q-A28-U5:a-t:H8",
      transliteration: "kꜢ-nḫt-mri͗-rꜤ swsr-i͗mn ḫpš.f-r-sḳꜢi͗-mꜢꜤt",
      translation: "Strong bull, beloved of Ra, whose arm Amun has strengthened in order to offer up Maat",
    },
    nebty: {
      codes: ["S42", "F9", "F9", "V28", "A24", "D21", "N29", "M17", "M17", "A14A", "Z2", "I9", "D58", "O4", "G1", "D54", "X1", "G43", "I9", "V28", "Q3", "X1", "D199", "G17"],
      mdc: "sxm-F9:F9-H-A24-r:q-i-i-A14A-Z2:f-b-h-A-D54:t-w-f:H*(p:t)-D199-m",
      transliteration: "sḫm-pḥti͗ ḥwi͗-rḳw.f-bhꜢtw.f- ḥtp-m-..",
      translation: "Powerful of might, who has struck down his opponents who flee from him, who has embraced by means of...",
    },
    golden: {
      codes: ["U35", "D46", "N35", "D46", "N35", "F6", "D40"],
      mdc: "U35-d:n:d:n-F6:D40",
      transliteration: "..ḫsf-dndn",
      translation: "... who drove away anger",
    },
    prenomen: {
      codes: ["N5", "S1", "L1", "U21", "N35", "N5"],
      mdc: "ra-S1-xpr-stp&n&ra",
      transliteration: "ḥḏ-ḫpr-rꜤ stp.n-rꜤ",
      translation: "The dazzling one is the (very) manifestation of Ra",
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "U7", "F20", "O34", "E10", "R11", "R11", "X1", "O49"],
      mdc: "i-mn:n:U7-F20:z-E10-Dd-Dd-t:O49",
      transliteration: "ni͗-sw-bꜢ-nb-ḏdt mri͗-i͗mn",
      translation: "He belongs to the ram, the lord of Mendes, beloved of Amun",
      sources: [
        { text: "RecTrav 10, 135" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 178-179, 1:E3" },
      ],
      variants: [
        {
          codes: ["M17", "Y5", "N35", "U7", "F20", "E10", "V30", "R11", "R11"],
          mdc: "i-mn:n:U7-ns&E10-nb:Dd*Dd",
          transliteration: "ni͗-sw-bꜢ-n-ḏdt mri͗-i͗mn",
          translation: "He belongs to the ram, the lord of Mendes, beloved of Amun",
        },
      ],
    },
  },

  amenemnesut: {
    prenomen: {
      codes: ["N5", "F35", "D28", "S38", "R19"],
      mdc: "ra-nfr-kA-HqA-R19",
      transliteration: "nfr-kꜢ-rꜤ ḥḳꜢ-wꜢst",
      translation: "The perfect one is the (very) ka of Ra, ruler of Thebes",
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "G17", "X1", "M23"],
      mdc: "i-mn:n-m&t-sw",
      transliteration: "i͗mn-m-nswt",
      translation: "Amun is king",
      sources: [
        { text: "Borchardt, Quellen und Forschungen zur Zeitbestimmung der Ägyptischen Geschichte, II, plate 2" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 178-179, 2:E2" },
      ],
      variants: [
        {
          codes: ["C12", "C12", "N36", "G17", "M23"],
          mdc: "C12\\-C12-N36:m*sw",
          transliteration: "i͗mn-m-nsw mri͗-i͗mn",
          translation: "Amun is king, beloved of Amun",
        },
      ],
    },
  },

  "psusennes-i": {
    horus: {
      codes: ["E2", "D40", "G17", "D37", "D37", "M17", "Y5", "N35", "F12", "I9", "F40", "Z7", "S29", "N28", "D36", "G17", "R19", "X1", "O49"],
      mdc: "E2:D40-m-D37:D37-i-mn:n-wsr-f:F40:W-s-xa:a-m-R19-t:O49",
      transliteration: "kꜢ-nḫt m-Ꜣwi͗-i͗mn wsr-fꜢw sḫꜤi͗-m-wꜢst",
      translation: "The strong bull through the gift of Amun, rich in splendor, who has been made to appear in Thebes",
    },
    nebty: {
      codes: ["G36", "D21", "Y5", "N35", "W24", "W24", "W24", "G17", "M17", "Q3", "X1", "Q1", "Z1", "O49", "V30", "F9", "F9", "G45", "I9", "N17", "N17", "N21", "N21", "V29", "X1", "M23", "N5", "G17", "W19", "Q3", "X1", "N1"],
      mdc: "wr:r-mn:n:nw*nw*nw-m-i-p:t-st-3:O49-nb:F9*F9-G45:f-N17:N17:N21*N21-wAH-t-sw-ra:m-mi-p*t:N1",
      transliteration: "wr-mnw-m-ipt-swt nb-pḥti͗-wꜤf-tꜢwi͗-wꜢḥ-nsi͗t-mi͗-rꜤ-m-pt",
      translation: "Great of monuments in Karnak, the possessor of might who has subdued the Two Lands, the one enduring of kingship like Ra in heaven",
    },
    golden: {
      codes: ["F36", "L1", "Z1", "D46", "D21", "D40", "T10", "X1", "Z1", "Z1", "Z1", "V15", "D40", "G17", "G17", "I9", "S42", "G17", "N17", "N17", "N17", "N21", "N21", "V30", "Z7", "Z1"],
      mdc: "zmA-L1:3-d:r:D40-pD:t*3:3*3-iTi:D40-m-m:f-sxm-m-N17:N17:N17:N21*N21-nb:W*3",
      transliteration: "smꜢ-tꜢw dr-pḏt i͗ṯi͗-sḫm.f-m-tꜢw-nbw",
      translation: "Who has united lands, repelled the Nine Bows, and seized with his strong arm all lands",
    },
    prenomen: {
      codes: ["N5", "O29v", "L1", "C12", "U21", "N35"],
      mdc: "ra:aAv-xpr-C12-stp:n",
      transliteration: "ꜤꜢ-ḫpr-rꜤ stp.n-i͗mn",
      translation: "The great one is a manifestation of Ra, chosen by Amun",
      sources: [
        { text: "Mariette, Monuments divers recueillis en Égypte et en Nubie (1872), II, pl. 102c" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 178-179, 3:T2" },
      ],
      variants: [
        {
          codes: ["N5", "O29v", "L1", "M17", "Y5", "N35", "U7"],
          mdc: "ra-O29v-xpr-i-mn:n:U7",
          transliteration: "ꜤꜢ-ḫpr-rꜤ mri͗-i͗mn",
          translation: "The great one is a manifestation of Ra, beloved of Amun",
          sources: [
            { text: "Montet, La Nécropole royale de Tanis (1951), Vol. 2, 170, fig. 63" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 178-179, 3:T3" },
          ],
        },
        {
          codes: ["N5", "O29v", "L1", "C10A", "U21", "N35"],
          mdc: "ra:aAv-xpr-C10A-stp:n",
          transliteration: "ꜤꜢ-ḫpr-rꜤ stp.n-mꜢꜤt",
          translation: "The great one is a manifestation of Ra, chosen by Maat",
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "U7", "G40", "N14", "N28", "N35", "O49"],
      mdc: "i-mn:n:U7-G40-N14*xa:n:O49",
      transliteration: "pꜢ-sbꜢ-ḫꜢi͗-n-ni͗wt mri͗-i͗mn",
      translation: "The star who has appeared in Niut (Thebes), beloved of Amun",
      sources: [
        { text: "Daressy, Contribution à l'étude de la XXIe dynastie égyptienne, Revue Archeologique 1896/01 (SER3,T28): 76" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 178-179, 3:E1" },
      ],
      variants: [
        {
          codes: ["G40", "N14", "N28", "N35", "O49", "X1"],
          mdc: "G40-N14:xa-n:O49*t",
          transliteration: "pꜢ-sbꜢ-ḫꜤi͗-n-ni͗wt",
          translation: "The star who has appeared in Niut (Thebes)",
          sources: [
            { text: "Montet, La Nécropole royale de Tanis (1951), Vol. 2, 96-97, fig. 38, pl. 55" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 178-179, 3:E2" },
          ],
        },
        {
          codes: ["R8", "U36", "D1", "Q3", "N35", "M17", "Y5", "N35", "G40", "N14", "N28", "N35", "O49"],
          mdc: "nTr-U36-D1*p:n-i-mn:n-G40-N14*xa:n:O49",
          transliteration: "ḥm-nṯr tpi͗-n-i͗mn pꜢ-sbꜢ-ḫꜤi͗-n-ni͗wt",
          translation: "High Priest of Amun, The star who has appeared in Niut (Thebes)",
        },
      ],
    },
  },

  amenemope: {
    prenomen: {
      codes: ["N5", "C10F", "C12A", "U21", "N3"],
      mdc: "ra-C10F\\-C12A-stp:N3",
      transliteration: "wsr-mꜢꜤt-rꜤ-stp-n-i͗mn",
      translation: "The strong one belonging to the Maat of Ra, chosen by Amun",
      sources: [
        { text: "Mariette, Monuments divers recueillis en Égypte et en Nubie, II, plate 102b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 180-181, 4:T1" },
      ],
      variants: [
        {
          codes: ["N5", "F12", "H6", "M17", "Y5", "N35", "U21", "N35"],
          mdc: "ra-wsr-Sw-i-mn:n-stp:n",
          transliteration: "wsr-mꜢꜤt-rꜤ stp.n-i͗mn",
          translation: "The strong one belonging to the Maat of Ra, chosen by Amun",
        },
        {
          codes: ["N5", "C10F", "C12", "G17", "O45"],
          mdc: "ra-C10F\\-C12-m&O45",
          transliteration: "wsr-mꜢꜤt-rꜤ i͗mn-m-i͗pꜢt",
          translation: "The strong one belonging to the Maat of Ra, Amun is in Ipet (Luxor)",
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "Aa15", "O45"],
      mdc: "i-mn:n-Aa15:O45",
      transliteration: "i͗mn-m-i͗pꜢt",
      translation: "Amun is in Ipet (Luxor)",
      sources: [
        { text: "Daressy, Contribution à l'étude de la XXIe dynastie égyptienne in \"Revue Archeologique\", 1896/01 (SER3,T28), p. 78" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 180-181, 4:E1" },
      ],
      variants: [
        {
          codes: ["C12A", "C12A", "N36", "Aa15", "O45"],
          mdc: "C12A\\-C12A-N36:Aa15-O45",
          transliteration: "i͗mn-m-i͗pꜢt mri͗-i͗mn",
          translation: "Amun is in Ipet (Luxor), beloved of Amun",
          sources: [
            { text: "Mariette, Monuments divers recueillis en Égypte et en Nubie, II, plate 102b" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 180-181, 4:E6" },
          ],
        },
        {
          codes: ["C12", "C12", "N36", "G17", "O45"],
          mdc: "C12\\-C12-N36:m*O45",
          transliteration: "i͗mn-m-i͗pꜢt mri͗-i͗mn",
          translation: "Amun is in Ipet (Luxor), beloved of Amun",
          sources: [
            { text: "Aegyptische Inschriften aus den Königlichen Museen zu Berlin, II, p. 212 (7973)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 180-181, 4:E2" },
          ],
        },
        {
          codes: ["C12A", "C12A", "N36", "S3", "M17", "Q3", "X1"],
          mdc: "C12A\\-C12A-N36:S3-i-p:t",
          transliteration: "i͗mn-m-i͗pꜢt mri͗-i͗mn",
          translation: "Amun is in Ipet (Luxor), beloved of Amun",
          sources: [
            { text: "Montet, La Nécropole royale de Tanis (1947), Vol. 1, 66, fig. 1" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 180-181, 4:E3" },
          ],
        },
        {
          codes: ["C12A", "C12A", "S3", "N36", "M17", "Q3", "O45"],
          mdc: "C12A\\-C12A-S3:N36-i-p:O45",
          transliteration: "i͗mn-m-i͗pꜢt mri͗-i͗mn",
          translation: "Amun is in Ipet (Luxor), beloved of Amun",
          sources: [
            { text: "Montet, La Nécropole royale de Tanis (1951), Vol. 2, 174, fig. 64" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 180-181, 4:E4" },
          ],
        },
        {
          codes: ["C12A", "C12A", "U6", "G17", "O45"],
          mdc: "C12A\\-C12A-mr-m&O45",
          transliteration: "i͗mn-m-i͗pꜢt mri͗-i͗mn",
          translation: "Amun is in Ipet (Luxor), beloved of Amun",
          sources: [
            { text: "Montet, La Nécropole royale de Tanis (1951), Vol. 2, pl. 135" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 180-181, 4:E5" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "U7", "M17", "Y5", "N35", "Aa15", "O45"],
          mdc: "i-mn:n:U7-i-mn:n-Aa15:O45",
          transliteration: "i͗mn-m-i͗pꜢt mri͗-i͗mn",
          translation: "Amun is in Ipet (Luxor), beloved of Amun",
          sources: [
            { text: "ASAE , 8, 33 (124)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 180-181, 4:E7" },
          ],
        },
        {
          codes: ["N6B", "R8", "U36", "D1", "Q3", "N35", "M17", "Y5", "N35", "N5", "Z1", "M23", "X1", "Z2", "R8", "C12A", "C12A", "N36", "G17", "O45"],
          mdc: "N6B-nTr-U36-D1:p-n-i-mn:n:ra*Z1-sw-t:Z2-nTr-C12A\\-C12A-N36:m*O45",
          transliteration: "nsw-bity ḥm-nṯr tpy n imn-rꜤ nsw nṯrw",
          translation: "Dual King and High Priest of Amun-Ra, king of the gods",
        },
      ],
    },
  },

  osochor: {
    prenomen: {
      codes: ["N5", "O29v", "L1", "U21", "N35", "N5"],
      mdc: "ra-O29v-xpr-stp&n&ra",
      transliteration: "ꜤꜢ-ḫpr-rꜤ stp.n-rꜤ",
      translation: "The great one is a manifestation of Ra, chosen by Ra",
    },
    nomen: {
      codes: ["V4", "Aa18", "M17", "D21", "V31", "N35"],
      mdc: "wA-Aa18-i-r:k:n",
      transliteration: "wsrkn",
      translation: "Osorkon",
    },
  },

  siamun: {
    horus: {
      codes: ["E1", "D40", "C10A", "U6", "H8", "Z1", "S3", "M17", "Y5", "N35", "O1", "D21", "D54", "G17", "V28", "D36", "F51B", "F51B", "F51B", "I9"],
      mdc: "E1:D40-C10A-mr-H8:Z1-//-S3-i-mn:n-pr:r:D54-m-H-a:F51B*F51B*F51B:f",
      transliteration: "kꜢ-nḫt mri͗-mꜢꜤt sꜢ mri͗ n i͗mn pr m ḫꜤw.f",
      translation: "The strong bull, beloved of Maat, the beloved son of Amun, who issued from his limbs",
      sources: [
        { text: "Petrie, Tanis, II, plate VIII (146)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 180-181, 6:H1" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "C10A", "U6"],
          mdc: "E1:D40-C10A-mr",
          transliteration: "kꜢ-nḫt mri͗-mꜢꜤt",
          translation: "The strong bull, beloved of Maat",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "R8", "L1", "M17", "Y5", "N35", "U19", "N35"],
      mdc: "ra-nTr-xpr-i-mn:n-U19:n",
      transliteration: "nṯri͗-ḫpr-rꜤ stp.n-i͗mn",
      translation: "The divine one is a manifestation of Ra, chosen by Amun",
      sources: [
        { text: "Petrie, The palace of Apries (Memphis II), plate 24" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 180-181, 6:T1" },
      ],
      variants: [
        {
          codes: ["N5", "R8", "L1", "M17", "Y5", "N35", "U7"],
          mdc: "ra-nTr-xpr-i-mn:n:U7",
          transliteration: "nṯri͗-ḫpr-rꜤ mri͗-i͗mn",
          translation: "The divine one is a manifestation of Ra, beloved of Amun",
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "G39", "Z1"],
      mdc: "i-mn:n-zA&Z1",
      transliteration: "zꜢ-i͗mn",
      translation: "Son of Amun",
      sources: [
        { text: "Kruchten, Les annales des pretres de Karnak, OLA 32 (1989): pl. 2 (3b)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 180-181, 6:E2" },
      ],
      variants: [
        {
          codes: ["C12A", "C12A", "N36", "H8", "Z1"],
          mdc: "C12A\\-C12A-N36:H8*Z1",
          transliteration: "zꜢ-i͗mn mri͗-i͗mn",
          translation: "Son of Amun, beloved of Amun",
        },
      ],
    },
  },

  "psusennes-ii": {
    prenomen: {
      codes: ["N5", "D17", "L1", "Z3", "U21", "N35", "N5"],
      mdc: "ra:D17-xpr-Z3-stp&n&ra",
      transliteration: "ti͗t-ḫprw-rꜤ stp.n-rꜤ",
      translation: "The (very) image of the manifestations of Ra, chosen by Ra",
      sources: [
        { text: "Amélineau, Les nouvelles fouilles d'Abydos, III-1, 146" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 180-181, 7:T1" },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "N36", "G40", "N14", "N28", "N35", "O49"],
      mdc: "i-mn:n:N36-G40-N14-xa:n:O49",
      transliteration: "pꜢ-sbꜢ-ḫꜤi͗-n-nwi͗t mri͗-i͗mn",
      translation: "The star who has appeared in Niut (Thebes), beloved of Amun",
      sources: [
        { text: "Mariette-Bey, Karnak étude topographique et archéologique, Planches, plate 41" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 180-181, 7:E1" },
      ],
      variants: [
        {
          codes: ["G5", "G40", "N14", "N28", "N35", "O49"],
          mdc: "G5-G40-N14*xa:n-O49",
          transliteration: "ḥr-pꜢ-sbꜢ-ḫꜤi͗-n-ni͗wt",
          translation: "The star who has appeared in Niut (Thebes)",
          sources: [
            { text: "Petrie, A History of Egypt, III, p. 226, fig. 93" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 180-181, 7:E4" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "N36", "G5", "Q3", "N14", "X1", "N28", "O49"],
          mdc: "i-mn:n:N36-G5&p-dwA:t-xa:O49",
          transliteration: "ḥr-pꜢ-sbꜢ-ḫꜤi͗-n-ni͗wt-mri͗-i͗mn",
          translation: "Horus, the star who has appeared in Niut (Thebes), beloved of Amun",
          sources: [
            { text: "Lepsius, Auswahl der wichstigen urkunden des aegyptischen..., 15a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 180-181, 7:E2" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "N36", "G5", "Q3", "N14", "N28", "O49"],
          mdc: "i-mn:n:N36-G5&p-dwA-xa:O49",
          transliteration: "ḥr-pꜢ-sbꜢ-ḫꜤi͗-n-ni͗wt-mri͗-i͗mn",
          translation: "Horus, the star who has appeared in Niut (Thebes), beloved of Amun",
        },
      ],
    },
  },

  "shoshenq-i": {
    horus: {
      codes: ["E1", "D40", "N5", "Z1", "S29", "N28", "D36", "I9", "Aa15", "M23", "D21", "R26", "N17", "N17"],
      mdc: "E1:D40-ra:Z1-mr\\-s-xa:a:f:M-sw-r:R26-N17:N17",
      transliteration: "kꜢ nḫt mry rꜤ sḫꜤ.f m nsw r smꜢ tꜢwy",
      translation: "Strong bull, beloved of Ra, whom the latter caused to appear as king in order to unite the Two Lands",
      sources: [
        { text: "Caminos, Gebel Es-Silsilah No. 100, JEA 38 (1952): pl. 11" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 184-185, 1:H1" },
      ],
    },
    nebty: {
      codes: ["N28", "D36", "Aa15", "S6", "W19", "M17", "G5", "H8", "Z1", "Q1", "X1", "H8", "S29", "R4", "X1", "Q3", "X1", "Z2", "R8", "G17", "H6"],
      mdc: "xa:a:Aa15-S6-mi-i-G5-H8:Z1-Q1-t:H8-s-Htp:t*p-t:Z2-nTr-m-Sw",
      transliteration: "ḫꜤ m sḫmty mi ḥr sꜢ Ꜣst sḥtp nṯrw m mꜢꜤt",
      translation: "Who has appeared in the Double Crown like Horus, the son of Isis, and pacified the gods with Maat",
      sources: [
        { text: "Caminos, Gebel Es-Silsilah No. 100, JEA 38 (1952): pl. 12" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 184-185, 1:N1" },
      ],
    },
    golden: {
      codes: ["S42", "F9", "F9", "V74", "T10", "Z1", "Z1", "Z1", "G36", "D21", "N35", "M3", "Aa1", "X1", "Z2", "D40", "N17", "N17", "N17", "V30", "Z7", "Z2"],
      mdc: "sxm-F9:F9-V74-T10:3:3*3-wr:r:n-M3:x*t:(Z2)^^^D40-N17:N17:N17:nb:W*Z2",
      transliteration: "sḫm-pḥty ḥwi pḏwt 9 wr-nḫtw m tꜢw nbw",
      translation: "Powerful of might, who has struck down the Nine Bows, great of victories in all lands",
      sources: [
        { text: "Caminos, Gebel Es-Silsilah No. 100, JEA 38 (1952): pl. 12" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 184-185, 1:G1" },
      ],
    },
    prenomen: {
      codes: ["N5", "S1", "L1", "U21", "N35", "N5"],
      mdc: "ra-HDt-xpr-stp&n&ra",
      transliteration: "ḥḏ ḫpr rꜤ stp n rꜤ",
      translation: "The bright one is a manifestation of Ra, chosen by Ra",
      sources: [
        { text: "Passim" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 184-185, 1:T1" },
      ],
      variants: [
        {
          codes: ["N5", "S1", "L1", "M17", "Y5", "N35", "U21"],
          mdc: "ra-HDt-xpr-i-mn:n:stp",
          transliteration: "ḥḏ ḫpr rꜤ stp n imn",
          translation: "The bright one is a manifestation of Ra, chosen by Amun",
          sources: [
            { text: "Statuette (Cairo Museum, CG 42213, JE 36675)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 184-185, 1:T2" },
          ],
        },
        {
          codes: ["D36", "S1", "L1", "M17", "Y5", "U21", "N35"],
          mdc: "a-HDt-xpr-i-mn:stp:n",
          transliteration: "ḥḏ ḫpr rꜤ stp n imn",
          translation: "The bright one is a manifestation of Ra, chosen by Amun",
          sources: [
            { text: "Seated Isis statuette, (Cairo Museum, CG 38901, JE 32209)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 184-185, 1:T3" },
          ],
        },
        {
          codes: ["N5", "S1", "L1", "Q3", "X1", "V28", "U21", "N35"],
          mdc: "ra-HDt-xpr-p:t-H-stp:n",
          transliteration: "ḥḏ ḫpr rꜤ stp n ptḥ",
          translation: "The bright one is a manifestation of Ra, chosen by Ptah",
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "U7", "M8A", "M8A", "N35", "N29"],
      mdc: "i-mn:n:U7-M8A-M8A-n:q",
      transliteration: "ššnḳ mry imn",
      translation: "Shoshenq, beloved of Amun",
      sources: [
        { text: "Statuette (Cairo Museum, CG 42213, JE 36675)" },
        { text: "Daressy, Statues de divinités (1906), 225" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 184-185, 1:E1" },
      ],
      variants: [
        {
          codes: ["M8A", "M8A", "N35", "N29"],
          mdc: "M8A-M8A-n:q",
          transliteration: "ššnḳ",
          translation: "Shoshenq",
          sources: [
            { text: "Proceedings of the Society of Biblical Archaeology 11, 257" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 184-185, 1:E3" },
          ],
        },
        {
          codes: ["M8A", "N29", "M8A", "N17"],
          mdc: "M8A-q-M8A-N17",
          transliteration: "ššnḳ",
          translation: "Shoshenq",
          sources: [
            { text: "Posener, Malinine, Vercoutter, Catalogue des stèles de Sérapéum de Memphis (1968), No. 31" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 184-185, 1:E4" },
          ],
        },
        {
          codes: ["M17", "Y5", "H8", "Q1", "X1", "M8A", "M8A", "N29"],
          mdc: "i-mn://-H8-Q1:t-M8A:M8A-q",
          transliteration: "ššnḳ sꜢ Ꜣst mry imn",
          translation: "Shoshenq, the son of Isis, beloved of Amun",
        },
      ],
    },
  },

  "osorkon-i": {
    horus: {
      codes: ["E1", "D40", "N5", "U6", "D21", "X1", "D36", "N35", "O34", "A304A", "D2", "X1", "W11", "O1", "I9", "D21", "U18", "M127", "M13"],
      mdc: "E1:D40-ra:mr-r:t:a:n:z-A304A-D2:t-g:O1\\70-f:r:U18-M127-wAD",
      transliteration: "kꜢ-nḫt mri͗-rꜤ rdi͗.n-s(w)-i͗tm-ḥr-nst.f-r-grg-tꜢwi͗",
      translation: "The strong bull beloved of Ra, whom",
      sources: [
        { text: "Naville, Bubastis, plate XLI (D)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 184-185, 2:H1" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "N5", "U6", "G7", "D21", "D36", "X1", "N35", "S29", "A304A", "D2", "Z1", "W11", "X1", "Z4", "I9", "D21", "U17", "Y1", "N17", "N17", "N23", "N23"],
          mdc: "E1:D40-ra:mr-G7-r:a-t:n-s-A304A-D2:Z1-g:t*Z4-f:r-U17:Y1-N17:N17:N23*N23",
          transliteration: "kꜢ-nḫt mri͗-rꜤ rdi͗.n-s(w)-i͗tm-ḥr-nst.f-r-grg-tꜢwi͗",
          translation: "The strong bull beloved of Ra, whom Atum put on his throne in order to establish the Two Lands",
        },
      ],
    },
    nebty: {
      codes: ["S29", "O29v", "D36", "L1", "D21", "Z7", "A53", "G36", "D21", "U16", "Y1", "Z2"],
      mdc: "s-aAv:a-xpr:r-W-A53-wr:r-U16-Y1:Z2",
      transliteration: "sꜤꜢ-ḫprw wr-bi͗Ꜣwt",
      translation: "The one who has magnified (his) manifestations is one great of marvels",
    },
    golden: {
      codes: ["A24", "F23", "D46", "D21", "A24", "T10", "X1", "Z1", "Z1", "Z1", "Z1", "T14", "A1", "A40", "Z2"],
      mdc: "A24-xpS-d:r-A24-pD:t*1-3:3:3-T14-A1*A40:Z2",
      transliteration: "nḫt ḫpš dr-pḏt-9",
      translation: "The strong-armed one who has repelled the Nine Bows, the sovereign who has seized all lands",
    },
    prenomen: {
      codes: ["N5", "S42", "L1"],
      mdc: "ra-sxm-xpr",
      transliteration: "sḫm-ḫpr-rꜤ",
      translation: "The powerful one is a manifestation of Ra",
      sources: [
        { text: "A catalogue of the Egyptian antiquities in the possession of F.G. Hilton Price, no. 1740" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 184-185, 2:T2" },
      ],
      variants: [
        {
          codes: ["N5", "S42", "L1", "U21", "N35", "N5"],
          mdc: "ra-sxm-xpr-stp&n&ra",
          transliteration: "sḫm-ḫpr-rꜤ stp.n-rꜤ",
          translation: "The powerful one is a manifestation of Ra, chosen by Ra",
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "N36", "V4", "Aa18", "D21", "V31", "N35"],
      mdc: "i-mn:n:N36-wA-Aa18-r:k:n",
      transliteration: "wsrkn mri͗-i͗mn",
      translation: "Osorkon, beloved of Amun",
      sources: [
        { text: "The Epigraphic Survey, The Bubastite portal, (OIP 74), plate 14" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 184-185, 2:E1" },
      ],
      variants: [
        {
          codes: ["M17", "Y5", "N35", "N36", "V4", "Aa18", "M17", "D21", "V31", "N35"],
          mdc: "i-mn:n:N36-wA-Aa18-i-r:k:n",
          transliteration: "wsr-kn mri͗-i͗mn",
          translation: "Osorkon, beloved of Amun",
          sources: [
            { text: "Naville, Bubastis, plate XLI (D)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 184-185, 2:E2" },
          ],
        },
        {
          codes: ["Aa18", "D21", "V31", "N17"],
          mdc: "wA\\-Aa18-r:k:N17",
          transliteration: "wsrkn",
          translation: "Osorkon",
        },
      ],
    },
  },

  "shoshenq-ii": {
    prenomen: {
      codes: ["N5", "S38", "L1", "U21", "N35", "N5"],
      mdc: "ra-HqA-xpr-stp&n&ra",
      transliteration: "ḥḳꜢ-ḫpr-rꜤ stp-n-rꜤ",
      translation: "The ruler is the (very) manifestation of Ra, chosen by Ra",
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "N36", "M8", "M8"],
      mdc: "i-mn:n:N36-M8:M8",
      transliteration: "šš(nḳ) mri͗-i͗mn",
      translation: "Shoshenq, beloved of Amun",
    },
  },

  "takelot-i": {
    prenomen: {
      codes: ["N5", "S1", "L1", "U21", "N35", "N5"],
      mdc: "ra-S1-xpr-stp&n&ra",
      transliteration: "ḥḏ-ḫpr-rꜤ stp-n-rꜤ",
      translation: "The radiant one is the (very) manifestation or Ra, chosen by Ra",
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "N36", "U33", "V31", "D21", "N36", "U33"],
      mdc: "i-mn:n:N36-U33-k:r:N36-U33",
      transliteration: "tklt mri͗-i͗mn",
      translation: "Takelot, beloved of Amun",
      sources: [
        { text: "Daressy, Inscriptions inédites de la XXIe Dynastie, RecTrav 18 (1896): 52 (IV)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 186-187, 3:E1" },
      ],
      variants: [
        {
          codes: ["U33", "V31", "D21", "N17", "V13"],
          mdc: "U33\\-k:r-N17:T",
          transliteration: "tklt",
          translation: "Takelot",
        },
      ],
    },
  },

  "osorkon-ii": {
    horus: {
      codes: ["E1", "D40", "C10", "U6"],
      mdc: "E1:D40-C10-mr",
      transliteration: "kꜢ nḫt mry mꜢꜤt",
      translation: "Strong bull, beloved of Maat",
      sources: [
        { text: "Kneeling statue (Cairo Museum, CG 42252)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 186-187, 5:H1" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "C10A", "U6", "S29", "N28", "D36", "Y1", "M23", "G43", "N5", "Z1", "A40", "D21", "M23", "N17", "N17", "N21", "N21"],
          mdc: "E1:D40-C10A-mr-s-xa:a:Y1-sw-w-ra:Z1-A40-r:sw*(N17:N17:N21*N21)",
          transliteration: "kꜢ nḫt mry mꜢꜤt sḫꜤ sw rꜤ r nsw tꜢwy",
          translation: "Strong bull, beloved of Maat, whom Re caused to appear to be king of the Two Lands",
          sources: [
            { text: "Vernus, Inscriptions de la Troisième Période Intermédiaire, BIFAO 75 (1975): 20, pl. 2" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 186-187, 5:H3" },
          ],
        },
        {
          codes: ["E1", "D40", "H6", "U6", "S29", "N28", "D36", "O34", "N5", "Z1", "A41", "D21", "M23", "A40C", "M13", "M127"],
          mdc: "E1:D40-H6-mr-s-xa:a:z-(ra:Z1)*A41:r-sw-A40C-wAD-M127",
          transliteration: "kꜢ nḫt mry mꜢꜤt sḫꜤ sw rꜤ r nsw tꜢwy",
          translation: "Strong bull, beloved of Maat, whom Re caused to appear to be kung if the Two Lands",
          sources: [
            { text: "Naos of Bastet, (Cairo Museum CG 70006)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 186-187, 5:H4" },
          ],
        },
        {
          codes: ["G17", "M23", "A40", "S29", "D21", "Q3", "D46", "M44", "M127", "M13"],
          mdc: "//-m-sw-A40-s-r:p:d-M44-M127-wAD",
          transliteration: "... m nsw r spd tꜢwy",
          translation: "... as king in order to restore the Two Lands",
          sources: [
            { text: "Naville, Ahnas el Medineh (1894), pl. 4 (C1)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 186-187, 5:H5" },
          ],
        },
        {
          codes: ["E1", "D40", "N28", "G17", "R19"],
          mdc: "E1:D40-xa-m-R19",
          transliteration: "kꜢ nḫt ḫꜤ m wꜢst",
          translation: "The strong bull who has appeared in Thebes",
        },
      ],
    },
    nebty: {
      codes: ["F36", "Q3", "N37", "Z9", "N17", "N33A", "W19", "H8", "Z1", "Q1", "X1", "S23", "D46", "I9", "S42", "S6", "Aa15", "R4"],
      mdc: "zmA-p:N37:Z9-N17:N33A-mi-H8:Z1-Q1:t-S23-d:f-sxm-S6-Aa15:Htp",
      transliteration: "smꜢ psšty mi sꜢ Ꜣst dmḏ.f sḫmty m ḥtp",
      translation: "The one who has united the Two Lands like the son of Isis he has assembled",
      sources: [
        { text: "Kneeling statue (Cairo Museum, CG 42252)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 186-187, 5:N1" },
      ],
      variants: [
        {
          codes: ["F36", "Q3", "N37", "Z9", "Z9", "W19", "H8", "Z1", "Q1", "O34", "R4", "X1", "Q3", "X1", "Z1", "Z1", "Z1", "R8"],
          mdc: "zmA-p:N37:Z9*Z9-mi-H8-Z1*Q1-z:Htp:t*p-(t:1*1*1)-nTr-//",
          transliteration: "smꜢ psšty mi sꜢ Ꜣst s ḥtp nṯrw...",
          translation: "The one who has united the Two Lands like the son of Isis...",
          sources: [
            { text: "Jaquet-Gordon, The inscriptions on the Philadelphia-Cairo statue of Osorkon II, JEA 46: 13" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 186-187, 5:N2" },
          ],
        },
        {
          codes: ["F36", "Q3", "N37", "X1", "X1", "Z9", "Z2", "W19", "G39", "Z1", "Q1", "X1", "H8", "S23", "D46", "N35", "I9", "S6", "G17", "Y1", "D46", "O4", "N35"],
          mdc: "zmA-p:N37-t*t:Z9:Z2-mi-zA&Z1-Q1-t:H8-S23:d-n:f-S6-m-Y1:d-h:n-//",
          transliteration: "smꜢ psšty mi sꜢ Ꜣst dmḏ.n.f sḫmty m ḥtp dhn...",
          translation: "The one who has united the Two Lands like the son of Isis has assembled the two crowns in peace, whom [god X] appointed...",
          sources: [
            { text: "Vernus, Inscriptions de la Troisième Période Intermédiaire, BIFAO 75 (1975): 20, pl. 2" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 186-187, 5:N3" },
          ],
        },
        {
          codes: ["F36", "Q3", "N37", "Z9", "Z9", "W19", "H8", "Z1", "Q1", "X1", "H8", "S29", "R4", "X1", "Q3", "Z1", "R8", "Z1", "R8", "Z1", "R8", "Aa15", "D4", "Aa11"],
          mdc: "zmA-p:N37:Z9*Z9-mi-H8:Z1-Q1-t:H8-s-R4:t*p-Z1&nTr-Z1&nTr-Z1&nTr-Aa15:D4:Aa11",
          transliteration: "smꜢ psšty mi sꜢ Ꜣst sḥtp nṯrw m irt mꜢꜤt",
          translation: "The one who has united the Two Lands like the son of Isis has satisfied the gods by performing Maat",
          sources: [
            { text: "Naos of Bastet, (Cairo Museum CG 70006)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 186-187, 5:N4" },
          ],
        },
        {
          codes: ["F36", "G17", "Y1", "Q3", "N37", "X1", "Z4", "S1", "S3", "W19", "Q1", "H8", "Z1"],
          mdc: "zmA-m:Y1-p:N37:t*Z4-S1-S3-mi-Q1-H8:Z1",
          transliteration: "smꜢ psšty sḫmty mi Ꜣst",
          translation: "The one who has united the Two Lands like the son of Isis",
          sources: [
            { text: "Naville, Ahnas el Medineh (1894), pl. 4 (C1)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 186-187, 5:N5" },
          ],
        },
        {
          codes: ["F36", "Z9", "N37", "Z2", "W19", "H8", "Z1", "Q1", "X1", "S23", "D46", "N35", "I9", "S42", "S6", "Aa15", "R4"],
          mdc: "zmA-Z9:N37:Z2-mi-H8:Z1-Q1:t-S23:d-n:f-sxm-S6-Aa15:R4",
          transliteration: "smꜢ psšty mi sꜢ Ꜣst dmḏ.n.f sḫmty m ḥtp",
          translation: "The one who has united the Two Lands like the son of Isis has assembled the two crowns in peace",
        },
      ],
    },
    golden: {
      codes: ["G8", "G36", "F9", "F9", "V28", "A24", "Y5", "N35", "X1", "X1", "N25", "Z2", "F12", "S29", "D21", "D36", "I9", "F40", "Z7", "Y1", "F7", "Z2"],
      mdc: "G8-wr:F9*F9#12-H-A24-mn:n:t*t-N25:Z2-wsr-s-r:a:f-Aw&W:Y1-F7:Z2",
      transliteration: "wr pḥty ḥwi mnṯyw wsr ...",
      translation: "The mighty great one who has struck down the bedouin, rich...",
      sources: [
        { text: "Vernus, Inscriptions de la Troisième Période Intermédiaire, BIFAO 75 (1975): 20, pl. 2" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 186-187, 5:G1" },
      ],
      variants: [
        {
          codes: ["G36", "D21", "F9", "F9", "V28", "A24", "Y5", "N35", "X1", "G1", "T14", "N33", "N33", "N33"],
          mdc: "wr:r-F9:F9-H-A24-mn:n-t&A&2-T14-N33:N33:N33",
          transliteration: "wr-pḥty ḏr sṯtyw wsr-fꜢw m tꜢw nbw",
          translation: "The great of strength one who has repelled the Setjetiu-Asiatics is rich in splendor in all lands",
          sources: [
            { text: "Alabaster statue (Cairo Museum, CG 42208, JE 36697)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 186-187, 5:G2" },
          ],
        },
        {
          codes: ["S42", "F9", "F9", "V28", "A24", "Aa1", "I9", "X1", "A14", "I9", "F12", "F40", "Z7", "I9", "F7", "Z2"],
          mdc: "sxm-F9:F9-H-A24-x:f:t-A14:f-wsr-F40&W:f-F7:Z2#34",
          transliteration: "sḫm pḥty ḥwi ḫftyw.f wsr-fꜢw",
          translation: "The mighty powerful one who has struck down his enemies is rich in splendor",
          sources: [
            { text: "Jaquet-Gordon, The inscriptions on the Philadelphia-Cairo statue of Osorkon II, JEA 46: 13" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 186-187, 5:G3" },
          ],
        },
        {
          codes: ["Z3", "D46", "D21", "D40", "T10", "Z2", "T14", "N25", "Z2", "M17", "U33", "M17", "M17", "A21", "S42", "Aa1", "Aa15", "Y1", "N17", "N17", "V30", "Z7", "Z2"],
          mdc: "//-Z3-d:r:D40-T10:Z2-T14-N25:Z2-i-ti-i-i-A21-sxm-x:Aa15:Y1-N17:N17:nb:W*Z2",
          transliteration: "... dr pḏwt ity sḫm m tꜢw nbw",
          translation: "... who has repelled the (foreign) bowmen, the mighty sovereign in all lands",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "F12", "H6", "M17", "Y5", "N35", "U21", "N35"],
      mdc: "ra-wsr-Sw-i-mn:n-stp:n",
      transliteration: "wsr mꜢꜤt rꜤ stp n imn",
      translation: "The strong one belonging to the Maat of Ra, chosen by Amun",
      sources: [
        { text: "Kneeling statue (Cairo Museum, CG 42252)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 186-187, 5:T1" },
      ],
      variants: [
        {
          codes: ["N5", "F12", "H6", "U21", "N35", "N5"],
          mdc: "ra-wsr-Sw-stp&n&ra",
          transliteration: "wsr mꜢꜤt rꜤ stp n rꜤ",
          translation: "The strong one belonging to the Maat of Ra, chosen by Ra",
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "N36", "W2", "H8", "Z1", "V4", "Aa18", "M17", "D21", "V31", "N35"],
      mdc: "i-mn:n:N36-W2-H8:Z1-wA:Aa18-i-r:k:n",
      transliteration: "wsrkn sꜢ bꜢstt mry imn",
      translation: "Osorkon, the son of Bastet, beloved of Amun",
      sources: [
        { text: "Naville, Bubastis (1891), pl. 41 (E-F)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 188-189, 5:E1" },
      ],
      variants: [
        {
          codes: ["C2A", "C12A", "N36", "V4", "Aa18", "M17", "D21", "V31", "N35"],
          mdc: "C2A\\-C12A-N36:wA*Aa18-i-r:k:n",
          transliteration: "wsrkn sꜢ bꜢstt mry imn rꜤ",
          translation: "Osorkon, the son of Bastet, beloved of Amun-Ra",
          sources: [
            { text: "Daressy, Notes et remarques, RecTrav 23 (1901): 132" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 188-189, 5:E3" },
          ],
        },
        {
          codes: ["V4", "Aa18", "M17", "D21", "V31", "N35"],
          mdc: "wA-Aa18-i-r:k:n",
          transliteration: "wsrkn",
          translation: "Osorkon",
        },
      ],
    },
  },

  "shoshenq-iii": {
    horus: {
      codes: ["E1", "D40", "F31", "S29", "G43", "X1", "A53", "C2B"],
      mdc: "E1:D40-ms-s-w:t-A53-C2B",
      transliteration: "kꜢ-nḫt msti͗w-rꜤ",
      translation: "The strong bull, the offspring of Ra",
      sources: [
        { text: "Montet, La Nécropole royale de Tanis (1960), Vol. 3, pls. 29-30" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 188-189, 6:H1" },
      ],
      variants: [
        {
          codes: ["E1", "D40", "F31", "Z7", "X1", "A53", "N35", "N5"],
          mdc: "E1:D40-ms-s\\-W:t-A53-n:ra",
          transliteration: "kꜢ-nḫt msti͗w-n-rꜤ",
          translation: "The strong bull, the offspring of Ra",
          sources: [
            { text: "Montet, La Nécropole royale de Tanis (1960), Vol. 3, pls. 29-30" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 188-189, 6:H2" },
          ],
        },
        {
          codes: ["E1", "D40", "N5", "Z1", "N36"],
          mdc: "E1:D40-ra*Z1:N36",
          transliteration: "kꜢ-nḫt mri͗-rꜤ",
          translation: "The strong bull, beloved of Ra",
          sources: [
            { text: "Block JE 38272 from Mendes" },
            { text: "Daressy, Le nom d'Horus di roi Chéchanq III, ASAE 13 (1914): 86" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 188-189, 6:H3" },
          ],
        },
        {
          codes: ["E1", "D40", "C2", "U6", "S29", "N28", "D36", "Y1"],
          mdc: "E1:D40-C2-mr-s-xa:a:Y1-//",
          transliteration: "kꜢ-nḫt mri͗-rꜤ sḫꜤ...",
          translation: "The strong bull, beloved of Ra, whom [Ra?] caused to appear [as king?]",
          sources: [
            { text: "Daressy, Rapport sur Kom el-Hisn, ASAE 4: 284-85" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 188-189, 6:H4" },
          ],
        },
        {
          codes: ["E1", "D40", "U6", "D21", "H6", "X1", "H8", "G7", "Z7"],
          mdc: "E1:D40-mr:r-Sw-t:H8-G7-W",
          transliteration: "kꜤ nḫh mry mꜢꜤt",
          translation: "The strong bull, beloved of Maat",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "F12", "C10A", "U21", "N35", "N5"],
      mdc: "ra-wsr-C10A-stp&n&ra",
      transliteration: "wsr-mꜢꜤt-rꜤ stp.n-rꜤ",
      translation: "The justice of Ra is powerful, chosen by Ra",
      sources: [
        { text: "Block JE 38272 from Mendes" },
        { text: "Daressy, Le nom d'Horus di roi Chéchanq III, ASAE 13 (1914): 86" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 188-189, 6:T1" },
      ],
      variants: [
        {
          codes: ["N5", "F12", "H6", "U21", "N35", "N5"],
          mdc: "ra-wsr-Sw-stp&n&ra",
          transliteration: "rꜤ-wsr-šw-stp&n&rꜤ",
          translation: "The justice of Ra is powerful, chosen by Ra",
          sources: [
            { text: "The Epigraphic Survey, The Bubastite Portal (1954), pl. 16-17" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 188-189, 6:T2" },
          ],
        },
        {
          codes: ["N5", "F12", "H6", "U21", "N35", "N5"],
          mdc: "ra-wsr-Sw-stp&n&ra",
          transliteration: "rꜤ-wsr-šw-stp&n&rꜤ",
          translation: "The justice of Ra is powerful, chosen by Ra",
          sources: [
            { text: "Jansen-Winkeln, Inschriften der Spätzeit 2 (2007), 202 no. 22.33" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 188-189, 6:T4" },
          ],
        },
        {
          codes: ["N5", "F12", "H6", "M17", "Y5", "N35", "U21", "N35"],
          mdc: "ra-wsr-Sw-i-mn:n-stp:n",
          transliteration: "wsr-mꜢꜤt-rꜤ stp.n-i͗mn",
          translation: "The justice of Ra is powerful, chosen by Amun",
          sources: [
            { text: "Posener, Malinine, Vercoutter, Catalogue des steles du Serapeum de Memphis, no. 21" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 188-189, 6:T6" },
          ],
        },
        {
          codes: ["N5", "F12", "H6", "M17", "Y5", "N35", "U21"],
          mdc: "ra-wsr-Sw-i-mn:n:stp",
          transliteration: "wsr-mꜢꜤt-rꜤ stp.n-i͗mn",
          translation: "The justice of Ra is powerful, chosen by Amun",
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "U7", "M8A", "M8A", "N35", "N29"],
      mdc: "i-mn:n:U7-M8A-M8A-n:q",
      transliteration: "ššnḳ mri͗-i͗mn",
      translation: "Shoshenk, beloved of Amun",
      sources: [
        { text: "Beckerath, The Nile Level Records at Karnak and their Importance, JARCE 5 (1966): 51 (23)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 188-189, 6:E1" },
      ],
      variants: [
        {
          codes: ["M17", "Y5", "N35", "U7", "M8A", "M8A", "N29", "N35", "S38", "R8", "O28"],
          mdc: "i-mn:n:U7-M8A-M8A-q:n-HqA-nTr-iwn",
          transliteration: "ššnḳ mri͗-i͗mn nṯr-ḥḳꜢ-i͗wnw",
          translation: "Shoshenk, beloved of Amun, God and ruler of Heliopolis",
          sources: [
            { text: "Posener, Malinine, Vercoutter, Catalogue des steles du Serapeum de Memphis, no. 22" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 188-189, 6:E2" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "U7", "M8A", "M8A", "N35", "N29", "O28", "R8", "S38"],
          mdc: "i-mn:n:U7-M8A-M8A-n:q-iwn-nTr-HqA",
          transliteration: "ššnḳ mri͗-i͗mn nṯr-ḥḳꜢ-i͗wnw",
          translation: "Shoshenk, beloved of Amun, God and ruler of Heliopolis",
          sources: [
            { text: "Posener, Malinine, Vercoutter, Catalogue des steles du Serapeum de Memphis, no. 24" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 188-189, 6:E3" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "U7", "M8A", "M8A", "N29", "H8", "Z1", "W1"],
          mdc: "i-mn:n:U7-M8A-M8A-q-H8:Z1-W1",
          transliteration: "ššnḳ zꜢ-bꜢstt mri͗-i͗mn",
          translation: "Shoshenk, son of Bastet, beloved of Amun",
          sources: [
            { text: "Beckerath, The Nile Level Records at Karnak and their Importance, JARCE 5 (1966): 51 (22)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 188-189, 6:E4" },
          ],
        },
        {
          codes: ["M8A", "M8A", "N35", "N29", "G7"],
          mdc: "M8A-M8A-n:q-G7",
          transliteration: "pr-ꜤꜢ ššnḳ",
          translation: "Pharaoh Shoshenk",
          sources: [
            { text: "Kitchen, Two Donation Stelae in The Brooklyn Museum, JARCE 8 (1969): 59" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 188-189, 6:E6" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "N36", "H8", "Z1", "W2", "X1", "X1", "M8A", "M8A", "N35", "N29", "N29", "R8", "S38", "O28"],
          mdc: "i-mn:n-N36:H8*Z1-W2-t:t-M8A-M8A-n:q-q-nTr-HqA-iwn",
          transliteration: "ššnḳ zꜢ-bꜢstt mri͗-i͗mn nṯr ḥḳꜢ iwnw",
          translation: "Shoshenk, son of Bastet, beloved of Amun, the god and ruler of Heliopolis",
        },
      ],
    },
  },

  "shoshenq-iv": {
    prenomen: {
      codes: ["N5", "S1", "L1", "U21", "N35", "N5"],
      mdc: "ra-S1-xpr-stp&n&ra",
      transliteration: "ḥḏ ḫpr rꜤ",
      translation: "The bright one is a manifestation of Ra",
    },
    nomen: {
      codes: ["M8A", "M8A", "N35", "N29", "G7", "R8", "S38", "O28"],
      mdc: "M8A-M8A-n:q-G7-nTr-HqA-iwn",
      transliteration: "ššnḳ nṯr ḥḳꜢ iwnw",
      translation: "Shoshenq, the god and ruler of Heliopolis",
      sources: [
        { text: "Year 10 stela (St. Petersburg Hermitage 5630)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 190-191, 7:E1" },
      ],
      variants: [
        {
          codes: ["M17", "Y5", "N35", "N36", "H8", "W2", "M8A", "M8A", "N35", "N29", "N29", "R8", "S38", "O28"],
          mdc: "i-mn:n:N36-H8-W2-M8A-M8A-n:q-q&nTr-HqA-iwn",
          transliteration: "ššnḳ mry imn sꜢ bꜢstt nṯr ḥḳꜢ iwnw",
          translation: "Shoshenq, beloved of Amun, son of Bastet, the god and ruler of Heliopolis",
        },
      ],
    },
  },

  pami: {
    prenomen: {
      codes: ["N5", "F12", "H6", "Y5", "U21", "N35"],
      mdc: "ra-wsr-Sw-mn:stp:n",
      transliteration: "wsr-mꜢꜤt-rꜤ stp.n-i͗mn",
      translation: "The strong one belonging to the Maat of Ra, chosen by Amun",
      sources: [
        { text: "Posener, Malinine, Vercoutter, Catalogue des steles du Serapeum de Memphis, no. 22" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 190-191, 8:T1" },
      ],
      variants: [
        {
          codes: ["N5", "F12", "H6", "U21", "N35", "N5"],
          mdc: "ra-wsr-Sw-stp&n&ra",
          transliteration: "wsr-mꜢꜤt-rꜤ stp.n-rꜤ",
          translation: "The strong one belonging to the Maat of Ra, chosen by Ra",
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "N36", "G40", "W19", "M17", "M17"],
      mdc: "i-mn:n:N36-G40-mi-i-i",
      transliteration: "pꜢ-mi͗ mri͗-i͗mn",
      translation: "Pami, beloved of Amun",
      sources: [
        { text: "Posener, Malinine, Vercoutter, Catalogue des steles du Serapeum de Memphis, no. 24" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 190-191, 8:E1" },
      ],
      variants: [
        {
          codes: ["G40", "W19", "M17", "M17"],
          mdc: "G40-mi-i-i",
          transliteration: "pꜢ-mi͗",
          translation: "The tomcat",
          sources: [
            { text: "Posener, Malinine, Vercoutter, Catalogue des steles du Serapeum de Memphis, no. 26" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 190-191, 8:E3" },
          ],
        },
        {
          codes: ["Q3", "W19", "M17", "M17"],
          mdc: "p-mi-i-i",
          transliteration: "pꜢ-mi͗",
          translation: "The tomcat",
        },
      ],
    },
  },

  "shoshenq-v": {
    horus: {
      codes: ["F12", "S29", "F9", "F9"],
      mdc: "wsr-s-F9:F9",
      transliteration: "wsr-pḥti͗",
      translation: "Strong of might",
    },
    nebty: {
      codes: ["F12", "F9", "F9"],
      mdc: "wsr-F9:F9",
      transliteration: "wsr-pḥti͗",
      translation: "Strong of might",
    },
    golden: {
      codes: ["F12", "F9", "F9"],
      mdc: "wsr-F9:F9",
      transliteration: "wsr-pḥti͗",
      translation: "Strong of might",
    },
    prenomen: {
      codes: ["N5", "L1"],
      mdc: "ra-O29V-xpr",
      transliteration: "ꜤꜢ-ḫpr-rꜤ",
      translation: "The great one is a manifestation of Ra",
      sources: [
        { text: "Mariette, Monuments, plate LXX" },
        { text: "Daressy, Trois steles de la Periode Bubastite, ASAE 15 (1915): 144" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 190-191, 9:T1" },
      ],
      variants: [
        {
          codes: ["L1", "O29v", "Z2"],
          mdc: "xpr-aAv:Z2",
          transliteration: "ꜤꜢ-ḫprw-rꜤ",
          translation: "The great one is a manifestation of Ra",
          sources: [
            { text: "Posener, Malinine, Vercoutter, Catalogue des steles du Serapeum de Memphis (1968), no. 26" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 190-191, 9:T4" },
          ],
        },
        {
          codes: ["N5", "O29v", "L1", "U21", "N35", "N5"],
          mdc: "ra-O29v-xpr-stp&n&ra",
          transliteration: "ꜤꜢ-ḫprw-rꜤ stp.n-rꜤ",
          translation: "The great one is a manifestation of Ra, chosen by Ra",
          sources: [
            { text: "Kitchen, Two Donation Stelae in The Brooklyn Museum, JARCE 8 (1969): 64" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 190-191, 9:T5" },
          ],
        },
        {
          codes: ["N5", "O29v", "L1", "C2", "U21", "N35", "N5"],
          mdc: "ra:aAv-xpr-C2-stp&n&ra",
          transliteration: "ꜤꜢ-ḫprw-rꜤ stp.n-rꜤ",
          translation: "The great one is a manifestation of Ra, chosen by Ra",
        },
      ],
    },
    nomen: {
      codes: ["M8A", "M8A", "W24", "N29"],
      mdc: "M8A-M8A-nw:q",
      transliteration: "ššnḳ",
      sources: [
        { text: "Daressy, Trois steles de la Periode Bubastite, ASAE 15 (1915): 144" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 190-191, 9:E1" },
      ],
      variants: [
        {
          codes: ["M8A", "M8A", "N29"],
          mdc: "M8A-M8A-q",
          transliteration: "šš(n)ḳ",
          sources: [
            { text: "Posener, Malinine, Vercoutter, Catalogue des steles du Serapeum de Memphis (1968), no. 31" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 190-191, 9:E2" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "N36", "M8A", "M8A", "N35", "N29", "H8", "W2", "R8", "S38", "R19"],
          mdc: "i-mn:n:N36-M8A-M8A-n:q*H8-W2-nTr-HqA-R19",
          transliteration: "ššnḳ mri͗-i͗mn nṯr-ḥḳꜢ-i͗wnw",
          translation: "Shoshenq, beloved of Amun, divine ruler of Heliopolis",
        },
      ],
    },
  },

  "osorkon-iv": {
    prenomen: {
      codes: ["N5", "O29v", "L1", "C12", "U21", "N35"],
      mdc: "ra:aAv-xpr-C12-stp:n",
      transliteration: "ꜤꜢ-ḫprw-rꜤ stp.n-i͗mn",
      translation: "The great one is a manifestation of Ra, chosen by Amun",
      sources: [
        { text: "Posener, Mélanges Gamal eddin Mokhtar (1985), II, 266" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 200-201, 2:T1" },
      ],
      variants: [
        {
          codes: ["N6B", "N5", "O29v", "L1", "C12", "U21", "N35"],
          mdc: "N6B-ra:aAv-xpr-C12-stp:n",
          transliteration: "ni͗-swt-bi͗t ꜤꜢ-ḫpr-rꜤ stp.n-i͗mn",
          translation: "(The Dual King) The great one is a manifestation of Ra, chosen by Amun",
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "U7", "V4", "Aa18", "D21", "V30", "N35"],
      mdc: "i-mn:n:U7-wA-Aa18-r:nb:n",
      transliteration: "wsi͗rkn mri͗-i͗mn",
      translation: "Osorkon, beloved of Amun",
      sources: [
        { text: "Posener, Mélanges Gamal eddin Mokhtar (1985), II, 266" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 200-201, 2:E1" },
      ],
      variants: [
        {
          codes: ["N6B", "M17", "Y5", "N35", "U7", "Aa18", "V4", "D21", "V31", "N35", "M17"],
          mdc: "N6B-i-mn:n:U7-Aa18-wA-r:k:n-i",
          transliteration: "ni͗-swt-bi͗t wsrkn mri͗-i͗mn",
          translation: "(The Dual King) Osorkon, beloved one of Amun",
        },
      ],
    },
  },

  "takelot-ii": {
    horus: {
      codes: ["E1", "D40", "N28", "G17", "R19"],
      mdc: "E1:D40-xa-m-R19",
      transliteration: "kꜢ-nḫt ḫꜤi͗-m-wꜢst",
      translation: "The strong bull who appears in Thebes",
    },
    prenomen: {
      codes: ["N5", "S1", "L1", "U21", "N35", "N5"],
      mdc: "ra-S1-xpr-stp&n&ra",
      transliteration: "ḥḏ-ḫpr-rꜤ stp.n-rꜤ",
      translation: "Radiant is the manifestation of Ra, the chosen one of Ra",
      sources: [
        { text: "The Epigraphic Survey, The Bubastite portal, (OIP 74), plate 21 (1)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 192-193, 1:T1" },
      ],
      variants: [
        {
          codes: ["N5", "S1", "L1", "U21", "N35", "N5", "R8", "S38", "R19"],
          mdc: "ra-S1-xpr-stp&n&ra-nTr-HqA-R19",
          transliteration: "ḥḏ-ḫpr-rꜤ stp.n-rꜤ nṯr-ḥḳꜢ-wꜢst",
          translation: "Radiant is the manifestation of Ra, the chosen one of Ra, divine ruler of Thebes",
        },
      ],
    },
    nomen: {
      codes: ["X1", "V31", "D21", "N17", "U33"],
      mdc: "t:k-r:N17-U33",
      transliteration: "tklt",
      sources: [
        { text: "Legrain, Notice sur le Temple d'Osiris Neb-djeto, ASAE 4 (1903): 183" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 192-193, 1:E1" },
      ],
      variants: [
        {
          codes: ["M17", "Y5", "N35", "N36", "U33", "V31", "V30", "N36", "U33"],
          mdc: "i-mn:n:N36-U33-k:nb:N36-U33",
          transliteration: "tklt mri͗-i͗mn",
          translation: "Takelot, beloved of Amun",
          sources: [
            { text: "RecTrav 18, 52" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 192-193, 1:E2" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "N36", "Q1", "H8", "Z1", "V13", "V31", "D21", "Z1", "N36"],
          mdc: "i-mn:n:N36-st-H8:Z1-T:k-r*Z1:N36",
          transliteration: "tklt zꜢ-Ꜣst mri͗-i͗mn",
          translation: "Takelot, son of Isis, beloved of Amun",
          sources: [
            { text: "The Epigraphic Survey, The Bubastite portal, (OIP 74), plate 16-17" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 192-193, 1:E3" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "N36", "Q1", "H8", "Z1", "V13", "V31", "D21", "N36", "X1"],
          mdc: "i-mn:n:N36-st-H8:Z1-T:k-r:N36:t",
          transliteration: "tklt zꜢ-Ꜣst mri͗-i͗mn",
          translation: "Takelot, son of Isis, beloved of Amun",
          sources: [
            { text: "RecTrav 35, 130" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 192-193, 1:E4" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "N36", "Q1", "H8", "Z1", "U33", "V31", "D21", "N36", "U33"],
          mdc: "i-mn:n:N36-st-H8:Z1-U33-k:r:N36-U33",
          transliteration: "tklt zꜢ-Ꜣst mri͗-i͗mn",
          translation: "Takelot, son of Isis, beloved of Amun",
        },
      ],
    },
  },

  "pedubast-i": {
    prenomen: {
      codes: ["N5", "F12", "C10A", "M17", "Y5", "N35", "U21", "N35"],
      mdc: "ra-wsr-C10A-i-mn:n-stp:n",
      transliteration: "wsr-mꜢꜤt-rꜤ stp.n-i͗mn",
      translation: "The strong one belonging to the Maat of Ra, chosen by Amun",
      sources: [
        { text: "Statue of Hor (Cairo Museum CG 42226, JE 26575)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 192-193, 2:T1" },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "U7", "G40", "D37", "W1"],
      mdc: "i-mn:n:U7-G40:D37-W1",
      transliteration: "pꜢ-di͗-bꜢstt mri͗-i͗mn",
      translation: "The gift of Bastet, beloved of Amun",
      sources: [
        { text: "Kruchten, Les annales des pretres de Karnak, plate 1" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 192-193, 2:E1" },
      ],
      variants: [
        {
          codes: ["M17", "Y5", "N35", "U7", "H8", "Q1", "X1", "G40", "D37", "W1"],
          mdc: "i-mn:n:U7-H8:st:t-G40:D37-W1",
          transliteration: "pꜢ-di͗-bꜢstt mri͗-i͗mn zꜢ-Ꜣst",
          translation: "The gift of Bastet, beloved of Amun, son of Isis",
          sources: [
            { text: "Beckerath, The Nile Level Records at Karnak and their Importance, JARCE 5: 51:24" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 192-193, 2:E4" },
          ],
        },
      ],
    },
  },

  "osorkon-iii": {
    horus: {
      codes: ["E1", "D40", "N28", "G17", "S40"],
      mdc: "E1:D40-xa-m-S40",
      transliteration: "kꜢ-nḫt ḫꜤi͗-m.wꜢst",
      translation: "The strong bull has appearaed in Thebes",
    },
    nebty: {
      codes: ["Q1", "F34", "N17", "N17"],
      mdc: "st-ib:N17:N17",
      transliteration: "st-i͗b-tꜢwi͗",
      translation: "The favorite one of the Two Lands",
    },
    golden: {
      codes: ["F31", "S29", "R8A"],
      mdc: "ms-s-nTrw",
      transliteration: "ms-nṯrw",
      translation: "Born of the gods",
    },
    prenomen: {
      codes: ["N5", "F12", "C10", "M17", "Y5", "N35", "U21", "N35"],
      mdc: "ra-wsr-mAat-i-mn:n-stp:n",
      transliteration: "wsr-mꜢꜤt-rꜤ stp.n-i͗mn",
      translation: "The strong one belonging to the Maat of Ra, chosen by Amun",
      sources: [
        { text: "Beckerath, The Nile Level Records at Karnak and their Importance, JARCE 5: 49:5" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 194-195, 5:T1" },
      ],
      variants: [
        {
          codes: ["N5", "F12", "U1", "Aa11", "D36", "X1"],
          mdc: "ra-wsr-U1-Aa11:a:t",
          transliteration: "wsr-mꜢꜤt-rꜤ",
          translation: "The strong one belonging to the Maat of Ra",
          sources: [
            { text: "Legrain, Le temple et les chapelles d'Osiris a Karnak, RecTrav 22 (1900): 129" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 194-195, 5:T4" },
          ],
        },
        {
          codes: ["N5", "F12", "H6", "U21", "C12"],
          mdc: "ra-wsr-Sw-stp-C12",
          transliteration: "wsr-mꜢꜤt-rꜤ stp (n) i͗mn",
          translation: "The strong one belonging to the Maat of Ra, chosen by Amun",
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "U7", "H8", "Z1", "Q1", "V4", "Aa18", "M17", "D21", "V31", "N35"],
      mdc: "i-mn:n:U7-H8:Z1-st-wA-Aa18-i-r:k:n",
      transliteration: "wsrkn zꜢ-Ꜣst mri͗-i͗mn",
      translation: "Osorkon, son of Isis, beloved of Amun",
      sources: [
        { text: "Legrain, Le temple et les chapelles d'Osiris a Karnak, RecTrav 22 (1900): 129" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 194-195, 5:E1" },
      ],
      variants: [
        {
          codes: ["V4", "Aa18", "M17", "D21", "V31", "N35"],
          mdc: "wA-Aa18-i-r:k:n",
          transliteration: "wsrkn",
          translation: "Osorkon",
          sources: [
            { text: "Legrain, Le temple et les chapelles d'Osiris a Karnak, RecTrav 22 (1900): 132" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 194-195, 5:E3" },
          ],
        },
        {
          codes: ["V4", "Aa18", "M17", "D21", "V31", "N35", "N29", "R8", "S38", "R19"],
          mdc: "wA-Aa18-i-r:k:n-q-nTr-HqA-R19",
          transliteration: "wsrkn nṯr ḥḳꜢ wꜢst",
          translation: "Osorkon, the god and ruler of Thebes",
          sources: [
            { text: "Statuette (Cairo Museum CG 42224, JE 38581)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 194-195, 5:E4" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "U7", "Q1", "H8", "V4", "Aa18", "M17", "D21", "V31", "N35", "N29", "R8", "S38", "R19"],
          mdc: "i-mn:n:U7-Q1:H8-wA:Aa18-i-r:k:n-q-nTr-HqA-R19",
          transliteration: "wsrkn sꜢ Ꜣst mry imn nṯr ḥḳꜢ wꜢst",
          translation: "Osorkon, the son of Isis, beloved of Amun, the god and ruler of Thebes",
          sources: [
            { text: "Beckerath, The Nile Level Records at Karnak and their Importance, JARCE 5: 50:13" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 194-195, 5:E5" },
          ],
        },
        {
          codes: ["Y5", "N35", "U7", "Q1", "H8", "V4", "Aa18", "M17", "D21", "V31", "N35", "R8", "S38", "R19"],
          mdc: "mn:n:U7\\-i\\-Q1:H8-wA:Aa18-i-r:k:n-nTr-HqA-R19",
          transliteration: "wsrkn sꜢ Ꜣst mry imn nṯr ḥḳꜢ wꜢst",
          translation: "Osorkon, the son of Isis, beloved of Amun, the god and ruler of Thebes",
        },
      ],
    },
  },

  "takelot-iii": {
    horus: {
      codes: ["M14", "N17", "N17"],
      mdc: "M14-N17:N17",
      transliteration: "wꜢḏ-tꜢwi͗",
      translation: "The sturdy one of the Two Lands",
    },
    nebty: {
      codes: ["M14", "N17", "N17"],
      mdc: "M14-N17:N17",
      transliteration: "wꜢḏ-tꜢwi͗",
      translation: "The sturdy one of the Two Lands",
    },
    golden: {
      codes: ["M13", "M127", "M13"],
      mdc: "wAD-M127-wAD",
      transliteration: "wꜢḏ-tꜢwi͗",
      translation: "The sturdy one of the Two Lands",
    },
    prenomen: {
      codes: ["N5", "F12", "C10", "M17", "Y5", "N35", "U21"],
      mdc: "ra-wsr-mAat-i-mn:n:stp",
      transliteration: "wsr-mꜢꜤt-rꜤ stp.n-i͗mn",
      translation: "The strong one belonging to the Maat of Ra, chosen by Amun",
      sources: [
        { text: "Daressy, Inscriptions inédites de la XXIe Dynastie, RecTrav 18 (1896): 51" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 194-195, 6:T1" },
      ],
      variants: [
        {
          codes: ["N5", "F12", "U1", "Aa11", "D36", "X1"],
          mdc: "ra-wsr-U1-Aa11:a:t",
          transliteration: "wsr-mꜢꜤt-rꜤ",
          translation: "The strong one belonging to the Maat of Ra",
          sources: [
            { text: "Legrain, Le temple et les chapelles d'Osiris a Karnak, RecTrav 22 (1900): 130" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 194-195, 6:T3" },
          ],
        },
        {
          codes: ["N5", "F12", "H6"],
          mdc: "ra-wsr-Sw",
          transliteration: "wsr-mꜢꜤt-rꜤ",
          translation: "The strong one belonging to the Maat of Ra",
        },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "U7", "G39", "Q1", "U33", "V31", "D21", "Z1", "N17", "U33"],
      mdc: "i-mn:n:U7-zA-st-U33-k:r*Z1:N17-U33",
      transliteration: "tklt zꜢ-Ꜣst mri͗-i͗mn",
      translation: "Takelot, son of Isis, beloved of Amun",
      sources: [
        { text: "Legrain, Le temple et les chapelles d'Osiris a Karnak, RecTrav 22 (1900): 130" },
      ],
      variants: [
        {
          codes: ["Y5", "N35", "U7", "V13", "V31", "D21", "N17", "U33"],
          mdc: "mn:n:U7\\-i\\-T:k:r-N17:U33",
          transliteration: "tklt mri͗-i͗mn",
          translation: "Takelot, beloved of Amun",
          sources: [
            { text: "Aegyptische Inschriften aus den Königlichen Museen zu Berlin, II, p. 548 (20136)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 194-195, 6:E4" },
          ],
        },
        {
          codes: ["V13", "V31", "D21", "Z1", "N17", "V13"],
          mdc: "T:k-r:Z1-N17:T",
          transliteration: "tklt",
          translation: "Takelot",
          sources: [
            { text: "Legrain, Le temple et les chapelles d'Osiris a Karnak, RecTrav 22 (1900): 128" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 194-195, 6:E5" },
          ],
        },
        {
          codes: ["V13", "V31", "D21", "U33", "M17"],
          mdc: "T:k-r-U33-i",
          transliteration: "tklt",
          translation: "Takelot",
          sources: [
            { text: "Petrie, Abydos, III, plate 24 (2)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 194-195, 6:E6" },
          ],
        },
        {
          codes: ["V13", "V31", "D21", "N17", "U33"],
          mdc: "T:k-r:N17-U33",
          transliteration: "tklt",
          translation: "Takelot",
        },
      ],
    },
  },

  rudamun: {
    horus: {
      codes: ["V30", "U4", "X1", "P8"],
      mdc: "nb-U4-t-P8",
      transliteration: "nb-mꜢꜤ-ḫrw",
      translation: "The possessor of righteousness",
    },
    nebty: {
      codes: ["V28", "V31", "N35", "G17", "U1", "Aa11", "X1"],
      mdc: "H-k:n-m-U1-Aa11:t",
      transliteration: "ḥkn-n-mꜢꜤt",
      translation: "Who has rejoiced at Maat",
    },
    prenomen: {
      codes: ["N5", "F12", "U1", "Aa11", "D36", "X1"],
      mdc: "ra-wsr-U1-Aa11:a:t",
      transliteration: "wsr-mꜢꜤt-rꜤ",
      translation: "The strong one belonging to the Maat of Ra",
      sources: [
        { text: "Legrain, Le temple et les chapelles d'Osiris a Karnak, RecTrav 22 (1900): 130" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 196-197, 7:T1" },
      ],
      variants: [
        {
          codes: ["N5", "F12", "U2", "X1", "M17", "Y5", "N35", "U21", "N35"],
          mdc: "ra-wsr-U2:t-i-mn:n-stp:n",
          transliteration: "wsr-mꜢꜤt-rꜤ stp.n-i͗mn",
          translation: "The strong one belonging to the Maat of Ra, chosen by Amun",
        },
      ],
    },
    nomen: {
      codes: [],
      mdc: "null",
      transliteration: "rwd-i͗mn mri͗-i͗mn",
      translation: "Amun is vigorous, beloved of Amun",
      sources: [
        { text: "Legrain, Le temple et les chapelles d'Osiris a Karnak, RecTrav 22 (1900): 132-33" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 196-197, 7:E1" },
      ],
      variants: [
        {
          codes: ["M17", "Y5", "N35", "D21", "D46", "T12"],
          mdc: "i-mn:n-r:d-T12",
          transliteration: "rwd-i͗mn",
          translation: "Amun is vigorous",
          sources: [
            { text: "Daressy, Notes et remarques, RecTrav 19 (1897): 20" },
            { text: "Aegyptische Inschriften aus den Königlichen Museen zu Berlin, II, 540 (2100)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 196-197, 7:E3" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "D21", "T12"],
          mdc: "i-mn:n-r:T12",
          transliteration: "rwd-i͗mn",
          translation: "Amun is vigorous",
        },
      ],
    },
  },

  piye: {
    horus: {
      codes: ["E1", "D40", "N28", "D36", "G17", "N35", "Q3", "N35A", "O39", "O49"],
      mdc: "E1:D40-xa:a-m-n:p-mw-O39:O49",
      transliteration: "kꜢ-nḫt ḫꜤi͗-m-npt",
      translation: "The strong bull who has appeared in Napata",
      sources: [
        { text: "Piye stela No. 26 from Gebel Barkal" },
        { text: "Reisner, Inscribed Monuments from Gebel Barkal, ZÄS 66 (1931): 90" },
      ],
      variants: [
        {
          codes: ["S29", "R4", "X1", "Q3", "N17", "N17", "I9"],
          mdc: "s-Htp:t*p-N17:N17:f",
          transliteration: "sḥtp-tꜢwi͗.fi͗",
          translation: "The one who has satisfied his Two Lands",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, V, 14h" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 206-207, 3:H1" },
          ],
        },
        {
          codes: ["E1", "N17", "N17", "I9"],
          mdc: "E1-N17:N17:f",
          transliteration: "kꜢ-tꜢwi͗.fi͗",
          translation: "The bull of his Two Lands",
          sources: [
            { text: "Obelisk fragment Khartoum 462" },
            { text: "Fontes historiae Nubiorum, I, 54" },
            { text: "Porter & Moss, Topographical Bibliography , VII, 192" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 206-207, 3:H2" },
          ],
        },
        {
          codes: ["E1", "D40", "N28", "G17", "R19", "X1", "O49"],
          mdc: "E1:D40-xa-m-R19-t:O49",
          transliteration: "kꜢ-nḫt ḫꜤi͗-m-wꜢst",
          translation: "The strong bull who has appeared in Thebes",
        },
      ],
    },
    nebty: {
      codes: ["S38", "N29", "I6", "G17", "X1", "O49"],
      mdc: "HqA-q:I6-m-t:O49",
      transliteration: "ḥḳꜢ-kmt",
      translation: "Ruler of Egypt",
      sources: [
        { text: "Obelisk fragment Khartoum 462" },
        { text: "Fontes historiae Nubiorum, I, 54" },
        { text: "Porter & Moss, Topographical Bibliography , VII, 192" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 206-207, 3:N" },
      ],
      variants: [
        {
          codes: ["V29", "M23", "X1", "M17", "M17", "W19", "G17", "N5", "Q3", "X1", "N1"],
          mdc: "V29-sw-t-i-i-mi-m&ra-p*t:pt",
          transliteration: "wꜢḥ-nsyt mi-rꜤ-m-pt",
          translation: "Enduring of kingship like Ra in heaven",
        },
      ],
    },
    golden: {
      codes: ["D45", "N28", "S42", "F9", "F9", "S34", "D2", "V30", "A1", "N35", "U3", "I9", "W19", "N27", "X1", "A41"],
      mdc: "Dsr:xa-sxm-F9-F9-anx-D2:nb-A1-n:U3:f-mi-Axt:t-A41",
      transliteration: "ḏsr-ḫꜤw sḫm-pḥty Ꜥnḫ ḥr-nb n mꜢ.f mi Ꜣḫty",
      translation: "Sacred of appearances, powerful and strong...",
    },
    prenomen: {
      codes: ["N5", "F12", "U1", "Aa11", "D36", "X1"],
      mdc: "ra-wsr-U1-Aa11:a:t#12",
      transliteration: "wsr-mꜢꜤt-rꜤ",
      translation: "The strong one belonging to the Maat of Ra",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, V, 14a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 206-207, 3:T1" },
      ],
      variants: [
        {
          codes: ["N5", "S29", "F35", "I9", "D21"],
          mdc: "ra-s-nfr-f:r",
          transliteration: "snfr-rꜤ",
          translation: "The one whom Ra made perfect",
        },
      ],
    },
    nomen: {
      codes: ["Q3", "S34", "M17", "M17"],
      mdc: "p-anx-i-i",
      transliteration: "piy",
      sources: [
        { text: "Pierret, Recueil d'inscriptions inédites du Musée égyptien du Louvre, I, 45 (C 187)" },
        { text: "Formerly transliterated as Piankhy." },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 206-207, 3:E1" },
      ],
      variants: [
        {
          codes: ["M17", "Y5", "N35", "N36", "Q3", "S34", "M17", "M17"],
          mdc: "i-mn:n:N36-p-anx-i-i",
          transliteration: "piy mri͗-i͗mn",
          translation: "Piye, beloved of Amun",
        },
      ],
    },
  },

  shabaka: {
    horus: {
      codes: ["S29", "D58", "N29", "N17", "N17"],
      mdc: "s-b-q:N17:N17",
      transliteration: "sbḳ-tꜢwi͗",
      translation: "The one who has blessed the Two Lands",
    },
    nebty: {
      codes: ["S29", "D58", "N29", "N17", "N17"],
      mdc: "s-b-q:N17:N17",
      transliteration: "sbḳ-tꜢwi",
      translation: "The one who has blessed the Two Lands",
    },
    golden: {
      codes: ["S29", "D58", "N29", "N17", "N17"],
      mdc: "s-b-q:N17:N17",
      transliteration: "sbḳ-tꜢwi͗",
      translation: "The one who has blessed the Two Lands",
    },
    prenomen: {
      codes: ["N5", "F35", "D28"],
      mdc: "ra-nfr-kA",
      transliteration: "nfr-kꜢ-rꜤ",
      translation: "The perfect one of the ka of Ra",
      sources: [
        { text: "Passim" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 206-207, 4:T1" },
      ],
      variants: [
        {
          codes: ["M17", "Y5", "N35", "U7", "N5", "F35", "D28"],
          mdc: "i-mn:n:U7-ra-nfr-kA",
          transliteration: "nfr-kꜢ-rꜤ mri͗-i͗mn",
          translation: "The perfect one of the ka of Ra, beloved of Amun",
        },
      ],
    },
    nomen: {
      codes: ["M8", "E10", "D28"],
      mdc: "M8-E10-kA",
      transliteration: "šꜢbꜢkꜢ",
      sources: [
        { text: "Passim" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 206-207, 4:E1" },
      ],
      variants: [
        {
          codes: ["M17", "Y5", "N35", "U7", "M8A", "E10", "D28"],
          mdc: "i-mn:n:U7-M8A-E10-kA",
          transliteration: "šꜢbꜢkꜢ mri͗-i͗mn",
          translation: "Shabaka, beloved of Amun",
        },
      ],
    },
  },

  shebitko: {
    horus: {
      codes: ["R11", "N28", "D36"],
      mdc: "Dd-xa:a",
      transliteration: "ḏd-ḫꜤw",
      translation: "Stable of appearances",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, V, 3b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 208-209, 5:H1" },
      ],
      variants: [
        {
          codes: ["R11", "N28", "G43", "M8A", "E10", "N17", "D28"],
          mdc: "Dd-xa-w-M8A-E10-N17:kA",
          transliteration: "ḏd-ḫꜤw šꜢbꜢtꜢkꜢ",
          translation: "Stable of appearances, Shabataka",
          sources: [
            { text: "Mariette, Monument divers recueillis en Égypte et en Nubie (1872), II, pl. 29 (c2)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 208-209, 5:H4" },
          ],
        },
        {
          codes: ["R11", "N28", "X1"],
          mdc: "Dd-xa:t",
          transliteration: "ḏd-ḫꜤt",
        },
      ],
    },
    nebty: {
      codes: ["O29v", "D36", "F8", "G17", "N17", "N17", "N17", "V30"],
      mdc: "aAv:a-F8-m-N17:N17:N17:nb",
      transliteration: "ꜤꜢ-šfit-m-tꜢw-nb(w)",
      translation: "Great of majesty in all lands",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, V, 3b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 208-209, 5:N1" },
      ],
      variants: [
        {
          codes: ["S29", "N28", "D36", "Y1", "U4", "D36", "X1", "U6", "M17", "M17", "N17", "N17"],
          mdc: "s-xa:a:Y1-U4-a:t-mr*i*i:N17:N17",
          transliteration: "sḫꜤi͗-mꜢꜤt mri͗-tꜢwi͗",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, V, 3b" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 208-209, 5:N2" },
          ],
        },
        {
          codes: ["R11", "N28", "D36", "G43"],
          mdc: "Dd-xa:a-w",
          transliteration: "ḏd-ḫꜤw",
          translation: "Stable of appearances",
        },
      ],
    },
    golden: {
      codes: ["O29v", "D36", "F23", "V28", "A24", "T10", "Z1", "Z1", "Z1"],
      mdc: "aAv:a:xpS-H-A24-pD:3:3*3",
      transliteration: "ꜤꜢ-ḥpš ḥwi͗-pḏt",
      translation: "The one great of strength who has struck down the Nine Bows",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, V, 3b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 208-209, 5:G1" },
      ],
      variants: [
        {
          codes: ["O4A", "D21", "Y1", "D2", "Z1", "N35", "Aa1", "X1", "D40"],
          mdc: "O4A:r:Y1-D2:Z1-n:x*t:D40",
          transliteration: "hr-ḥr-nḫtw",
          translation: "The one who is satisfied with victory",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "R11", "D28", "D28", "D28"],
      mdc: "ra-Dd-kA*kA:kA",
      transliteration: "ḏd-kꜢw-rꜤ",
      translation: "The stable one of the kas of Ra",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, V, 3" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 208-209, 5:T1" },
      ],
      variants: [
        {
          codes: ["N5", "R11", "D28"],
          mdc: "ra-Dd-kA",
          transliteration: "ḏd-kꜢ-rꜤ",
          translation: "The stable one of the ka of Ra",
        },
      ],
    },
    nomen: {
      codes: ["M8A", "E10", "N17", "D28"],
      mdc: "M8A-E10-N17:kA",
      transliteration: "šꜢbꜢtꜢkꜢ",
      translation: "Shabataka",
      sources: [
        { text: "Passim" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 208-209, 5:E1" },
      ],
      variants: [
        {
          codes: ["M17", "Y5", "N35", "U7", "M8A", "E10", "N17", "D28"],
          mdc: "i-mn:n:U7-M8A-E10-N17:kA",
          transliteration: "šꜢbꜢtꜢkꜢ mri͗-i͗mn",
          translation: "Shabataka, beloved of Amun",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, V, 3" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 208-209, 5:E2" },
          ],
        },
        {
          codes: ["Q3", "X1", "V28", "N36", "M8A", "E10", "N17", "D28"],
          mdc: "p:t-H-N36:M8A-E10-N17:kA",
          transliteration: "šꜢbꜢtꜢkꜢ mri͗-ptḥ",
          translation: "Shabataka, beloved of Ptah",
        },
      ],
    },
  },

  taharqa: {
    horus: {
      codes: ["N29", "N28", "G43"],
      mdc: "q:xa-w",
      transliteration: "ḳꜢ-ḫꜤw",
      translation: "Exalted of appearances",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, V, 8+12+13" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 208-209, 6:H1" },
      ],
      variants: [
        {
          codes: ["G43", "N29", "N28", "N17", "O4", "E23", "N29"],
          mdc: "w-q:xa-N17:h-l:q",
          transliteration: "ḳꜢ-ḫꜤw thrḳ",
          translation: "Exalted of appearances, Taharqa",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, V, 12b" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 208-209, 6:H2" },
          ],
        },
      ],
    },
    nebty: {
      codes: ["N29", "N28", "G43"],
      mdc: "q:xa-w",
      transliteration: "ḳꜢ-ḫꜤw",
      translation: "Exalted of appearances",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, V, 8+12+13" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 208-209, 6:N1" },
      ],
    },
    golden: {
      codes: ["Aa1", "D43", "N17", "N17"],
      mdc: "x-D43:N17:N17",
      transliteration: "ḫw-tꜢwy",
      translation: "Protector of the Two Lands",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, V, 8" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 208-209, 6:G1" },
      ],
    },
    prenomen: {
      codes: ["N5", "F134", "Aa1", "G43"],
      mdc: "ra-F134-Aa1&w",
      transliteration: "ḫwi-nfrtm-rꜤ",
      translation: "The one whom Nefertum and Ra protect",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, V, 8+12+13" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 208-209, 6:T1" },
      ],
      variants: [
        {
          codes: ["N5", "F35", "X1", "U15", "Aa1", "G43"],
          mdc: "ra-nfr-t:U15-Aa1&w",
          transliteration: "ḫwi͗-nfrtm-rꜤ",
          translation: "The one whom Nefertum and Ra protect",
          sources: [
            { text: "Weight stone (Cairo Museum CG 31652)" },
            { text: "Jansen-Winkeln, Inschriften der Spätzeit. Die 25. Dynastie (2009), III, 58-59" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 208-209, 6:T2" },
          ],
        },
        {
          codes: ["N5", "Aa1", "G43", "F134"],
          mdc: "ra-Aa1&w-F134",
          transliteration: "ḫwi͗-nfrtm-rꜤ",
          translation: "The one whom Nefertum and Ra protect",
        },
      ],
    },
    nomen: {
      codes: ["N17", "O4A", "E23", "N29"],
      mdc: "N17:O4A-l:q",
      transliteration: "thr-ḳꜢ",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, V, 8+12+13" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 208-209, 6:E1" },
      ],
      variants: [
        {
          codes: ["G39", "N5", "N17", "O4", "E23", "N29"],
          mdc: "zA&ra-N17:O4\\-l:q",
          transliteration: "zꜢ-rꜤ thr-ḳꜢ",
          translation: "Son of Ra, Taharqa",
          sources: [
            { text: "Mariette, Monument divers recueillis en Égypte et en Nubie (1872), II, pl. 83" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 208-209, 6:E2" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "N36", "N17", "O4", "E23", "N29"],
          mdc: "i-mn:n:N36-N17:O4\\-l:q",
          transliteration: "thr-ḳꜢ mri͗-i͗mn",
          translation: "Taharqa, beloved of Amun",
        },
      ],
    },
  },

  tenutamen: {
    horus: {
      codes: ["V29", "X1", "U6"],
      mdc: "wAH-t-mr",
      transliteration: "wꜢḥ-mrwt",
      translation: "Enduring of love",
    },
    prenomen: {
      codes: ["N5", "E10", "D28"],
      mdc: "ra-E10-kA",
      transliteration: "bꜢ-kꜢ-rꜤ",
      translation: "The (very) ba of the ka of Ra",
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "N17", "N35", "V4", "U33"],
      mdc: "i-mn:n-N17:n-wA-ti",
      transliteration: "t(Ꜣ) nt-i͗mn",
      translation: "The one belonging to Amun",
    },
  },

  "necho-i": {
    prenomen: {
      codes: ["N5", "Y5", "L1"],
      mdc: "ra:mn-xpr",
      transliteration: "mn-ḫpr-rꜤ",
      translation: "The established one of the manifestation of Ra",
    },
    nomen: {
      codes: ["N35", "D28", "G43"],
      mdc: "n:kA-w",
      transliteration: "nkꜢw",
      translation: "Who belongs to the kas",
    },
  },

  "psamtik-i": {
    horus: {
      codes: ["O29v", "F34", "Z1"],
      mdc: "aAv:ib*Z1",
      transliteration: "ꜤꜢ-ib",
      translation: "Strong-minded",
      sources: [
        { text: "Caminos, The Nitocris Adoption Stela, JEA 50 (1964): pl. 8:6" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 270b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 214-215, 1:H1" },
      ],
      variants: [
        {
          codes: ["O29v", "F34"],
          mdc: "aAv:ib",
          transliteration: "ꜤꜢ-i͗b",
          translation: "Strong-minded",
          sources: [
            { text: "Chassinat, Textes provenant du Sérapéum de Memphis, RecTrav 22 (1900): 166" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 214-215, 1:H2" },
          ],
        },
        {
          codes: ["O29v", "F34", "D36"],
          mdc: "aAv:ib:a",
          transliteration: "ꜤꜢ-i͗b",
          translation: "Strong-minded",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 270b" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 214-215, 1:H3" },
          ],
        },
        {
          codes: ["O29v", "D36", "F34"],
          mdc: "aAv:a:ib",
          transliteration: "ꜤꜢ-i͗b",
          translation: "Strong-minded",
        },
      ],
    },
    nebty: {
      codes: ["V30", "D36", "Z1"],
      mdc: "nb:a:Z1",
      transliteration: "nb-Ꜥ",
      translation: "Possessor of a (strong) arm",
      sources: [
        { text: "Caminos, The Nitocris Adoption Stela, JEA 50 (1964): pl. 9:13" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 214-215, 1:N1" },
      ],
    },
    golden: {
      codes: ["N29", "N35", "W24", "G43", "D40"],
      mdc: "q:n-nw&w-D40",
      transliteration: "ḳnw",
      translation: "The brave one",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 270b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 214-215, 1:G1" },
      ],
    },
    prenomen: {
      codes: ["N5", "V29", "F34"],
      mdc: "ra-wAH-ib",
      transliteration: "wꜢḥ-i͗b-rꜤ",
      translation: "The enduring one is the (very) mind of Ra",
      sources: [
        { text: "Passim" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 214-215, 1:T1" },
      ],
    },
    nomen: {
      codes: ["Q3", "O34", "G17", "V13", "V31"],
      mdc: "p:z-m-T:k",
      transliteration: "psmtk",
      translation: "Psamtik",
      sources: [
        { text: "Brugsch, Thesaurus inscriptionum Aegyptiacarum (1884), IV, 738" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 214-215, 1:E1" },
      ],
    },
  },

  "necho-ii": {
    horus: {
      codes: ["S32", "F34"],
      mdc: "S32:ib",
      transliteration: "si͗Ꜣ-i͗b",
      translation: "Perceptive-minded",
    },
    nebty: {
      codes: ["P8"],
      mdc: "Aa11v-P8",
      transliteration: "mꜢꜤ-ḫrw",
      translation: "True of voice",
      sources: [
        { text: "Chassinat, Textes provenant du Sérapéum de Memphis, RecTrav 22 (1900): 21" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 214-215, 2:N1" },
      ],
    },
    golden: {
      codes: ["R8A", "U6"],
      mdc: "nTrw-mr",
      transliteration: "mry-nṯrw",
      translation: "Beloved of the gods",
      sources: [
        { text: "Chassinat, Textes provenant du Sérapéum de Memphis, RecTrav 22 (1900): 21" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 214-215, 2:G1" },
      ],
    },
    prenomen: {
      codes: ["N5", "F25", "F34"],
      mdc: "ra-F25-ib",
      transliteration: "wḥm-ib-rꜤ",
      translation: "Who has renewed the will of Ra",
      sources: [
        { text: "Passim" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 214-215, 2:T1" },
      ],
      variants: [
        {
          codes: ["N5", "F25", "G17", "F34"],
          mdc: "ra-F25-m-ib",
          transliteration: "wḥm-i͗b-rꜤ",
          translation: "Who has renewed the will of Ra",
        },
      ],
    },
    nomen: {
      codes: ["N35", "E1", "G43"],
      mdc: "n:E1-w",
      transliteration: "n(y) kꜢw",
      translation: "Who belongs to the kas",
      sources: [
        { text: "Chassinat, Textes provenant du Sérapéum de Memphis, RecTrav 22 (1900): 21" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 214-215, 2:E1" },
      ],
    },
  },

  "psamtik-ii": {
    horus: {
      codes: ["Y5", "Aa1", "F34"],
      mdc: "mn:x*ib",
      transliteration: "mnḫ-i͗b",
      translation: "Splendid of mind",
    },
    nebty: {
      codes: ["F12", "S29", "D21", "D36"],
      mdc: "wsr-s-r:a",
      transliteration: "wsr-Ꜥ",
      translation: "Strong-armed",
      sources: [
        { text: "Daressy, Quelques inscriptions provenant de Bubastis, ASAE 11 (1911): 192" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 216-217, 3:N1" },
      ],
    },
    golden: {
      codes: ["S29", "F35", "N17", "N17", "N21", "N21"],
      mdc: "s-nfr-N17:N17:N21*N21",
      transliteration: "snfr-tꜢwi͗",
      translation: "Who has made the Two Lands perfect",
    },
    prenomen: {
      codes: ["N5", "F35", "F34"],
      mdc: "ra-nfr-ib",
      transliteration: "nfr-ib-rꜤ",
      translation: "The perfect one is the (very) mind of Ra",
    },
    nomen: {
      codes: ["Q3", "S29", "G17", "V13", "V31"],
      mdc: "p-s-m-T:k",
      transliteration: "psmtk",
      translation: "Psamtik",
    },
  },

  apries: {
    horus: {
      codes: ["V29", "F34"],
      mdc: "wAH-ib",
      transliteration: "wꜢḥ-i͗b",
      translation: "Enduring of mind",
    },
    nebty: {
      codes: ["V30", "F23"],
      mdc: "nb:xpS",
      transliteration: "nb-ḫpš",
      translation: "Possessor of strength",
    },
    golden: {
      codes: ["S29", "M13", "N17", "N17"],
      mdc: "s-wAD-N17:N17",
      transliteration: "swꜢḏ-tꜤwi͗",
      translation: "Who has made the Two Lands flourish",
      sources: [
        { text: "Minerveo obelisk" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 216-217, 4:G1" },
      ],
      variants: [
        {
          codes: ["S29", "M13", "M127", "N17", "N17"],
          mdc: "s-wAD-M127-N17:N17",
          transliteration: "swꜤḏ-tꜢwi͗",
          translation: "Who has made the Two Lands flourish",
          sources: [
            { text: "Berlin Ägyptisches Museum, ÄM 7780" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 216-217, 4:G3" },
          ],
        },
        {
          codes: ["Q3", "X1", "V28", "G39", "U6", "D21", "N36", "I9"],
          mdc: "p:t-H-zA-mr-r:N36:f",
          transliteration: "zꜢ-ptḥ mri͗.f",
          translation: "Son of Ptah, his beloved",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "V28", "D36", "D36", "F34"],
      mdc: "ra-H-a:a-ib",
      transliteration: "ḥꜤꜤ-i͗b-rꜤ",
      translation: "Who (continually) rejoices over the mind of Ra",
    },
    nomen: {
      codes: ["N5", "V29", "F34"],
      mdc: "ra-wAH-ib",
      transliteration: "wꜢḥ-i͗b-rꜤ",
      translation: "The enduring one is the (very) mind of Ra",
    },
  },

  amasis: {
    horus: {
      codes: ["S29", "Y5", "N35", "U1", "Aa11", "X1"],
      mdc: "s-mn:n-U1-Aa11:t",
      transliteration: "smn-mꜢꜤt",
      translation: "The one who has established Maat",
      sources: [
        { text: "Daressy, Stèle de l'an III d'Amasis, RecTrav 22 (1900): 2" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 274p" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 216-217, 5:H1" },
      ],
      variants: [
        {
          codes: ["S29", "Y5", "N35", "W24", "Z1", "A1", "X1", "H6"],
          mdc: "s-mn:n-nw:Z1-A1:t-H6",
          transliteration: "",
          sources: [
            { text: "0" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 216-217, 5:H4" },
          ],
        },
      ],
    },
    nebty: {
      codes: ["G39", "R24", "M44", "N17", "N17"],
      mdc: "zA&R24-M44-N17:N17",
      transliteration: "zꜢ-nt spd-tꜢwy",
      translation: "The son of Neith, who has restored the Two Lands",
      sources: [
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 216-217, 5:N1" },
      ],
    },
    golden: {
      codes: ["R8A", "U21"],
      mdc: "nTrw-stp",
      transliteration: "stp-nṯrw",
      translation: "Divinely chosen",
      sources: [
        { text: "Petrie, Abydos, I, plate 69 (2)" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 216-217, 5:G1" },
      ],
    },
    prenomen: {
      codes: ["N5", "W9", "F34"],
      mdc: "ra-W9-ib",
      transliteration: "ḫnm-i͗b-rꜤ",
      translation: "The one who is associated with the mind of Ra",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 274o" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 218-219, 5:T1" },
      ],
      variants: [
        {
          codes: ["N5", "W9", "G17", "F34"],
          mdc: "ra-W9-m-ib",
          transliteration: "ẖnm-i͗b-rꜤ",
          translation: "The one who is associated with the mind of Ra",
          sources: [
            { text: "Petrie, Abydos, I, plate 69 (2)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 218-219, 5:T2" },
          ],
        },
      ],
    },
    nomen: {
      codes: ["N62", "F31", "S29"],
      mdc: "N62-ms-s",
      transliteration: "iꜤḥ-ms(.w)",
      translation: "Ahmose (Iah is born)",
      sources: [
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 218-219, 5:E1" },
      ],
      variants: [
        {
          codes: ["N11", "F31"],
          mdc: "N11-ms",
          transliteration: "iꜤḥ-ms(.w)",
          translation: "Ahmose",
          sources: [
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 218-219, 5:E2" },
          ],
        },
        {
          codes: ["N62", "F31", "H8", "Z1", "R24v"],
          mdc: "N62-ms-H8:Z1-R24v",
          transliteration: "iꜤḥ-ms(.w) zꜢ-nt",
          translation: "Ahmose, son of Neith",
          sources: [
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 218-219, 5:E3" },
          ],
        },
        {
          codes: ["N11", "F31", "G39", "R24"],
          mdc: "N11-ms-zA-R24",
          transliteration: "iꜤḥ-ms(.w) zꜢ-nt",
          translation: "Ahmose, son of Neith",
          sources: [
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 218-219, 5:E4" },
          ],
        },
        {
          codes: ["N12", "F31", "R24v", "G39"],
          mdc: "N12-ms-R24v-zA",
          transliteration: "iꜤḥ-ms(.w) zꜢ-nt",
          translation: "Ahmose, son of Neith",
        },
      ],
    },
  },

  "psamtik-iii": {
    prenomen: {
      codes: ["N5", "S34", "D28", "N35"],
      mdc: "ra-anx-kA:n",
      transliteration: "Ꜥnḫ-kꜢ-n-rꜤ",
      translation: "The living one is the (very) ka of Ra",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 275f+g" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 218-219, 6:T1" },
      ],
      variants: [
        {
          codes: ["N5", "S34", "D28"],
          mdc: "ra-anx-kA",
          transliteration: "Ꜥnḫ-kꜢ-rꜤ",
          translation: "The living one is the (very) ka of Ra",
        },
      ],
    },
    nomen: {
      codes: ["Q3", "S29", "G17", "V13", "V31"],
      mdc: "p-s-m-T:k",
      transliteration: "psmtk",
      translation: "Psamtik",
    },
  },

  "cambyses-ii": {
    horus: {
      codes: ["F36", "N16", "N16"],
      mdc: "zmA-N16:N16",
      transliteration: "smꜢ-tꜢwi͗",
      translation: "The one who has united the Two Lands",
    },
    prenomen: {
      codes: ["N5", "F31", "G43", "U33"],
      mdc: "ra-ms-w-U33",
      transliteration: "mswt-rꜤ",
      translation: "The offspring of Ra",
    },
    nomen: {
      codes: ["V31", "G17", "D58", "G43", "U28"],
      mdc: "k:m-b-w-DA",
      transliteration: "kmbḏ",
      translation: "Kambus (Cambyses)",
      sources: [
        { text: "Hammamat inscription no. 164" },
        { text: "Couyat, Montet, Les inscriptions hiéroglyphiques et hiératiques du Ouâdi Hammâmât, MIFAO 34 (1912), 93-94" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 283m" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 220-221, 1:E2" },
      ],
    },
  },

  "darius-i": {
    horus: {
      codes: ["Y5", "N35", "Aa1", "F34"],
      mdc: "mn:n:x*ib",
      transliteration: "mnḫ-ib",
      translation: "The one splendid of mind",
      sources: [
        { text: "Davies, The Temple of Hibis in el Khargeh Oasis (1953), III, pl. 13" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 220-221, 2:H1" },
      ],
      variants: [
        {
          codes: ["A21A", "V30", "M162", "M17", "M17", "N36"],
          mdc: "A21A-nb-M162-i*i:N36",
          transliteration: "wr-nb-mri͗-šmꜤw",
          translation: "Chieftain and Lord, beloved of Upper Egypt",
        },
      ],
    },
    nebty: {
      codes: ["G39", "M17", "Y5", "N35", "A40A", "S29", "X1", "Q3", "U21", "N35", "C2B", "G17", "F26", "N35", "W24", "G43", "O1", "Z1", "M17", "I9", "D46", "D36", "Z1", "S29", "N35", "Z2"],
      mdc: "zA&1-i-mn:n-A40A-s-t:p-stp&n-C2B-m-F26:n-W24&w-pr\\70:1-i-f:d:a:4-s-n:Z2",
      transliteration: "",
    },
    golden: {
      codes: ["V30", "X1", "Z3", "U6", "M17", "M17", "R8A", "Z3", "R8", "X1", "D21", "X1", "H8", "A40", "Z3", "V30", "Z2", "W24", "Z1", "N16", "U7", "D21", "M17", "M4", "O49", "O49", "Z3"],
      mdc: "nb:t-?:?:?-Z3-mr-i-i-R8A-Z3-R8-t:r-t:H8-A40-Z3-nb:Z2-W24:1-N16:U7\\:r-i-rnp-O49:O49-Z3",
      transliteration: "",
    },
    prenomen: {
      codes: ["N5", "S29", "X1", "X1", "G43"],
      mdc: "ra-s-t:t-w",
      transliteration: "stwt-rꜤ",
      translation: "Progeny of Ra",
      sources: [
        { text: "Davies, The Temple of Hibis in el Khargeh Oasis (1953), III, pl. 48" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 220-221, 2:T1" },
      ],
      variants: [
        {
          codes: ["C2A", "C12A", "N36", "M17", "M17"],
          mdc: "C2A\\-C12A-N36-i-i",
          transliteration: "mry imn-rꜤ",
          sources: [
            { text: "Davies, The Temple of Hibis in el Khargeh Oasis (1953), III, pl. 45" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 220-221, 2:T2" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "N5", "Z1", "V31", "O4A", "D58", "X1", "O49", "O29v", "R8", "F12A", "D40", "F23", "N36"],
          mdc: "i-mn:n:ra*Z1-k:O4A-b-t:O49-aAv-nTr-F12A-D40:xpS-N36",
          transliteration: "mri͗-i͗mn-rꜤ nb-ḥbt nṯr-ꜤꜢ nḫt-ḫpš",
          translation: "Beloved of Amun-Ra, Lord of Hibis, the great god, the one strong of arm",
          sources: [
            { text: "Davies, The Temple of Hibis in el Khargeh Oasis (1953), III, pl. 9" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 220-221, 2:T3" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "O4A", "D58", "X1", "O49", "F12", "D21", "D40", "F23", "N36"],
          mdc: "i-mn:n-O4A&b-t:O49-wsr-r:D40-xpS:N36",
          transliteration: "mri͗-i͗mn [nb]-ḥbt wsr-nḫt-ḫpš",
          translation: "Beloved of Amun, [Lord of] Hibis, the one strong of arm",
          sources: [
            { text: "Davies, The Temple of Hibis in el Khargeh Oasis (1953), III, pl. 32" },
          ],
        },
        {
          codes: ["M17", "Y5", "N35", "O4A", "D58", "X1", "O49", "F12A", "S29", "D21", "D40", "F23", "N36"],
          mdc: "i-mn:n-O4A&b-t:O49-F12A-s-r:D40-xpS:N36",
          transliteration: "mri͗-i͗mn [nb]-ḥbt wsr-nḫt-ḫpš",
          translation: "Beloved of Amun, [Lord of] Hibis, the one strong of arm",
        },
      ],
    },
    nomen: {
      codes: ["W25", "U33", "E23", "M17", "M17", "T12", "M8A"],
      mdc: "ini-ti-E23-i-i-Ar-M8A",
      transliteration: "driwš",
      translation: "Darius",
      sources: [
        { text: "Davies, The Temple of Hibis in el Khargeh Oasis (1953), III, pl. 9, passim" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 220-221, 2:E6" },
      ],
    },
  },

  "xerxes-i": {
    nomen: {
      codes: ["Aa1", "M8A", "M17", "M17", "G1", "E23", "M8A"],
      mdc: "x-M8A-i-i-A-E23-M8A",
      transliteration: "ḫšri͗š",
      translation: "Xerxes",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 283i,l,n" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 220-221, 3:E1" },
      ],
    },
  },

  "artaxerxes-i": {
    nomen: {
      codes: ["G1", "N17", "Aa1", "M8A", "M8A", "S29"],
      mdc: "A:N17-x-M8A-M8A-s",
      transliteration: "Ꜥrtḫšsš",
      translation: "Artaxerxes",
      sources: [
        { text: "Hammamat rock inscription 144" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 283q" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 220-221, 4:E1" },
      ],
    },
  },

  amyrtaeus: {
    nomen: {
      codes: ["M17", "Y5", "N35", "M17", "A2", "D4", "D36", "O34"],
      mdc: "i-mn:n-i-A2-ir:a:z",
      transliteration: "imn-ir-di-s(w)",
      translation: "Amun is the one who created him",
    },
  },

  "neferites-i": {
    horus: {
      codes: ["O29v", "D36", "F34"],
      mdc: "aAv:a-ib",
      transliteration: "ꜤꜢ-i͗b",
      translation: "Strong-minded",
    },
    golden: {
      codes: ["R8A", "U21"],
      mdc: "nTrw-stp",
      transliteration: "stp-nṯrw",
      translation: "Divinely chosen",
    },
    prenomen: {
      codes: ["N5", "E10", "N35", "N36"],
      mdc: "ra-E10:n-nTrA:N36",
      transliteration: "bꜢ-n-rꜤ mri͗-nṯrw",
      translation: "The spirit of Ra, beloved of the Gods",
      sources: [
        { text: "Louvre, A 26 sphinx" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 224-225, 1:T1" },
      ],
    },
    nomen: {
      codes: ["N35", "G1", "Z4", "I9", "O29v", "Z7", "Z2", "T12"],
      mdc: "n:A&y-f:aAv:W*Z2-T12",
      transliteration: "nꜢy.f-ꜤꜢw-rwḏ",
      translation: "His greatness is flourishing",
      sources: [
        { text: "Louvre, A 26 sphinx" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 224-225, 1:E1" },
      ],
      variants: [
        {
          codes: ["N35", "T12", "M17", "I9", "O29v", "Z7", "T12"],
          mdc: "n:Ai-i-f:aAv-W-rwD",
          transliteration: "nꜢy.f-ꜤꜢw-rwḏ(w)",
          translation: "His greatness is flourishing",
          sources: [
            { text: "Edgar, Notes from my Inspectorate, ASAE 13 (1914): 278" },
          ],
        },
        {
          codes: ["N35", "G1", "M17", "M17", "I9", "O29v", "Z7", "T12", "Z2"],
          mdc: "n:G1*i*i-f:aAv-W*rwD:Z2",
          transliteration: "nꜢy.f-ꜤꜢw-rwḏ(w)",
          translation: "His greatness is flourishing",
          sources: [
            { text: "Studien zur altägyptischen Kultur 9, plate 3-4" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 224-225, 1:E3" },
          ],
        },
      ],
    },
  },

  akoris: {
    horus: {
      codes: ["O29v", "F34", "Z1", "N36", "N16", "N16"],
      mdc: "aAv:ib*Z1-N36:N16:N16",
      transliteration: "ꜤꜢ-i͗b mri͗-tꜢwi͗",
      translation: "Strong-minded and beloved of the Two Lands",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 284h" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 224-225, 3:H1" },
      ],
    },
    nebty: {
      codes: ["N29", "W24", "Z9", "D40"],
      mdc: "q*nw:Z9:D40",
      transliteration: "ḳnw",
      translation: "The brave one",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 284i" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 224-225, 3:N1" },
      ],
    },
    golden: {
      codes: ["S29", "R4", "X1", "Q3", "R8A"],
      mdc: "s-Htp:t*p-nTrw",
      transliteration: "stp-nṯrw",
      translation: "Who has satisfied the gods",
      sources: [
        { text: "Bakry, À propos d’un bloc portant le protocole et les cartouches du roi Achoris, ASAE 58 (1964): 1-2, pl. 1" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 224-225, 3:G1" },
      ],
    },
    prenomen: {
      codes: ["N5", "C10A", "W9"],
      mdc: "ra-C10A-W9",
      transliteration: "ḫnm-mꜢꜤt-rꜤ",
      translation: "Who embraces the Maat of Ra",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 284f+i" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 224-225, 3:T1" },
      ],
      variants: [
        {
          codes: ["N5", "W9", "C4", "U21", "N35"],
          mdc: "ra-W9-Aa11v-C4-stp:n",
          transliteration: "ḫnm-mꜢꜤt-rꜤ stp-n-ẖmnw",
          translation: "Who embraces the Maat of Ra, chosen by Khnum",
          sources: [
            { text: "Louvre A 27 sphinx" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 224-225, 3:T3" },
          ],
        },
        {
          codes: ["N5", "W9", "C10A", "C4", "U21", "N35"],
          mdc: "ra-W9-C10A-C4-stp:n",
          transliteration: "ḫnm-mꜢꜤt-rꜤ stp-n-ẖmnw",
          translation: "Who embraces the Maat of Ra, chosen by Khnum",
          sources: [
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 224-225, 3:T4" },
          ],
        },
        {
          codes: ["N5", "W9", "C10A", "C95A", "U21", "N35"],
          mdc: "ra-W9-C10A\\-C95A-stp:n",
          transliteration: "ḫnm-mꜢꜤt-rꜤ stp.n-i͗nḥr",
          translation: "Who embraces the Maat of Ra, chosen by Anhur",
        },
      ],
    },
    nomen: {
      codes: ["O4", "W11", "G1", "E23"],
      mdc: "h-g-A-rw",
      transliteration: "hgr",
      translation: "Hagar",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 284i" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 224-225, 3:E3" },
      ],
      variants: [
        {
          codes: ["O4", "V31", "E23", "Z1"],
          mdc: "h:k-rw:Z1",
          transliteration: "hkr",
          translation: "Hakor",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 284g" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 224-225, 3:E4" },
          ],
        },
        {
          codes: ["O4", "V31", "D21"],
          mdc: "h-k:r",
          transliteration: "hkr",
          translation: "Hakor",
        },
      ],
    },
  },

  psammuthis: {
    horus: {
      codes: ["O29v", "F9", "F9", "M30", "O50", "Z1"],
      mdc: "aAv:F9*F9-M30-O50:3",
      transliteration: "ꜤꜢ-pḥti͗ mꜤr-zpw",
      translation: "Great of strength and successful of occasions",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 259b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 224-225, 2:H1" },
      ],
    },
    prenomen: {
      codes: ["N5", "F12", "S29", "Q3", "X1", "V28", "U21", "N35"],
      mdc: "ra-wsr-s-p:t-H-stp:n",
      transliteration: "wsr-rꜤ stp.n-ptḥ",
      translation: "The powerful one of Ra, chosen by Ptah",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 259b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 224-225, 2:T1" },
      ],
    },
    nomen: {
      codes: ["Q3", "A17", "X1", "G15"],
      mdc: "p-A17-t&G15",
      transliteration: "pꜢ-šri͗-n-mwt",
      translation: "Child of Mut",
    },
  },

  "nectanebo-i": {
    horus: {
      codes: ["V13", "Z1", "D36"],
      mdc: "T:U2a-Z1:a",
      transliteration: "ṯmꜢ-Ꜥ",
      translation: "The sturdy-armed one",
      sources: [
        { text: "ASAE 6: 122" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 226-227, 1:H1" },
      ],
      variants: [
        {
          codes: ["V13", "U2", "D36"],
          mdc: "T:U2-a",
          transliteration: "tmꜢ-Ꜥ",
          translation: "The sturdy-armed one",
          sources: [
            { text: "ZÄS 38: 127" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 226-227, 1:H2" },
          ],
        },
      ],
    },
    nebty: {
      codes: ["S29", "Y5", "Aa1", "U22", "M127"],
      mdc: "s-mn:x*mnx-M127-waD",
      transliteration: "smnḫ-tꜢwi͗",
      translation: "Who has made the Two Lands potent",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 286d" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 226-227, 1:N1" },
      ],
    },
    golden: {
      codes: ["D4", "X1", "Z1", "N36", "R8A"],
      mdc: "ir:t*Z1:N36-R8A",
      transliteration: "i͗ri͗-mrt-nṯrw",
      translation: "Who has accomplished what the Gods desired",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 286f" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 226-227, 1:G1" },
      ],
    },
    prenomen: {
      codes: ["N5", "L1", "D28"],
      mdc: "ra-xpr-kA",
      transliteration: "ḫpr-kꜢ-rꜤ",
      translation: "The (very) manifestation of the ka of Ra",
    },
    nomen: {
      codes: ["N35", "Aa1", "X1", "D40", "E23", "I9"],
      mdc: "n:x*t:D40-E23:f",
      transliteration: "nḫt-nb.f",
      translation: "The strong one of his lord",
      sources: [
        { text: "ZÄS 38: 127" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 226-227, 1:E1" },
      ],
      variants: [
        {
          codes: ["D40", "V30", "Z1", "I9"],
          mdc: "D40:nb-Z1:f",
          transliteration: "nḫt.nb.f",
          translation: "The strong one of his lord",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 285a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 226-227, 1:E7" },
          ],
        },
      ],
    },
  },

  "nectanebo-ii": {
    horus: {
      codes: ["U6", "N17", "N17"],
      mdc: "mr:N17:N17",
      transliteration: "mri͗-tꜢwi͗",
      translation: "Beloved of the Two Lands",
      sources: [
        { text: "Quibell, Excavations at Saqqara 1907-1908, III, pl. 52" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 287d" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 228-229, 3:H1" },
      ],
      variants: [
        {
          codes: ["U7", "N17", "N17", "G20", "V31", "I6", "X1", "O49"],
          mdc: "U7:N17:N17-G20-k:km:t*O49",
          transliteration: "mri͗-tꜢwi͗ mk-kmt",
          translation: "Beloved of the Two Lands and guardian of Egypt",
          sources: [
            { text: "Offering table from Abu Roash (Cairo Museum CG 23115, JE 30581)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 228-229, 3:H3" },
          ],
        },
        {
          codes: ["N36", "N17", "N17", "Aa15", "D36", "V31", "I6", "O49"],
          mdc: "-N36:N17:N17-Aa15:a:k-km:O49",
          transliteration: "mri͗-tꜢwi͗ mk-kmt",
          translation: "Beloved of the Two Lands and guardian of Egypt",
        },
      ],
    },
    nebty: {
      codes: ["S29", "O4", "D21", "F34", "Z1", "R8A"],
      mdc: "s-h:r-ib:1-nTrw",
      transliteration: "shrw-i͗b-nṯrw",
      translation: "The one who has pleased the heart of Gods",
      sources: [
        { text: "Quibell, Excavations at Saqqara 1907-1908, III, pl. 52" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 228-229, 3:N1" },
      ],
      variants: [
        {
          codes: ["O34", "O4", "D21", "F34", "Z1", "R8A"],
          mdc: "z:h:r-ib:1-nTrw",
          transliteration: "shrw-i͗b-nṯrw",
          translation: "The one who has pleased the Gods' heart",
          sources: [
            { text: "Naville, The Mound of the Jew (1890), plate 2a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 228-229, 3:N2" },
          ],
        },
        {
          codes: ["S29", "O4", "D21", "F34", "Z1", "R8", "Z3", "X1", "V31", "N35", "D54", "N25", "X1", "Z2"],
          mdc: "s-h:r-ib:1-R8-Z3-t:k:n-D54-N25:t:Z2",
          transliteration: "shrw-i͗b-nṯrw tkn-ḫꜢswt",
          translation: "The one who has pleased the gods' minds by attacking the foreign lands",
        },
      ],
    },
    golden: {
      codes: ["S29", "Y5", "N35", "U32", "O4", "Q3", "G43", "Y1v", "Z3"],
      mdc: "s-mn:n-U32-h:p-w-Y1v-Z3",
      transliteration: "smn-hpw",
      translation: "The creator of laws",
      sources: [
        { text: "Quibell, Excavations at Saqqara 1907-1908, III, pl. 52" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 228-229, 3:G1" },
      ],
      variants: [
        {
          codes: ["S29", "Y5", "N35", "O4", "Q3", "Y1", "Z2", "V28", "A24", "T10", "Z2", "Z2", "Z2"],
          mdc: "s-mn:n-h*p:Y1:Z2-H-A24-pD:Z2-Z2:Z2",
          transliteration: "smn-hpw ḥri͗-pḏt-9",
          translation: "The establisher of laws, who has struck down the Nine Bows",
        },
      ],
    },
    prenomen: {
      codes: ["C2", "C12", "S29", "V28", "F34", "Z1", "U21", "N35"],
      mdc: "C2-C12-s-H-ib:Z1-stp:n-jmn",
      transliteration: "snḏm-i͗b-rꜤ stp.n-i͗mn",
      translation: "Pleasing to the Heart is Ra, chosen of Amun",
      sources: [
        { text: "Lefebvre, Égypte gréco-romaine, IV, ASAE 13 (1914): 222" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 228-229, 3:T1" },
      ],
      variants: [
        {
          codes: ["C2A", "C9", "S29", "M29", "F34", "Z1", "U21", "N35"],
          mdc: "C2A\\-C9-s-nDm-ib:Z1-stp:n",
          transliteration: "snḏm-ib-rꜤ stp.n-ḥtḥr",
          translation: "Pleasing to the Heart is Ra, chosen of Hathor",
        },
      ],
    },
    nomen: {
      codes: ["D40", "G5", "O49", "W4"],
      mdc: "D40-G5&O49-W4",
      transliteration: "nḫt-ḥr-ḥbyt",
      translation: "The strong one of Horus of Hebit",
      sources: [
        { text: "Daressy, Notes et remarques, RecTrav 16 (1894): 126" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 228-229, 3:E1" },
      ],
      variants: [
        {
          codes: ["G5", "N35", "D40", "W4A", "C95", "N36"],
          mdc: "G5&1-n:D40-W4A-C95-N36",
          transliteration: "nḫt-ḥr-ḥbyt mri͗-i͗nḥr",
          translation: "The strong one of Horus of Hebit, beloved of Anhur",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 43a (column 3)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 228-229, 3:E2" },
          ],
        },
        {
          codes: ["C9", "C95A", "H8", "N36", "D40", "G5", "W4", "X1", "O49"],
          mdc: "C9\\-C95A-H8:N36:D40-G5&W4-t:O49",
          transliteration: "nḫt-ḥr-ḥbyt mri͗-i͗nḥr zꜢ-ḥtḥr",
          translation: "The strong one of Horus of Hebit, beloved by Horus, son of Hathor",
          sources: [
            { text: "Lefebvre, Égypte gréco-romaine, IV, ASAE 13 (1914): 222" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 228-229, 3:E4" },
          ],
        },
        {
          codes: ["H8", "C9", "U6", "D40", "G5", "W4", "X1", "O49"],
          mdc: "H8-C9-mr-D40-G5&W4-t:O49",
          transliteration: "nḫt-ḥr-ḥbyt zꜢ-mri͗-ḥtḥr",
          translation: "The strong one of Horus of Hebit, beloved son of Hathor",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, III, 287b" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 228-229, 3:E5" },
          ],
        },
        {
          codes: ["C164", "H8", "C95A", "N36", "D40", "G5", "W4"],
          mdc: "C164\\-H8-C95A-N36:D40-G5&W4",
          transliteration: "nḫt-ḥr-ḥbyt mri͗-i͗nḥr zꜢ-bꜢstt",
          translation: "The strong one of Horus of Hebit, beloved of Anhur, son of Bastet",
        },
      ],
    },
  },

  "darius-iii": {
    nomen: {
      codes: ["W25", "V13", "D21", "G43", "M8A"],
      mdc: "ini-T:r-w-M8A",
      transliteration: "dri͗wš",
      translation: "Darius",
    },
  },

  "alexander-the-great": {
    horus: {
      codes: ["G20", "V31", "I6", "O49"],
      mdc: "G20-k:km*O49",
      transliteration: "mk-kmt",
      translation: "The guardian of Egypt",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 4c" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 232-233, 1:H1" },
      ],
      variants: [
        {
          codes: ["N37", "S38", "N29", "N35", "W24", "D40"],
          mdc: "S-HqA-q:n:nw-D40",
          transliteration: "ḥḳꜢ-ḳni͗",
          translation: "The brave ruler",
          sources: [
            { text: "Karnak F 377 (room XXIX)" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 3a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 232-233, 1:H2" },
          ],
        },
        {
          codes: ["S38", "N29", "N35", "W24", "D40", "X1", "V31", "N35", "D54", "N25", "N25", "N25"],
          mdc: "HqA-q:n:nw:D40-t:k:n:D54-N25:N25:N25",
          transliteration: "ḥḳꜢ-ḳni͗ tkn-ḫꜢswt",
          translation: "The brave ruler who has attacked foreign lands",
          sources: [
            { text: "Sanctuary of Alexander facade at Akhmenu Hall in Karnak" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text III, 32" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 232-233, 1:H3" },
          ],
        },
        {
          codes: ["S38", "N29", "S38", "S38", "N29", "W24", "N17", "N34", "D21", "I9"],
          mdc: "HqA-q-HqA-HqA-q-N33AV-nw-N33AV-N17:N34-r:f",
          transliteration: "ḥḳꜢ ḥḳꜢw nw tꜢ (r) ḏr=f",
          translation: "The ruler of the rulers of the entire land",
          sources: [
            { text: "Pedestal from the temple of Alexander at the Bahariya Oasis" },
            { text: "Bosch-Puche, The Egyptian Royal Titulary of Alexander, JEA, 99, 134-136" },
          ],
        },
        {
          codes: ["V13", "U1", "D36"],
          mdc: "T:mA-a",
          transliteration: "ṯmꜢ-Ꜥ",
          translation: "The sturdy-armed one",
        },
      ],
    },
    nebty: {
      codes: ["E23", "G36", "D21", "F9", "F9", "V15", "N25", "N25", "N33A", "N17", "N17", "N33A", "N25", "N25", "N33A"],
      mdc: "E23-wr:r-F9:F9-V15-N25:N25:N33A-N17:N17:N33A-N25:N25:N33A",
      transliteration: "mꜢi͗ wr-pḥty iṯ ḏww tꜢw ḫꜢswt",
      translation: "The lion, great of might, who takes possession of mountains, lands, and deserts",
    },
    golden: {
      codes: ["E1", "N35", "M17", "G43", "Aa1", "D40", "N29", "X1", "D58", "D10", "S38", "M14", "N35A", "V9", "Z1A", "M17", "X1", "N35"],
      mdc: "E1:n-i-w&x-D40-q:t-b-D10-HqA-M14-N35A-V9:Z1A-i-t:n:/",
      transliteration: "kꜢ [nḫt] ḫwi BꜢḳ[t] ḥḳꜢ wꜢḏ(-wr) šnw n itn",
      translation: "The (strong) bull who protects Egypt, the ruler of the sea and of what the sun encircles",
    },
    prenomen: {
      codes: ["C2", "C12", "U21", "N35", "N36"],
      mdc: "C2\\-C12-stp:n:N36",
      transliteration: "stp.n-rꜤ mri͗-i͗mn",
      translation: "Chosen by Ra and beloved of Amun",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 4b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 232-233, 1:T1" },
      ],
    },
    nomen: {
      codes: ["G1", "E23", "V31", "O34", "M17", "N35", "D46", "D21", "O34"],
      mdc: "A-l:k:z-i-n:d:r:z",
      transliteration: "Ꜥlksindrs",
      translation: "Alexandros (Alexander)",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 4c" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 232-233, 1:E1" },
      ],
      variants: [
        {
          codes: ["G1", "E23", "V31", "O34", "N35", "D46", "D21", "O34"],
          mdc: "A-l:k:z-n:d:r:z",
          transliteration: "Ꜥlksndrs",
          translation: "Alexandros (Alexander)",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 3a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 232-233, 1:E2" },
          ],
        },
      ],
    },
  },

  "alexander-iv": {
    horus: {
      codes: ["V28", "E34", "N35", "A17", "F12", "F9", "F9"],
      mdc: "H-wn:n-A17-wsr-F9:F9",
      transliteration: "ḥwnw wsr-pḥti͗",
      translation: "The youthful one, powerful of strength",
      sources: [
        { text: "Edgar, Notes from the Delta, ASAE 11 (1911): 92" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 232-233, 3:H1" },
      ],
    },
    nebty: {
      codes: ["R8A", "N36", "D21", "D36", "N35", "I9", "O44", "X1", "Z1", "N35", "X1", "I9", "I9"],
      mdc: "nTrw:N36-r:a:n:f-O44-t:Z1-n:t:f:f",
      transliteration: "mri͗-nṯrw rḏ-n.f-i͗Ꜣwt-n-i͗t.f",
      translation: "Beloved of the gods, to whom the office of his father was given",
    },
    golden: {
      codes: ["S38", "N29", "D40", "Aa15", "N16", "M36", "I9"],
      mdc: "HqA-q:D40:Aa15-tA:M36:f",
      transliteration: "ḥḳꜢ-nḫt-m-tꜢ-r-ḏr.f",
      translation: "Victorious ruler in the entire land",
    },
    prenomen: {
      codes: ["C12A", "C2A", "V28", "D36", "D36", "U21", "N35", "F34", "Z1"],
      mdc: "C12A\\-C2A-H-a:a-stp:n-ib:1",
      transliteration: "ḥꜤꜤ-i͗b-rꜤ stp.n-imn",
      translation: "Who (continually) rejoices over the mind of Ra, chosen by Amun",
      sources: [
        { text: "Mariette, Monuments Divers, II, plate 14" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 232-233, 3:T2" },
      ],
      variants: [
        {
          codes: ["N5", "A28", "F34", "M17", "Y5", "N35", "U21", "N35"],
          mdc: "ra-A28-ib-i-mn:n-stp:n",
          transliteration: "ḥꜤꜤ-i͗b-rꜤ stp.n-i͗mn",
          translation: "Who (continually) rejoices over the mind of Ra, chosen by Amun",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 1a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 232-233, 3:T1" },
          ],
        },
        {
          codes: ["C2A", "C12A", "A137", "F34", "Z1", "U21", "N35"],
          mdc: "C2A\\-C12A-A137-ib:1-stp:n",
          transliteration: "ḥꜤꜤ-i͗b-rꜤ stp.n-i͗mn",
          translation: "Who (continually) rejoices over the mind of Ra, chosen by Amun",
        },
      ],
    },
    nomen: {
      codes: ["G1", "E23", "V31", "O34", "M17", "N35", "D46", "D21", "O34"],
      mdc: "A-l:k:z-i-n:d:r:z",
      transliteration: "Ꜥlksindrs",
      translation: "Alexandros",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 1a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 232-233, 3:E1" },
      ],
      variants: [
        {
          codes: ["M17", "E23", "V31", "O34", "M17", "D46", "D21", "O34"],
          mdc: "i-l:k:z-i-d:r:z",
          transliteration: "Ꜥlksi(n)drs",
          translation: "Alexandros",
          sources: [
            { text: "Mariette, Monuments Divers, II, plate 14" },
          ],
        },
        {
          codes: ["G1", "D21", "V31", "O34", "M17", "N35", "X1", "D21", "O34"],
          mdc: "A-r:k:z-i-n:t:r:z",
          transliteration: "Ꜥrksintrs",
          translation: "Alexandros",
        },
      ],
    },
  },

  "ptolemy-i": {
    horus: {
      codes: ["G36", "D21", "F9", "F9", "M23", "A43E", "N29", "W24", "N35", "D36"],
      mdc: "wr:r-F9:F9-sw-A43E-q*nw:n:a",
      transliteration: "wr-pḥti nsw-ḳni͗",
      translation: "Great of strength and brave king",
    },
    nebty: {
      codes: ["V15", "D40", "U31", "S42", "U31", "N29", "S38", "D46", "E23", "D40"],
      mdc: "V15:D40-U31\\R90-sxm-U31\\R90-q-HqA-d:l:D40",
      transliteration: "i͗ṯi͗-m-sḫm ḥḳꜢ-ṯl",
      translation: "Who has seized with (his own) power, the ruler of Sile",
    },
    prenomen: {
      codes: ["C2A", "C12A", "U21", "N35", "N36"],
      mdc: "C2A-C12A-stp:n-N36",
      transliteration: "stp.n-rꜤ mri͗-i͗mn",
      translation: "Chosen by Ra and beloved of Amun",
      sources: [
        { text: "CG 22180" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 234-235, 1:T1" },
      ],
    },
    nomen: {
      codes: ["Q3", "X1", "V4", "E23", "Aa15", "M17", "M17", "S29"],
      mdc: "p:t-wA-l:M-i-i-s",
      transliteration: "ptlmys",
      translation: "Ptolemaios",
      sources: [
        { text: "Passim" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 234-235, 1:E1" },
      ],
      variants: [
        {
          codes: ["Q3", "X1", "V4", "E23", "Aa15", "O34"],
          mdc: "p:t-wA-l:M:z",
          transliteration: "ptlmis",
          translation: "Ptolemaios",
        },
      ],
    },
  },

  "ptolemy-ii": {
    horus: {
      codes: ["V28", "E34", "N35", "W24", "Z7", "A17", "N29", "Z7", "W24", "D40"],
      mdc: "H-wn:n-nw:W-A17-q*W*nw:D40",
      transliteration: "ḥwnw-ḳni",
      translation: "The brave youth",
      sources: [
        { text: "Qus monolith" },
        { text: "Champollion, Monuments de l'Égypte et de la Nubie, notices descriptives, II, 293-4" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 7g; Text IV 257-8" },
      ],
      variants: [
        {
          codes: ["V28", "E34", "Z7", "W24", "A17", "N29", "W24", "D40"],
          mdc: "H-wn:W*nw-A17-q*nw:D40",
          transliteration: "ḥwnw-ẖni͗",
          translation: "The brave youth",
          sources: [
            { text: "Temple of Isis, Philae (room K 51)" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 7c; Text IV, 160" },
          ],
        },
        {
          codes: ["V28", "E34", "N35", "A17", "N29", "W24", "Z9", "D40"],
          mdc: "H-wn:n-A17-q:nw-Z9^^^D40",
          transliteration: "ḥwnw-ẖni͗",
          translation: "The brave youth",
          sources: [
            { text: "Naville, The store-city of Pithom, plate 9:1" },
            { text: "Urkunden des Ägyptische Alterthums , II, 84:6" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 234-235, 2:H" },
          ],
        },
        {
          codes: ["V28", "E34", "N35", "W24", "Z7", "A17", "N29", "W24", "Z9", "D40"],
          mdc: "H-wn:n-nw:W-A17-q:nw-Z9^^^D40",
          transliteration: "ḥwnw-ẖni͗",
          translation: "The brave youth",
          sources: [
            { text: "Mariette, Monument divers recueillis en Égypte et en Nubie (1872), II, pl. 45" },
          ],
        },
        {
          codes: ["V28", "E34", "N35", "W24", "Z7", "A17", "N29", "Z1", "N35", "Z9", "D40"],
          mdc: "H-wn:n-nw:W-A17-q*1:n:Z9^^^D40",
          transliteration: "ḥwnw-ẖni͗",
          translation: "The brave youth",
        },
      ],
    },
    nebty: {
      codes: ["G36", "D21", "F9", "F9"],
      mdc: "wr:r-F9:F9",
      transliteration: "wr-pḥti͗",
      translation: "Great of strength",
      sources: [
        { text: "Temple of Isis, Philae (room K 51)" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 7c; Text IV, 160" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 234-235, 2:N" },
      ],
      variants: [
        {
          codes: ["G36", "D21", "F9", "F9", "D40"],
          mdc: "wr:r-F9*F9:D40",
          transliteration: "wr-pḥti",
          translation: "Great of strength",
        },
      ],
    },
    golden: {
      codes: ["S29", "N28", "D36", "N35", "O34", "X1", "I9"],
      mdc: "s-xa:a-n:z:t:f",
      transliteration: "šḫꜤi͗-n-sw i͗t.f",
      translation: "Whose father enthroned him",
      sources: [
        { text: "Qus monolith" },
        { text: "Champollion, Monuments de l'Égypte et de la Nubie, notices descriptives, II, 293-4" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 7g; Text IV 257-8" },
      ],
      variants: [
        {
          codes: ["O34", "N28", "O34", "X1", "I9", "I9"],
          mdc: "z:xa:z-t:f:f",
          transliteration: "sḫꜤi͗-sw i͗t.f",
          translation: "Whose father enthroned him",
          sources: [
            { text: "Temple of Isis, Philae (room K 51)" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 7c; Text IV, 160" },
          ],
        },
        {
          codes: ["S29", "N28", "D36", "N35", "O34", "M17", "X1", "I9", "Z1", "I9"],
          mdc: "s-xa:a:n:z-i-t:f:Z1:f",
          transliteration: "sḫꜤi͗-sw i͗t.f",
          translation: "Whose father enthroned him",
          sources: [
            { text: "Brugsch, Thesaurus Inscriptionum Aegyptiacarum (1884), IV, 630" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 234-235, 2:G" },
          ],
        },
        {
          codes: ["O34", "N28", "D36", "N35", "M17", "O34", "X1", "I9", "Z1", "I9"],
          mdc: "z:xa:a:n-i-z:t:f:Z1:f",
          transliteration: "sḫꜤi͗-sw i͗t.f",
          translation: "Whose father enthroned him",
        },
      ],
    },
    prenomen: {
      codes: ["N5", "F12", "D28", "Z1", "M17", "Y5", "N35", "N36"],
      mdc: "ra-wsr-kA:Z1-i-mn:n:N36",
      transliteration: "wsr-kꜢ-rꜤ mri͗-i͗mn",
      translation: "The strong one of the ka of Ra, beloved of Amun",
      sources: [
        { text: "Qus monolith" },
        { text: "Champollion, Monuments de l'Égypte et de la Nubie, notices descriptives, II, 293-4" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 7g; Text IV 257-8" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 234-235, 2:T3" },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "N36", "F12", "N5", "D28"],
      mdc: "i-mn:n:N36-wsr-ra:kA",
      transliteration: "wsr-kꜢ-rꜤ mri͗-i͗mn",
      translation: "The strong one of the ka of Ra, beloved of Amun",
      sources: [
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 234-235, 2:T4" },
      ],
      variants: [
        {
          codes: ["Q3", "X1", "V4", "E23", "Aa15", "M17", "M17", "S29"],
          mdc: "p:t-wA-l:M-i-i-s",
          transliteration: "ptwlmi͗s",
          translation: "Ptolemaios",
        },
      ],
    },
  },

  "ptolemy-iii": {
    horus: {
      codes: ["V28", "V31", "W24", "Z7", "R8", "H4", "Z2", "D2", "Z1", "I9"],
      mdc: "H-k:nw*W-nTr-H4:Z2-D2*Z1:f",
      transliteration: "ḥkn-nṯrw-rmṯ-ḥr.f",
      translation: "The one over whom gods and people have rejoiced",
      sources: [
        { text: "Temple of Khonsu propylon at Karnak" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 9a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 234-235, 3:H1" },
      ],
      variants: [
        {
          codes: ["V28", "V31", "W24", "R8A", "H4", "Z1", "D2", "Z1", "I9", "Aa15", "O42B", "A9", "M23", "X1", "M17", "M17", "G20", "X1", "I9", "Z1", "I9"],
          mdc: "H-k:nw-nTrw-H4:3-D2:Z1-f:Aa15-O42B-A9-sw:t-i-i-G20-t:f:Z1:f",
          transliteration: "ḥkn-nṯrw-rmṯ-ḥr.f m-šsp.f-nsyt-m-Ꜥ-i͗t.f",
          translation: "The one over whom gods and people have rejoiced when he has received the kingship from his father's hand",
          sources: [
            { text: "Urkunden des Ägyptische Alterthums , II, 121:10-11" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 234-235, 3:H2" },
          ],
        },
        {
          codes: ["V28", "V31", "W24", "Z7", "R8A", "H4", "Z1", "D2", "Z1", "I9", "G17", "O42B", "Q3", "D40", "I9", "M23", "X1", "M17", "M17", "X1", "Z1", "G20", "X1", "I9", "Z1", "I9"],
          mdc: "H-k:nw*W-nTrw-H4:3-D2*Z1:f-m-O42B:p-D40:f-sw-t-i-i-t:3-G20-t:f:Z1:f",
          transliteration: "ḥkn-nṯrw-rmṯ-ḥr.f m-šsp.f-nsyt-m-Ꜥ-i͗t.f",
          translation: "The one over whom gods and people have rejoiced when he has received the kingship from his father's hand",
          sources: [
            { text: "Karnak debris" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text III, 40" },
          ],
        },
        {
          codes: ["V28", "V31", "W24", "Z3", "R8", "Z1", "D2", "Z1", "I9", "Aa15", "O42B", "Z9", "Q3", "M23", "X1", "M17", "M17", "G20", "X1", "I9", "Z1", "I9"],
          mdc: "H-k:nw-Z3-nTr-nr:3->-D2*Z1:f:M-O42B-Z9:p-v/-sw-t-i-i-G20-t:f:Z1:f",
          transliteration: "ḥkn-nṯrw-rmṯ-ḥr.f m-šsp.f-nsyt-m-Ꜥ-i͗t.f",
          translation: "The one over whom gods and people have rejoiced when he has received the kingship from his father's hand",
        },
      ],
    },
    nebty: {
      codes: ["N29", "W24", "N35", "D40", "Aa27D", "W24", "X1", "Z3", "R8", "O36", "U22", "N35", "N17", "U7", "D21", "O49", "O5U"],
      mdc: "q*nw:n:D40-Aa27D-nw:t-Z3-nTr-O36-mnx-n:N17:U7-r:O49*O5U",
      transliteration: "ḳn nḏti͗-nṯrw i͗nb-mnḫ-n-tꜢmri͗",
      translation: "The brave one who has protected the gods, a potent wall for The Beloved Land",
    },
    golden: {
      codes: ["G36", "D21", "F9", "F9", "D4", "G25", "Aa1", "V30", "O23", "Z3", "Q3", "X1", "V28", "C19A", "C18C", "W19", "M17", "U33", "M17", "M17", "A311", "W19", "N6", "Z1"],
      mdc: "wr:r-F9*F9:ir-3&Ax&x:nb-O23-Z3-p:t-H-C19A-C18C-mi-i-U33-i-i-A311-mi-N6:Z1",
      transliteration: "wr-pḥti͗ i͗ri͗-Ꜣḫt nb-ḥꜢbw-sd-mi͗-ptḥ-tꜢ-ṯnn i͗ty-mi͗-rꜤ",
      translation: "Whose might is great, doing that which is beneficial, Lord of the years of Jubilee like Ptah Ta-Tjenen, a ruler like Ra",
    },
    prenomen: {
      codes: ["R8", "R8", "F44", "N35", "C12", "C2", "U21", "N35", "S42", "S34", "S3"],
      mdc: "T22A60&nTr-T22A60&nTr-F44:n-C12-C2-stp:n-sxm-anx-S3",
      transliteration: "iwꜤ-n-nṯrwi͗-snwi͗ stp.n-rꜤ sḫm-Ꜥnḫ-n-i͗mn",
      translation: "The heir of the two divine brothers, chosen by Ra, the living image of Amun",
      sources: [
        { text: "Temple of Khonsu propylon at Karnak" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 9a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 236-237, 3:T1" },
      ],
    },
    nomen: {
      codes: ["Q3", "X1", "V4", "E23", "Aa15", "M17", "M17", "S29", "S34", "I10", "X1", "N16", "Q3", "X1", "V28", "U6"],
      mdc: "p:t-wA-l:M-i-i-s-anx-D&(t:N16)-p:t-H-mr",
      transliteration: "ptwlmi͗s Ꜥnḫ-ḏt mri͗-ptḥ",
      translation: "Ptolemy, who lives eternally, beloved of Ptah",
      sources: [
        { text: "Temple of Khonsu propylon at Karnak" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 9a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 236-237, 3:E1" },
      ],
    },
  },

  "ptolemy-iv": {
    horus: {
      codes: ["V28", "E34", "W24", "Z7", "A17", "N29", "W24", "Z9", "D40", "S29", "N28", "D36", "N35", "O34", "X1", "I9", "Q3", "I9"],
      mdc: "H-wn:nw*W-A17-q*nw:Z9:D40-s-xa:a:n:z-t:f:p:f",
      transliteration: "ḥnw-ḳni͗ sḫꜤi͗.n-sw-i͗t.f",
      translation: "The strong youth whose father has allowed him to appear",
      sources: [
        { text: "Deir el-Medina temple" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 16a" },
      ],
    },
    nebty: {
      codes: ["G36", "D21", "F9", "F9", "U22", "D2", "Aa1", "D21", "R8", "Z2", "V30", "Aa27D", "X1", "Z4", "A40", "N35", "N8", "A1", "Z2"],
      mdc: "wr:r-F9:F9-mnx:D2-x:r-nTr-Z2:nb-Aa27D-t*y:A40-n:N8-A1:Z2",
      transliteration: "wr-pḥti͗ mnḫ-i͗b-ḫr-nṯrw-nbw nḏti͗-n-ḥnmmt",
      translation: "Whose might is great, whose heart is beneficial with all the Gods, who is the savior of mankind",
    },
    golden: {
      codes: ["O34", "U29A", "D10", "X1", "O49", "O34", "N5", "T5", "O71", "O71", "O71", "O34", "U32", "O4", "Q3", "H27", "Z1", "G191", "O29v", "O29v", "W19", "V30", "O23P", "Z3", "Q3", "X1", "V28", "C18C", "U7", "A311", "N6", "Z1", "G17"],
      mdc: "z:U29A-D10:t*O49-z:ra*T5-O71-O71-O71-z:U32*(h*p:H27:3)-G191-aAv-aAv-mi-nb:O23P-Z3-p:t-H-C18C:U7-A311-N6:1-m",
      transliteration: "swḏꜢ-bꜢḳt sḥḏ-gsw-prw smn-hpw-mi͗ ḏḥwti-ꜤꜢ-ꜤꜢ nb-ḥbw-sd-mi͗-ptḥ-tꜢ-ṯnn i͗ty-mi͗-rꜤ",
      translation: "Who has kept Baqet safe by illuminating the temples and establishing laws like the twice-great Thoth, possessor of Sed festivals like Ptah Tatenen and a sovereign like Ra",
    },
    prenomen: {
      codes: ["U22", "R8", "U22", "R8", "F44", "N35", "Q3", "X1", "V28", "U21", "N35", "S3", "D28", "F12", "C12", "C2", "S42", "S34"],
      mdc: "mnx*nTr-mnx*nTr-F44:n-p:t-H-stp:n-N-kA*wsr-C12\\-C2-sxm-anx",
      transliteration: "i͗wꜤ-n-nṯrwi͗-mnḫwi͗ stp.n-ptḥ wsr-kꜢ-rꜤ sḫm-Ꜥnḫ-n-i͗mn",
      translation: "The heir of the two potent gods, chosen by Ptah, the strong one of the ka of Ra, the living image of Amun",
      sources: [
        { text: "Karnak monolithic temple remains" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 15c" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 236-237, 4:T" },
      ],
    },
    nomen: {
      codes: ["Q3", "X1", "V4", "E23", "Aa15", "M17", "M17", "S29", "S34", "I10", "X1", "N17", "Q1", "X1", "U6"],
      mdc: "p:t-wA-l:M-i-i-s-anx-D&&&(t:N17)-st:t-mr",
      transliteration: "ptwlmi͗s Ꜥnḫ-ḏt mri-Ꜣst",
      translation: "Ptolemy, living forever, beloved of Isis",
    },
  },

  "ptolemy-v": {
    horus: {
      codes: ["V28", "E34", "N35", "W24", "Z7", "A17", "N28", "D36", "Z7", "Z4", "Aa15", "M23", "A43B", "D2", "Z1", "Q1", "X1", "O1", "X1", "I9", "Z1", "I9"],
      mdc: "H-wn:n-nw:W-A17-xa:a:W*Z4-Aa15:sw*A43B-D2:Z1-Q1-t:O1-t:f:Z1:f",
      transliteration: "ḥwnw-ḫꜤi͗-m-nsw-ḥr-st-i͗t.f",
      translation: "The youth who has appeared as king on his father's throne",
    },
    nebty: {
      codes: ["G36", "D21", "F9", "F9", "Z9", "D40", "S29", "U32", "M13", "M127", "S29", "F35", "N16A", "O5", "X1", "O49", "U22", "F34", "Z1", "Aa1", "D21", "R8", "R8", "R8"],
      mdc: "wr:r-F9*F9:Z9^^^D40-s-U32-wAD-M127-s-nfr-N16A:O5*(t:O49)-mnx-ib:1-x:r-nTr&1-nTr&1-nTr&1",
      transliteration: "wr-pḥti͗ smn-tꜢwi͗ snfr-tꜢmri͗ mnḥ-i͗b-ḫr-nṯrw",
      translation: "The one great of strength, who has established the Two Lands and made Ta-mery perfect (by) being efficacious before the gods",
    },
    golden: {
      codes: ["M13", "S34", "N35", "N8", "G17", "A1", "Z2A", "V30", "O23", "W19", "M17", "Q3", "X1", "V28", "C18C", "M17", "U33", "M17", "M17", "A311", "N6", "Z1", "W19", "M17", "M17"],
      mdc: "wAD*anx:n-N8-m-A1-Z2A-nb:O23-mi-i-p:t-H-C18C-i-U33-i-i-A311-N6:Z1-mi-i-i",
      transliteration: "wꜢḏ-Ꜥnḫ-n-ḥnmmt nb-ḥbw-sd-mi͗-ptḥ i͗ty-mi͗-rꜤ",
      translation: "The one who has made the life of mankind flourish, a possessor of Sed festivals like Ptah Tatenen and a sovereign like Ra",
    },
    prenomen: {
      codes: ["X1", "R8", "X1", "R8", "N36", "U21", "N35", "Q3", "X1", "V28", "F12", "D28", "C2", "C12", "S42", "S34"],
      mdc: "t-nTr-t-nTr-N36:stp:n-p:t-H-wsr-kA-C2\\-C12-sxm-anx",
      transliteration: "i͗wꜤ-nṯrwi͗-mr(wi͗)-i͗t stp.n-ptḥ wsr-kꜢ-rꜤ sḫm-Ꜥnḫ-n-i͗mn",
      translation: "The heir of the two gods who love (their?) father, chosen by Ptah, the strong one of the ka of Ra, the living image of Amun",
      sources: [
        { text: "Philae Temple E" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 18" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 236-237, 5:T2" },
      ],
    },
    nomen: {
      codes: ["Q3", "X1", "V4", "E23", "Aa15", "M17", "M17", "S29", "S34", "I10", "X1", "N17", "U6", "Q3", "X1", "V28"],
      mdc: "p:t-wA-l:M-i-i-s-anx-D&(t:N17)-mr-p:t-H",
      transliteration: "ptwlmi͗s Ꜥnḫ-ḏt-mri͗-pth",
      translation: "Ptolemaios, living forever, beloved of Ptah",
      sources: [
        { text: "Philae Temple E" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 18" },
      ],
      variants: [
        {
          codes: ["Q3", "X1", "V4", "E23", "Aa15", "M17", "M17", "S29"],
          mdc: "p:t-wA-l:M-i-i-s",
          transliteration: "ptwlmi͗s",
          translation: "Ptolemaios",
        },
      ],
    },
  },

  "ptolemy-vi": {
    horus: {
      codes: ["C18C", "Aa15", "F32", "F51B", "X1", "A80", "V28", "Aa5", "Q3", "E95", "S34", "D2", "Z1", "F31", "S29", "Aa1", "W24", "O39", "O39", "O34", "N35"],
      mdc: "C18C-M:X:F51B*t-A80-H-Aa5:p-E95-anx-D2:Z1-ms-s-x*nw:O39*O39:z:n",
      transliteration: "ṯni͗-m-ẖt ḥtr-ḥpw-Ꜥnḫ-ḥr-msḫnt.sn",
      translation: "Distinguished in the sanctuary, the twin brother of the living Apis bull upon their birth stone",
    },
    nebty: {
      codes: ["Aa15", "Aa11", "X1", "H8", "S29", "N28", "D36", "N35", "M23", "G43", "X1", "I9", "Z1", "I9"],
      mdc: "Aa15:Aa11:t*H8-s-xa:a:n-sw-w-t:f:Z1:f",
      transliteration: "m-mꜢꜤt sḫꜤi-n-sw-it.f",
      translation: "Truly, whose father enthroned him",
    },
    golden: {
      codes: ["G36", "D21", "F9", "F9", "V30", "O23", "Z3", "Q3", "X1", "V28", "C18C", "W19", "M17", "R7G", "I9", "X1", "Z1", "R8", "Z1", "R8", "Z1", "R8", "Z1", "M17", "M17", "A311B", "Aa1", "Z1", "W19"],
      mdc: "wr:r-F9:F9-nb:O23-Z3-p:t-H-C18C-mi-i-R7G:f:t*Z1-nTr&Z1-nTr&Z1-nTr&Z1-i-i-A311B-x*Z1:mi",
      transliteration: "wr-pḥti nb-ḥbw-sd-mi-ptḥ tꜢ-ṯnn-it-nṯrw ity-mi-rꜤ",
      translation: "The one great of strength, a possessor of Sed festivals like Ptah Tatenen, the father of the gods, and a sovereign like Ra",
    },
    prenomen: {
      codes: ["N8", "R8", "F44", "Q3", "X1", "V28", "L1", "D21", "C102", "U21", "N35", "C2A", "C12A", "D4", "Aa11", "X1", "H8"],
      mdc: "nTr\\-N8-nTr-F44-p:t-H-xpr:r-C102-stp:n-C2A\\-C12A-ir:Aa11:t*H8",
      transliteration: "i͗wꜤ-n-nṯrwi͗-prwi͗ stp.n-ptḥ-ḫpri͗ i͗ri͗-mꜢꜤt-i͗mn-rꜤ",
      translation: "Heir of the two gods who has emerged, chosen by Ptah-Khepri, who carried out Maat for Amun-Ra",
      sources: [
        { text: "Philae, Temple K Stela" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 27b2" },
      ],
      variants: [
        {
          codes: ["N8", "R8", "F44", "Q3", "X1", "V28", "N35", "U21", "D4", "Aa11", "N35", "C2", "C12", "D21", "V28", "V28"],
          mdc: "nTr\\-N8-nTr-F44-p:t-H-n:stp:ir-Aa11:n-C2\\-C12-r:H*H",
          transliteration: "i͗wꜤ-(n)-nṯrwi͗-prwi͗ stp-n-ptḥ i͗ri͗-mꜢꜤt-n-i͗mn-rꜤ-r-nḥh",
          translation: "Heir of the two gods who has emerged, chosen by Ptah, who carried out Maat for Amun-Ra",
        },
      ],
    },
    nomen: {
      codes: ["Q3", "X1", "V4", "E23", "Aa15", "M17", "M17", "S29", "S34", "I10", "X1", "N17", "Q3", "X1", "V28", "U6"],
      mdc: "p:t-wA-l:M-i-i-s-anx-D&t:N17-p:t-H-mr",
      transliteration: "ptwlmi͗s Ꜥnḫ-ḏtmri͗-ptḥ",
      translation: "Ptolemaios, living forever, beloved of Ptah",
    },
  },

  "ptolemy-viii": {
    horus: {
      codes: ["V28", "E34", "N35", "Z7", "W24", "A17", "F18", "V31", "N35", "D19", "X1", "Aa56", "S34", "I9", "W24", "Aa1", "D2", "T28", "Z1", "O1", "X1", "I9", "Z1", "I9", "M30", "O48", "Z2A", "D250", "D21", "F31", "N28", "Z2", "I9", "V28", "N35", "D36", "V28", "Q3", "Aa5", "S34", "E1"],
      mdc: "H-wn:n-W:nw-A17-F18:k:n-D19:t-Aa56*anx:f-nw:x-D2:T28-1:pr-t:f:Z1:f-M30-O48:Z2A-D250:r-ms-xa:Z2:f-H-n:a-H-p:Aa5-anx-E1",
      transliteration: "ḥwnw ḥkn.tw-m-Ꜥnḫ.f-ḥr-nst-i͗t.f mꜤr-zpw ḏsr-msḫꜤw.f-ḥnꜤ-ḥpw-Ꜥnḫ",
      translation: "The youthful one, about whose life on his father’s throne one is joyful, successful of deeds, and whose appearances with the living Apis bull are sacred",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 39b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 240-241, 8:H1" },
      ],
      variants: [
        {
          codes: ["V28", "M42", "W24", "A17", "D19", "X1", "D2", "Z1", "Q1", "X1", "I9", "Z1", "I9", "X1", "D17", "D250", "D21", "Z4", "X1", "N35", "M23", "Z2A", "R8", "U21", "N35", "X1", "U15", "I10", "O34", "I9"],
          mdc: "H-M42:nw-A17-D19:t-D2:1-st-t:f:Z1:f-t:D17-D250:r-y*t:n-sw-Z2A-nTr-stp:n-t:U15-D&(z:f)",
          transliteration: "ḥwnw ḥkn.tw-ḥr-nst-i͗t.f ti͗t-ḏsr(t)-nt-nsw-nṯrw stp-n-i͗mn-ḏs.f",
          translation: "The youthful one, about whose father’s throne one is joyful, the sacred image of the king of the gods, chosen by Atum himself",
          sources: [
            { text: "Kingston Hall obelisk" },
            { text: "Gauthier, Le Livre des Rois d'Égypte, IV, 323 (LVIII C)" },
            { text: "Budge, The decree of Memphis and Canopus, I, 137 (A3)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 240-241, 8:H2" },
          ],
        },
        {
          codes: ["V28", "M42", "W24", "A17", "D2", "D1", "T10", "Z1", "Z1", "Z1", "G39", "Q1", "R8", "B3A", "N35", "Q1", "X1", "H8", "O42B", "N35", "I9", "M23", "M17", "M17", "X1", "D12", "G20", "X1", "I9", "Z1", "I9"],
          mdc: "H-M42:nw-A17-D2:D1-pD:3*3:3-zA&1-st-nTr-B3A-n:st*(t:H8)-O42B:n:f-sw-i-i-t:D12-G20-t:f:Z1:f",
          transliteration: "ḥwnw ḥri͗-tp-pḏt zꜢ-wsi͗ri͗ msi͗-n-Ꜣst šzp-n.f-nsyt-rꜤ-mꜤ-i͗t.f",
          translation: "The youthful one, leader of the Nine Bows, the son of Osiris, whom Isis has borne, who has received for himself the kingship of Ra from his father’s hand",
        },
      ],
    },
    nebty: {
      codes: ["S29", "O4", "D21", "F34", "Z1", "M127", "M13"],
      mdc: "s-h:r-ib:Z1-M127-wAD",
      transliteration: "shrw-i͗b-tꜢwi͗",
      translation: "Who has pleased the Two Lands",
      sources: [
        { text: "Edfu small temple" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 37c" },
      ],
    },
    golden: {
      codes: ["G36", "D21", "F9", "F9", "V30", "O23", "W19", "X1", "I9", "Z1", "I9", "Q3", "X1", "V28", "C18C", "X1", "I9", "R8A", "A311A", "Aa1", "Z1", "W19"],
      mdc: "wr:r-F9*F9:nb-O23-mi-t:f:Z1:f-p:t-H-C18C-t:f:(nTrw)-A311A-x:Z1-mi",
      transliteration: "wr-pḥti͗ nb-ḥbw-sd-mi͗-i͗t.f-ptḥ-tꜢ-ṯnn-i͗t-nṯrw-i͗ty-mi͗-rꜤ",
      translation: "The one great of strength, a possessor of Sed festivals like his father Ptah Tatenen, the father of the gods, and a sovereign like Ra",
    },
    prenomen: {
      codes: ["N8", "R8", "F44", "N35", "Q3", "X1", "V28", "U21", "N35", "D4", "Aa11", "C2", "C12", "S42", "S34"],
      mdc: "nTr\\-N8-nTr-F44:n-p:t-H-stp:n-ir:Aa11-C2\\-C12-sxm-anx",
      transliteration: "i͗wꜤ-n-nṯrwi-prwi͗ stp.n-ptḥ i͗ri͗-mꜢꜤt-rꜤ sḫm-Ꜥnḫ-n-i͗mn",
      translation: "Heir of the two gods, chosen by Ptah, who has accomplished the Maat (of?) Ra, the living image of Amun",
    },
    nomen: {
      codes: ["Q3", "X1", "V4", "E23", "Aa15", "M17", "M17", "S29", "S34", "I10", "X1", "N17", "Q3", "X1", "V28", "U6", "M17", "M17"],
      mdc: "p:t-wA-l:M-i-i-s-anx-D&&&(t:N17)-p:t-H-mr-i-i",
      transliteration: "ptwlmi͗s Ꜥnḫ-ḏt mri͗-ptḥ",
      translation: "Ptolemaios, living forever, beloved of Ptah",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 36d" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 240-241, 8:E" },
      ],
    },
  },

  "ptolemy-ix": {
    horus: {
      codes: ["D250", "D21", "F31", "S29", "Z3", "V77", "Aa5", "Q3", "G39", "S34", "E95", "O249", "L1", "D21", "A40", "A80", "F31", "S29", "Aa1", "W24", "N37", "W24", "X1", "G39", "Q1", "X1", "C159D"],
      mdc: "D250:r-ms-s-Z3-V77-Aa5:p-zA-anx-E95-O249-xpr:r-A40-A80-ms-s-x*nw:N37-nw:t-zA&1-Q1:t-C159D",
      transliteration: "ḏsr-mswt-ḥnꜤ-ḥpw-Ꜥnḫ nṯri͗-ḫpr(w) snsn-msḫn(t)-nt-zꜢ-Ꜣst",
      translation: "Distinguished through his birth together with the living Apis, godlike at conception, twin in his birthplace with the son of Isis",
      sources: [
        { text: "First reign" },
        { text: "Dumichen, Altägyptische Tempelinschriften, I, plate CIV" },
        { text: "deRouge, Inscriptions et notices recueillies a Edfou, I, plate XLIII" },
        { text: "Brugsch, Thesaurus Inscriptionum Aegypticarum, V, 870" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 240-241, 9:H1" },
      ],
      variants: [
        {
          codes: ["E1", "Z9", "D40", "W19", "M17", "U33", "M17", "M17", "A311B", "R11", "Aa56", "N8", "N17", "X1", "O5", "O49", "S34", "E95", "W19", "D21", "X1", "D36", "N35", "I9", "O23D", "Z2", "I1", "Z2", "G36", "Z2", "W19", "Q3", "Z1", "V28", "C18C", "X1", "I9", "Z1", "I9", "G5"],
          mdc: "E1-Z9:D40-mi-i-U33-i-i-A311B-Dd-Aa56-N8-N17:t:O5*O49-anx-E95-mi-r:t:a-n:f-O23D:Z2-I1:Z2-wr:Z2-mi-p:Z1-H-C18C-t:f:Z1:f-G5&3",
          transliteration: "kꜢ-nḫt i͗ty-psḏ-m-tꜢmri͗-mi͗-ḥpw-Ꜥnḫ rdi͗-n.f-ḥꜢbw-sd-ꜤšꜢw-wrw-mi͗-ptḥ-tꜢṯnn-i͗t-nṯrw",
          translation: "The strong bull and sovereign who shines in Ta-mery like the living Apis bull, whom has been given many Sed festivals like Ptah Ta-tjenen, and father of the gods",
        },
      ],
    },
    nebty: {
      codes: ["S29", "N28", "D36", "Y1", "M23", "G43", "X1", "G14", "I9", "D2", "Z1", "W11", "O1", "X1", "I9", "Z1", "I9", "V15", "I9", "M127", "M13", "Aa56", "H6", "P8"],
      mdc: "s-xa:a:Y1-sw-w-t&G14-f:D2*1-g:pr-t:f:Z1:f-V15:f-M127-wAD-Aa56-Sw-P8",
      transliteration: "sḫꜤi͗-sw-mwt.f-ḥr-nst-i͗t.f i͗ṯi͗-tꜢwi͗ m mꜢꜤ-ḫrw",
      translation: "The one whose mother placed on the throne of his father, who has siezed the inheritance of the Two Lands in justification",
      sources: [
        { text: "First reign" },
        { text: "Brugsch, Thesaurus Inscriptionum Aegypticarum, V, 870" },
        { text: "Daressy, Note sur des bas-reliefs du temple de Deir el-Médineh, BIFAO 6, 73" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 240-241, 9:N1" },
      ],
      variants: [
        {
          codes: ["G36", "D21", "F9", "F9", "Z9", "D40", "W17A", "N37A", "N36", "V28", "N5", "V28", "S29", "U32", "O4", "Q3", "H27", "Z2", "W19", "G191B", "O29v", "O29v"],
          mdc: "wr:r-F9*F9:Z9:D40-W17A-N37A:N36-H-ra-H-s-U32-h:p-H27:Z2-mi-G191B-O29v-O29v",
          transliteration: "wr-pḥti͗ ḫnti͗-š-nḥḥ smn-hpw-mi͗-ḏḥwti͗-ꜤꜢ-ꜤꜢ",
          translation: "Whose might is great, who is pleased over eternity, who determines the laws like the great god Thoth",
          sources: [
            { text: "Second reign, occurs in several places in the Temple of Edfu" },
            { text: "Gauthier, Le Livre des Rois d'Égypte, IV, 359 (XLV B)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 240-241, 9:N2" },
          ],
        },
        {
          codes: ["G36", "D21", "F9", "F9", "Z9", "D40", "D45", "M14", "G36", "N36", "V15", "F44", "L1", "N21", "L1", "N21", "Aa15", "H6", "P8", "U22", "F34", "Z1", "N37A", "D21", "G7"],
          mdc: "wr:r-F9*F9:Z9:D40-Dsr-M14-wr:N36-V15-F44-xpr:N21-xpr:N21-Aa15:Sw*P8-mnx-ib:1-N37A:r-G7&3",
          transliteration: "wr-pḥti͗ sḫm-WꜢḏ-wr i͗ti͗-i͗wꜤ-tꜢwi͗-m-mꜢꜤ-ḫrw mnḫ-i͗b-ḫr-nṯrw-rmṯw",
          translation: "Whose might is great, who has power over the sea, who is conquering his inheritance in the Two Lands in triumph, who is beneficient in the hearts for Gods and men",
        },
      ],
    },
    golden: {
      codes: ["V30", "N16", "O5", "O49", "S38", "A40D", "I9", "Aa15", "A137", "V30", "O23D", "Z3", "C18C", "X1", "I9", "R8A", "M23", "M17", "M17", "X1", "Z1", "A304G", "A311A", "D29", "U32", "O4", "Q3", "Y1", "Z2", "G191B", "O29v", "O29v", "W19"],
      mdc: "nb:N16-O5:O49-HqA-A40D-f:Aa15-A137-nb:O23D-Z3-C18C-t:f-nTrw-sw-i-i-t:3-A304G-A311A-D29-U32-h*p:Y1:Z2-G191B-O29v-O29v-mi",
      transliteration: "nb-tꜢmri͗ ḥḳꜢ.f-m-ḥꜤꜤw nb-ḥꜢbw-sd-mi͗-tꜢṯnn-i͗t-nṯrw-nsyt(?) i͗ty-smn-hpw-mi͗-ḏḥwti͗-ꜤꜢ-ꜤꜢ",
      translation: "Lord of Egypt who rules in joy, the lord of the Sed festival like Ptah-Tatenen, king of the Gods, who determines the laws like the great god Thoth",
      sources: [
        { text: "First reign" },
        { text: "Daressy, Note sur des bas-reliefs du temple de Deir el-Médineh, BIFAO 6, 73" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 242-243, 9:G1" },
      ],
      variants: [
        {
          codes: ["O42A", "N17", "O145", "X1", "O49", "A40C", "A9", "G17", "A137", "V30", "O23D", "I1", "Z2", "G36", "D21", "Z3", "W19", "X1", "A9", "A9", "C19C", "C18C", "A23A", "G7D", "G7D", "G7D", "D46", "N35", "I9", "A43B", "X1", "Z2A", "S3", "C2B", "G17", "T16A", "W24", "A24", "A311A"],
          mdc: "O42A:N17-O145-t:O49-A40C-A9-m-A137-nb:O23D-I1:Z2-wr:r-Z3-mi-t:A9-A9-C19C-C18C-A23A-G7D-G7D-G7D-d:n:f-A43B-t:Z2A-S3-C2B-m-T16A\\-nw-A24-A311A",
          transliteration: "šzp-tꜢmri͗ ḥḳꜢ.f-m-ḥꜤꜤw nb-ḥꜢbw-sd-ꜤšꜢw-wrw-mi͗-i͗t.f-Ptḥ-tꜢṯnn-smsw-nṯrw šzp.n.f-nsyt-n-rꜤ-m-ḳnw-nḫt",
          translation: "Who, seizing Egypt, rules in joy, the lord of many great Sed festivals like his father Ptah-Tatenen, the oldest of the Gods",
        },
      ],
    },
    prenomen: {
      codes: ["U22", "R8", "X1", "R8", "D39", "X1", "H8", "O34", "N36", "Aa27D", "X1", "H8", "F44", "A41", "S42", "C12C", "C2A", "U21", "N35", "D4", "Aa11"],
      mdc: "mnx-nTr-t-nTr-D39:t*H8-z:N36-Aa27D-t:H8-F44-A41-sxm-C12C\\-C2A-stp:n-ir:Aa11",
      transliteration: "i͗wꜤ-(n)-nṯr-mnḫ-nṯrt-mr(t)-mwt.s-nḏt(t) stp.n-ptḥ i͗ri͗-mꜢꜤt-rꜤ sḫm-Ꜥnḫ-i͗mn",
      translation: "The heir of the Beneficient God and the Goddess who loves her mother and who saves, the chosen of Ptah, who brings forth the order of Ra, the living image of Amun",
      sources: [
        { text: "First reign" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 42c" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 242-243, 9:T1" },
      ],
      variants: [
        {
          codes: ["U22", "R8", "Z1", "R8", "D39", "O34", "N36", "W24", "X1", "Aa27D", "F44", "N35", "A40", "S42", "C12", "C2", "U21", "D4", "Aa11", "N35"],
          mdc: "mnx-nTr-1-nTr-D39:z:N36-nw:t-Aa27D-F44:n-A40-sxm-C12\\-C2-stp:ir-Aa11:n",
          transliteration: "i͗wꜤ-(n)-nṯr-mnḫ-nṯrt-mr(t)-mwt.s-nḏt(t) stp.n-ptḥ i͗ri͗-mꜢꜤt-rꜤ sḫm-Ꜥnḫ-i͗mn",
          sources: [
            { text: "First reign" },
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text IV, 108α" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 242-243, 9:T2" },
          ],
        },
        {
          codes: ["U22", "R8", "F44", "R8", "X1", "H8", "X1", "G14", "S29", "N36", "Aa27D", "W24", "X1", "D40", "Q3", "X1", "V28", "U21", "N35", "D4", "Aa11", "C12", "C1", "S42", "S34"],
          mdc: "mnx-nTr-F44-nTr-t:H8-t&G14-s:N36-Aa27D-nw*t:D40-p:t-H-stp:n-ir:Aa11-C12\\-C1-sxm-anx",
          transliteration: "i͗wꜤ-(n)-nṯr-mnḫ-nṯrt-mr(t)-mwt.s-nḏt(t) stp.n-ptḥ i͗ri͗-mꜢꜤt-rꜤ sḫm-Ꜥnḫ-i͗mn",
          sources: [
            { text: "First reign" },
            { text: "Daressy, Note sur des bas-reliefs du temple de Deir el-Médineh, BIFAO 6, 72" },
            { text: "Gauthier, Le Livre des Rois d'Égypte, IV, 360 (XLVIII A)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 242-243, 9:T3" },
          ],
        },
        {
          codes: ["U22", "R8", "U22", "R8", "F44", "Q3", "X1", "V28", "U21", "N35", "D4", "Aa11", "N35", "C2", "C12", "S42", "S34"],
          mdc: "mnx-nTr-mnx-nTr-F44-p:t-H-stp:n-ir:Aa11:n-C2\\-C12-sxm-anx",
          transliteration: "i͗wꜤ-ꜤꜢ-(n)-nṯrwi͗-mnḫwi͗ stp-n-ptḥ i͗ri͗-mꜢꜤt-rꜤ sḫm-Ꜥnḫ-n-i͗mn",
        },
      ],
    },
    nomen: {
      codes: ["Q3", "X1", "V4", "E23", "Aa15", "M17", "M17", "S29", "S34", "I10", "X1", "N17", "Q3", "X1", "V28", "N36"],
      mdc: "p:t-wA-l:M-i-i-s-anx-D&(t:N17)-p:t-H-N36",
      transliteration: "ptwlmi͗s Ꜥnḫ-ḏt mri͗-ptḥ",
      translation: "Ptolemaios, living forever, beloved of Ptah",
    },
  },

  "ptolemy-x": {
    horus: {
      codes: ["C20", "Aa15", "F32", "F105", "N35", "O34", "Aa5A", "Q3", "S34", "E95", "D2", "Z1", "F31", "S29", "Aa1", "W24", "N37", "N37", "V28", "E34", "N35", "W24", "Z7", "A17", "F35", "M30", "N36", "X1", "O34", "N28", "N35", "O34", "X1", "G14", "I9", "D2", "W11", "X1", "I9", "I9", "U5", "Z1", "D36", "Z12", "D40", "N25", "X1", "Z1", "V15", "Aa15", "S42", "Aa56", "I9", "N6", "Z1", "W19", "R11", "N8", "I9", "Aa15", "N27", "X1", "O1"],
      mdc: "C20-M:X-F105-n:z:Aa5A*p-anx-E95-D2:1-ms-s-x:nw-N37:N37-H-wn:n-nw:W-A17-nfr-M30-N36:t:z-xa:n:z-t&G14:f-D2:g-t:f:f-U5\\:1:a-Z12:D40-N25:t*3-V15:Aa15-sxm*Aa56:f-N6:1-mi-Dd-N8-f:Aa15-N27:t*O1",
      transliteration: "nṯri m ẖt ẖnm.n s(w) ḥpw-Ꜥnḫ ḥr msḫnti ḥwn nfr bnr mrwt sḫꜤi.n sw-mwt.f ḥr nst it.f ṯmꜢ-Ꜥ ḥwi͗ ḫꜢswt iṯi m sḫm.f mi rꜤ psḏ.f m Ꜣḫt",
      translation: "The divine one in the sanctuary, whom the living Apis bull has united with the birth-stool, the perfect youth sweet of love, whom his mother enthroned on his father’s throne, the sturdy-armed one who has struck down foreign countries and seized with his power like Ra when he shines in the horizon.",
    },
    nebty: {
      codes: ["O34", "O4A", "D21", "F34", "M127", "M13", "E1", "Z9", "D40", "S42", "N37A", "V28", "N5", "V28"],
      mdc: "z:O4A:r-ib-M127-wAD-E1:Z9:D40-sxm-N37A:H*ra*H",
      transliteration: "shrw-tꜢwi͗ kꜢ-nḫt sḫm-nḥḥ",
      translation: "Who pleases the Two Lands, the strong bull, eternal power",
    },
    golden: {
      codes: ["O29v", "F34", "Z1", "Z1", "R8", "Z1", "R8", "Z1", "R8", "N36", "D10A", "X1", "O49", "M17", "U33", "M17", "M17", "A311A", "S38", "X1", "Z4", "M14", "I12", "I12", "I25", "I9", "N17", "O5", "X1", "O49", "Aa15", "R4", "X1", "Q3"],
      mdc: "O29v-ib:1-1*nTr*1*nTr*1*nTr:N36-D10A:t*niwt-i-U33-i-i-A311A-HqA-t:y-M14-I12-I12-I25:f-N17:O5:t*niwt-Aa15:Htp:t*p",
      transliteration: "ꜤꜢ-i͗b mri͗-nṯrw i͗ty-bꜢḳt ḥḳꜢ-wꜢḏti͗ Ꜥḳ.f-tꜢmri͗-m-ḥtp",
      translation: "The great-hearted one who is beloved of the Gods, Master of Baqet and ruler of the two crowns, when he enters The Beloved Land in peace",
    },
    prenomen: {
      codes: ["U22", "R8", "X1", "H8", "R8", "N6", "X1", "H8", "F44", "Q3", "X1", "V28", "U21", "N35", "D4", "Aa11", "C2A", "C12A", "O34", "M23", "M23", "A53", "S34", "S3"],
      mdc: "mnx-nTr-t:H8-nTr-N6:t*H8-F44-p:t-H-stp:n-ir:Aa11-C2A\\-C12A-z:sw*sw-A53-anx-S3",
      transliteration: "i͗wꜤ-(n)-nṯr-mnḫ-nṯrt-mnḫt-rꜤ stp-n-ptḥ i͗ri͗-mꜢꜤt-rꜤ znn-Ꜥnḫ-n-Jmn",
      translation: "Heir of the potent god and of the potent goddess, the daughter of Ra , chosen by Ptah, who has accomplished the Maat of Ra, the living likeness of Amun",
    },
    nomen: {
      codes: ["Q3", "X1", "V4", "E23", "Aa15", "M17", "M17", "S29", "S43", "W24", "F51B", "I10", "M17", "D153", "V31", "S29", "N35", "X1", "D153", "O34", "S34", "I10", "X1", "N17", "Q3", "X1", "V28", "N36"],
      mdc: "p:t-wA-l:M-i-i-s-S43-nw:F51B-D-i-D153:k-s-n:t*D153:z-anx-D&t:N17-p:t-H-N36",
      transliteration: "ptwlmi͗s ḏd n.f Ꜥlksntrs Ꜥnḫ-ḏt mri͗-ptḥ",
      translation: "Ptolemaios, also called Alexandros",
    },
  },

  "ptolemy-xii": {
    horus: {
      codes: ["F18", "E34", "W24", "Z7", "A17", "F35", "M30", "U6", "X1", "C18C", "S29", "G16", "G24A", "A1", "Z2", "F18", "D21", "D28", "A9", "N14", "A30", "F51B", "F105", "A51", "D21", "N37A", "Q3", "N35", "I9", "D36", "Aa15", "N28", "D36", "Aa15", "S1", "T22A", "W24", "T22A", "W24", "N25", "O34", "V28", "M2", "N35", "W25", "Z7", "A1", "Aa56", "A137", "W19", "Aa27D", "W24", "X1", "Z9", "D40", "X1", "I9", "Z1", "I9", "S15", "F31", "S29", "Z3", "D2", "Z1", "W11", "X1", "O1", "X1", "I9", "Z1", "I9", "G5", "E1", "D40", "W19", "M17", "M17", "U33", "M17", "A311A", "R11", "N8", "Aa56", "N17", "O5", "X1", "O49", "S34", "E95", "W19", "D21", "X1", "D36", "W24", "F51B", "O23", "Z7", "X1", "Z2", "I1", "Z2", "Z9", "D21", "Z2", "W19", "Q3", "X1", "V28", "C18C", "X2", "I9", "N14", "Z2"],
      mdc: "F18:wn-nw:W-A17-nfr-M30*mr:t-C18C-s-G16-G24A-A1:Z2-F18:r-kA-A9-N14-A30-F51B-F105-A51-r:N37A:p-n:f-a:Aa15-xa:a:Aa15-S1-T22A-nw-T22A-nw-N25:z-H-M2:n-ini:W-A1-Aa56-A137-mi-Aa27D-nw*t:Z9:D40-t:f:Z1:f-S15-ms-s-Z3-D2:1-g:t:pr-t:f:Z1:f-G5&1-E1:D40-mi-i-i-U33-i-A311A-Dd-N8-Aa56-N17:O5:t*O49-anx-E95-mi-r:t:a-nw:F51B-(O23-W:t):Z2-I1:Z2-Z9:r:Z2-mi-p:t-H-C18C-X2:f-N14:Z2",
      transliteration: "ḥwnw-nfr bnr-mrwt ṯni͗-sw-nbt-rḫyt-ḥnꜤ-kꜢ.f dwꜢ.n.f-ḫnmw-šps-r-šzp-n.f-ḫꜤ(t)-m-nsw snsn.n-sḥnw-m-ḥꜤꜤw-mi͗-Nḏ-i͗t.f ṯḥn-msw(t)-ḥr-nst-i͗t.f-mi͗-ḥr-kꜢ-nḫt i͗ty-psḏ-m-tꜢmri͗-mi͗-ḥpw-Ꜥnḫ rdi͗-n.f-ḥꜢbw-sd-ꜤšꜢw-wrw-mi͗-Ptḥ-tꜢṯnn-i͗t-nṯrw",
      translation: "The perfect youth, pleasant in his popularity, whom the Two Ladies and the common folk have elevated along with his ka, who the wonderful Khnum praises so that he receives the crown of kingship, who unites himself with the works (of his father) in joy like that which his father protects, who is shining at birth on the throne of his father like Horus, the strong bull, the lord who lights up Egypt like the living Apis, to whom many great Sed festivals will be given through Ptah-Tatenen, the father of the Gods",
    },
    nebty: {
      codes: ["G36", "F9", "F9", "Z9", "X1", "N37A", "N36", "V28", "N5", "V28", "S29", "U28", "O4A", "Q3", "Z2", "H27", "W19", "G191", "O29v", "O29v"],
      mdc: "wr:F9*F9:Z9*t-N37A:N36:H*ra*H-s-U28-O4A*p:Z2:H27-mi-G191-O29v-O29v",
      transliteration: "wr-pḥti͗ ḫntš-nḥḥ smn-hpw-mi͗-ḏḥwti͗-ꜤꜢ-ꜤꜢ",
      translation: "The one great of strength and foremost one of the sea forever, who has established laws like the twice-great Thoth",
      sources: [
        { text: "First pylon, Philae" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 52a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 244-245, 12:N1" },
      ],
      variants: [
        {
          codes: ["Z9", "D21", "F9", "F9", "D40", "D19", "X1", "N37A", "N35", "N35", "V28", "V28", "F35", "F34", "Z1", "U39O", "F35", "Z2B", "G191", "O29v", "O29v", "W19"],
          mdc: "Z9:r-F9*F9:D40-D19:t-N37A:n:n-H-H-nfr-ib:1-U39O-nfr-Z2B-G191-O29v-O29v-mi",
          transliteration: "wr-pḥti͗ ḫntš-nḥḥ nfr-i͗b wṯz-nfrw-mi͗-ḏḥwti͗-ꜤꜢ-ꜤꜢ",
          translation: "The one great of strength and foremost one of the sea forever, perfect of mind, who has raised perfection like the twice-great Thoth",
        },
      ],
    },
    golden: {
      codes: ["O29v", "F34", "Z1", "M17", "U33", "M17", "M17", "A311A", "V30", "N29", "Z9", "W24", "D40", "W24", "Aa1", "D40", "H8", "Z1", "Q1", "X1", "H8", "W19", "M17"],
      mdc: "O29v-ib:1-i-U33-i-i-A311A-nb:q*Z9*nw-D40:nw*x:D40-H8:1-st-t:H8-mi-i",
      transliteration: "ꜤꜢ-i͗b i͗ty nb-ḳnw-nḫt-mi͗-zꜢ-Ꜣst",
      translation: "The one great of mind, the sovereign, the possessor of bravery and strength like the son of Isis",
      sources: [
        { text: "Brugsch, Thesaurus Inscriptionum Aegypticarum, V, 878" },
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 49a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 244-245, 12:G1" },
      ],
      variants: [
        {
          codes: ["O29v", "F34", "Z1", "U7", "D21", "R8A", "D10A", "X1", "O49", "M17", "U33", "M17", "M17", "A311A", "W19", "M17", "C2B", "S38", "N29", "M13", "M13", "X1", "Z4", "I12", "I12"],
          mdc: "O29v-ib:1-U7:r-nTrw-D10A-t:niwt-i-U33-i-i-A311A-mi-i-C2B-HqA-q-wAD-wAD-t:y-I12-I12",
          transliteration: "ꜤꜢ-i͗b mri͗-nṯrw-BꜢḳt ity-mi͗-rꜤ ḥḳꜢ-wꜢḏti͗",
          translation: "The one great of mind who is beloved of the gods of Baqet, a sovereign like Ra and ruler of the two crowns",
        },
      ],
    },
    prenomen: {
      codes: ["Q3", "R8", "F44", "N35", "W24", "X1", "Z4", "N35", "N104", "D40", "Q3", "X1", "V28", "U21", "N35", "D4", "Aa11", "W24", "C2", "C12", "S42", "S34"],
      mdc: "p-nTr-F44:n-nw*t*y:n-N104:D40-p:t-H-stp:n-ir:Aa11:nw-C2\\-C12-sxm-anx",
      transliteration: "i͗wꜤ-n-pꜢ-nṯr-nḥm stp-n-ptḥ i͗ri͗-mꜢꜤt-n-rꜤ sḫm-Ꜥnḫ-i͗mn",
      translation: "The heir of the saviour god, who is the chosen of Ptah, who brings forth the order of Ra, the living image of Amun",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 49b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 244-245, 12:T1" },
      ],
      variants: [
        {
          codes: ["F44", "W24", "Q3", "R8", "W24", "X1", "M72", "Q3", "X1", "V28", "U21", "N35", "D4", "Aa11", "C2D", "C12C"],
          mdc: "F44-nw:p-nTr-nw:t-M72-p:t-H-stp:n-ir:Aa11-C2D\\-C12C",
          transliteration: "i͗wꜤ-n-pꜢ-nṯr-nti͗-nḥm stp-n-ptḥ i͗ri͗-mꜢꜤt-i͗mn-rꜤ",
          translation: "Heir of the saviour god, chosen by Ptah, who has brings forth the order of Amun-Ra",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 51a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 244-245, 12:T2" },
          ],
        },
        {
          codes: ["Q3", "R8", "F44", "W24", "N104", "D40", "U21", "X1", "Q3", "X1", "V28", "D4", "Aa11"],
          mdc: "p-nTr-F44-nw*N104:D40-stp:t-p:t-H-ir:Aa11",
          transliteration: "i͗wḳ-n-pꜢ-nṯr-nḥm stp-(n)-ptḥ i͗ri͗-mꜢꜤt",
          translation: "The heir of the saviour god, who is the chosen of Ptah, who brings forth order",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text IV, 170" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 244-245, 12:T3" },
          ],
        },
        {
          codes: ["Q3", "R8", "X1", "I9", "U6", "T22A", "D4", "Q1", "R8", "A17"],
          mdc: "p-nTr-t:f-mr-T22A-ir:st*nTr-A17",
          transliteration: "pꜢ nṯr-mri͗ i͗t snt wsi͗ri͗ ḥwnw",
          translation: "The god who is beloved of his father and brother, the youthful Osiris",
        },
      ],
    },
    nomen: {
      codes: ["Q3", "X1", "V4", "E23", "Aa15", "M17", "M17", "S29", "S34", "I10", "X1", "N17", "Q3", "X1", "V28", "Q1", "X1", "H8", "N36"],
      mdc: "p:t-wA-l:M-i-i-s-anx-D&&&(t:N17)-p:t-H-st-t*H8:N36",
      transliteration: "ptwlmys Ꜥnḫ-ḏt mri͗-Ptḥ-Ꜣst",
      translation: "Ptolemaios, living forever, beloved of Ptah and Isis",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 49a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 244-245, 12:E1" },
      ],
      variants: [
        {
          codes: ["Q3", "X1", "V4", "E23", "Aa15", "M17", "M17", "S29", "S34", "I10", "X1", "N17", "Q1", "X1", "H8", "U6"],
          mdc: "p:t-wA-l:M-i-i-s-anx-D&&&(t:N17)-st-t:H8-mr",
          transliteration: "ptwlmys Ꜥnḫ-ḏt mri͗-Ꜣst",
          translation: "Ptolemaios, living forever, beloved of Isis",
        },
      ],
    },
  },

  "cleopatra-vii": {
    horus: {
      codes: ["G36", "D21", "V30", "F35", "F35", "F35", "H2", "Aa1", "O22"],
      mdc: "wr:r-nb-nfr-nfr-nfr-H2:x-O22",
      transliteration: "wr(t)-nb(t)-nfrw Ꜣḫ(t)-zḥ",
      translation: "The great Lady of perfection, excellent in counsel",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 65a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 244-245, 13:H1" },
      ],
      variants: [
        {
          codes: ["G36", "X1", "D21", "X1", "Z7", "X1", "A53", "N35", "X2", "X1", "O34"],
          mdc: "wr&t:r-t:W:t-A53-n:X2*t:z",
          transliteration: "wr.t-twt-n-i͗t.s",
          translation: "The great one and the (very) image of her father",
        },
      ],
    },
    nomen: {
      codes: ["N29", "E23", "Z7", "Q3", "D46", "D21", "G1", "X1", "H8", "X1", "R8", "X1", "H8", "R7", "X1", "O34", "N36"],
      mdc: "q:l-W:p-d:r-A-t:H8-t-nTr-t:H8-R7:t-z:N36",
      transliteration: "ḳliwpꜢdrꜢ nṯrt mr(t)-i͗t.s",
      translation: "The goddess Cleopatra who is beloved of her father",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 65a" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 244-245, 13:E1" },
      ],
    },
  },

  "ptolemy-xv": {
    horus: {
      codes: ["V28", "E34", "N35", "W24", "Z7", "A17"],
      mdc: "H-wn:n:nw*W-A17",
      transliteration: "ḥwnw",
      translation: "The youth",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 60b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 246-247, 13c:H1" },
      ],
      variants: [
        {
          codes: ["V28", "E34", "N35", "A17", "F35"],
          mdc: "H-wn:n-A17-nfr",
          transliteration: "ḥwnw-nfr",
          translation: "The perfect youth",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 65a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 246-247, 13c:H2" },
          ],
        },
        {
          codes: ["V28", "E34", "N35", "W24", "Z7", "A17", "F35", "M30", "U7", "X1"],
          mdc: "H-wn:n:nw*W-A17-nfr-M30-U7:t",
          transliteration: "ḥwnw-nfr bnr-mrwt",
          translation: "The perfect youth who is sweet of love",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 61a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 246-247, 13c:H3" },
          ],
        },
        {
          codes: ["E1", "N35", "Z9", "D40", "N8", "Aa1", "Z7", "F29A", "Z7", "N5", "Z2", "N6", "N62"],
          mdc: "E1:n-Z9:D40-N8-x:W-F29A-W*ra:Z2-N6:N62",
          transliteration: "kꜢ-nḫt i͗Ꜣḫw-stwt-rꜤ-i͗Ꜥḥ",
          translation: "The strong bull, shining like the beams of Ra and Iah",
        },
      ],
    },
    prenomen: {
      codes: ["Q3", "R8", "F44", "W24", "X1", "N104", "D36", "Q3", "X1", "V28", "U21", "N35", "D4", "N36", "C12C", "C2F", "N35"],
      mdc: "p-nTr-F44:nw*t-N104:a-p:t-H-stp:n-ir:N36-C12C\\*C2F:n",
      transliteration: "i͗wꜤ-pꜢ-nṯr-nti͗-nḥm stp-n-ptḥ i͗ri͗-mꜢꜤt-rꜤ sḫm-(Ꜥnḫ)-n-i͗mn",
      translation: "The heir of the saviour god, chosen by Ptah, who brings forth the Maat of Ra, the living image of Amun",
    },
    nomen: {
      codes: ["Q3", "X1", "V4", "E23", "Aa15", "M17", "M17", "O34"],
      mdc: "p:t-wA-l:M-i-i-z",
      transliteration: "ptwlmys",
      translation: "Ptolemy",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 60b" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 246-247, 13c:E1" },
      ],
      variants: [
        {
          codes: ["Q3", "X1", "V4", "E23", "Aa56", "M17", "M17", "S29", "S34", "I10", "X1", "N17", "Q3", "X1", "V28", "Q1", "X1", "H8", "N36"],
          mdc: "p:t-wA:l-Aa56-i-i-s-anx-D&(t:N17)-p:t-H-st-t:H8-N36",
          transliteration: "ptwlmys Ꜥnḫ-ḏt mri͗-ptḥ-Ꜣst",
          translation: "Ptolemy, living forever, beloved of Ptah and Isis",
          sources: [
            { text: "Weill, La titulature pharaonique de Ptolémée César et ses monuments de Koptos, RecTrav 34 (1912): 82 (1)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 246-247, 13c:E7" },
          ],
        },
        {
          codes: ["Q3", "X1", "V4", "E23", "Aa15", "M17", "M17", "S29", "I10", "D46", "Z7", "X1", "N35", "I9", "N29", "M17", "M17", "S29", "D21", "O34"],
          mdc: "p:t-wA-l:M-i-i-s-D&d-W*t:n:f-q-i-i-s-r:z",
          transliteration: "ptwlmys ḏd.tw-n.f kysrs",
          translation: "Ptolemy, (also) called Caesar",
          sources: [
            { text: "Weill, La titulature pharaonique de Ptolémée César et ses monuments de Koptos, RecTrav 34 (1912): 81-82" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 246-247, 13c:E3" },
          ],
        },
        {
          codes: ["Q3", "X1", "V4", "E23", "Aa15", "M17", "M17", "S29", "I10", "X1", "Z7", "W24", "F51B", "V31", "M17", "M17", "O34", "D21", "O34", "S34", "I10", "X1", "N17", "Q3", "X1", "V28", "Q1", "X1", "H8", "N36"],
          mdc: "p:t-wA-l:M-i-i-s-D&(t:W)-nw*F51B:k-i-i-z:r:z-anx-D&(t:N17)-p:t-H-st-t*H8:N36",
          transliteration: "ptwlmys ḏd.tw-n.f kysrs",
          translation: "Ptolemy called Caesar",
          sources: [
            { text: "Weill, La titulature pharaonique de Ptolémée César et ses monuments de Koptos, RecTrav 34 (1912): 81-82" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 246-247, 13c:E4" },
          ],
        },
        {
          codes: ["Q3", "X1", "V4", "E23", "Aa15", "M17", "M17", "S29", "I10", "X1", "Z7", "W24", "F51B", "V31", "M17", "M17", "O34", "D21", "O34", "S34", "I10", "X1", "N17", "Q3", "X1", "V28", "Q1", "X1", "H8", "N36"],
          mdc: "p:t-wA-l:M-i-i-s-D&&&(t:W)-nw*F51B:k-i-i-z:r:z-anx-D&&&(t:N17)-p:t-H-st-t*H8:N36",
          transliteration: "ptwlmys ḏd-tw kysrs Ꜥnḫ-ḏt mri͗-ptḥ-Ꜣst",
          translation: "Ptolemy called Caesar, living forever, beloved of Ptah and Isis",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 53a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 246-247, 13c:E5" },
          ],
        },
        {
          codes: ["N29", "O4", "M17", "M17", "O34", "D21", "O34", "S34", "I10", "X1", "N17", "Q3", "X1", "V28", "Q1", "X1", "H8", "N3"],
          mdc: "q:h-i-i-z:r:z-anx-D&(t:N17)-p:t-H-st-t:H8-N3",
          transliteration: "kysrs Ꜥnḫ-ḏt mri͗-ptḥ-Ꜣst",
          translation: "Caesar, living forever, beloved of Ptah and Isis",
          sources: [
            { text: "Weill, La titulature pharaonique de Ptolémée César et ses monuments de Koptos, RecTrav 34 (1912): 82 (1)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 246-247, 13c:E6" },
          ],
        },
        {
          codes: ["V31", "M17", "M17", "O34", "D21", "O34"],
          mdc: "k-i-i-z:r:z",
          transliteration: "kysrs",
          translation: "Caesar",
        },
      ],
    },
  },

  augustus: {
    horus: {
      codes: ["V13", "U2", "Z1", "D40", "G36", "D21", "F9", "F9", "V28", "Z7", "W24", "A17", "F35", "M30", "X1", "N29", "S38", "N29", "S38", "Z3", "U21", "N35", "Q3", "X1", "V28", "W24", "W24", "W24", "N1", "N35", "N35", "N35", "X2", "I9", "R8", "Z3"],
      mdc: "T:U2*1-D40:wr-r:F9*F9-H-W:nw-A17-nfr-M30-mr\\-t-q-HqA-q-HqA-Z3-stp:n-p:t-H-nw*nw*nw:N1-n:n:n-X2:f-nTr-Z3",
      transliteration: "ṯmꜢ-Ꜥ wr-pḥti͗ ḥwnw-bnr-mrwt ḥḳꜢ-ḥḳꜢw stp-n-ptḥ-nnw-i͗t-nṯrw",
      translation: "The sturdy-armed one with great strength, the youth sweet of love, ruler of rulers, chosen of Ptah and Nun, the father of the gods",
      sources: [
        { text: "Gauthier, Le temple de Kalabchah, I, plates XLIII—XLVI" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 248-249, 1:H1" },
      ],
      variants: [
        {
          codes: ["D46", "U2", "Z1", "D36", "G43", "D21", "F9", "F9", "Z9", "D40", "V28", "E34", "N35", "W24", "Z7", "A17", "F35", "M30", "U6", "X1"],
          mdc: "d:U2*1-a-w:r-F9*F9:Z9:D40-H-wn:n-nw:W-A17-nfr-M30-mr-t",
          transliteration: "ṯmꜢ-Ꜥ wr-pḥti͗ ḥwnw-bnr-mrwt",
          translation: "The sturdy-armed one with great strength, the youth sweet of love",
        },
      ],
    },
    prenomen: {
      codes: ["A23E", "A23E", "A23E", "A23E", "U21", "N35", "Q3", "X1", "V28"],
      mdc: "A23E-A23E-A23E-A23E-stp:n-p:t-H",
      transliteration: "ḥḳꜢ-ḥḳꜢw stp-n-ptḥ",
      translation: "Ruler of rulers, chosen by Ptah",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text II, 184" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 248-249, 1:T1" },
      ],
      variants: [
        {
          codes: ["S38", "S38", "Z3", "U21", "N35", "Q3", "X1", "V28", "Q1", "X1", "H8", "N36"],
          mdc: "HqA-HqA-Z3-stp:n-p:t-H-st-t:H8-N36",
          transliteration: "ḥḳꜢ-ḥḳꜢw stp-n-ptḥ mri͗-Ꜣst",
          translation: "Ruler of rulers, chosen by Ptah, beloved of Isis",
        },
        {
          codes: ["V31", "M17", "M17", "O34", "D21", "O34"],
          mdc: "k-i-i-z:r:z",
          transliteration: "kysrs",
          translation: "Caesar",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 70g" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 248-249, 1:E2" },
          ],
        },
        {
          codes: ["V31", "M17", "M17", "O34", "I14", "O34"],
          mdc: "k:i*i-z:I14:z",
          transliteration: "kysrs",
          translation: "Caesar",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 70e" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 248-249, 1:E5" },
          ],
        },
        {
          codes: ["G1", "S56", "M17", "M17", "S29", "D21", "O34", "A1"],
          mdc: "A&S56-i-i-s-r:z-A1",
          transliteration: "kysrs",
          translation: "Caesar",
          sources: [
            { text: "Gauthier, Livre des Rois d'Égypte , V, 22 (LXXX B)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 248-249, 1:E8" },
          ],
        },
        {
          codes: ["V31", "M17", "M17", "O34", "D21", "O34", "Q3", "R8"],
          mdc: "k-i-i-z:r:z-p-nTr",
          transliteration: "kysrs pꜢ-nṯr",
          sources: [
            { text: "Kalabsha gate, Berlin" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 248-249, 1:E6" },
          ],
        },
        {
          codes: ["V31", "M17", "M17", "O34", "D21", "O34", "Q3", "N14"],
          mdc: "k-i-i-z:r:z-p:N14",
          transliteration: "kysrs pꜢ-nṯr",
          sources: [
            { text: "Kalabsha gate, Berlin" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 248-249, 1:E7" },
          ],
        },
        {
          codes: ["S56", "G1", "M17", "M17", "S29", "D21", "O34", "S34", "I10", "X1", "N17", "Q3", "X1", "V28", "Q1", "X1", "H8", "U6"],
          mdc: "S56-A-i-i-s-r:z-anx-D&&&(t:N17)-p:t-H-st:t*H8-mr",
          transliteration: "Kysrs Ꜥnḫ-ḏt mri͗-ptḥ-Ꜣst",
          translation: "Caesar, living forever, beloved of Ptah and Isis",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text II, 184" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 248-249, 1:E11" },
          ],
        },
        {
          codes: ["V31", "M17", "M17", "O34", "D21", "G1", "S34", "I10", "X1", "N17", "Q3", "X1", "V28", "Q1", "X1", "H8", "N36"],
          mdc: "k-i-i-z:r-A-s\\-anx-D&&&(t:N17)-p:t-H-st-t:H8-N36",
          transliteration: "Kysrs Ꜥnḫ-ḏt mri͗-ptḥ-Ꜣst",
          translation: "Caesar, living forever, beloved of Ptah and Isis",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 69a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 248-249, 1:E12" },
          ],
        },
        {
          codes: ["N29", "M17", "M17", "O34", "D21", "O34", "S34", "I10", "X1", "N17", "Q3", "X1", "V28", "Q1", "X1", "H8", "N36"],
          mdc: "q-i-i-z:r:z-anx-D&&&(t:N17)-p:t-H-st-t:H8-N36",
          transliteration: "Kysrs Ꜥnḫ-ḏt mri͗-ptḥ-Ꜣst",
          translation: "Caesar, living forever, beloved of Ptah and Isis",
        },
        {
          codes: ["G1", "Z7", "D46", "Z7", "W11", "D21", "D46", "D21"],
          mdc: "A&W-d:W*g-r:d:r",
          transliteration: "Ꜣwtḳrtr",
          translation: "Emperor",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 69a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 248-249, 1:T3" },
          ],
        },
        {
          codes: ["G1", "Z7", "X1", "N29", "D21", "D46", "D21"],
          mdc: "A&W-t:q-r:d:r",
          transliteration: "Ꜣwtḳrtr",
          translation: "Emperor",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 71" },
          ],
        },
        {
          codes: ["G1", "Z7", "X1", "N29", "D21", "X1", "D21"],
          mdc: "A&W-t:q-r:t:r",
          transliteration: "Ꜣwtḳrtr",
          translation: "Emperor",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 71a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 248-249, 1:T5" },
          ],
        },
        {
          codes: ["G1", "Z7", "D182", "D21", "D46", "D21"],
          mdc: "A&W-D182-r:d:r",
          transliteration: "Ꜣwtḳrtr",
          translation: "Emperor",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text IV, 139" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 248-249, 1:T8" },
          ],
        },
        {
          codes: ["G1", "Z7", "W11", "X1", "D21", "D46", "E23", "A1"],
          mdc: "A&W-g*t:r-d:l-A1",
          transliteration: "Ꜣwtḳrtr",
          translation: "Emperor",
        },
      ],
    },
  },

  tiberius: {
    horus: {
      codes: ["U120", "D36", "G36", "D21", "F9", "F9", "Z9", "D40", "V28", "E34", "N35", "W24", "Z7", "A17", "F35", "M30", "U7", "X1", "N29", "S38", "S38", "Z3", "U21", "N35", "Q3", "X1", "V28", "C18C", "W24", "W24", "W24", "N1", "N36", "Z9", "D21", "X1", "I9", "N14", "Z2"],
      mdc: "U120:a-wr:r-F9*F9:Z9:D40-H-wn:n:nw*W-A17-nfr-M30-U7:t*q-HqA-HqA-Z3-stp:n-p:t-H-C18C-nw*nw*nw:N1:N36:Z9*r-t:f:N14*Z2",
      transliteration: "ṯmꜢ-Ꜥ wr-pḥti͗ ḥwnw-nfr bnr-mrwt ḥḳꜢ-ḥḳꜢw stp-n-ptḥ Nnw-i͗t-nṯrw",
      translation: "The sturdy-armed one with great strength, the perfect and popular youth, ruler of rulers, chosen of Ptah and Nun, the father of the gods",
      sources: [
        { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 74c" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 252-253, 2:H1" },
      ],
      variants: [
        {
          codes: ["U120", "Z1", "D36", "D40", "O29v", "F9", "Z9", "F9", "D40", "V28", "E34", "N35", "W24", "Z7", "A17", "F35", "M30", "U7", "X1", "X1", "D176", "S42", "D19", "X1", "N14", "O1", "O1", "X1"],
          mdc: "U120:Z1-a:D40:aAv-F9*Z9*F9:D40-H-wn:n-nw:W-A17-nfr-M30-U7:t*t-D176-sxm-D19:t-N14:pr-pr:t",
          transliteration: "ṯmꜢ-Ꜥ wr-pḥti͗ ḥwnw-nfr bnr-mrwt kꜢ-nsw sḫm-ḫnti͗-pr-dwꜢt",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 74c" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 252-253, 2:H2" },
          ],
        },
        {
          codes: ["U5", "D36", "Z1", "Z12", "D40", "N25", "X1", "Z2", "Z9", "D21", "F9", "F9", "D40", "N35", "Aa1", "Z7", "X1", "D40", "D10", "X1", "O49"],
          mdc: "U5-a:1-Z12:D40-N25:t*Z2-Z9:r-F9*F9:D40-n:x*W*t:D40-D10-t:niwt",
          transliteration: "ṯmꜢ-Ꜥ ḫwi͗-ḫꜢswt wr-pḥti͗ nḫw-bꜢḳt",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text II, 258" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 252-253, 2:H3" },
          ],
        },
        {
          codes: ["V13", "U2", "Z1", "D36", "F105", "C4", "S3", "N21", "N21", "N21", "O49", "Z2", "S29", "G3", "Z7", "Z4", "S40", "Aa15", "G36", "G49", "G28", "D3", "Aa15", "O196", "O196", "X1", "O49"],
          mdc: "T:U2-1:a-F105-C4-S3-N21*N21:N21-niwt:Z2-s-G3-W:y-S40-Aa15:wr-G49-G28-D3:Aa15-O196-O196-t:niwt",
          transliteration: "ṯmꜢ-Ꜥ ḫnmw-n-tꜢw smꜢw-wꜢs-sš-gmi-wš-m-i͗trti͗",
          sources: [
            { text: "CG 22198" },
            { text: "Gauthier, Livre des Rois d'Égypte , V, 38 (LXIV)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 252-253, 2:H4" },
          ],
        },
        {
          codes: ["V13", "U2", "X1", "D36", "F44", "D36", "D36", "X1", "Z1", "S3", "X1", "I9", "Z1", "I9", "S29", "U29A", "I10", "X1", "Z1", "S3", "N29", "U1", "Y1", "I10", "X1", "Z1", "I9"],
          mdc: "T:U2-t:a-F44-a:a:t*1-S3-t:f:1:f-s-U29A-D&&&(t-1)-S3-q&U1:Y1-D&&&(t-1)-f",
          transliteration: "ṯmꜢ-Ꜥ i͗wꜤ-n-i͗t.f swḏꜢ-ḏt-n-ḳmꜢ-ḏt.f",
        },
        {
          codes: ["V13", "M17", "M17", "D58", "D21", "M17", "M17", "O34"],
          mdc: "T-i-i-b-r-i*i:z",
          transliteration: "tybrys",
          translation: "Tiberius",
          sources: [
            { text: "Weill, Parthénios fils de Paminis, prostatès d’Isis à Koptos, ASAE 12 (1912): 6" },
            { text: "Gauthier, Livre des Rois d'Égypte , V, 30 (XIX)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 252-253, 2:E1" },
          ],
        },
        {
          codes: ["U33", "D58", "M17", "M17", "D21", "O34"],
          mdc: "U33-b-i-i-r:z",
          transliteration: "tibrys",
          translation: "Tiberius",
          sources: [
            { text: "Weill, Parthénios fils de Paminis, prostatès d’Isis à Koptos, ASAE 12 (1912): 5" },
            { text: "Gauthier, Livre des Rois d'Égypte , V, 31 (XXVI)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 252-253, 2:E2" },
          ],
        },
        {
          codes: ["D46", "M17", "M17", "D58", "D21", "M17", "M17", "S29"],
          mdc: "d:i*i-b-r:i*i-s",
          transliteration: "tybri͗s",
          translation: "Tiberius",
          sources: [
            { text: "CG 22198" },
            { text: "Gauthier, Livre des Rois d'Égypte , V, 38 (LXIV)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 252-253, 2:E3" },
          ],
        },
        {
          codes: ["X1", "R7", "D21", "M17", "M17", "S29", "V31", "M17", "M17", "S29", "D21", "O34", "S34", "I10", "X1", "N17"],
          mdc: "t*R7:r-i-i-s-k-i-i-s-r:z-anx-D&t:N17",
          transliteration: "tybrys kysrs Ꜥnḫ-ḏt",
          translation: "Tiberius Caesar, living forever",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 75a" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 252-253, 2:E6" },
          ],
        },
        {
          codes: ["X1", "D21", "D58", "M17", "M17", "S29", "N29", "M17", "M17", "S29", "D21", "O34", "S34", "I10", "X1", "N17", "Q1", "X1", "H8", "Q3", "X1", "V28", "N36"],
          mdc: "t:r-b-i-i-s-q-i-i-s-r:z-anx-D&t:N17-st-t:H8-p:t-H-N36",
          transliteration: "tbrys kysrs Ꜥnḫ-ḏt mri͗-Ꜣst-ptḥ",
          translation: "Tiberius Caesar, living forever, beloved of Isis and Ptah",
        },
      ],
    },
  },

  caligula: {
    horus: {
      codes: ["E1", "W24", "Z9", "D40", "G25", "Aa1", "Z7", "S29", "X1", "Z7", "N8", "Z2A", "C2B", "C1A"],
      mdc: "E1-nw*Z9:D40-G25-x:W-s-t:W-N8-Z2A-C2B-C1A",
      transliteration: "kꜢ-nḫt i͗Ꜣḫ-stwt-rꜤ-i͗Ꜥh",
      translation: "The strong bull, the light of the sun and the moon's rays",
      variants: [
        {
          codes: ["N29", "T12", "M17", "S29", "S56", "T12", "M17", "S29", "S56", "E23", "O34", "S56", "D21", "Aa56", "W24", "M17", "M17", "N29", "V6", "S34", "I10", "X1", "N17"],
          mdc: "q&Ai-i-s-S56&Ai-i-s-S56:l-z:S56*r-Aa56-nw-i-i-q:V6-anx-D&t:N17",
          transliteration: "kysrs krwnyḳs?",
          translation: "Caesar Germanicus, living forever",
        },
        {
          codes: ["A23E", "S38", "Z2A", "G1", "Z7", "X1", "W11", "E23", "D46", "D21", "C102", "C159A"],
          mdc: "A23E-HqA-Z2A-A-W*t:g-rw:d:r-C102\\-C159A",
          transliteration: "Ꜣwtkrtr ḥḳꜢ-ḥḳꜢw mri͗-ptḥ-Ꜣst",
          translation: "Emperor and ruler of rulers, beloved by Ptah and Isis",
        },
      ],
    },
  },

  claudius: {
    horus: {
      codes: ["E1", "D40", "R11", "N8", "H6", "Z1", "N27", "X1", "O1"],
      mdc: "E1:D40-Dd-N8-Sw-1-N27:t*O1",
      transliteration: "kꜢ-nḫt ḏd-i͗Ꜣḫ-šw-(m)-Ꜣḫt",
      translation: "The strong bull of the stable moon on the horizon?",
      variants: [
        {
          codes: ["X1", "R7", "E23", "O34", "V31", "D21", "G43", "D46", "M17", "M17", "O34"],
          mdc: "t:R7-l:z-k:r-w-d-i*i:z",
          transliteration: "ti͗brws krwdi͗s?",
          translation: "Tiberius Claudius",
        },
        {
          codes: ["S38", "S38", "Z1", "Z1", "Z1", "G1", "Z7", "X1", "Z7", "W11", "D21", "X1", "D153", "C159A", "C102", "N36"],
          mdc: "HqA-HqA-1:1*1-A&W-t:W-g:r-t:D153-C159A\\-C102-N36",
          transliteration: "Ꜣwtkrtr ḥḳꜢ-ḥḳꜢw mri͗-Ꜣst-ptḥ",
          translation: "Emperor and ruler of rulers, beloved of Isis and Ptah",
        },
      ],
    },
  },

  nero: {
    horus: {
      codes: ["D46", "U2", "Z1", "D36", "A24", "N25", "Z2", "G36", "D21", "N35", "M3", "Aa1", "D54", "D10", "S38", "S38", "S38", "U21", "N35", "W24", "W24", "W24", "N1", "N36", "Z9", "D21"],
      mdc: "d:U2*1:a-A24-N25:Z2-wr:r-n:xt:x*D54-D10-HqA-HqA-HqA-stp:n-nw*nw*nw:N1-N36:Z9*r",
      transliteration: "ṯmꜢ-Ꜥ ḥwi͗-ḫꜢswt wr-nḫw-bꜢḳt ḥḳꜢ-ḥḳꜢw stp-n-nnw-mrwr",
      translation: "The sturdy-armed one who struck the foreign lands, victorious for Egypt, ruler or rulers, chosen of Nun who loves him",
      sources: [
        { text: "Weill, Parthénios fils de Paminis, prostatès d’Isis à Koptos, ASAE 12 (1912): 15" },
        { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 254-255, 5:H1" },
      ],
      variants: [
        {
          codes: ["V13", "U2", "Z12", "N25", "X1", "Z2A"],
          mdc: "T:U2-Z12:N25-t:Z2A",
          transliteration: "ṯmꜢ-Ꜥ hwi͗-ḫꜢswt",
          translation: "The sturdy-armed one who struck the foreign lands",
        },
      ],
    },
    prenomen: {
      codes: ["S38", "S38", "Z3", "U21", "N35", "C159A", "C102", "N36"],
      mdc: "HqA-HqA-Z3-stp:n-C159A\\-C102-N36",
      transliteration: "ḥḳꜢ-ḥḳꜢw stp-n-ptḥ mri͗-Ꜣst",
      translation: "Ruker of rulers, chosen by Ptah, beloved of Isis",
      variants: [
        {
          codes: ["N35", "D36", "D21", "N35", "Z1"],
          mdc: "n:a-r:n-1",
          transliteration: "nꜤrwn",
          translation: "Nero",
          sources: [
            { text: "Lefebvre, Rapport sur les fouilles exécutées à Tehnéh en 1903-1904, ASAE 6: (1905): 146" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 254-255, 5:E1" },
          ],
        },
        {
          codes: ["N35", "M17", "W24", "Z4"],
          mdc: "n:Al-i-nw:y",
          transliteration: "nꜤri͗nw",
          translation: "Nero",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text II, 253α" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 254-255, 5:E2" },
          ],
        },
        {
          codes: ["N35", "D21", "Z7", "X1", "W11", "Z7", "M17", "Aa18", "M17"],
          mdc: "n:r:W*t-g:W-i-Aa18-i",
          transliteration: "nrwt gwi͗zꜢi͗?",
          translation: "Nero Claudius",
          sources: [
            { text: "Petrie, Koptos, plate XXII" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 254-255, 5:E3" },
          ],
        },
        {
          codes: ["N35", "G1", "Z4", "E23", "M17", "M17", "W11", "D21", "Z4", "X1", "M17", "M17", "S29"],
          mdc: "n:A&y-l-i-i-g:r-y:t-i-i-s",
          transliteration: "",
          translation: "Nero Claudius",
          sources: [
            { text: "Weill, Parthénios fils de Paminis, prostatès d’Isis à Koptos, ASAE 12 (1912): 15" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 254-255, 5:E5" },
          ],
        },
        {
          codes: ["N35", "D36", "D21", "N35", "N29", "D153", "Z7", "X1", "M17", "M17", "S29", "Aa1", "D237"],
          mdc: "n:a-r:n-q:D153-W:t-i-i-s-x:D237",
          transliteration: "nꜤrn ḳlwtys nti͗-ḫw",
          translation: "Nero Claudius Augustus",
          sources: [
            { text: "Lefebvre, Rapport sur les fouilles exécutées à Tehnéh en 1903-1904, ASAE 6: (1905): 146" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 254-255, 5:E6" },
          ],
        },
        {
          codes: ["N29", "M17", "M17", "O34", "D153", "H8", "N29", "D153", "Aa56", "W24", "N29", "O34"],
          mdc: "q-i-i-z:D153*H8-q:D153-Aa56-nw*q:z",
          transliteration: "kysrs krmnwks",
          sources: [
            { text: "Lepsius, Hieroglyphische Inschriften in den Oasen von Kargieh und Dakileh, ZÄS 12 (1874): 79" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 254-255, 5:T2" },
          ],
        },
        {
          codes: ["N35", "E23", "N35", "V31", "D21", "Z7", "X1", "O34", "V31", "O34", "M17", "M17", "D21", "O34", "W24", "X1", "Z4", "D237", "Aa1"],
          mdc: "n:l:n-k:r:W*t-z:k:z-i-i-r:z:nw*t*y-D237:Aa1",
          transliteration: "Neron KlꜤudios KꜤisꜤros nti͗ḫw",
          translation: "Nero Claudius Caesar Augustus",
        },
        {
          codes: ["X1", "G1", "Z7", "Z7", "W11", "D153", "D46", "D21", "G1", "W24", "E23", "M17", "W24", "Z4"],
          mdc: "t&A&W-W-g-D153-d:r-A&nw-l-i-nw:y",
          transliteration: "",
          translation: "Emperor Nero",
        },
      ],
    },
  },

  titus: {
    horus: {
      codes: ["V28", "E34", "N35", "W25", "Z7", "A17", "F35", "M30", "U7", "X1"],
      mdc: "H-wn:n-ini:W-A17-nfr-M30-U7\\:t",
      transliteration: "ḥwnw-nfr bnr-mrwt",
      translation: "The perfect and popular youth",
      variants: [
        {
          codes: ["X1", "M17", "M17", "X1", "O34", "Z1"],
          mdc: "t-i-i-t:z:1",
          transliteration: "tyts",
          translation: "Titus",
          sources: [
            { text: "Lepsius, Hieroglyphische Inschriften in den Oasen von Kargieh und Dakileh, ZÄS 12 (1874): 79" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 256-257, 10:T1" },
          ],
        },
        {
          codes: ["Z7", "O34", "Q3", "M17", "S3", "M17", "O34", "W24", "X1", "Aa1", "D237"],
          mdc: "W:z-p:Aa18A-i-S3-i-z:nw*t-x:D237",
          transliteration: "ouespꜤsiꜤnos nti͗ ḫw",
          translation: "Vespasianus Augustus",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 81d" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 256-257, 10:E1" },
          ],
        },
        {
          codes: ["Z7", "N1", "S29", "M17", "M17", "N35", "O34", "Aa1", "D237"],
          mdc: "W*Aa18A:N1-s-i-i-n:z-x:D237",
          transliteration: "ouespꜤsiꜤnos nti͗ ḫw",
          translation: "Vespasianus Augustus",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text IV, 32" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 256-257, 10:E2" },
          ],
        },
        {
          codes: ["G43", "Z4", "S29", "N1", "E10", "M17", "M17", "S3", "O34", "I3", "X1", "Z4", "Aa1", "D237"],
          mdc: "w&y-s-N1:E10-i-i-S3-z:I3-t:y-x:D237",
          transliteration: "ouespꜤsiꜤnos nti͗ ḫw",
          translation: "Vespasianus Augustus",
        },
        {
          codes: ["Z4", "Z7", "N17", "W11", "D153", "N17", "D21", "X1", "M17", "X1", "M17", "O34", "V31", "O34", "D21", "O34"],
          mdc: "y:W-N17:g*D153-N17:r-t-i-t-i-z:k-z:r:z",
          transliteration: "",
          translation: "Emperor Titus Caesar",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 81d" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 256-257, 10:T2" },
          ],
        },
        {
          codes: ["Z4", "Z7", "N17", "V31", "D153", "X1", "D21", "X1", "X1", "S29", "V31", "O34", "D21", "O34"],
          mdc: "y*W:N17:k-D153*t:r:t*t-s-k:z:r:z",
          transliteration: "",
          translation: "Emperor Titus Caesar",
        },
      ],
    },
  },

  domitianus: {
    horus: {
      codes: ["V28", "E34", "W24", "Z7", "A17", "W24", "X1", "Z9", "D40", "V15", "Z9", "D40", "Aa56", "S42", "Z9", "D40"],
      mdc: "H-wn:nw*W-A17-nw*t:Z9:D40-V15-Z9:D40-Aa56-sxm-Z9:D40",
      transliteration: "ḥwnw-nḫt i͗ti͗-m-sḫm.f",
      translation: "The mighty youth, his power will be stronger?",
    },
    golden: {
      codes: ["F12", "S29", "Z3", "M127", "M3B", "Z9", "D40"],
      mdc: "wsr-s-Z3-M127-M3B-Z9:D40",
      transliteration: "wsr-rnpwt ꜤꜢ-nḫtw",
      translation: "Rich in years and great of victories",
    },
    prenomen: {
      codes: ["H8", "G5", "N14", "R8A", "N36", "V30"],
      mdc: "H8&G5&N14-nTrw-N36:nb",
      transliteration: "ḥr-zꜢ-Ꜣst mri͗-nṯrw-nb(w)",
      translation: "Horus, son of Isis, beloved of the gods?",
      variants: [
        {
          codes: ["X1", "Z7", "Aa15", "X1", "M17", "M17", "D58", "X1", "V31", "D21", "Aa15", "S3", "M17", "M17", "N29", "O34"],
          mdc: "t:W-Aa15:t*i*i-s\\-b-Aa18A:t-k:r:Aa15-S3-i-i-q:z",
          transliteration: "twmty sbst krmnyḳs",
          translation: "The Venerable Dominitianus Caesar",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text IV, 153" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 256-257, 11:E7" },
          ],
        },
        {
          codes: ["X1", "Z7", "Aa15", "M17", "M17", "X1", "W24", "S29"],
          mdc: "t*W:Aa15-i-i-t:nw-s",
          transliteration: "dwmytnws",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text IV, 154" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 256-257, 11:E2" },
          ],
        },
        {
          codes: ["L1", "Aa15", "U33", "M17", "M17", "D36", "N35", "O34"],
          mdc: "xpr:Aa15-U33-i-i-a:n:z",
          transliteration: "?-mtyꜤnz",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text II, 163" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 256-257, 11:E5" },
          ],
        },
        {
          codes: ["L1", "N36", "X8", "A17", "N11", "O34"],
          mdc: "xpr-N36-X8-A17*iaH\\R90:z",
          transliteration: "?-mi-di-ni-iꜤḥ-z",
          sources: [
            { text: "Benevento obelisk B" },
            { text: "Erman, Die Obelisken der Kaiserzeit, ZÄS 34 (1896), 158-159, pl. 8 (B2)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 256-257, 11:E8" },
          ],
        },
        {
          codes: ["L1", "N36", "X8", "N35", "N11", "A17"],
          mdc: "xpr-N36-X8-n:iaH\\R90*A17",
          transliteration: "?-mi-di-n-iꜤḥ-ni",
          sources: [
            { text: "Benevento obelisk A" },
            { text: "Erman, Die Obelisken der Kaiserzeit, ZÄS 34 (1896), 158-159, pl. 8 (A2)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 256-257, 11:E9" },
          ],
        },
        {
          codes: ["L1", "Aa15", "D37", "A17", "N11", "O34"],
          mdc: "xpr-Aa15:D37-A17*iaH\\R90:z",
          transliteration: "?-mi-iꜤḥ-z",
          sources: [
            { text: "Benevento obelisk A" },
            { text: "Erman, Die Obelisken der Kaiserzeit, ZÄS 34 (1896), 158-159, pl. 8 (A3)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 256-257, 11:E10" },
          ],
        },
        {
          codes: ["D46", "Z7", "D46", "D46", "M17", "M17", "S3", "S29", "N35", "X1", "Z4", "Aa1", "D237", "Z7", "Z4"],
          mdc: "d:W:d-d:i*i-S3-s-n:t*y-x:D237:W*y",
          transliteration: "dwdyns nti͗-ḫw",
          translation: "Domitianos Augustus",
          sources: [
            { text: "Stela BM EA709" },
            { text: "Mond & Myers, The Bucheum, III, pl. 44 (16)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 256-257, 11:E1" },
          ],
        },
        {
          codes: ["X1", "G43", "Aa15", "M17", "X1", "W24", "M17", "E10", "W24", "X1", "Aa1", "D237"],
          mdc: "t&w:Aa15-i-t:nw-i-E10-nw:t-x:D237",
          transliteration: "twmitnwiḥ nti͗-ḫw",
          translation: "Domitianos Augustus",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 81e" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 256-257, 11:E3" },
          ],
        },
        {
          codes: ["D52", "Aa15", "M17", "X1", "W24", "M17", "E10", "Aa1", "D237"],
          mdc: "D52:Aa15-i-t:nw-i-E10-x:D237",
          transliteration: "tmitiḥ nti͗-ḫw",
          translation: "Domitianos Augustus",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text IV, 14" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 256-257, 11:E4" },
          ],
        },
        {
          codes: ["L1", "G17", "M17", "X1", "W24", "F51B", "M17", "Aa1", "D237", "V31", "E23", "Aa15", "M17", "N29", "Z7", "M17"],
          mdc: "xpr-m-i-t:nw:F51B-i-x:D237-k:l:Aa15-i-q:W-i",
          transliteration: "",
        },
      ],
    },
  },

  "antoninus-pius": {
    horus: {
      codes: ["N35", "I9", "D21", "Y1", "I64", "R8", "N16A", "N25", "V28", "E34", "N35", "W24", "Z7", "A17", "F51", "M140B", "Aa56", "M29", "M29", "F34", "Z1", "F51", "Y1v", "V15", "Z9", "D40", "W24", "F51", "Z1", "Z1", "W24", "V30", "X1", "O49", "S38", "N29", "Z9", "D40", "W24", "I9", "G5", "N21", "N21", "N23", "N23", "N21", "N23", "H8", "Z7", "I9", "X1", "Z1", "N35", "U21", "W24", "Z7", "W15A", "Aa1", "W15A", "Aa1"],
      mdc: "n:f:r:Y1-I64-nTr-N16A:N25-H-wn:n:nw*W-Xrd&F51-M140B-wAD9B-Aa56-nDm-nDm-ib:1:F51-Y1v-iTi:Z9:D40:nw*F51-4:2*nw:nb:t*niwt-HqA-q*Z9:D40:nw:f-G5&1-N21*N21:N23*N23:N21:N23-H8*W:f:t*1:\"???\"-n:stp:nw*W-W15A:x-W15A:x",
      transliteration: "",
      variants: [
        {
          codes: ["G1", "W24", "N16A", "N35", "M17", "M17", "D21", "O34", "W24", "X1", "S45", "D1", "X1", "R12", "I10", "X1", "N17"],
          mdc: "A&nw-N16A:n-i-i-r:z:nw*t-S45-D1:t&R12-D&t:N17",
          transliteration: "",
          translation: "Antoninus Augustus, living forever",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text II, 249" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 260-261, 15:E5" },
          ],
        },
        {
          codes: ["G1", "S3", "L1", "N21", "N35", "M17", "M17", "N35", "O34", "W24", "X1", "Aa1", "D237", "D1", "R1G", "C98B"],
          mdc: "A&S3-xpr:N21-n:i*i-n:z:nw*t-x:D237-D1:R1G-C98B",
          transliteration: "",
          translation: "Antoninus Augustus, living forever",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text II, 249" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 260-261, 15:E6" },
          ],
        },
        {
          codes: ["D138", "N16A", "N35", "M17", "M17", "W24", "O34", "W24", "X1", "S45", "S34", "I10", "X1", "N17"],
          mdc: "D138:N16A:n-i*i*nw:z-nw:t-S45-anx-D&t:N17",
          transliteration: "",
          translation: "Antoninus Augustus, living forever",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text II, 249" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 260-261, 15:E7" },
          ],
        },
        {
          codes: ["W10", "W24", "A31B", "N35", "M17", "M17", "S3", "S29", "N35", "X1", "Z4", "Aa1", "D237", "M17", "Z7", "Z1", "Z1", "Z1", "O34", "R7", "Z7", "O34"],
          mdc: "iab:nw-A31B-n:i*i-S3-s-n:t*y-x:D237-i-W:1*1:1-z:snTr*W:z",
          transliteration: "",
          translation: "Antoninus Augustus the Pious",
          sources: [
            { text: "Mond and Myers, The Bucheum, III, plate 45 (17)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 260-261, 15:E1" },
          ],
        },
        {
          codes: ["D6", "N16A", "N35", "M17", "M17", "W24", "H8", "W24", "X1", "S37", "W10", "Z7", "S29", "R7", "Z7", "O34"],
          mdc: "D6:N16A-n:i*i*(nw:H8)-nw:t-S37-W10:W-s-R7*W:z",
          transliteration: "",
          translation: "Antoninus Augustus the Pious",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 87b" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 260-261, 15:E8" },
          ],
        },
        {
          codes: ["W10", "X1", "X1", "Z7", "N35", "M17", "M17", "W24", "H8", "O34", "D58", "S29", "U33", "O34", "G43", "S29", "R7", "Z7", "O34", "N35", "X1", "Z4", "Aa1", "D237", "Z7", "Z4"],
          mdc: "iab:t-t*W:n-i-i-nw*H8:z-b-s-ti-z:w*s-snTr*W:z-n:t*y-x:D237-W:y",
          transliteration: "",
          translation: "Antoninus the Pious Augustus",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text III, 149" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 260-261, 15:E2" },
          ],
        },
        {
          codes: ["D8B", "N17", "N16A", "M23", "W24", "W24", "M23", "N35", "C98D", "E11", "O34", "U33", "S29", "W10", "Z7", "O34", "R7", "Z7", "Aa18"],
          mdc: "D8B:N17:N16A-(sw-nw:nw-sw):n-C98D-E11:z-ti-s-iab*W:z-snTr*W:Aa18",
          transliteration: "",
          translation: "Antoninus Augustus the Pious",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text II, 260" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 260-261, 15:E11" },
          ],
        },
        {
          codes: ["W10", "N35", "X1", "Z7", "W25", "M17", "M17", "N35", "O34", "S29", "D58", "S29", "X1", "H8", "W10", "Z7", "H8", "D58", "G43", "S29", "N35", "X1", "Z7", "Aa1", "D237", "Z7", "Z4"],
          mdc: "iab:n:t*W-ini-i-i-n:z-s-b-s-t:H8-iab:W:H8-b-w-s-n:t*W-x:D237-W:y",
          transliteration: "",
          translation: "The venerable Antoninus Augustus the Pious",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text III, 149" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 260-261, 15:E3" },
          ],
        },
        {
          codes: ["M8A", "M17", "M17", "I14C", "N35", "D10A", "O49", "X1", "G1", "W24", "N16", "M17", "M17", "W24", "N14", "N35", "X1", "Z4", "Aa1", "D237"],
          mdc: "M8A-i-i-I14C:n-D10A-niwt:t-A&nw:tA-i-i-nw:N14-n:t*y-x:D237",
          transliteration: "Ꜥntoninos šꜢi͗-n-bꜢḳt",
          translation: "Antoninus Augustus Baqet",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text II, 254" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 260-261, 15:E12" },
          ],
        },
        {
          codes: ["D36", "N35", "N16", "S3", "M17", "M17", "N35", "O34", "R24", "X1", "Z4", "Aa1", "D237", "M17", "Z7", "Z4"],
          mdc: "a:n:tA-S3-i-i-n:z-R24:t*y-x:D237-i-W:y-//",
          transliteration: "",
          translation: "Antoninus Augustus the Pious",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text III, 149" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 260-261, 15:E4" },
          ],
        },
        {
          codes: ["D7A", "N17", "M17", "S3", "M17", "S3", "S1"],
          mdc: "D7A:N17-i-S3-i-S3-S1",
          transliteration: "",
          translation: "Antoninus",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, Text II, 254" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 260-261, 15:E10" },
          ],
        },
        {
          codes: ["D6", "N16A", "N35", "M17", "W24", "W24", "M17", "O34", "L1", "I10", "X1", "N17"],
          mdc: "D6:N16A:n-i-nw:nw-i-z:xpr\\R270-D&t:N17",
          transliteration: "",
          translation: "Antoninus, living forever",
        },
        {
          codes: ["Z7", "G1", "X1", "Z7", "W11", "D21", "X1", "Z7", "V31", "M17", "M17", "S29", "D21", "O34", "X1", "X1", "H8", "W10", "E23", "M17", "M17", "S29", "G1", "X1", "M17", "W24", "M17", "O34"],
          mdc: "W&A-t:W-g:r-t:W-R-k:i*i*s-r:z:t*t*H8-iab:rw-i-i-s-A-t:R-i*nw*i:z",
          transliteration: "",
          translation: "Emperor Caesar Titus Aelius Hadrianus",
          sources: [
            { text: "Mond and Myers, The Bucheum, III, plate 45 (17)" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 260-261, 15:T1" },
          ],
        },
        {
          codes: ["Z7", "X1", "Z7", "G1", "W11", "X1", "Z7", "D21", "V31", "H8", "H8", "X1", "M17", "M17", "X1", "H8", "W10", "S29", "W10", "X1", "M17", "M17", "W24", "H8"],
          mdc: "W:t-W-A&&&(g*R:t*W)-r:k:H8*R*H8:t-i*i:t*H8-W10:R-s-W10:t:R-i*i:nw*H8",
          transliteration: "",
          translation: "Emperor Caesar Titus Aelius Hadrianus",
          sources: [
            { text: "Lepsius, Denkmäler aus Ägypten und Äthiopien, IV, 87b" },
            { text: "Beckerath, “Handbuch der ägyptischen Königsnamen”, 2nd ed. MÄS 49 (1999). 260-261, 15:T2" },
          ],
        },
        {
          codes: ["X1", "G1", "X1", "W11", "V31", "D36", "H8", "H8", "V13", "M17", "M17", "U33", "S29", "W10", "H8", "W10", "X1", "M17", "M17", "N35", "O34"],
          mdc: "R:t-A&&&(t:g)-k:a-H8*R*H8:T-i-i-ti-s-W10:H8-W10:t:R-i-i-n:z",
          transliteration: "",
          translation: "Emperor Caesar Titus Aelius Hadrianus",
        },
      ],
    },
  },

};
