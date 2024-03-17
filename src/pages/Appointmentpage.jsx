import React from 'react'
import Navbar from '../components/Navbar'
import AppointmentCard from '../components/AppointmentCard'
import Footer from '../components/Footer'

function Appointmentpage() {
  return (
   <>
   <Navbar/>
   <div className='rounded-full z-[2] w-96 h-96 ml-60 mt-20 bg-teal-100'></div>
   <div className='z-[3] -mt-96'>
   <div className='flex flex-col justify-center items-center p-20'>
      <span className={`text-2xl font-semibold text-teal-700 py-2`}>Book Your Appointment</span>
      <span className={`text-lg font-bold text-slate-400 py-1`}>Great doctor if you need your family member to get effective immediate</span>
      <span className={`text-lg font-bold text-slate-400 py-1`}>assistance,emergency treatment or a simple consulation.</span>
      <div className="divider invisible"></div> 
      <AppointmentCard/>
    </div>
    </div>
    <Footer/>
   </>
  )
}

export default Appointmentpage
