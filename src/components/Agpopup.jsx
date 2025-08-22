import { useEffect, useState } from 'react'
import logo from "../assets/katdict.png";
import spin from "../assets/dotted.png";
import katdict from "../assets/kat.png";
import Marquee from 'react-fast-marquee';
import { FaChevronCircleUp } from 'react-icons/fa';

const Agpopup = () => {
  
    const [open, setOpen] = useState(true);

    useEffect(() => {
    setOpen(false)

    setTimeout(() => {
    setOpen(true)

    }, 5000);
  },[])
      
  return (
    <div>
        {
         open &&(
         <div className='w-full h-full flex justify-center transition-all dark:bg-black dark:bg-opacity-35 fixed peer-checked:hidden items-center backdrop-blur-sm top-0 z-50 bg-green bg-opacity-50'>
          <div data-aos="slide-up" className='lg:w-[24%] md:w-[48%] w-[85%] border-4 dark:bg-opacity-85 dark:border-green dark:bg-black border-white relative py-6 h-fit bg-opacity-80 bg-white rounded-xl p-2'>
            <div onClick={() => setOpen(false)} className='flex justify-end cursor-pointer z-30 transition-transform duration-300 relative'>
            </div>

            <div>

              <div className='flex items-center mb-8 lg:px-10 md:px-10 px-2'>
              <img src={katdict} className='w-14 dark:bg-black bg-green px-1'/>
               <Marquee className=' flex justify-center items-center gap-10 '>
               <p className='text-xs px-2 font-mono font-semibold dark:text-white text-green'>KATSINA DIRECTORATE OF INFORMATION & COMMUNICATIONS TECHNOLOGY</p>
               </Marquee>
               </div>
              
                <h1 className='lg:text-4xl md:text-5xl text-4xl  mb-4  text-green text-center font-bold mt-2'>Welcome To <br className='lg:hidden md:hidden flex'/> Katdict !</h1>

                <div className=' flex justify-center w-full mb-6'><button className='bg-green dark:border-green p-3 py-4 outline-none border-4  border-white rounded-full'><img src={logo} data-aos="flip-up" className='lg:w-20 md:w-20 w-14'/></button></div>
                 
                <div className='lg:px-4 md:px-6 px-2 lg:mt-0 md:mt-0 -mt-2'><p className='lg:text-sm dark:opacity-85 dark:text-white md:text-sm text-sm text-center font-semibold px-8'>Beyond The Surface, A World Of Possibilities.</p></div>

                 <div className='flex justify-center items-center mt-6 relative'>
                  <button onClick={() => setOpen(false)} className='flex relative z-10'>
                   <FaChevronCircleUp className='lg:text-6xl md:text-5xl text-5xl hover:rotate-90 duration-500 text-green'/>
                  </button>
                    <img src={spin} className='lg:w-24 md:w-24 w-20 absolute animate-spin duration-700'/>
                  </div>
            </div>
         </div>
        </div>
         )}
    </div>
  )
}

export default Agpopup