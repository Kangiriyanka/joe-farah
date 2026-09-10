



import {ar_endings, er_endings, ir_endings} from "./verbendings"
import {verbs} from "./verbbank"
import { irregularVerbs } from "./irregularverbs"

type Person = "yo" | "tú" | "él/ella/usted" | "usted" | "nosotros" | "ustedes" | "vosotros" | "ellos/ellas/ustedes";
type Ending = "ar" | "er" | "ir"
type VerbEndings = Partial<Partial<Record<Mood,Partial<Record<Tense, Partial<Record<Person, string>>>>>>>;
type ConjugationTable = Partial<Record<Person, string>>;

export type Mood = "indicative" | "subjunctive" | "imperative"
export type Tense = "present" | "preterite" | "future" | "imperfect" | "imperfect (se)"| "present perfect" | "past perfect" | "future perfect" | "conditional" | "conditional perfect" |  "normal" | "negative" ;



export const moods = ["indicative", "subjunctive", "imperative"]


export const tenses = [

    "present",
    "preterite",
    "imperfect",
    "future",
    "conditional"


] as const;


const getEndingTable = (ending: Ending) => {

   let endingTable: VerbEndings;

   switch (ending) {

        case "ar":

            endingTable = ar_endings
            return endingTable
      

        case "ir":
             endingTable = ir_endings
            return endingTable
         

        case "er":

            endingTable = er_endings
               return endingTable
          

        default:

            throw new Error(`Unknown verb ending: ${ending}`);

   }
}


// ----- ENDING VERB CHECKS -----
const checkImperative  = (tense: Tense, mood: Mood, person: Person, stem: string, conjugationTable: ConjugationTable, parts: any, endingChanged: boolean ) => {


    if (mood != "imperative" ) return;
    if (tense == "negative") {

          if (parts) {

         return [  "no (" + person  + ") ", parts[0] , parts[1], parts[2], conjugationTable[person as Person], endingChanged]
         }


            return ["no " + "(" + person  + ") ", stem , conjugationTable[person as Person], endingChanged]
    }

 
    if (parts) {

         return [  "(" + person  + ") ", parts[0] , parts[1], parts[2], conjugationTable[person as Person], endingChanged]
    }
    
    return [  "(" + person  + ") ", stem , conjugationTable[person as Person], endingChanged]

}

const checkPerfect  = (tense: Tense, mood: Mood, person: Person, conjugationTable: ConjugationTable, verb: string) => {

      // Tense Conditions
        if ((tense == "present perfect" || tense == "past perfect" || tense == "future perfect" || tense == "conditional perfect") && (mood == "indicative" || mood == "subjunctive") ) {

            return [person + " ", conjugationTable[person as Person] + " ",  verbs[verb]["pp"]]
        }

}

// -----------------------------




const getPreteriteStem = (verb: string) => {

    const combo = conjugateVerb(verb, "preterite", "indicative")[5];

    const preteriteForm = combo[1] + combo[2];
  
    return preteriteForm.replace(/aron$|ieron$/, "")

};

const stemModifier = (mood: Mood, tense: Tense, stem: string, verb: string) => {
      // Conditional takes the full verb and adds ía
   if (tense == "conditional" && mood== "indicative") {

    stem = verb
   
   }


   if ((tense == "imperfect" || tense == "imperfect (se)") && mood== "subjunctive") {

     getPreteriteStem(verb)
     
     
     
   }

    if (tense == "future" && mood == "subjunctive") {

  
     getPreteriteStem(verb)
     
     
   }

    return stem

   
}


export function conjugateVerb(infinitiveVerb: string, tense: Tense, mood: Mood) {

    // AR, ER or IR ending

   const ending: Ending = infinitiveVerb.slice(-2) as Ending
   const endingTable = getEndingTable(ending)

   let stem: string = infinitiveVerb.slice(0,-2)
   let hasRule: boolean
  
   // Modify the stem of an irregular verb for a selected tense and mood


 
   stem = stemModifier(mood,tense,stem,infinitiveVerb)



   
   const conjugationTable = endingTable[mood]?.[tense] ?? {};


   // You have to wrap the Object.keys in parenthesis to map it to a specific type
   const conjugatedVerbs = (Object.keys(conjugationTable) as Person[]).map((person,i) => {
      
        let ending = conjugationTable[person]

        const tenseData = irregularVerbs[infinitiveVerb]?.[mood]?.[tense];


        const rule = tenseData?.rules?.[i + 1];
        let parts;
        let endings;

    

        const endingRule = tenseData?.endingOverride?.[i + 1];

        const modifiedEnding = endingRule

            ? ending?.replace(endingRule[0], endingRule[1])

            : ending;



        const modifiedStem = rule

            ? stem.replace(rule[0], rule[1])

            : stem;


        // If a rule exists, we returned a 5 part array
        if (rule) {
                // Example: pueden -> ue at index 1
                // Parts: slice(0,1) -> p
                //        ue for the rule
                //        slice(1 + 2 = 3) 
            const index = modifiedStem.indexOf(rule[1]);

                parts = [

                modifiedStem.slice(0, index),

                rule[1],

                modifiedStem.slice(index + rule[1].length)

                ];

           

            

        }

        const endingChanged = !!endingRule;

       
    


      


        const perfect = checkPerfect(tense,mood,person, conjugationTable, infinitiveVerb)
        if (perfect) return perfect;
        const imperative = checkImperative(tense,  mood, person, modifiedStem, conjugationTable, parts, endingChanged )
        if (imperative) return imperative;
        
   
      

        if (parts) return [person + " ",  parts[0] , parts[1], parts[2], modifiedEnding, endingChanged]
        return [person + " ",  modifiedStem  , modifiedEnding, endingChanged]

   })

   return conjugatedVerbs


}
