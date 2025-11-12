import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../src/context/SearchCreator';
import { doctors } from '../../api/doctorsApi';
import Card from '../components/Card';
import Search from '../components/Search';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Dashboard(){
    const {searchTerm} = useContext(SearchContext)
    const navigate = useNavigate()

    const [filterDoctors, setFilterDoctors] = useState(doctors)

    useEffect(()=>{
        const results = doctors.filter(
            (doc)=> 
                doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                doc.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                doc.practice.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilterDoctors(results)
    }, [searchTerm])
    return(
        <>
        <Navbar/>
        <div className='flex justify-between'>
            <Search/>
            <button 
            className='p-2 bg-green-400 text-white font semibold rounded m-2 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:underline' 
            onClick={()=> navigate('/bookings')}>Bookings Tab</button>
        </div>
        <main className='m-2 '>
        <div>
            <div>
                {filterDoctors.map((doctor)=>(
                <Card key={doctor.id} doctor={doctor} />
            ))}
            </div>
        </div>
        </main>
        <Footer/>
        </>
    )


}