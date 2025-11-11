import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import mentalhealth from '../src/assets/mental health.webp'
import healthcareimage from '../src/assets/healthcare-image.webp'

export default function LandingPage(){
    return(
        <>
        <Navbar/>
        <main className='m-3'>
        <div className='flex gap-12 max-w-3xl mx-auto p-10 h-screen mt-5 mb-5'>
            <div className='flex flex-col justify-evenly flex-1'>
              <h2 className='text-[30px] font-semibold flex items-center'>Afya Care, Your trusted partner in mental health support</h2>  
              <button className='border rounded-2xl bg-green-400 text-white p-3 '>Get mental Support </button>
            </div>
            <div className='flex-1 flex flex-col justify-center gap-2 p-2'>
            <img className='object-cover object-center rounded-full h-80 w-80 items-center' src={mentalhealth} alt="mental health image" />
            </div>
        </div>
        <div className='flex gap-12 max-w-3xl mx-auto p-8 h-screen mb-4 rounded-2xl'>
            <div className='flex flex-col justify-evenly flex-1'>
                <h2 className='text-[30px] font-semibold  flex items-center'>We are redefining the way healthcare connects people
                    our platform bring patients and doctors closer together</h2>  
                <button className='border rounded-2xl bg-green-400 text-white p-3'>Access Our Healthcare Services</button>
            </div>
            <div className='flex-1 flex flex-col justify-center gap-2 p-2'>
                <img className='object-cover object-center rounded-full h-80 w-80 items-center' src={healthcareimage} alt='health care image'/>
            </div>
        </div>
        </main>
        <Footer/>
        </>
    )
}