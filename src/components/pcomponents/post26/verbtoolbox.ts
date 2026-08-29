

export type Tense = "present" | "past" | "future";
type Person = "yo" | "tú" | "él" | "nosotros" | "vosotros" | "ellos";
type Mood = "indicative" | "subjunctive" | "imperative"

type ArVerbEndings = Partial<Record<Tense, Partial<Record<Person, string>>>>;

const endings: ArVerbEndings = {

    present: {
    "yo": "o" ,
    "tú": "as",
    "él": "a",
    "nosotros": "amos",
    "vosotros": "ais",
    "ellos": "an"
    },


}


export function conjugateVerb(infinitiveVerb: string, tense: Tense) {

    const stem = infinitiveVerb.slice(0,-2)
    const conjugatedTable = endings[tense]
    const conjugatedVerbs = Object.keys(conjugatedTable).map((person: Person) => {

       conjugatedTable?[person]
     })




}
