import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaCcMastercard, FaCcVisa, FaPaypal, FaBitcoin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Payment Methods */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Payment Methods</h3>
            <div className="flex flex-wrap ">
              <div className="flex items-center space-x-2 w-1/2 mb-2">
                <FaCcMastercard
                  size={30}
                  className="text-gray-400 hover:text-blue-500"
                />
                <span className="text-gray-400">MasterCard</span>
              </div>
              <div className="flex items-center space-x-2 w-1/2 mb-4">
                <FaCcVisa
                  size={30}
                  className="text-gray-400 hover:text-blue-500"
                />
                <span className="text-gray-400">Visa</span>
              </div>
              <div className="flex items-center space-x-2 w-1/2 mb-4">
                <FaPaypal
                  size={30}
                  className="text-gray-400 hover:text-blue-500"
                />
                <span className="text-gray-400">PayPal</span>
              </div>
              <div className="flex items-center space-x-2 w-1/2 mb-4">
                <FaBitcoin
                  size={30}
                  className="text-gray-400 hover:text-blue-500"
                />
                <span className="text-gray-400">Bitcoin</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <ul>
              <li className="mb-2">Email: cam1support@gmail.com</li>
              <li className="mb-2">Phone: +977 9800000000</li>
              <li className="mb-2">Address: Budanikantha, Ktm, Nepal</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="www.facebook.com"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="www.twitter.com"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="www.instagram.com"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="www.linkedin.com"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 rounded-md text-gray-800 mb-2"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Cam Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
