import React from 'react'
import Image from 'next/image'
import man1 from "@/app/components/assets/man1.png"


const Cart = () => {
  return (
    <div>
    <div className="flex flex-wrap justify-between w-4/5 mx-auto my-6 p-6 bg-white rounded-lg shadow-lg">
      {/* Cart Items Section */}
      <div className="flex-1 mr-4">
        {/* Cart Item 1 */}
        <div className="flex items-center mb-4 border-b pb-4">
        <Image src={man1} alt={''} width={400} height={500}/>
        <div className="flex-grow">
            <h4 className="text-lg font-semibold text-gray-800">Nike dri-fit adv technit ultra</h4>
            <p className="text-gray-600">Price: $20</p>
          </div>
        </div>

        {/* Cart Item 2 */}
        <div className="flex items-center mb-4 border-b pb-4">
        <Image src={man1} alt={''} width={400} height={500}/>
        <div className="flex-grow">
            <h4 className="text-lg font-semibold text-gray-800">Nike air max 97 se</h4>
            <p className="text-gray-600">Price: $30</p>
          </div>
        </div>
      </div>

      {/* Billing Section */}
      <div className="flex flex-col flex-shrink-0 w-full sm:w-64">
        <div className="border-b pb-4">
          <h3 className="text-xl font-bold text-gray-800">Total: $50</h3>
    

        <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-blue-700">
           Member Checkout
        </button>
        </div>
    

    </div>
    </div>
    </div>
  )
}

export default Cart

