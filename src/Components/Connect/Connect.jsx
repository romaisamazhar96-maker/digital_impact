import React from 'react'
import './Connect.css'
const Contact =() =>{
    return(
    <div className='Contact-wrapper'>
       <div className='Contact-header'>
        <h2>
            Feel Free To <span className='highlight-text'>Contact</span> Us By Submitting
        </h2>
        <h2>
            <span className='highlight-text'>Form Or Contact Live Support</span>
        </h2>
        </div> 
        <div className='Contact-Content'>
            <div className='Contact-left'>
                <div className='map-container'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.307005943685!2d74.2879859!3d31.5157269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903a24f371795%3A0x74beee8aa43e49d5!2sPNY%20Trainings%20-%20Iqbal%20Town%20Branch!5e0!3m2!1sen!2s!4v1789919121558!5m2!1sen!2s"
                     width="100%" height="320" style={{border:0}} allowFullscreen="" loading="lazy" 
                     referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>
                <div className='Contact-details'>
            <div className='info-item'>
                <i className="fa-solid fa-phone"></i>
                <div className='info-text'>
                    <p>+447424997026</p>
                    <p>+447424997000</p>
                </div>
                </div>
                <div className='info-item'>
                <i className="fa-solid fa-envelope"></i>
                <div className='info-text'>
                    <p>info@thedigitalimpacts.com</p>
                </div>
            </div>
        </div>
    </div>
    <div className='contact-right'>
        <div className='contact-card'>
            <form>
                <div className='form-group'>
                    <label>Name</label>
                    <input type='text' placeholder='Type Your Name'/>
                </div>
                 <div className='form-group'>
                    <label>Surname</label>
                    <input type='text' placeholder='Type Your Surname'/>
                </div>
                 <div className='form-group'>
                    <label>Email</label>
                    <input type='email' placeholder='Type Your Email'/>
                </div>
                 <div className='form-group'>
                    <label>Contact Number</label>
                    <input type='tel' placeholder='Type Your Number'/>
                </div>
                <button type='submit' className='submit-btn'>Submit</button>
                </form>
             </div>
        </div>
    </div>
    <div className='cta-section'>
        <div className='blue-bar'> </div>
            <h2>Let's Work Together</h2>
            <p>Driving your business forward with strong marketing strategies</p>
            <p>Get a free consultation to make this happen!</p>
            <button className='connect-btn'>Connect</button>
    </div>
    </div>
    );
};
export default Contact