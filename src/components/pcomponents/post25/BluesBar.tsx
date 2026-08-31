import type { Note } from "./musicbox"

type BluesBarProps = {
    note: Note
}

const noteColorMap = {
    "c": "#46336B",    // Deep Purple (Rotas)
    "c#": "#37ba72",   // Burnt Red / Orange (Grafitis)
    "d": "#F5DE14",    // Bright Yellow (Yellow Tang)
    "d#": "#4C9923",   // Forest Green (Forest Envy)
    "e": "#265475",    // Dark Blue (Eye of the Storm)
    "f": "#a86075",    // Deep Purple (Loop)
    "f#": "#1cb2b8",   // Burnt Red / Orange (Loop)
    "g": "#F5DE14",    // Bright Yellow (Loop)
    "g#": "#4C9923",   // Forest Green (Loop)
    "a": "#265475",    // Dark Blue (Loop)
    "a#": "#46336B",   // Deep Purple (Loop)
    "b": "#BA4B37"     // Burnt Red / Orange (Loop)
};

export default function BluesBar({note} : BluesBarProps) {


    return (
    <div 
    style = {{backgroundColor: `${noteColorMap[note]}`}}
    className="border-2 text-white font-semibold rounded-md w-[100%] h-[100%] p-2 ">

        {note.toUpperCase()}


        <div className="absolute top-0 right-0">

            


        </div>
        



    </div>

    )
}