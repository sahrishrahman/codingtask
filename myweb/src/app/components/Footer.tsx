
import React from 'react'


const Footer = () => {
  return (
        
    <div className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Find a Store</h3>
          <ul className="space-y-2">
            <li>Become a Member</li>
            <li>Sign Up for Email</li>
            <li>Send Us Feedback</li>
            <li>Student Discounts</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get Help</h3>
          <ul className="space-y-2">
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact Us on Nike App</li>
            <li>Contact Us for Other Inquiries</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4">About Nike</h3>
          <ul className="space-y-2">
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Sustainability</li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-white font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              🐦 {/* Replace with Twitter icon */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              👍 {/* Replace with Facebook icon */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              📷 {/* Replace with Instagram icon */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              🎥 {/* Replace with YouTube icon */}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">India © 2023 Nike, Inc. All Rights Reserved</p>
          <ul className="flex space-x-6 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Guides
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Sale
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Nike Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      
    </div>
  )
}

export default Footer


