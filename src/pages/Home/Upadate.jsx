import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import down1 from "../../assets/down2.png"
import down2 from "../../assets/down1.png"
import down3 from "../../assets/blue.png"
import image1 from "../../assets/iyes3.jpeg"
import image2 from "../../assets/iyeslogo.jpg"
import image3 from "../../assets/dgt1.jpg"

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

               <div className='update relative overflow-hidden h-[43vh] border dark:border-green rounded-2xl hover:scale-105  group-hover:blur-sm  hover:!blur-none duration-700'>
                <img src={image1} className='w-full absolute bottom-0 object-cover h-full'/>
               <div className='relative bg-carrot  dark:bg-black dark:bg-opacity-25 bg-opacity-25 z-40 h-[43vh]'>
                <div>
                  <img src={image2} className='w-20 relative top-24 z-10 left-[55%] border-2 border-green rounded-full object-cover'/>

                  <h1 className='text-2xl text-green relative top-24 text-center  font-bold z-10'>I YES KATSINA</h1>
                  <p className='relative dark:opacity-60 dark:text-white z-10 text-sm top-24 text-center'>Yought Empowerment And Social Transformation In Katsina State.</p>
                  <div className='flex relative top-[6.2rem] px-6 z-10 justify-center'><button className='outline-none p-2 w-full rounded-xl bg-green text-white'> Apply Now</button></div>
                </div>
                <img src={down1} className='absolute z-0 w-full dark:hidden h-full left-0 right-0 bottom-0  object-cover'/>
                <img src={down2} className='absolute hidden dark:flex z-0 w-full h-full left-0 right-0 bottom-0  object-cover'/>
               </div>
                   
               </div>

                {/* digital skilss for women */}

                 <div className='update relative overflow-hidden h-[43vh] border dark:border-green rounded-2xl hover:scale-105  group-hover:blur-sm  hover:!blur-none duration-700'>
                 <img src={image3} className='w-full absolute bottom-0 object-cover h-full'/>
                   
                    <div className='relative bg-midnightblue  dark:bg-black dark:bg-opacity-25 bg-opacity-25 z-0 h-[43vh]'>
                      <h1 className='absolute left-20 text-whitegray bottom-16 text-xl  font-bold z-20'>DIGITAL SKILLS TRAINING <span className='bg-carrot p-1 px-3 rounded-full'>4</span> WOMEN</h1>
                      <div className='absolute z-20 left-0 right-0 px-4 text-whitegray bottom-2'><button className='outline-none p-2 w-full rounded-xl bg-whitegray text-midnightblue'> Apply Now</button></div>
                     <img src={down3} className='w-full relative z-10 bottom-36'/>
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