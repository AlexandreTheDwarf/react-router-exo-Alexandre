import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Crew from './pages/Crew/Crew'
import Technology from './pages/Technology/Technology'
import Destination from './pages/Destination/Destination'
import Invitation from './pages/Invitation/Invitation'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/destination/:id' element={<Destination/>}/>
      <Route path='/crew' element={<Crew/>}/>
      <Route path='/technology' element={<Technology/>}/>
      <Route path='/invitation' element={<Invitation/>}/>
    </Routes>
    </>
  )
}

export default App
