import React from 'react';
import '../styles/HeroSection.css';
// import "../styles/style.css"

const HeroSection = () => {
  return (
    <section id='hero' className="hero-section">
      
      <div className="img1 floating-img slide-up">
        <img src="/assets/overhead shot of use.png" alt="" />
      </div>

      <div className="hollow-square nav"></div>

      <div className="hero-content">
        {/* <h1>WELCOME TO DANIEL ADEWALE .A.</h1> */}
        <p id='typing-text'>
          Discover the expertise of <br />
          Daniel Adewale .A.
        </p>

        <a href="#tech-stack" className="cta-button">VIEW_PORTFOLIO</a>


      </div>
      
    </section>
  );
};

export default HeroSection;