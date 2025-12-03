import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "tech-stack", "contact"];
      const position = window.scrollY + 120;

      // Toggle scrolled class
      setScrolled(window.scrollY > 50);

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const start = section.offsetTop;
        const end = start + section.offsetHeight;

        if (position >= start && position < end) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-title">
        <h2 className="brand-name">AJIBADE DANIEL. A.</h2>
      </div>

      {/* Hamburger Menu */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navigation */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        {[
          { id: "hero", label: "HOME" },
          { id: "about", label: "ABOUT" },
          { id: "tech-stack", label: "TECH STACK" },
          { id: "contact", label: "CONTACT" },
        ].map((item, index) => (
          <React.Fragment key={item.id}>
            <a
              href={`#${item.id}`}
              className={`nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
            {index !== 3 && <span className="divider">|</span>}
          </React.Fragment>
        ))}
      </nav>
    </header>
  );
};

export default Header;
