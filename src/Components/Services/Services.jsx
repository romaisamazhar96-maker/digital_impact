import React from 'react'
import "./Services.css"
const Services = () => {
    return (
        <section className="services-container">
            <div className="services-header">
                <h2>
                    We<span className="blue-text">Provide</span>The Best<br /> Services with<span className="blue-text">Our Developers</span>
                </h2>
            </div>
            <div className="services-grid">
                <div className="service-card">
                    <h3>Digital Marketing</h3>
                    <div className="card-icons"><i class="fa-solid fa-rectangle-ad"></i></div>
                    <p className="card-description">
                        The <span className="blue-highlight">Digital Impacts</span> have<br/> compiled a list of best <br/>digital marketing companies in<br/> the world.
                    </p>
                </div>
                <div className="service-card">
                 <h3>Web Development</h3>
                    <div className="card-icons"><i class="fa-brands fa-react"></i></div>
                    <p className="card-description">
                        Web design services comprise <br/>the process of user interface <br/><span className="blue-highlight">(UI)</span> and user experience <span className="blue-highlight">(UX)</span><br/> design of any web-based <br/>solution.
                    </p>
            </div>
            <div className="service-card">
                 <h3>Graphic Designing</h3>
                    <div className="card-icons"><i class="fa-solid fa-brush"></i></div>
                    <p className="card-description">
                        Create visual concepts to<br/> communicate ideas that<br/> inspire and captivate <br/>consumers, creative thinking, <br/>an aptitude towards art and<br/> design.
                    </p>
            </div>
            <div className="service-card">
                 <h3>Content Writer</h3>
                    <div className="card-icons"><i class="fa-solid fa-book"></i></div>
                    <p className="card-description">
                        That <span className="blue-highlight">content</span> can include blog posts, video or podcast scripts, ebooks or whitepapers, press releases, product category descriptions, landing page or social media.
                    </p>
            </div>
            <div className="service-card">
                 <h3>SEO</h3>
                    <div className="card-icons"><i class="fa-brands fa-react"></i></div>
                    <p className="card-description">
                       Help search engines find, crawl, and index your content efficiently. The website can become easily findable, more relevant and popular towards user search querie.
                    </p>
            </div>
            </div>
        </section>
    );
};
export default Services