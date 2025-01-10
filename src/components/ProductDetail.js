import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../cartContext';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const { addToCart } = useCart();
  
  // State to track if product is added to the cart
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">Product not found!</h1>
        <Link to="/" className="text-blue-500 underline mt-4 inline-block">
          Go Back to Home
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true); // Show success message after adding to cart
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Link to="/" className="text-blue-500 underline mb-6 block text-lg">
        <button className="bg-white text-blue-600 py-2 px-6 rounded-lg font-semibold hover:bg-gray-100">
          Return Back
        </button>
      </Link>

      <div className="bg-white rounded-lg shadow-md p-6 lg:p-12 flex flex-col lg:flex-row items-center gap-8">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full lg:w-1/2 h-auto rounded-lg shadow-lg"
        />

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 mt-4 leading-relaxed">{product.description}</p>
          <p className="text-2xl font-bold text-blue-600 mt-6">${product.price}</p>

          {/* Star Rating */}
          <div className="flex items-center mt-4 space-x-1">
            {Array.from({ length: 5 }, (_, index) => (
              <i
                key={index}
                className={`fa fa-star ${index < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
              ></i>
            ))}
            <span className="text-sm text-gray-500">({product.rating} Stars)</span>
          </div>

          {/* Add to Cart and Go to Cart Buttons */}
          <div className="mt-8 flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all"
            >
              Add to Cart
            </button>

            {addedToCart && (
              <Link to="/cart">
                <button className="bg-green-600 text-white py-3 px-8 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-all">
                  Go to Cart
                </button>
              </Link>
            )}
          </div>

          {/* Success Message */}
          {addedToCart && (
            <p className="mt-4 text-green-600 font-semibold">
              Product added to cart successfully!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
