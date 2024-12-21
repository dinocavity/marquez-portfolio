import React, { useState } from 'react';
import Modal from 'react-modal';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './WorksSection.css';

// Photography images
import photo1 from '../assets/images/photography/photo_6161444282389611543_y.jpg';
import photo2 from '../assets/images/photography/photo_6161444282389611557_y.jpg';
import photo3 from '../assets/images/photography/photo_6161444282389611573_y.jpg';
import photo4 from '../assets/images/photography/photo_6161444282389611576_y.jpg';
import photo5 from '../assets/images/photography/photo_6161444282389611577_y.jpg';
import photo6 from '../assets/images/photography/photo_6161444282389611579_y.jpg';
import photo7 from '../assets/images/photography/photo_6161444282389611582_y.jpg';
import photo8 from '../assets/images/photography/photo_6161444282389611593_y.jpg';

// Graphic Design images
import design1 from '../assets/images/graphic-design/activity 5(1).jpg';
import design2 from '../assets/images/graphic-design/activity 5(2).jpg';
import design3 from '../assets/images/graphic-design/activity 5(3).jpg';
import design4 from '../assets/images/graphic-design/activity 5(4).jpg';
import design5 from '../assets/images/graphic-design/activity 5(5).jpg';
import design6 from '../assets/images/graphic-design/activity 5(6).jpg';
import design7 from '../assets/images/graphic-design/activity 5(7).jpg';

// Layout images
import layout1 from '../assets/images/layout/Marquez-reference.jpg';
import layout2 from '../assets/images/layout/Marquez.jpg';

// Logo Design images
import logo1 from '../assets/images/logo-design/cococrafts.jpg';
import logo2 from '../assets/images/logo-design/1.png';
import logo3 from '../assets/images/logo-design/2.png';
import logo4 from '../assets/images/logo-design/3.png';
import logo5 from '../assets/images/logo-design/4.png';

// Visual Branding images
import branding1 from '../assets/images/visual-branding/G1-IT-145-Midterm-Project-images-0.jpg';
import branding2 from '../assets/images/visual-branding/G1-IT-145-Midterm-Project-images-1.jpg';
import branding3 from '../assets/images/visual-branding/G1-IT-145-Midterm-Project-images-2.jpg';
import branding4 from '../assets/images/visual-branding/G1-IT-145-Midterm-Project-images-3.jpg';
import branding5 from '../assets/images/visual-branding/G1-IT-145-Midterm-Project-images-4.jpg';
import branding6 from '../assets/images/visual-branding/G1-IT-145-Midterm-Project-images-5.jpg';
import branding7 from '../assets/images/visual-branding/G1-IT-145-Midterm-Project-images-6.jpg';
import branding8 from '../assets/images/visual-branding/G1-IT-145-Midterm-Project-images-7.jpg';
import branding9 from '../assets/images/visual-branding/G1-IT-145-Midterm-Project-images-8.jpg';
import branding10 from '../assets/images/visual-branding/G1-IT-145-Midterm-Project-images-9.jpg';
import branding11 from '../assets/images/visual-branding/G1-IT-145-Midterm-Project-images-10.jpg';
import branding12 from '../assets/images/visual-branding/G1-IT-145-Midterm-Project-images-11.jpg';
import branding13 from '../assets/images/visual-branding/G1-IT-145-Midterm-Project-images-12.jpg';
import branding14 from '../assets/images/visual-branding/G1-IT-145-Midterm-Project-images-13.jpg';
import branding15 from '../assets/images/visual-branding/G1-IT-145-Midterm-Project-images-14.jpg';
import branding16 from '../assets/images/visual-branding/G1-IT-145-Midterm-Project-images-15.jpg';
import branding17 from '../assets/images/visual-branding/G1-IT-145-Midterm-Project-images-16.jpg';
import branding18 from '../assets/images/visual-branding/G1-IT-145-Midterm-Project-images-17.jpg';

// Merch-Packaging Design images
import merch1 from '../assets/images/merch-packaging-design/1.png';
import merch2 from '../assets/images/merch-packaging-design/2.png';
import merch3 from '../assets/images/merch-packaging-design/3.png';
import merch4 from '../assets/images/merch-packaging-design/4.png';
import merch5 from '../assets/images/merch-packaging-design/5.png';


