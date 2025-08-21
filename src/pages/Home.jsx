import React from 'react'
import Student from '../components/Student'
import me from "../assets/me.jpg"

const Home = () => {
  return (
    <div className='grid grid-cols-2 gap-5 px-48 py-8'>
        <Student image={me} btn="Confirm" cancel="cancel"  name="Bishir" age={15} isStudent={true}/>
        <Student image={me} btn="Confirm" cancel="cancel"   name="Adam" age={25} isStudent={false}/>
    </div>
  )
}

export default Home