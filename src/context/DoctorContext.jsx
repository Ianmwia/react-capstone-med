import { useState } from 'react';
import { DoctorContext } from './ContextCreator';

export const DoctorProvider = ({children}) => {
    const [bookings, setBookings] = useState([])
    const [selectedDoctor, setSelectedDoctor] = useState(null)

    return(
        <DoctorContext.Provider value={{bookings, setBookings, selectedDoctor, setSelectedDoctor}}>
            {children}
        </DoctorContext.Provider>
    )
}