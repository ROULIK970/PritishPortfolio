import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { ToastContainer } from "react-toastify";
import { signup } from "../features/authSlice";

function Signup() {

const dispatch = useDispatch()
const navigate = useNavigate()


const [signupInfo, setSignupInfo] = useState({
  name:"",
  email:"",
  password:""
})
   
const handleChange = (e) =>{
  const {name, value} = e.target
  const copySignupInfo = {...signupInfo}
  copySignupInfo[name] = value
  setSignupInfo(copySignupInfo)
}

const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(signup({...signupInfo, navigate}))

}


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500"
              value={signupInfo.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500"
              value={signupInfo.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500"
              value={signupInfo.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?
          <Link to="/chat/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
