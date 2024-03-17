import React from 'react'
import img from '../assets/images/doctor2.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaMapMarkerAlt } from "react-icons/fa";

function Card3() {
  return (
    <div data-aos="slide-up" className='w-1/2 container h-full bg-base-100 border-2 border-slate-300 border-solid flex rounded-lg flex-col gap-10 justify-center items-center'>
     <div className='flex flex-row p-2 gap-14'>
        <img src={img} className='w-32 h-40 rounded-xl'/>
        <div className='flex flex-col p-4'>
            <span className='text-2xl font-bold text-black'>Dr John</span>
            <span className='text-sm font-semibold text-slate-400 py-2'>Eye Care</span>
            <span className='text-sm font-semibold text-slate-400 flex flex-row gap-2'>Newyork, USA <FaMapMarkerAlt className='mt-1'/></span>
        </div>
     </div>
    <div className='flex flex-col '>
        <div className='flex flex-row gap-36 p-2'>
        <span className='text-2xl font-semibold text-black'>Booking Date:</span>
        <span className='text-2xl font-bold text-slate-400'>Sun, 30 Apr 2024</span>
        </div>
        <div className='flex flex-row gap-36 p-2'>
        <span className='text-2xl font-semibold text-black'>Booking Time:</span>
        <span className='text-2xl font-bold text-slate-400'>10:00AM to 11:00 AM</span>
        </div>
        <div className='flex flex-row gap-16 p-2'>
        <span className='text-2xl font-semibold text-black'>Type of Consultation:</span>
        <span className='text-2xl font-bold text-slate-400'>Clinic Consulting</span>
        </div>
    </div>
    <div className='py-5'>
    <button className="btn bg-teal-700 text-white mr-3 flex justify-center text-sm rounded-xl px-5">Back To Home</button>
    </div>
    </div>

  )
}

export default Card3
