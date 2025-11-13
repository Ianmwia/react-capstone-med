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
        <div className='p-2'>
            <input className='outline p-2 rounded w-full sm-w-80 md-96 ls:w-[500px]' type="text" placeholder='Search Doctors by name, specialty or practice' id='search' value={input} onChange={(e)=> setInput(e.target.value)} onKeyDown={handleKeyDown}/>
        </div>
        </>
    )
}