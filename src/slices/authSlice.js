//1. install and import redux
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseconfig';

//2.thunks
//register
export const signupUser = createAsyncThunk(
    'auth/signup',
    async({email, password}, {rejectWithValue}) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            await setDoc(doc(db, 'users', user.uid), {email})
            return user;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
//login
export const login = createAsyncThunk(
    'auth/login',
    async({email, password}, { rejectWithValue}) => {
        try {
            const userLogin = await signInWithEmailAndPassword(auth, email, password)
            const user = userLogin.user
            const docSnapshot = await getDoc(doc(db, 'users', user.uid))
            if(!docSnapshot.exists()){
                await signOut(auth)
                return rejectWithValue('user does not exist')
            }
            return user
        } catch (error) {
            if( error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password'){
                return rejectWithValue('Incorrect email or password')
            }
            return rejectWithValue(error.message)
        }
    }
)
//logout
export const logout = createAsyncThunk(
    'auth/logout',
    async (_, {rejectWithValue}) => {
        try {
            await signOut(auth)
            return null
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }

)

//3.slices
const initialState = {
    user: null,
    status: 'visitor',
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action)=>{
            state.user = action.payload
            state.status = action.payload ? 'loggedIn' : 'loggedOut'
        },
        setVisitor: (state) =>{
            state.user = null
            state.status ='visitor'
        },
        logoutUser: (state) =>{
            state.user = null
            state.status = 'loggedOut'
        }
    }, 
    extraReducers: (builder) => {
        builder
        .addCase(signupUser.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        .addCase(signupUser.fulfilled, (state,)=>{
            state.loading = false
            state.error = null
            state.status = 'loggedIn'
        })
        .addCase(signupUser.rejected, (state)=>{
            state.loading = false
            state.error = null
            state.status = 'loggedOut'
        })
        .addCase(login.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        .addCase(login.fulfilled, (state,)=>{
            state.loading = false
            state.error = null
            state.status = 'loggedIn'
        })
        .addCase(login.rejected, (state)=>{
            state.loading = false
            state.error = null
            state.status = 'loggedOut'
        })
        .addCase(logout.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        .addCase(logout.fulfilled, (state,)=>{
            state.loading = false
            state.error = null
            state.status = 'loggedOut'
        })
        .addCase(logout.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
            state.status = 'loggedIn'
        })
    }
})


//4.export
export const {setUser, setVisitor, logoutUser} = authSlice.actions
export default authSlice.reducer

//5.update store