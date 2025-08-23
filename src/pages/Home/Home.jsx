import React, { useEffect } from 'react'
import Navigation from '../../components/Navigation'
import Tab from './Tab'
import Footer from '../../components/Footer'
import image from "../../assets/two.jpg"
import burst from "../../assets/burst.png"


//aos
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from 'react-router-dom'
import Dispaly from '../../components/Dispaly'
import Auto from '../../components/Homesauto/Auto'

const Home = () => {
   useEffect(() => {
      AOS.init({duration:1200})
   }) 

  return (
    <div className='w-full lg:min-h-[100vh]  md:min-h-[100vh] min-h-[80vh] dark:bg-black bg-whitegray bg-opacity-30 overflow-hidden'>
      <div className='w-[100%] h-[100vh] absolute '><Auto/></div>
      <div className='relative h-full  bg-seagreen dark:bg-gradient-to-tl dark:from-green dark:bg-black from-black dark:bg-opacity-80  bg-opacity-75 '>
         <div className='absolute z-30'><Navigation/></div>
         <div className='min-h-[100vh] w-[100%] flex justify-center items-center relative'>
          <div className='lg:mt-32 md:mt-0 mt-0 relative'>
           <h1 data-aos="flip-down" className='lg:text-5xl text-white md:text-4xl text-4xl text-center font-semibold mb-4'>Crafting Tomorrow's <span className='dark:text-green text-black'>Technologies</span> Today!</h1> 

           <div className='flex justify-center mb-5 lg:px-0 md:px-0 px-5'><p data-aos="fade-up" className='opacity-70 text-white lg:text-lg md:text-lg text-xs text-center  mb-2'>Technology's progress is about seamless integration, making it so much a part of our daily <br className='lg:flex md:flex hidden'/>lives that we barely notice it.</p></div>
            

            <div className='flex justify-center'>
              <div className='lg:w-32 md:w-40 w-32' data-aos="flip-right">
                <Link to={"/about"}><button className='bg-green hover:scale-105 duration-700 text-xs text-white py-3 w-full rounded-2xl outline-none'>Know More</button></Link>
              </div>
            </div>
          </div>
         </div>
      </div> 
      <Dispaly/>
      <div className='w-[100%] h-[50vh] relative bg-white dark:bg-black flex justify-center items-center py-14 px-4'>
        <img src={burst} className='w-80 opacity-35 absolute lg:-bottom-4 md:-bottom-4 -bottom-10 right-8'/>
        <img src={burst} className='w-80 opacity-35 absolute lg:-top-4 md:-top-4 -top-20 left-5'/>
        <div className=' lg:w-[80%] md:w-[80%] w-[95%] overflow-hidden relative bg-green dark:bg-opacity-65 lg:px-10 md:px-10 px-0 py-16 rounded-3xl'>
          <img src={image} className='w-screen left-0 top-0 opacity-25 h-full absolute object-cover'/>
          <h1 className='lg:text-3xl relative md:text-4xl mb-4 text-xl text-center font- text-white'>LET'S MEET <span className='text-black font-bold '>KATDICT </span> ROBOTIC <br/> ENGINEERING TEAM</h1>
          <p className='font-semibold lg:text-xs md:text-xs text-[10px] text-whitegray text-center mb-6'>Building dreams with precision and excellence.</p>

          <div className='flex justify-center '><Link to={"robotic"} className='bg-whitegray px-4 font-semibold scale-110 duration-700 animate-spin hover:opacity-40 py-2 rounded-xl text-xs'>Read More</Link></div>
        </div>
      </div>
      <Tab/> 
     <Footer/>
    </div>
  )
}

export default Home