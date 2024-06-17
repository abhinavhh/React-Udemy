import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div className='container'>
        <div>
          <label htmlFor="name">Name : </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Phone :</label>
          <input type="number" name="number" />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </div>
    </>
  )
}

export default App

