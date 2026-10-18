import React from 'react';
import './Footer.css';

import usaflag from '../../assets/usaflag.jpg';
import ukflag from '../../assets/ukflag.jpg';
import canadaflag from '../../assets/canadaflag.jpg';
import { Link } from 'react-router-dom';
const Footer= () =>{
     return(
      <footer className='footer'>
        <div className='footer-top'>
            <div className='footer-col'>
                <h3>COMPANY</h3>
                <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/why-choose-us">Why Choose Us</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/pricing">Pricing & Plans</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    <li><Link to="/investors">Investors</Link></li>
                </ul>
            </div>
            <div className='footer-col'>
                <h3>SERVICES</h3>
                <ul>
                    <li><Link to="/services/web-design">Web Design & Development</Link></li>
                    <li><Link to="/why-choose-us">Why Choose Us</Link></li>
                    <li><Link to="/services/seo">Specialized SEO Services</Link></li>
                    <li><Link to="/services/social">Specialized Social Services</Link></li>
                    <li><Link to="/services/graphics">Specialized Graphics Services</Link></li>
                    <li><Link to="/investors">Investors</Link></li>
                </ul>
            </div>
            <div className='footer-col'>
                <h3>RESOURCES</h3>
                <ul>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/terms">Terms Of Services</Link></li>
                    <li><Link to="/faq">Help & FAQ</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/sitemap">Site Map</Link></li>
                </ul>
                <button className="btn-follow">FOLLOW US</button>
                <div className="social-icons">
                    <Link to="#" className='icon'><i className="fa-brands fa-facebook"></i></Link>
                    <Link to="#" className='icon'><i className="fa-brands fa-square-instagram"></i></Link>
                    <Link to="#" className='icon'><i className="fa-brands fa-linkedin"></i></Link>
                    <Link to="#" className='icon'><i className="fa-brands fa-square-x-twitter"></i></Link>
                </div>
            </div>
        </div>
        <div className='footer-location'>
            <div className='location-card'>
                <div className="flag-container">
            <img src={usaflag} alt="USA Flag" className="flag-icon" />
          </div>
                    <h4>USA:</h4>
                        <p>1st Avenue, SW, Hickory,NC, USA</p>
                        <p>Email: info@thedigitalimpacts.com</p>
                </div>
                <div className='location-card'>
                    <div className="flag-container">
            <img src={ukflag} alt="UK Flag" className="flag-icon" />
          </div>
                    <h4>UK:</h4>
                        <p>Oldham Greater Manchester, United Kingdom</p>
                        <p>Email: info@thedigitalimpacts.com</p>
                </div>
                <div className='location-card'>
                    <div className="flag-container">
            <img src={canadaflag} alt="CANADA Flag" className="flag-icon" />
          </div>
                    <h4>CANADA:</h4>
                        <p>92 Avenue, Surrey, BC, Canada</p>
                        <p>Email: info@thedigitalimpacts.com</p>
                </div>
            </div>
            <hr className='footer-divider'/>
            <div className='footer-bottom'>
                <p>Copyright © 2022 The Digital Impacts. All rights reserved</p>
            </div>
        </footer>
     );
};
export default Footer;