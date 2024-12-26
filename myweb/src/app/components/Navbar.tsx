import React from "react"
import Link from "next/link"
import Image from "next/image"
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import vector from "@/app/components/assets/vector.png"
import vector2 from "@/app/components/assets/vector2.png"



export default function Navbar(){
    return(
        
<div>
    <div >
    {/* Top bar */}
    <div className="bg-primaryColor flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
      <Image src={vector} alt={''} width={24} height={24}/>
      </div>
    <div  >
        <ul className="flex  gap-[15px] pl-[800px]">
          <li>
            <Link href="/Store"className="hover:text-gray-700">Find a Store</Link>
          </li>
          <li>
            <Link href="/Help"className="hover:text-gray-700">Help</Link>
          </li>
          <li>
            <Link href="/JoinUs"className="hover:text-gray-700">Join Us</Link>
          </li>
          <li>
            <Link href="/SignIn"className="hover:text-gray-700">Sign In</Link>
          </li>
          <li>
            <Link href="/Login"className="hover:text-gray-700">Login</Link>
          </li>
          <li>
            <Link href="/Cart"className="hover:text-gray-700">Cart</Link>
          </li>
          <li>
            <Link href="/Products"className="hover:text-gray-700">Products</Link>
          </li>
          <li>
            <Link href="/ContactUs"className="hover:text-gray-700">Contactus</Link>
          </li>
        </ul>
      </div>
      </div>
    <div>
    <div className="flex flex-wrap justify-between items-center px-6 py-4">
      {/* Left section (Logo) */}
      <div className="flex items-center">
        <Image
          src={vector2}
          alt="Nike Logo"
          className="md:w-[78px] sm:w-[60px] w-[30px]"
        />
      </div>

      {/* Center section (Navigation Links) */}
      <nav className="flex gap-4 md:gap-6 text-gray-700 font-medium md:text-[16px] sm:text-[14px] text-[10px] ">
        <Link href="#" className="hover:text-black whitespace-nowrap">New & Featured</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">Men</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">Women</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">Kids</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">Sale</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">SNKRS</Link>
      </nav>

      {/* Right section (Search, Wishlist, Cart) */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
        </div>
        <CiHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]  cursor-pointer hover:text-black" />
        <IoBagOutline className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
      </div>
    </div>

    {/* Mobile Search Bar */}
    <div className="block md:hidden px-6 mt-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
        />
        <FaSearch className="absolute right-3 top-2.5 text-gray-500" />

      </div>
      
</div>
</div>
<div className="bg-gray-100 text-center py-2">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Hello Nike App</span> - Download the app to access everything Nike.{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Get Your Great
          </a>
        </p>
      </div>

</div>

  );
}