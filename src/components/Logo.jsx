import React from 'react'
import logo from "../assets/katdict.png"


const Logo = () => {
  return (
    <div className='flex gap-2'>
        <div><img src={logo} className='lg:w-16 md:w-16 w-10'/></div>
        <div className='flex items-center'>
        <div className='lg:mt-0 md:mt-0 mt-2'>
         <h1 className='lg:text-[16px] md:text-[16px] text-[12px] text-white font-serif font-semibold'>KATDICT</h1>
         <div className='w-20 h-3 gap-1 flex'>
            <div className='lg:w-6 md:w-6 w-4 h-1 bg-white rounded-lg'></div>
            <div className='lg:w-14 md:w-14 w-10 h-1  bg-white animate-pulse rounded-lg'></div>
         </div>
         </div>
        </div>
    </div>
  )
}

export default Logo