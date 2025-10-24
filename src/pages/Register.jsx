import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../context/authContext/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [show, setShow] = useState(false);
  const { createUser, googleSignIn, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photo = event.target.photo.value;

    // Password validation
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const minLength = password.length >= 6;

    if (!uppercase || !lowercase || !minLength) {
      toast.error(
        "Password must have at least 1 uppercase, 1 lowercase, and 6 characters."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        return updateUserProfile({
          displayName: name,
          photoURL: photo,
        });
      })
      .then(() => {
        toast.success("Registration successful!");
      navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Google Sign-In successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="hero bg-sky-50 min-h-screen">
      <ToastContainer position="top-right" />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-sky-800">Register now!</h1>
          <p className="py-6 text-sky-600">
            Join our pet care community and explore winter care services for your furry friends.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1 text-sky-600">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered w-full bg-white/20 text-sky-600 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium mb-1 text-sky-600">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your photo URL"
                  className="input input-bordered w-full bg-white/20 text-sky-600 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium mb-1 text-sky-600">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-sky-600 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  required
                />
              </div>

              <div className="relative mb-3">
                <label className="block text-sm font-medium mb-1 text-sky-600">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered w-full bg-white/20 text-sky-600 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <button className="btn btn-neutral mt-4 text-sky-600 bg-sky-300 border-none w-full">
                Register
              </button>
            </form>

            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline mt-3 w-full text-sky-600 border-sky-300 hover:bg-sky-200"
            >
              Sign up with Google
            </button>

            <p className="text-center mt-4 text-sky-400 text-sm">
              Already have an account?{" "}
              <Link
                to="/Signin"
                className="text-sky-400 hover:text-sky-500 font-medium underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
