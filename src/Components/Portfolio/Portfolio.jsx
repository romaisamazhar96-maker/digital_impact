import React from 'react'
import './Portfolio.css'
import revive from '../../assets/Revive.jpg'
import voeus from '../../assets/Voeux.jpg'
import kings from '../../assets/Kingz.jpg'
import Unifresh from '../../assets/Unifresh.jpg'
const Portfolio =()=>{
    return(
    <div className="portfolio-container">
        <div className="portfolio-header">
            <h1>Project We Have Delivered</h1>
            <p>
                Over the past 10 years, we have designed and built a wide range of high-quality products from scratch. 
                Our team has finished various web and mobile apps related to various spheres including e-learning, 
                healthcare, e-commerce, advertising, augmented reality, action sports, finance and sharing economy.
            </p>
        </div>
        <div className='portfolio-item'>
            <div className='project-info'>
                <span className='industry-tag'>INDUSTRY</span>
                <h2 className='project-title'>REVIVE</h2>
                <p className='project-subtitle'>Revive Beauty Salon & Institute</p>

                <div className='tech-badge'>
                    <span className='badge-icon'><i class="fa-solid fa-list"></i></span>
                    <span className='badge-icon'>Web Development</span>
                </div>
                <div className='tech-badge'>
                    <span className='badge-icon'><i class="fa-solid fa-list"></i></span>
                    <span className='badge-icon'>Quality Assurance</span>
                </div>
                <div className='tech-badge'>
                    <span className='badge-icon'><i class="fa-brands fa-react"></i></span>
                    <span className='badge-icon'><i class="fa-brands fa-aws"></i></span>
                </div>
            </div>
            <div className='project-image-container'>
                <img src={revive} alt="Revive-Project" className='Project-img'/>
            </div>
        </div>
        <div className='portfolio-item reverse'>
            <div className='project-info'>
                <span className='industry-tag'>INDUSTRY</span>
                <h2 className='project-title'>Voeus</h2>
                <p className='project-subtitle'>Natural Skin Care</p>

                <div className='tech-badge'>
                    <span className='badge-icon'><i class="fa-solid fa-list"></i></span>
                    <span className='badge-icon'>Web Development</span>
                </div>
                <div className='tech-badge'>
                    <span className='badge-icon'><i class="fa-solid fa-list"></i></span>
                    <span className='badge-icon'>Quality Assurance</span>
                </div>
                <div className='tech-badge'>
                    <span className='badge-icon'><i class="fa-brands fa-wikipedia-w"></i></span>
                    <span className='badge-icon'><i class="fa-brands fa-aws"></i></span>
                </div>
            </div>
            <div className='project-image-container'>
                <img src={voeus} alt="Revive-Project" className='Project-img'/>
            </div>
        </div>
        <div className='portfolio-item'>
            <div className='project-info'>
                <span className='industry-tag'>INDUSTRY</span>
                <h2 className='project-title'>KINGS</h2>
                <p className='project-subtitle'>Ecommerce Website</p>

                <div className='tech-badge'>
                    <span className='badge-icon'><i class="fa-solid fa-list"></i></span>
                    <span className='badge-icon'>Web Development</span>
                </div>
                <div className='tech-badge'>
                    <span className='badge-icon'><i class="fa-solid fa-list"></i></span>
                    <span className='badge-icon'>Quality Assurance</span>
                </div>
                <div className='tech-badge'>
                    <span className='badge-icon'><i class="fa-brands fa-wikipedia-w"></i></span>
                    <span className='badge-icon'><i class="fa-brands fa-aws"></i></span>
                </div>
            </div>
            <div className='project-image-container'>
                <img src={kings} alt="Revive-Project" className='Project-img'/>
            </div>
        </div>
        <div className='portfolio-item reverse'>
            <div className='project-info'>
                <span className='industry-tag'>INDUSTRY</span>
                <h2 className='project-title'>UNIFRESH</h2>
                <p className='project-subtitle'>Fruit and Vegetable Retail Store</p>

                <div className='tech-badge'>
                    <span className='badge-icon'><i class="fa-solid fa-list"></i></span>
                    <span className='badge-icon'>Web Development</span>
                </div>
                <div className='tech-badge'>
                    <span className='badge-icon'><i class="fa-solid fa-list"></i></span>
                    <span className='badge-icon'>Quality Assurance</span>
                </div>
                <div className='tech-badge'>
                    <span className='badge-icon'><i class="fa-brands fa-react"></i></span>
                    <span className='badge-icon'><i class="fa-brands fa-aws"></i></span>
                </div>
            </div>
            <div className='project-image-container'>
                <img src={Unifresh} alt="Revive-Project" className='Project-img'/>
            </div>
        </div>
    </div>
    );
};
export default Portfolio;