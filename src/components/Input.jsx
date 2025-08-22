import React from 'react'

const Input = ({...props}) => {
  return (
    <div>
        <input {...props} className='w-[100%] outline-none lg:py-1 md:py-1 py-2'/>
    </div>
  )
}

export default Input