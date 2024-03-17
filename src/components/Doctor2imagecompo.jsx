import React, { useEffect } from 'react'
import '../App.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import img from '../assets/images/Doctor-women2.png'

function Doctor2imagecompo() {
  useEffect(()=>{
    Aos.init({duration:1200})
  },[])
  return (
    <div data-aos="fade-left" className='relative flex justify-start items-center p-32 inset-x-10 w-4/6 h-full overflow-hidden'>
      <div className='poly bg-teal-700 -ml-24 shadow-xl shadow-green-400 rounded-full'></div>
      <div className='absolute h-full w-1/2 flex overflow-y-hidden'>
        <img src={img} className='w-full h-4/5'/>
      </div>
    </div>
  )
}

export default Doctor2imagecompo
