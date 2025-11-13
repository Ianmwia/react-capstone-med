import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../src/context/AuthContext'
import { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { setUser } from '../src/slices/authSlice'
import { auth } from '../src/firebase/firebaseconfig'

export default function Navbar(){
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = async()=>{
        signOut(auth)
        setUser(null)
        navigate('/')
    }

    return(
        <>
        <nav className='flex bg-[#18312b] p-2 items-center justify-between'>
            <div>
                <Link to='/'>
                <h1 className='text-4xl font-bold text-zinc-200 cursor-pointer'>Afya Care</h1>
                </Link>
            </div>
            <div className='md:flex text-white flex items-center space-x-2 md:space-x-2'>
            <Link className='transform transition-transform duration-300 hover:scale-103 cursor-pointer' to='/about'>About Us</Link>
            {!user && (
                <>
                <Link className='transform transition-transform duration-300 hover:scale-103 cursor-pointer' to='/login'>Login</Link>
                <Link className='transform transition-transform duration-300 hover:scale-103 cursor-pointer' to='/signup'>SignUp</Link>
                </>
            )}
            {user && (
                <>
                <Link className='transform transition-transform duration-300 hover:scale-103 cursor-pointer' to='/dashboard'>DashBoard</Link>
                <button className='rounded p-1 bg-green-400 text-white hover:bg-green-600 hover:scale-101 cursor-pointer' onClick={handleLogout}>logout</button>
                </>
            )}
            
            </div>
        </nav>
        </>
    )
}