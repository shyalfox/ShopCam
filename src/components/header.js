import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ searchValue, setSearchValue }) => {
  return (
    <header className="bg-black bg-opacity-75 p-4 sticky top-0 z-50">
      <div className="container mx-auto grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 items-center gap-4">
        {/* Company Name */}
        <h1 className="text-3xl font-extrabold text-white col-span-2 lg:col-span-3">
          Cam Shop
        </h1>

        {/* Search Bar */}
        <div className="col-span-4 lg:col-span-3 flex items-center">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full p-2 pl-10 pr-10 rounded-full text-gray-900 focus:outline-none"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {/* Search Icon */}
            <i className="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            {/* Clear Icon */}
            {searchValue && (
              <i
                className="fa fa-times absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setSearchValue('')}
              ></i>
            )}
          </div>
        </div>

        {/* Navbar Links */}
        <nav className="col-span-2 lg:col-span-4 flex justify-center space-x-4">
          <button
            onClick={() =>
              document
                .getElementById('main-div')
                .scrollIntoView({ behavior: 'smooth' })
            }
            className="text-white hover:text-gray-300 focus:outline-none transition-colors duration-200"
          >
            Home
          </button>
          <Link to="/">
            <button
              onClick={() =>
                document
                  .getElementById('products-section')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              className="text-white hover:text-gray-300 focus:outline-none transition-colors duration-200"
            >
              Products
            </button>
          </Link>
          <button
            onClick={() =>
              document
                .getElementById('about-section')
                .scrollIntoView({ behavior: 'smooth' })
            }
            className="text-white hover:text-gray-300 focus:outline-none transition-colors duration-200"
          >
            About Us
          </button>
          <button
            onClick={() =>
              document
                .getElementById('contact-section')
                .scrollIntoView({ behavior: 'smooth' })
            }
            className="text-white hover:text-gray-300 focus:outline-none transition-colors duration-200"
          >
            Contact
          </button>
        </nav>

        {/* Icons */}
        <div className="col-span-2 lg:col-span-2 flex justify-end space-x-4">
          <Link to="/cart">
           
            <button
              onClick={() =>
                document
                  .getElementById('products-section')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              className="text-white hover:text-gray-300 focus:outline-none transition-colors duration-200"
            >
              <i className="fa fa-shopping-basket"></i>
            </button>
          </Link>
          <a
            href="#profile"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            <i className="fas fa-user"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
