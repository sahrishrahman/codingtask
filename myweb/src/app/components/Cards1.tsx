import React from "react";
import Image from "next/image";

const items = [
  {
    id: 1,
    name: "Just In",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 10 795.00",
    image: "/assets/first.png",
  },
  {
    id: 2,
    name: "Just In",
    detail:"Nike Court Vision Low Next Nature",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 4 995.00",
    image: "/assets/second.png",
  },
  {
    id: 3,
    name: "Just In",
    detail:"Nike Air Force 1 PLT.AF.ORM",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 8 695.00",
    image: "/assets/third.png",
  },
  {
    id: 4,
    name: "Just In",
    detail:"Nike Air Force 1 React",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 13 295.00",
    image: "/assets/fourth.png",
  },
  {
    id: 5,
    name: "Promo Exclusion",
    detail:"Air Jordan 1 Elevate Low",
    line:"Women's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 10 795.00",
    image: "/assets/fifth.png",
  },
  {
    id: 6,
    name: "Just In",
    detail:"Nike Standard Issue",
    line:"Women's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 10 795.00",
    image: "/assets/sixth.png",
  },
  {
    id: 7,
    name: "Promo Exclusion",
    detail:"Nike Dunk Low Retro SE",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 10 795.00",
    image: "/assets/seventh.png",
  },
  {
    id: 8,
    name: "Sustainable Materials",
    detail:"Nike Dri-FIT UV Hyverse",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 10 795.00",
    image: "/assets/eightnew.png",
  },
  {
    id: 9,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/nine.png",
    
  },
  {
    id: 10,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/ten.png",
    
  },
  {id: 11,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/eleven.png",
  },
  {
    id: 12,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/twelve.png",
    },
    {
    id: 13,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/thirteen.png",
    },
    {
    id: 14,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/14.png",
    },
    {
    id: 15,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/15.png",
   },
   {
    id: 16,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/16.png",
   },
   {
    id: 17,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/17.png",
   },
   {
    id: 18,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/18.png",
   },
   {
    id: 19,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/19.png",
   },
   {
    id: 20,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/20.png",
   },
   {
    id: 21,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/21.png",
   },
   {
    id: 22,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/22.png",
   },
   {
    id: 23,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/23.png",
   },
   {
    id: 24,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/24.png",
   },
   {
    id: 25,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/25.png",
   },
   {
    id: 26,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/26.png",
   },
   {
    id: 27,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/27.png",
   },
   {
    id: 28,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/28.png",
   },
   {
    id: 29,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/29.png",
   },
   {
    id: 30,
    name: "Nike Court Vision Low",
    detail:"Nike Air Force 1 Mid '07",
    line:"Men's Shoes",
    line2:"1 Colour",
    price: "MRP : ₹ 5 695.00",
    image: "/assets/30.png",
   },
];

// Duplicate the array to make 30 products
const itemsList = Array.from({ length: 30 }, (_, index) => ({
  ...items[index % items.length], // Cycle through the sample 
  id: index + 1, // Unique ID for each car
}));

const ItemCard = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {itemsList.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={450}
              height={348}
              objectFit="contain"
              className="bg-gray-100"
            />
            <div className="p-4">
              <h2 className="text-md text-[#9E3500] font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 text-sm">{item.detail}</p>
              <p className="text-gray-600 text-sm">{item.line}</p>
              <p className="text-gray-600 text-sm">{item.line2}</p>
              <p className="text-gray-600 text-sm font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCard;