// Website and Social Media Design images
import web1 from '../assets/images/website-and-social-media-design/websocial1.png';
import web2 from '../assets/images/website-and-social-media-design/websocial2.png';
import web3 from '../assets/images/website-and-social-media-design/websocial3.png';
import web4 from '../assets/images/website-and-social-media-design/websocial4.png';
import web5 from '../assets/images/website-and-social-media-design/websocial6.png';
import web6 from '../assets/images/website-and-social-media-design/websocial6.png';
import web7 from '../assets/images/website-and-social-media-design/websocial7.png';


const worksData = [
  {
    title: 'Photography',
    description: 'A collection of my photography work, capturing moments and landscapes.',
    datePosted: 'November 2024',
    files: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
  },
  {
    title: 'Graphic Design',
    description: 'Designing visually appealing graphics for brands and businesses.',
    datePosted: 'February 2024',
    files: [design1, design2, design3, design4, design5, design6, design7],
  },
  {
    title: 'Layout',
    description: 'Creating layouts for magazines, books, and other printed materials.',
    datePosted: 'March 2024',
    files: [layout1, layout2],
  },
  {
    title: 'Logo Design',
    description: 'Designing unique and memorable logos for brands and businesses.',
    datePosted: 'April 2024',
    files: [logo1, logo2, logo3, logo4, logo5],
  },
  {
    title: 'Visual Branding',
    description: 'Developing cohesive visual identities for businesses and brands.',
    datePosted: 'May 2024',
    files: [branding1, branding2, branding3, branding4, branding5, branding6, branding7, branding8, branding9, branding10
      , branding11, branding12, branding13, branding14, branding15, branding16, branding17, branding18
    ], 
  },
  {
    title: 'Merch-Packaging Design',
    description: 'Designing packaging and merchandise for products and brands.',
    datePosted: 'June 2024',
    files: [merch1, merch2, merch3, merch4, merch5], // Add more imports as needed
  },
  {
    title: 'Website and Social Media Design',
    description: 'Designing websites and social media layouts to engage users.',
    datePosted: 'July 2024',
    files: [web1, web2, web3, web4, web5, web6, web7], // Add more imports as needed
  },
];

const WorksSection = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedActivity(null);
  };

  const handleNextImage = () => {
    if (selectedActivity && selectedActivity.files.length > 1) {
      setCurrentImageIndex((currentImageIndex + 1) % selectedActivity.files.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedActivity && selectedActivity.files.length > 1) {
      setCurrentImageIndex((currentImageIndex - 1 + selectedActivity.files.length) % selectedActivity.files.length);
    }
  };

  const downloadImage = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop();
    link.click();
  };

  const downloadAll = () => {
    selectedActivity.files.forEach((file) => downloadImage(file));
  };

  return (
    <section id="works" className="works-section">
      <h2 className="section-title">Explore My Works</h2>
      <div className="works-grid">
        {worksData.map((work, index) => (
          <div
            key={index}
            className="work-category"
            onClick={() => handleActivityClick(work)}
          >
            <h3>{work.title}</h3>
            <p>{work.description}</p>
            <p><strong>Date Posted:</strong> {work.datePosted}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={selectedActivity !== null}
        onRequestClose={handleCloseModal}
        contentLabel="Activity Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        {selectedActivity && (
          <>
            <button className="close-btn" onClick={handleCloseModal}>X</button>
            <h2>{selectedActivity.title}</h2>
            <p>{selectedActivity.description}</p>
            <img
              src={selectedActivity.files[currentImageIndex]}
              alt={`${selectedActivity.title} ${currentImageIndex + 1}`}
              className="modal-image"
            />
            {selectedActivity.files.length > 1 && (
              <div className="image-navigation">
                <button className="nav-btn" onClick={handlePrevImage}>
                  <FiChevronLeft />
                </button>
                <button className="nav-btn" onClick={handleNextImage}>
                  <FiChevronRight />
                </button>
              </div>
            )}
            {/* Download Buttons */}
            <div className="download-options">
              <button 
                className="download-btn" 
                onClick={() => downloadImage(selectedActivity.files[currentImageIndex])}
              >
                Download This Image
              </button>
              <button className="download-all-btn" onClick={downloadAll}>
                Download All
              </button>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
};

export default WorksSection;
