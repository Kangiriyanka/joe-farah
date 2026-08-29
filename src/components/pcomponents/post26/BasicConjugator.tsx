import { conjugateVerb } from "./verbtoolbox"
import type {Tense} from "./verbtoolbox"
import {useState} from "preact/hooks"
export default function BasicVerbConjugator() {

    const [currentVerb, setCurrentVerb] = useState("amar")
    const [currentTense, setCurrentTense] = useState<Tense>("present")
    const [currentMood, setCurrentMood] = useState<Mood>("indicative")



    return (


    <div>

        
        
            {conjugateVerb(currentVerb, currentTense) }


    </div>
    )

}