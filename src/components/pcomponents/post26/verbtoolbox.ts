/*

Integrating querer, poder, preferir, juego, estar, tener


*/


export type Tense = "present" | "preterite" | "future" | "imperfect" | "imperfect (se)"| "present perfect" | "past perfect" | "future perfect" | "conditional" | "conditional perfect" |  "normal" | "negative" ;
type Person = "yo" | "tú" | "él/ella/usted" | "usted" | "nosotros" | "ustedes" | "vosotros" | "ellos/ellas/ustedes";
export type Mood = "indicative" | "subjunctive" | "imperative"


export const moods = ["indicative", "subjunctive", "imperative"]


export const tenses = [

    "present",
    "preterite",
    "imperfect",
    "future",
    "conditional"


] as const;

export const regularVerbs = {
    beber: {
        pp: "bebido",
        gerund: "bebiendo"
    },

    comer: {
        pp: "comido",
        gerund: "comiendo"
    },

    amar: {
        pp: "amado",
        gerund: "amando"
    },

    acabar: {
        pp: "acabado",
        gerund: "acabando"
    },

      quedar: {
        pp: "quedado",
        gerund: "quedando"
    },


    escribir: {
        pp: "escrito",
        gerund: "escribiendo"
    }
}

export const verbTips = {

    "indicative": { 

    "present": "stem + ending",
    "preterite": "stem + ending",
    "imperfect": "stem + ending",
    "future": "Replace the a to e when switching from AR -> ER/IR",
    "conditional": "The conjugated part is added to the infinitive.",
    "present perfect": "Past actions that continue to have a present effect",
    "past perfect": "Past action happened before another past action (When X, Y had happened)",
    "future perfect": "Something will have happened before a future event",
    "conditional perfect": "What would have happened but didn't"


    },

    "subjunctive": {

        "present": "The AR verbs use the ER/IR endings and vice-versa.",
        "imperfect": "① Conjugate to indicative preterite 3rd person plural \n ② Remove the ron and add ra",
         "imperfect (se)" : "Less common version of the imperfect subjunctive (ra)" ,
        "future": "① Conjugate to indicative preterite 3rd person plural \n ② Remove the ron and add ra. Also, Not very used in daily conversation",
   


    },

    "imperative": {

        "normal": "Remember the pattern OXXOX. X takes the letters of the opposite verb forms (AR<-> ER/IR & vice versa). For example, for the usted Person of escribir, it takes the a from AR form to become escriba."
    ,
        "negative": "Add negation with present subjunctive"

    }
}
type VerbEndings = Partial<Partial<Record<Mood,Partial<Record<Tense, Partial<Record<Person, string>>>>>>>;


// What the dropdown shows
export const moodTenses: Record<Mood, Tense[]> = {

    indicative: [

        "present",
        "preterite",
        "imperfect",
        "future",
        "conditional",
        "present perfect",
        "past perfect",
        "future perfect",
        "conditional perfect"

    ],

    subjunctive: [

        "present",
        "imperfect",
        "imperfect (se)",
        "present perfect",
        "past perfect",
        "future",

    ],

    imperative: [

        "normal",
        "negative",



    ]

}

