import React from 'react';
import dg from "../../assets/naufal.jpeg";
import kt from "../../Favicon/fav.png";
import { FaArrowRight} from "react-icons/fa"

const  KatdictN = () => {
  return (
    <div data-aos="zoom-in" className='p-2 flex lg:justify-start md:justify-start justify-center w-[100%]  h-[55vh] px-2 py-4 rounded-lg bg-whitegray dark:bg-black'>
      <div className='lg:w-10 md:w-7 w-5 h-[52vh] bg-whitegray z-50 dark:bg-black absolute lg:right-1 md:right-0 right-0'></div>
      <div className='overflow-y-auto'> 
       
        {/* book 1 */}
        <div className='lg:flex md:flex block relative lg:mb-6 md:mb-8 mb-4 border-b border-green py-2'>
          <input type='checkbox' className='absolute z-20 opacity-0 lg:left-24 md:left-10 left-16 lg:top-[15rem] md:top-[23.7rem] top-[15.9rem] peer lg:w-14 md:w-36 w-24 lg:h-6 md:h-14 h-11 transition-transform cursor-pointer'/>
        <div className='relative lg:mb-0 md:mb-0 mb-4'>
          <img src={dg} className='absolute lg:w-44 md:w-72 w-52 h-[40vh] object-cover rounded-lg'/>
          <div className='relative lg:w-44 md:w-[100%] w-52 border-2 border-green h-[40vh] overflow-hidden dark:bg-black dark:bg-opacity-55 bg-white bg-opacity-70 duration-700 shadow-md rounded-lg'>
              <h1 className='font-semibold text-center mb-6 bg-whitegray dark:bg-black dark:text-white text-green'>DG'S Message</h1>
              <h2 className='lg:text-lg md:text-lg text-xl text-green font-semibold px-2'>When Dreamers Are <span className='font-bold dark:text-white text-black'>Criminalized</span></h2>
              <div className='w-[100%] lg:flex md:block lg:items-end absolute bottom-0'>
                 <div className='lg:mb-0 md:mb-0 mb-14 flex lg:justify-normal md:justify-center justify-center'><img src={kt} className='lg:w-20 md:w-[64%] w-24 lg:mt-0 md:mt-28'/></div>
                 <button className='bg-green flex justify-center text-xs outline-none rounded-t-lg text-white py-2 w-full'><FaArrowRight size={20}/></button>
              </div>
             <div>
             </div>
          </div>
        </div>


         <div className='w-fit lg:peer-checked:w-0 md:peer-checked:w-0 peer-checked:hidden block  duration-500 overflow-y-scroll lg:h-[50vh] md:h-[40vh] h-fit'>
           
           <h1 className='lg:text-sm md:text-sm text-xs  px-4 mb-2 dark:text-white'>When Dreamers Are Criminalized - <span className='text-green'>By Naufal Ahmad, DG, KATDICT</span></h1>
           <p className='text-xs opacity-80 dark:text-white px-4 mb-4'>
             Mob Culture, Cynicism, and the Crisis of Constructive Intelligence in Northern Nigeria
           </p>

           <p className='text-xs  dark:text-white px-4 mb-4'>By naufal Ahmad</p>

           <p className='text-xs  dark:text-white px-4 mb-4'>
             I have spent my entire adult life inside and around politics. Before I was even eligible to vote, I was walking door to door in Katsina, volunteering for APP, ANPP, CPC the opposition parties of that time. We didn’t have data or money, but we had belief. I’ve shouted party slogans in the sun, carried chairs for campaign events, and sat on plastic stools to explain manifestos to strangers.
           </p>

           <p className='text-xs  dark:text-white px-4 mb-4'>
             Years later, I’d find myself in campaign strategy meetings, sitting on committees, advising governors, leading call centres, manning election situation rooms and eventually, by Allah’s grace, leading a government agency and sitting in the Executive Council of Katsina State
           </p>

           <p className='text-xs  dark:text-white px-4 mb-4'>
             I have seen power from every angle: from the ground to the top. And one thing I’ve learned is this leadership is far more delicate, more complex, and more costly than most people realize. Especially when you’re genuinely trying to do right.
           </p>

           <p className='text-xs  dark:text-white px-4 mb-4'>
             Leadership Is Declining Not Because We Don’t Have Leaders, But Because We’re Losing the Builders
           </p>

           <p className='text-xs  dark:text-white px-4 mb-4'>      
            Northern Nigeria is not short on brilliant people. We have them in our schools, our streets,
            people are no longer stepping up to lead. Why? Because they've seen what happens to those who try
           </p>

           <p className='text-xs  dark:text-white px-4 mb-4'>      
            When I was younger, I thought leadership was the highest form of service. I still believe that, but now I also know it can be the fastest way to become a target. The good ones get mocked. The careful ones get sabotaged. The dreamers get criminalized.
           </p>
             
             <h1 className='lg:text-lg md:text-lg text-sm font-semibold mb-2 text-green px-4'>Mob Culture Is Killing Public Spirit</h1>
             
             <p className='text-xs  dark:text-white px-4 mb-4'>      
               This is what I call the rise of Mob Culture : a social dynamic where intelligent discourse is hijacked by cynical takedowns. It’s not just the uninformed anymore. Some of our brightest minds are now lending their voices to the chorus of public ridicule, often not realizing that they are tearing down the very same people they once prayed for.
             </p>
               
               <mark className='text-xs px-4 py-1  ml-4'>Let me give you an example.</mark>

               <p className='text-xs mt-2 dark:text-white px-4 mb-4'>      
                In my agency, we’ve hosted town halls and stakeholder sessions to build in the open. We said: come, hear our plans, challenge us, contribute. And people came, smart people. But instead of engaging the ideas or offering better ones, they came with sneers, sarcasm, and superiority.
               </p>

               <p className='text-xs  dark:text-white px-4 mb-4'>      
                 They didn’t show up to improve things, they came to perform their cynicism.
               </p>

               <p className='text-xs  dark:text-white px-4 mb-4'>      
                 As a public servant, it’s disheartening. You open the door, not to applause or critique, but to ridicule. And this is the exact reason why many others in public service shut their doors entirely.

                 But not me.
               </p>

               <p className='text-xs  dark:text-white px-4 mb-4'>      
                 The Weight of Cultural Conservatism
               </p>

               <p className='text-xs  dark:text-white px-4 mb-4'>      
                 Another layer is cultural. In the North, we carry our traditions with pride, and rightly so. But sometimes, that pride turns into resistance. Anything new is seen as arrogance. If you communicate differently, use technology, or reach the people directly, you’re branded as “too much,” or dismissed as a “media leader.”
               </p>

               <p className='text-xs  dark:text-white px-4 mb-4'>      
                 Meanwhile, those doing nothing remain unquestioned.
               </p>

               <p className='text-xs  dark:text-white px-4 mb-4'>      
                 This attitude has blocked so many innovations before they even had the chance to start. It’s a kind of cultural self-sabotage. We are suspicious of our own possibilities.
               </p>

               <h1 className='lg:text-lg md:text-lg text-sm font-semibold mb-2 text-green px-4'>Why Are We Glorifying the Critics Who Risk Nothing?</h1>

               <p className='text-xs  dark:text-white px-4 mb-4'>      
                 There’s a trend I’ve watched with quiet concern: we are beginning to worship fault-finders. People who’ve never led a thing, never built a block, never contested a position, never raised a hand to help, yet they dominate our discourse.
               </p>

               <p className='text-xs  dark:text-white px-4 mb-4'>      
                 They are witty, sarcastic, loud. They get retweets. They sound smart. But they are not building anything.
               </p>

               <p className='text-xs  dark:text-white px-4 mb-4'>      
                  Meanwhile, the people showing up to work, sweating through bureaucracy, pushing policies, navigating real limitations, they are dismissed with a tweet or a meme.
               </p>

               <p className='text-xs  dark:text-white px-4 mb-4'>      
                 This is not criticism. It is sabotage.
               </p>
                <h1 className='lg:text-lg md:text-lg text-sm font-semibold mb-2 text-green px-4'>What Nigeria & the North Urgently Needs</h1>

               <p className='text-xs  dark:text-white px-4 mb-4'>      
                 We need a new ethic of engagement. I’m not saying don’t question leaders. I’ve been an internal critic for most of my public life. I’ve challenged decisions, rejected bad policy, and insisted on integrity even when it cost me political currency. Criticism is necessary, but only when it is done in the spirit of construction, not destruction.
               </p>

               <p className='text-xs  dark:text-white px-4 mb-4'>      
                 What we need is constructive intelligence:
               </p>

               <p className='text-xs  dark:text-white px-4 mb-2'> • People who question, but also propose. </p>
               <p className='text-xs  dark:text-white px-4 mb-2'> • People who critique, but also commit.</p>
               <p className='text-xs  dark:text-white px-4 mb-4'> • People who dare to join the mess, not just comment from the sidelines.</p>

               <p className='text-xs  dark:text-white px-4 mb-4'>And above all, we need to protect the few trying to build, not throw stones at them simply because they dared to step forward. </p>

               <p className='text-xs  dark:text-white px-4 mb-4'> An Open Appeal to the Intelligent and Sincere</p>
               <p className='text-xs  dark:text-white px-4 mb-4'> If you’re reading this, and you are one of the brilliant ones, the capable ones, the opinionated but honest ones, I am begging you:</p>

               <p className='text-xs  dark:text-white px-4 mb-4'> 
                Don’t join the mob. Don’t let your voice be weaponized against your own values. Don’t eat from the table of cynicism when you could be helping set the table of reform.
               </p>

               <p className='text-xs  dark:text-white px-4 mb-4'>
                This country is hard. Northern Nigeria is even harder. But some of us are still trying. Let us not be few. Let us be more. Let us build
               </p>
               <p className='text-xs  dark:text-white px-4 mb-4'> Even if we fail, let it be said that we tried.</p>
         </div>
        </div>
        {/* book 1 */}

         {/* book 2 */}
        <div className='lg:flex md:flex block relative lg:mb-6 md:mb-8 mb-4 border-b border-green py-2'>
          <input type='checkbox' className='absolute z-20 opacity-0 lg:left-24 md:left-10 left-16 lg:top-[15rem] md:top-[23.7rem] top-[15.9rem] peer lg:w-14 md:w-36 w-24 lg:h-6 md:h-14 h-11 transition-transform cursor-pointer'/>
        <div className='relative lg:mb-0 md:mb-0 mb-4'>
          <img src={dg} className='absolute lg:w-44 md:w-72 w-52 h-[40vh] object-cover rounded-lg'/>
          <div className='relative lg:w-44 md:w-[100%] w-52 border-2 border-green h-[40vh] overflow-hidden dark:bg-black dark:bg-opacity-55 bg-white bg-opacity-70 duration-700 shadow-md rounded-lg'>
              <h1 className='font-semibold text-center mb-6 bg-whitegray dark:bg-black dark:text-white text-green'>DG'S Read</h1>
              <h2 className='lg:text-lg md:text-lg text-xl text-green font-semibold px-2'>THE TECHNOLOGY <span className='font-bold dark:text-white text-black'>FALLACY</span></h2>
              <div className='w-[100%] lg:flex md:block lg:items-end absolute bottom-0'>
                 <div className='lg:mb-0 md:mb-0 mb-14 flex lg:justify-normal md:justify-center justify-center'><img src={kt} className='lg:w-20 md:w-[64%] w-24 lg:mt-0 md:mt-28'/></div>
                 <button className='bg-green flex justify-center text-xs outline-none rounded-t-lg text-white py-2 w-full'><FaArrowRight size={20}/></button>
              </div>
             <div>
             </div>
          </div>
        </div>


         <div className='w-[100%] lg:peer-checked:w-0 md:peer-checked:w-[0%] peer-checked:hidden block  duration-500 overflow-y-scroll lg:h-[50vh] md:h-[40vh] h-fit'>
           <h1 className='lg:text-lg md:text-lg text-sm font-semibold px-4 mb-2 text-green'>ON DIGITAL TRANSFORMATION</h1>
           <p className='text-xs dark:text-white px-4 mb-4'>
            Digital is best about technology and more about people. successful digital transformation requires changes in organizational culture and processes as much as, if not more than, the implementation of new technologies.
           </p>
           <h1 className='lg:text-lg md:text-lg text-sm font-semibold px-4 mb-2 text-green'>ON ORGANIZATION CHANGE</h1>
           <p className='text-xs  dark:text-white px-4 mb-4'>
            Organizations that embrace digital transformation must develop a culture of continuous learning and adaptability.Leaders must focus on fostering a digital mindset within their organizations, encouraging experimentation, and learning from failures.
           </p>
           <h1 className='lg:text-lg md:text-lg text-sm font-semibold px-4 mb-2 text-green'>ON LEADERDHIP</h1>
           <p className='text-xs  dark:text-white px-4 mb-4'>
            Effective digital leaders are those who can create a vision for the future and communicate it clearly to their teams. Leaders should empowers their employees to innovate and take risk , creating an environmentation is valued and supported.
           </p>
           <h1 className='lg:text-lg md:text-lg text-sm font-semibold px-4 mb-2 text-green'>ON EMPLOYEE ENGAGEMENT</h1>
           <p className='text-xs  dark:text-white px-4 mb-4'>
            Effective digital leaders are those who can create a vision for the future and communicate it clearly to their teams. Leaders should empowers their employees to innovate and take risk , creating an environmentation is valued and supported.
           </p>
         </div>
        </div>
        {/* book 2 */}
      </div>

    </div>
  )
}

export default KatdictN