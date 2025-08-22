import React, { useEffect, useState } from 'react'
import Welcomeadd from '../../components/Welcomeadd';
import Visionandmissions from '../../components/Visionandmissions';
import Ourservice from '../../components/Ourservice';
import Ourpartners from '../../components/Ourpartners';

//aos
import AOS from 'aos';
import "aos/dist/aos.css"
import { TiChevronLeftOutline } from 'react-icons/ti';
import Awards from '../../components/Awards';

const Tab = () => {
   useEffect(() => {
      AOS.init({duration:1200})
   })

    const [state, setState] = useState(1)

  return (
    <div className='bg-whitegray dark:bg-black'>
         <p className='font-semibold dark:text-white lg:py-4 md:py-4 py-1 lg:px-0 md:px-0 px-4 pt-16 lg:text-center md:text-center text-start lg:text-lg md:text-lg text-sm opacity-85'>WELCOME TO <span className='text-green'>KATDICT</span></p>
         <div className='flex lg:justify-center md:justify-center justify-start lg:px-0 md:px-0 px-4'><h1 className=' lg:text-3xl md:text-3xl dark:text-white text-2xl font-semibold lg:text-center md:text-center text-start mb-4'>PIONEERING THE <span className='text-green'>DIGITAL TRANSFORMATION</span><br className='lg:flex md:flex hidden'/> KATSINA STATE</h1></div>
       <div>
        <div className='lg:hidden md:flex items-center relative lg:top-14 md:top-[3.5rem] top-14 flex justify-end px-8  text-green'><TiChevronLeftOutline size={16} className='translate-x-6 scale-125 duration-700 animate-spin relative z-20'/></div>
        <div className="lg:overflow-hidden overflow-x-scroll md:overflow-x-scroll relative z-10">
          <div className='w-[240vw] lg:w-full md:w-[130vw] flex gap-4 mt-6 lg:px-10 md:px-5 px-2 mb-6'>
             <button onClick={() => setState(1)} className={`${state === 1 ? " text-green border-2  border-green  " : "outline-noner-2 dark:bg-black dark:shadow-md dark:shadow-seagreen hover:border-green bg-white rounded-lg text-green"}  lg:text-sm md:text-sm text-xs py-4 outline-none px-2 rounded flex-1 cursor-pointer`}>WELCOME ADDRESS</button>
             <button onClick={() => setState(2)} className={`${state === 2 ? " border-2 border-green text-green lg:text-sm md:text-sm text-xs " : " lg:text-sm md:text-sm text-xs dark:bg-black dark:shadow-md dark:shadow-seagreen hover:border-2 hover:border-green bg-white rounded-lg text-green"}  text-sm py-4 px-2 rounded flex-1 cursor-pointer outline-none`}>VISION & MISSION</button>
             <button onClick={() => setState(3)} className={`${state === 3 ? " text-green border-2 border-green py-4 px-2 font-normal" : " dark:bg-black dark:shadow-md dark:shadow-seagreen py-4 px-2 hover:border-2 hover:border-green bg-white rounded-lg font-normal text-green"}  lg:text-sm md:text-sm text-xs   py-2 px-4 rounded flex-1 cursor-pointer outline-none`}>OUR SERVICES</button>
             <button onClick={() => setState(4)} className={`${state === 4 ? "text-green border-2 border-greenpy-4 font-normal px-2 " : " dark:bg-black dark:shadow-md dark:shadow-seagreen py-4 px-2 font-normal hover:border-2 hover:border-green bg-white rounded-lg text-green"} outline-none lg:text-sm md:text-sm text-xs py-2 px-4 rounded flex-1 cursor-pointer`}>OUR PARTNERS</button>
             <button onClick={() => setState(5)} className={`${state === 5 ? "text-green border-2 border-greenpy-4 font-normal px-2 " : " dark:bg-black dark:shadow-md dark:shadow-seagreen py-4 px-2 font-normal hover:border-2 hover:border-green bg-white rounded-lg text-green"} outline-none lg:text-sm md:text-sm text-xs py-2 px-4 rounded flex-1 cursor-pointer`}>AWARDS</button>
            </div>
        </div>
        <div className='w-full lg:hidden md:flex flex lg:h-4 md:h-4 h-6 bg-whitegray dark:bg-black z-10 absolute -mt-4'></div>
        </div>

         <div className="bg-whitegray dark:bg-black shadow-md py-12 px-5 mt-2">
               {state === 1 && <Welcomeadd/>}
               {state === 2 && <Visionandmissions/>}
               {state === 3 && <Ourservice/>}
               {state === 4 && <Ourpartners/>}
               {state === 5 && <Awards/>}
         <div className="mt-4">
        </div>
    </div>
   </div>
  )
}

export default Tab