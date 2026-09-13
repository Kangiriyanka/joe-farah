type Note = "c" | "c#" | "d" | "d#" | "e" | "f" | "f#" | "g" | "g#" |
"a" | "a#" | "b" 
type ScaleDegree = "I" | "I6" | "I7" | "II" | "III" | "IV" | "V" | "VI" | "VII" 

const ScaleDegreeMap = {

  "I": 0,
  "II": 2,
  "III": 4,
  "IV": 5,
  "V": 7,
}

type BarNumber = 8 | 12 | 16
type Progressions =  {

    8: { standard: ScaleDegree[]};
    12: { standard: ScaleDegree[], quickToFour: ScaleDegree[]}
    16: { standard: ScaleDegree[]}

}
export const Notes: Note[] =  ["c" , "c#" , "d" , "d#" , "e" , "f" , "f#" , "g" , "g#" ,
"a" , "a#" , "b" ]




export function convertDegrees(key: Note, degrees: ScaleDegree[]) {
    
     const notesArray = degrees.map((degree: ScaleDegree) => {

      const offset: number = ScaleDegreeMap[degree]
      return Notes[(Notes.indexOf(key) + offset) % 12]

      
     });

     return notesArray

   
     
}

// as const ensures that nothing can be added to the progressions object.
export const progressions: Progressions = {
  8: { standard: ["I", "I", "IV", "IV", "I", "IV", "I", "V"]},
  12: {
    standard: ["I", "I", "I", "I", "IV", "IV", "I", "I", "V", "IV", "I", "I"],
    quickToFour: ["I", "IV", "I", "I", "IV", "IV", "I", "I", "V", "IV", "I", "I"],
  },
  16: { standard: ["I", "I", "I", "I", "IV", "IV", "I", "I", "V", "IV", "I", "I", "I", "V", "I", "V"] },
} as const;

        
export type {BarNumber, Note, ScaleDegree}


