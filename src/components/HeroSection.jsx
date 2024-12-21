import React from "react";
import './HeroSection.css';  // Ensure to create this CSS file

// Update the CV file path as needed
import CV from "../assets/cv/CURRICULUM VITAE- MARQUEZ.pdf"; // Update with actual CV file path
import ProfilePic from "../assets/profile.png"; // Replace with your profile picture path

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-content">
      <img src={ProfilePic} alt="Profile" className="profile-pic" />
      <h1>DION CEDRICK L. MARQUEZ</h1> {/* Replace with your full name */}
      <p className="year-section">
        <strong>Year:</strong> 4th Year <br />
        <strong>Section:</strong> BSIT 4B
      </p>
      <p className="description">
        I am passionate about art and technology, constantly exploring the intersection of creativity and problem-solving. 
        I specialize in graphic design, photography, and digital media. 
        Let's create something amazing together!
      </p>
      <a href={CV} download className="download-cv-btn">Download CV</a>
    </div>
  </section>
);

export default HeroSection;
