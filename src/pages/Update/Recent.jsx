import React from 'react'
import Navigation from '../../components/Navigation'
import levelup from "../../assets/levelup.png"
import hack from "../../assets/hack.png"
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import down1 from "../../assets/down2.png"
import down2 from "../../assets/down1.png"
import down3 from "../../assets/blue.png"
import image1 from "../../assets/iyes3.jpeg"
import image2 from "../../assets/iyeslogo.jpg"
import image3 from "../../assets/dgt1.jpg"

const Recent = () => {
  return (
    <div className='w-[100%] min-h-[100vh] dark:bg-black overflow-hidden'>
      <div>
        <div className='absolute z-20'><Navigation/></div>
         <div className='w-full flex items-center  justify-center'>
           <div>
           <p data-aos="fade-right" className='font-semibold dark:text-white lg:py-4 md:py-4 mt-24 mb-8 py-1 pt-16 lg:text-4xl md:text-2xl text-2xl text-center opacity-85'>Recent <span className='text-green'>Updates</span></p>
              
            <div className='w-full mb-4 lg:px-10 md:px-4 px-2 relative'> 
                <div className=' p-8 lg:px-10 md:px-8 px-2 lg:gap-10 md:gap-8 gap-4 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 group'>

                  {/* I YEs KAtsina */}
                 <div data-aos="flip-left" className='update relative overflow-hidden h-[43vh] border dark:border-green rounded-2xl hover:scale-105  group-hover:blur-sm  hover:!blur-none duration-700'>
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

                  <div data-aos="flip-left" className='update relative overflow-hidden h-[43vh] border dark:border-green rounded-2xl hover:scale-105  group-hover:blur-sm  hover:!blur-none duration-700'>
                 <img src={image3} className='w-full absolute bottom-0 object-cover h-full'/>
                   
                    <div className='relative bg-midnightblue  dark:bg-black dark:bg-opacity-25 bg-opacity-25 z-0 h-[43vh]'>
                      <h1 className='absolute left-20 text-whitegray bottom-16 text-xl  font-bold z-20'>DIGITAL SKILLS TRAINING <span className='bg-carrot p-1 px-3 rounded-full'>4</span> WOMEN</h1>
                      <div className='absolute z-20 left-0 right-0 px-4 text-whitegray bottom-2'><button className='outline-none p-2 w-full rounded-xl bg-whitegray text-midnightblue'> Apply Now</button></div>
                     <img src={down3} className='w-full relative z-10 bottom-36'/>
                    </div>
                  </div>
                   {/* Katsina Levelup */}
                    <div data-aos="flip-left" className='rounded-2xl hover:scale-105  border group-hover:blur-sm hover:!blur-none border-y-midnightblue duration-700 hover:border-midnightblue p-2'>
                        <div className='bg-midnightblue bg-opacity-40 py-6 flex justify-center mb-2'><img src={levelup} className='w-36'/></div>
                         <div>
                            <p className='font-bold dark:text-royalblue text-center lg:text-2xl md:text-2xl text-lg mb-2'>Buliding your future starts here!</p>
                            <h1 className='text-sm dark:text-whitegray mb-2 text-center'>Why should apply for <span className='text-midnightblue dark:text-royalblue font-bold'>Levelup Katsina</span></h1>
                           <Link to={"levelup"}>
                            <div className='flex justify-center'><button className='outline-none p-2 w-full rounded-xl bg-midnightblue text-white'> Apply</button></div>
                            </Link>
                         </div>
                    </div>
                     {/* hack kt Levelup */}    
                   <div data-aos="flip-right" className='rounded-2xl hover:scale-105 group-hover:blur-sm hover:!blur-none border border-y-carrot duration-700 hover:border-carrot p-2'>
                         <div className='bg-carrot mb-2 rounded-md bg-opacity-40 p-1 flex justify-center'><img src={hack} className='w-28'/></div>
                          <div>
                           <p className='font-bold dark:text-carrot text-center lg:text-2xl md:text-2xl text-lg mb-2'>100 Startsups and business</p>
                           <h1 className='text-sm dark:text-whitegray mb-2 text-center'>Building the next generation of innovators</h1>
                            <Link to={"/hackatsina"}>
                           <div className='flex justify-center'><button className='outline-none p-2 w-full rounded-xl bg-carrot text-white'> Apply</button></div>
                           </Link>
                       </div>
                   </div>
                </div>
            </div>
           </div>
         </div>
         <Footer/>
         </div>
    </div>
  )
}

export default Recent;