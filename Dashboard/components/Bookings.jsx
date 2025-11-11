import { useContext } from 'react';
import { DoctorContext } from '../../src/context/ContextCreator';

export default function Bookings(){
    const {selectedDoctor} = useContext(DoctorContext)

    if(!selectedDoctor){
        return <p>No doctor Selected. Please select a doctor</p>
    }
    return(
        <>
        <div>
            <p>{selectedDoctor.name}</p>
            <p>{selectedDoctor.specialty}</p>
            <p>Ksh {selectedDoctor.price}</p>
        </div>
        </>
    )
}