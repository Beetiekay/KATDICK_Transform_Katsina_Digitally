import React from 'react'

const Student = (props) => {
  return (
    <div className='py-8 px-10 bg-gray bg-opacity-15 mb-2 rounded-2xl hover:scale-90 duration-700'>
      <img src={props.image} className='w-[30%] rounded-xl'/>
      <p className='text-xl font-semibold '>Name: <span className='font-normal text-green'>{props.name}</span></p>
      <p className='text-lg font-semibold '>Age: <span className='font-normal text-green'>{props.age}</span></p>
      <p className='text-lg font-semibold mb-2'>Is That Guy A Student: <span className='font-normal text-green'>{props.isStudent ? "Yes" : "No"}</span></p>
      <button className='p-2 px-6 rounded-md bg-green text-whitesmoke'>{props.btn}</button>
      {!props.available && <button className='p-2 px-6 rounded-md bg-redish text-whitesmoke ml-2'>{props.cancel}</button>}
    </div>
  )
}

export default Student