

import {useState} from "preact/hooks"
import  { Notes} from "./musicbox"
import type { Note} from "./musicbox"

type KeySelectorProps = {
    onKeyChange: (barKey: Note) => void
}



export default function BluesKeySelector({onKeyChange} : KeySelectorProps) {

    const [barKey, setBarKey] = useState<Note>("c")
    

    const handleChange = (e) => {

        setBarKey(e.target.value)
        onKeyChange(e.target.value)
    }

    return (
     <label className="flex flex-col justify-center w-50">
        Select the Key: 
        <select value ={barKey} onChange={(e) => handleChange(e)} name="selectKey" className="ml-1 border-1 rounded-md p-2">
            { Notes.map( note => (

                <option> {note}</option>
            ))

            }
        </select>
    </label>
    )


}