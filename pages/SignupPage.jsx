import SignupForm from '../components/SignupForm'

export default function Signup(){
    return(
        <>
        <div className='flex flex-col items-center justify-center min-h-screen px-4 gap-8 bg-gray-300'>
        <SignupForm/>
        </div>
        </>
    )
}