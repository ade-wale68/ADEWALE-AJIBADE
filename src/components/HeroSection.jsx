import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/HeroSection.css";
import heroImage from "/assets/overhead shot of use.png";

const HeroSection = () => {
  const fullText = "Discover the expertise of Daniel Adewale A.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const typingSpeed = 90; // milliseconds per character
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* Decorative Hollow Square */}
      <div className="hollow-square"></div>

      {/* Hero Image */}
      <div className="img1 floating-img">
        <img src={heroImage} alt="Daniel Adewale" />
      </div>

      {/* Hero Text */}
      <div className="hero-content">
        <p id="typing-text">
          {displayedText}
          <span className="highlighted-name"></span>
        </p>

        {/* Social Icons */}
        <div className="social-links1">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="social-icon1" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="social-icon1" />
          </a>
          <a href="mailto:your.email@example.com" aria-label="Email">
            <FaEnvelope className="social-icon1" />
          </a>
        </div>

        {/* CTA Button */}
        <a href="#tech-stack" className="border-wrapper">
          <span className="border-content">GET IN TOUCH</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
