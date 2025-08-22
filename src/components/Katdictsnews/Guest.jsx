import React from 'react'
import {GoTriangleDown} from "react-icons/go"
import bosun from "../../assets/bosuntj.png";
import elrufai from "../../assets/elrufai.jpg";
import elrufai1 from "../../assets/elrufai1.jpg";
import elrufai2 from "../../assets/elrufai2.jpg";
import Bosunmess from './Bosunmess';

const Guest = () => {
  return (
     <div data-aos="zoom-in" className=' w-[100%]  h-[59vh] rounded-lg dark:bg-black bg-whitegray  p-2'>
      <div className='flex flex-wrap justify-around lg:h-[59vh] md:h-[55vh] h-[56vh] p-2 overflow-y-auto'>
        
        {/* dr. bosun tijani */}
        <div className='lg:w-[40%] w-[100%] mb-4  overflow-hidden  border relative border-green dark:border-gray rounded-lg'>
         <img src={bosun} className='w-[100%] mb-1 lg:h-[35vh] md:h-[35vh] h-[40vh] object-cover'/>
        <div>
          <div className='w-4 h-[16vh] absolute right-0 rounded-lg z-20 dark:rounded-none dark:bg-black bg-whitegray'></div>
           <div className=' mb-2'>
         <h1 className='text-xl font-semibold mb-1 text-green text-center'>Dr. Bosun Tijani</h1>
         <p className='text-sm text-center dark:text-gray px-4 mb-2'>Hon. Minister Of Communications & Digital Economy</p>
          <div className=''>
            <input type='checkbox' className='absolute cursor-pointer w-32 opacity-0 peer transition-transform lg:bottom-4 md:bottom-3 bottom-3 lg:right-0 md:right-[6.3rem] right-2 z-40'/>
            <div className='text-green peer-checked:opacity-85 relative z-30 flex justify-center'><h1 className='text-xs py-1 dark:bg-green lg:px-7 md:px-8 px-12 rounded-lg text-whitegray bg-black  font-semibold '>Text Of Keynote Speech</h1></div>
            <div className='absolute z-30 lg:bottom-3 md:bottom-2 bottom-2 peer-checked:opacity-85 peer-checked:rotate-180 text-whitegray lg:right-[3.5rem] md:right-[9.1rem] right-[3.5rem]'><GoTriangleDown className='text-2xl'/></div>
            <div className='mb-4 max-h-0 overflow-y-auto duration-500 transition-all ease-in absolute cursor-pointer bg-whitegray dark:bg-black rounded-lg top-0 z-20 overflow-hidden peer-checked:max-h-fit'>
              <Bosunmess/>
            </div>
          </div>
          </div>
        </div>
        </div>
        
        {/* Nasir elrufai */}
        <div className='lg:w-[40%] w-[100%] mb-4 relative overflow-hidden border border-green dark:border-gray rounded-lg'>
         <img src={elrufai} className='mb-1 w-full lg:h-[35vh] md:h-[35vh] h-[40vh] object-cover'/>

         <h1 className='text-xl font-semibold mb-1 text-green text-center'>Mal. Nasir El-Rufai</h1>
         <p className='text-sm text-center dark:text-gray px-4 mb-7'>Nigerian Politician</p>
          <div className=''>
            <input type='checkbox' className='absolute cursor-pointer w-32 opacity-0 peer transition-transform lg:bottom-5 md:bottom-3 bottom-6 lg:right-0 md:right-[5.2rem] right-0 z-40'/>
            <div className='text-green peer-checked:opacity-85 relative lg:bottom-1 md:bottom-2 bottom-5 z-30 flex justify-center'><h1 className='text-xs py-1 dark:bg-green lg:px-7 md:px-8 px-12 rounded-lg text-whitegray bg-black  font-semibold '>Short Message For Katsina</h1></div>
            <div className='absolute z-30 lg:bottom-4 md:bottom-2 bottom-5  peer-checked:rotate-180 peer-checked:opacity-85 text-whitegray lg:right-[3.1rem] md:right-[8.8rem] right-[3rem]'><GoTriangleDown className='text-2xl'/></div>
            <div className='mb-4 hidden peer-checked:block overflow-y-auto lg:py-8 md:py-20 py-12 px-2 duration-500 transition-all ease-in absolute cursor-pointer bg-whitegray dark:bg-black rounded-lg top-0 z-20 overflow-hidden '>
              <p className='text-sm text-green font-semibold mb-3'>From Mal. Nasir El-rufai</p>
              <p className='text-xs dark:text-gray mb-2'>
                Katsina, your technology future is brimming with potential! By fostering innovation,
                empowering local talent, and building a robust digital ecosystem, you'are paving the way
                for incredible progress. keep pushing forward-the possibilities are truly limitless!
              </p>
              <div className='grid grid-cols-2 gap-2'>
              <img src={elrufai1} className='object-cover rounded-lg'/>
              <img src={elrufai2} className='object-cover rounded-lg'/>
              </div>
            </div>
          </div>
        </div>

      </div>
     </div>
  )
}

export default Guest