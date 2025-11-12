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
            <div className='md:flex text-white flex md:space-x-2'>
            <Link to='/about'>About Us</Link>
            {!user && (
                <>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>SignUp</Link>
                </>
            )}
            {user && (
                <>
                <Link to='/dashboard'>DashBoard</Link>
                <button className='rounded p-1.5 bg-green-400 text-white hover:underline cursor-pointer' onClick={handleLogout}>logout</button>
                </>
            )}
            
            </div>
        </nav>
        </>
    )
}