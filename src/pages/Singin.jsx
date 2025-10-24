import React, { use, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from "../context/authContext/AuthContext";

const Singin = () => {
  const location = useLocation();
const navigate = useNavigate();
const from = location.state?.from?.pathname || "/";
  const [show, setShow] = useState(false);
  const { signInUser, googleSignIn } = useContext(AuthContext);
  navigate(from, { replace: true });

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then((result) => {
        toast.success("Login successful!");
        navigate("/"); 
      })
      .catch((error) => {
        toast.error(error.message);
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
    <div className="hero bg-sky-50 min-h-screen">
      <ToastContainer position="top-center" />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-sky-800">Login now!</h1>
          <p className="py-6 text-sky-600">
           “Welcome! Please log in to access all our pet care services. By signing in, you can view detailed service information, book appointments, and get personalized tips for your furry friends. Logging in helps us provide the best experience and care for your pets. Let’s keep them happy and healthy!”
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogIn}>
              <fieldset className="fieldset">
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

                <button className="btn btn-neutral mt-4 text-sky-800 bg-sky-300 border-none w-full">
                  Login
                </button>

          
                <button
                  type="button"
                  className="btn btn-outline text-sky-800 bg-sky-300 border-none mt-2 w-full"
                  onClick={handleGoogleSignIn}
                >
                  Sign in with Google
                </button>

                <div className="text-center mt-3">
                  <p className="text-sm text-sky-400">
                    New to this Website?{" "}
                    <Link
                      to="/Register"
                      className="text-sky-400 hover:text-sky-500 font-medium underline"
                    >
                      Register
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

export default Singin;
