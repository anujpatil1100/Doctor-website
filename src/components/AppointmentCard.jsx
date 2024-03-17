import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Aos from 'aos';
import 'aos/dist/aos.css'
import {validate} from 'react-email-validator'

function AppointmentCard() {
  const[name,setName]=useState("");
  const[dept,setDept]=useState("");
  const[gender,setGender]=useState("");
  const[mail,setMail]=useState("");
  const[phone,setPhone]=useState("");
  const[cmt,setCmt]=useState("");

  const handle=()=>{
    if(name=="" || dept=="" || gender=="" || mail=="" || phone=="")
    {
      toast.error("Fill all the fields");
    }
    if(!validate(mail))
    {
      toast.error("Enter right e-mail..!");
    }
    if(phone.length<10)
    {
      toast.error("Enter right Phonenumber..!");
    }
    {
      toast.success("Appointment bookes successfully.!")
    }
  }

  return (
    <div data-aos="slide-up" className='container w-1/2 h-1/3 border-solid border-2 border-teal-700 rounded-2xl overflow-hidden'>
        <div className='w-full bg-teal-700 h-10 flex items-center justify-center text-xl text-white'>
      <h4>Book Your Appointment</h4>
    </div>
    <div className="p-4 bg-zinc-100">
     <div className='flex flex-wrap gap-10'>
     <label className="form-control w-full">
    <div className="label">
      <span className="label-text">Patient Name</span>
    </div>
    <input type="text" placeholder="Patient Name" className="input input-bordered" value={name} onChange={(e)=>setName(e.target.value)}  required/>
  </label>
     <label className="form-control w-2/5 max-w-xs">
    <div className="label">
      <span className="label-text">Department</span>
    </div>
    <select className="select w-full shadow-lg" value={dept} onChange={(e)=>setDept(e.target.value)} required>
  <option selected>Select Department</option>
  <option value="Nurologist">Nurologist</option>
  <option value="Cardiologist">Cardiologist</option>
  <option value="Dermatologist">Dermatologist</option>
</select>
  </label>
  
  <label className="form-control w-2/5 max-w-xs">
    <div className="label">
      <span className="label-text">Gender</span>
    </div>
    <select className="select w-full max-w-xs shadow-lg" value={gender} onChange={(e)=>setGender(e.target.value)} required>
  <option selected>Select Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
</select>
  </label>
  
  <label className="form-control w-2/5 max-w-xs">
    <div className="label">
      <span className="label-text">Your Email</span>
    </div>
    <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs shadow-lg" value={mail} onChange={(e)=>setMail(e.target.value)}  required/>
  </label>
  
  <label className="form-control w-2/5 max-w-xs">
    <div className="label">
      <span className="label-text">Phone No</span>
    </div>
    <input type="number" placeholder="Phone No" className="input input-bordered w-full max-w-xs shadow-lg" value={phone} onChange={(e)=>setPhone(e.target.value)}  required/>
  </label>
  
  <label className="form-control w-full">
    <div className="label">
      <span className="label-text">Comments</span>
    </div>
    <textarea className="textarea textarea-bordered h-24 shadow-lg" value={cmt} onChange={(e)=>setCmt(e.target.value)} placeholder="Your Message:"></textarea>
  </label>
     </div>
     <div className="flex justify-center py-4">
    <button onClick={handle} className="btn bg-teal-700 text-white mr-3 flex justify-center">Book Appointment</button>
    </div>
    </div>
    </div>
  )
}

export default AppointmentCard
