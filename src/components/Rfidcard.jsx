import React from 'react'
import scan1 from "../assets/gvt.png"
import scan2 from "../assets/scan.png"
import scan3 from "../assets/signature.png"
import s1 from "../assets/ford1.png"
import s2 from "../assets/ford2.png"
import logo2 from "../assets/katdict.png"
import DG from "../assets/naufal.jpeg"
import layer from "../assets/cardl.png"
import lay from "../assets/spray.png"

import { MdRotateRight } from 'react-icons/md'

const Rfidcard = () => {
  return (
    <div className='lg:mt-0 md:mt-36 mt-0 '>
        <div data-aos="flip-left" className='flex justify-center lg:h-fit md:h-fit h-[60vh] w-[100%] relative mb-10'>
             <input type='checkbox' className='peer transition-all w-36 cursor-pointer h-96 opacity-0 z-30 absolute'/>
             <div  className='lg:w-[18%] md:w-[43%] relative overflow-hidden w-[80%] lg:h-[58vh] md:h-[50vh] h-[55vh] block transition-transform duration-700 lg:peer-checked:-rotate-45 md:peer-checked:-rotate-12 lg:peer-checked:block md:peer-checked:block peer-checked:hidden z-20 shadow-md peer-checked:-rotate-45 lg:peer-checked:mr-80 md:peer-checked:mr-80 peer-checked:ml-0 border-2  border-green bg-whit rounded-xl'>   
               <img src={layer}  className='absolute object-cover -top-28  opacity-45 dark:opacity-35 w-screen'/>
               {/* logo */}
                <div className='w-[100%] h-[20vh] relative z-10'>
              <div className='flex justify-center py-2'>
               <div className='flex items-center gap-2'>
             <div>
                <img src={logo2} className='w-10 scale-105 animate-spin'/>
             </div>

             <div>
             <h1 className='text-[16px] text-white  font-serif font-semibold'>KATDICT</h1>
             <div className='w-20 h-3 gap-1 flex'>
               <div className='w-6 h-1 bg-white rounded-lg'></div>
               <div className='w-14 h-1 bg-white animate-pulse rounded-lg'></div>
              </div>
             </div>
               </div>
              </div>
                </div>
                {/* logo */}
                <img src={DG} className=' object-cover  w-[100%] h-[100vh] absolute  top-0'/>
                <div className='absolute -bottom-1 left-0 right-0'>
                  <img src={lay} className='w-full object-cover absolute bottom-0'/>
                <h1 className='text-green relative text-xl mb-2 font-bold text-center lg:mt-32 md:mt-36 mt-28'>Naufal Ahmad</h1>
                <p className='font-semibold relative -top-2 font-sans mb-4 text-green text-[10px] text-center'>DIRECTOR GENERAL</p>
                </div>
            </div>
              
              <div className='absolute top-24 hidden peer-checked:block'><MdRotateRight size={25} className='text-green relative lg:left-0 md:left-0 left-16 z-20'/></div>
              {/* Back */}
         
            <div className='lg:w-[18%] bg-whitegray dark:bg-black md:w-[43%]  w-[80%] lg:h-[58vh] md:h-[50vh] h-[55vh] transition-transform duration-700 lg:peer-checked:z-30 md:peer-checked:z-30 peer-checked:z-0 lg:peer-checked:rotate-45 md:peer-checked:rotate-12 peer-checked:block lg:peer-checked:ml-80 md:peer-checked:ml-80 peer-checked:ml-0 shadow-md  hidden border-2 overflow-hidden absolute  border-green bg-whit rounded-xl'>   
             <div className=' w-[100%] lg:h-[50vh] md:h-[42vh] h-[50vh]'>
                <div className='flex  justify-center relative lg:top-0 md:top-7 mt-0 lg:mb-0 md:mb-8'><img src={scan1} className='w-24'/></div> 
                <div className='flex justify-center dark:hidden -mt-4'><img src={scan2} className='w-28'/></div> 
                <div className='hidden dark:flex justify-center relative lg:top-0 md:top-7 mt-0 lg:mb-0 md:mb-8'><img src={s2} className='w-24'/></div> 

                <p className='text-[11px] dark:opacity-80 dark:text-white px-4 font-bold mb-2 text-center'>This identification belongs to KATDICT if found please kindly return to the direction complex</p>

                <p className='text-sm dark:opacity-80 dark:text-white text-center font-bold mb-4'>Signature;</p>
                <div className='flex dark:hidden justify-center -mt-4'><img src={scan3} className='w-16'/></div> 
                <div className='dark:flex hidden  justify-center -mt-4'><img src={s1} className='w-12'/></div> 


             </div>

              <div className='w-[100%] h-24  bg-green '>
                <p className='font-semibold text-white text-center text-xs opacity-85 relative top-2'>www.katdict.ng</p>
              </div>
                
            </div>

        </div>
    </div>
  )
}

export default Rfidcard