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
    return <SheetLoading {...{ state, setState }} />

  return (
    <>
      Under construction..
      <div className="icon-credit"><img src="./goblin64x64.png" height="16" width="16" /><a target="_blank" href="https://icons8.com/icon/AjpYhrt5HtC7/goblin">Goblin</a><p>icon</p><p>by</p><a target="_blank" href="https://icons8.com">Icons8</a></div>
    </>
  )
}

export default App
