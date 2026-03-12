import type { Dynasty, Pharaoh, PeriodInfo, PeriodId } from "@/lib/types";

export const PERIODS: PeriodInfo[] = [
  { id: "predynastic",        name: "Predynastic",             approxStart: -3200, approxEnd: -3000 },
  { id: "early-dynastic",     name: "Early Dynastic",          approxStart: -3000, approxEnd: -2686 },
  { id: "old-kingdom",        name: "Old Kingdom",             approxStart: -2686, approxEnd: -2181 },
  { id: "first-intermediate", name: "First Intermediate",      approxStart: -2181, approxEnd: -2055 },
  { id: "middle-kingdom",     name: "Middle Kingdom",          approxStart: -2055, approxEnd: -1650 },
  { id: "second-intermediate","name": "Second Intermediate",   approxStart: -1650, approxEnd: -1550 },
  { id: "new-kingdom",        name: "New Kingdom",             approxStart: -1550, approxEnd: -1070 },
  { id: "third-intermediate", name: "Third Intermediate",      approxStart: -1070, approxEnd:  -664 },
  { id: "late-period",        name: "Late Period",             approxStart:  -664, approxEnd:  -332 },
  { id: "ptolemaic",          name: "Ptolemaic",               approxStart:  -332, approxEnd:    30 },
  { id: "roman",              name: "Roman",                   approxStart:   -27, approxEnd:   313 },
];

// period lookup by id
export const PERIOD_MAP = Object.fromEntries(PERIODS.map((p) => [p.id, p])) as Record<PeriodId, PeriodInfo>;

export const DYNASTIES: Dynasty[] = [
  { id: "predynastic",    number: null, name: "Predynastic",          period: "predynastic" },
  { id: "dynasty-1",      number: 1,    name: "First Dynasty",         period: "early-dynastic" },
  { id: "dynasty-2",      number: 2,    name: "Second Dynasty",        period: "early-dynastic" },
  { id: "dynasty-3",      number: 3,    name: "Third Dynasty",         period: "old-kingdom" },
  { id: "dynasty-4",      number: 4,    name: "Fourth Dynasty",        period: "old-kingdom" },
  { id: "dynasty-5",      number: 5,    name: "Fifth Dynasty",         period: "old-kingdom" },
  { id: "dynasty-6",      number: 6,    name: "Sixth Dynasty",         period: "old-kingdom" },
  { id: "dynasty-7",      number: 7,    name: "Seventh Dynasty",       period: "first-intermediate", note: "No confirmed rulers; records are contradictory." },
  { id: "dynasty-8",      number: 8,    name: "Eighth Dynasty",        period: "first-intermediate" },
  { id: "dynasty-9",      number: 9,    name: "Ninth Dynasty",         period: "first-intermediate" },
  { id: "dynasty-10",     number: 10,   name: "Tenth Dynasty",         period: "first-intermediate" },
  { id: "dynasty-11",     number: 11,   name: "Eleventh Dynasty",      period: "middle-kingdom" },
  { id: "dynasty-12",     number: 12,   name: "Twelfth Dynasty",       period: "middle-kingdom" },
  { id: "dynasty-13",     number: 13,   name: "Thirteenth Dynasty",    period: "second-intermediate" },
  { id: "dynasty-14",     number: 14,   name: "Fourteenth Dynasty",    period: "second-intermediate" },
  { id: "dynasty-15",     number: 15,   name: "Fifteenth Dynasty",     period: "second-intermediate", note: "Hyksos rulers." },
  { id: "dynasty-16",     number: 16,   name: "Sixteenth Dynasty",     period: "second-intermediate" },
  { id: "dynasty-17",     number: 17,   name: "Seventeenth Dynasty",   period: "second-intermediate" },
  { id: "abydos",         number: null, name: "Abydos (Thinite) Dynasty", period: "second-intermediate" },
  { id: "dynasty-18",     number: 18,   name: "Eighteenth Dynasty",    period: "new-kingdom" },
  { id: "dynasty-19",     number: 19,   name: "Nineteenth Dynasty",    period: "new-kingdom" },
  { id: "dynasty-20",     number: 20,   name: "Twentieth Dynasty",     period: "new-kingdom" },
  { id: "dynasty-21",     number: 21,   name: "Twenty-first Dynasty",  period: "third-intermediate" },
  { id: "dynasty-22",     number: 22,   name: "Twenty-second Dynasty", period: "third-intermediate" },
  { id: "dynasty-23",     number: 23,   name: "Twenty-third Dynasty",  period: "third-intermediate" },
  { id: "dynasty-24",     number: 24,   name: "Twenty-fourth Dynasty", period: "late-period" },
  { id: "dynasty-25",     number: 25,   name: "Twenty-fifth Dynasty",  period: "late-period" },
  { id: "dynasty-26",     number: 26,   name: "Twenty-sixth Dynasty",  period: "late-period" },
  { id: "dynasty-27",     number: 27,   name: "Twenty-seventh Dynasty",period: "late-period", note: "First Persian Period (Achaemenid satrapy)." },
  { id: "dynasty-28",     number: 28,   name: "Twenty-eighth Dynasty", period: "late-period" },
  { id: "dynasty-29",     number: 29,   name: "Twenty-ninth Dynasty",  period: "late-period" },
  { id: "dynasty-30",     number: 30,   name: "Thirtieth Dynasty",     period: "late-period" },
  { id: "dynasty-31",     number: 31,   name: "Thirty-first Dynasty",  period: "late-period", note: "Second Persian Period (Achaemenid satrapy)." },
  { id: "argead",         number: null, name: "Argead Dynasty",        period: "ptolemaic" },
  { id: "ptolemaic",      number: null, name: "Ptolemaic Dynasty",     period: "ptolemaic" },
  { id: "roman",          number: null, name: "Roman Emperors",        period: "roman" },
  { id: "unplaced",       number: null, name: "Unplaced / Uncertain",  period: "predynastic" },
];

export const DYNASTY_MAP = Object.fromEntries(DYNASTIES.map((d) => [d.id, d]));

