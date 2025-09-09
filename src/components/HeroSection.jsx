import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="img1 floating-img slide-up">
        <img src="/assets/overhead shot of use.png" alt="Overhead Shot" />
      </div>

      <div className="hollow-square nav"></div>

      <div className="hero-content">
        <p id="typing-text">
          Discover the expertise of <br />
          Daniel Adewale .A.
        </p>

        <a href="#tech-stack" className="cta-button border-wrapper">
            <div className="border-content"> VIEW_PORTFOLIO</div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;