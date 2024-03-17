import React, { useState } from 'react'
import Background2 from '../components/Background2'
import Navbar from '../components/Navbar'
import TextField from '@mui/material/TextField'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import { FaArrowLeft } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import Footer from '../components/Footer'

function Paymentpage() {
    const[check1,setCheck1]=useState(true);
    const[check2,setCheck2]=useState(false);
    const[check3,setCheck3]=useState(false);

    const handle=(e)=>{
        if(e==1)
        {
            setCheck1(true);
            setCheck2(false);
            setCheck3(false);
        }
       if(e==2)
       {
            setCheck1(false);
            setCheck2(true);
            setCheck3(false);
       }
       if(e==3)
       {
            setCheck1(false);
            setCheck2(false);
            setCheck3(true);
       }
    }

  return (
    <>
   <div className='relative h-full'>
    <Background2/>
    <div className='absolute z-[3] w-full top-0'>
        <Navbar/>
    </div>
    <div className='w-3/4 h=1/2 p-14 left-40 top-40 absolute z-[3] overflow-hidden '>
    <span className={`text-3xl  text-teal-700 font-bold flex flex-row justify-normal gap-2`}><FaArrowLeft className='mt-1'/> User Profile</span>
    <div className='divider invisible'></div>
<div className="collapse">
  <input type="radio" name="my-accordion-1" value='1' onClick={(e)=>handle(e.target.value)} defaultChecked/> 
  <div className="collapse-title text-xl flex flex-row gap-3 font-medium">
    {check1 ? <input type="radio" name="radio-5" className="radio radio-success mt-1" checked/> : <input type="radio" name="radio-5" className="radio radio-success mt-1"/> }
  <FaCreditCard className='mt-1 h-6 w-6'/>
  Credit/Debit card:
  </div>
  <hr className='text-4xl h-0.5 font-bold bg-teal-700'/>
  <div className="collapse-content  flex flex-wrap px-20 py-5 gap-10 w-full"> 
  <TextField label="Name On Card" focused className='w-2/6 rounded-full '/>
  <TextField id="outlined-number"
          label="Card Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}  focused className='w-2/6'/>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker className='w-2/6'
  label={'Expird Date'}
  format='MM/YY'
  views={['year', 'month']}
/>
  </LocalizationProvider>
  <TextField id="outlined-number"
          label="CVC/CVV"
          type="number"
          onInput = {(e) =>{
            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,3)
        }}
           focused className='w-2/6'/>
        <div className='flex flex-row w-1/2 ml-96 gap-10 '>
        <button className="btn bg-white text-teal-700 border-1 border-solid border-teal-700 mr-3 flex justify-center text-sm rounded-xl px-5">CANCE</button>
        <button className="btn bg-teal-700 text-white mr-3 flex justify-center text-sm rounded-xl px-5">NEXT</button>
        </div>
  </div>
</div>
<div className="collapse">
  <input type="radio" name="my-accordion-1" value='2' onClick={(e)=>handle(e.target.value)}/> 
  <div className="collapse-title text-xl flex flex-row gap-3 font-medium">
  {check2 ? <input type="radio" name="radio-5" className="radio radio-success mt-1" checked/> : <input type="radio" name="radio-5" className="radio radio-success mt-1"/> }
  <FaCcPaypal className='mt-1 h-6 w-6'/>
  PayPal
  </div>
  <hr className='text-4xl h-0.5 font-bold bg-teal-700'/>
  <div className="collapse-content"> 
   <h1>Paypal</h1>
  </div>
</div>
<div className="collapse">
  <input type="radio" name="my-accordion-1" value='3' onClick={(e)=>handle(e.target.value)}/> 
  <div className="collapse-title text-xl flex flex-row gap-3 font-medium">
  {check3 ? <input type="radio" name="radio-5" className="radio radio-success mt-1" checked/> : <input type="radio" name="radio-5" className="radio radio-success mt-1"/> }
  PrePayment
  </div>
  <hr className='text-4xl h-0.5 font-bold bg-teal-700'/>
  <div className="collapse-content"> 
    <p>PrePayment</p>
  </div>
</div>
    </div>
       <div className='divider invisible'></div>
       <div className='divider invisible'></div>
       <div className='divider invisible'></div>
       <div className='divider invisible'></div>
       <div className='divider invisible'></div>
       <div className='divider invisible'></div>
       <div className='w-full bottom-0'>
        <Footer/>
    </div>
   </div>
   </>
  )
}

export default Paymentpage
