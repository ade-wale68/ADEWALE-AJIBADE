import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'tech-stack', 'contact'];
            const scrollPosition = window.scrollY + 100; // Adjust for header height

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
                <h2>AJIBADE DANIEL .A.</h2>
            </div>
            <nav className="header-nav">
                <a
                    className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
                    href="#hero"
                >
                    HOME
                </a>
                <a
                    className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                    href="#about"
                >
                    ABOUT
                </a>
                <a
                    className={`nav-link ${activeSection === 'tech-stack' ? 'active' : ''}`}
                    href="#tech-stack"
                >
                    TECH STACK
                </a>
                <a
                    className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                    href="#contact"
                >
                    CONTACT
                </a>
            </nav>
        </header>
    );
};

export default Header;