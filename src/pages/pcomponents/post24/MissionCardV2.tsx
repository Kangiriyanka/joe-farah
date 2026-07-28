interface MissionProps {
    id: number,
    title: string,
    workTime: number,
    restTime: number,
    sets: number,
    clr: string,
}

// We can put this into another file, but this'll do
function formatMissionTime(seconds: number, decimals = 2) {
  const remainderSeconds = seconds % 60;
  const minutes = seconds / 60;
  const remainderMinutes = minutes % 60;
  const hours = seconds / 3600;

  // Greater or equal to an hour
  if (hours >= 1) {
  return `${Math.floor(hours)} hour${
    Math.floor(hours) > 1 ? "s" : ""
  }${remainderMinutes > 0 ? ` and ${Math.floor(remainderMinutes)} minutes` : ""}`;
}
  
  // Less than an hour but greater than a minute
  if (minutes >= 1) {
    return `${Math.floor(minutes)} minute${
      Math.floor(minutes) > 1 ? "s" : ""
    }${remainderSeconds > 0 ? ` and ${remainderSeconds} seconds` : ""}`;
  }

  // Seconds remain
  return `${remainderSeconds} second${remainderSeconds !== 1 ? "s" : ""}`;
}

export default function MissionCardV2({id, title, workTime, restTime, sets,clr} : MissionProps) {

        return (

            <div 
            style ={{borderColor: clr}}
            className={`border-1 p-2 m-2 border-2  rounded-md shadow-md`}>
                <div className="flex justify-between">
                <h4> {title} </h4>
                <p className=""> {formatMissionTime(workTime * sets)}</p>
                </div>
                 <p className="text-zinc-400 italic"> {formatMissionTime(workTime)} × {sets} set{sets > 1 ? "s" : ""} </p>
                  

            </div>
        )

}