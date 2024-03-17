import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaCalendarPlus } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import Modal from './Modal';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Updatingsetting() {
  return (
    <div data-aos="fade-left" className='flex flex-col justify-center items-center w-1/2'>
      <div className='flex flex-row justify-between items-center bg-teal-800 w-full h-12 text-xl rounded-xl text-white px-5 mb-10 cursor-pointer'>
       <span className='flex flex-row gap-3'><FaCalendarAlt className='mt-1'/> Appointments</span>
       <span className='flex flex-row gap-1'> |<FaAngleRight className='mt-1.5 text-xll'/></span>
      </div>
      <div className='flex flex-row justify-between items-center bg-teal-800 w-full h-12 text-xl rounded-xl text-white px-5 mb-10 cursor-pointer'>
       <span className='flex flex-row gap-3'><FaCalendarPlus className='mt-1'/> Saved Doctors</span>
       <span className='flex flex-row gap-1'> |<FaAngleRight className='mt-1.5 text-xll'/></span>
      </div>
      <div className='flex flex-row justify-between items-center bg-teal-800 w-full h-12 text-xl rounded-xl text-white px-5 mb-10 cursor-pointer'>
       <span className='flex flex-row gap-3'><FaCalendarPlus className='mt-1'/>Patient Health History</span>
       <span className='flex flex-row gap-1'> |<FaAngleRight className='mt-1.5 text-xll'/></span>
      </div>
      <Modal/>
    </div>
  )
}

export default Updatingsetting
