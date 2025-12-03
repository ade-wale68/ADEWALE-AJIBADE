import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Daniel Ajibade. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon" /> GitHub
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon" /> LinkedIn
                    </a>
                    <a href="mailto:your.email@example.com">
                        <FaEnvelope className="social-icon" /> Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;