const ar_endings: VerbEndings = {


    "indicative": {

    present: {
    "yo": "o" ,
    "tú": "as",
    "él/ella/usted": "a",
    "nosotros": "amos",
    "vosotros": "áis",
    "ellos/ellas/ustedes": "an"
    },

    preterite: {

    "yo": "é",
    "tú": "aste",
    "él/ella/usted": "ó",
    "nosotros": "amos",
    "vosotros": "asteis",
    "ellos/ellas/ustedes": "aron"

    },

    imperfect: {

        "yo": "aba",
        "tú": "abas",
        "él/ella/usted": "aba",
        "nosotros": "ábamos",
        "vosotros": "abais",
        "ellos/ellas/ustedes": "aban"

        
    },

    future: {

        "yo": "aré",
        "tú": "arás",
        "él/ella/usted": "ará",
        "nosotros": "aremos",
        "vosotros": "aréis",
        "ellos/ellas/ustedes": "arán"

    },

      conditional: {

        "yo": "ía",
        "tú": "ías",
        "él/ella/usted": "ía",
        "nosotros": "íamos",
        "vosotros": "íais",
        "ellos/ellas/ustedes": "ían"

    },

    "present perfect": {

        "yo": "he",
        "tú": "has",
        "él/ella/usted": "ha",
        "nosotros": "hemos",
        "vosotros": "habéis",
        "ellos/ellas/ustedes": "han"


    },

       "past perfect": {

        "yo": "había",
        "tú": "habías",
        "él/ella/usted": "había",
        "nosotros": "habíamos",
        "vosotros": "habiáis",
        "ellos/ellas/ustedes": "habían"


    },
    "future perfect": {

    "yo": "habré",
    "tú": "habrás",
    "él/ella/usted": "habrá",
    "nosotros": "habremos",
    "vosotros": "habréis",
    "ellos/ellas/ustedes": "habrán"

},

"conditional perfect": {

    "yo": "habría",

    "tú": "habrías",

    "él/ella/usted": "habría",

    "nosotros": "habríamos",

    "vosotros": "habríais",

    "ellos/ellas/ustedes": "habrían"

},
    
},

    "subjunctive": {

        "present": {
        "yo": "e",
        "tú": "es",
        "él/ella/usted": "e",
        "nosotros": "emos",
        "vosotros": "éis",
        "ellos/ellas/ustedes": "en"
    },

    imperfect: {

    "yo": "ra",
    "tú": "ras",
    "él/ella/usted": "ra",
    "nosotros": "ramos",
    "vosotros": "rais",
    "ellos/ellas/ustedes": "ran"

},

 "imperfect (se)": {

   "yo": "se",
"tú": "ses",
"él/ella/usted": "se",
"nosotros": "semos",
"vosotros": "seis",
"ellos/ellas/ustedes": "sen"

},

"present perfect": {

    "yo": "haya",
    "tú": "hayas",
    "él/ella/usted": "haya",
    "nosotros": "hayamos",
    "vosotros": "hayáis",
    "ellos/ellas/ustedes": "hayan"

},

"past perfect": {

    "yo": "hubiera",
    "tú": "hubieras",
    "él/ella/usted": "hubiera",
    "nosotros": "hubiéramos",
    "vosotros": "hubierais",
    "ellos/ellas/ustedes": "hubieran"

},
    

  future: {

    "yo": "re",
    "tú": "res",
    "él/ella/usted": "re",
    "nosotros": "remos",
    "vosotros": "reis",
    "ellos/ellas/ustedes": "ren"

}
},


"imperative": {
        "normal": {
        "tú": "a",
        "usted": "e",
        "nosotros": "emos",
        "vosotros": "ad",
        "ustedes": "en"
        },

        "negative": {

        "tú": "es",
        "usted": "e",
        "nosotros": "emos",
        "vosotros": "éis",
         "ustedes": "en"
        }


}



}
const er_endings: VerbEndings = {

    indicative: {
    present: {
        "yo": "o",
        "tú": "es",
        "él/ella/usted": "e",
        "nosotros": "emos",
        "vosotros": "éis",
        "ellos/ellas/ustedes": "en"
    },

    preterite: {
        "yo": "í",
        "tú": "iste",
        "él/ella/usted": "ió",
        "nosotros": "imos",
        "vosotros": "isteis",
        "ellos/ellas/ustedes": "ieron"
    },

    imperfect: {
        "yo": "ía",
        "tú": "ías",
        "él/ella/usted": "ía",
        "nosotros": "íamos",
        "vosotros": "íais",
        "ellos/ellas/ustedes": "ían"
    },

    future: {
        "yo": "eré",
        "tú": "erás",
        "él/ella/usted": "erá",
        "nosotros": "eremos",
        "vosotros": "eréis",
        "ellos/ellas/ustedes": "erán"
    },

    conditional: {

        "yo": "ía",

        "tú": "ías",

        "él/ella/usted": "ía",

        "nosotros": "íamos",

        "vosotros": "íais",

        "ellos/ellas/ustedes": "ían"

    },

        "present perfect": {

        "yo": "he",
        "tú": "has",
        "él/ella/usted": "ha",
        "nosotros": "hemos",
        "vosotros": "habéis",
        "ellos/ellas/ustedes": "han"


    },
     "past perfect": {

        "yo": "había",
        "tú": "habías",
        "él/ella/usted": "había",
        "nosotros": "habíamos",
        "vosotros": "habiáis",
        "ellos/ellas/ustedes": "habían"


    },
    
    "future perfect": {

    "yo": "habré",
    "tú": "habrás",
    "él/ella/usted": "habrá",
    "nosotros": "habremos",
    "vosotros": "habréis",
    "ellos/ellas/ustedes": "habrán"

},

"conditional perfect": {

    "yo": "habría",

    "tú": "habrías",

    "él/ella/usted": "habría",

    "nosotros": "habríamos",

    "vosotros": "habríais",

    "ellos/ellas/ustedes": "habrían"

},

    
    
    },

    "subjunctive": {

    present: {

    "yo": "a",
    "tú": "as",
    "él/ella/usted": "a",
    "nosotros": "amos",
    "vosotros": "áis",
    "ellos/ellas/ustedes": "an"
    },

    imperfect: {

    "yo": "ra",
    "tú": "ras",
    "él/ella/usted": "ra",
    "nosotros": "ramos",
    "vosotros": "rais",
    "ellos/ellas/ustedes": "ran"

},

 "imperfect (se)": {

   "yo": "se",
"tú": "ses",
"él/ella/usted": "se",
"nosotros": "semos",
"vosotros": "seis",
"ellos/ellas/ustedes": "sen"

},

"present perfect": {

    "yo": "haya",
    "tú": "hayas",
    "él/ella/usted": "haya",
    "nosotros": "hayamos",
    "vosotros": "hayáis",
    "ellos/ellas/ustedes": "hayan"

},

"past perfect": {

    "yo": "hubiera",
    "tú": "hubieras",
    "él/ella/usted": "hubiera",
    "nosotros": "hubiéramos",
    "vosotros": "hubierais",
    "ellos/ellas/ustedes": "hubieran"

},
    
    
  future: {

    "yo": "re",
    "tú": "res",
    "él/ella/usted": "re",
    "nosotros": "remos",
    "vosotros": "reis",
    "ellos/ellas/ustedes": "ren"

}
    },

    "imperative": {
    "normal": {
        "tú": "e",
        "usted": "a",
        "nosotros": "amos",
        "vosotros": "ed",
        "ustedes": "an"
    },

    "negative": {
        "tú": "as",
        "usted": "a",
        "nosotros": "amos",
        "vosotros": "áis",
        "ustedes": "an"
    }
}

    

    
};

