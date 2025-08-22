import React, { useEffect } from 'react'
import Downlaod from '../../components/Downlaod'
import Footer from '../../components/Footer';
import Details from './Details';

//aos
import AOS from 'aos';
import "aos/dist/aos.css"

const Abt = () => {
    useEffect(() => {
        AOS.init({duration:1200})
     })
  return (
      <div className='w-[100%] overflow-hidden'>
        <div className='lg:min-h-[60vh] md:min-h-[60vh] min-h-[60vh] w-[100%]  lg:px-0 md:px-0 px-4 flex justify-center lg:items-center md:items-start items-start relative'>
        <div className=' lg:bg-opacity-0 md:bg-opacity-0 bg-opacity-100 py-5 rounded-2xl mt-44'>
          <div>
          <h1  className='lg:text-3xl dark:text-white lg:text-black lg:text-center text-black md:text-2xl text-xl lg:px-14 md:px-10 px-1 text-start'>About <span className='font-bold   lg:text-green md:text-green text-green'>KATDICT</span>
          </h1>
          <div  className='flex justify-center'>
            <h1 className='lg:w-[50%] md:w-[95%] w-[95%] text-black mb-4 dark:text-white lg:text-center md:text-start text-start  hover:bg-opacity-100  duration-700 ease-in-out dark:opacity-80 lg:py-8 md:py-4 py-4 lg:px-4 md:px-4 px-0 rounded-2xl lg:text-lg md:text-lg text-sm'>
            KATDICT is Pioneering the Digital Transformation of Katsina State, our activities cut across providing ICT services to the Government, fostering the growth and development of Technology and Innovation Hubs and making Government services available to the populace.</h1>
          </div>
          </div>
        </div>
        </div>  
      <Details/>
      <Downlaod/>
      <Footer/>
    </div>
  )
}

export default Abt