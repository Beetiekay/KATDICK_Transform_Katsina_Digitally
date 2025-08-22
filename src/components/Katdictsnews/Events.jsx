import React from 'react'
import arewa from "../../assets/arewa4.jpeg"
import alog from "../../assets/ArewaTech.png"
import {FaArrowDown, FaReadme} from "react-icons/fa"
import {RiPagesLine} from "react-icons/ri"
import Marquee from 'react-fast-marquee'
import image1 from "../../assets/arewa1.jpeg"
import image2 from "../../assets/arewa2.jpeg"
import image3 from "../../assets/arewa3.jpeg"
import image4 from "../../assets/arewa4.jpeg"
import image5 from "../../assets/arewa5.jpeg"
import image6 from "../../assets/arewa6.jpeg"
import image7 from "../../assets/arewa7.jpeg"
import image8 from "../../assets/arewa8.jpeg"


import tedx from "../../assets/tedxk.jpg"
import tedx1 from "../../assets/tedx1.jpg"
import tedx2 from "../../assets/tedx2.jpg"
import tedx3 from "../../assets/tedx3.jpg"
import tedx4 from "../../assets/tedx4.jpg"
import log1 from "../../assets/logox1.png"
import log2 from "../../assets/logox2.png"

const Events = () => {
  return (
   <div className='px-2 dark:bg-black bg-whitegray rounded-lg overflow-x-hidden'>
    <div className='lg:w-5 w-3 lg:h-[55vh] md:h-[50vh] h-[60vh] lg:right-6 md:right-5 right-3 bg-whitegray dark:bg-black absolute z-20'></div>
    <div data-aos="zoom-in" className='w-[100%] lg:h-[55vh] md:h-[50vh] h-[70vh] overflow-y-auto rounded-lg dark:bg-black bg-whitegray  p-2'>
     
       {/* Arewa Tech Fest */}
       <div className='relative lg:mb-20 md:mb-16 mb-28'>
       <div className='lg:flex md:flex block relative py-1'>
        <input type='checkbox' className='lg:w-44 md:w-44 w-16 lg:h-10 md:h-20 h-24 opacity-0 absolute z-10 lg:top-52 md:top-[16rem] top-48 lg:left-[9rem] md:left-[5.6rem] right-2 peer cursor-pointer transition-transform'/>
        <div className='h-[45vh] lg:w-[44%] md:w-[44%] w-[100%] rounded-xl overflow-x-hidden bg-whitegray dark:bg-black'>
          <div ><img src={arewa} className='w-[100%] h-[25vh] object-cover'/></div>
          <div className='flex justify-between items-center px-2'>
             <div><img src={alog} className='w-32'/> </div>
             <div><button className='bg-green p-2 text-whitegray rounded-3xl outline-none'><FaReadme size={25}/></button></div>
          </div>
        </div>
         
         <div className='w-[100%] overflow-hidden lg:block md:block hidden lg:peer-checked:hidden md:peer-checked:hidden peer-checked:block relative'>
          <div className='h-[50vh] w-5 z-20 flex items-center bg-whitegray dark:bg-black absolute right-0'><FaArrowDown className='dark:text-green animate-bounce lg:flex md:flex hidden'/></div>
         <div className='w-[100%] lg:h-[50vh] md:h-[41vh] h-fit px-2  rounded-b-md  lg:overflow-y-auto md:overflow-y-auto overflow-visible'>
              <div className='lg:flex md:block block items-center lg:px-0 md:px-0 px-2 lg:mb-0 md:mb-2 mb-0'>
                <img src={alog} className='w-44 lg:flex md:flex hidden'/>
                <div>
                  <p className='dark:text-white dark:opacity-70 text-xs'>The Arewa Tech Fest held its second gathering on May 20th - 22nd, 2025. This annual festival, designed to inspire and drive tech-centric growth in the region, take place at the Continental Event Centre Katsina.</p>
                </div>
              </div>

             <Marquee className='px-2 mb-4 lg:mt-0 md:mt-0 mt-4'>
             <img src={image1} className='w-40'/>
             <img src={image2} className='w-40'/>
             <img src={image3} className='w-40'/>
             <img src={image4} className='w-40'/>
             <img src={image5} className='w-40'/>
             <img src={image6} className='w-40'/>
             <img src={image7} className='w-40'/>
             <img src={image8} className='w-40'/>
             </Marquee>

             <div className='flex justify-center mb-4'>
               <div className=' bg-black dark:bg-green overflow-hidden rounded-lg'>
                 <img src={image7}  className='mb-1'/>
                 <p className='px-2 text-xs dark:text-white text-white mb-2'>On May 21, 2025, was honored by the presence of His Excellency Governor Dikko Umar Radda.</p>
               </div>
            </div> 

           <h2 className='text-xl mb-2 font-semibold text-green'>Arewa Tech Fest</h2>
           <h1 className='text-xs dark:text-white dark:opacity-80 mb-3'>Arewa Tech Fest is a significant initiative aimed at fostering the development of technological entrepreneurship in Northern Nigeria. It's more than just a conference; it's a movement to catalyze a    vibrant tech ecosystem in a region often underserved in the national tech landscape.
           </h1>
            

           <p className='font-semibold dark:text-green text-sm mb-2'>Core Mission and Goals:</p>

           <p className='text-sm dark:text-white mb-2'>
            <span className='text-green font-bold'>1. Inspiring Innovation and Promoting Tech-Driven Growth:</span>
              The fundamental goal is to spark creativity and encourage the adoption of technology to drive economic development across Northern Nigeria.
           </p>

           <p className='text-sm dark:text-white mb-2'>
            <span className='text-green font-bold'>2. Connecting Innovators, Entrepreneurs, Investors, and Industry Leaders:</span>
              It serves as a crucial platform to bring together diverse stakeholders, facilitating networking, collaboration, and knowledge sharing within the tech community.
           </p>

           <p className='text-sm dark:text-white mb-2'>
            <span className='text-green font-bold'>3. Empowering the Next Generation of Tech Talent: </span>
              A key focus is on nurturing and equipping young individuals with the skills and resources needed to thrive in the rapidly evolving digital world, particularly women and youth.
           </p>

            <p className='text-sm dark:text-white mb-2'>
            <span className='text-green font-bold'>4. Bridging the Gap Between Tradition and Modern Technology: </span>
              Arewa Tech Fest aims to integrate technological advancements with the unique cultural and socio-economic context of Northern Nigeria.
            </p>

            <p className='text-sm dark:text-white mb-3'>
            <span className='text-green font-bold'>5. Driving Digital Transformation and Economic Empowerment:  </span>
               Ultimately, the festival seeks to contribute to a broader mission of digital transformation and economic empowerment for the entire region.
            </p>

            <p className='font-semibold dark:text-green text-sm mb-2'>Key Initiatives and Activities:</p>
              
             <p className='text-sm dark:text-white mb-2'>
             <span className='text-green font-bold'>1. Annual Events: </span>
                Arewa Tech Fest is an annual gathering, typically held over several days, featuring a dynamic lineup of activities.
             </p>

             <p className='text-sm dark:text-white mb-2'>
             <span className='text-green font-bold'>2. Keynote Speeches and Panel Sessions: </span>
               Renowned national and international tech leaders, policymakers, and industry experts share insights on emerging technologies, startup financing, and the future of tech.
             </p>

             <p className='text-sm dark:text-white mb-2'>
             <span className='text-green font-bold'>3. Workshops and Masterclasses: </span>
                Practical, hands-on sessions provide participants with valuable skills and knowledge in various tech domains.
             </p>

             <p className='text-sm dark:text-white mb-2'>
             <span className='text-green font-bold'>4. Networking Opportunities: </span>
                The festival prioritizes creating an environment where attendees can connect with mentors, investors, and potential collaborators.
             </p>

             <p className='text-sm dark:text-white mb-2'>
             <span className='text-green font-bold'>5. Hackathons: </span>
                These competitive events challenge participants to develop innovative solutions to local problems, fostering creativity and problem-solving skills.
             </p>
             <div className=' w-10 h-20'></div>
         </div>
         </div>

       </div>
       </div>
       {/* Arewa Tech Fest */}
      

         {/* break-line */}
         <div className='mb-8'>
        <div className='lg:px-6 md:px-6 px-14'><hr className='text-gray dark:opacity-60'/></div>
        <div className='lg:flex md:flex block justify-between relative -top-4 px-4'>
          <button className='bg-green outline-none  p-2'><RiPagesLine className='text-gray text-2xl'/></button>
          <h1 className='text-gray lg:w-fit md:w-fit w-[14%] dark:border-2 dark:border-black bg-green p-2 font-bold scale-150'>1</h1>
        </div>
         </div>
         {/* break-line */}


        {/* Tedx kangiwa */}
        <div className='relative lg:mb-20 md:mb-16 mb-28'>
       <div className='lg:flex md:flex block relative py-1'>
        <input type='checkbox' className='lg:w-44 md:w-44 w-16 lg:h-10 md:h-20 h-24 opacity-0 absolute z-10 lg:top-52 md:top-[16rem] top-48 lg:left-[9rem] md:left-[5.6rem] right-2 peer cursor-pointer transition-transform'/>
        <div className='h-[45vh] lg:w-[44%] md:w-[44%] w-[100%] rounded-xl overflow-x-hidden bg-whitegray dark:bg-black'>
          <div ><img src={tedx} className='w-[100%] h-[25vh] object-cover'/></div>
          <div className='flex justify-between items-center px-2'>
             <div className='hidden dark:flex'><img src={log1} className='w-32'/> </div>
             <div className='dark:hidden'><img src={log2} className='w-32'/> </div>
             <div><button className='bg-green p-2 text-whitegray rounded-3xl outline-none'><FaReadme size={25}/></button></div>
          </div>
        </div>
         
         <div className='w-[100%] overflow-hidden lg:block md:block hidden lg:peer-checked:hidden md:peer-checked:hidden peer-checked:block  relative'>
          <div className='h-[50vh] w-5 z-20 flex items-center bg-whitegray dark:bg-black absolute right-0'><FaArrowDown className='dark:text-green animate-bounce lg:flex md:flex hidden'/></div>
          
         <div className='w-[100%] lg:h-[50vh] md:h-[41vh] h-fit px-2 rounded-b-md  lg:overflow-y-auto md:overflow-y-auto overflow-visible'>
              <div className='lg:flex md:block block items-center lg:px-0 md:px-0 px-2 lg:mb-0 md:mb-2 mb-0'>
                <div className='lg:flex md:flex hidden'><img src={log1} className='w-44 hidden dark:flex lg:hidden md:flex'/></div>
                <img src={log2} className='w-44 dark:hidden lg:flex md:flex hidden'/>
                <div>
                  <p className='dark:text-white dark:opacity-70 text-xs'>
                    Imaging a wall where every wall is a brigde, A world where ideas flow unhindered,
                    cultures converge, and knowledge  ignites transformation.
                  </p>
                </div>
              </div>

             <Marquee className='px-2 mb-4 lg:mt-0 md:mt-0 mt-4'>
             <img src={tedx1} className='w-40'/>
             <img src={tedx2} className='w-40'/>
             <img src={tedx3} className='w-40'/>
             <img src={tedx4} className='w-40'/>
             </Marquee>

             

           <h2 className='text-xl mb-2 font-bold text-green dark:text-gray'>TEDxKangiwa 2025</h2>
          
           <p className='text-xs  dark:text-gray  mb-2'>
            TEDxKangiwa is an independently organized TED event held in Katsina, Nigeria. Like all TEDx events, it operates under a license from TED and aims to bring people together to share a TED-like experience, featuring a combination of TEDTalks videos and live speakers. The goal is to spark deep discussion and connection, amplifying local voices and ideas.
           </p>

            <img src={tedx3}  className='w-full mb-4 h-52 object-cover dark:bg-whitegray border dark:border-green rounded-lg'/>
              
           <p className='font-semibold dark:text-green lg:text-lg md:text-lg text-sm mb-2'>Key Information about TEDxKangiwa:</p>

           <p className='text-xs dark:text-white mb-2'>
            1. Mission: To create a platform for intellectual exchange, innovation, and storytelling in Katsina, highlighting voices that shape the future of the community.
           </p>

           <p className='text-xs dark:text-white mb-2'>
            2. Focus: It is a movement to celebrate the resilience, creativity, and potential of Katsina, aiming to build a stronger, more connected future.
           </p>

           <p className='text-xs dark:text-white mb-2'>
            3. Past Events: TEDxKangiwa has hosted events in the past, featuring speakers from diverse backgrounds sharing ideas on how society can address problems with new solutions. Past speakers have included innovators in technology and education.
           </p>

             <div className=' w-10 h-20'></div>
         </div>
         </div>

       </div>
        </div>
        {/* Tedx kangiwa */}
        

         {/* break-line */}
         <div className='mb-8'>
        <div className='lg:px-6 md:px-6 px-14'><hr className='text-gray dark:opacity-60'/></div>
        <div className='lg:flex md:flex block justify-between relative -top-4 px-4'>
          <button className='bg-green outline-none  p-2'><RiPagesLine className='text-gray text-2xl'/></button>
          <h1 className='text-gray lg:w-fit md:w-fit w-[14%] dark:border-2 dark:border-black bg-green p-2 font-bold scale-150'>2</h1>
        </div>
         </div>
         {/* break-line */}


      <div className='w-8 h-10'></div>
    </div>
  </div>
  )
}

export default Events