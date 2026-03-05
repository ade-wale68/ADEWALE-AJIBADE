import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Highlight active section on scroll
  useEffect(() => {
    const sections = ["hero", "about", "tech-stack", "contact"];

    const handleScroll = () => {
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
        {([
          { id: "hero", label: "HOME", icon: "fas fa-home" },
          { id: "about", label: "ABOUT", icon: "fas fa-user" },
          { id: "tech-stack", label: "TECH STACK", icon: "fas fa-laptop-code" },
          { id: "contact", label: "CONTACT", icon: "fas fa-envelope" },
        ]).map((item, index) => (
          <React.Fragment key={item.id}>
            <a
              href={`#${item.id}`}
              className={`nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={handleNavClick}
            >
              <i className={item.icon}></i> {item.label}
            </a>
            {index !== 3 && <span className="divider">|</span>}
          </React.Fragment>
        ))}
      </nav>
    </header>
  );
};

export default Header;
