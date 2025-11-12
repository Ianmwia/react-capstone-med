import { useState } from 'react';
import { DoctorContext } from './ContextCreator';

export const DoctorProvider = ({children}) => {
    const [bookings, setBookings] = useState([])

    return(
        <DoctorContext.Provider value={{bookings, setBookings}}>
            {children}
        </DoctorContext.Provider>
    )
}