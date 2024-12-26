import React from 'react'
import Image from 'next/image'
import shoe from "@/app/components/assets/shoe.png"
import { IoCartOutline } from "react-icons/io5";

export default function Products() {
  return (

    <div className="flex  items-center justify-center px-4 py-8 bg-gray-100">
      {/* Images Section */}
      <div className="flex space-x-4 mb-6">
        <Image src={shoe} alt={''} width={653} height={653}/>
        
        </div>
      {/* Text Section */}
      
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Nike Air Force 1 <br />
        PLT.AF.ORM</h1>
        <p className="text-gray-700 text-lg">
        Turn style on its head with this crafted take on <br /> the Air Jordan 1 Mid. Its inside out-inspired<br /> 
        construction including unique layering and<br /> exposed foam accents ups the ante on this<br /> timeless
         Jordan Brand silhouette. Details like the<br /> deco stitching on the Swoosh add coveted<br /> appeal, 
         while the unexpected shading, rich<br /> mixture of materials and aged midsole aesthetic<br /> give this release an artisan finish.</p>
      

      <button className=" flex px-6 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800">
        Add to cart
        <IoCartOutline  className='size-6'/>
      </button>
    </div>
    </div>
    
  );
};




