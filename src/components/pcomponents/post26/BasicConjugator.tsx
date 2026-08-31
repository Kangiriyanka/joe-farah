import { conjugateVerb } from "./verbtoolbox"
import type { Tense, Mood } from "./verbtoolbox"
import { verbTips } from "./verbtoolbox"
import VerbSelector from "./VerbSelector"
import TenseSelector from "./TenseSelector"
import MoodSelector from "./MoodSelector"
import { useState } from "preact/hooks"
import { moodTenses } from "./verbtoolbox"

export default function BasicVerbConjugator() {
    const [currentVerb, setCurrentVerb] = useState("amar")
    const [currentTense, setCurrentTense] = useState<Tense>("present")
    const [currentMood, setCurrentMood] = useState<Mood>("indicative")

    const handleVerbChange = (verb: string) => {
        setCurrentVerb(verb)
    }

    const handleTenseChange = (tense: Tense) => {
       setCurrentTense(tense)
    }

    const handleMoodChange = (mood: Mood) => {
       
   
        setCurrentMood(mood)
    
        // Change the tense to a default one if it doesn't exist (or forgotten...) in the selected mood
        if (!moodTenses[mood].includes(currentTense)) {
        setCurrentTense(moodTenses[mood][0])
        }
    }

  

    return (
        <div className="relative">
            <div className="grid md:grid-cols-3 gap-2">
                <VerbSelector verb = {currentVerb} onVerbSelect={handleVerbChange} />
                <MoodSelector mood= {currentMood} onMoodSelect={handleMoodChange} />
                <TenseSelector tense = {currentTense} availableTenses= {moodTenses[currentMood]} onTenseSelect={handleTenseChange} />
            </div>

          

            <div className="w-[100%] border-dotted border-1 my-2"></div>

            <ul>
                {conjugateVerb(currentVerb, currentTense,currentMood).map(
                (conjugatedVerb) => (
                    <li className="list-none text-2xl!">
                        <span>{conjugatedVerb[0]}</span>
                        <span>{conjugatedVerb[1]}</span>
                        <span className="text-[#ea6565]">{conjugatedVerb[2]}</span>
                    </li>
                ))
               }
           
            </ul>


           {verbTips[currentMood][currentTense] !== ""  && (
              <div className="verb-tips hidden md:block text-xl  w-[75%] m-auto my-6  bg-gray-100 border-1 shadow-md top-[50%] rounded-md right-0 p-2">

               
                <div className="flex flex-col items-center">

                    
                    <span className="font- underline">Tip</span>
                     <span>{verbTips[currentMood][currentTense]}</span>
                </div>
                 </div>

                )}

           
        </div>
    )
}