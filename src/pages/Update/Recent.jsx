import React from 'react'
import Navigation from '../../components/Navigation'
import levelup from "../../assets/levelup.png"
import hack from "../../assets/hack.png"
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'

const Recent = () => {
  return (
    <div className='w-[100%] min-h-[100vh] dark:bg-black overflow-hidden'>
      <div>
        <div className='absolute z-20'><Navigation/></div>
         <div className='w-full flex items-center  justify-center'>
           <div>
           <p data-aos="fade-right" className='font-semibold dark:text-white lg:py-4 md:py-4 mt-24 mb-8 py-1 pt-16 lg:text-4xl md:text-2xl text-2xl text-center opacity-85'>Recent <span className='text-green'>Updates</span></p>
              
            <div className='w-full mb-4 lg:px-10 md:px-4 px-4 relative'> 
                <div className=' p-8 lg:px-10 md:px-8 px-2 lg:gap-10 md:gap-8 gap-4 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 group'>
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