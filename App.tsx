import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Plans from './components/Plans';
import PhotoFormats from './components/PhotoFormats';
import Albums from './components/Albums';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';

const ScrollToHashElement = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const { hash } = location;

    if (hash) {
      const elementId = hash.slice(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-brand-text">
      <ScrollToHashElement />
      <Header />
      <main>
        <Hero />
        <PhotoFormats />
        <Albums />
        <HowItWorks />
        <Plans />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default App;