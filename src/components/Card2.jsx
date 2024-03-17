import React from 'react'
import doct1 from '../assets/images/doctor.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Card2() {
  return (
    <div data-aos="fade-right" className="card w-80 h-64 bg-teal-700 shadow-xl text-white rounded-3xl">
    <figure className="px-10 pt-8">
      <img src={doct1} alt="doctor" className=" w-40 h-32" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">ALAN</h2>
      <p>35 Years Old</p>
    </div>
  </div>
  )
}

export default Card2