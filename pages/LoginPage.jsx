import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate()
    return(
        <>
        <div className='flex flex-col items-center justify-center min-h-screen px-4 gap-8 bg-gray-300'>
            <LoginForm/>
        <p className='text-black'>Don't have an Account? <span onClick={()=> navigate('/signup')} className='text-green-500 font-semibold cursor-pointer'>Sign Up</span></p>
        </div>
        </>
    )
}