import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main from './State.jsx'
import CondRend from './ConditionalRender.jsx'
import Load from './forLoading.jsx'
import Clicks from './ClickEvent.jsx'
import Counter from './hooks/CounterApp.jsx'
import Counter2 from './hooks/useeffect.jsx'
import News from './newsApp/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Main/> */}
    {/* <CondRend/> */}
    {/* <Load/> */}
    {/* <Clicks /> */}
    {/* <Counter /> */}
    {/* <Counter2 /> */}
    <News />
  </React.StrictMode>,
)
