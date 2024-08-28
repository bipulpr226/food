import { SiIfood } from "react-icons/si";
// import Logo from"../assets/images/resturant-removebg-preview.png"
// import { MdAddLocationAlt } from "react-icons/md";
// import { FaInstagramSquare } from "react-icons/fa";
// import { BsWhatsapp } from "react-icons/bs";
// import { AiOutlineFacebook } from "react-icons/ai";
import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const footer =() =>{
	return(

    <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Foodie</h3>
          <p className="text-sm">© 2024 Foodie. All rights reserved.</p>
        </div>
        <div className="w-full md:w-1/3 mb-5 md:mb-0 text-center">
          <ul className="flex justify-center space-x-5">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            <li><a href="#" className="hover:text-gray-400">Cart</a></li>
            <li><a href="#" className="hover:text-gray-400">Instamart</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right">
          <p className="text-sm">Follow us on:</p>
          <ul className="flex justify-center md:justify-end space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
		)
}

export default footer;
 

 
 
 
 
