import React from 'react'
import Navigation from './Navigation'
import Rfidcard from './Rfidcard'
import monitor from '../assets/monitor.png'
import Footer from './Footer'
import { Link } from 'react-router-dom'


const Roboticts = () => {
  return (
    <div className='w-[100%] overflow-hidden dark:bg-black'>
      <div className=''>
        <div className='absolute z-30'><Navigation/></div>
        <div className=' w-[100%] h-[100vh] relative'>
           <div className='relative top-36'>
            <Link to={"/"} className='px-4 relative lg:-top-5 md:-top-5 -top-6'><button className='bg-green hover:opacity-65 p-1 px-4 lg:text-lg md:text-lg text-sm rounded-xl outline-none text-white'>Back</button></Link>
             <h1 className='lg:text-4xl px-4 md:text-4xl text-xl mb-10  lg:text-center md:text-center text-start font-semibold text-green'>ROBOTIC <span className='text-black dark:text-white'>ENGINEERING </span>TEAM</h1>
             

             <div>

            <div className='px-4 gap-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>

             <div data-aos="fade-up" className='mb-4'>
              <h1 className='font-semibold dark:text-white '>OUR MISSION </h1>
              <div className='w-[24%] h-1 mb-4 rounded-xl bg-green'></div>  
              <p className='text-sm dark:text-white dark:opacity-70 '>
               Our mission is to build a community of passionate learners and problem solving by providing training   tools, and mentorship in robotics and emerging technology to drive innovation and impact in our local environment.
              </p>
              </div>

              <div data-aos="fade-up">
              <h1 className='font-semibold dark:text-white'>GOALS AND ACHIEVEMENT OF THE TEAM </h1>
              <div className='w-[70%] h-1 mb-4 rounded-xl bg-green'></div>  
              <p className='text-sm dark:text-white dark:opacity-70 '>
               To empower young innovators in Katsina with hands on robotics and AI Skills fostering practical solutions to Local challenges through technology creativity and collaboration.
              </p>
              </div>
               
              <div data-aos="fade-up">
              <h1 className='font-semibold dark:text-white'>ACHIEVEMENTS </h1>
              <div className='w-[70%] h-1 mb-4 rounded-xl bg-green'></div>  
              <p className='text-sm dark:text-white dark:opacity-70 mb-1'>1. Developed an RFID-Based Attendance System</p>
              <p className='text-sm dark:text-white dark:opacity-70 mb-1'>2. Smart Irrigation System </p>
              <p className='text-sm dark:text-white dark:opacity-70 mb-1'>3. Smart Water Level System  </p>
              <p className='text-sm dark:text-white dark:opacity-70 mb-1'>4. Palmsync - Automation Of Office/home </p>
              <p className='text-sm dark:text-white dark:opacity-70 mb-1'>5. Current Projects: Smart Homes (palmsync)</p>
              </div>

              <div data-aos="fade-up">
              <h1 className='font-semibold dark:text-white'>HOW TO JOIN SUCH A TEAM  </h1>
              <div className='w-[50%] h-1 mb-4 rounded-xl bg-green'></div>  
            <p className='text-sm dark:text-white dark:opacity-70 '>Selection through dedication and determination.</p>
              </div>
              
              <div data-aos="fade-up" className=''>
              <h1 className='font-semibold dark:text-white'>TEAM STRUCTURE  </h1>
              <div className='w-[50%] h-1 mb-4 rounded-xl bg-green'></div>  
              <button className='px-2 py-1 mb-1 text-white text-sm outline-none bg-green'>Team Lead </button>
              <p className='text-sm dark:text-white dark:opacity-70 mb-2'>Mr. Ahmad Abdulrazaq</p>

              <button className='px-2 py-1 mb-1 text-white text-sm outline-none bg-green'>DevOps  </button>
              <p className='text-sm dark:text-white dark:opacity-70 mb-2'>Usman Saulawa Shehu</p>
               
              <button className='px-2 py-1 mb-1 text-white text-sm outline-none bg-green'>Project Manager  </button>
               <p className='text-sm dark:text-white dark:opacity-70 mb-2'>Fatima Muhammad Bashir</p>

              <button className='px-2 py-1 mb-1 text-white text-sm outline-none bg-green'>Software Engineer   </button>
               <p className='text-sm dark:text-white dark:opacity-70 mb-2'>Suleiman Jabir Yamel</p>

              <button className='px-2 py-1 mb-1 text-white text-sm outline-none bg-green'>Hardware    </button>
               <p className='text-sm dark:text-white dark:opacity-70 mb-2'>Abdullahi Hamza Lawal </p>
              </div>

              <div data-aos="fade-up" className=''>
              <h1 className='font-semibold dark:text-white'>TECHNOLOGY USED IN THE TEAM   </h1>
              <div className='w-[50%] h-1 mb-4 rounded-xl bg-green'></div>  
               <p className='text-sm dark:text-white dark:opacity-70 mb-3'><span className='bg-green p-1 px-[9px] text-white rounded-full'>1</span> Arduino Uno By WIFI </p>
               <p className='text-sm dark:text-white dark:opacity-70 mb-3'><span className='bg-green p-1 px-[9px] text-white rounded-full'>2</span>  Raspberry Pi Pico H </p>
               <p className='text-sm dark:text-white dark:opacity-70 mb-3'><span className='bg-green p-1 px-[9px] text-white rounded-full'>3</span>  Raspberry Pi P, 3</p>
               <p className='text-sm dark:text-white dark:opacity-70 mb-3'><span className='bg-green p-1 px-[9px] text-white rounded-full'>4</span>  Raspberry Pi Pico W </p>
               <p className='text-sm dark:text-white dark:opacity-70 mb-3'><span className='bg-green p-1 px-[9px] text-white rounded-full'>5</span>  Raspberry Pi </p>
               <p className='text-sm dark:text-white dark:opacity-70 mb-3'><span className='bg-green p-1 px-[9px] text-white rounded-full'>6</span>  Arduino </p>
               <p className='text-sm dark:text-white dark:opacity-70 mb-2'><span className='bg-green p-1 px-[9px] text-white rounded-full'>7</span>  Esp32 </p>
              </div>
            </div>
             
            </div> 
         </div>
        </div>

        <div className='w-[100%] lg:h-[160vh] h-[195vh] px-4 lg:mt-8 md:mt-0 mt-[38rem] lg:overflow-visible md:overflow-visible overflow-hidden dark:bg-black'>
        <h1 data-aos="fade-up" className='lg:text-3xl md:text-3xl mt-44 text-xl mb-4 lg:text-center md:text-center text-start font-semibold text-green'><span className='text-black dark:text-white mb-2'>KATDICT</span> ATTENDANCE SYSTEM</h1>
        <div className='flex lg:justify-center md:justify-center justify-start'>
        <p  className='text-sm lg:w-[45%] md:w-[60%] w-fit lg:text-center md:text-center text-start mb-16 dark:text-white dark:opacity-70 '>
         The Attendance system is an RFID-based solution developed to automate staff in KATDICK check-ins, by scanning   RFID Cards, The system records attendance in realtime, reducing manual errors and improving accountability.
        </p>
        </div>
        <div className='flex  justify-center'><img src={monitor} alt='' className='w-44 translate-x-2 translate-y-4 scale-105 animate-spin duration-700'/></div>
         
         {/* RFID CARD */}
         <h1 data-aos="fade-up" className='lg:text-3xl md:text-3xl text-xl lg:text-center md:text-center text-start mb-3 dark:text-white font-semibold '>RFID<span className='text-green font-bold'> CARD</span></h1>
         <div className='flex lg:justify-center md:justify-center justify-start'>
         <p  className='dark:text-white mb-8 lg:text-center md:text-center text-start dark:opacity-80 text-sm lg:w-[50%] md:w-[70%] w-fit'>
          Every staff is given a personal RFID CARD with unique identification number, KATDICT staff 
          are required to show the RFID Cards to reader in each day of the work week to mark their attendance, The RFID
          device transfers the data to attendance server every minute.
         </p>
         </div>
           <Rfidcard/>
        </div>

     </div>
     <Footer/>
    </div>
  )
}

export default Roboticts