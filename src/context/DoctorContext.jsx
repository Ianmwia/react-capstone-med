import { useState } from 'react';
import { DoctorContext } from './ContextCreator';

export const DoctorProvider = ({children}) => {
    const [selectedDoctor, setSelectedDoctor] = useState(null)

    return(
        <DoctorContext.Provider value={{selectedDoctor, setSelectedDoctor}}>
            {children}
        </DoctorContext.Provider>
    )
}