import React from "react";  
import './Navbar.css';
import { FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return(
    <div><nav className="navbar navbar-expand-lg">
  <div className="container">
    <Link className="navbar-brand" to="/"><b><FaBookReader/> &nbsp; TODO</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-1">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>

         <li className="nav-item mx-1">
          <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
        </li>

         <li className="nav-item mx-1">
          <Link className="nav-link active" aria-current="page" to="/todo">ToDo</Link>
        </li>

         <li className="nav-item mx-1">
          <Link className="nav-link active btn-nav" aria-current="page" to="/signup">Sign Up</Link>
        </li>

         <li className="nav-item mx-1">
          <Link className="nav-link active btn-nav" aria-current="page" to="/signin">Sign In</Link>
        </li>

         <li className="nav-item mx-1">
          <Link className="nav-link active btn-nav" aria-current="page" to="/">Log Out</Link>
        </li>

        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#"><img className = "img-fluid user-logo" src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png" alt="NA"/></Link>
        </li> */}

       
      </ul>
      
    </div>
  </div>
</nav></div>
  )
}


export default Navbar;
