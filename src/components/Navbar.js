import React, { useState } from 'react';

import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {


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