const ir_endings: VerbEndings = {

    indicative:{
    present: {
        "yo": "o",
        "tú": "es",
        "él/ella/usted": "e",
        "nosotros": "imos",
        "vosotros": "ís",
        "ellos/ellas/ustedes": "en"
    },

    preterite: {
        "yo": "í",
        "tú": "iste",
        "él/ella/usted": "ió",
        "nosotros": "imos",
        "vosotros": "isteis",
        "ellos/ellas/ustedes": "ieron"
    },

    imperfect: {
        "yo": "ía",
        "tú": "ías",
        "él/ella/usted": "ía",
        "nosotros": "íamos",
        "vosotros": "íais",
        "ellos/ellas/ustedes": "ían"
    },

    future: {
        "yo": "iré",
        "tú": "irás",
        "él/ella/usted": "irá",
        "nosotros": "iremos",
        "vosotros": "iréis",
        "ellos/ellas/ustedes": "irán"
    },

     conditional: {

        "yo": "ía",

        "tú": "ías",

        "él/ella/usted": "ía",

        "nosotros": "íamos",

        "vosotros": "íais",

        "ellos/ellas/ustedes": "ían"

    },

        "present perfect": {

        "yo": "he",
        "tú": "has",
        "él/ella/usted": "ha",
        "nosotros": "hemos",
        "vosotros": "habéis",
        "ellos/ellas/ustedes": "han"


    },
     "past perfect": {

        "yo": "había",
        "tú": "habías",
        "él/ella/usted": "había",
        "nosotros": "habíamos",
        "vosotros": "habiáis",
        "ellos/ellas/ustedes": "habían"


    },
    "future perfect": {

    "yo": "habré",
    "tú": "habrás",
    "él/ella/usted": "habrá",
    "nosotros": "habremos",
    "vosotros": "habréis",
    "ellos/ellas/ustedes": "habrán"

},

"conditional perfect": {

    "yo": "habría",

    "tú": "habrías",

    "él/ella/usted": "habría",

    "nosotros": "habríamos",

    "vosotros": "habríais",

    "ellos/ellas/ustedes": "habrían"

},
    
   },

    "subjunctive": {

    present: {

    "yo": "a",
    "tú": "as",
    "él/ella/usted": "a",
    "nosotros": "amos",
    "vosotros": "áis",
    "ellos/ellas/ustedes": "an"
    },

    imperfect: {

    "yo": "ra",
    "tú": "ras",
    "él/ella/usted": "ra",
    "nosotros": "ramos",
    "vosotros": "rais",
    "ellos/ellas/ustedes": "ran"

},

 "imperfect (se)": {

   "yo": "se",
"tú": "ses",
"él/ella/usted": "se",
"nosotros": "semos",
"vosotros": "seis",
"ellos/ellas/ustedes": "sen"

},

"present perfect": {

    "yo": "haya",
    "tú": "hayas",
    "él/ella/usted": "haya",
    "nosotros": "hayamos",
    "vosotros": "hayáis",
    "ellos/ellas/ustedes": "hayan"

},

"past perfect": {

    "yo": "hubiera",
    "tú": "hubieras",
    "él/ella/usted": "hubiera",
    "nosotros": "hubiéramos",
    "vosotros": "hubierais",
    "ellos/ellas/ustedes": "hubieran"

},
    

     future: {

    "yo": "re",
    "tú": "res",
    "él/ella/usted": "re",
    "nosotros": "remos",
    "vosotros": "reis",
    "ellos/ellas/ustedes": "ren"

}
    },

    "imperative": {
    "normal": {
        "tú": "e",
        "usted": "a",
        "nosotros": "amos",
        "vosotros": "id",
        "ustedes": "an"
    },

    "negative": {
        "tú": "as",
        "usted": "a",
        "nosotros": "amos",
        "vosotros": "áis",
        "ustedes": "an"
    }
}
};



