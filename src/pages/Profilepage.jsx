import React from 'react'
import Navbar from '../components/Navbar'
import Background1 from '../components/Background1'
import { FaArrowLeft } from "react-icons/fa";
import Card2 from '../components/Card2';
import Updatingsetting from '../components/Updatingsetting';
import Info from '../components/Info';
import Footer from '../components/Footer';
function Profilepage() {
  return (
   <>
  <div className='z-[3] w-full h-svh top-0 left-0'>
  <Navbar/>
  <div className='p-14'>
  <span className={`text-3xl  text-teal-700 font-bold flex flex-row justify-normal gap-2`}><FaArrowLeft className='mt-1'/> User Profile</span>
  </div>
  <div className='rounded-full z-[10] -ml-40 w-80 h-80 -mt-24 bg-teal-100'></div>
  <div className='p-8 z-[20] flex flex-row justify-between -mt-40'>
    <Card2/>
    <Updatingsetting/>
  </div>
  <Info/>
  <Footer/>
  </div>
   </>
  )
}

export default Profilepage