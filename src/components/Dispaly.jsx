import React from 'react'
import image1 from "../assets/hall1.jpg"
import image2 from "../assets/hall2.jpg"
import image3 from "../assets/hall3.jpg"
import bg from "../assets/map.png"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Dispaly = () => {
  return (
    <div className='w-full lg:h-screen  md:h-[50vh] relative overflow-hidden bg-white dark:bg-black'>
       <img src={bg} className='w-full absolute top-0 dark:opacity-15 opacity-10 object-cover'/>
      <div className='relative lg:top-32 md:top-32 top-0'>
         
         <div className='lg:hidden md:hidden relative top-3 mb-4 flex items-center justify-start px-4 '><Link to={"/images"} className='lg:text-xl md:text-xl font-semibold text-sm  p-2 text-green'>View More</Link><FaArrowRight className='text-green'/></div>
           
        <div className='relative'>
         <div className='w-full lg:overflow-hidden md:overflow-hidden overflow-x-scroll mb-4'>
           <div className='flex  lg:w-fit md:w-fit w-[220vw] group  lg:px-32 md:gap-8 gap-2 px-4 lg:gap-8 md:px-8  mb-4'>
             <img src={image1} className='w-[20%] rounded-xl hover:!saturate-100 group-hover:saturate-0 border-2 border-green relative  lg:scale-90 md:scale-90 scale-100 hover:translate-x-2 duration-1000 object-cover'/>
             <img src={image2} className='lg:w-[80vw] md:w-[60vw] w-[40vw] lg:h-[60vh] md:h-[27vh] rounded-xl hover:!saturate-100 group-hover:saturate-0  border-2 border-green hover:translate-y-2 duration-1000 object-cover'/>
             <img src={image3} className='w-[20%] rounded-xl hover:!saturate-100 group-hover:saturate-0  border-2 border-green lg:scale-90 md:scale-90 scale-100  hover:translate-x-2 duration-1000 object-cover'/>
           </div>
         </div>
         <div className='w-[100%] lg:hidden md:hidden flex h-4 backdrop-blur-2xl dark:bg-black absolute -bottom-2'></div>
        </div>

         <div className='lg:flex md:flex hidden justify-center '><Link to={"/images"} className=' text-sm px-4 p-2 text-white bg-green rounded-xl'>View More</Link></div>
      </div>
    </div>
  )
}

export default Dispaly