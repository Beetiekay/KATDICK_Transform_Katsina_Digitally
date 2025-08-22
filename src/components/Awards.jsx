import React from 'react'
import image1 from "../assets/Award1.png"
import image2 from "../assets/Award2.png"
import image3 from "../assets/dg+gov.jpg"


const Awards = () => {
  return (
    <div>
          <h1 className='lg:text-3xl dark:text-white md:text-3xl text-2xl text-center font-semibold mb-4'>OUR AWARDS</h1> 
          <div className='flex justify-center mb-10 lg:px-0 md:px-0 px-5'><p className=' dark:text-white text-sm lg:text-center md:text-center text-start  mb-2'>OUR <span className='text-green'> AWARDS-WINNINGS</span> JOURNEY</p> </div>
                 
          <div className='grid lg:grid-cols-2 md:grid-cols-2 mb-10 lg:border-none border-2 rounded-3xl border-green lg:px-32 md:px-24 px-2 py-4 grid-cols-1'>
          <div>
                <button className='relative lg:top-0 md:-top-8  -top-10 lg:left-0 md:left-0 left-28 lg:hidden flex text-white font-semibold text-xl bg-green rounded-t-2xl p-3'>2024</button>
                <img src={image1} className='lg:w-[80%] md:w-[85%] w-full'/>
              </div>

              <div className=''>
                <h1 className='text-green font-semibold text-lg mb-1 mt-28'>Major Recognition for Katsina's
                 Digital Transformation Efforts:
                 Naufal Ahmad Wins IDGA Impact Award
                 </h1>
                <p className='lg:text-sm md:text-sm text-xs dark:text-gray'>
                 It's a proud day for Katsina State! Naufal Ahmad, Director General of KATDICT, has been awarded the distinguished IDGA Impact Award for his remarkable contributions to SDG 9: Industry, Innovation, and Infrastructure. This well-deserved award highlights his inspiring leadership and the incredible commitment of the @katdict team in driving innovation and reinforcing Katsina's tech sector. Their ambition is clear: to build an innovation-powered future and firmly establish Katsina as a leader in the realm of digital.
                </p>
              </div>
          </div>


          <div className='grid lg:grid-cols-2 md:grid-cols-2 mb-6 lg:border-none border-2 rounded-3xl border-green lg:px-32 md:px-24 px-2 py-4 grid-cols-1'>
              <div>
                <button className='relative lg:top-0 md:-top-8  -top-10 lg:left-0 md:left-0  left-28 lg:hidden flex text-white font-semibold text-xl bg-green rounded-t-2xl p-3'>2025</button>
                <img src={image2} className='lg:w-[80%] md:w-[85%] w-full'/>
              </div>

              <div className=''>
                <h1 className='text-green font-semibold text-lg mb-1 mt-28'>
                  Powering Katsina's Digital
                  Future: KATDICT at the
                  Forefront of NBAN Launch
                 </h1>
                <p className='lg:text-sm md:text-sm text-xs dark:text-gray mb-4'>
                   It's an honor for KATDICT to be a part of the momentous launch of the National Broadband Alliance for Nigeria (NBAN)! This game-changing program is a joint effort by the Federal Ministry of Communications, Innovation, and Digital Economy, led by Dr. Bosun Tijani, and the Nigerian Communications Commission (NCC), under Dr. Aminu Maida.
                </p>
                
                <p className='lg:text-sm md:text-sm text-xs dark:text-gray'>
                   This initiative is a perfect fit for Katsina vision, emphasizing how essential broadband connectivity is for boosting economic growth, improving digital governance, and fostering innovation. As we work to expand digital infrastructure throughout Katsina State, we're building a future where technology empowers everyone Governor Dikko Umar Radda's SMART to thrive.
                </p>

              </div>
          </div>
          <div className='flex justify-end lg:px-36 md:px-4 px-2'><img src={image3} className='lg:w-[40%] md:w-[100%] h-[50vh] object-cover rounded-lg'/></div>
    </div>
  )
}

export default Awards