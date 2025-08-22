import React from 'react'
import Navigation from '../../components/Navigation'
import { FaClock, FaInternetExplorer, FaPhone, FaSearchLocation } from 'react-icons/fa'
import Map from '../../components/Map'
import Footer from '../../components/Footer'


const Contact = () => {
  return (
    <div className='w-[100%] dark:bg-black lg:min-h-[100vh] md:min-h-[100vh] min-h-[80vh]  overflow-x-hidden'>
        <div className='absolute z-20'><Navigation/></div>
          <div className='min-h-[100vh] w-[100%] lg:mt-16 md:mt-16 mt-24  relative'>

            <div className='mt-36 mb-8 flex  gap-4 justify-center items-center'>         
             <h1 className='lg:text-3xl  dark:text-white md:text-3xl text-xl text-center font-semibold '>CONTACT <span className='text-green'>US</span></h1>
             <div className=''>
                <div className='lg:w-10 md:w-10 w-6 h-1 mb-2 bg-seagreen rounded-2xl'></div>
                <div className='lg:w-10 md:w-10 w-6 h-1 bg-seagreen rounded-2xl'></div>
             </div>
            </div>

            <div className='lg:flex md:flex block justify-around items-center px-6'>             
               <div data-aos="fade-right" className='space-y-6 dark:bg-opacity-40 lg:mb-0 md:mb-0 mb-6 py-6 lg:w-[40%] md:w-[100%] px-6 gap-6 rounded-2xl shadow-md bg-green'>

                <div  className='space-y-2 mb-4 lg:flex md:block flex items-center gap-6'>
                <div><FaSearchLocation size={25} className='dark:text-green text-white'/></div>
                <div className='text-white'>
                    <h1 className='font-semibold'>KATDICT Complex</h1>
                    <p className='text-sm'>KSITM, Ring Road, Katsian</p>
                 </div>
                </div>

                <div  className='space-y-2 mb-4 lg:flex md:block flex items-center gap-6'>
                <div><FaClock size={25} className='dark:text-green text-white'/></div>
                    <div className='text-white'>
                        <h1 className='font-semibold'>09:00am - 05:00pm</h1>
                        <p className='text-sm'>Monday To Friday</p>
                    </div>
                </div>
                
                <div  className='space-y-2 mb-4 lg:flex md:block flex items-center gap-6'>
                <div><FaInternetExplorer size={25} className='dark:text-green text-white'/></div>

                    <div className='text-white'>
                        <h1 className='font-semibold'>Online 24/7</h1>
                        <p className='text-sm'>070-KATDICT</p>
                    </div>
                </div>

                <div  className='space-y-2 lg:flex md:block flex items-center gap-6'>
                <div><FaPhone size={25} className='dark:text-green text-white'/></div>
                    <div className='text-white'>
                        <h1 className='font-semibold'>070-KATDICT</h1>
                        <p className='text-sm'>Info@katdict.ng</p>
                    </div>
                </div>

                </div>
              
                 <div className='flex justify-center mb-4'>
                  <div data-aos="fade-left" className='lg:w-[100%] md:w-[80%] lg:h-[65vh] md:h-[47vh] h-fit w-fit bg-seagreen rounded-2xl overflow-hidden'><Map/></div>
                </div>
            </div>

           
         </div>
         <Footer/>
    </div>
  )
}

export default Contact