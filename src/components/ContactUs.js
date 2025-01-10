import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto py-16 ">
      {/* Title Section */}
      <div className="text-center mb-12 ">
       
        <h1 className="text-5xl font-extrabold text-gray-800">
          Contact <span className="text-blue-600">Us</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Book an Appointment</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Book Appointment
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact Information</h2>
          <div className="mb-4">
            <p className="text-lg text-gray-700 font-medium">Phone:</p>
            <p className="text-gray-600">+977 9800000000</p>
          </div>

          <div className="mb-4">
            <p className="text-lg text-gray-700 font-medium">Email:</p>
            <p className="text-gray-600">cam1support@gmail.com</p>
          </div>

          <div className="mb-4">
            <p className="text-lg text-gray-700 font-medium">Address:</p>
            <p className="text-gray-600">Budanilkantha,Ktm,Nepal</p>
          </div>

          {/* Optional: Embed a Google Map */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Find Us Here:</h3>
            <iframe
              className="w-full h-64 rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799126015!2d85.3647036!3d27.7647658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1c257b30a06f%3A0x9819a88de0ee753!2sBudhanilkantha%2C%20Nepal!5e0!3m2!1sen!2sin!4v1673432236074!5m2!1sen!2sin"
              title="Company Location"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
