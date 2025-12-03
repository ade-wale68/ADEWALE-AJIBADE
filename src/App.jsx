import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import TechStack from './components/TechStack';
import AboutSection from './components/AboutSection';
import './index.css';
import Portfolio from './components/Portfolio';

function App() {
  const [count, setCount] = useState(0);

  const handleScrollClick = () => {
    const atTop = window.scrollY === 0;
    if (atTop) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <TechStack />
      <Portfolio />
      {/* <ContactPage /> */}
      <Footer />

      {/* Scroll Indicator */}
      <button className="scroll-indicator" onClick={handleScrollClick}>
        ⬍
      </button>
    </>
  );
}

export default App;