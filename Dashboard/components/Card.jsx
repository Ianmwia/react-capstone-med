import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DoctorContext } from '../../src/context/ContextCreator';

export default function Card({doctor}){
    const {setSelectedDoctor} = useContext(DoctorContext)
    const navigate = useNavigate()

    const handleBooking = () => {
        setSelectedDoctor(doctor)
        navigate('/bookings')
    }
    return(
        <>
        <div>
            <img src={doctor.image} alt={doctor.name} />
            <p>{doctor.name}</p>
            <p>{doctor.specialty}</p>
            <p>Ksh{doctor.price}</p>
            <button className='p-2 bg-green-400 text-white' onClick={handleBooking}></button>
        </div>
        </>
    )
}