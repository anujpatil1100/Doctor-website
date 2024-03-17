import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";

function Info() {
  return (
    <div className='p-20 flex flex-col'>
      <span className='flex flex-row text-lg font-bold text-black gap-2'><CgProfile className='mt-1.5 text-teal-700'/>Gender <span className='text-lg font-bold text-slate-400 px-3 mb-8'>Male</span></span>
      <span className='flex flex-row text-lg font-bold text-black gap-2'><FaCalendarAlt className='mt-1.5 text-teal-700'/>DOB <span className='text-lg font-bold text-slate-400 px-3 mb-8'>24/02/1989</span></span>
      <span className='flex flex-row text-lg font-bold text-black gap-2'><IoMdPhonePortrait className='mt-1.5 text-teal-700'/>Phone No <span className='text-lg font-bold text-slate-400 px-3 mb-8'>00090 12345</span></span>
      <span className='flex flex-row text-lg font-bold text-black gap-2'><FaAddressCard className='mt-1.5 text-teal-700'/>Address  <span className='text-lg font-bold text-slate-400 px-3 mb-8'>Sydney, Australia</span></span>
      <span className='flex flex-row text-lg font-bold text-black gap-2'><GiWaterDrop className='mt-1.5 text-teal-700'/>Blood Group  <span className='text-lg font-bold text-slate-400 px-3 mb-8'>B<sup>+ve</sup></span></span>
    </div>
  )
}

export default Info
