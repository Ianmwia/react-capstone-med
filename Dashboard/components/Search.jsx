import { useContext, useState } from 'react';
import { SearchContext } from '../../src/context/SearchCreator';

export default function Search(){
    const {setSearchTerm} = useContext(SearchContext)
    const [input, setInput] = useState('')

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            setSearchTerm(input)
        }
  };

    return(
        <>
        <div className='mb-2 p-2'>
            <input className='outline p-2 rounded w-full max-w-sm' type="text" placeholder='Search Doctors by name, specialty or practice' value={input} onChange={(e)=> setInput(e.target.value)} onKeyDown={handleKeyDown}/>
        </div>
        </>
    )
}