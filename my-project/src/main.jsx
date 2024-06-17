import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main from './State.jsx'
import CondRend from './ConditionalRender.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Main/> */}
    <CondRend/>
  </React.StrictMode>,
)
