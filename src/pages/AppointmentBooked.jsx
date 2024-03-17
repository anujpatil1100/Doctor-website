import React from 'react'
import Background1 from '../components/Background1'
import Navbar from '../components/Navbar'
import { BsPatchCheckFill } from "react-icons/bs";
import Card3 from '../components/Card3';
import Footer from '../components/Footer';

function AppointmentBooked() {
  return (
    <>
    <div className='relative h-full'>
        <Background1/>
      <div className='absolute w-full z-[3] top-0'>
      <Navbar/>
      </div>
      <div className='flex flex-col w-full justify-center items-center top-32 absolute z-[3]'>
        <BsPatchCheckFill className=' text-green-500 text-9xl'/>
      <span className={`text-2xl font-bold text-teal-700 py-2`}>Your Appointment Booked Succesfully</span>
      <div className="divider invisible"></div>
      <Card3/>
      <div className='divider invisible'></div>
      <div className='divider invisible'></div>
      <div className='divider invisible'></div>
      <Footer/>
    </div>
    </div>
    {/* <div className='bottom-0 w-full absolute z-[3]'>
    <Footer/>
    </div> */}
    </>
  )
}

export default AppointmentBooked
