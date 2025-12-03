import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      
      {/* Decorative floating square */}
      <div className="hollow-square1" aria-hidden="true"></div>

      {/* Text content */}
      <div className="txt-box">
        <h1>About Daniel</h1>
        <span>Learn more about Daniel</span>
        <p>
          Daniel Adewale .A. is a dedicated professional based in Lagos with a passion for excellence.
          With a rich background in his field, he has consistently achieved remarkable milestones
          and contributed meaningfully to various projects. His commitment to quality and innovation
          defines his work ethic, making him a sought-after expert in his domain.
        </p>
        <a href="#tech-stack" className="cta-button" aria-label="Get in touch with Daniel">
          GET IN TOUCH
        </a>
      </div>

      {/* Profile / Hero image */}
      <div className="img3 floating-img">
        <img
          src="/assets/overhead shot of use.png"
          alt="Daniel Adewale"
        />
      </div>

      {/* Decorative gradient line */}
      <hr className="gradient-line" aria-hidden="true" />
    </section>
  );
};

export default AboutSection;
