
import BarsSelector from "./BarsSelector";
import BluesStyleSelector from "./BluesStyleSelector";
import BluesKeySelector from "./KeySelector";
import { progressions, convertDegrees} from "./musicbox";
import type { BarNumber, Note, ScaleDegree} from "./musicbox"
import BluesBar from "./BluesBar";
import {useState} from "preact/hooks"


export default function BluesForm() {


    const [bars, setBars] = useState<BarNumber>(12)
    const [bluesStyle, setBluesStyle] = useState<string>("standard")
    const [filteredStyles, setFilteredStyles] = useState<string[]>(Object.keys(progressions[12]))
    const [barKey, setBarKey] = useState<Note>("c")
    // const [degrees, setDegrees] = useState<ScaleDegree[]>(progressions[bars]["standard"])
    const [notes, setNotes] = useState<Note[]>(convertDegrees(barKey, progressions[bars]["standard"] ))

    const handleBarChange = (bars: BarNumber) => {
        setBars(bars)
        setFilteredStyles(Object.keys(progressions[bars]))
 

        if (progressions[bars][bluesStyle] != null) {
              setNotes(convertDegrees(barKey, progressions[bars][bluesStyle]))
              return;
        }
        

        setBluesStyle("standard")
        setNotes(convertDegrees(barKey, progressions[bars]["standard"]))
     
        


        
        

    }


    const handleStyleChange = (style: string) => {
        setBluesStyle(style)

         if (progressions[bars][style] != null) { 
          setBluesStyle(style)
          setNotes(convertDegrees(barKey, progressions[bars][style]))
        }

        else {

            setBluesStyle("standard")

        }
        
      
    }

 
    

     // One mistake I did was pass the state variable to the new notes, but I should have just passed
     // the argument
     const handleBarKey = (note: Note) => {

        
        setBarKey(note)
        setNotes(convertDegrees(note, progressions[bars][bluesStyle]))
       

     
    }


    return (
    <div >

     

     <div>
      <h2 className="text-left"> Options</h2>
     <div className= "flex gap-1 justify-center text-center blues-options">

    
     <BluesKeySelector onKeyChange =  {handleBarKey}/>
     <BarsSelector style = {bluesStyle} onBarChange = {handleBarChange}/>
     <BluesStyleSelector bars = {bars} styles = {filteredStyles} onStyleChange = {handleStyleChange}/>

     </div>
     </div>
     
     <div className= "grid grid-cols-4 border-1 w-[75%] mx-auto my-2 gap-2  ">
     {notes.map((note) => (

        <BluesBar note= {note}/>
     ))
    }
    </div>
    
     



            
    </div>

    )


}