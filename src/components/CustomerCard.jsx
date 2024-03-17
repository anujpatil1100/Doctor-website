import React from 'react'
import img1 from '../assets/images/Customer/1.png'
import img2 from '../assets/images/Customer/2.png'
import img3 from '../assets/images/Customer/3.png'
import { IoStar } from "react-icons/io5";

function CustomerCard({star,name="",id,color=""}) {
    let arr=[];
    for(let i=0;i<star;i++)
    {
        arr[i]=0;
    }
  return (
    <div className='flex flex-col w-1/4  gap-4 justify-start items-center shadow-lg'>
      <div className='w-24 h-24  overflow-hidden rounded-full flex justify-center items-center' style={{backgroundColor:`${color}`}}>
       {id==1 ? <img src={img1} className='w-full h-full'/>:""}
       {id==2 ? <img src={img2} className='w-full h-full'/>:""}
       {id==3 ? <img src={img3} className='w-full h-full'/>:""}
      </div>
       <div className='flex flex-col gap-2'>
       <span className={`text-2xl font-bold text-teal-700 py-2`} >{name}</span>
       <p className='text-lg text-black'>Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem
Ipsum has been the industry s standard
dummy text ever since the 1500s
</p>
       </div>
       <div className='flex justify-end -mr-24 mb-10 flex-row'>
       {arr.map((e)=>(<IoStar className='text-yellow-500'/>))}
       </div>
    </div>
  )
}

export default CustomerCard
