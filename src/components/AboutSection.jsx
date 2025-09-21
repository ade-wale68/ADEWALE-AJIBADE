import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="hollow-square1"></div>

      {/* Text Content */}
      <div className="txt-box">
        <h1>About Daniel</h1>
        <span>Learn more about Daniel.</span>
        <p>
          Daniel Adewale .A. is a dedicated professional based in Lagos with a passion for excellence. 
          With a rich background in his field, he has consistently achieved remarkable milestones 
          and contributed meaningfully to various projects. His commitment to quality and innovation 
          defines his work ethic, making him a sought-after expert in his domain.
        </p>
        <a href="#tech-stack " className="cta-button">GET IN TOUCH</a>
      </div>

      {/* Image */}
      <div className="img3 floating-img">
        <img src="/assets/overhead shot of use.png" alt="Daniel Adewale" />
      </div>
      <hr className="gradient-line" />

    </section>
  );
};

export default AboutSection;
