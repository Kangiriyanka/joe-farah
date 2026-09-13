



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




// Get the appropriable table for endings
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
const checkImperative  = (tense: Tense, mood: Mood, person: Person, stem: string, conjugationTable: ConjugationTable, parts: any, modifiedEnding: string, endingChanged: boolean, isVanilla?: boolean ) => {


    if (mood != "imperative" ) return;

    if (tense == "negative") {
        
        if (isVanilla)    return [  stem , conjugationTable[person as Person]]
        
        if (parts) {

         return [  "no (" + person  + ") ", parts[0] , parts[1], parts[2], conjugationTable[person as Person] , endingChanged]
         }

         if (endingChanged) {

            return ["no " + "(" + person  + ") ", stem , modifiedEnding, endingChanged]

         }


            return ["no " + "(" + person  + ") ", stem , conjugationTable[person as Person], endingChanged]
    }

    if (isVanilla)    return [  stem , conjugationTable[person as Person]]

 
    if (parts) return [  "(" + person  + ") ", parts[0] , parts[1], parts[2], conjugationTable[person as Person], endingChanged]
    
    
    return [ "(" + person  + ") ", stem , conjugationTable[person as Person], endingChanged]

}

const checkPerfect  = (tense: Tense, mood: Mood, person: Person, conjugationTable: ConjugationTable, verb: string) => {

      // Tense Conditions
        if ((tense == "present perfect" || tense == "past perfect" || tense == "future perfect" || tense == "conditional perfect") && (mood == "indicative" || mood == "subjunctive") ) {

            return [person + " ", conjugationTable[person as Person] + " ",  verbs[verb]["pp"]]
        }

}

// -----------------------------




const getPreteriteStem = (verb: string, isVanilla?: boolean) => {
    

    const combo = !isVanilla ? conjugateVerb(verb, "preterite", "indicative")[5]: vanillaConjugateVerb(verb, "preterite", "indicative")[5];
    console.log(combo)
    let preteriteForm: string;
    console.log(combo)

    if (isVanilla) return combo[0]

    if (combo.length == 6) {

        preteriteForm = combo[1] + combo[2] + combo[3];

    } else {
        preteriteForm = combo[1] + combo[2]
    }
  
   
    // In the first person plural, the ending takes a tilde 
    // In the verb endings, we add the extra letter a or e instead of eron, we add ieron with the 1 p.p.
    return preteriteForm.replace(/aron$|ieron$/, "")

};




// Not all tenses use the same stem as the initial one.
// In the indicative conditional, we attach an ending to the infinitve verb.
const stemModifier = (mood: Mood, tense: Tense, stem: string, verb: string, isVanilla?: boolean) => {
   
   
    // Conditional takes the full verb and adds ía
   if (tense == "conditional" && mood== "indicative") {

   
     stem = verb
    
   }


   // Subjunctive imperfect and future have a special stem derived from the preterite indicative 3rd person
   if ((tense == "imperfect" || tense == "imperfect (se)") && mood== "subjunctive") {

    
     stem = getPreteriteStem(verb, isVanilla)
    
     
   }

    if (tense == "future" && mood == "subjunctive") {

     stem = getPreteriteStem(verb, isVanilla)
     
   }

   return stem

   

   
}


export function conjugateVerb(infinitiveVerb: string, tense: Tense, mood: Mood) {

    // AR, ER or IR ending
   const ending: Ending = infinitiveVerb.slice(-2) as Ending


   // The ending 
   const endingTable = getEndingTable(ending)


   // Example: Amar -> Am 
   let stem: string = infinitiveVerb.slice(0,-2)

  
   // Modify the stem of an irregular verb for a selected tense and mood
   stem = stemModifier(mood,tense,stem,infinitiveVerb)



   
   const conjugationTable = endingTable[mood]?.[tense] ?? {};


   // You have to wrap the Object.keys in parenthesis to map it to a specific type
   const conjugatedVerbs = (Object.keys(conjugationTable) as Person[]).map((person,i) => {
      
        let ending = conjugationTable[person]

        const tenseData = irregularVerbs[infinitiveVerb]?.[mood]?.[tense] 

    


        // Special rules for the stem
        const rule = tenseData?.rules?.[i + 1];
      
        let parts;
    

    

        const endingRule = tenseData?.endingOverride?.[i + 1];

   

        const modifiedEnding = endingRule

            ? ending?.replace(endingRule[0], endingRule[1])

            : ending;



        const modifiedStem = rule

            ? stem.replace(rule[0], rule[1])

            : stem;


        // If a rule exists, we return a 5 part array
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

        const endingChanged = !!endingRule && endingRule[1] != "";
     
     
       
    
        // If we replace everything, we need to mark it as blue
        // Imperative is an edge case because of extra text added for the person
         if (rule?.[0] === "*") {

            if (mood == "imperative" && tense== "normal") { return  ["(" + person + ") ",  rule[1]  , endingChanged, "highly-i"]}
            if (mood == "imperative" && tense== "negative") { return  ["no (" + person + ") ",  rule[1]  , endingChanged, "highly-i"]}

            return [person + " ",  rule[1]  , endingChanged, "highly-i"]

        }
      


      
        const perfect = checkPerfect(tense,mood,person, conjugationTable, infinitiveVerb)
        
        if (perfect) return perfect;
        const imperative = checkImperative(tense,  mood, person, modifiedStem, conjugationTable, parts, modifiedEnding ?? "", endingChanged )
    
        if (imperative) return imperative;
        
   
       
        console.log(parts)
        if (parts) return [person + " ",  parts[0] , parts[1], parts[2], modifiedEnding, endingChanged]

      
        return [person + " ",  modifiedStem  , modifiedEnding, endingChanged]

   })

   return conjugatedVerbs


}






// A conjugator without irregular verb considerations
// Used for comparison purposes.
export function vanillaConjugateVerb(infinitiveVerb: string, tense: Tense, mood: Mood) {

   

    // AR, ER or IR ending
   const ending: Ending = infinitiveVerb.slice(-2) as Ending


   const endingTable = getEndingTable(ending)

   let stem: string = infinitiveVerb.slice(0,-2)


   stem = stemModifier(mood,tense,stem,infinitiveVerb, true)
  


  
 


   
   const conjugationTable = endingTable[mood]?.[tense] ?? {};

   const tenseData = irregularVerbs?.[infinitiveVerb]?.[mood]?.[tense]
   const affectedPositions = new Set([

        ...Object.keys(tenseData?.["rules"] ?? {}),

        ...Object.keys(tenseData?.["endingOverride"] ?? {})

    ])






   // You have to wrap the Object.keys in parenthesis to map it to a specific type
   const conjugatedVerbs = (Object.keys(conjugationTable) as Person[]).map((person,i) => {

        
        if (!affectedPositions.has(i+1 + "")) {return "-"}

        let ending = conjugationTable[person]

     
    

      
        const perfect = checkPerfect(tense,mood,person, conjugationTable, infinitiveVerb)
        if (perfect) return [perfect[1], perfect[2]]
        const imperative = checkImperative(tense,  mood, person, stem, conjugationTable, [], "", false, true )
       
        if (imperative) return imperative
        
   
      
        return [ stem  , ending]

   })

   return conjugatedVerbs


}

