import React, { useState } from "react";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleRegister=(event)=>{
event.preventDefault();
const email =event.target.email.value;
const password = event.target.password.value;
const name = event.target.name.value;
const photo= event.target.photo.value;
console.log(email, password, name, photo);

createUserWithEmailAndPassword(auth, email, password )
.then(result=>{
  console.log(result)
})
.catch(error =>{
  console.log(error)
})
  }

  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-sky-800">Register now!</h1>
      <p className="py-6 text-sky-600">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handleRegister}>
         <fieldset className="fieldset">
           <div>
            <label className="block text-sm font-medium mb-1 text-sky-600">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="input input-bordered w-full bg-white/20  text-sky-600 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
           </div>
            <div>
        <label className="block text-sm font-medium mb-1 text-sky-600">Photo</label>
        <input
          type="text"
          name="photo"
          placeholder="Your photo URL here"
          className="input input-bordered w-full bg-white/20  text-sky-600 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
      </div>
       <div>
        <label className="block text-sm font-medium mb-1 text-sky-600">Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@email.com"
          className="input input-bordered w-full bg-white/20  text-sky-600 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
      </div>
      <div className="relative">
        <label className="block text-sm font-medium mb-1 text-sky-600">Password</label>
        <input
          type={show ? "text" : "password"}
          name="password"
          placeholder="Enter Your Password"
          className="input input-bordered w-full bg-white/20 text-sky-600 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
        <span
          onClick={() => setShow(!show)}
          className="absolute right-[8px] top-[36px] cursor-pointer z-50"
        >
          {show ? <FaEye /> : <IoEyeOff />}
        </span>
      </div>
          
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4 text-sky-600 bg-sky-300 border-none">Register</button>
          <div className="text-center mt-3">
        <p className="text-sm text-sky-400">
          Already have an account?{" "}
          <Link
            to="/Signin"
            className="text-sky-400 hover:text-sky-500 font-medium underline"
          >
            Sign in
          </Link>
        </p>
      </div>
        </fieldset>
       </form>
      </div>
    </div>
  </div>
</div>
  );
};

export default Register;
