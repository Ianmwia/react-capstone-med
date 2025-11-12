import { useContext } from 'react';
import { SearchContext } from '../../src/context/SearchCreator';

export default function Search(){
    const {searchTerm, setSearchTerm} = useContext(SearchContext)

    return(
        <>
        <div className='mb-2'>
            <input className='outline p-2' type="text" placeholder='Search Doctors by name, specialty or practice' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
        </div>
        </>
    )
}