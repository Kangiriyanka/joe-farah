import { conjugateVerb, vanillaConjugateVerb } from "./verbtoolbox"
import type { Tense, Mood } from "./verbtoolbox"
import { irregularVerbTips, verbTips } from "./verbtips"
import VerbSelector from "./Selectors/VerbSelector"
import TenseSelector from "./Selectors/TenseSelector"
import MoodSelector from "./Selectors/MoodSelector"
import { useState } from "preact/hooks"
import { moodTenses } from "./verbmoodtenses"

export default function BasicVerbConjugator() {
    const [currentVerb, setCurrentVerb] = useState("ver")
    const [currentMood, setCurrentMood] = useState<Mood>("subjunctive")
    const [currentTense, setCurrentTense] = useState<Tense>("present")
    const [showBasicTip, setShowBasicTip] = useState<boolean>(false)
    const [showOriginalConjugation, setShowOriginalConjugation] = useState<boolean>(true)




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

  <div className="w-[100%] text-right ">
{verbTips?.[currentMood]?.[currentTense] !== "" && (
   
        <button className="  border-1 text-black cursor-pointer bg-gray-100 mr-2 rounded-md shadow-md border-md p-4" onClick = {() => setShowBasicTip(prev => !prev)}> {showBasicTip ? "Hide Basic Tip" : "Show Basic Tip" }</button>
   
  
    )}

    {irregularVerbTips?.[currentVerb]?.[currentMood]?.[currentTense] !== "" && (
   
        <button className="  text-black border-1 cursor-pointer bg-gray-100 rounded-md shadow-md border-md p-4" onClick = {() => setShowOriginalConjugation(prev => !prev)}> {showOriginalConjugation ? "Hide Unmodified" : "Show Unmodified" }</button>
   
  
    )}



    </div>

        <div className ="w-[100%] border-1 border-dotted my-2"/>

            {/* Verb, Mood, Tense Pickers */}
            <div className="grid md:grid-cols-3 gap-2">
                <VerbSelector verb = {currentVerb} onVerbSelect={handleVerbChange} />
                <MoodSelector mood= {currentMood} onMoodSelect={handleMoodChange} />
                <TenseSelector tense = {currentTense} availableTenses= {moodTenses[currentMood]} onTenseSelect={handleTenseChange} />
            </div>

          
     
            <div className="w-[100%] border-dotted border-1 my-2"></div>

          
          {/* Conjugated Table with the exceptions accounted for */}


          <div className="flex gap-15">
            <ul className=" ">
               {conjugateVerb(currentVerb, currentTense, currentMood).map(
    (conjugatedVerb) =>

        conjugatedVerb.length === 3 ? (

            <li className="list-none text-2xl!">
                <span>{conjugatedVerb[0]}</span>
                <span className={conjugatedVerb[2] == true ? "text-red-500" : ""}>{conjugatedVerb[1]}</span>
                <span>{conjugatedVerb[2]}</span>
            </li>

        ) : conjugatedVerb.length === 4 ? (

            <li className="list-none text-2xl!">
                <span>{conjugatedVerb[0]}</span>
               
                <span className={conjugatedVerb[3] == "highly-i" ? "text-[#3384ed] " : ""}>
                    {conjugatedVerb[1]} 
                </span>
                <span className={conjugatedVerb[3] == "highly-i" ? "text-[#3384ed] " : conjugatedVerb[3] == true ? "text-[#ea6565]" : ""}>
                    {conjugatedVerb[2]}  
                </span>
            </li>

        ) : (

            <li className="list-none text-2xl!">
                <span>{conjugatedVerb[0]}</span>
                <span>{conjugatedVerb[1]}</span>
                <span className="text-[#308f4d]">
                    {conjugatedVerb[2]}
                </span>
                <span className={conjugatedVerb[2] === "" ? "underline decoration-[#308f4d]" : ""}>
                    {conjugatedVerb[3]}
                </span>
                <span className={conjugatedVerb[5] === true ? "text-[#ea6565]" : ""}>
                    {conjugatedVerb[4]}
                </span>
            </li>

        )
)}
               
                    

                
           
            </ul>


            {showOriginalConjugation && (




            
            <ul>

                           {vanillaConjugateVerb(currentVerb, currentTense, currentMood).map(
    (conjugatedVerb) =>

       
            <li className=" text-[#D878F0] list-none text-2xl!">
                <span>{conjugatedVerb[0]}</span>
                <span className="">{conjugatedVerb[1]}</span>
                <span>{conjugatedVerb[2]}</span>
                
            </li>
                
        



        )}

        </ul>
            )}

            </div>

    


           {verbTips[currentMood][currentTense] !== ""  && (


                <div className="flex gap-3 justify-center text-center">

           
            {showBasicTip && (
              <div className="verb-tips hidden md:block text-xl  w-[75%] m-auto my-6  bg-gray-100 border-1 shadow-md top-[50%] rounded-md right-0 p-2">

               
               
                <div className="flex flex-col items-center">

                    
                    <span className="font-bold underline text-black">Basic Tip</span>
                     <span className= "text-black w-full " >{verbTips[currentMood][currentTense]}</span>

                </div>
             </div>
           ) }
              
                        {irregularVerbTips[currentVerb]?.[currentMood]?.[currentTense] != null && (
                <div className="verb-tips   hidden md:block text-xl w-[75%] m-auto my-6 bg-gray-100 border-1 shadow-md top-[50%] rounded-md right-0 p-2">

                    <div className="flex flex-col items-center">

                        <span className="font-bold underline text-red-800">
                            Irregularity Alert
                        </span>

                        <span className="text-black">
                            {irregularVerbTips[currentVerb][currentMood][currentTense]}
                        </span>

                    </div>

                </div>
)} 

                 </div>

                )}

           
        </div>
    )
}