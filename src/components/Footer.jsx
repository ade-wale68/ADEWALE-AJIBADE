import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Daniel Ajibade. All rights reserved.
                </p>
                <div className="footer-social">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub className="footer-icon" />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="footer-icon" />
                    </a>
                    <a href="mailto:your.email@example.com" aria-label="Email">
                        <FaEnvelope className="footer-icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
