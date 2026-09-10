import  {tenses} from "./verbtoolbox"
import type { Tense } from "./verbtoolbox"
import { selectStyle } from "./tailwindstyles"

type TenseSelectorProps = {
    tense: string
    availableTenses: Tense[]
    onTenseSelect: (tense: Tense) => void
}

export default function VerbSelector({tense, availableTenses, onTenseSelect}: TenseSelectorProps) {



return (
     <div>
     <label 
            className="text-lg text-bold"
            htmlFor="tense-select">
                Choose a Tense:
            </label>
    <select className={selectStyle} id="tense-select" value={tense} onChange = {(e) => onTenseSelect(e.target.value)} >

        {availableTenses.map(tense => (

            <option key={tense} value={tense}>{tense}</option>

            
        ))}



    </select>
    </div>
    

)




}