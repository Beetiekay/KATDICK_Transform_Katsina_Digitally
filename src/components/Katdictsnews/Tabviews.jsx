import React, { useState } from 'react';
import {FaMicrophoneAlt, FaRegNewspaper} from "react-icons/fa";
import {FaPeopleGroup} from "react-icons/fa6"
import Events from './Events';
import KatdictN from './KatdictN';
import Guest from './Guest';

const Tabviews = () => {
    
const [state, setState] = useState(1)


  return (
    <div className='lg:flex md:flex block gap-1'>
     {/* side view */}
     <div className='lg:overflow-visible md:overflow-visible overflow-x-auto lg:mb-0 md:mb-0 mb-2 lg:gap-0 md:gap-0 gap-1 lg:py-28 md:py-52 py-2 '>
         <div className='lg:w-fit md:w-fit w-[120vw] lg:block md:block lg:mb-0 md:mb-0 mb-2 flex items-center lg:gap-0 md:gap-0 gap-2 space-y-2'>
           <div><button onClick={() => setState(1)} className={`${state === 1 ? "w-[100%] lg:mt-0 md:mt-0 mt-2 flex items-center gap-1 text-xs dark:text-green dark:bg-black px-4 py-2 ml-1 bg-whitegray outline-none lg:rounded-l-md md:rounded-l-md rounded-none " : "w-[100%] lg:mt-0 md:mt-0 mt-2 flex items-center gap-1 ml-1 lg:rounded-l-md md:rounded-l-md rounded-none px-4 py-2 dark:text-whitegray dark:bg-opacity-25  bg-gray  opacity-45 dark:opacity-100 outline-none text-xs font-semibold "}`}><FaRegNewspaper size={20}/><p className='text-[12px]'>From DG</p></button></div>
           <div><button onClick={() => setState(2)} className={`${state === 2 ? "w-[100%] flex items-center gap-1 text-xs px-4 py-2 ml-1  dark:bg-black  bg-whitegray dark:text-green outline-none lg:rounded-l-md md:rounded-l-md rounded-none " : "w-[100%] flex items-center gap-1 ml-1 lg:rounded-l-md md:rounded-l-md rounded-none px-4 py-2 dark:text-whitegray dark:bg-opacity-25  bg-gray dark:opacity-100 opacity-35 outline-none text-xs font-semibold "}`}><FaMicrophoneAlt size={20}/><p className='text-[12px]'>Events</p></button></div>
           <div><button onClick={() => setState(3)} className={`${state === 3 ? "w-[100%] flex items-center gap-1 text-xs px-4 py-2 ml-1  dark:bg-black  bg-whitegray dark:text-green outline-none lg:rounded-l-md md:rounded-l-md rounded-none " : "w-[100%] flex items-center gap-1 ml-1 lg:rounded-l-md md:rounded-l-md rounded-none px-4 py-2 dark:text-whitegray dark:bg-opacity-25  bg-gray dark:opacity-100 opacity-35 outline-none text-xs font-semibold "}`}><FaPeopleGroup size={20}/>
           <p className='text-start text-[12px]'>Guest</p>
           <p className='text-[12px]'>Spotlight</p>
           </button>
           </div>
         </div>
      </div>
      {/* side view */}
     
       {/* Tab body */}
       <div className='w-[100%] h-[60vh] overflow-hidden'>
         {state === 1 && <KatdictN/>}
         {state === 2 && <Events/>}
         {state === 3 && <Guest/>}
       </div>

    </div>
  )
}

export default Tabviews