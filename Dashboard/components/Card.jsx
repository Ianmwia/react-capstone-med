import { useContext } from 'react';
import { DoctorContext } from '../../src/context/ContextCreator';
import { useNavigate } from 'react-router-dom';

export default function Card({doctor}){
    const {bookings, setBookings} = useContext(DoctorContext)
    const navigate = useNavigate()

    const handleBooking = () => {
        const duplicate = bookings.find((compare)=> compare.id === doctor.id)
        if(!duplicate){
        setBookings([...bookings, doctor])
        }
        navigate('/bookings')
    }

    return(
        <>
        <div className='flex flex-col sm:justify-center md:grid md:grid-cols-2 m-2 mx-auto w-full justify-center'>
        <div className='bg-[#EEEEEE] flex flex-col p-3 border border-gray-200 shadow-sm mb-6 rounded-2xl justify-center m-3'>
            <img className='rounded h-60 w-[80%] mx-auto justify-evenly' src={doctor.image} alt={doctor.name} />
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
            <button className='p-2 w-[80%] bg-green-400 text-white justify-center rounded-2xl transform transition-transform duration-300 hover:scale-105 hover:bg-green-600 cursor-pointer' onClick={handleBooking}>Book A Session</button>
            </div>
        </div>
        <div className='bg-[#EEEEEE] md:w-[80%] mx-auto justify-center flex flex-col p-3 border border-gray-200 shadow-sm mb-6 rounded-2xl leading-7 text-center'>
            <p><span className='font-semibold'>{doctor.name}</span> is a highly skilled and compassionate specialist in {doctor.specialty} currently practicing in {doctor.hospital} . With Over {doctor.work_experience} years of professional experience in the {doctor.practice} sector. 
                {doctor.name} has built a strong reputation for providing exceptional patient care and applying evidence based medical practices.
            </p>
        </div>
        </div>
        </>
    )
}