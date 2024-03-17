import React, { useEffect, useState } from 'react'
import img1 from '../assets/images/data2_img/1.png'
import img2 from '../assets/images/data2_img/2.png'
import img3 from '../assets/images/data2_img/3.png'
import { FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Title from './Title';


function Card6({id,name=""}) {
    const[like,setLike]=useState(false);
  return (
    <div className='flex h-64 rounded-lg overflow-hidden hover:cursor-pointer hover:transition duration-700 ease-in-out hover:scale-110 border-2 border-solid bg-emerald-200' style={{width:'45%'}}>
    <div className='flex flex-row -mb-4 ml-10 left-10 justify-between'>
        {id=='1' ? <img src={img1} className='h-full'/>:""}
        {id=='2' ? <img src={img2} className='h-full'/>:""}
        {id=='3' ? <img src={img3} className='h-full'/>:""}
<div className='flex flex-col w-1/2 p-4 gap-4 justify-center items-start'>
    <div className='flex flex-row gap-16'>
    <span className='text-2xl text-black font-bold'>{name}</span>
    <div className="border-hidden mt-1 bg-emerald-200" onClick={(e)=>setLike(!like)}>
        {like ? <FaHeart className='w-6 h-6'style={{color:'red'}}/>:<FaRegHeart className='w-6 h-6'/>}
</ div>
    </div>
    <p className='text-sm'>Jorem ipsum dolor, consectetur adipiscing elit. Nunc v libero etvelit interdum, ac mattis.</p>
    <div className='flex flex-row gap-10'>
    <button className="btn bg-teal-700 text-white mr-3 rounded-xl px-6 text-xl flex justify-center">Book</button>
    <div className='flex flex-row gap-3 mt-3'>
    <FaStar className='w-6 h-6 text-yellow-500'/>
    <Title text='5.0' font='bold'/>
    </div>
    </div>
</div>
</div>
</div>
  )
}

export default Card6
