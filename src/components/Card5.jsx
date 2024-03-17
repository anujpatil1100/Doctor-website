import React, { useEffect } from 'react'
import img1 from '../assets/images/data1_img/im1.png'
import img2 from '../assets/images/data1_img/im2.png'
import img3 from '../assets/images/data1_img/img3.png'
import img4 from '../assets/images/data1_img/im4.png'
import img5 from '../assets/images/data1_img/img5.png'
import img6 from '../assets/images/data1_img/img6.png'
import Aos from 'aos'
import 'aos/dist/aos.css';

function Card5({tit1,tit2,desc,color,id}) {
  useEffect(()=>{
    Aos.init({duration:1200});
  },[])
  return (
    <div className='flex w-96 h-64 rounded-xl overflow-hidden hover:cursor-pointer hover:transition duration-700 ease-in-out hover:scale-110' style={{backgroundColor:`${color}`}}>
        <div className='flex flex-row -mb-2 justify-between'>
    <div className='flex flex-col w-1/2 p-4 gap-1 justify-center items-start'>
        <span className='text-2xl text-black font-bold'>{tit1}</span>
        <span className='text-2xl text-black font-bold' >{tit2}</span>     
        <p className='text-sm'>{desc}</p>
        <button className="btn bg-white text-black mr-3 rounded-full flex justify-center">Read More</button>
    </div>
    {id=='1' ? <img src={img1} className='h-full'/> : ""}
    {id=='2' ? <img src={img2} className='h-full'/> : ""}
    {id=='3' ? <img src={img3} className='h-full'/> : ""}
    {id=='4' ? <img src={img4} className='h-full'/> : ""}
    {id=='5' ? <img src={img5} className='h-full'/> : ""}
    {id=='6' ? <img src={img6} className='h-full'/> : ""}
    </div>
    </div>
  )
}

export default Card5
