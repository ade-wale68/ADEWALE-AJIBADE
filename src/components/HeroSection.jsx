import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">

      {/* Floating Image */}
      <div className="hero-image-wrapper">
        <img
          className="hero-image"
          src="/assets/overhead shot of use.png"
          alt="Overhead Shot of Daniel Adewale"
        />
      </div>

      {/* Decorative Square */}
      <div className="decor-square"></div>

      {/* Main Content */}
      <div className="hero-content">
        <p className="hero-heading" id="typing-text">
          Discover the expertise of <br />
          <span className="highlighted-name">Daniel Adewale A.</span>
        </p>

        {/* Social Icons */}
        <div className="social-links">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="social-icon" />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="social-icon" />
          </a>

          <a href="mailto:your.email@example.com" aria-label="Email">
            <FaEnvelope className="social-icon" />
          </a>
        </div>

        {/* CTA Button */}
        <a href="#tech-stack" className="cta-wrapper">
          <p className="cta-button">GET IN TOUCH</p>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
