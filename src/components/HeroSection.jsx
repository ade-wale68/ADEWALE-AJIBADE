import React from 'react';
import '../styles/HeroSection.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="img1 floating-img slide-up">
        <img className='go1' src="/assets/overhead shot of use.png" alt="Overhead Shot" />
      </div>

      <div className="hollow-square  "></div> 
     

      <div className="hero-content">
        <p id="typing-text">
          Discover the expertise of <br />
          Daniel Adewale .A...
        </p>
        
                              <div className="social-links1">
                                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                      <FaGithub className="social-icon1" />
                                  </a>
                                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                                      <FaLinkedin className="social-icon1" /> 
                                  </a>
                                  <a href="mailto:your.email@example.com">
                                      <FaEnvelope className="social-icon1" />
                                  </a>
                              </div>


        <a href="#tech-stack" className=" border-wrapper">
          <p className=' cta-button border-content'>GET IN TOUCH</p>
                {/* <div className="hollow-square1  "></div>  */}
        </a>

      </div>

      
    </section>
  );
};

export default HeroSection;