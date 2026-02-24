import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/HeroSection.css";
import heroImage from "/assets/overhead shot of use.png";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const fullText = "Discover the expertise of Daniel Adewale A.";
  const [displayedText, setDisplayedText] = useState("");

  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  // Typing Animation
  useEffect(() => {
    let index = 0;
    const speed = 80;

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, []);

  // GSAP Animations
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.from(imgRef.current, {
      opacity: 0,
      y: 60,
      duration: 1.3,
      ease: "power3.out",
    })
      .from(
        textRef.current.children,
        {
          opacity: 0,
          y: 20,
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

      <div className="img1 floating-img" ref={imgRef}>
        <img src={heroImage} alt="Daniel Adewale" />
      </div>

      <div className="hero-content" ref={textRef}>
        <p className="typing-line">{displayedText}<span className="cursor"></span></p>

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
        </div>

        <a href="#tech-stack" className="border-wrapper">
          <span className="border-content">GET IN TOUCH</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
