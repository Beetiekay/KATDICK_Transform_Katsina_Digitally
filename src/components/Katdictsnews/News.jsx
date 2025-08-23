import React, { useEffect, useState } from 'react'
import {GiNewspaper} from "react-icons/gi";
import {PiTriangleFill} from "react-icons/pi"
import Alert from './Alert';


const News = () => {
   const [ShowAlert, setShowAlert] = useState(false);
  
   const handleOnClose = () => setShowAlert(false);
   {/* hide and show */}
   const [open, setOpen] = useState(true);
   
       useEffect(() => {
       setOpen(false)
   
       setTimeout(() => {
       setOpen(true)
   
       }, 25000);
     },[])

  return (
    <div className='fixed z-50 lg:bottom-14 md:bottom-10 bottom-16 px-6'>
        <button onClick={() => setShowAlert(true)} className='relative border-gray bg-green dark:bg-white border rounded-lg dark:border-green text-whitegray dark:text-green py-2 px-2'>
          <GiNewspaper size={25} className=' duration-700'/>
           <div  className='w-5 h-5 absolute duration-500 animate-spin scale-75 -top-2 -right-1 border-2 border-white bg-carrot rounded-full'></div>
           {
             open &&(
           <div className='absolute -bottom-6 -right-8 px-2 ht-0 w-24'>
            <PiTriangleFill className='dark:text-whitegray text-green relative -top-0 -rotate-180 left-6'/>
            <p className='text-[10px] border border-gray font-semibold bg-green dark:bg-whitegray  rounded-lg px-1'>More News!</p>
          </div>
          )}
          </button> 
        <Alert onClose={handleOnClose} Visible={ShowAlert}/> 
    </div>
  )
}

export default News