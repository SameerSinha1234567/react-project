import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherApp from "./WeatherApp.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>WEATHER APP</h1>
     <WeatherApp/>
    </>
  )
}

export default App
