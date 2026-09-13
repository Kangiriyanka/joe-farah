import { moods } from "../verbtoolbox";
import type { Mood } from "../verbtoolbox";
import { selectStyle } from "../tailwindstyles"
type MoodSelectorProps = {
    mood: Mood
    onMoodSelect: (mood: Mood) => void;
};



export default function MoodSelector({ mood, onMoodSelect }: MoodSelectorProps) {

   



    return (
        <div>
            <label 
            className="text-lg text-bold"
            htmlFor="mood-select">
                Choose a Mood:
            </label>

            <select
                className={selectStyle}
                id="mood-select"
                value={mood}
                onChange={ (e)=> onMoodSelect(e.target.value)}
            >
                {moods.map(mood => (
                    <option key={mood} value={mood}>
                        {mood}
                    </option>
                ))}
            </select>
        </div>
    );
}