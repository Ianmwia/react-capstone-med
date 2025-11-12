import { Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';

export default function PrivateRoute({children}){
    const {user} = useContext(AuthContext)
    return user ? children : <Navigate to='/login' replace/>
}