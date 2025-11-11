import { Link } from 'react-router-dom'
export default function Navbar(){
    return(
        <>
        <nav className='flex bg-[#18312b] p-2 items-center justify-between'>
            <div>
                <Link to='/'>
                <h1 className='text-4xl font-bold text-zinc-200 cursor-pointer'>Afya Care</h1>
                </Link>
            </div>
            <div className='text-white gap-3 flex space-x-6'>
            <Link to='/about'>About Us</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>SignUp</Link>
            <Link to='/dashboard'>DashBoard</Link>
            </div>
        </nav>
        </>
    )
}