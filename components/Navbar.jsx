import { Link } from 'react-router-dom'
export default function Navbar(){
    return(
        <>
        <nav className='flex bg-[#18312b] p-2'>
            <div>
                <Link to='/'>
                <h1 className='text-4xl font-bold text-zinc-200'>Afya Care</h1>
                </Link>
            </div>
            <Link to='/about'>About Us</Link>
        </nav>
        </>
    )
}