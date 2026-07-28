interface MissionProps {
    id: number,
    title: string,
    workTime: number,
    restTime: number,
    sets: number,
    clr: string,
}

export default function MissionCardV1({id, title, workTime, restTime, sets,clr} : MissionProps) {

        return (

            <div 
            style ={{borderColor: clr}}
            className={`border-1 p-2 m-2 border-2  rounded-md shadow-md`}>
                <div className="flex justify-between">
                <h4> {title} </h4>
                 {/* We'll format the time next */}
                <p className=""> {workTime * sets} seconds</p>
                </div>
                {/* We'll format the time next */}
                 <p className="text-zinc-400"> <i>{sets} sets of {workTime} seconds </i> </p>

            </div>
        )

}