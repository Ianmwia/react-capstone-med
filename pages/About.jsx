import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor, faHospital, faBrain, faBook } from '@fortawesome/free-solid-svg-icons';
import AboutCard from '../components/AboutCard';
import aboutImage from '../src/assets/about-image.avif'

export default function About(){
    return(
        <>
        <Navbar/>
        <main className='m-3 md-flex-row'>
        <div>
            <div className='min-h-screen flex sm:flex-row items-center justify-between'>
                <div className='flex flex-col md:gap-3 max-w-lg md:basis-2/3'>
                <div className='leading-loose'>
                    <p className='sm:text-2xl md:text-[36px] font-semibold text-green-500 md:mb-4 text-center'>About AfyaCare - Empowering Health Access Across Kenya </p>
                
                    <p> Health is the foundation of a Happy, productive life. Yet for many
                        in Kenya, access to reliable health care and mental wellness support is complicated, stressful or out of reach.
                        AfyaCare exists to remove these Barriers. We believe that every Kenyan deserves timely, compassionate and expert care
                        no matter where they are or what stage of life they are in.
                    </p>
                </div>
                <div className='leading-loose'>
                    <p>Inspired and guided by a visions of accessible healthcare, we set out to build Afyacare - a tool that makes care simple
                    , intuitive and local. Our team of innovators and health Professionals and real life patients designed every feature to remove 
                    friction and provide reliable guidance to healthcare.
                    </p>
                </div>
                </div>
                <div className='shrink-0 basis-1/3'>
                    <img src={aboutImage} alt='a group' className='object-cover h-full rounded-2xl' />
                </div>
            </div>
            <div className='min-h-screen'>
                <p className='text-[36px] font-semibold text-green-500 mb-4 text-center'>Problems We Solve</p>
                <div className='flex gap-6 justify-evenly flex-wrap mt-4 mb-4'>
                    <AboutCard
                        icon={faUserDoctor}
                        title='Difficulty finding trusted specialists'
                        description='We connect you to our in-house network service of
                certified doctors with years of experience providing help'
                    />
                    <AboutCard
                        icon={faHospital}
                        title='Overcrowded hospitals and clinics'
                        description='We connect you to our in-house network service of
                certified doctors with years of experience providing help'
                    />
                    <AboutCard
                        icon={faBrain}
                        title='Lack of easy access to mental health support'
                        description='We connect you to our in-house network service of
                certified doctors with years of experience providing help'
                    />
                    <AboutCard
                        icon={faBook}
                        title='Time consuming Bookings and follow-ups'
                        description='We connect you to our in-house network service of
                certified doctors with years of experience providing help'
                    />
                </div>
            </div>
            <p className='text-center text-[36px] font-bold mb-1 text-green-500'>Our Goals</p>
            <div className='min-h-screen flex justify-evenly flex-wrap gap-6 items-center'>
                
                <div className='bg-[#EEEEEE] p-3 w-96 h-80 rounded-2xl flex flex-col'>
                    <p className='text-[25px] font-semibold mb-8'>Our Mission</p>
                    <div className='grow max-h-[100vh-100px]'>
                        <p>To empower every Kenyan to take Charge of their health - mental
                            , emotional and physical - by providing easy access to trusted professionals, guidance and resources
                            We want to create a platform where health is not a chore or a barrier, but a seamless part of life</p>  
                    </div> 
                </div>
                <div className='bg-[#EEEEEE] p-3 w-96 h-80 rounded-2xl flex flex-col'>
                    <p className='text-[25px] font-semibold mb-8'>Our Vision</p>
                    <div>
                        We envision a Kenya where
                        <ul>
                            <li>Health help is accessible to everyone</li>
                            <li>Mental Health is treated with the same importance as physical health</li>
                            <li>Technology bridges the gap between people and care</li>
                            <li>No one Feels alone in managing their health or weallness journey</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </main>
        <Footer/>
        </>
    )
}