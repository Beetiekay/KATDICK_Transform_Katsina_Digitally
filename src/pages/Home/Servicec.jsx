import React from 'react'
import Button from '../../components/Button'
import { useEffect } from 'react'
import image1 from "../../assets/dgg.jpg"
import image2 from "../../assets/elrufai3.jpg"
import image3 from "../../assets/arewa8.jpeg"

//aos
import AOS from 'aos'
import "aos/dist/aos.css"
import { Link } from 'react-router-dom'

const Servicec = (props) => {
  useEffect
  (() => {
        AOS.init({duration:1200})
     })
  return (
    <div className='grid lg:grid-cols-3 group md:grid-cols-2 grid-cols-1 gap-6 lg:px-24 md:px-8 px-0 mb-4'>

    <div data-aos="fade-up" className='bg-white ease-in-out group-hover:blur-sm hover:!blur-none  dark:bg-opacity-40 dark:bg-green shadow-md hover:translate-y-3 duration-500 hover:border hover:border-green rounded-2xl lg:p-4 md:p-4 p-2'>
      <img src={image1} className='mb-2 w-full h-[35vh] object-cover rounded-t-2xl'/>
      <h1 className='text-2xl font-semibold text-green mb-2'>ICT Government & Strategy</h1>
      <p className='opacity-80 mb-4 text-sm dark:text-white'>The comprehensive approach governments take to leverage Information and Communication Technologies (ICT) to achieve their strategic objectives, improve public services, enhance governance, and drive national development....</p>
      <Link to={"/issg"}><Button label={"Read More"}/></Link>
    </div>

    <div data-aos="fade-up" className='bg-white ease-in-out group-hover:blur-sm hover:!blur-none  dark:bg-opacity-40 dark:bg-green shadow-md hover:translate-y-3 duration-500 hover:border hover:border-green rounded-2xl lg:p-4 md:p-4 p-2'>
      <img src={image2} className='mb-2 w-full h-[35vh] object-cover rounded-t-2xl'/>
      <h1 className='text-2xl font-semibold text-green mb-2'>Infrastructure Management & Oversight</h1>
      <p className='opacity-80 mb-4 text-sm dark:text-white'>the context of government refers to the systematic planning, development, operation, maintenance, and monitoring of a nation's or region's essential....</p>
     <Link to={"/imao"}><Button label={"Read More"}/></Link>
    </div>

    <div data-aos="fade-up" className='bg-white ease-in-out group-hover:blur-sm hover:!blur-none  dark:bg-opacity-40 dark:bg-green shadow-md hover:translate-y-3 duration-500 hover:border hover:border-green rounded-2xl lg:p-4 md:p-4 p-2'>
      <img src={image3} className='mb-2 w-full h-[35vh] object-cover rounded-t-2xl'/>
      <h1 className='text-2xl font-semibold text-green mb-2'>Needs Assessment & Procurement</h1>
      <p className='opacity-80 mb-4 text-sm dark:text-white'>interlinked phases in the lifecycle of any
      government project, especially those involving Information and Communication Technology....</p>
      <Link to={"/nap"}><Button label={"Read More"}/></Link>
    </div>

    </div>
  )
}

export default Servicec