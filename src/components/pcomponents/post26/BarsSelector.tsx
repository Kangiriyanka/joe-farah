
import {useState} from "preact/hooks"
import type { BarNumber } from "./musicbox"
import {progressions} from "./musicbox"


type BarsSelectorProps = {
    onBarChange: (bars: BarNumber) => void
  
}



export default function BarsSelector({ onBarChange} : BarsSelectorProps) {

    const [bars, setBars] = useState<BarNumber>(12)

    const handleChange = (e) => {


        setBars(e.target.value)
        onBarChange(e.target.value)
    }

    return (
     <label className="flex flex-col justify-center w-50">
        Select the number of bars: 
        
        <select value ={bars} onChange={(e) => handleChange(e)} name="selectBars" className="ml-1 border-1 rounded-md p-2">
        <option value="8">8</option>
        <option value="12">12</option>
        <option value="16">16</option>
        </select>
    </label>
    )


}

// Mistake: put onSelect instead of onChange in the select tag