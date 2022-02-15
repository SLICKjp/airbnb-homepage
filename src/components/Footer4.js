import React from 'react';
import {FaFacebookSquare,FaTwitter,FaInstagram} from "react-icons/fa";

const Footer4 = () => {
    return (
        <div className="footer-content-4">
            <h4 className="footer-title">About</h4>
            <ul className="footer-items">
                <li>Newsroom</li>
                <li>Learn about new features</li>
                <li>Letter from our founders</li>
                <li>Carrers</li>
                <li>Investors</li>
                <li>Airbnb Luxe</li>
            </ul>
          <div className="footer-icons">  
         <FaFacebookSquare/>
         <FaTwitter/>
         <FaInstagram/>
         </div>
        </div>
    )
}

export default Footer4
