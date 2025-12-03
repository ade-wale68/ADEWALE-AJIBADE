import React, { useState } from 'react';
import '../styles/Portfolio.css';

const portfolioItems = [
  { title: 'Finance', category: 'Web Development', image: 'project-1.jpg', link: '#' },
  { title: 'Orizon', category: 'Web Development', image: 'project-2.png', link: '#' },
  { title: 'Fundo', category: 'Web Design', image: 'project-3.jpg', link: '#' },
  { title: 'Brawlhalla', category: 'Applications', image: 'project-4.png', link: '#' },
  { title: 'DSM', category: 'Web Design', image: 'project-5.png', link: '#' },
  { title: 'MetaSpark', category: 'Web Design', image: 'project-6.png', link: '#' },
  { title: 'Summary', category: 'Web Development', image: 'project-7.png', link: '#' },
  { title: 'Task Manager', category: 'Applications', image: 'project-8.jpg', link: '#' },
  { title: 'Arrival', category: 'Web Development', image: 'project-9.png', link: '#' },
];

const categories = ['All', 'Web Design', 'Applications', 'Web Development'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

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
          <div className="portfolio-card" key={item.title}>
            <div className="portfolio-image-wrapper">
              <img src={`/assets/${item.image}`} alt={item.title} />
              <a href={item.link} className="portfolio-overlay">
                <span>View Project</span>
              </a>
            </div>
            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
