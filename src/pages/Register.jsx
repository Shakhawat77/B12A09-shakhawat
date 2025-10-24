import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from "../context/authContext/AuthContext";

const Register = () => {
  const [show, setShow] = useState(false);
  const { createUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;

  
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      toast.error(
        "Password must have at least 6 characters, including uppercase and lowercase letters"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

       
        user.updateProfile({
          displayName: name,
          photoURL: photo,
        }).then(() => {
          toast.success("Account created successfully!");
          navigate("/"); 
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already in use. Please login instead.");
        } else {
          toast.error(error.message);
        }
      });
  };

 
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Signed in with Google!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <ToastContainer position="top-center" />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-sky-800">Register now!</h1>
          <p className="py-6 text-sky-600">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
            et a id nisi.
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
                    className="input input-bordered w-full bg-white/20 text-sky-600 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-sky-600">Photo</label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Your photo URL here"
                    className="input input-bordered w-full bg-white/20 text-sky-600 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-sky-600">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    className="input input-bordered w-full bg-white/20 text-sky-600 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
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

                <div className="mt-2">
                  <Link to="/forgot-password" className="link link-hover">
                    Forgot password?
                  </Link>
                </div>

                <button className="btn btn-neutral mt-4 text-sky-600 bg-sky-300 border-none w-full">
                  Register
                </button>               
                <button
                  type="button"
                  className="btn btn-outline mt-2 w-full"
                  onClick={handleGoogleSignIn}
                >
                  Sign up with Google
                </button>

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
