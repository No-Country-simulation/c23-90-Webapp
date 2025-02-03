import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navBar">
      <Link to="/"><img src='/logo.webp' alt="Logo" className="logo"/></Link>
      <ul>
        <li><Link to="/about" className="linkNav">About Us</Link></li>
        <li><Link to="/join" className="linkNav">How to Join</Link></li>
        <li><Link to="/costs" className="linkNav">Costs</Link></li>
        <li><Link to="/benefits" className="linkNav">Benefits</Link></li>
        <li><Link to="/contact" className="linkNav">Contact Us</Link></li>
      </ul>
      <div>
        <Link to="/sign" type="button" class="btn signUp">
          SIGN UP FREE
        </Link>
        <Link to="/login" type="button" class="btn login">
          <i class="bi bi-person-fill"></i>
          LOGIN
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;