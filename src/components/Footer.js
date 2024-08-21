import { SiIfood } from "react-icons/si";
import Logo from"../assets/images/resturant-removebg-preview.png"
import { MdAddLocationAlt } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";

const footer =() =>{
	return(
   <div className="footer  bg-dark text-light mt-5 px-5">
   <div className="container " >
    <img className="icon" src={Logo} width="100px"/>
    <h3 className="font-bold text-size-30px ">FOOD</h3>
    <p>ContactUs📞:9087654321</p>
    <div className="flex justify-center item-center gap-2">
    <p>EmailUs: foodie@123gmail.com</p>
    </div>
    </div>
    <div className="p-3 text-light container "> 
    
< div className="d-flex justify-center gap-3 ">
< FaInstagramSquare fontSize={50}/>
<BsWhatsapp fontSize={50}/>
< AiOutlineFacebook fontSize={50} />

</div>
    </div>
    </div>
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
 