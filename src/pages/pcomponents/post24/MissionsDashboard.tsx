
import MissionCardV1 from "./MissionCardV1"
import MissionCardV2 from "./MissionCardV2"
export default function MissionsDashboard() {

 const missions = [
  {
    id: 1,
    title: "Quick Coding",
    workTime: 600,
    restTime: 60,
    sets: 2,
    clr: "#52c22d",
  },
  {
    id: 2,
    title: "Stretching",
    workTime: 30,
    restTime: 15,
    sets: 3,
    clr: "#2a5ece",
  },
  {
    id: 3,
    title: "Music Session",
    workTime: 1200,
    restTime: 300,
    sets: 3,
    clr: "#c41c13",
  },
];


    return (

      

        <div>
      
       <h3> Missions</h3>
        <div className="mission-container grid md:grid-cols-2 sm:grid-cols-1">
            {missions.map((mission) => {

                return (

            

                      <MissionCardV2
                    id = {mission.id}
                    title = {mission.title}
                    workTime = {mission.workTime}
                    restTime = {mission.restTime}
                    sets = {mission.sets}
                    clr = {mission.clr}
                    />
            );
        })}

        </div>
        </div>
    )
}