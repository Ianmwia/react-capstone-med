import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import LandingPage from '../pages/LandingPage'
import './App.css'
import Login from '../pages/LoginPage'
import Signup from '../pages/SignupPage'
import { DoctorProvider } from './context/DoctorContext'
import { SearchProvider } from './context/SearchContext'
import Dashboard from '../Dashboard/pages/Dashboard'
import Bookings from '../Dashboard/components/Bookings'

function App() {

  return (
    <DoctorProvider>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/bookings' element={<Bookings/>} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </DoctorProvider>
  )
}

export default App
