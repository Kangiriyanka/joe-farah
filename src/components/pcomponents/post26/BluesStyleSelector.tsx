

import {useState} from "preact/hooks"
import type { BarNumber } from "./musicbox";
import { progressions } from "./musicbox";

type BluesStyleSelectorProps = {

    // If you put number, 
    // you'll get a compile error because the only keys accessible are 8 12 and 16
    bars: BarNumber
    styles: string[]
    onStyleChange: (style: string) => void
}



export default function BluesStyleSelector({bars, onStyleChange, styles} : BluesStyleSelectorProps) {

    const [style, setStyle] = useState("standard")
    



    const handleChange = (e) => {
        
        setStyle(e.target.value)
        onStyleChange(e.target.value)
    }

    return (
     <label className="flex flex-col justify-center w-50">
        Select the style: 
        <select value ={style} onChange={(e) => handleChange(e)} name="selectStyle" className="ml-1 border-1 rounded-md p-2">
           
            {styles.map((style: string) => ( 
                

                <option value ={style}>
                    {style}

                </option>
               
            ))
        }
        </select>
    </label>
    )


}
