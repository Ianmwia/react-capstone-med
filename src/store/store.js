//5.configure store - the source of all truth
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice'

export default configureStore({
    reducer: {
        auth: authReducer,
    }
})

//6.import store and provider in main, wrap app in provider