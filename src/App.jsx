import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import HeroSection from './components/HeroSection';
import WorksSection from './components/WorksSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <LandingPage />
      <HeroSection />
      <WorksSection />
      <Footer />
    </div>
  );
};

export default App;
