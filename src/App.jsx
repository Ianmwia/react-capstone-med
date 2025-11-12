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
import { AuthProvider } from './context/AuthProvider'
import PrivateRoute from './PrivateRoute'

function App() {

  return (
    <AuthProvider>
    <DoctorProvider>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/dashboard' element={
              <PrivateRoute>
              <Dashboard/>
              </PrivateRoute>
              } />
            <Route path='/bookings' element={
              <PrivateRoute>
                <Bookings/>
              </PrivateRoute> }/>
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </DoctorProvider>
    </AuthProvider>
  )
}

export default App
