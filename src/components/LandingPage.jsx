import React from 'react';
import { Link } from 'react-scroll';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <section className="landing-page">
      <div className="landing-content">
        <h1>Discover My Art</h1>
        <p>Creative works in photography, design, and more.</p>
        <Link to="works" smooth={true} duration={500} className="cta-button">
          Explore Works
        </Link>
      </div>
    </section>
  );
};

export default LandingPage;
