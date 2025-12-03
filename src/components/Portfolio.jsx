import React, { useState } from 'react';
import '../styles/Portfolio.css';

const portfolioItems = [
  {
    title: 'Finance',
    category: 'Web Development',
    image: 'project-1.jpg',
    description: 'A modern finance dashboard with analytics, income tracking and performance insights.',
    gallery: ['', 'f2.jpg', 'f3.jpg']
  },
  {
    title: 'Orizon',
    category: 'Web Development',
    image: 'project-2.png',
    description: 'A responsive analytics platform with real-time chart rendering and data monitoring.',
    gallery: ['logo-4-color.png', 'o2.jpg', 'o3.jpg']
  },
  {
    title: 'Fundo',
    category: 'Web Design',
    image: 'project-3.jpg',
    description: 'A clean real-estate UI design system featuring modern cards and responsive grids.',
    gallery: ['fu1.jpg', 'fu2.jpg', 'fu3.jpg']
  },
  {
    title: 'Brawlhalla',
    category: 'Applications',
    image: 'project-4.png',
    description: 'A gaming dashboard concept with player stats, leaderboards and battle pass UI.',
    gallery: ['b1.jpg', 'b2.jpg', 'b3.jpg']
  },
  {
    title: 'DSM',
    category: 'Web Design',
    image: 'project-5.png',
    description: 'A product-focused landing page UI with bold typography and modular layout.',
    gallery: ['d1.jpg', 'd2.jpg', 'd3.jpg']
  },
  {
    title: 'MetaSpark',
    category: 'Web Design',
    image: 'project-6.png',
    description: 'A futuristic UI system for AI content management and workflow optimization.',
    gallery: ['m1.jpg', 'm2.jpg', 'm3.jpg']
  },
];

const categories = ['All', 'Web Design', 'Applications', 'Web Development'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems.slice(0, 6)
      : portfolioItems.filter(item => item.category === selectedCategory).slice(0, 6);

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">My Creative Portfolio</h2>

      {/* Category Tabs */}
      <div className="portfolio-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={`portfolio-tab ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {filteredItems.map(item => (
          <div
            className="portfolio-card"
            key={item.title}
            onClick={() => setSelectedProject(item)}
          >
            <div className="portfolio-image-wrapper">
              <img src={`/assets/${item.image}`} alt={item.title} />
              <div className="portfolio-overlay">
                <span>View Project</span>
              </div>
            </div>
            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div className="project-modal">
          <div className="project-modal-content">
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ✖
            </button>

            <h2>{selectedProject.title}</h2>
            <p className="project-category">{selectedProject.category}</p>
            <p className="project-description">{selectedProject.description}</p>

            <div className="project-gallery">
              {selectedProject.gallery.map((img, index) => (
                <img
                  key={index}
                  src={`/assets/${img}`}
                  alt={`${selectedProject.title} screenshot`}
                />
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
