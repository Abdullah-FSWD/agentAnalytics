import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      {status === "loading" ? (
        <Skeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 shadow-lg rounded-lg w-full h-80 flex flex-col items-center transition-transform transform ">
              <img
                src={product.image}
                alt={product.name}
                className="mb-4 h-32 w-full object-cover rounded-md hover:scale-105"
              />
              <h2 className="text-lg font-bold mb-1 text-center">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-2 text-center">${product.price}</p>
              <p className="text-sm text-gray-500 mb-4 text-center truncate">
                {product.description.shortDesc}
              </p>
              <Link
                to={`/product/${product.id}`}
                className="text-white bg-[#9BCF53] p-2 rounded mt-auto block text-center hover:scale-105">
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
