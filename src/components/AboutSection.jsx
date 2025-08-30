import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
    return (

        

        <section id='about' className="about-section">
            <div className="hollow-square1"></div>
            <div className='txt-box '>
            <h1>About Daniel</h1>
            <span>
              Learn more about Daniel.
            </span>
            <p>
                Daniel Adewale .A. is a dedicated professional based in Lagos with a passion for excellence. With a rich background in his field, he has consistently achieved remarkable milestones and contributed meaningfully to various projects. His commitment to quality and innovation defines his work ethic, making him a sought-after expert in his domain.
            </p>
            <a href="#tech-stack" className="cta-button">GET IN TOUCH</a>
            {/* <a href="#projects" className="btn1">GET IN TOUCH</a> */}
            </div>
            <div className="img3 floating-img"><img src="../src/assets/overhead shot of use.png" alt="" /></div>
        </section>
    );
};

export default AboutSection;