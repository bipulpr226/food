import Logo from "../assets/images/resturant-removebg-preview.png"

const Header = () => {
    return(
      <nav className="navbar p-0 navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src={Logo} style={{width:"80px"}}/>
          </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a to="/" className="nav-link" >
               Home🏠
              </a>
               <link to=""/> 
            </li>
            <li className="nav-item">
              <a  to="/about" className="nav-link" >
                AboutUs☺
              </a>
            </li>
            <li className="nav-item">
              <a to="/contact" className="nav-link" >
                ContactUs📞
                </a>
            </li>
            <li className="nav-item">
              <a  to="/cart" className="nav-link" >
                Cart🛒
                </a>
            </li>    
          </ul>
        </div>
      </div>
    </nav>
    );
  };
  export default Header;