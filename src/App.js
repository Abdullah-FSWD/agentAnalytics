import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <div className="pt-16">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#9BCF53] text-white px-4 py-2 rounded mt-4 mr-4">
            Add Product
          </button>
        </div>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
      <AddProduct showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
