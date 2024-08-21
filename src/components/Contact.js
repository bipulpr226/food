import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Contact Us</h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
            <FaPhoneAlt className="text-4xl text-gray-700 mx-auto mb-4" />
            <h4 className="text-xl font-medium text-gray-800 mb-2">Phone</h4>
            <p className="text-gray-600">+9876543210</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
            <FaMapMarkerAlt className="text-4xl text-gray-700 mx-auto mb-4" />
            <h4 className="text-xl font-medium text-gray-800 mb-2">Address</h4>
            <p className="text-gray-600">123 M.CST, Mumbai, Maharashtra, 12345</p>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <FaEnvelope className="text-4xl text-gray-700 mx-auto mb-4" />
            <h4 className="text-xl font-medium text-gray-800 mb-2">Email</h4>
            <p className="text-gray-600">contact@foodie.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;