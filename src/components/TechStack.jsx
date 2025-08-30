import React from 'react';
import '../styles/TechStack.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiWebpack, SiVite, SiTailwindcss, SiBootstrap } from 'react-icons/si';

const TechStack = () => {
    const technologies = [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'Webpack', icon: <SiWebpack /> },
        { name: 'Vite', icon: <SiVite /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> }
    ];

    return (
        <section id='tech-stack' className="tech-stack">
            <div className="content">
                <h1>Welcome to My Tech Stack</h1>
                <p>
                    Here are the technologies I use to build amazing web applications. Each tool plays a vital role in creating seamless, efficient, and visually appealing projects.
                </p>
            </div>
            <div className="tech-grid">
                {technologies.map((tech, index) => (
                    <div key={index} className="tech-item" title={tech.name}>
                        <div className="tech-icon">{tech.icon}</div>
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;