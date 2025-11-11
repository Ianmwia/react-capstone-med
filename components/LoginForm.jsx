import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../src/slices/authSlice'
import { useNavigate } from 'react-router-dom'

export default function LoginForm(){
    const { user, status} = useSelector((state)=> state.auth)
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
        if(user && status){
            if(status === 'loggedIn'){
                navigate('/dashboard')
            }else if(status === 'loggedOut'){
                navigate('/')
            }
        }
    },[user, status, navigate])

    return(
        <>
        <div>
            <h2>Login</h2>
        </div>
        <form onSubmit={handleLogin}>
            <input type="email" placeholder='email' value={email} autoComplete='email' onChange={(e)=> setEmail(e.target.value)}/>
            <input type='password' placeholder='password' value={password} autoComplete='current-password' onChange={(e)=> setPassword(e.target.value)}/>
            <button type='submit' >Login</button>
        </form>
        </>
    )
}