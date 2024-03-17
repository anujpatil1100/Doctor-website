import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Doctor2imagecompo from '../components/Doctor2imagecompo'
import Card4 from '../components/Card4'
import img1 from '../assets/images/Doctor-women3.png'
import Footer from '../components/Footer'
import '../App.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import Circularcard from '../components/Circularcard'
import Card5 from '../components/Card5'
import Data from '../data/Doctordata.json'
import Card6 from '../components/Card6'
import Button from '../components/Button'
import Tilt from 'react-parallax-tilt';
import CustomerCard from '../components/CustomerCard'

export default function Landingpage() {
  useEffect(() => {
    Aos.init({duration:1000});
  }, [])


  return (
    <>
    <div className='w-screen h-screen overflow-x-hidden'>
    <Navbar/>
    <div className='flex flex-row p-24 justify-between w-full overflow-hidden'>
        <div className='flex flex-col '>
        <div  data-aos="fade-right" className='flex w-4/5'>
            <p className=' text-teal-700 text-5xl font-bold '>Find your near by doctor& book your appointment& get treatment fast</p>
        </div>
        <div className=' flex p-8'>
        <Card4/>
        </div>
        </div>
      <Doctor2imagecompo/>
    </div>
    <div className='flex p-10 justify-center'>
   <div className='box h-60 w-5/6 flex rounded-2xl relative justify-center' >
    <div className='flex absolute bg-teal-700 rounded-2xl w-4/6 h-1/4 -top-10 justify-center items-center text-white text-3xl tracking-wide font-bold'>
      <span>Easy steps to book your Appointment</span>
    </div>
    <div className='flex flex-row gap-32 absolute -bottom-20'>
     <Circularcard number='1' txt1='Select the location ' txt2='and search near by ' txt3='doctor' color='#A9A9A9' id='1'/>
     <Circularcard number='2' txt1='Schedule and Book ' txt2='your date and time' txt3='for appointment' color='#008B8B' icon='AccessTimeFilledIcon' id='2'/>
     <Circularcard number='3' txt1='Easy way to make' txt2='payment in' txt3='multiple getway' color='#2F4F4F' id='3'/>
    </div>
   </div>
   </div>
     <div className='flex flex-row w-full px-40 py-40'>
     <div className='box border-2 bordersolid w-2/5 h-80 flex items-center rounded-t-3xl relative justify-center'>
       <div className='absolute -top-16 h-full'>
        <img src={img1}className='w-96 h-96'/>
       </div>
     </div>
     <div className='flex flex-col  ml-16 gap-4 w-1/2 justify-start items-start' >
      <p className='text-teal-700 text-3xl font-bold'>Experienced doctor analyse the patient giving them aproper treatment</p>
      <span className='text-2xl text-slate-400 font-bold'>Doctor availability</span>
      <span className='text-2xl text-slate-400 font-bold'>Treatment & Consulting</span>
      <span className='text-2xl text-slate-400 font-bold'>Top Specialist doctor</span>
      <span className='text-2xl text-slate-400 font-bold'>Top Specialist doctor</span>
      <button className="btn bg-teal-700 text-white mr-3 flex justify-center">Book Appointment</button>
     </div>
     </div>
     <div className='flex flex-col justify-center items-center p-5'>
      <span className={`text-4xl font-bold text-teal-700 py-2`} >Variouse specialist are here you to take care of your Health</span>
      <span className={`text-2xl font-bold text-slate-400 py-1`}>Doctors are available at any time to care your health</span>
    </div>
    <div className='p-24'>
     <div className='flex flex-wrap w-full gap-12 justify-start items-center'>
      {Data.map((e)=>(<Card5 tit1={e.first_title} tit2={e.last_title} desc={e.desc} color={e.color} id={e.id}/>))}
     </div>
     </div>
     <div className='flex flex-col justify-center items-center p-5'>
      <span className={`text-4xl font-bold text-teal-700 py-2`} >Our Top Rated Doctors</span>
      <span className={`text-2xl font-bold text-slate-400 py-1`}>Top Rated Doctors are available at any time to care your health</span>
    </div>
    <div className='p-24'>
     <div className='flex flex-wrap w-full  gap-16 justify-start items-center'>
      <Card6 id='1' name='Dr. Pawan'/>
      <Card6 id='2' name='Dr. Wanitha'/>
      <Card6 id='3' name='Dr.Udara'/>
      <Card6 id='1' name='Dr. Pawan'/>
     </div>
     </div>
     <div className='p-24'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col gap-4' style={{width:'30%'}}>
        <span className={`text-4xl font-bold text-teal-700 py-2`} >Customers Feedback</span>
        <p className='text-lg text-black'>Our users share stories of satisfaction, trust,and exceptional experiences. Explore now!</p>
        </div>
        <div className='flex p-28 gap-10 flex-row'>
        <a href='#slide1' className='text-lg border-2 border-solid border-black text-black bg-white px-3 py-2 hover:bg-teal-700 hover:text-white'>Previous</a>
        <a href='#slide2' className='text-lg border-2 border-solid border-black text-black bg-white px-6 py-2 hover:bg-teal-700 hover:text-white'>Next</a>
        </div>
      </div>
     </div>
     <div className='p-24 -mt-52'>
     <div className="carousel w-full">
  <div id="slide1" className="carousel-item gap-12 relative w-full">
    <CustomerCard id={1} name='Natalie Summers' star={5} color='slateblue'/>
    <div className="divider xl:divider-horizontal"></div> 
    <CustomerCard id={2} name='Owen Evans' star={4} color='orange'/>
    <div className="divider xl:divider-horizontal"></div> 
    <CustomerCard id={3} name='Alex Turner' star={4} color='dodgerblue'/>
  </div> 
  <div id="slide2" className="carousel-item gap-12 relative w-full">
    <CustomerCard id={1} name='Aarohi Patil' star={3} color='slateblue'/>
    <div className="divider xl:divider-horizontal"></div> 
    <CustomerCard id={2} name='Anuj Patil' star={5} color='orange'/>
    <div className="divider xl:divider-horizontal"></div> 
    <CustomerCard id={3} name='Aditya Patil' star={4} color='dodgerblue'/>
  </div> 
</div>
     </div>
     <Footer color='black' color2='black'/>
    </div>
    </>
  )
}

