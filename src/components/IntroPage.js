import React from 'react';
import intro from '../assets/intro.webp'; // Ensure the image path is correct

const IntroPage = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${intro})` }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
        {/* Content */}
        <div className="text-center text-white px-4 sm:px-8 max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Cam Shop</h1>
          <p className="text-base sm:text-lg mb-6">
            Discover the best products and Services at unbeatable prices. Quality and value just tailored for you!
          </p>
          <button
            className="bg-white text-blue-600 py-2 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
            onClick={() =>
              document
                .getElementById("products-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
