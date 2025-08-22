import React from 'react'
import Image1 from "../assets/hall1.jpg";
import Image2 from "../assets/hall2.jpg";
import Image3 from "../assets/hall3.jpg";
import Image4 from "../assets/hall4.jpg";
import Image5 from "../assets/hall5.jpg";
import Image6 from "../assets/hall6.jpg";
import Image7 from "../assets/hall7.jpg";
import Image8 from "../assets/hall8.jpg";
import Image9 from "../assets/hall9.jpg";
import Image10 from "../assets/hall10.jpg";
import Image11 from "../assets/hall11.jpg";
import Image12 from "../assets/image1.jpg";
import Image13 from "../assets/image2.jpg";
import Image14 from "../assets/image3.jpg";
import Image15 from "../assets/image4.jpg";

import layer from "../Favicon/fav.png";

import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Images = () => {
  return (
    <div className='w-full h-[100vh] relative overflow-y-auto dark:bg-black'>
        <img src={layer} className='w-full h-screen object-cover fixed opacity-25 overflow-hidden'/>
        <div className='relative p-6 lg:px-28 md:px-10 gap-4 overflow-hidden'>
            <Link to={"/"} className='fixed left-6'><button className='outline-none px-4 p-2 rounded-lg text-whitegray bg-green'><FaChevronLeft/></button></Link>

            <div className='space-y-2 mt-16 mb-3'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2'>
              <img src={Image1} className='lg:rounded-2xl md:rounded-2xl rounded-md duration-500 hover:border-4 hover:border-green object-fill'/>
              <img src={Image2} className='lg:rounded-2xl md:rounded-2xl rounded-md duration-500 hover:border-4 hover:border-green object-cover'/>
            </div>

             <img src={Image11} className='lg:rounded-2xl md:rounded-2xl rounded-md duration-500 hover:border-4 hover:border-green object-cover'/>
            </div>

            <div className='grid grid-cols-2 gap-2 mb-4'>
             <img src={Image4} className='lg:rounded-2xl md:rounded-2xl rounded-md duration-500 hover:border-4 hover:border-green lg:h-[128vh] md:h-[50vh] h-[32vh] object-cover'/>
             <div className='w-[100%] space-y-2  '>
             <img src={Image5} className='lg:rounded-2xl md:rounded-2xl rounded-md duration-500 hover:border-4 hover:border-green object-fill'/>   
             <img src={Image6} className='lg:rounded-2xl md:rounded-2xl rounded-md duration-500 hover:border-4 hover:border-green object-fill'/>
             </div>
            </div>
            
            <div  className='lg:overflow-visible md:overflow-x-auto overflow-x-auto mb-2'>
            <div className="lg:w-fit md:w-w-[240vw] w-[240vw] grid grid-cols-4 gap-2 mb-4">
            <img src={Image7} className='lg:rounded-2xl md:rounded-2xl rounded-md duration-500 hover:border-4 hover:border-green object-fill'/>
            <img src={Image8} className='lg:rounded-2xl md:rounded-2xl rounded-md duration-500 hover:border-4 hover:border-green object-fill'/>
            <img src={Image9} className='lg:rounded-2xl md:rounded-2xl rounded-md duration-500 hover:border-4 hover:border-green object-fill'/>
            <img src={Image10} className='lg:rounded-2xl md:rounded-2xl rounded-md duration-500 hover:border-4 hover:border-green object-fill'/>
            </div>
            </div>

            <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-2'>
              <img src={Image11} className='rounded-2xl duration-500 hover:border-4 hover:border-green object-fill'/>
              <img src={Image12} className='rounded-2xl duration-500 hover:border-4 hover:border-green object-fill'/>
              <img src={Image13} className='rounded-2xl duration-500 hover:border-4 hover:border-green object-fill'/>
              <img src={Image14} className='rounded-2xl duration-500 hover:border-4 hover:border-green object-fill'/>
              <img src={Image15} className='rounded-2xl hover:border-4 hover:border-green duration-500 object-fill'/>
            </div>

            <p className='text-center lg:text-lg md:text-lg text-sm text-green font-semibold mt-2 mb-2'>KATDICT</p>
        </div>
    </div>
  )
}

export default Images