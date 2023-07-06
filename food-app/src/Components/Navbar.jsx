import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from "../Assets/png-transparent-logo-brand-fast-food-franchising-subway-subway-sandwich-food-text-logo-removebg-preview.png"
import {GiShoppingCart} from "react-icons/gi"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src={logo1} alt="" className='logo'/>
            <h1 className='navbar-nom'>Food<span>dev</span></h1>
        </div>
            <ul className='navbar-link'>
                <Link to="/" style={{textDecoration: "none"}}>
                    <li>OUR MENU</li>
                </Link >
                <Link to="/Blog" style={{textDecoration: "none"}}>
                    <li>BLOG</li>
                </Link>
                <Link to="/Features" style={{textDecoration: "none"}}>
                    <li>FEATURES</li>
                </Link>
                <Link to="/Pages" style={{textDecoration: "none"}}>
                    <li>PAGES</li>
                </Link>
                <Link to="/Contact" style={{textDecoration: "none"}}>
                    <li>CONTACT US</li>
                </Link>
             </ul>
            <div className="navbar-others">  
                <div className='navbar-count'>2</div> 
                    <div className="navbar-icon">
                        <GiShoppingCart/>
                    </div>
            </div>
              <button className='navbar-btn'>RESERVATION</button>
    </div>
  )
}

export default Navbar