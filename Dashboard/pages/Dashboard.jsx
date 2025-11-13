import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../src/context/SearchCreator';
import { doctors } from '../../api/doctorsApi';
import Search from '../components/Search';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../src/context/AuthContext';
import { DoctorContext } from '../../src/context/ContextCreator';

export default function Dashboard(){
    const {searchTerm} = useContext(SearchContext)
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const {setSelectedDoctor} = useContext(DoctorContext)

    const [filterDoctors, setFilterDoctors] = useState(doctors)
    const [selectedPractice, setSelectedPractice] = useState(null)
    const practices = ['Healthcare', 'Mental Health']

    useEffect(()=> {
        if(user === null){
            navigate('/login')
        }
    }, [user, navigate])

    useEffect(()=>{
        let results = doctors.filter(
            (doc)=> 
                doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                doc.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                doc.practice.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (selectedPractice){
            results = results.filter(doc => doc.practice === selectedPractice)
        }
        setFilterDoctors(results)
    }, [searchTerm, selectedPractice])

    if (user === undefined){
        return <div>Loading user ...</div>
    }
    return(
        <>
        <Navbar/>
        <div className='flex justify-between items-center'>
            <div className='flex-1 mr-2'>
            <Search/>
            </div>
            <button 
            className='sm:text-2xl p-2 bg-green-400 text-white font semibold rounded m-2 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:underline' 
            onClick={()=> navigate('/bookings')}>Bookings</button>
        </div>
        <main className='m-2 flex flex-col'>
        <div>
            <div>
                <p>Medical Field</p>
                <div className='flex mt-2 gap-2 sm:gap-3'>
                    {practices.map((practice)=>(
                        <button key={practice} onClick={()=>setSelectedPractice(practice)} className='bg-green-400 rounded text-white mr-2 p-1 hover:underline hover:bg-green-600 cursor-pointer'>{practice}</button>
                    ))}
                </div>
            </div>
            <div>
                <p className='mt-4'>Doctors</p>
                <div className='flex flex-col gap-2 md:grid  md:grid-cols-2'>
                    {filterDoctors.map(doc => (
                        <div className='flex gap-4 items-center outline shadow-lg rounded-4xl p-1 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:underline m-2' 
                        key={doc.id}
                        onClick={()=>{
                            setSelectedDoctor(doc);
                            navigate('/doctorpage')}}>
                            <img className='w-12 h-12 object-cover rounded-full' src={doc.image} alt="" />
                            <p>{doc.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </main>
        <Footer/>
        </>
    )


}