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

  aha: {
    horus: {
      codes: ["D34"],
      transliteration: "ꜤḥꜢ",
      translation: "The Fighter",
    },
  },

  djer: {
    horus: {
      codes: ["M37"],
      transliteration: "ḏr",
      translation: "Defender of Horus",
    },
    golden: {
      codes: ["N35", "S12"],
      transliteration: "nꞽ-nbw",
      translation: "He Who Belongs to the Golden One",
    },
  },

  djet: {
    horus: {
      codes: ["I10"],
      transliteration: "ḏt",
      translation: "Serpent of Horus",
    },
  },

  den: {
    horus: {
      codes: ["D46", "N35"],
      transliteration: "dn",
      translation: "The Slaughterer",
    },
    golden: {
      codes: ["I12", "S12", "V9"],
      transliteration: "ꞽꜤr.t-nbw-šn",
      translation: "Golden Cobra",
    },
  },

  adjib: {
    horus: {
      codes: ["V27", "F34"],
      transliteration: "Ꜥḏ-ꞽb",
      translation: "Brave of Heart",
    },
  },

  semerkhet: {
    horus: {
      codes: ["U23", "S29", "X1"],
      transliteration: "s-mr-ḥt",
      translation: "Companion of the Gods",
    },
  },

  qaa: {
    horus: {
      codes: ["Q3", "D36"],
      transliteration: "ḳꜢꞽ-Ꜥ",
      translation: "Raised Arm of Horus",
    },
  },

  hotepsekhemwy: {
    horus: {
      codes: ["F12", "S42", "S42"],
      transliteration: "ḥtp-sḫm.wꞽ",
      translation: "Reconciliation of the Two Powers",
    },
    nebty: {
      codes: ["F12"],
      transliteration: "ḥtp",
      translation: "The Two Ladies Are Satisfied",
    },
  },

  ninetjer: {
    horus: {
      codes: ["R8", "N35"],
      transliteration: "nꞽ-nṯr",
      translation: "Godlike One of Horus",
    },
    nebty: {
      codes: ["R8", "N35"],
      transliteration: "nꞽ-nṯr",
      translation: "Godlike One of the Two Ladies",
    },
    golden: {
      codes: ["M22", "D21", "N35", "S12"],
      transliteration: "rn-nbw",
      translation: "Golden Offspring",
    },
  },

  peribsen: {
    horus: {
      codes: ["Q3", "D21", "F34", "S29", "N35"],
      transliteration: "pr-ꞽb-sn",
      translation: "Heart Going Forth",
    },
    nebty: {
      codes: ["Q3", "D21", "F34", "S29", "N35"],
      transliteration: "pr-ꞽb-sn",
      translation: "Heart Going Forth",
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
      sources: [
        { text: "Cairo Museum JE 38568" },
        { text: "Relief from Wadi Maghara, Sinai" },
        { text: "Beckerath, MÄS 49 (1999), 52–53, 1:H1" },
      ],
    },
    nebty: {
      codes: ["N35", "D58", "S29", "I9", "D21", "G43"],
      transliteration: "nb-mꜣꜥt",
      translation: "Lord of Maat",
      sources: [
        { text: "Cairo Museum JE 38568" },
        { text: "Beckerath, MÄS 49 (1999), 52–53, 1:N" },
      ],
    },
    golden: {
      codes: ["G5", "S12"],
      transliteration: "bꞽk-nbw",
      translation: "Golden Falcon",
      sources: [
        { text: "Cairo Museum JE 38568" },
        { text: "Beckerath, MÄS 49 (1999), 52–53, 1:G" },
      ],
    },
    prenomen: {
      codes: ["S29", "N35", "I9", "D21", "G43"],
      transliteration: "snfr.w",
      translation: "He of Beauty",
      sources: [
        { text: "Karnak Canon no. 2" },
        { text: "Abydos Canon no. 20" },
        { text: "Beckerath, MÄS 49 (1999), 52–53, 1:E2" },
      ],
    },
  },

  khufu: {
    horus: {
      codes: ["Aa24", "G43"],
      transliteration: "mḏdw",
      translation: "Who Has Been Followed",
      sources: [
        { text: "Lepsius, Denkmäler II, 2b+d" },
        { text: "Beckerath, MÄS 49 (1999), 52–53, 2:H1" },
      ],
    },
    nebty: {
      codes: ["Aa24", "D21"],
      transliteration: "mḏd-r",
      translation: "Who Has Adhered to the Two Ladies",
      sources: [
        { text: "Tomb of Chemetnu, Giza G5210" },
        { text: "Beckerath, MÄS 49 (1999), 52–53, 2:N1" },
      ],
    },
    golden: {
      codes: ["G5", "G5", "S12"],
      transliteration: "bꞽk.wꞽ-nb.w",
      translation: "The Golden Double Falcon",
      sources: [
        { text: "Lepsius, Denkmäler II, 2b" },
        { text: "Beckerath, MÄS 49 (1999), 52–53, 2:G1" },
      ],
    },
    prenomen: {
      codes: ["Aa1", "G43", "I9", "G43"],
      transliteration: "ḫwfw",
      translation: "He Protects Me",
      sources: [
        { text: "Abydos Canon no. 21" },
        { text: "Tomb of Iymeri, Giza G6020" },
        { text: "Beckerath, MÄS 49 (1999), 52–53, 2:E4" },
      ],
    },
    nomen: {
      codes: ["Aa1", "G43", "I9", "G43"],
      transliteration: "ḫwfw",
      translation: "Khufu",
      sources: [
        { text: "Westcar Papyrus 6.18" },
        { text: "Beckerath, MÄS 49 (1999), 52–53, 2:E" },
      ],
    },
  },

  radjedef: {
    horus: {
      codes: ["Aa1", "Q3", "D21"],
      transliteration: "ḫpr",
      translation: "The One Who Has Manifested",
    },
    nebty: {
      codes: ["Aa1", "Q3", "D21", "G17"],
      transliteration: "ḫpr-m",
      translation: "Who Has Manifested by Means of the Two Ladies",
    },
    golden: {
      codes: ["G5", "G5", "G5", "S12"],
      transliteration: "bꞽk-wꞽ-nbw",
      translation: "The Falcons Are Golden",
    },
    prenomen: {
      codes: ["N5", "D45", "D46", "I9"],
      transliteration: "rꜤ-ḏd.f",
      translation: "Ra Is His Stability",
    },
  },

  khafra: {
    horus: {
      codes: ["G43", "S29", "D21", "F34"],
      transliteration: "wsr-ꞽb",
      translation: "Strong of Heart",
    },
    nebty: {
      codes: ["G43", "S29", "D21", "G17"],
      transliteration: "wsr-m",
      translation: "Who Is Strong by the Two Ladies",
    },
    golden: {
      codes: ["S42", "G7", "S12"],
      transliteration: "sḫm-bꞽk-nbw",
      translation: "The Golden Falcon Is Powerful",
    },
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
    horus: {
      codes: ["D28", "E1"],
      transliteration: "kꜣ-ẖt",
      translation: "The Bull of the Corporation",
    },
    nebty: {
      codes: ["D28", "E1"],
      transliteration: "kꜣ",
      translation: "The Bull by the Two Ladies",
    },
    golden: {
      codes: ["R8", "G7", "S12"],
      transliteration: "nṯr-bꞽk-nbw",
      translation: "The Golden Falcon Is Divine",
    },
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

  "amenemhat-i": {
    horus: {
      codes: ["S29", "F12", "X1", "Q3", "X1", "D28"],
      transliteration: "sḥtp-ꞽb-tꜢwy",
      translation: "Who Satisfies the Heart of the Two Lands",
    },
    nebty: {
      codes: ["S29", "F12", "X1", "Q3", "X1", "D28"],
      transliteration: "sḥtp-ꞽb-tꜢwy",
      translation: "Who Satisfies the Heart of the Two Lands",
    },
    prenomen: {
      codes: ["S29", "F12", "X1", "Q3", "X1", "Aa1", "D21", "G43"],
      transliteration: "sḥtp-ꞽb-rꜤ",
      translation: "Who Satisfies the Heart of Ra",
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "G17", "F12", "X1", "Q3"],
      transliteration: "jmn-m-ḥꜣt",
      translation: "Amun Is at the Head",
    },
  },

  "senusret-i": {
    horus: {
      codes: ["S34", "Y5", "S29", "X1"],
      transliteration: "Ꜥnḫ-mswt",
      translation: "Living of Births",
    },
    nebty: {
      codes: ["S34", "Y5", "S29", "X1"],
      transliteration: "Ꜥnḫ-mswt",
      translation: "Living of Births",
    },
    golden: {
      codes: ["S34", "Y5", "S29", "X1"],
      transliteration: "Ꜥnḫ-mswt",
      translation: "Living of Births",
    },
    prenomen: {
      codes: ["N5", "Aa1", "Q3", "D21", "D28"],
      transliteration: "ḫpr-kꜢ-rꜤ",
      translation: "The Ka of Ra Is Created",
    },
    nomen: {
      codes: ["G43", "S29", "D21", "X1", "S29", "N35"],
      transliteration: "s-n-wsrt",
      translation: "Man of Wosret",
    },
  },

  "mentuhotep-ii": {
    prenomen: {
      codes: ["N35", "D58", "F12", "Q3", "X1", "D21", "G43"],
      transliteration: "nb-ḥꜢpt-rꜤ",
      translation: "Possessor of the Rudder of Ra",
      sources: [
        { text: "Abydos Canon no. 57" },
        { text: "Karnak Canon no. 29" },
        { text: "Beckerath, MÄS 49 (1999), 78–79, 5:T4" },
      ],
    },
    nomen: {
      codes: ["Y5", "N35", "X1", "G43", "F12", "X1", "Q3"],
      transliteration: "mnṯw-ḥtp",
      translation: "Montu Is Satisfied",
      sources: [
        { text: "British Museum EA1203" },
        { text: "Bibliotheca Aegyptica X, §23.3" },
        { text: "Beckerath, MÄS 49 (1999), 78–79, 5:E1" },
      ],
    },
    horus: {
      codes: ["F36", "N19"],
      transliteration: "smꜢ-tꜢwj",
      translation: "Uniter of the Two Lands",
      sources: [
        { text: "British Museum EA753" },
        { text: "Bibliotheca Aegyptica X, §27.1" },
        { text: "Louvre Stele C14" },
        { text: "Beckerath, MÄS 49 (1999), 78–79, 5:H5" },
      ],
    },
    nebty: {
      codes: ["F36", "N19"],
      transliteration: "smꜢ-tꜢwj",
      translation: "Uniter of the Two Lands",
      sources: [
        { text: "Bibliotheca Aegyptica X, §27.1" },
        { text: "Beckerath, MÄS 49 (1999), 78–79, 5:N3" },
      ],
    },
    golden: {
      codes: ["G5", "S12", "S9", "Z4"],
      transliteration: "bꞽk-nbw qꜢ-šwtj",
      translation: "Golden Falcon, Lofty of Plumes",
      sources: [
        { text: "Naville, XIth Dynasty Temple at Deir el-Bahari II, pl. X (F)" },
        { text: "Beckerath, MÄS 49 (1999), 78–79, 5:G2" },
      ],
    },
  },

  "senusret-iii": {
    horus: {
      codes: ["D28", "Aa1", "Q3", "D21"],
      transliteration: "nṯr-ḫpr",
      translation: "Divine of Manifestation",
    },
    nebty: {
      codes: ["S34", "G43", "S29", "D21", "X1"],
      transliteration: "Ꜥnḫ-mswt",
      translation: "Living of Births",
    },
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
    horus: {
      codes: ["D28", "Aa1", "Q3", "D21"],
      transliteration: "ꜢbꜢ",
      translation: "The Vigorous One",
    },
    nebty: {
      codes: ["D28", "Aa1", "Q3", "D21"],
      transliteration: "ꜢbꜢ",
      translation: "The Vigorous One",
    },
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
    horus: {
      codes: ["D36", "D36", "Aa1", "Q3", "D21", "G43"],
      transliteration: "ꜤꜢ-ḫprw",
      translation: "Great of Manifestations",
    },
    nebty: {
      codes: ["X1", "X1", "Y5", "S29", "X1"],
      transliteration: "twt-mswt",
      translation: "The Very Image of Rebirth",
    },
    golden: {
      codes: ["X1", "N17", "N17"],
      transliteration: "ṯs-tꜢwꞽ",
      translation: "Who Has Bound the Two Lands",
    },
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

  "amenhotep-i": {
    horus: {
      codes: ["D28", "G43", "D36", "D40", "N17", "N17", "N17"],
      transliteration: "kꜢ-wꜤf-tꜢw",
      translation: "Bull Who Subdues the Lands",
    },
    nebty: {
      codes: ["D36", "D36", "N35", "D21"],
      transliteration: "ꜤꜢ-nrw",
      translation: "He Who Inspires Great Fear",
    },
    golden: {
      codes: ["V29", "M4", "M4", "M4"],
      transliteration: "wꜢḥ-rnpwt",
      translation: "Enduring of Years",
    },
    prenomen: {
      codes: ["D45", "S29", "D21", "D28", "N5"],
      transliteration: "ḏsr-kꜢ-rꜥ",
      translation: "Holy Is the Soul of Ra",
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "F12", "X1", "Q3"],
      transliteration: "jmn-ḥtp",
      translation: "Amun Is Satisfied",
    },
  },

  "thutmose-i": {
    horus: {
      codes: ["D28", "E1", "D40", "Y5", "D21", "D21"],
      transliteration: "kꜢ-nḫt-mrꞽ-mꜢꜤt",
      translation: "Strong Bull, Beloved of Maat",
    },
    nebty: {
      codes: ["Aa1", "G17", "S2", "D36", "D36", "F9", "F9"],
      transliteration: "ḫꜤꞽ-m-nsrt ꜤꜢ-pḥtꞽ",
      translation: "He Who Appears with the Uraeus, Great of Strength",
    },
    prenomen: {
      codes: ["N5", "D36", "D36", "Aa1", "Q3", "D21", "D28"],
      transliteration: "ꜤꜢ-ḫpr-kꜢ-rꜤ",
      translation: "Great Is the Manifestation of the Soul of Ra",
    },
    nomen: {
      codes: ["G26", "Y5", "S29"],
      transliteration: "ḏḥwtꞽ-msi",
      translation: "Born of Thoth",
    },
  },

  "thutmose-ii": {
    horus: {
      codes: ["D28", "E1", "D40", "G43", "S29", "D21", "F9", "F9"],
      transliteration: "kꜢ-nḫt-wsr-pḥtꞽ",
      translation: "The Strong Bull, Rich of Strength",
    },
    nebty: {
      codes: ["R8", "S29", "M17", "M17"],
      transliteration: "nṯrꞽ-nsyt",
      translation: "He Whose Royalty Is Divine",
    },
    golden: {
      codes: ["S42", "Aa1", "Q3", "D21", "G43"],
      transliteration: "sḫm-ḫprw",
      translation: "He Whose Manifestations Are Powerful",
    },
    prenomen: {
      codes: ["N5", "D36", "D36", "Aa1", "Q3", "N35"],
      transliteration: "ꜤꜢ-ḫpr-n-rꜤ",
      translation: "Great Is the Manifestation of Ra",
    },
    nomen: {
      codes: ["G26", "Y5", "S29"],
      transliteration: "ḏḥwtꞽ-msi",
      translation: "Born of Thoth",
    },
  },

  hatshepsut: {
    horus: {
      codes: ["G43", "S29", "D21", "X1", "D28", "D28", "D28"],
      transliteration: "wsr.t-kꜢ.w",
      translation: "Mighty of Kas",
    },
    nebty: {
      codes: ["G43", "D36", "X1", "D21", "N35", "Q3", "X1"],
      transliteration: "wꜢḏ.t-rnp.wt",
      translation: "Flourishing of Years",
    },
    golden: {
      codes: ["R8", "X1", "Aa1", "D21", "G43"],
      transliteration: "nṯrt-ḫꜤw",
      translation: "Divine of Appearance",
    },
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
    horus: {
      codes: ["D28", "E2", "D40", "Y5", "D21", "D21"],
      transliteration: "kꜢ-nḫt-ḫꜤꞽ-m-wꜢst",
      translation: "Strong Bull, Appearing in Thebes",
    },
    nebty: {
      codes: ["G43", "D46", "I9", "D36", "X1", "D21", "Q3", "X1", "D21"],
      transliteration: "wꜤf-tꜢwy-ḫꜤꞽ-m-nsrt",
      translation: "Who Subdues the Two Lands, Appearing with the Uraeus",
    },
    golden: {
      codes: ["D45", "S29", "Q3", "F12", "X1", "D21", "G43"],
      transliteration: "ḏsr-ḫꜤw",
      translation: "Exalted of Appearances",
    },
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

  "amenhotep-ii": {
    horus: {
      codes: ["D28", "E2", "D40", "F9", "F9", "G17", "S29", "R19"],
      transliteration: "kꜢ-nḫt-ꜤꜢ-pḥtj",
      translation: "Strong Bull, Great of Strength",
    },
    nebty: {
      codes: ["D36", "D36", "Aa1", "Q3", "D21"],
      transliteration: "ꜤꜢ-ḫprw",
      translation: "Great of Manifestations",
    },
    prenomen: {
      codes: ["N5", "Aa1", "Q3", "D21", "D28", "D21", "G43"],
      transliteration: "ꜤꜢ-ḫpr.w-rꜥ",
      translation: "Great Are the Manifestations of Ra",
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "F12", "X1", "Q3"],
      transliteration: "jmn-ḥtp",
      translation: "Amun Is Satisfied",
    },
  },

  "thutmose-iv": {
    horus: {
      codes: ["D28", "E2", "D40", "X1", "X1", "Aa1", "D21", "G43"],
      transliteration: "kꜢ-nḫt-twt-ḫꜤw",
      translation: "The Strong Bull, the Very Image of Appearances",
    },
    nebty: {
      codes: ["D45", "D45", "S29", "X1", "M17", "M17"],
      transliteration: "ḏd-nsyt-mꞽ-ꞽtm",
      translation: "Stable of Kingship Like Atum",
    },
    golden: {
      codes: ["G43", "S29", "D21", "S42", "D21", "D40"],
      transliteration: "wsr-ḫpš-dr-pḏt",
      translation: "Who Has Repelled the Nine Bows",
    },
    prenomen: {
      codes: ["Y5", "N35", "Aa1", "Q3", "D21", "G43"],
      transliteration: "mn-ḫprw-rꜤ",
      translation: "Established Manifestations of Ra",
    },
    nomen: {
      codes: ["G26", "Y5", "S29"],
      transliteration: "ḏḥwtꞽ-msꞽ",
      translation: "Thoth Is Born",
    },
  },

  "amenhotep-iii": {
    horus: {
      codes: ["D28", "E2", "D40", "F9", "F9", "G17", "S29", "R19"],
      transliteration: "kꜢ-nḫt-ḫꜤꞽ-m-mꜣꜤt",
      translation: "Strong Bull, Appearing in Truth",
    },
    nebty: {
      codes: ["F12", "X1", "S29", "D21", "X1", "N35", "Q3", "X1"],
      transliteration: "ḥꜤꞽ-m-ḥb-sd-mꞽ-tꜢ-ṯnn",
      translation: "Appearing in the Sed Festival Like Tatenen",
    },
    golden: {
      codes: ["D45", "S29", "Q3", "F12", "X1", "D21", "G43"],
      transliteration: "ḏsr-ḫꜤw-sḫm",
      translation: "Exalted of Appearances, Powerful",
    },
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
    horus: {
      codes: ["D28", "E2", "D40", "F12", "X1", "D21", "G43", "Y5", "X1", "N17"],
      transliteration: "kꜢ-nḫt-ḫꜤꞽ-m-ꜣḫt-n-jtn",
      translation: "Strong Bull, Appearing in the Horizon of the Aten",
    },
    nebty: {
      codes: ["G43", "D21", "S29", "Q3", "F12", "X1", "D21", "G43"],
      transliteration: "wsr-nsyt-m-ꜣḫt-n-jtn",
      translation: "Great of Kingship in the Horizon of Aten",
    },
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
    horus: {
      codes: ["D28", "E1", "D40", "X1", "X1", "Y5", "S29", "X1"],
      transliteration: "kꜢ-nḫt-twt-mswt",
      translation: "The Strong Bull, Pleasing of Birth",
      sources: [
        { text: "Urkunden IV, 2056" },
        { text: "Beckerath, MÄS 49 (1999), 144–145, 12:H1" },
      ],
    },
    nebty: {
      codes: ["N35", "I9", "D21", "F12", "Q3", "S29", "G43", "D21", "F12", "X1", "Q3"],
      transliteration: "nfr-hpw-sgrḥ-tꜢwꞽ",
      translation: "One of Perfect Laws, Who Pacifies the Two Lands",
      sources: [
        { text: "Urkunden IV, 2054" },
        { text: "Beckerath, MÄS 49 (1999), 144–145, 12:N1" },
      ],
    },
    golden: {
      codes: ["G43", "X1", "S29", "Aa1", "D21", "G43", "S34", "F12", "X1", "Q3"],
      transliteration: "wṯs-ḫꜤw-sḥtp-nṯrw",
      translation: "Elevated of Appearances, Who Satisfied the Gods",
      sources: [
        { text: "Urkunden IV, 2054" },
        { text: "Restoration Stele CG 34183" },
        { text: "Beckerath, MÄS 49 (1999), 144–145, 12:G1" },
      ],
    },
    prenomen: {
      codes: ["N35", "D58", "Aa1", "Q3", "D21", "G43"],
      transliteration: "nb-ḫprw-rꜥ",
      translation: "Lord of the Forms of Ra",
      sources: [
        { text: "Urkunden IV, 2043" },
        { text: "Abydos Canon no. 74 (missing)" },
        { text: "Beckerath, MÄS 49 (1999), 144–145, 12:T1" },
      ],
    },
    nomen: {
      codes: ["M17", "Y5", "N35", "X1", "G43", "X1", "S34", "Aa1"],
      transliteration: "twt-ꜥnḫ-jmn",
      translation: "Living Image of Amun",
      sources: [
        { text: "Statue CG 42091 (JE 36583)" },
        { text: "Beckerath, MÄS 49 (1999), 144–145, 12:E3" },
      ],
    },
  },

  horemheb: {
    horus: {
      codes: ["D28", "E2", "D40", "D45", "S29", "D21", "Aa1", "Q3", "D21", "G43"],
      transliteration: "kꜢ-nḫt-ḫꜢꞽ-m-wꜢst",
      translation: "Strong Bull, Appearing in Thebes",
    },
    nebty: {
      codes: ["G43", "D46", "I9", "S29", "Q3", "F12", "X1", "N17", "N17"],
      transliteration: "wꜤf-tꜢwy-sḥtp-nṯrw",
      translation: "Who Subdues the Two Lands and Satisfies the Gods",
    },
    golden: {
      codes: ["D45", "S29", "D21", "Aa1", "Q3", "D21", "G43"],
      transliteration: "ḏsr-ḫꜤw-m-tꜢwy",
      translation: "Who Has Exalted the Appearances in the Two Lands",
    },
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

  "ramesses-i": {
    horus: {
      codes: ["D28", "E1", "D40", "G43", "D36", "X1", "S29", "X1"],
      transliteration: "kꜢ-nḫt-wꜢḏ-nsyt",
      translation: "The Strong Bull, He Who Rejuvenates the Royalty",
    },
    nebty: {
      codes: ["Aa1", "D36", "M17", "S2", "G17", "Y5", "X1", "M17", "X1", "U15"],
      transliteration: "ḫꜤꞽ-m-nsw-mꞽ-ꞽtm",
      translation: "He Who Appears as a King, Like Atum",
    },
    golden: {
      codes: ["S29", "Y5", "N35", "Y5", "D36", "X1", "Aa1", "X1", "N17", "N17"],
      transliteration: "smn-mꜣꜥt-ḫt-tꜢwꞽ",
      translation: "Who Established Maat Throughout the Two Lands",
    },
    prenomen: {
      codes: ["Y5", "N35", "F9", "D21", "G43"],
      transliteration: "mn-pḥtꞽ-rꜥ",
      translation: "Eternal Is the Strength of Ra",
    },
    nomen: {
      codes: ["N5", "Y5", "S29", "S29", "G43"],
      transliteration: "rꜥ-msꞽ-sw",
      translation: "Ra Has Fashioned Him",
    },
  },

  "seti-i": {
    horus: {
      codes: ["D28", "E2", "D40", "G43", "S29", "D21", "Y5", "D28", "X1", "D21"],
      transliteration: "kꜢ-nḫt-ḫꜤꞽ-m-mꜣꜥt",
      translation: "Strong Bull, Appearing in Truth",
    },
    nebty: {
      codes: ["G43", "D46", "I9", "D21", "Y5", "D36", "D36", "N35", "Q3", "X1", "D21"],
      transliteration: "wꜤf-tꜢwy-sḫm-pḥ.wy",
      translation: "Who Subdues the Two Lands, Mighty of Power",
    },
    golden: {
      codes: ["G43", "S42", "D21", "X1", "D21", "G43"],
      transliteration: "wsr-nṯrw-sḫm-D21-G43",
      translation: "Powerful of Arm Among the Gods",
    },
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
    horus: {
      codes: ["D28", "E2", "D40", "G43", "S29", "D21", "G17", "S29", "R19"],
      transliteration: "kꜢ-nḫt-mrꞽ-mꜣꜤt",
      translation: "Strong Bull, Beloved of Maat",
    },
    nebty: {
      codes: ["Y5", "I9", "D21", "Aa1", "Q3", "D21", "N17", "N17"],
      transliteration: "nḥm-tꜢwy-ḫꜤꞽ-m-wꜣst",
      translation: "Protector of Egypt, Appearing in Thebes",
    },
    golden: {
      codes: ["D21", "G43", "Y5", "D28", "X1", "D21", "G43"],
      transliteration: "wsr-rnpwt-mꞽ-ꞽtm",
      translation: "Rich of Years Like Atum",
    },
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
    horus: {
      codes: ["D28", "E2", "D40", "G43", "S29", "D21", "G17", "S29", "R19"],
      transliteration: "kꜢ-nḫt-mrꞽ-mꜣꤤt",
      translation: "Strong Bull, Beloved of Maat",
    },
    nebty: {
      codes: ["G43", "D46", "I9", "D21", "S29", "Q3", "F12", "X1", "D21"],
      transliteration: "wꜤf-tꜢwy-nḥm-ḥꜣt",
      translation: "Who Subdues the Two Lands",
    },
    golden: {
      codes: ["D21", "G43", "Y5", "D28", "X1", "D21", "M17", "Y5", "N35"],
      transliteration: "wsr-rnpwt-mꞽ-ꞽmn",
      translation: "Rich of Years Like Amun",
    },
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
