import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Card from '../components/Card';
import { useContext } from 'react';
import { DoctorContext } from '../../src/context/ContextCreator';

export default function DoctorPage(){
    const {selectedDoctor} = useContext(DoctorContext)

   
    return(
        <>
        <Navbar/>
        <main>
            <Card doctor={selectedDoctor}/>
        </main>
        <Footer/>
        </>
    )
}