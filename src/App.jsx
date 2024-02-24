import { useState } from 'react'
import './styles/reset.css'
import './styles/App.css'
import SheetLoading from './Components/SheetLoading';

function App() {
  const [state, setState] = useState({
    sheetLoaded: false,
    sheetError: false,
    sheet: undefined,
  });

  if (!state.sheetLoaded || state.sheetError)
    return (
      <>
        <SheetLoading {...{ state, setState }} />
      </>
    )
  else return (
    <>
      Under construction..
    </>
  )
}

export default App
