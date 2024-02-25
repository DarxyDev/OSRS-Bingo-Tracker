import { useState } from 'react'
import './styles/reset.css'
import './styles/App.css'
import SheetLoading from './Components/SheetLoading';
import GoblinTeamMenu from './Components/GoblinTeamMenu';

function App() {
  const [state, setState] = useState({
    sheetLoaded: false,
    sheetManager: undefined,
    teamNames: ['team1', 'teeeem2'],
    selectedTeam: false,
    teamSheet: undefined,
  });
  const [loaded, setLoaded] = useState(false);
  let currentMenu = <>Error in switch case</>;
  switch (true) {
    case !loaded:
      currentMenu = <SheetLoading
        state
        setSheetManager={(sheetManager) => { 
          setState({ ...state, sheetManager}); 
          setLoaded(true);
        }}
      />;
      break;
    case !state.selectedTeam:
      currentMenu = <GoblinTeamMenu
        teams={state.teamNames}
        setTeam={(selectedTeam) => setState({ ...state, selectedTeam })}
        addTeam={(teamName) => { console.log('not implemented') }

        } />
      break;
    default:
      currentMenu = <>Under construction...</>;
  }

  return (
    <div>
      {currentMenu}
    </div>
  )
}

export default App
