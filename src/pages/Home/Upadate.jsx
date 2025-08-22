import React, { useEffect } from 'react'
import levelup from "../../assets/levelup.png"
import hack from "../../assets/hack.png"
import { Link } from 'react-router-dom';

const Upadate = () => {
      
  return (
    <div className='w-[100%] min-h-[100vh]'>
       <div>
       <p  className='font-semibold dark:text-white lg:py-4 md:py-4 py-1 pt-16 lg:text-lg md:text-lg text-sm lg:text-center md:text-center text-start opacity-85'>RECENT <span className='text-green'>UPDATES</span></p>
       <div className='flex justify-center mb-16'><h1 className=' dark:text-white lg:text-3xl md:text-3xl text-2xl font-semibold lg:text-center md:text-center text-start mb-4'>STAY INFORMED, <span className='text-green'> AS WE SHAPE TOMORROW</span> LEGACY.</h1></div>

      <div className='w-[100%] relative'>
        <div className='dark:bg-black bg-white lg:hidden md:hidden flex w-[100%] h-4 absolute -bottom-1 z-20'></div>
       <div className='w-full mb-4 lg:overflow-visible md:overflow-visible overflow-x-scroll lg:px-10 md:px-4 px-0 relative'> 
           <div className='lg:w-full md:w-full w-[170vw] p-8 lg:px-10 md:px-8 px-2 lg:gap-10 md:gap-8 gap-4 grid grid-cols-2 group'>
               <div  className='rounded-2xl hover:scale-105  border group-hover:blur-sm hover:!blur-none border-y-midnightblue duration-700 hover:border-midnightblue p-2'>
                  <div className='bg-midnightblue bg-opacity-40 py-6 flex justify-center mb-2'><img src={levelup} className='w-36'/></div>
                   <div>
                      <p className='font-bold dark:text-royalblue text-center lg:text-2xl md:text-2xl text-lg mb-2'>Buliding your future starts here!</p>
                      <h1 className='text-sm dark:text-whitegray mb-2 text-center'>Why should apply for <span className='text-midnightblue dark:text-royalblue font-bold'>Levelup Katsina</span></h1>
                     <Link to={"levelup"}>
                      <div className='flex justify-center'><button className='outline-none p-2 w-full rounded-xl bg-midnightblue text-white'> Apply</button></div>
                      </Link>
                   </div>
               </div>
           
                 <div  className='rounded-2xl hover:scale-105 group-hover:blur-sm hover:!blur-none border border-y-carrot duration-700 hover:border-carrot p-2'>
                    <div className='bg-carrot mb-2 rounded-md bg-opacity-40 p-1 flex justify-center'><img src={hack} className='w-28'/></div>
                     <div>
                       <p className='font-bold dark:text-carrot text-center lg:text-2xl md:text-2xl text-lg mb-2'>100 Startsups and business</p>
                       <h1 className='text-sm dark:text-whitegray mb-2 text-center'>Building the next generation of innovators</h1>
                        <Link to={"/hackatsina"}>
                       <div className='flex justify-center'><button className='outline-none p-2 w-full rounded-xl bg-carrot text-white'> Apply</button></div>
                       </Link>
                     </div>
                 </div>
           </div>
       </div>
       </div>

       <div className='flex justify-center lg:px-36 mb-6 text-white '><Link to={"recent"} className='hover:scale-110 duration-500 lg:text-sm md:text-sm text-xs py-2 px-6 rounded-xl bg-green'>View More</Link></div>

       </div>
    </div>
  )
}

export default Upadate