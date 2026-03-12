import type { RoyalNames } from "@/lib/types";

export const ROYAL_NAMES: Record<string, RoyalNames> = {
  // ─── Predynastic / Early Dynastic ────────────────────────────────────────────

  narmer: {
    horus: {
      codes: ["N35", "R14"],
      transliteration: "nꜥr-mr",
      translation: "Striking catfish",
    },
  },

  djer: {
    horus: {
      codes: ["D45"],
      transliteration: "ḏr",
      translation: "Horus Who Nurtures",
    },
  },

  den: {
    horus: {
      codes: ["D46", "N35"],
      transliteration: "dn",
      translation: "Horus Who Strikes",
    },
  },

  khasekhemwy: {
    horus: {
      codes: ["S42", "S42", "G43", "D36"],
      transliteration: "ḫꜥ-sḫm.wy",
      translation: "The Two Powers Have Appeared",
    },
  },

  // ─── Old Kingdom ─────────────────────────────────────────────────────────────

  djoser: {
    horus: {
      codes: ["N29", "S29", "D21"],
      transliteration: "nṯr.j-ḫt",
      translation: "Divine of Body",
    },
    nomen: {
      codes: ["D45", "S29", "D21"],
      transliteration: "ḏsr",
      translation: "Holy One",
    },
  },

  sneferu: {
    horus: {
      codes: ["N35", "D58", "S29", "I9", "D21", "G43"],
      transliteration: "nb-mꜣꜥt",
      translation: "Lord of Maat",
    },
    prenomen: {
      codes: ["S29", "N35", "I9", "D21", "G43"],
      transliteration: "snfr.w",
      translation: "He of Beauty",
    },
  },

  khufu: {
    horus: {
      codes: ["G5", "D28", "G43", "I9", "G43"],
      transliteration: "mḏd.w",
      translation: "The One Who Strikes",
    },
    prenomen: {
      codes: ["Aa1", "G43", "I9", "G43"],
      transliteration: "ḫwfw",
      translation: "He Protects Me",
    },
    nomen: {
      codes: ["Aa1", "G43", "I9", "G43"],
      transliteration: "ḫwfw",
      translation: "Khufu",
    },
  },

  khafra: {
    prenomen: {
      codes: ["G43", "S29", "D21", "Aa1", "I9"],
      transliteration: "wsr-jb",
      translation: "Strong of Heart",
    },
    nomen: {
      codes: ["Aa1", "I9", "D21", "G43"],
      transliteration: "ḫꜥ.f-rꜥ",
      translation: "Ra Appears",
    },
  },

  menkaura: {
    prenomen: {
      codes: ["Y5", "N35", "Aa1", "G43", "D21", "G43"],
      transliteration: "mn-kꜣw-rꜥ",
      translation: "Eternal Like the Kas of Ra",
    },
  },

  unas: {
    prenomen: {
      codes: ["G43", "N35", "M17", "S29"],
      transliteration: "wnis",
      translation: "Unas",
    },
  },

  "pepi-ii": {
    prenomen: {
      codes: ["N35", "I9", "D21", "Aa1", "D28", "D21", "G43"],
      transliteration: "nfr-kꜣ-rꜥ",
      translation: "Beautiful Is the Ka of Ra",
    },
    nomen: {
      codes: ["Q3", "Q3", "M17"],
      transliteration: "ppj",
      translation: "Pepi",
    },
  },

  // ─── Middle Kingdom ──────────────────────────────────────────────────────────

  "mentuhotep-ii": {
    prenomen: {
      codes: ["N35", "D58", "F12", "Q3", "X1", "D21", "G43"],
      transliteration: "nb-ḥpt-rꜥ",
      translation: "Lord of the Rudder of Ra",
    },
    nomen: {
      codes: ["Y5", "N35", "X1", "G43", "F12", "X1", "Q3"],
      transliteration: "mnṯw-ḥtp",
      translation: "Montu Is Satisfied",
    },
  },

  "senusret-iii": {
    prenomen: {
      codes: ["Aa1", "I9", "Aa1", "D21", "G43"],
      transliteration: "ḫꜥ-kꜣw-rꜥ",
      translation: "Appearing Like the Kas of Ra",
    },
    nomen: {
      codes: ["S29", "N35", "G43", "S29", "D21", "X1"],
      transliteration: "s-n-wsrt",
      translation: "Man of Wosret",
    },
  },

  "amenemhat-iii": {
    prenomen: {
      codes: ["N35", "Y5", "D28", "X1", "D21", "G43"],
      transliteration: "n-mꜣꜥ.t-rꜥ",
      translation: "Belonging to the Justice of Ra",
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "G17", "F12", "X1", "Q3"],
      transliteration: "jmn-m-ḥꜣt",
      translation: "Amun Is at the Head",
    },
  },

  neferusobek: {
    prenomen: {
      codes: ["S29", "D58", "Aa1", "Aa1", "N35", "I9", "D21", "G43"],
      transliteration: "sbk-kꜣ-rꜥ",
      translation: "Sobek Is the Ka of Ra",
    },
    nomen: {
      codes: ["N35", "I9", "D21", "G43", "S29", "D58", "Aa1"],
      transliteration: "nfrw-sbk",
      translation: "Beauty of Sobek",
    },
  },

  // ─── New Kingdom ─────────────────────────────────────────────────────────────

  "ahmose-i": {
    prenomen: {
      codes: ["N35", "D58", "Q3", "F12", "X1", "D21", "G43"],
      transliteration: "nb-pḥtj-rꜥ",
      translation: "Lord of Strength Is Ra",
    },
    nomen: {
      codes: ["G29", "F12", "G17", "S29"],
      transliteration: "jꜥḥ-ms",
      translation: "Born of the Moon",
    },
  },

  hatshepsut: {
    prenomen: {
      codes: ["Y5", "D28", "X1", "Aa1", "D21", "G43"],
      transliteration: "mꜣꜥt-kꜣ-rꜥ",
      translation: "Truth Is the Ka of Ra",
    },
    nomen: {
      codes: ["F12", "X1", "S29", "Q3", "S29", "G43", "X1"],
      transliteration: "ḥꜣt-šps.wt",
      translation: "Foremost of Noble Women",
    },
  },

  "thutmose-iii": {
    prenomen: {
      codes: ["Y5", "N35", "Aa1", "Q3", "D21", "G43"],
      transliteration: "mn-ḫpr-rꜥ",
      translation: "Eternal Is the Manifestation of Ra",
    },
    nomen: {
      codes: ["G26", "Y5", "S29"],
      transliteration: "ḏḥwtj-ms",
      translation: "Born of Thoth",
    },
  },

  "amenhotep-iii": {
    prenomen: {
      codes: ["N35", "D58", "Y5", "D28", "X1", "D21", "G43"],
      transliteration: "nb-mꜣꜥt-rꜥ",
      translation: "Lord of Truth Is Ra",
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "F12", "X1", "Q3"],
      transliteration: "jmn-ḥtp",
      translation: "Amun Is Satisfied",
    },
  },

  akhenaten: {
    prenomen: {
      codes: ["N35", "I9", "D21", "Aa1", "Q3", "D21", "G43"],
      transliteration: "nfr-ḫprw-rꜥ",
      translation: "Beautiful Are the Manifestations of Ra",
    },
    nomen: {
      codes: ["G25", "Aa1", "N35", "M17", "X1", "N35"],
      transliteration: "ꜣḫ-n-jtn",
      translation: "Effective for Aten",
    },
  },

  tutankhamun: {
    prenomen: {
      codes: ["N35", "D58", "Aa1", "Q3", "D21", "G43"],
      transliteration: "nb-ḫprw-rꜥ",
      translation: "Lord of the Forms of Ra",
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "X1", "G43", "X1", "S34", "Aa1"],
      transliteration: "twt-ꜥnḫ-jmn",
      translation: "Living Image of Amun",
    },
  },

  horemheb: {
    prenomen: {
      codes: ["D45", "S29", "D21", "Aa1", "Q3", "D21", "G43"],
      transliteration: "ḏsr-ḫprw-rꜥ",
      translation: "Holy Are the Manifestations of Ra",
    },
    nomen: {
      codes: ["F12", "D21", "G17", "F12", "D58"],
      transliteration: "ḥr-m-ḥb",
      translation: "Horus Is in Jubilation",
    },
  },

  "seti-i": {
    prenomen: {
      codes: ["Y5", "N35", "Y5", "D28", "X1", "D21", "G43"],
      transliteration: "mn-mꜣꜥt-rꜥ",
      translation: "Eternal Is the Truth of Ra",
    },
    nomen: {
      codes: ["C7", "X1", "M17"],
      transliteration: "stẖj",
      translation: "Man of Seth",
    },
  },

  "ramesses-ii": {
    prenomen: {
      codes: ["G43", "S29", "D21", "Y5", "D28", "X1", "D21", "G43"],
      transliteration: "wsr-mꜣꜥt-rꜥ stp-n-rꜥ",
      translation: "Powerful Is the Truth of Ra, Chosen of Ra",
    },
    nomen: {
      codes: ["N5", "Y5", "S29", "S29", "G43"],
      transliteration: "rꜥ-ms-sw",
      translation: "Ra Bore Him",
    },
  },

  "ramesses-iii": {
    prenomen: {
      codes: ["G43", "S29", "D21", "Y5", "D28", "X1", "D21", "Y5", "D21", "M17"],
      transliteration: "wsr-mꜣꜥt-rꜥ mry-jmn",
      translation: "Powerful Is the Truth of Ra, Beloved of Amun",
    },
    nomen: {
      codes: ["N5", "Y5", "S29", "S29", "G43"],
      transliteration: "rꜥ-ms-sw",
      translation: "Ra Bore Him",
    },
  },

  // ─── Third Intermediate / Late Period ────────────────────────────────────────

  "shoshenq-i": {
    prenomen: {
      codes: ["F12", "D45", "Aa1", "Q3", "D21", "G43"],
      transliteration: "ḥḏ-ḫpr-rꜥ",
      translation: "Bright Is the Manifestation of Ra",
    },
    nomen: {
      codes: ["S29", "S29", "N35", "Q1"],
      transliteration: "ššnq",
      translation: "Shoshenq",
    },
  },

  piye: {
    prenomen: {
      codes: ["G43", "S29", "D21", "Y5", "D21", "G43"],
      transliteration: "wsr-mꜣꜥt-rꜥ",
      translation: "Powerful Is the Truth of Ra",
    },
    nomen: {
      codes: ["Q3", "M17", "G43"],
      transliteration: "pjy",
      translation: "Piye",
    },
  },

  taharqa: {
    prenomen: {
      codes: ["N35", "I9", "D21", "X1", "Y5", "G43"],
      transliteration: "nfr-tm",
      translation: "Perfect One of Atum",
    },
    nomen: {
      codes: ["X1", "F12", "D21", "Q1"],
      transliteration: "tꜣhrq",
      translation: "Taharqa",
    },
  },

  "psamtik-i": {
    prenomen: {
      codes: ["G43", "F12", "M17", "D58", "D21", "G43"],
      transliteration: "wꜣḥ-jb-rꜥ",
      translation: "Constant Is the Heart of Ra",
    },
    nomen: {
      codes: ["Q3", "S29", "Y5", "X1", "Aa1"],
      transliteration: "psmṯk",
      translation: "Psamtik",
    },
  },

  // ─── Ptolemaic ───────────────────────────────────────────────────────────────

  "alexander-the-great": {
    prenomen: {
      codes: ["S29", "X1", "Q3", "N35", "D21", "G43"],
      transliteration: "stp-n-rꜥ",
      translation: "Chosen of Ra",
    },
    nomen: {
      codes: ["G1", "D21", "Aa1", "S29", "N35", "D46", "D21", "S29"],
      transliteration: "ꜣlksndrs",
      translation: "Alexandros",
    },
  },

  "ptolemy-v": {
    prenomen: {
      codes: ["M17", "G43", "M17", "S29", "Aa1", "N35", "Q3", "X1", "F12"],
      transliteration: "jwꜥ-n-nṯrwy-prwy",
      translation: "Heir of the Two Beneficent Gods",
    },
    nomen: {
      codes: ["Q3", "X1", "G43", "D21", "G17", "M17", "S29"],
      transliteration: "ptwlmys",
      translation: "Ptolemaios",
    },
  },

  "cleopatra-vii": {
    prenomen: {
      codes: ["G43", "D21", "X1", "Y5", "D28", "X1", "Aa1", "D21"],
      transliteration: "wrt-nb.t-nfrw",
      translation: "Great One, Lady of Perfection",
    },
    nomen: {
      codes: ["Q1", "D21", "G43", "Q3", "D28", "X1", "D21", "G1"],
      transliteration: "qlwpdrt",
      translation: "Kleopatra",
    },
  },

  // ─── Roman ───────────────────────────────────────────────────────────────────

  augustus: {
    prenomen: {
      codes: ["G25", "G43", "X1", "Aa1", "D21", "X1", "D21"],
      transliteration: "ꜣwtqrtr",
      translation: "Autocrator",
    },
    nomen: {
      codes: ["Aa1", "M17", "S29", "D21", "S29"],
      transliteration: "kysrs",
      translation: "Kaisaros",
    },
  },
};
