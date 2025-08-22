import React from 'react'
import Tabviews from './Tabviews';
import { FaChevronRight } from 'react-icons/fa';

export default function Alert({Visible, onClose}) {
    if (!Visible) return null;

  return(
    <div className='w-full min-h-[100vh] overflow-hidden bg-green dark:bg-black fixed lg:px-0 md:px-0 px-2 inset-0 dark:bg-opacity-15 bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
     <div data-aos="zoomi-in" className='flex-col  lg:w-[70%] md:w-[90%] w-[100%] dark:bg-whitegray bg-white dark:bg-opacity-25 bg-opacity-70 p-2 lg:px-4 md:px-4 px-2 border border-green rounded-xl'> 
        <div className='flex justify-end mb-4'><p onClick={onClose}  className='cursor-pointer bg-green rounded-md px-3 py-1 lg:text-[11px] md:text-[15px] text-[15px] font-semibold text-white hover:scale-105 duration-700'><FaChevronRight/></p></div>
        <div>
            <Tabviews/>
        </div>
     </div>      
    </div>
  )};