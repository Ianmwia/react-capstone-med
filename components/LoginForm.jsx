import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../src/slices/authSlice'
import { useNavigate } from 'react-router-dom'

export default function LoginForm(){
    const { user, error} = useSelector((state)=> state.auth)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (e)=>{
        e.preventDefault()
        dispatch(login({email, password}))
    }
    //switch from visitor to dashboard
    useEffect(()=>{
        if(user){
            navigate('/dashboard')
        }
    }, [user, navigate])

    return(
        <>
        <div className='flex items-center justify-center'>
            <div className='bg-white p-7 rounded-xl md:w-96 flex flex-col'>
                <h2 className='text-[20px] font-semibold text-center mb-4'>Login</h2>
                <form onSubmit={handleLogin} className='flex flex-col flex-1 gap-4'>
                    <input className='outline p-2 rounded' type="email" placeholder='email' value={email} autoComplete='email' onChange={(e)=> setEmail(e.target.value)}/>
                    <input className='outline p-2 rounded' type='password' placeholder='password' value={password} autoComplete='current-password' onChange={(e)=> setPassword(e.target.value)}/>
                    <button type='submit' className='bg-green-400 text-white p-2 rounded-lg cursor-pointer font-semibold hover:bg-green-600'>Login</button>
                </form>
                {error && <p className='text-red-500 p-2 text-center'>{error}</p>}
            </div>
        </div>
        </>
    )
}