import { FaSquarePhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";
import React from 'react'

function Footer({color="#00796B",color2="#004D40"}) {
  return (
    <>
    <div className=' flex flex-row gap-40 p-20 items-center w-full h-44 b gap-3 overflow-hidden' style={{backgroundColor:`${color}`}}>
        <div>
      <a className="dt text-3xl ml-10 font-bold text-white">Doctor+</a>
      </div>
      <div className='w-80 text-white text-sm'>
      Thank you for visiting my website, and I look forward
to being a part of your wellness journey. Let's thrive
together!
      </div>
      <div className=" text-white text-sm py-10 ">
        <span className="flex flex-row p-2 gap-2"><FaSquarePhone className="text-blue-400 text-xl cursor-pointer"/> +91-1234567890</span>
        <span className="flex flex-row p-2 gap-2"><MdOutlineMail className="text-blue-400 text-xl cursor-pointer"/> contact@gmail.com</span>
        <span className="flex flex-row p-2 gap-3"><BiLogoFacebookCircle className="text-xl cursor-pointer"/><IoLogoInstagram className="text-xl cursor-pointer"/><AiOutlineYoutube className="text-xl cursor-pointer"/></span>
      </div>
      </div>
      <span className="flex justify-center items-center w-full text-white"><hr className="w-2"></hr></span>
      <div className=" w-full h-10 flex justify-center items-center text-white text-xs gap-32 px-20" style={{backgroundColor:`${color2}`}}>
       <span className="-ml-10">© Copyright 2023. All Rights Reserved</span>
       <span className="ml-10">Privacy Policy</span>
       <span>Term of Service</span>
       <span>Legal Info</span>
      </div>
    </>
  )
}

export default Footer
