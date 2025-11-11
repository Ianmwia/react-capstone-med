import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function About(){
    return(
        <>
        <Navbar/>
        <main className='m-3'>
        <div>
            <div>
                <h1 className='text-[40px] font-bold mb-2'>About Afya Care</h1>
            </div>
            <div className='mt-3 mb-3 h-screen'>
                <p>Afya Care mental heath and health care support increases access to crucial care across the African continent. Our marketplace 
                    Services connect people to therapists and health professionals
                </p>
            </div>
            <div className='text-3xl mb-7 font-bold'>Services</div>
            <div className='h-screen bg-[#bebebe] text-[#004b73] p-3 rounded-3xl mt-5 flex flex-col justify-center items-center text-center w-9/12 max-w-md  mx-auto'>
                <h2 className='text-3xl mb-3'>Mental Health Services</h2>
                <p className='text-[#004b73]'>We help people find help with guided discussions to help you navigate your treatment.Ask 
                    informed questions and collaborate with your healthcare help for personalized care
                </p>
            </div>
            <div className='h-screen bg-[#bebebe] text-[#004b73] p-3 rounded-3xl mt-5 flex flex-col justify-center items-center text-center w-9/12 max-w-md  mx-auto'>
                <h2 className='text-3xl mb-3'>HealthCare Support</h2>
                <p className='text-[#004b73]'>Our Healthcare provision, helps you also find available access to  available medical help.Our lineup of healthcare professionals
                    to book appointments for help
                </p>
            </div>
            
        </div>
        </main>
        <Footer/>
        </>
    )
}