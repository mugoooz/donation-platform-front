import React, { useState } from 'react';

import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // return (
    // <nav className="navbar">
    //   <div className="logo">
    //     <h1 className="navbar-title">Shiriki</h1>
    //     <img src="https://i.pinimg.com/236x/77/d6/70/77d670dc0d4c230d8f400845a8e59857.jpg" alt="Logo" />
    //   </div>

    //   <div className="nav-links">
    //     <Link to="/">Home</Link>
    //     <Link to="/about">About Us</Link>
    //     <Link to="/impact">Impact</Link>
    //     <Link to="/donate">Donate</Link>
    //     <Link to="/charity-login">Charity Login</Link>
    //   </div>

    //   <div className="donate-btn">
    //     <Link to="/donate"> {/* Wrap the button with a Link to the "/donate" route */}
    //       <button className="bg-f57c00 text-white px-4 py-2 rounded">Donate</button>
    //     </Link>
    //   </div>
    // </nav>

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg": "header"} >
        <Link to = "/">
            <h1>Shiriki</h1>
        </Link>

        <ul className= {click ? "nav-menu active" :
        "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About us</Link>
            </li>
            <li>
                <Link to="/impact">Impact</Link>
            </li>
            <li>
                <Link to="/donate">Donate</Link>
            </li>
            <li>
                <Link to="/charity-login">Charity Login</Link>
            </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
            {click ? 
                (<FaTimes size={20} style={{color: "#fff"}} />)
                    :
                (<FaBars size={20} style={{color: "#fff"}} />)}
            
        </div>

    </div>

  );
};

export default Navbar;
