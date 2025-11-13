import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import mentalhealth from '../src/assets/mental health.webp'
import healthcareimage from '../src/assets/healthcare-image.webp'
import { useNavigate } from 'react-router-dom'

export default function LandingPage(){
    const navigate = useNavigate()
    
    return(
        <>
        <Navbar/>
        <main className='m-3 flex-1'>
        <div className='flex flex-col p-2 sm:flex-row gap-6 sm:gap-12 max-w-3xl mx-auto md:p-10 h-auto md:h-[80%] mt-5 mb-5 bg-[#EEEEEE] rounded-2xl'>
            <div className='flex-1 flex flex-col justify-center gap-2 p-2'>
            <img className='object-cover object-center rounded-full h-48 w-48 md:h-80 md:w-80 items-center' src={mentalhealth} alt="mental health image" />
            </div>
            <div className='flex flex-col justify-evenly flex-1'>
              <h2 className='md:text-[38px] text-2xl sm:text-3xl font-semibold flex items-center'>Afya Care, Your trusted partner in mental health support</h2>  
              <button className='p-2 bg-green-400 text-white font semibold rounded-2xl m-2 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-green-600'  onClick={()=>navigate('/dashboard')}>Get mental Support </button>
            </div>
            
        </div>
        <div className='flex flex-col p-2 sm:flex-row gap-6 sm:gap-12 max-w-3xl mx-auto md:p-10 h-auto md:h-[80%] mt-5 mb-5 bg-[#EEEEEE] rounded-2xl'>
            <div className='flex-1 flex flex-col justify-center gap-2 p-2'>
            <img className='object-cover object-center rounded-full h-48 w-48 md:h-80 md:w-80 items-center' src={healthcareimage} alt="mental health image" />
            </div>
            <div className='flex flex-col justify-evenly flex-1'>
              <h2 className='md:text-[38px] text-2xl sm:text-3xl font-semibold flex items-center'>We are redefining the way healthcare connects people
              </h2>  
              <button className='p-2 bg-green-400 text-white font semibold rounded-2xl m-2 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-green-600'  onClick={()=>navigate('/dashboard')}>Access Our Healthcare Services</button>
            </div>
            
        </div>
        <div className='md:h-70 items-center'>
            <p className='sm:text-[40px] font-bold text-green-500 md:mb-4 md:text-center'>What We Offer - General and Mental Health support</p>
            <div className='items-center'>
                <p className='md:mb-2 md:text-xl'>Health is more than just the absence of disease. We support : </p>
                <p className='font-semibold leading-7 md:mb-2'> "Physical Health: Routine Check-ups specialist referrals,
                     women's health, men's health and more"</p>
                <p className='font-semibold leading-7'>"Mental and Emotional Health: Counselling for stress, anxiety, 
                    depression and life transitions. We Prioritize your mental wellness equally with physical health"

                </p>
            </div>
        </div>
        </main>
        <Footer/>
        </>
    )
}