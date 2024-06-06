import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productSlice";

const AddProduct = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: "",
    price:0,
    description: {
      shortDesc: "",
      detailDesc: "",
    },
    image: "https://placehold.co/300x300",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === "shortDesc" || name === "detailDesc") {
      setProduct((prevState) => ({
        ...prevState,
        description: {
          ...prevState.description,
          [name]: value,
        },
      }));
    } else {
      setProduct((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(addProduct(product));
      setShowModal(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Short Description
            </label>
            <textarea
              name="shortDesc"
              value={product.description.shortDesc}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Detailed Description
            </label>
            <textarea
              name="detailDesc"
              value={product.description.detailDesc}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="mr-4 bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#9BCF53] text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
