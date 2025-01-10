// CartPage.js
import React from 'react';
import { useCart } from '../cartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto py-12 text-center min-h-[50vh]">
        <h1 className="text-2xl font-bold text-red-600 pt-14 pb-14">Your cart is empty!</h1>
        <Link to="/">
                        <button className="bg-green-600 text-white py-3 px-8 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-all">
                          Go to Products
                        </button>
                      </Link>
      </div>
    );
  }

  const totalPrice = cart.reduce((total, product) => total + parseFloat(product.price), 0);

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>

      {/* Cart Items */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {cart.map((product) => (
          <div key={product.id} className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg" />
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(product.id)}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="mt-8 flex space-x-4">
        <h2 className="text-2xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h2>
        <Link to="/">
                        <button className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-700 transition-all">
                          Go to Products
                        </button>
                      </Link>
        <button
          onClick={clearCart}
          className="bg-red-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-700 transition-all"
        >
          Clear Cart
        </button>
      </div>
      
    </div>
  );
};

export default CartPage;
