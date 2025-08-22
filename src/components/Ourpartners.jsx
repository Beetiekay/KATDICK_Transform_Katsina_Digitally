import React, { useEffect } from 'react'
//aos
import AOS from 'aos'
import "aos/dist/aos.css"
import image1 from "../assets/nitda.png"
import image2 from "../assets/federal.png"
import image3 from "../assets/kirkira.png"
import image4 from "../assets/ktgov.png"
import image5 from "../assets/wootlab.png"
import image6 from "../assets/i4.jpg"
import Works from '../pages/Home/Works'
import Upadate from '../pages/Home/Upadate'

const Ourpartners = () => {
  useEffect(() => {
    AOS.init({duration:1200})
 }) 

  return (
    <div className='w-full'>
      {/* partner 1 */}
      <div className='lg:px-16 md:px-10 px-2 py-4 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mb-6'>
        <div data-aos="fade-up" className='bg-green hover:scale-105 duration-700 rounded-2xl p-2 px-4 relative z-10'>
          <div><img src={image1} className=''/></div>
        </div>
         <div className='text-green bg-green lg:rotate-0 md:rotate-0 rotate-12 h-1 rounded-full lg:py-0 md:py-0 py-4 px-2'><hr/></div>
        <div data-aos="fade-down" className='bg-green hover:scale-105 duration-700 relative z-10 rounded-2xl p-2 px-4'>
          <div><img src={image2} className=''/></div>
        </div>
      </div>
      <div className='text-green lg:hidden md:hidden block bg-green lg:rotate-0 md:rotate-0 -rotate-45 h-1 rounded-full lg:py-0 md:py-0 py-4 px-2'><hr/></div>
      {/* partner 2 */}
      <div className='lg:px-16 md:px-10 px-2 py-4 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mb-6'>
        <div data-aos="fade-up" className='bg-green hover:scale-105 duration-700 rounded-2xl p-2 px-4 relative z-10'>
          <div><img src={image3} className=''/></div>
        </div>
         <div className='text-green bg-green lg:rotate-0 md:rotate-0 rotate-12 h-1 rounded-full lg:py-0 md:py-0 py-4 px-2'><hr/></div>
        <div data-aos="fade-down" className='bg-green hover:scale-105 duration-700 relative z-10 rounded-2xl p-2 px-4'>
          <div><img src={image4} className=''/></div>
        </div>
      </div>
      <div className='text-green lg:hidden md:hidden block bg-green lg:rotate-0 md:rotate-0 rotate-45 lg:mb-0 md:mb-0 mb-6 h-1 rounded-full lg:py-0 md:py-0 py-4 px-2'><hr/></div>
       {/* partner 3 */}
       <div className='lg:px-16 md:px-10 px-2 py-4 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mb-6'>
        <div data-aos="fade-up" className='bg-green hover:scale-105 duration-700 rounded-2xl p-2 px-4 relative z-10'>
          <div><img src={image5} className=''/></div>
        </div>
         <div className='text-green bg-green lg:rotate-0 md:rotate-0 rotate-12 h-1 rounded-full lg:py-0 md:py-0 py-4 px-2'><hr/></div>
        <div data-aos="fade-down" className='bg-green hover:scale-105 duration-700 relative z-10 rounded-2xl p-2 px-4'>
          <div><img src={image6} className=''/></div>
        </div>
      </div>
      <Works/>
      <Upadate/>
    </div>
  )
}

export default Ourpartners