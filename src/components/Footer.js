import "./Footer.css";

import React from 'react'

// import { FaIconName } from 'react-icons/fa';
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">

                <div className="emailbulk">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    wvmugo29@gmail.com </h4>
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    hawiokatch@gmail.com</h4>
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    bryanwaweru1076@gmail.com</h4>
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    </h4>
                </div>

            </div>

            <div className="right">
                <h4></h4>
                <div className="social">
                <FaGithub size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                <FaTwitter size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                <FaLinkedinIn size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />
                </div>
                <br /> <br />
                <div>
                    <h4 className="ital">Copyright © 2023 Eric, Elsie, Bryan, Jude </h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer