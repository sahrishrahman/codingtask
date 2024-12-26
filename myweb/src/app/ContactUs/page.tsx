

import React from 'react'
import { ImMobile2 } from "react-icons/im";
import { RiMessage2Fill } from "react-icons/ri";
import { MdAttachEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
 export default function ContactUs() {
  return (
    <div className="bg-white">
      {/* Search Bar */}
      <h1 className='text-6xl flex mt-[12px] relative pl-[445px]'>GET HELP</h1>
      <div className=" border-b border-gray-300 flex mt-[12px] relative pl-[145px]">
        <input
          type="text"
          placeholder="What can we help you with?"
          className="w-full max-w-xl px-4 py-2 mx-auto text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row px-6 py-10 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 md:pr-10">
          <h1 className="text-2xl font-semibold text-black mb-4">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h1>
          <p className="text-gray-700 mb-4">
            We want to make buying your favourite Nike shoes and gear online
            fast and easy, and we accept the following payment options:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li>
              If you enter your PAN information at checkout, you’ll be able to pay for your order with
              PayTM or a local credit or debit card.
            </li>
            <li>Apple Pay</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Nike Members can store multiple debit or credit cards in their profile for faster
            checkout. If you’re not already a Member, <a href="#" className="text-black underline">join us today</a>.
          </p>
          {/* Buttons */}
          <div className="flex space-x-4 mb-6">
            <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              JOIN US
            </button>
            <button className="px-6 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300">
              SHOP NIKE
            </button>
          </div>

          {/* FAQs */}
          <h2 className="text-lg font-semibold text-black mb-2">FAQs</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900">Does my card need international purchases enabled?</h3>
              <p className="text-gray-700">
                Yes, we recommend asking your bank to enable international purchases on your card. You will be notified
                at checkout if international purchases need to be enabled.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Can I pay for my order with multiple methods?</h3>
              <p className="text-gray-700">
                No, payment for Nike orders can’t be split between multiple payment methods.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">What payment method is accepted for SNKRS orders?</h3>
              <p className="text-gray-700">
                You can use any accepted credit card to pay for your SNKRS order.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Why don’t I see Apple Pay as an option?</h3>
              <p className="text-gray-700">
                To see Apple Pay as an option in the Nike App or on Nike.com, you’ll need to use a compatible Apple
                device running the latest OS, be signed in to your iCloud account, and have a supported card in your
                Wallet. Additionally, you’ll need to use Safari to use Apple Pay on Nike.com.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content - Contact Section */}
        <div className="flex-shrink-0 md:w-1/3">
          <h2 className="text-lg font-semibold text-black mb-6">CONTACT US</h2>
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center space-x-4">
            <ImMobile2 className='size-6'/>
              <div>
                <p className="text-gray-900">000 800 919 0566</p>
                <p className="text-sm text-gray-700">
                  Products & Orders: 24 hours a day, 7 days a week.
                </p>
              </div>
            </div>

            {/* Chat */}
            <div className="flex items-center space-x-4">
              <RiMessage2Fill className='size-6'/>
              <div>
                <p className="text-gray-900">24 hours a day</p>
                <p className="text-sm text-gray-700">7 days a week</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
            <MdAttachEmail className='size-6' />
              <div>
                <p className="text-gray-900">We’ll reply within five business days</p>
              </div>
            </div>

            {/* Store Locator */}
            <div className="flex items-center space-x-4">
              <IoLocation className='size-6' />
              <div>
                <p className="text-gray-900">STORE LOCATOR</p>
                <p className="text-sm text-gray-700">Find Nike retail stores near you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

