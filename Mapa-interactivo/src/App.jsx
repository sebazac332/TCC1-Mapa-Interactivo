import { useState } from 'react'
import 'leaflet/dist/leaflet.css';
import CampusMap1 from './components/campusmap1';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>UnB Campus Map</h1>
      <CampusMap1 />
    </>
  )
}

export default App
