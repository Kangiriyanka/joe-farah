
type Tense = "present" | "preterite" | "future" | "imperfect" | "imperfect (se)"| "present perfect" | "past perfect" | "future perfect" | "conditional" | "conditional perfect" |  "normal" | "negative" ;
type Mood = "indicative" | "subjunctive" | "imperative"
type Person = "yo" | "tú" | "él/ella/usted" | "usted" | "nosotros" | "ustedes" | "vosotros" | "ellos/ellas/ustedes";


type ConjugationTable = Partial<Record<Person, string>>;

type VerbEndings =
    Partial<Record<Mood, Partial<Record<Tense, ConjugationTable>>>>;

export const ar_endings: VerbEndings = {


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

    "yo": "ara",
    "tú": "aras",
    "él/ella/usted": "ara",
    "nosotros": "áramos",
    "vosotros": "arais",
    "ellos/ellas/ustedes": "aran"

},

"imperfect (se)": {
  "yo": "ase",
  "tú": "ases",
  "él/ella/usted": "ase",
  "nosotros": "ásemos",
  "vosotros": "aseis",
  "ellos/ellas/ustedes": "asen"

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

    "yo": "are",
    "tú": "ares",
    "él/ella/usted": "are",
    "nosotros": "áremos",
    "vosotros": "areis",
    "ellos/ellas/ustedes": "aren"

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
export const er_endings: VerbEndings = {

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

    "yo": "iera",
    "tú": "ieras",
    "él/ella/usted": "iera",
    "nosotros": "iéramos",
    "vosotros": "ierais",
    "ellos/ellas/ustedes": "ieran"

},

 "imperfect (se)": {

   "yo": "iese",
"tú": "ieses",
"él/ella/usted": "iese",
"nosotros": "iésemos",
"vosotros": "ieseis",
"ellos/ellas/ustedes": "iesen"

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

    "yo": "iere",
    "tú": "ieres",
    "él/ella/usted": "iere",
    "nosotros": "iéremos",
    "vosotros": "iereis",
    "ellos/ellas/ustedes": "ieren"

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

export const ir_endings: VerbEndings = {

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

    "yo": "iera",
    "tú": "ieras",
    "él/ella/usted": "iera",
    "nosotros": "iéramos",
    "vosotros": "ierais",
    "ellos/ellas/ustedes": "ieran"
    },

 "imperfect (se)": {

   "yo": "iese",
"tú": "ieses",
"él/ella/usted": "iese",
"nosotros": "iésemos",
"vosotros": "ieseis",
"ellos/ellas/ustedes": "iesen"

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

     "yo": "iere",
    "tú": "ieres",
    "él/ella/usted": "iere",
    "nosotros": "iéremos",
    "vosotros": "iereis",
    "ellos/ellas/ustedes": "ieren"

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