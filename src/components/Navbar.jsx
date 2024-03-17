import { useEffect } from 'react'
import React  from 'react'
import './Navbar.css'
import Aos from 'aos'
import 'aos/dist/aos.css';

function Navbar() {
  useEffect(() => {
    Aos.init({duration:1000});
  }, [])


  return (
    <div data-aos="fade-down" className="navbar bg-teal-700 text-white">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-emerald-700 text-white rounded-box w-52">
        <label className="input input-bordered flex items-center gap-2 h-7 px-5 text-black w-44">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
  <input type="text" className="grow" placeholder="Search" />
</label>
        <li className='text-lg'><a>Home</a></li>
        <li className='text-lg '><a>Service</a></li>
        <li className='text-lg '><a>About us</a></li>
        <li className='text-lg '><a>Register</a></li>
        <div className="">
      <a className="btn btn-sm w-20 hover:btn-primary">Login</a>
    </div>
        </ul>
      </div>
      <a className="dt text-3xl ml-10 font-bold">Doctor +</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1"> 
        <label className="input input-bordered flex items-center gap-2 h-10 px-5 text-black">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
  <input type="text" className="grow" placeholder="Search" />
</label>
        <li className='text-lg'><a>Home</a></li>
        <li className='text-lg'><a>Service</a></li>
        <li className='text-lg'><a>About us</a></li>
        <li className='text-lg'><a>Register</a></li>
      </ul>
    </div>
    <div className="cols mr-20"> 
      <a className="btn btn-sm w-20 hover:btn-primary">Login</a>
    </div>
  </div>
  )
}

export default Navbar