import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import { FaGithub, FaLinkedinIn, FaTwitter, FaMailBulk } from "react-icons/fa";
import "./Footer.css";

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
                    jude.koome@student.moringaschool.com</h4>
                </div>

            </div>

            <div className="right">
                <h4>Social</h4>
                <div className="social">
                <FaGithub size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                <FaTwitter size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                <FaLinkedinIn size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />
                </div>
                <br /> <br />
                 {/* Admin Login Link */}
                 <div className="admin-login">
  <Link 
    to="/admin-login" 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2.5 rounded"
  >
    Admin Login
  </Link>
</div>

                <div>
                    <h4 className="ital">Copyright © 2023 Eric, Elsie, Bryan, Jude </h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
