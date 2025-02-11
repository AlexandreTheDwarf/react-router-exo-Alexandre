import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Crew from './pages/Crew/Crew'
import Technology from './pages/Technology/Technology'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/crew' element={<Crew/>}/>
      <Route path='/technology' element={<Technology/>}/>
    </Routes>
    </>
  )
}

export default App
