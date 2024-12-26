import React from "react";

import Image from "next/image";
import vector2 from"@/app/components/assets/vector2.png";
import { IoCheckboxOutline } from "react-icons/io5";

export default function Login() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        {/* Login Card */}
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
          <Image src={vector2} alt={''} width={50} height={50}/>
            
          </div>
  
          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            YOUR ACCOUNT < br/> FOR EVERYTHING <br /> NIKE
          </h2>
  
          {/* Login Form */}
          <form className="mt-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-2 w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
  
            {/* Password Field */}
            <div className="mt-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-2 w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            
          </form>
  
          {/* Divider */}
          <div className="mt-6 flex items-center">
            <span className="border-t flex-grow border-gray-300"></span>
            <span className="mx-3 text-gray-500">OR</span>
            <span className="border-t flex-grow border-gray-300"></span>
          </div>
  
          {/* Social Login */}
          <div className="mt-6 flex justify-center space-x-4">
            <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
              <IoCheckboxOutline /> 
              Keep me signed in
            </button>
            <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
              <IoCheckboxOutline />
              Forgotten your password?
            </button>
          </div>
          
           {/* Login Button */}
           <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg">
                SIGN IN
              </button>
            </div>
            <div className=" text size-12px align-center">
            <p>By logging in, you agree to Nikes Privacy Policy <br />and Terms of Use.</p>
            </div>
  
          {/* Footer */}
          <p className="mt-6 text-sm text-center text-gray-600">
            Not a member ?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Join us
            </a>
          </p>
        </div>

      </div>
    );
  }
  