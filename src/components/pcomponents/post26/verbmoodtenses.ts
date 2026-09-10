type Tense = "present" | "preterite" | "future" | "imperfect" | "imperfect (se)"| "present perfect" | "past perfect" | "future perfect" | "conditional" | "conditional perfect" |  "normal" | "negative" ;
type Mood = "indicative" | "subjunctive" | "imperative"

// The options for the Mood Dropdown
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
