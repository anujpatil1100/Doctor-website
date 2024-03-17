import React, { useEffect } from 'react'
import { HiMapPin } from "react-icons/hi2";
import { MdWatchLater } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import Aos from 'aos'
import 'aos/dist/aos.css';


function Circularcard({number,txt1="",txt2="",txt3="",color="",icon="", id=''}) {
  useEffect(()=>{
    Aos.init({duration:1200});
  })
  return (
    <div className='relative w-64 h-64 hover:cursor-pointer hover:transition duration-700 ease-in-out hover:scale-110 rounded-full flex justify-center items-center bg-white shadow-xl'>
      <div className={`absolute w-16 h-16 rounded-full flex justify-center items-center -left-0 top-3 text-white text-3xl font-bold`} style={{backgroundColor:`${color}`}}>
        <span>{number}</span>
      </div>
      <div className='absolute flex justify-center items-center flex-col text-black text-xl font-bold gap-2'>
        {id=='1' ? <HiMapPin className='w-10 h-10' style={{color:`${color}`}}/> : ""}
        {id=='2' ? <MdWatchLater className='w-10 h-10' style={{color:`${color}`}}/> : ""}
        {id=='3' ? <MdPayment className='w-10 h-10' style={{color:`${color}`}}/> : ""}
       <span>{txt1}</span>
       <span>{txt2}</span>
       <span>{txt3}</span>
      </div>
    </div>
  )
}

export default Circularcard
