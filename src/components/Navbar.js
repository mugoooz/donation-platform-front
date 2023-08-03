import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Your logo image goes here */}
        <img src="https://i.pinimg.com/236x/77/d6/70/77d670dc0d4c230d8f400845a8e59857.jpg" alt="Logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>  
        <Link to="/impact">Impact</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/charity-login">Charity Login</Link>
      </div>
      <div className="donate-btn">
        <button>Donate</button>
      </div>
    </nav>
  );
};

export default Navbar;
