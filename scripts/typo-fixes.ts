/**
 * Known typos in source data (Vygus, Unikemet, etc.).
 * Applied during processing to fix errors we can't fix upstream.
 */

const TYPOS: [string, string][] = [
  ["disater", "disaster"],
  ["treshing", "threshing"],
  ["antilope", "antelope"],
  ["occured", "occurred"],
  ["adress", "address"],
  ["aquire", "acquire"],
  ["begining", "beginning"],
  ["beleive", "believe"],
  ["calender", "calendar"],
  ["cemetary", "cemetery"],
  ["comming", "coming"],
  ["concious", "conscious"],
  ["enviroment", "environment"],
  ["excercise", "exercise"],
  ["existance", "existence"],
  ["existant", "existent"],
  ["grammer", "grammar"],
  ["gaurd", "guard"],
  ["harrass", "harass"],
  ["imediate", "immediate"],
  ["knowlege", "knowledge"],
  ["liason", "liaison"],
  ["manuver", "maneuver"],
  ["momento", "memento"],
  ["noticable", "noticeable"],
  ["persistant", "persistent"],
  ["posession", "possession"],
  ["priviledge", "privilege"],
  ["recomend", "recommend"],
  ["refering", "referring"],
  ["relevent", "relevant"],
  ["rythm", "rhythm"],
  ["seige", "siege"],
  ["succesful", "successful"],
  ["suprise", "surprise"],
  ["tendancy", "tendency"],
  ["threshhold", "threshold"],
  ["tounge", "tongue"],
  ["truely", "truly"],
  ["untill", "until"],
  ["wierd", "weird"],
  ["diginity", "dignity"],
  ["pramid", "pyramid"],
  ["concering", "concerning"],
  ["Conquerer", "Conqueror"],
  ["KIngs", "Kings"],
  ["feedfood", "feed, food"],
];

/**
 * Fix known typos in a string. Case-insensitive matching,
 * preserves original case of surrounding text.
 */
export function fixTypos(text: string): string {
  let result = text;
  for (const [typo, fix] of TYPOS) {
    if (result.toLowerCase().includes(typo)) {
      result = result.replace(new RegExp(typo, "gi"), fix);
    }
  }
  return result;
}
