import React from 'react'

function Background1() {
  return (
    <div  className='w-full h-screen relative z-[2]'>
       <div className='right-0 -top-24 absolute'>
       <div className='rounded-full w-80 h-80 bg-teal-100'></div>
        </div>

        <div className='absolute top-52 left-80'>
       <div className='rounded-full w-80 h-80 bg-teal-100'></div>
        </div>

        <div className='absolute -bottom-80 right-60'>
       <div className='rounded-full w-80 h-80 bg-teal-100'></div>
        </div>
    </div>
  )
}

export default Background1