import {useState} from "preact/hooks";


export default function ClassicCardMenu() {

    const currentCategory = useState<string>("All Categories")


    return (
        <div className="w-[100%] p-2 border-b-1">
            <h3>{currentCategory}</h3>


          



        </div>

    )



}

