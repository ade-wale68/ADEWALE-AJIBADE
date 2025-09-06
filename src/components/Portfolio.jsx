import React, { useState } from 'react';
import '../styles/Portfolio.css';

const portfolioItems = [
  { title: 'Finance', category: 'Web development', image: 'project-1.jpg' },
  { title: 'Orizon', category: 'Web development', image: 'project-2.png' },
  { title: 'Fundo', category: 'Web design', image: 'project-3.jpg' },
  { title: 'Brawlhalla', category: 'Applications', image: 'project-4.png' },
  { title: 'DSM.', category: 'Web design', image: 'project-5.png' },
  { title: 'MetaSpark', category: 'Web design', image: 'project-6.png' },
  { title: 'Summary', category: 'Web development', image: 'project-7.png' },
  { title: 'Task Manager', category: 'Applications', image: 'project-8.jpg' },
  { title: 'Arrival', category: 'Web development', image: 'project-9.png' },
];

const categories = ['All', 'Web design', 'Applications', 'Web development'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems.slice(0, 6) // Limit to 6 items
      : portfolioItems.filter(item => item.category === selectedCategory).slice(0, 6);

  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">My Creative Portfolio</h2>

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

      <div className="portfolio-grid">
        {filteredItems.map((item, index) => (
          <div className="portfolio-card" key={index}>
            <div className="portfolio-image-wrapper">
              <img src={`/assets/${item.image}`} alt={item.title} />
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