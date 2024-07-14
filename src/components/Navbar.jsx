import React from "react"
import '../styles/Navbar.css'

const Navbar = () => {

  return (
    <nav className="navbar">
            <div className="logo">The Denim University</div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#contact">Shopping Cart</a></li>
            </ul>
        </nav>
  )
}

export default Navbar