export const PHARAOHS: Pharaoh[] = [
  // ── Predynastic ───────────────────────────────────────────────────────────
  { slug: "seka",          name: "Seka",         alternateNames: ["Hsekiu"],                              dynastyId: "predynastic", reignStart: null, reignEnd: null },
  { slug: "khayu",         name: "Khayu",        alternateNames: ["Iukha"],                               dynastyId: "predynastic", reignStart: null, reignEnd: null },
  { slug: "tiu",           name: "Tiu",          alternateNames: ["Teyew"],                               dynastyId: "predynastic", reignStart: null, reignEnd: null },
  { slug: "tjesh",         name: "Tjesh",        alternateNames: ["Thesh", "Tesh"],                       dynastyId: "predynastic", reignStart: null, reignEnd: null },
  { slug: "neheb",         name: "Neheb",        alternateNames: ["Niheb"],                               dynastyId: "predynastic", reignStart: null, reignEnd: null },
  { slug: "wenegbu",       name: "Wenegbu",      alternateNames: ["Wazner", "Wadjenedj"],                 dynastyId: "predynastic", reignStart: null, reignEnd: null },
  { slug: "mekh",          name: "Mekh",         alternateNames: ["Imykhet"],                             dynastyId: "predynastic", reignStart: null, reignEnd: null },

  // ── Dynasty 1 ─────────────────────────────────────────────────────────────
  { slug: "narmer",        name: "Narmer",       alternateNames: ["Menes"],                               dynastyId: "dynasty-1",   reignStart: -2900, reignEnd: null, notable: true, summary: "The first pharaoh to unify Upper and Lower Egypt, depicted on the famous Narmer Palette." },
  { slug: "aha",           name: "Aha",          alternateNames: ["Hor-Aha"],                             dynastyId: "dynasty-1",   reignStart: null,  reignEnd: -2870 },
  { slug: "djer",          name: "Djer",         alternateNames: ["Hor-Djer"],                            dynastyId: "dynasty-1",   reignStart: -2870, reignEnd: -2823 },
  { slug: "djet",          name: "Djet",         alternateNames: ["Wadj", "Zet", "Uadji"],                dynastyId: "dynasty-1",   reignStart: -2822, reignEnd: -2815 },
  { slug: "den",           name: "Den",          alternateNames: ["Dewen", "Udimu"],                      dynastyId: "dynasty-1",   reignStart: -2814, reignEnd: -2772 },
  { slug: "adjib",         name: "Adjib",        alternateNames: ["Anedjib", "Enezib"],                   dynastyId: "dynasty-1",   reignStart: -2771, reignEnd: -2764 },
  { slug: "semerkhet",     name: "Semerkhet",    alternateNames: [],                                      dynastyId: "dynasty-1",   reignStart: -2763, reignEnd: -2756 },
  { slug: "qaa",           name: "Qaa",          alternateNames: ["Kaa"],                                 dynastyId: "dynasty-1",   reignStart: -2755, reignEnd: -2732 },

  // ── Dynasty 2 ─────────────────────────────────────────────────────────────
  { slug: "hotepsekhemwy", name: "Hotepsekhemwy",alternateNames: ["Hetepsekhemwy", "Hotepsekhemui"],      dynastyId: "dynasty-2",   reignStart: -2730, reignEnd: null },
  { slug: "nebra",         name: "Nebra",        alternateNames: ["Raneb", "Kakau"],                      dynastyId: "dynasty-2",   reignStart: null,  reignEnd: -2700 },
  { slug: "ninetjer",      name: "Ninetjer",     alternateNames: ["Nynetjer", "Banetjer"],                dynastyId: "dynasty-2",   reignStart: -2700, reignEnd: -2660 },
  { slug: "wadjenes",      name: "Wadjenes",     alternateNames: [],                                      dynastyId: "dynasty-2",   reignStart: null,  reignEnd: null },
  { slug: "senedj",        name: "Senedj",       alternateNames: ["Sened"],                               dynastyId: "dynasty-2",   reignStart: null,  reignEnd: -2610 },
  { slug: "sekhemib",      name: "Sekhemib",     alternateNames: [],                                      dynastyId: "dynasty-2",   reignStart: -2650, reignEnd: null },
  { slug: "peribsen",      name: "Peribsen",     alternateNames: ["Seth-Peribsen", "Perabsen"],           dynastyId: "dynasty-2",   reignStart: -2660, reignEnd: -2650 },
  { slug: "sneferka",      name: "Sneferka",     alternateNames: ["Sekanefer", "Neferseka"],              dynastyId: "dynasty-2",   reignStart: null,  reignEnd: null },
  { slug: "neferkasokar",  name: "Neferkasokar", alternateNames: [],                                      dynastyId: "dynasty-2",   reignStart: null,  reignEnd: null },
  { slug: "hudjefa-i",     name: "Hudjefa I",    alternateNames: [],                                      dynastyId: "dynasty-2",   reignStart: null,  reignEnd: null },
  { slug: "khasekhemwy",   name: "Khasekhemwy",  alternateNames: ["Khasekhemui"],                         dynastyId: "dynasty-2",   reignStart: -2610, reignEnd: -2593 },

  // ── Dynasty 3 ─────────────────────────────────────────────────────────────
  { slug: "nebka",         name: "Nebka",        alternateNames: [],                                      dynastyId: "dynasty-3",   reignStart: null,  reignEnd: null },
  { slug: "djoser",        name: "Djoser",       alternateNames: ["Zezer", "Zozer", "Djeser"],            dynastyId: "dynasty-3",   reignStart: -2592, reignEnd: -2566, notable: true, summary: "Builder of the Step Pyramid at Saqqara, the world's first large-scale stone monument." },
  { slug: "sekhemkhet",    name: "Sekhemkhet",   alternateNames: ["Djosertety", "Djoserteti"],            dynastyId: "dynasty-3",   reignStart: -2565, reignEnd: -2559 },
  { slug: "hudjefa-ii",    name: "Hudjefa II",   alternateNames: [],                                      dynastyId: "dynasty-3",   reignStart: null,  reignEnd: null },
  { slug: "mesochris",     name: "Mesochris",    alternateNames: [],                                      dynastyId: "dynasty-3",   reignStart: null,  reignEnd: null },
  { slug: "nebkara",       name: "Nebkara",      alternateNames: ["Nebkare"],                             dynastyId: "dynasty-3",   reignStart: null,  reignEnd: null },
  { slug: "neferkara-d3",  name: "Neferkara",    alternateNames: ["Neferkare"],                           dynastyId: "dynasty-3",   reignStart: null,  reignEnd: null },
  { slug: "huni",          name: "Huni",         alternateNames: [],                                      dynastyId: "dynasty-3",   reignStart: null,  reignEnd: -2544 },

  // ── Dynasty 4 ─────────────────────────────────────────────────────────────
  { slug: "sneferu",       name: "Sneferu",      alternateNames: ["Snefru", "Snofru"],                    dynastyId: "dynasty-4",   reignStart: -2543, reignEnd: -2510, notable: true, summary: "Built three pyramids including the Bent Pyramid and Red Pyramid, pioneering true pyramid construction." },
  { slug: "khufu",         name: "Khufu",        alternateNames: ["Cheops"],                              dynastyId: "dynasty-4",   reignStart: -2509, reignEnd: -2483, notable: true, summary: "Builder of the Great Pyramid of Giza, one of the Seven Wonders of the Ancient World." },
  { slug: "radjedef",      name: "Radjedef",     alternateNames: ["Djedefra", "Djedefre"],                dynastyId: "dynasty-4",   reignStart: -2482, reignEnd: -2475 },
  { slug: "khafra",        name: "Khafra",       alternateNames: ["Khafre", "Chephren", "Khefren"],       dynastyId: "dynasty-4",   reignStart: -2472, reignEnd: -2448, notable: true, summary: "Builder of the second pyramid at Giza and traditionally associated with the Great Sphinx." },
  { slug: "menkaura",      name: "Menkaura",     alternateNames: ["Menkaure", "Mykerinos", "Mycerinus"], dynastyId: "dynasty-4",   reignStart: -2447, reignEnd: -2442 },
  { slug: "shepseskaf",    name: "Shepseskaf",   alternateNames: [],                                      dynastyId: "dynasty-4",   reignStart: -2441, reignEnd: -2436 },
  { slug: "baufra",        name: "Baufra",       alternateNames: ["Baefra", "Baufre", "Baka"],            dynastyId: "dynasty-4",   reignStart: -2474, reignEnd: -2473 },
  { slug: "thamphthis",    name: "Thamphthis",   alternateNames: ["Djedefptah", "Ptahdjedef"],            dynastyId: "dynasty-4",   reignStart: null,  reignEnd: null },
  { slug: "hordjedef",     name: "Hordjedef",    alternateNames: ["Djedefhor"],                           dynastyId: "dynasty-4",   reignStart: null,  reignEnd: null },

  // ── Dynasty 5 ─────────────────────────────────────────────────────────────
  { slug: "userkaf",       name: "Userkaf",              alternateNames: [],                              dynastyId: "dynasty-5",   reignStart: -2435, reignEnd: -2429 },
  { slug: "sahura",        name: "Sahura",               alternateNames: ["Sahure"],                      dynastyId: "dynasty-5",   reignStart: -2428, reignEnd: -2416 },
  { slug: "neferirkara-i", name: "Neferirkara I Kakai",  alternateNames: ["Neferirkare I"],               dynastyId: "dynasty-5",   reignStart: -2415, reignEnd: -2405 },
  { slug: "shepseskara",   name: "Shepseskara Netjeruser",alternateNames: ["Shepseskare"],                dynastyId: "dynasty-5",   reignStart: null,  reignEnd: null },
  { slug: "neferefra",     name: "Neferefra Isi",        alternateNames: ["Neferefre", "Raneferef"],      dynastyId: "dynasty-5",   reignStart: -2403, reignEnd: -2403 },
  { slug: "niuserra",      name: "Niuserra Ini",         alternateNames: ["Niuserre"],                    dynastyId: "dynasty-5",   reignStart: -2402, reignEnd: -2374 },
  { slug: "menkauhor",     name: "Menkauhor Kaiu",       alternateNames: ["Horikau", "Ikauhor"],          dynastyId: "dynasty-5",   reignStart: -2373, reignEnd: -2366 },
  { slug: "djedkara",      name: "Djedkara Isesi",       alternateNames: ["Djedkare Isesi"],              dynastyId: "dynasty-5",   reignStart: -2365, reignEnd: -2322 },
  { slug: "unas",          name: "Unas",                 alternateNames: ["Wenis", "Unis"],               dynastyId: "dynasty-5",   reignStart: -2321, reignEnd: -2306, notable: true, summary: "First pharaoh to inscribe the Pyramid Texts inside his pyramid, the oldest known religious corpus." },

  // ── Dynasty 6 ─────────────────────────────────────────────────────────────
  { slug: "teti",          name: "Teti",                 alternateNames: [],                              dynastyId: "dynasty-6",   reignStart: -2305, reignEnd: -2279 },
  { slug: "userkara",      name: "Userkara",             alternateNames: ["Userkare", "Woserkare"],       dynastyId: "dynasty-6",   reignStart: null,  reignEnd: null },
  { slug: "pepi-i",        name: "Pepi I",               alternateNames: ["Pepy I"],                      dynastyId: "dynasty-6",   reignStart: -2276, reignEnd: -2228 },
  { slug: "nemtiemsaf-i",  name: "Nemtiemsaf I",         alternateNames: ["Merenre I"],                   dynastyId: "dynasty-6",   reignStart: -2227, reignEnd: -2217 },
  { slug: "pepi-ii",       name: "Pepi II",              alternateNames: ["Pepy II", "Neferkare"],        dynastyId: "dynasty-6",   reignStart: -2216, reignEnd: -2153, notable: true, summary: "Credited with one of the longest reigns in history — about 64 years." },
  { slug: "nemtiemsaf-ii", name: "Nemtiemsaf II",        alternateNames: ["Merenre II"],                  dynastyId: "dynasty-6",   reignStart: -2152, reignEnd: -2152 },

  // ── Dynasty 8 ─────────────────────────────────────────────────────────────
  { slug: "netjerikara",   name: "Netjerikara",          alternateNames: ["Netjerikare", "Nitocris"],     dynastyId: "dynasty-8",   reignStart: null,  reignEnd: null },
  { slug: "menkara",       name: "Menkara",              alternateNames: ["Menkare"],                     dynastyId: "dynasty-8",   reignStart: null,  reignEnd: null },
  { slug: "neferkara-ii",  name: "Neferkara II",         alternateNames: [],                              dynastyId: "dynasty-8",   reignStart: null,  reignEnd: null },
  { slug: "neferkara-neby",name: "Neferkara Neby",       alternateNames: [],                              dynastyId: "dynasty-8",   reignStart: null,  reignEnd: null },
  { slug: "djedkara-shemai",name:"Djedkara Shemai",      alternateNames: [],                              dynastyId: "dynasty-8",   reignStart: null,  reignEnd: null },
  { slug: "neferkara-khendu",name:"Neferkara Khendu",    alternateNames: [],                              dynastyId: "dynasty-8",   reignStart: null,  reignEnd: null },
  { slug: "merenhor",      name: "Merenhor",             alternateNames: [],                              dynastyId: "dynasty-8",   reignStart: null,  reignEnd: null },
  { slug: "neferkamin-i",  name: "Neferkamin I",         alternateNames: ["Seneferka"],                   dynastyId: "dynasty-8",   reignStart: null,  reignEnd: null },
  { slug: "nikara",        name: "Nikara",               alternateNames: ["Nikare"],                      dynastyId: "dynasty-8",   reignStart: null,  reignEnd: null },
  { slug: "neferkara-tereru",name:"Neferkara Tereru",    alternateNames: [],                              dynastyId: "dynasty-8",   reignStart: null,  reignEnd: null },
  { slug: "neferkahor",    name: "Neferkahor",           alternateNames: [],                              dynastyId: "dynasty-8",   reignStart: null,  reignEnd: null },
  { slug: "neferkara-pepiseneb",name:"Neferkara Pepiseneb",alternateNames: [],                           dynastyId: "dynasty-8",   reignStart: null,  reignEnd: null },
  { slug: "neferkamin-anu",name: "Neferkamin Anu",       alternateNames: [],                              dynastyId: "dynasty-8",   reignStart: null,  reignEnd: null },
  { slug: "qakara-ibi",    name: "Qakara Ibi",           alternateNames: [],                              dynastyId: "dynasty-8",   reignStart: null,  reignEnd: null },
  { slug: "neferkaura",    name: "Neferkaura",           alternateNames: ["Neferkaure"],                  dynastyId: "dynasty-8",   reignStart: null,  reignEnd: null },
  { slug: "neferkauhor",   name: "Neferkauhor",          alternateNames: [],                              dynastyId: "dynasty-8",   reignStart: null,  reignEnd: null },
  { slug: "neferirkara-ii",name: "Neferirkara II",       alternateNames: ["Neferirkare II"],              dynastyId: "dynasty-8",   reignStart: null,  reignEnd: null },

  // ── Dynasty 9 ─────────────────────────────────────────────────────────────
  { slug: "meribra-khety-i",  name: "Meribra Khety I",  alternateNames: ["Meribre Khety I"],             dynastyId: "dynasty-9",   reignStart: null,  reignEnd: null },
  { slug: "neferkara-iii",    name: "Neferkara III",    alternateNames: ["Neferkare III"],               dynastyId: "dynasty-9",   reignStart: null,  reignEnd: null },
  { slug: "wahkara-khety-ii", name: "Wahkara Khety II", alternateNames: ["Wahkare Khety II"],            dynastyId: "dynasty-9",   reignStart: null,  reignEnd: null },
  { slug: "senen",             name: "Senen",           alternateNames: [],                              dynastyId: "dynasty-9",   reignStart: null,  reignEnd: null },
  { slug: "neferkara-khety-iii",name:"Neferkara Khety III",alternateNames: ["Neferkare Khety I"],        dynastyId: "dynasty-9",   reignStart: null,  reignEnd: null },

  // ── Dynasty 10 ────────────────────────────────────────────────────────────
  { slug: "nebkaura-khety-iv",name:"Nebkaura Khety IV",  alternateNames: ["Nebkaure Khety IV", "Khety V"],dynastyId: "dynasty-10",  reignStart: -2160, reignEnd: -2130 },
  { slug: "merikara",          name:"Merikara",          alternateNames: ["Merykare"],                   dynastyId: "dynasty-10",  reignStart: -2075, reignEnd: -2040 },

  // ── Dynasty 11 ────────────────────────────────────────────────────────────
  { slug: "mentuhotep-i",  name: "Mentuhotep I",  alternateNames: ["Mentuhotep-aa"],                     dynastyId: "dynasty-11",  reignStart: null,  reignEnd: null },
  { slug: "intef-i",       name: "Intef I",       alternateNames: ["Antef I", "Inyotef I"],              dynastyId: "dynasty-11",  reignStart: null,  reignEnd: null },
  { slug: "intef-ii",      name: "Intef II",      alternateNames: ["Antef II", "Inyotef II"],            dynastyId: "dynasty-11",  reignStart: -2066, reignEnd: -2017 },
  { slug: "intef-iii",     name: "Intef III",     alternateNames: ["Antef III", "Inyotef III"],          dynastyId: "dynasty-11",  reignStart: -2016, reignEnd: -2009 },
  { slug: "mentuhotep-ii", name: "Mentuhotep II", alternateNames: ["Montuhotep II"],                     dynastyId: "dynasty-11",  reignStart: -2009, reignEnd: -1959, notable: true, summary: "Reunified Egypt after the First Intermediate Period, inaugurating the Middle Kingdom." },
  { slug: "mentuhotep-iii",name: "Mentuhotep III",alternateNames: ["Montuhotep III"],                    dynastyId: "dynasty-11",  reignStart: -1958, reignEnd: -1947 },
  { slug: "mentuhotep-iv", name: "Mentuhotep IV", alternateNames: ["Montuhotep IV"],                     dynastyId: "dynasty-11",  reignStart: -1947, reignEnd: -1940 },

  // ── Dynasty 12 ────────────────────────────────────────────────────────────
  { slug: "amenemhat-i",   name: "Amenemhat I",   alternateNames: ["Amenemhet I"],                       dynastyId: "dynasty-12",  reignStart: -1939, reignEnd: -1910 },
  { slug: "senusret-i",    name: "Senusret I",    alternateNames: ["Senwosret I"],                       dynastyId: "dynasty-12",  reignStart: -1920, reignEnd: -1875 },
  { slug: "amenemhat-ii",  name: "Amenemhat II",  alternateNames: ["Amenemhet II"],                      dynastyId: "dynasty-12",  reignStart: -1878, reignEnd: -1843 },
  { slug: "senusret-ii",   name: "Senusret II",   alternateNames: ["Senwosret II"],                      dynastyId: "dynasty-12",  reignStart: -1845, reignEnd: -1837 },
  { slug: "senusret-iii",  name: "Senusret III",  alternateNames: ["Senwosret III", "Sesostris"],        dynastyId: "dynasty-12",  reignStart: -1837, reignEnd: -1819, notable: true, summary: "Known for military campaigns into Nubia and administrative reforms that reduced the power of provincial nobles." },
  { slug: "amenemhat-iii", name: "Amenemhat III", alternateNames: ["Amenemhet III"],                     dynastyId: "dynasty-12",  reignStart: -1818, reignEnd: -1773, notable: true, summary: "Presided over a period of great prosperity; oversaw the famous Faiyum irrigation projects." },
  { slug: "amenemhat-iv",  name: "Amenemhat IV",  alternateNames: ["Amenemhet IV"],                      dynastyId: "dynasty-12",  reignStart: -1772, reignEnd: -1764 },
  { slug: "neferusobek",   name: "Neferusobek",   alternateNames: ["Sobekneferu"],                       dynastyId: "dynasty-12",  reignStart: -1763, reignEnd: -1760, notable: true, summary: "One of the earliest confirmed female rulers of Egypt." },

  // ── Dynasty 13 (selected) ─────────────────────────────────────────────────
  { slug: "sobekhotep-i",  name: "Sobekhotep I",  alternateNames: ["Sekhemre Khutawy Sobekhotep"],       dynastyId: "dynasty-13",  reignStart: -1803, reignEnd: -1800 },
  { slug: "neferhotep-i",  name: "Neferhotep I",  alternateNames: ["Khasekhemre Neferhotep"],            dynastyId: "dynasty-13",  reignStart: -1742, reignEnd: -1731, notable: true, summary: "One of the most powerful rulers of the Thirteenth Dynasty." },
  { slug: "sobekhotep-iv", name: "Sobekhotep IV", alternateNames: ["Khaneferre Sobekhotep"],             dynastyId: "dynasty-13",  reignStart: -1732, reignEnd: -1720 },
  { slug: "sobekhotep-v",  name: "Sobekhotep V",  alternateNames: ["Merhotepre Sobekhotep"],             dynastyId: "dynasty-13",  reignStart: -1720, reignEnd: -1717 },
  { slug: "khendjer",      name: "Khendjer",      alternateNames: [],                                    dynastyId: "dynasty-13",  reignStart: -1764, reignEnd: -1759 },
  { slug: "aya-xiii",      name: "Aya",           alternateNames: ["Merneferre Ay"],                     dynastyId: "dynasty-13",  reignStart: -1701, reignEnd: -1677 },

  // ── Dynasty 15 – Hyksos ───────────────────────────────────────────────────
  { slug: "salitis",       name: "Salitis",       alternateNames: [],                                    dynastyId: "dynasty-15",  reignStart: null,  reignEnd: null },
  { slug: "khyan",         name: "Khyan",         alternateNames: ["Khian", "Khayan"],                   dynastyId: "dynasty-15",  reignStart: -1621, reignEnd: -1581 },
  { slug: "apepi",         name: "Apepi",         alternateNames: ["Apophis", "Aweserre"],                dynastyId: "dynasty-15",  reignStart: -1581, reignEnd: -1541 },
  { slug: "khamudy",       name: "Khamudy",       alternateNames: ["Khamudi"],                           dynastyId: "dynasty-15",  reignStart: -1541, reignEnd: -1540 },

  // ── Dynasty 17 ────────────────────────────────────────────────────────────
  { slug: "seqenenra",     name: "Seqenenra",     alternateNames: ["Seqenenre Tao"],                     dynastyId: "dynasty-17",  reignStart: -1558, reignEnd: -1554, notable: true, summary: "His mummy shows severe head wounds, suggesting he died in battle against the Hyksos." },
  { slug: "kamose",        name: "Kamose",        alternateNames: ["Kamesiu"],                           dynastyId: "dynasty-17",  reignStart: -1555, reignEnd: -1550, notable: true, summary: "Launched the final campaign to expel the Hyksos from Egypt." },

  // ── Abydos Dynasty ────────────────────────────────────────────────────────
  { slug: "senebkay",      name: "Senebkay",      alternateNames: [],                                    dynastyId: "abydos",      reignStart: null,  reignEnd: null },
  { slug: "wepwawetemsaf", name: "Wepwawetemsaf", alternateNames: [],                                    dynastyId: "abydos",      reignStart: null,  reignEnd: null },
  { slug: "pantjeny",      name: "Pantjeny",      alternateNames: [],                                    dynastyId: "abydos",      reignStart: null,  reignEnd: null },
  { slug: "snaaib",        name: "Snaaib",        alternateNames: [],                                    dynastyId: "abydos",      reignStart: null,  reignEnd: null },

  // ── Dynasty 18 ────────────────────────────────────────────────────────────
  { slug: "ahmose-i",      name: "Ahmose I",      alternateNames: ["Amasis", "Amosis"],                  dynastyId: "dynasty-18",  reignStart: -1550, reignEnd: -1525, notable: true, summary: "Expelled the Hyksos and reunified Egypt, founding the New Kingdom and the Eighteenth Dynasty." },
  { slug: "amenhotep-i",   name: "Amenhotep I",   alternateNames: ["Amenophis I"],                       dynastyId: "dynasty-18",  reignStart: -1541, reignEnd: -1520 },
  { slug: "thutmose-i",    name: "Thutmose I",    alternateNames: ["Tuthmosis I", "Thutmosis I"],        dynastyId: "dynasty-18",  reignStart: -1520, reignEnd: -1492 },
  { slug: "thutmose-ii",   name: "Thutmose II",   alternateNames: ["Tuthmosis II", "Thutmosis II"],      dynastyId: "dynasty-18",  reignStart: -1492, reignEnd: -1479 },
  { slug: "hatshepsut",    name: "Hatshepsut",    alternateNames: ["Hatchepsut"],                        dynastyId: "dynasty-18",  reignStart: -1473, reignEnd: -1458, notable: true, summary: "One of Egypt's most successful female pharaohs, known for ambitious building programs and trade expeditions to Punt." },
  { slug: "thutmose-iii",  name: "Thutmose III",  alternateNames: ["Tuthmosis III", "Thutmosis III"],    dynastyId: "dynasty-18",  reignStart: -1479, reignEnd: -1425, notable: true, summary: "Dubbed the 'Napoleon of Egypt' for his 17 military campaigns; expanded Egypt to its greatest territorial extent." },
  { slug: "amenhotep-ii",  name: "Amenhotep II",  alternateNames: ["Amenophis II"],                      dynastyId: "dynasty-18",  reignStart: -1425, reignEnd: -1400 },
  { slug: "thutmose-iv",   name: "Thutmose IV",   alternateNames: ["Tuthmosis IV", "Thutmosis IV"],      dynastyId: "dynasty-18",  reignStart: -1400, reignEnd: -1390 },
  { slug: "amenhotep-iii", name: "Amenhotep III", alternateNames: ["Amenophis III"],                     dynastyId: "dynasty-18",  reignStart: -1390, reignEnd: -1352, notable: true, summary: "Presided over an era of unprecedented prosperity; his reign is associated with a great flowering of art and architecture." },
  { slug: "akhenaten",     name: "Amenhotep IV",  alternateNames: ["Akhenaten", "Akhenaton", "Echnaton"],dynastyId: "dynasty-18",  reignStart: -1352, reignEnd: -1334, notable: true, summary: "Introduced monotheistic worship of the sun disk Aten, moved the capital to Amarna, and revolutionised Egyptian art." },
  { slug: "neferneferuaten",name:"Neferneferuaten",alternateNames: ["Nefertiti", "Meritaten"],           dynastyId: "dynasty-18",  reignStart: -1334, reignEnd: -1332, notable: true, summary: "Possibly Nefertiti ruling as pharaoh — one of Egyptology's most debated questions." },
  { slug: "smenkhkara",    name: "Smenkhkara",    alternateNames: ["Smenkhare", "Smenkare"],             dynastyId: "dynasty-18",  reignStart: -1332, reignEnd: null },
  { slug: "tutankhamun",   name: "Tutankhamun",   alternateNames: ["Tutankhamon", "King Tut", "Tutankhaten"],dynastyId:"dynasty-18",reignStart:-1332, reignEnd:-1323, notable: true, summary: "The 'boy king' died young but became the world's most famous pharaoh after Howard Carter discovered his intact tomb in 1922." },
  { slug: "ay",            name: "Ay",            alternateNames: ["Aja", "Aya"],                        dynastyId: "dynasty-18",  reignStart: -1322, reignEnd: -1320 },
  { slug: "horemheb",      name: "Horemheb",      alternateNames: ["Horemhab", "Haremhab"],              dynastyId: "dynasty-18",  reignStart: -1320, reignEnd: -1292 },

  // ── Dynasty 19 ────────────────────────────────────────────────────────────
  { slug: "ramesses-i",    name: "Ramesses I",    alternateNames: ["Ramses I"],                          dynastyId: "dynasty-19",  reignStart: -1292, reignEnd: -1290 },
  { slug: "seti-i",        name: "Seti I",        alternateNames: ["Sethos I"],                          dynastyId: "dynasty-19",  reignStart: -1290, reignEnd: -1279, notable: true, summary: "Builder of the magnificent tomb KV17 in the Valley of the Kings; known for military campaigns into Canaan and Libya." },
  { slug: "ramesses-ii",   name: "Ramesses II",   alternateNames: ["Rameses II", "Ramses II", "Ozymandias"],dynastyId:"dynasty-19",reignStart:-1279, reignEnd:-1213, notable: true, summary: "Known as Ramesses the Great — the most celebrated pharaoh. Reigned ~66 years, signed history's first known peace treaty, and built Abu Simbel." },
  { slug: "merenptah",     name: "Merenptah",     alternateNames: ["Merneptah"],                         dynastyId: "dynasty-19",  reignStart: -1213, reignEnd: -1203 },
  { slug: "seti-ii",       name: "Seti II",       alternateNames: ["Sethos II"],                         dynastyId: "dynasty-19",  reignStart: -1203, reignEnd: -1200 },
  { slug: "amenmesse",     name: "Amenmesse",     alternateNames: ["Amenmesses", "Amenmose"],            dynastyId: "dynasty-19",  reignStart: -1203, reignEnd: -1197 },
  { slug: "siptah",        name: "Siptah",        alternateNames: ["Merenptah Siptah"],                  dynastyId: "dynasty-19",  reignStart: -1197, reignEnd: -1191 },
  { slug: "tausret",       name: "Tausret",       alternateNames: ["Tawosret", "Twosret"],               dynastyId: "dynasty-19",  reignStart: -1191, reignEnd: -1190, notable: true, summary: "One of the few female pharaohs; originally queen regent for Siptah." },

  // ── Dynasty 20 ────────────────────────────────────────────────────────────
  { slug: "setnakht",      name: "Setnakht",      alternateNames: ["Setnakhte"],                         dynastyId: "dynasty-20",  reignStart: -1190, reignEnd: -1186 },
  { slug: "ramesses-iii",  name: "Ramesses III",  alternateNames: ["Rameses III", "Ramses III"],         dynastyId: "dynasty-20",  reignStart: -1186, reignEnd: -1155, notable: true, summary: "The last great pharaoh of the New Kingdom; repelled the Sea Peoples and Libyan invasions." },
  { slug: "ramesses-iv",   name: "Ramesses IV",   alternateNames: [],                                    dynastyId: "dynasty-20",  reignStart: -1155, reignEnd: -1149 },
  { slug: "ramesses-v",    name: "Ramesses V",    alternateNames: [],                                    dynastyId: "dynasty-20",  reignStart: -1149, reignEnd: -1145 },
  { slug: "ramesses-vi",   name: "Ramesses VI",   alternateNames: [],                                    dynastyId: "dynasty-20",  reignStart: -1145, reignEnd: -1137 },
  { slug: "ramesses-vii",  name: "Ramesses VII",  alternateNames: [],                                    dynastyId: "dynasty-20",  reignStart: -1137, reignEnd: -1130 },
  { slug: "ramesses-viii", name: "Ramesses VIII", alternateNames: [],                                    dynastyId: "dynasty-20",  reignStart: -1130, reignEnd: -1129 },
  { slug: "ramesses-ix",   name: "Ramesses IX",   alternateNames: [],                                    dynastyId: "dynasty-20",  reignStart: -1129, reignEnd: -1111 },
  { slug: "ramesses-x",    name: "Ramesses X",    alternateNames: [],                                    dynastyId: "dynasty-20",  reignStart: -1111, reignEnd: -1107 },
  { slug: "ramesses-xi",   name: "Ramesses XI",   alternateNames: [],                                    dynastyId: "dynasty-20",  reignStart: -1107, reignEnd: -1077 },

  // ── Dynasty 21 ────────────────────────────────────────────────────────────
  { slug: "smendes-i",     name: "Smendes I",     alternateNames: [],                                    dynastyId: "dynasty-21",  reignStart: -1077, reignEnd: -1051 },
  { slug: "amenemnesut",   name: "Amenemnesut",   alternateNames: ["Amenemnisu"],                        dynastyId: "dynasty-21",  reignStart: -1051, reignEnd: -1047 },
  { slug: "psusennes-i",   name: "Psusennes I",   alternateNames: [],                                    dynastyId: "dynasty-21",  reignStart: -1047, reignEnd: -1001 },
  { slug: "amenemope",     name: "Amenemope",     alternateNames: [],                                    dynastyId: "dynasty-21",  reignStart: -1001, reignEnd: -992 },
  { slug: "osochor",       name: "Osochor",       alternateNames: ["Osorkon the Elder"],                 dynastyId: "dynasty-21",  reignStart: -992,  reignEnd: -986 },
  { slug: "siamun",        name: "Siamun",        alternateNames: [],                                    dynastyId: "dynasty-21",  reignStart: -986,  reignEnd: -967 },
  { slug: "psusennes-ii",  name: "Psusennes II",  alternateNames: [],                                    dynastyId: "dynasty-21",  reignStart: -967,  reignEnd: -943 },

  // ── Dynasty 22 ────────────────────────────────────────────────────────────
  { slug: "shoshenq-i",    name: "Shoshenq I",    alternateNames: ["Sheshonq I", "Sheshonk I"],          dynastyId: "dynasty-22",  reignStart: -943,  reignEnd: -922, notable: true, summary: "Believed to be the biblical Shishak who sacked Jerusalem. Reunified Egypt briefly." },
  { slug: "osorkon-i",     name: "Osorkon I",     alternateNames: [],                                    dynastyId: "dynasty-22",  reignStart: -922,  reignEnd: -887 },
  { slug: "shoshenq-ii",   name: "Shoshenq II",   alternateNames: ["Sheshonq II"],                       dynastyId: "dynasty-22",  reignStart: null,  reignEnd: null },
  { slug: "takelot-i",     name: "Takelot I",     alternateNames: [],                                    dynastyId: "dynasty-22",  reignStart: -885,  reignEnd: -872 },
  { slug: "osorkon-ii",    name: "Osorkon II",    alternateNames: [],                                    dynastyId: "dynasty-22",  reignStart: -872,  reignEnd: -837 },
  { slug: "shoshenq-iii",  name: "Shoshenq III",  alternateNames: ["Sheshonq III"],                      dynastyId: "dynasty-22",  reignStart: -837,  reignEnd: -798 },
  { slug: "shoshenq-iv",   name: "Shoshenq IV",   alternateNames: [],                                    dynastyId: "dynasty-22",  reignStart: -798,  reignEnd: -785 },
  { slug: "pami",          name: "Pami",          alternateNames: [],                                    dynastyId: "dynasty-22",  reignStart: -785,  reignEnd: -778 },
  { slug: "shoshenq-v",    name: "Shoshenq V",    alternateNames: ["Sheshonq V"],                        dynastyId: "dynasty-22",  reignStart: -778,  reignEnd: -740 },
  { slug: "osorkon-iv",    name: "Osorkon IV",    alternateNames: [],                                    dynastyId: "dynasty-22",  reignStart: -740,  reignEnd: -720 },

  // ── Dynasty 23 ────────────────────────────────────────────────────────────
  { slug: "takelot-ii",    name: "Takelot II",    alternateNames: [],                                    dynastyId: "dynasty-23",  reignStart: -840,  reignEnd: -815 },
  { slug: "pedubast-i",    name: "Pedubast I",    alternateNames: [],                                    dynastyId: "dynasty-23",  reignStart: -829,  reignEnd: -804 },
  { slug: "osorkon-iii",   name: "Osorkon III",   alternateNames: [],                                    dynastyId: "dynasty-23",  reignStart: -798,  reignEnd: -769 },
  { slug: "takelot-iii",   name: "Takelot III",   alternateNames: [],                                    dynastyId: "dynasty-23",  reignStart: -774,  reignEnd: -759 },
  { slug: "rudamun",       name: "Rudamun",       alternateNames: ["Rudamon"],                           dynastyId: "dynasty-23",  reignStart: -759,  reignEnd: -755 },

  // ── Dynasty 25 – Nubian ────────────────────────────────────────────────────
  { slug: "piye",          name: "Piye",          alternateNames: ["Piankhi", "Piankhy"],                dynastyId: "dynasty-25",  reignStart: -752,  reignEnd: -721, notable: true, summary: "Nubian king who conquered Egypt and founded the Twenty-fifth Dynasty, known as the Nubian (Kushite) Dynasty." },
  { slug: "shabaka",       name: "Shabaka",       alternateNames: ["Sabacon"],                           dynastyId: "dynasty-25",  reignStart: -721,  reignEnd: -707 },
  { slug: "shebitko",      name: "Shebitko",      alternateNames: ["Shebitku"],                          dynastyId: "dynasty-25",  reignStart: -707,  reignEnd: -690 },
  { slug: "taharqa",       name: "Taharqa",       alternateNames: ["Taharka", "Taharqo"],                dynastyId: "dynasty-25",  reignStart: -690,  reignEnd: -664, notable: true, summary: "The most famous Kushite pharaoh; mentioned in the Bible (2 Kings 19:9); built extensively across Egypt and Nubia." },
  { slug: "tenutamen",     name: "Tenutamen",     alternateNames: ["Tantamani"],                         dynastyId: "dynasty-25",  reignStart: -664,  reignEnd: -656 },

  // ── Dynasty 26 – Saite ────────────────────────────────────────────────────
  { slug: "necho-i",       name: "Necho I",       alternateNames: ["Nekao I"],                           dynastyId: "dynasty-26",  reignStart: null,  reignEnd: null },
  { slug: "psamtik-i",     name: "Psamtik I",     alternateNames: ["Psammetichus I"],                    dynastyId: "dynasty-26",  reignStart: -664,  reignEnd: -610, notable: true, summary: "Reunified Egypt, expelled the Assyrians and founded the Saite period renaissance." },
  { slug: "necho-ii",      name: "Necho II",      alternateNames: ["Nekao II"],                          dynastyId: "dynasty-26",  reignStart: -610,  reignEnd: -595, notable: true, summary: "Attempted to build a canal from the Nile to the Red Sea; his fleet circumnavigated Africa." },
  { slug: "psamtik-ii",    name: "Psamtik II",    alternateNames: ["Psammetichus II"],                   dynastyId: "dynasty-26",  reignStart: -595,  reignEnd: -589 },
  { slug: "apries",        name: "Apries",        alternateNames: ["Hophra"],                            dynastyId: "dynasty-26",  reignStart: -589,  reignEnd: -570 },
  { slug: "amasis",        name: "Amasis",        alternateNames: ["Ahmose II"],                         dynastyId: "dynasty-26",  reignStart: -570,  reignEnd: -526, notable: true, summary: "Oversaw a prosperous reign and strong Greek trading relations; the last great native pharaoh before Persian conquest." },
  { slug: "psamtik-iii",   name: "Psamtik III",   alternateNames: ["Psammetichus III"],                  dynastyId: "dynasty-26",  reignStart: -526,  reignEnd: -525 },

  // ── Dynasty 27 – First Persian ────────────────────────────────────────────
  { slug: "cambyses-ii",   name: "Cambyses II",   alternateNames: [],                                    dynastyId: "dynasty-27",  reignStart: -525,  reignEnd: -522, notable: true, summary: "Persian king who conquered Egypt, ending the Saite dynasty." },
  { slug: "darius-i",      name: "Darius I",      alternateNames: [],                                    dynastyId: "dynasty-27",  reignStart: -522,  reignEnd: -486 },
  { slug: "xerxes-i",      name: "Xerxes I",      alternateNames: [],                                    dynastyId: "dynasty-27",  reignStart: -486,  reignEnd: -465 },
  { slug: "artaxerxes-i",  name: "Artaxerxes I",  alternateNames: [],                                    dynastyId: "dynasty-27",  reignStart: -465,  reignEnd: -424 },
  { slug: "darius-ii",     name: "Darius II",     alternateNames: [],                                    dynastyId: "dynasty-27",  reignStart: -424,  reignEnd: -405 },
  { slug: "artaxerxes-ii", name: "Artaxerxes II", alternateNames: [],                                    dynastyId: "dynasty-27",  reignStart: -405,  reignEnd: -404 },

  // ── Dynasty 28 ────────────────────────────────────────────────────────────
  { slug: "amyrtaeus",     name: "Amyrtaeus",     alternateNames: [],                                    dynastyId: "dynasty-28",  reignStart: -404,  reignEnd: -399 },

  // ── Dynasty 29 ────────────────────────────────────────────────────────────
  { slug: "neferites-i",   name: "Neferites I",   alternateNames: [],                                    dynastyId: "dynasty-29",  reignStart: -398,  reignEnd: -393 },
  { slug: "akoris",        name: "Akoris",        alternateNames: [],                                    dynastyId: "dynasty-29",  reignStart: -393,  reignEnd: -380 },
  { slug: "psammuthis",    name: "Psammuthis",    alternateNames: [],                                    dynastyId: "dynasty-29",  reignStart: -393,  reignEnd: -393 },
  { slug: "neferites-ii",  name: "Neferites II",  alternateNames: [],                                    dynastyId: "dynasty-29",  reignStart: -380,  reignEnd: -380 },
  { slug: "muthis",        name: "Muthis",        alternateNames: [],                                    dynastyId: "dynasty-29",  reignStart: null,  reignEnd: null },

  // ── Dynasty 30 ────────────────────────────────────────────────────────────
  { slug: "nectanebo-i",   name: "Nectanebo I",   alternateNames: [],                                    dynastyId: "dynasty-30",  reignStart: -380,  reignEnd: -362 },
  { slug: "djedhor",       name: "Djedhor Teos I",alternateNames: ["Teos I"],                            dynastyId: "dynasty-30",  reignStart: -362,  reignEnd: -360 },
  { slug: "nectanebo-ii",  name: "Nectanebo II",  alternateNames: [],                                    dynastyId: "dynasty-30",  reignStart: -360,  reignEnd: -343 },

  // ── Dynasty 31 – Second Persian ───────────────────────────────────────────
  { slug: "artaxerxes-iii",name: "Artaxerxes III",alternateNames: [],                                    dynastyId: "dynasty-31",  reignStart: -343,  reignEnd: -338 },
  { slug: "arses",         name: "Arses",         alternateNames: [],                                    dynastyId: "dynasty-31",  reignStart: -338,  reignEnd: -336 },
  { slug: "darius-iii",    name: "Darius III",    alternateNames: [],                                    dynastyId: "dynasty-31",  reignStart: -336,  reignEnd: -332 },

  // ── Argead ────────────────────────────────────────────────────────────────
  { slug: "alexander-the-great",name:"Alexander the Great",alternateNames:["Alexander III of Macedon"], dynastyId: "argead",       reignStart: -332, reignEnd: -323, notable: true, summary: "Conquered Egypt in 332 BC, founded Alexandria, and was recognised as pharaoh." },
  { slug: "alexander-iv",  name: "Alexander IV",  alternateNames: ["Alexander IV Aegus"],               dynastyId: "argead",       reignStart: -317,  reignEnd: -309 },

  // ── Ptolemaic ─────────────────────────────────────────────────────────────
  { slug: "ptolemy-i",     name: "Ptolemy I",     alternateNames: ["Ptolemaios Soter"],                  dynastyId: "ptolemaic",   reignStart: -305,  reignEnd: -285 },
  { slug: "ptolemy-ii",    name: "Ptolemy II",    alternateNames: ["Ptolemaios Philadelphos"],           dynastyId: "ptolemaic",   reignStart: -288,  reignEnd: -246 },
  { slug: "ptolemy-iii",   name: "Ptolemy III",   alternateNames: ["Ptolemaios Euergetes"],              dynastyId: "ptolemaic",   reignStart: -246,  reignEnd: -222 },
  { slug: "ptolemy-iv",    name: "Ptolemy IV",    alternateNames: ["Ptolemaios Philopator"],             dynastyId: "ptolemaic",   reignStart: -222,  reignEnd: -204 },
  { slug: "ptolemy-v",     name: "Ptolemy V",     alternateNames: ["Ptolemaios Epiphanes"],              dynastyId: "ptolemaic",   reignStart: -204,  reignEnd: -180, notable: true, summary: "The Rosetta Stone was erected during his reign." },
  { slug: "ptolemy-vi",    name: "Ptolemy VI",    alternateNames: ["Ptolemaios Philometor"],             dynastyId: "ptolemaic",   reignStart: -180,  reignEnd: -145 },
  { slug: "ptolemy-viii",  name: "Ptolemy VIII",  alternateNames: ["Ptolemaios Euergetes Physcon"],      dynastyId: "ptolemaic",   reignStart: -169,  reignEnd: -116, reignNote: "Several non-consecutive periods" },
  { slug: "ptolemy-ix",    name: "Ptolemy IX",    alternateNames: ["Ptolemaios Soter Lathyrus"],         dynastyId: "ptolemaic",   reignStart: -116,  reignEnd: -81, reignNote: "Non-consecutive periods" },
  { slug: "ptolemy-x",     name: "Ptolemy X",     alternateNames: ["Ptolemaios Alexander"],              dynastyId: "ptolemaic",   reignStart: -110,  reignEnd: -88, reignNote: "Non-consecutive periods" },
  { slug: "ptolemy-xii",   name: "Ptolemy XII",   alternateNames: ["Ptolemaios Neos Dionysus", "Auletes"],dynastyId:"ptolemaic",  reignStart: -80,   reignEnd: -58 },
  { slug: "ptolemy-xiii",  name: "Ptolemy XIII",  alternateNames: ["Ptolemaios Philopator II"],          dynastyId: "ptolemaic",   reignStart: -51,   reignEnd: -47 },
  { slug: "cleopatra-vii", name: "Cleopatra VII", alternateNames: ["Kleopatra", "Cleopatra"],            dynastyId: "ptolemaic",   reignStart: -51,   reignEnd: -30, notable: true, summary: "The last active ruler of the Ptolemaic Kingdom — fluent in nine languages, allied with Julius Caesar and Mark Antony." },
  { slug: "ptolemy-xv",    name: "Ptolemy XV",    alternateNames: ["Caesarion"],                         dynastyId: "ptolemaic",   reignStart: -44,   reignEnd: -30 },

  // ── Roman Emperors ────────────────────────────────────────────────────────
  { slug: "augustus",      name: "Augustus",      alternateNames: ["Imperator Caesar Augustus"],         dynastyId: "roman",       reignStart: -27,  reignEnd: 14, notable: true, summary: "First Roman emperor who ruled Egypt as a personal possession after defeating Cleopatra and Mark Antony." },
  { slug: "tiberius",      name: "Tiberius",      alternateNames: [],                                    dynastyId: "roman",       reignStart: 14,   reignEnd: 37 },
  { slug: "caligula",      name: "Caligula",      alternateNames: ["Gaius Caesar"],                      dynastyId: "roman",       reignStart: 37,   reignEnd: 41 },
  { slug: "claudius",      name: "Claudius",      alternateNames: [],                                    dynastyId: "roman",       reignStart: 41,   reignEnd: 54 },
  { slug: "nero",          name: "Nero",          alternateNames: [],                                    dynastyId: "roman",       reignStart: 54,   reignEnd: 68 },
  { slug: "vespasianus",   name: "Vespasianus",   alternateNames: ["Vespasian"],                         dynastyId: "roman",       reignStart: 69,   reignEnd: 79 },
  { slug: "titus",         name: "Titus",         alternateNames: [],                                    dynastyId: "roman",       reignStart: 79,   reignEnd: 81 },
  { slug: "domitianus",    name: "Domitianus",    alternateNames: ["Domitian"],                          dynastyId: "roman",       reignStart: 81,   reignEnd: 96 },
  { slug: "trajanus",      name: "Trajanus",      alternateNames: ["Trajan"],                            dynastyId: "roman",       reignStart: 98,   reignEnd: 117 },
  { slug: "hadrianus",     name: "Hadrianus",     alternateNames: ["Hadrian"],                           dynastyId: "roman",       reignStart: 117,  reignEnd: 138 },
  { slug: "antoninus-pius",name: "Antoninus Pius",alternateNames: [],                                    dynastyId: "roman",       reignStart: 138,  reignEnd: 161 },
  { slug: "marcus-aurelius",name:"Marcus Aurelius",alternateNames: [],                                   dynastyId: "roman",       reignStart: 161,  reignEnd: 180 },
  { slug: "commodus",      name: "Commodus",      alternateNames: [],                                    dynastyId: "roman",       reignStart: 177,  reignEnd: 192 },
  { slug: "septimius-severus",name:"Septimius Severus",alternateNames:[],                               dynastyId: "roman",       reignStart: 193,  reignEnd: 211 },
  { slug: "caracalla",     name: "Caracalla",     alternateNames: [],                                    dynastyId: "roman",       reignStart: 198,  reignEnd: 217 },
  { slug: "diocletianus",  name: "Diocletianus",  alternateNames: ["Diocletian"],                        dynastyId: "roman",       reignStart: 284,  reignEnd: 305 },
  { slug: "maximinus-daia",name: "Maximinus Daia",alternateNames: ["Maximinus II"],                      dynastyId: "roman",       reignStart: 311,  reignEnd: 313 },
];
