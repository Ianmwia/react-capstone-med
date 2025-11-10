import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import LandingPage from '../pages/LandingPage'
import './App.css'

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/about' element={<About/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
