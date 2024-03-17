import React from 'react'
import Title from './Title'
import Button from './Button'
import women from '../assets/images/Doctor-women.png'
import { FaStar } from "react-icons/fa";

function Card1() {
  return (
    <>
     <div className="card card-side bg-teal-200 hover:cursor-pointer hover:transition duration-700 ease-in-out hover:scale-110 w-5/12 h-60 rounded-none overflow-hidden">
  <figure><img className='h-full w-full ml-8 -mb-3' src={women} alt="Movie"/></figure>
  <div className="card-body w-2/5 h-10">
    <h2 className="card-title">Dr.Wanitha</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum et voluptatum necessitatibus</p>
    <div className="card-actions flex flex-row py-3 gap-12">
      <Button text='Book' roundeds='full' bgcolor='teal-700' color='white' width='20'/>
      <FaStar className='text-yellow-400 size-6'/>
      <Title text='5.0' font='bold'/>
    </div>
  </div>
</div>
    </>
  )
}

export default Card1
