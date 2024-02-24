import { useState } from 'react'
import './styles/reset.css'
import './styles/App.css'
import SheetLoading from './Components/SheetLoading';
import GoblinTeamMenu from './Components/GoblinTeamMenu';

function App() {
  const [state, setState] = useState({
    sheetLoaded: false,
    sheetError: false,
    sheet: undefined,
    teamNames:['team1','teeeem2'],
    selectedTeam: false,
    teamSheet:undefined,
  });
  let currentMenu = <>Error in switch case</>;
  switch (true) {
    case !state.sheetLoaded:
    case state.sheetError !== false:
      currentMenu = <SheetLoading {...{ state, setState }} />;
      break;

    case !state.selectedTeam:
      currentMenu = <GoblinTeamMenu teams={state.teamNames} setTeam={(selectedTeam)=>setState({...state,selectedTeam})}/>
      break;

    default:
      currentMenu = <>Under construction...</>;
  }

  return(
    <div>
      {currentMenu}
    </div>
  )
}

export default App
