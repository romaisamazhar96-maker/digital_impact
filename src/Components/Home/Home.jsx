import React from "react";
import "./Home.css";
import heroImg from "../../assets/home-Image.jpg";
import { Link } from "react-router-dom";
import Services from '../Services/Services'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Connect from '../Connect/Connect'
const Home = () => {
  return (
    <>
     <section className="hero-container">
        <div className="hero-left">
          <img src={heroImg} alt="Hero" className="hero-image" />
        </div>
        <div className="hero-right">
            <h1 className="hero-title">We are full Services<br/>
                <span className="blue-text">Digital Marketing Agency</span>
            </h1>
            <div className="subtitle-container">
            <h2 className="hero-subtitle">Welcome To The Digital Impacts</h2>
            </div>
            <p className="hero-description">
                We partner with our clients with a team of professionals, we are able to provide
          the best on our side. We strive to be leaders in digital marketing services worldwide
          by revolutionizing the industry and setting new standards of professionalism and success.
          </p>
          <button className="message-btn">Message Us Now</button>
        </div>
     </section>
     <Services/>
     <About/>
     <Portfolio/>
     <Connect/>
     </>
  );
};
export default Home;