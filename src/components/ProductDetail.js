import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === parseInt(id))
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center">
        <img
          src={product.image}
          alt={product.name}
          className="md:w-1/2 w-full mb-4 md:mb-0"
        />
        <div className="md:ml-4">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-xl">{product.price}</p>
          <p>{product.description}</p>
          <button className="bg-[#416D19] text-white p-2 rounded mt-4">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
