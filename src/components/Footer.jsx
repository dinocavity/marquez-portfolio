import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaDiscord, FaEnvelope } from 'react-icons/fa'; // Added FaEnvelope for Gmail icon
import { Link } from 'react-router-dom'; // Assuming React Router is used for navigation
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Dion Cedrick Marquez. All Rights Reserved.</p>
        <nav className="footer-nav">
          <Link to="about">About</Link>
          <Link to="works">Works</Link>
        </nav>
        <div className="footer-socials">
          <a href="https://www.facebook.com/cedrick.marquez.963" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/dadanndae" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/dinocavity" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://discord.gg/K4xCe5uy" target="_blank" rel="noopener noreferrer">
            <FaDiscord />
          </a>
          <a href="mailto:dioncedrickmarquez@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
