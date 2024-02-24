import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import IconCredit from './Components/IconCredit.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <IconCredit />
  </React.StrictMode>,
)
