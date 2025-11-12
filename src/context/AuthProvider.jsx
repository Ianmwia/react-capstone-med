import { AuthContext } from './AuthContext';
import { useState, useEffect } from 'react';
import { auth } from '../firebase/firebaseconfig';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser ? {uid: currentUser.uid, email: currentUser.email} : null)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])
    if(loading){
        return <div> Loading ...</div>
    }

    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}