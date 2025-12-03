import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'tech-stack', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-title">
        <h2>AJIBADE DAN .A.</h2>
      </div>

      {/* Hamburger Icon */}
      <div 
        className={`hamburger-menu ${menuOpen ? 'open' : ''}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation */}
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <a className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`} href="#hero" onClick={() => setMenuOpen(false)}>HOME |</a>
        <a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} href="#about" onClick={() => setMenuOpen(false)}>ABOUT |</a>
        <a className={`nav-link ${activeSection === 'tech-stack' ? 'active' : ''}`} href="#tech-stack" onClick={() => setMenuOpen(false)}>TECH STACK |</a>
        <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} href="#contact" onClick={() => setMenuOpen(false)}>CONTACT |</a>

        {/* Extra pages
        <a className="nav-link" href="/portfolio" onClick={() => setMenuOpen(false)}>PORTFOLIO</a>
        <a className="nav-link" href="/blog" onClick={() => setMenuOpen(false)}>BLOG</a>
        <a className="nav-link" href="/services" onClick={() => setMenuOpen(false)}>SERVICES</a> */}
      </nav>
    </header>
  );
};

export default Header;