export function conjugateVerb(infinitiveVerb: string, tense: Tense, mood: Mood) {

   let stem = infinitiveVerb.slice(0,-2)
   const ending = infinitiveVerb.slice(-2)
   

    // Conditional takes the full verb and adds ía
   if (tense == "conditional" && mood== "indicative") {

    stem = infinitiveVerb
   }


   if (tense == "imperfect" || tense == "imperfect (se)" && mood=="subjunctive") {

     const combo = conjugateVerb(infinitiveVerb, "preterite", "indicative")[5]
     stem = (combo[1] + combo[2]).slice(0,-3)
     
   }

    if (tense == "future" && mood == "subjunctive") {

     const combo = conjugateVerb(infinitiveVerb, "preterite", "indicative")[5]
     stem = (combo[1] + combo[2]).slice(0,-3)
     
   }



   let endingTable: VerbEndings;

   switch (ending) {

        case "ar":

            endingTable = ar_endings
            break

        case "ir":
             endingTable = ir_endings
            break

        case "er":

            endingTable = er_endings
            break

        default:

            throw new Error(`Unknown verb ending: ${ending}`);

   }


   const conjugationTable = endingTable[mood][tense]
   
 

   if (conjugationTable == null) {
    return []
   }


   // Return the pronoun, stem and its conjugation
   const conjugatedVerbs = Object.keys(conjugationTable).map((person) => {

        if ((tense == "present perfect" || tense == "past perfect" || tense == "future perfect" || tense == "conditional perfect") && (mood == "indicative" || mood == "subjunctive") ) {

            return [person + " ", conjugationTable[person as Person] + " ",  regularVerbs[infinitiveVerb]["pp"]]
        }

        if (tense == "negative" && mood == "imperative") {
         
         return ["no " + "(" + person  + ") ", stem , conjugationTable[person as Person]]

        }

         if (tense == "normal" && mood == "imperative") {
         
         return [  "(" + person  + ") ", stem , conjugationTable[person as Person]]

        }
        return [person + " ", stem , conjugationTable[person as Person]]

   })

   return conjugatedVerbs


}
