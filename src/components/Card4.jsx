import React, { useEffect } from 'react'
import { FiArrowDownRight } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css';

function Card4() {
  useEffect(()=>{
    Aos.init({duration:1200});
  })
  return (
    <div data-aos="fade-right" className='flex justify-center items-center flex-col p-12 shadow-2xl w-4/6 gap-2'>
      <span className='text-2xl font-semibold text-teal-700'>Let's Find Your Perfect Doctor</span>
      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-lg">Appointment Type</span>
  </div>
  <select className="select select-bordered w-5/6 select-sm max-w-xs shadow-2xl">
  <option disabled selected>All Type</option>
  <option>Nurologist</option>
  <option>Cardiologist</option>
  <option>Dermatologist</option>
</select>
</label>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-lg">Patient Name</span>
  </div>
  <input type="text" placeholder="Enter patient name" className="input input-bordered input-sm w-5/6 max-w-xs shadow-xl" />
</label>
<div className='divider invisible'></div>
<button className="btn flex-row w-40 bg-teal-700 text-white h-10" >Booking Now <FiArrowDownRight className='mt-1 text-xl'/></button>
    </div>
  )
}

export default Card4
