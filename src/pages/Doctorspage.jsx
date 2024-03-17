import React from 'react'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Button from '../components/Button'
import Card1 from '../components/Card1'
import Footer from '../components/Footer'

function Doctorspage() {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col justify-center items-center p-20'>
      <span className={`text-2xl font-semibold text-teal-700 py-2`}>Our Doctors</span>
      <span className={`text-lg font-bold text-slate-400 py-1`}>Great doctor if you need your family member to get effective immediate</span>
      <span className={`text-lg font-bold text-slate-400 py-1`}>assistance,emergency treatment or a simple consulation.</span>
    </div>

    <div className='flex flex-row gap-6 px-20 py-10'>
   <button className={`border-solid text-sm text-white font-sm bg-teal-700 border-slate-600 border-2 rounded-full w-10 hover:bg-teal-700 hover:text-white hover:border-teal-700 p-0.5`}>All</button>
   <button className={`border-solid text-sm border-slate-600 border-2 rounded-full w-36 hover:bg-teal-700 hover:text-white hover:border-teal-700 p-0.5`}>Nurologist</button>
   <button className={`border-solid text-sm border-slate-600 border-2 rounded-full w-36 hover:bg-teal-700 hover:text-white hover:border-teal-700 p-0.5`}>Cardiologist</button>
   <button className={`border-solid text-sm border-slate-600 border-2 rounded-full w-36 hover:bg-teal-700 hover:text-white hover:border-teal-700 p-0.5`}>Dermatologist</button>
    </div>
    <div className='flex gap-14 justify-center flex-wrap'>
      <Card1/>
      <Card1/>
      <Card1/>
      <Card1/>
</div>
      <div className='flex justify-center items-center p-32'>
        <Button text='See More' bgcolor='white' size='10' color='black' font='semibold' padinng='2' hoverbg='teal-700' hovertxt='white' />
      </div>
   
      <Footer/>
 </>
  )
}

export default Doctorspage