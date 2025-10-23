import React from 'react';
import logo from "../assets/img/pet-care-logo-762e0484-8711-487c-9ba9-f9422b151302.jpg";
import { NavLink } from 'react-router';
const Navbar = () => {
    return (
      
   <div className="navbar  bg-sky-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-sky-600 font-semibold">
        <NavLink to={"/"} className={({isActive})=>(isActive ? "text-sky-800 font-bold" : "")}>Home</NavLink>
     <NavLink to={"/Aboutus"} className={({isActive})=>(isActive ? "text-sky-800 font-bold" : "")}>Services</NavLink>
      <NavLink to={"/Profile"} className={({isActive})=>(isActive ? "text-sky-800 font-bold" : "")}>My Profile</NavLink>
      </ul>
    </div>
<div className='flex gap-1 justify-center items-center'>
    <img src={logo} alt="" className='w-12 rounded-full ' />
    <a className=" btn-ghost text-xl font-bold text-sky-600">PetsCare</a>
</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2 text-sky-600 font-semibold ">
    <NavLink to={"/"} className={({isActive})=>(isActive ? "text-sky-800 font-bold" : "")}>Home</NavLink>
     <NavLink to={"/Aboutus"} className={({isActive})=>(isActive ? "text-sky-800 font-bold" : "")}>Services</NavLink>
      <NavLink to={"/Profile"} className={({isActive})=>(isActive ? "text-sky-800 font-bold" : "")}>My Profile</NavLink>
    </ul>
  </div>
  <div className="navbar-end ">
    <a className="btn bg-sky-200 text-sky-600">Login</a>
  </div>
</div>
       
    );
};

export default Navbar;