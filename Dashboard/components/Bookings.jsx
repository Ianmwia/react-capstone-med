import { useContext} from 'react';
import { DoctorContext } from '../../src/context/ContextCreator';
import Navbar from '../../components/Navbar';

export default function Bookings(){
    const {bookings, setBookings} = useContext(DoctorContext)
    
    const handleRemove = (removeDoctor) => {
        setBookings(bookings.filter((doctor) => doctor.id !== removeDoctor.id))
        
    }
    if(bookings.length === 0){
        return <p className='text-red-500'>No doctor Selected. Please select a doctor</p>
    }
    

    return(
        <>
        <Navbar/>
        <h2 className='sm:text-2xl md:text-4xl font-bold text-green-800'>Booked Sessions</h2>
        <div>
            {bookings.map((doctor)=>(
                <div key={doctor.id}>
                    <div className='rounded border p-1 px-2 m-4'>
                    <p className='font-semibold text-green-400 mb-2'>Congratulations</p>
                    <p className='leading-7'>You have Booked A session With <span className='font-semibold text-green-400'>{doctor.name}</span> on  {doctor.specialty} appointment
                    for further details and notice you can reach {doctor.name} on our firm provided
                    mobile contact <span className='font-semibold'>{doctor.contact}</span></p>
                    <div className='flex justify-center mt-4'>
                        <button className='p-2 w-[80%] bg-green-400 text-white justify-center rounded-2xl transform transition-transform duration-300 hover:scale-105 hover:bg-green-600 cursor-pointer' onClick={()=> handleRemove(doctor)}>Remove Session</button>
                    </div>
                    </div>
                </div>
            ))}

        </div>
        </>
    )
}