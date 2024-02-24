import '../styles/GoblinTeamMenu.css'
import { useState } from "react"

export default function GoblinTeamMenu({ teams, setTeam, addTeam }) {
    return (
        <div className='GoblinTeamMenu'>
            {teams.map((teamName) => (
                <button key={'team ' + teamName} onClick={()=>{setTeam(teamName)}}>
                {teamName}
                </button>
            ))}
            <AddTeamSection addTeam/>
        </div>
    )
}

function AddTeamSection({addTeam}){
    const [teamName, setTeamName] = useState('');
    const [active, setActive] = useState(false);
    if(!active)
    return (
        <div>
            <button onClick={()=>setActive(true)}>Add New Team</button>
        </div>
    )
    return (
        <div>
            <input onChange={(e)=>{setTeamName(e.target.value)}}/>
            <button onClick={()=>{addTeam(teamName)}}>submit</button>
        </div>
    )
}