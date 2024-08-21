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
        <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
          <ul className="flex justify-center space-x-4">
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
          </ul>
        </div>
      </div>
    </div>
  </footer>
		)
}

export default footer;
 

 
 
 
 
//  const Footer = () =>{
//     return(
//       <nav className="navbar p-2 navbar-expand-sm  navbar-dark bg-danger">
//       <div className="container">
// <div className="footer-content">
// <h3>Contact Us</h3>
// <p>Email:Info@foodie.com</p>

// <p>Phone:+91 5655556556</p>
// </div>
// <div className="footer-content">
// <h3>Follow Us</h3>
// <li><i className="fa-brands fa-square-facebook"></i></li>
// <li><i className="fa-brands fa-square-instagram"></i></li>
// <li><i className="fa-brands fa-linkedin"></i></li>
// <li><i className="fa-brands fa-square-twitter"></i></li>
// </div>



//       </div>
//     </nav>
//     )
//   };

//   export default Footer;
 