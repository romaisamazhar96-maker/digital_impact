import React from 'react'
import './About.css'
import realestate from '../../assets/Estate.jpg'
import education from '../../assets/Education.jpg'
import commerce from '../../assets/Commerce.jpg'
import hospitality from '../../assets/Hospitality.jpg'
import healthcare from '../../assets/Health-Care.jpg'
import fintech from '../../assets/Fintech.jpg'

const About = () => {
    return (
        <div className='about-container'>
            <div className='industries-section'>
                <div className='industries-header'>
                    <h2>Industries We</h2><br/>
                    <h2 className='blue-text'>work with</h2>
                    <p>
                        We work as a technology partner for various industries<br/>
                        Our expertise can be applied to the specific demands<br/> and nuances in your industry
                    </p>
                </div>
                <div className='industries-grid'>
                    <div className='industry-card'> 
                        <img src={realestate} alt="Real Estate" className='industry-image'/>
                        <h3>Real Estate</h3>
                    </div>
                    <div className='industry-card'> 
                        <img src={education} alt="Education" className='industry-image'/>
                        <h3>Education</h3>
                    </div>
                    <div className='industry-card'> 
                        <img src={commerce} alt="Commerce" className='industry-image'/>
                        <h3>Commerce</h3>
                    </div>
                    <div className='industry-card'> 
                        <img src={hospitality} alt="Hospitality" className='industry-image'/>
                        <h3>Hospitality</h3>
                    </div>
                    <div className='industry-card'> 
                        <img src={healthcare} alt="Healthcare" className='industry-image'/>
                        <h3>Healthcare</h3>
                    </div>
                    <div className='industry-card'> 
                        <img src={fintech} alt="Fintech" className='industry-image'/>
                        <h3>Fintech</h3>
                    </div>
                </div>
            </div>
           <div className='about-header'>
                <h1>Everything You Need To Know About</h1>
            </div>
        <div className='about-content'>
            <div className='info-block'>
                <h2>The Digital Impact</h2>
                <p>
                    The <strong>Digital Impacts</strong> create a perfect company for its customers. 
            <strong> Digital Impacts</strong> offers the best services to ensure your business thrives online. 
            Because we partner with our clients with a team of professionals, we can to provide the best on 
            our side. We strive to be leaders in digital marketing services worldwide by revolutionizing the 
            industry and setting new standards of professionalism and success.
                </p>
            </div>
            <div className='info-block'>
                <h2>Our Vision</h2>
                <p>
                    We strive to be leaders in digital marketing services across the world by revolutionizing the 
            industry and setting new standards of professionalism and success. Our vision is to become 
            a top agency offering online marketing strategies, digital sales solutions, and internet 
            brand management in the international business sphere.
                </p>
        </div>
        <div className='info-block'>
            <h2>Our Mission</h2>
            <p>
                Our mission is to partner with customers for their success as we create diverse client base 
            including companies and individuals functioning in many different fields and economies. We will 
            be best in providing consistently successful, unique, and forward-thinking digital marketing 
            solutions that take into account the individual requirements and unique demands of each client.
            </p>
        </div>
        </div>
        <div className="stats-section">
            <div className="stat-card dark-blue">
                <h2>10000+</h2>
                <p>Domain Names Registered</p>
            </div>
            <div className="stat-card bright-blue">
                <h2>90000+</h2>
                <p>Websites Hosted</p>
            </div>
            <div className="stat-card light-gray">
                <h2>45000+</h2>
                <p>Customers</p>
            </div>
        </div>
        </div>
    );
};
export default About
