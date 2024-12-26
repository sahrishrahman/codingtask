import React from 'react'

import Image from 'next/image';
import vector2 from"@/app/components/assets/vector2.png";


  export default function JoinUs() {
    return (
      <div className="flex items-center justify-center h-full bg-white">
        {/* Join Us Card */}
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-6">
          
               <Image src={vector2} alt={''} width={50} height={50}/>
            
          
          </div>
  
          {/* Title */}
          <h2 className="text-center text-xl font-semibold text-black">
            BECOME A NIKE MEMBER
          </h2>
          <p className="mt-2 text-sm text-center text-gray-700">
            Create your Nike Member profile and get <br />first access to the very best of Nike <br />
             products, inspiration, and community.
          </p>
  
          {/* Join Form */}
          <form className="mt-6">
            {/* Email Address */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
  
            {/* Password */}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
  
            {/* First Name */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
  
            {/* Last Name */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
  
            {/* Date of Birth */}
            <div className="mb-4">
              <input
                type="date"
                placeholder="Date of Birth"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          <p>Get a Nike Member Reward every year on your Birthday.</p>
            {/* Country Dropdown */}
            <div className="mb-4">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
  
            {/* Gender Options */}
            <div className="mb-4 flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="w-4 h-4 text-black focus:ring-black"
                />
                <span className="text-sm text-gray-700">Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="w-4 h-4 text-black focus:ring-black"
                />
                <span className="text-sm text-gray-700">Female</span>
              </label>
            </div>
  
            {/* Email Updates Checkbox */}
            <div className="mb-4">
              <label className="flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2 border-gray-300 rounded focus:ring-black"
                />
                Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
              </label>
            </div>
  
            {/* Privacy Policy */}
            <p className="text-xs text-gray-500">
              By creating an account, you agree to Nikes{" "}
              <a href="#" className="text-black hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-black hover:underline">
                Terms of Use
              </a>.
            </p>
  
            {/* Join Us Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
              >
                JOIN US
              </button>
            </div>
          </form>
        </div>
        {/* Footer */}
        <p className="mt-6 text-sm text-center text-gray-600">
            Already a member ?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              SignIn
            </a>
          </p>
      </div>
    );
  }


