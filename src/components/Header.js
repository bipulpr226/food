import Logo from"../assets/images/resturant-removebg-preview.png"
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import UserContext from "../utils/UserContext";
import {useContext} from 'react'
import { useSelector } from "react-redux";
import { RxCaretDown } from "react-icons/rx";
import { MdOutlineAddHome } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { MdOutlineAddIcCall } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5"
// const Header = () => {
//   const isOnline=useOnline();
//   const cartItems=useSelector((store)=>store.cart.items);
//   const userData = useContext(UserContext);
//   console.log("userData", userData);
//   console.log("online status",isOnline)
//     return(
//       <nav className="navbar p-0 navbar-expand-sm bg-light navbar-light">
//     <div className="container-fluid">
//       <Link className="navbar-brand" to="">
//       <img src={Logo} style={{width:"80px"}}/>
//       <span>{isOnline?"🟩":"🟥"}</span>
//         </Link>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link to="/Home" className="nav-link" >
//              Home
//             </Link>
//             {/* <link to=""/> */}
//           </li>
//           <li className="nav-item">
//             <Link  to="/about" className="nav-link">
//               AboutUs
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/contact" className="nav-link" >
//               ContactUs📞
//               </Link>
//           </li>
//           <li className="nav-item">
//             <Link  to="/Instamart" className="nav-link" >
//               Instamart💐
//               </Link>
//               </li>
//           <li className="nav-item">
//             <Link  to="/cart" className="nav-link" >
//               Cart🛒- {cartItems.length} items
//               </Link>
//           </li>   
         
//         </ul>
//       </div>
//     </div>
//   </nav>
//     );
//   };
function Header() {
  const cartItems=useSelector((store)=>store.cart.items);
  return (
    <>
  
    <header className="p-[15px] shadow-xl">
<div className="max-w-[1200px] mx-auto   flex items-center">
<div className="w-[100px]">
<img src={Logo} className='w-full' style={{width:"80px"}}/>
</div>
<div className="">
<span className="font-bold border-b-[3px] border-[black]"> Vikhroli</span> Ghatkoper, Bhandup, Mulund <RxCaretDown fontSize={25} className="font-bold inline  text-[#fc8019]"/>
</div>

<ul className=" bar d-flex gap-6 font-semibold  hover:text-blue">
  <li className=" gap-1 hover:text-sky-800" >
    <Link className="nav-link d-flex" to="">
    <MdOutlineAddHome size={20}/>
    Home 
    </Link>
  </li>

  <li className="flex hover:text-sky-800">
  <Link className="nav-link d-flex" to="/about">
    < IoIosContact size={20}/> About
    </Link>
  </li>
  <li className="flex hover:text-blue-800">
  <Link className="nav-link d-flex" to="/contact">
    <MdOutlineAddIcCall  size={20}/>Contact Us
    </Link>
  </li>
  <li className="flex hover:text-sky-800">
  <Link className="nav-link d-flex" to="/cart">
    <IoCartOutline size={20}/>Cart<sub>{cartItems.length}</sub>
    </Link>
  </li>
    <li className="flex hover:text-sky-800">
    <Link className="nav-link d-flex" to ="/instamart">
    <IoCartOutline size={20}/>Instamart
    </Link>
  </li>
</ul>
</div>
    </header>
    </>
  );
}
  export default Header;