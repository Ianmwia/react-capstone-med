import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AboutCard({icon, iconColor='green', title, description}){
    return(
        <>
        <div className='rounded-2xl bg-[#EEEEEE] w-50 p-6 flex flex-col items-center text-center'>
            <FontAwesomeIcon icon={icon} size='3x' color={iconColor}/>
            <div className='mt-6 text-[18px] text-orange-400'>
            <p>{title}</p>
            </div>
            <div>
            <p className='mt-4 text-[14px] text-black'>{description}
            </p>
            </div>
        </div>
        </>
    )
}