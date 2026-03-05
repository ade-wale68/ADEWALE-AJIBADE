import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram, FaDiscord, FaMapMarkerAlt, FaSuitcase } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/HeroSection.css";
import heroImage from "/assets/overhead shot of use.png";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const [fullText, setFullText] = useState("Hi, I'm Amine");
  const [subText, setSubText] = useState("Web Enthusiast");
  const [description, setDescription] = useState(
    "I create beautiful, functional, and user-centered digital experiences. With 2+ years of experience in web development, I bring ideas to life through clean code and thoughtful design."
  );
  const [displayedText, setDisplayedText] = useState("");

  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  // Typing Animation
  useEffect(() => {
    let index = 0; // Start at 0
    const speed = 80;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [fullText]);

  // GSAP Animations
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.from(imgRef.current, {
      opacity: 1, // Ensure visibility
      y: 0, // Remove unnecessary translation
      duration: 1.3,
      ease: "power3.out",
    })
      .from(
        textRef.current.children,
        {
          opacity: 1, // Ensure visibility
          y: 0, // Remove unnecessary translation
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.8"
      );

    // Parallax hover effect
    const img = imgRef.current;
    img.addEventListener("mousemove", (e) => {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(img, {
        duration: 0.4,
        rotationY: x / 40,
        rotationX: -y / 40,
        transformPerspective: 500,
      });
    });

    img.addEventListener("mouseleave", () => {
      gsap.to(img, { rotationX: 0, rotationY: 0, duration: 0.5 });
    });
  }, []);

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      <div className="hollow-square"></div>

      <div className="hero-content" ref={textRef}>
        <p className="typing-line">
          {displayedText}
          <span className="cursor">|</span>
        </p>
        <h2>{subText}</h2>
        <p className="description">{description}</p>

        <span className="locate">
          <a href="https://www.linkedin.com/in/adebayo-ajibade-702052248">
            <FaMapMarkerAlt className="social-icon2" />
            Based in Nigeria
          </a>
          <a href="#">
            <FaSuitcase className="social-icon2" />
            Available Now
          </a>
        </span>

        <div className="cta-buttons">
          <a href="#contact" className="cta-button primary">Hire Me</a>
          <a
            href="/path-to-cv.pdf"
            className="cta-button secondary"
            download
          >
            Download CV
          </a>
        </div>

        <div className="social-links1">
          <a href="https://github.com/yourusername">
            <FaGithub className="social-icon1" />
          </a>
          <a href="https://linkedin.com/in/yourusername">
            <FaLinkedin className="social-icon1" />
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope className="social-icon1" />
          </a>
          <a href="https://instagram.com/yourusername">
            <FaInstagram className="social-icon1" />
          </a>
          <a href="https://twitter.com/yourusername">
            <FaTwitter className="social-icon1" />
          </a>
        </div>
      </div>

      <div className="img1 floating-img" ref={imgRef}>
        <img src={heroImage} alt="Daniel Adewale" />
      </div>
    </section>
  );
};

export default HeroSection;
