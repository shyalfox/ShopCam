import React from 'react';
import { Link } from "react-router-dom";

const ProductPage = ({ products }) => {
  return (
    <div className="container mx-auto py-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-2">
      {products.map((product) => (
  <Link to={`/product/${product.id}`} key={product.id}>
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>
        <div className="flex items-center mt-2">
          {Array.from({ length: 5 }, (_, index) => (
            <i
              key={index}
              className={`fa fa-star ${index < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}
            ></i>
          ))}
        </div>
        <p className="text-blue-600 font-semibold mt-2">{`$${product.price}`}</p>
      </div>
    </div>
  </Link>
))}

      </div>
    </div>
  );
};

export default ProductPage;
