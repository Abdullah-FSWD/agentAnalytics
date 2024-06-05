import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterProducts } from "../features/productSlice";

const Navbar = ({ setFilteredProducts }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items);

  const handSubmit = () => {
    dispatch(filterProducts(text));
  };

  return (
    <nav className="bg-[#416D19] fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center">
          <img
            src="https://placehold.co/40x40"
            alt="Logo"
            className="h-10 w-10"
          />
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className="p-2 rounded-l-lg border-none focus:ring-0"
            placeholder="Search..."
            onChange={(e) => setText(e.target.value)}
          />
          <button className="bg-gray-700 text-white p-2 rounded-r-lg">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
