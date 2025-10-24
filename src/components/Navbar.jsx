import React, { useContext } from 'react';
import { AuthContext } from "../context/authContext/AuthContext";
import logo from "../assets/img/pet-care-logo-762e0484-8711-487c-9ba9-f9422b151302.jpg";
import { NavLink, useNavigate } from 'react-router';
import './Navbar.css';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/Signin"); 
      })
      .catch(err => console.log(err));
  };

  const activeClass = "underline underline-offset-4 font-bold text-sky-800";
  const normalClass = "text-sky-600";

  return (
    <div className="navbar bg-sky-100 shadow-sm">    
      <div className="navbar-start">     
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-sky-600 font-semibold flex flex-col gap-2">
            <NavLink to="/" className={({ isActive }) => isActive ? activeClass : normalClass}>Home</NavLink>
            <NavLink to="/Aboutus" className={({ isActive }) => isActive ? activeClass : normalClass}>Services</NavLink>
            <NavLink to="/Profile" className={({ isActive }) => isActive ? activeClass : normalClass}>My Profile</NavLink>
            {!user && <NavLink to="/Signin" className={({ isActive }) => isActive ? activeClass : normalClass}>Login</NavLink>}
            {!user && <NavLink to="/Register" className={({ isActive }) => isActive ? activeClass : normalClass}>Register</NavLink>}
          </ul>
        </div>

     
        <div className='flex gap-1 justify-center items-center'>
          <img src={logo} alt="" className='w-12 rounded-full ' />
          <a className="btn-ghost text-xl font-bold text-sky-600">PetsCare</a>
        </div>
      </div>

    
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-sky-600 font-semibold">
          <NavLink to="/" className={({ isActive }) => isActive ? activeClass : normalClass}>Home</NavLink>
          <NavLink to="/Aboutus" className={({ isActive }) => isActive ? activeClass : normalClass}>Services</NavLink>
          <NavLink to="/Profile" className={({ isActive }) => isActive ? activeClass : normalClass}>My Profile</NavLink>
        </ul>
      </div>

 
      <div className="navbar-end flex items-center gap-2">
        {user ? (
          <>
       
            {user.photoURL && (
              <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
                <img src={user.photoURL} alt="avatar" className="w-10 h-10 rounded-full border border-sky-300" />
              </div>
            )}
         
            <NavLink
              to="/Signin"
              className={({ isActive }) => isActive ? activeClass + " btn bg-sky-200 text-sky-600" : "btn bg-sky-200 text-sky-600"}
              onClick={(e) => {
                e.preventDefault();
                handleLogout();
              }}
            >
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/Signin" className={({ isActive }) => isActive ? activeClass + " btn bg-sky-200 text-sky-600" : "btn bg-sky-200 text-sky-600"}>Login</NavLink>
            <NavLink to="/Register" className={({ isActive }) => isActive ? activeClass + " btn bg-sky-200 text-sky-600" : "btn bg-sky-200 text-sky-600"}>Register</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
