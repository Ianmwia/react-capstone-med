import { useContext } from 'react';
import { DoctorContext } from '../../src/context/ContextCreator';
import Navbar from '../../components/Navbar';

export default function Bookings(){
    const {bookings, setBookings} = useContext(DoctorContext)

    if(!bookings.length === 0){
        return <p>No doctor Selected. Please select a doctor</p>
    }
     const handleRemove = (e) => {
        e.preventDefault()
        setBookings(bookings.filter(doctor => doctor.id !== doctor.id))
        
    }

    return(
        <>
        <Navbar/>
        <h2>My Bookings</h2>
        <div>
            {bookings.map((doctor)=>(
                <div key={doctor.id}>
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
                        <button className='p-2 w-[80%] bg-green-400 text-white justify-center rounded-2xl transform transition-transform duration-300 hover:scale-105 hover:underline cursor-pointer' onClick={handleRemove}>Remove Session</button>
                    </div>
                </div>
            ))}

        </div>
        </>
    )
}