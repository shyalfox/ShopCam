import React from "react";
import one from '../assets/1.webp'; 
import two from '../assets/2.jpeg'; 
import three from '../assets/3.jpg'; 

const AboutUs = () => {
  return (
    <div className=" min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-800">
          About <span className="text-blue-600">Us</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          We are a passionate team dedicated to delivering the best products and
          services to our customers. Our mission is to provide top quality
          products and services to our clients.
        </p>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
            >
              <div className="w-24 h-24 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-blue-600">{member.position}</p>
              <p className="mt-2 text-gray-600 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto mt-16 bg-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Our <span className="text-blue-600">Mission</span>
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To deliver the highest quality camera repair services and top-tier
              photography equipment, ensuring our customers capture life's
              moments without a hitch. We are committed to providing expert
              service and personalized solutions.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Our <span className="text-blue-600">Vision</span>
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To become the go-to destination for photographers and camera
              enthusiasts worldwide, offering trusted repairs, quality products,
              and the latest innovations to help our customers capture every
              moment with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    id: 1,
    name: "John Zukerberg",
    position: "CEO & Founder",
    bio: "John is the visionary behind our camera repair and sales business, dedicated to providing top-notch service and quality products to our customers.",
    image: one,
  },
  {
    id: 2,
    name: "Rough Bezozs",
    position: "Marketing Head",
    bio: "With a deep passion for photography and marketing, Rough leads our efforts to bring the latest camera products and services to a wider audience.",
    image: two,
  },
  {
    id: 3,
    name: "Melon Husk",
    position: "Lead Developer",
    bio: "Melon combines his love for photography and technology to create seamless online experiences for our customers, ensuring a smooth shopping and service booking process.",
    image: three,
  },
];

export default AboutUs;
