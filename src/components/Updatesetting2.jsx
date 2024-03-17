import React from 'react'
import Modal from './Modal';
import Aos from 'aos';
import 'aos/dist/aos.css'


function Updatesetting2() {
  return (
    <div data-aos="fade-left" className='flex flex-col justify-center items-center w-1/2'>
      <Modal/>
      <div className='flex flex-row justify-between items-center border-solid border-4 border-teal-700 w-full h-16 text-xl rounded-xl text-black px-5 mb-10 mt-10'>
       <span className='flex flex-col gap-1 font-bold'>Covid Test <span className='text-sm text-gray-500'>Dr Zeena</span></span>
       <span className='flex flex-row gap-1'>30 March</span>
      </div>

      <div className='flex flex-row justify-between items-center border-solid border-4 border-teal-700 w-full h-16 text-xl rounded-xl text-black px-5 mb-10'>
       <span className='flex flex-col gap-1 font-bold'>Dentist <span className='text-sm text-gray-500'>Dr Calvin Carlo</span></span>
       <span className='flex flex-row gap-1'>31 May</span>
      </div>
      <span className='text-lg text-teal-700 font-semibold cursor-pointer'>Appointment History</span>
    </div>
  )
}

export default Updatesetting2
