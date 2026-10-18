import React from'react';
import Logo from '../../assets/digital-impacts.jpg';
import "./Navbar.css";
import {Link} from 'react-router-dom';

const Navbar= () =>{
    return(
    <>
    <nav className="navbar">
        <div className="Logo-Section">
            <img src={Logo} alt="Logo" className="Logo" style={{height:"80px"}}/>
        </div>
        <ul className="menulist">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/Portfolio">Portfolio</Link></li>
            <li><Link to="/Connect">Connect</Link></li>
        </ul>
        <div className="nav-icons">
            <Link to="/Contact" className="contact-btn">Contact Us</Link>
        </div>
    </nav>
    </>
    );
};
export default Navbar;