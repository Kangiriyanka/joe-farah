import {verbs} from "../verbbank"
import { selectStyle } from "../tailwindstyles"

type VerbSelectorProps = {
    
    verb: string
    onVerbSelect: (verb: string) => void
}

export default function VerbSelector({verb, onVerbSelect}: VerbSelectorProps) {





return (
    <div>
    <label 
            className="text-lg text-bold"
            htmlFor="verb-select">
                Choose a Verb:
            </label>
    <select 
    id ="verb-select"
    value = {verb}
    className={selectStyle} onChange = {(e) => onVerbSelect(e.target.value)} >

        {Object.keys(verbs).sort().map(verb => (

            <option key={verb} value={verb}> {verb}</option>

            
        ))}



    </select>
    </div>

)




}