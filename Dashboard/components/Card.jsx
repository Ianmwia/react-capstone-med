import { useContext } from 'react';
import { DoctorContext } from '../../src/context/ContextCreator';

export default function Card({doctor}){
    const {bookings, setBookings} = useContext(DoctorContext)

    const handleBooking = () => {
        const duplicate = bookings.find((compare)=> compare.id === doctor.id)
        if(!duplicate)
        setBookings([...bookings, doctor])
    }
    return(
        <>
        <div className='max-w-sm p-3 bg-white border border-gray-200 shadow-sm mb-6 rounded-2xl'>
            <img className='rounded' src={doctor.image} alt={doctor.name} />
            <p className='font-semibold p-2'>{doctor.name}</p>
            <hr />
            <p className='p-2 flex justify-between'>
                <span className='text-gray-600'>Specialty</span> 
                <span>{doctor.specialty}</span></p>
            <hr />
                <p className='p-2 flex justify-between'>
                <span className='text-gray-600'>Practice</span>
                <span>{doctor.practice}</span>
                </p>
            <hr />
            <p className='p-2 flex justify-between'>
                <span className='text-gray-600'>Price</span>
                <span>Ksh {doctor.price}</span>
                </p>
            <div className='flex justify-center mt-4'>
            <button className='p-2 w-[80%] bg-green-400 text-white justify-center rounded-2xl transform transition-transform duration-300 hover:scale-105 hover:underline cursor-pointer' onClick={handleBooking}>Book A Session</button>
            </div>
        </div>
        </>
    )
}