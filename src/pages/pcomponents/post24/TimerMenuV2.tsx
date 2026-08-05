import {formatTimerString} from "./timehelpers"
import {useState, useEffect} from "preact/hooks"

interface TimerProps {
    title: string
    workTime: number
    restTime: number
    prepTime: number
    sets: number
    clr: string
}

type TimerPhase = "Starting in..." | "Working" | "Resting" | "Finished"

export default function TimerMenuV2({sets, prepTime, restTime, workTime, clr}: TimerProps) {

    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    // prep, work, rest
    const [currentPhase, setCurrentPhase] = useState<TimerPhase>("Starting in...")
    const [remainingSets, setRemainingSets] = useState<number>(sets)
    const [timeLeft, setTimeLeft] = useState(prepTime ? prepTime : workTime)

    const handlePlay = (e: MouseEvent) => {
        e.stopPropagation()
        setIsPlaying(prev => !prev)

    }

    const resetTimer = (e: MouseEvent) => {
        e.stopPropagation()
        setCurrentPhase("Starting in...")
        setTimeLeft(prepTime ? prepTime : workTime)
        setIsPlaying(false)
    }
    // useEffect for handling countdowns
    useEffect(() => {
        // Guard for the initial effect
        if (!isPlaying) return;

     const timer = setInterval(() => {
        // Guard for the initial effect


        setTimeLeft(prev => prev -1)
     }, 1000)

     return () => clearInterval(timer)


    }, [isPlaying])

    // useEffect for handling phase changes.
    useEffect(() => {

        if (remainingSets == 0) {
            setCurrentPhase("Starting in...")
            setTimeLeft(prepTime ? prepTime : workTime)
            setIsPlaying(false)
            setRemainingSets(sets)
        }

        if (remainingSets == 1 && currentPhase == "Working") {
            
            setCurrentPhase("Starting in...")
            setTimeLeft(prepTime ? prepTime : workTime)
            setIsPlaying(false)
            setRemainingSets(sets)
            setCurrentPhase
        }
        
        if (timeLeft !=0 ) return;
        

        switch (currentPhase) {
            
            case "Starting in...":
                setCurrentPhase("Working")
                setTimeLeft(workTime)
                break

    

            case "Working":
                setCurrentPhase("Resting")
                setTimeLeft(restTime)
                setRemainingSets(prev => prev -1)
                break;

            case "Resting": 
                setCurrentPhase("Working")
                setTimeLeft(workTime)
              
                break;

        }

        }, [timeLeft])



    return (
        <div className="w-[100%] h-[100%] ">

            {/* Title */}
            <div  className="flex flex-col rounded-md p-2" style ={{border: `0.5px dashed ${clr}`}}>
            <span className="phase-title text-center text-sm bold ">  {currentPhase} </span>
            
            {/* Timer  */}
            <span className="time-displayer text-center">
                { formatTimerString(timeLeft)}
            </span>

            <div className="timer-btns-box">

                
                <button
                onClick = {(e) => resetTimer(e)}
                >

                    <img
                        className="p-1"
                        width={45}
                        height={50}
                        src="/images/replay.svg"
                        alt="Replay"
                    />
                </button>

               
                    <button
                     onClick= {(e) => handlePlay(e)}>
                        {isPlaying ? (
                        <img
                            className="p-1"
                            width={45}
                            height={50}
                            src="/images/pause.svg"
                            alt="Pause"
                        />
                        ) :  <img
                            className="p-1"
                            width={45}
                            height={50}
                            src="/images/play.svg"
                            alt="Play"
                        />}
                    </button>
             
                 
              

            </div>

            <div className="remaining-sets">
                <i>Remaining sets: {remainingSets}</i>
            </div>
            </div>

        </div>
    )
}