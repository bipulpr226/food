import Logo from"../assets/images/resturant-removebg-preview.png"
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import UserContext from "../utils/UserContext";
import {useContext} from 'react'
import { useSelector } from "react-redux";

const Header = () => {
  const isOnline=useOnline();
  const cartItems=useSelector((store)=>store.cart.items);
  const userData = useContext(UserContext);
  console.log("userData", userData);
  console.log("online status",isOnline)
    return(
      <nav className="navbar p-0 navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="">
      <img src={Logo} style={{width:"80px"}}/>
      <span>{isOnline?"🟩":"🟥"}</span>
        </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link" >
             Home🏠
            </Link>
            {/* <link to=""/> */}
          </li>
          <li className="nav-item">
            <Link  to="/about" className="nav-link">
              AboutUs☺
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" >
              ContactUs📞
              </Link>
          </li>
          <li className="nav-item">
            <Link  to="/Instamart" className="nav-link" >
              Instamart💐
              </Link>
              </li>
          <li className="nav-item">
            <Link  to="/cart" className="nav-link" >
              Cart🛒- {cartItems.length} items
              </Link>
          </li>   
         
        </ul>
      </div>
    </div>
  </nav>
    );
  };
  export default Header;