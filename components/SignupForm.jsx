import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signupUser } from '../src/slices/authSlice'
import { useNavigate } from 'react-router-dom'

export default function SignupForm(){
    const { user, status} = useSelector((state)=> state.auth)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSignup = (e)=>{
        e.preventDefault()
        dispatch(signupUser({email, password}))
    }
    //switch from visitor to dashboard
    useEffect(()=>{
        if(user && status){
            if(status === 'loggedIn'){
                navigate('/dashboard')
            }
        }
    },[user, status, navigate])

    return(
        <div className='outline rounded'>
        <div>
            <h2>Sign Up</h2>
        </div>
        <form onSubmit={handleSignup} className=''>
            <input type="email" placeholder='email' value={email} autoComplete='email' onChange={(e)=> setEmail(e.target.value)}/>
            <input type='password' placeholder='password' value={password} autoComplete='current-password' onChange={(e)=> setPassword(e.target.value)}/>
            <button type='submit' >Sign Up</button>
        </form>
        </div>
    )
}