import React from 'react'
import logo from '../images/airbnb1.png';
function Navbar() {
    return (
       <nav className = "navbar">
           <img className = "airbnb-logo"src={logo} alt=""/>
       </nav>
    )
}

export default Navbar
