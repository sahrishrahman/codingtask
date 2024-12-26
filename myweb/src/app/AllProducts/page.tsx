import React from "react";
import ItemCard from "@/app/components/Cards1"
import Sidebar from "@/app/components/Sidebar";


export default function AllProducts() {
  return (
    <div className="flex">

      <Sidebar />


      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Product Listing</h1>
        <p className="text-gray-600">Products will be displayed here...</p>
        < ItemCard />
      </div>
    </div>
  );
}

