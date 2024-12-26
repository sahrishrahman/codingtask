import React from "react";

const Sidebar = () => {
  return (
    <div className="w-full sm:w-64 h-auto sm:h-screen p-4 border-r border-gray-200 bg-white overflow-y-auto">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-800 mb-2">Categories</h3>
        <ul className="text-sm space-y-2">
          {[
            "Shoes",
            "Sports Bras",
            "Tops & T-Shirts",
            "Hoodies & Sweatshirts",
            "Jackets",
            "Trousers & Tights",
            "Shorts",
            "Tracksuits",
            "Jumpsuits & Rompers",
            "Skirts & Dresses",
            "Socks",
            "Accessories & Equipment",
          ].map((category) => (
            <li key={category}>
              <label className="cursor-pointer hover:text-black text-gray-600">
                <input type="checkbox" className="mr-2" />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Gender Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-800 mb-2">Gender</h3>
        <ul className="space-y-2 text-sm">
          {["Men", "Women", "Unisex"].map((gender) => (
            <li key={gender}>
              <label className="cursor-pointer hover:text-black text-gray-600">
                <input type="checkbox" className="mr-2" />
                {gender}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Kids Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-800 mb-2">Kids</h3>
        <ul className="space-y-2 text-sm">
          {["Boys", "Girls"].map((kid) => (
            <li key={kid}>
              <label className="cursor-pointer hover:text-black text-gray-600">
                <input type="checkbox" className="mr-2" />
                {kid}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-sm font-medium text-gray-800 mb-2">Shop By Price</h3>
        <ul className="space-y-2 text-sm">
          {[
            { label: "Under ₹ 2,500.00", value: "under-2500" },
            { label: "₹ 2,501.00 - ₹ 5,000.00", value: "2501-5000" },
          ].map((price) => (
            <li key={price.value}>
              <label className="cursor-pointer hover:text-black text-gray-600">
                <input type="radio" name="price" className="mr-2" />
                {price.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
