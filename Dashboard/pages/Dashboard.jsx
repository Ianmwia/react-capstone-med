import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../src/context/SearchCreator';
import { doctors } from '../../api/doctorsApi';
import Card from '../components/Card';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Dashboard(){
    const {searchTerm, setSearchTerm} = useContext(SearchContext)

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
        <main className='m-2 '>
        <div className='mb-2'>
            <input className='outline p-2' type="text" placeholder='Search Doctors by name, specialty or practice' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
        </div>
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