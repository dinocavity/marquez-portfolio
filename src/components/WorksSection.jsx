import React, { useState } from 'react';
import Modal from 'react-modal';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';  // Importing left and right chevron icons from react-icons
import './WorksSection.css';

// Define the activities with files (images only)
const worksData = [
  {
    title: 'Photography',
    description: 'A collection of my photography work, capturing moments and landscapes.',
    datePosted: 'November 2024',
    files: [
      { type: 'image', name: 'photo_6161444282389611543_y.jpg' },
      { type: 'image', name: 'photo_6161444282389611557_y.jpg' },
      { type: 'image', name: 'photo_6161444282389611573_y.jpg' },
      { type: 'image', name: 'photo_6161444282389611576_y.jpg' },
      { type: 'image', name: 'photo_6161444282389611577_y.jpg' },
      { type: 'image', name: 'photo_6161444282389611579_y.jpg' },
      { type: 'image', name: 'photo_6161444282389611582_y.jpg' },
      { type: 'image', name: 'photo_6161444282389611593_y.jpg' },
    ]
  },
  {
    title: 'Graphic Design',
    description: 'Designing visually appealing graphics for brands and businesses.',
    datePosted: 'February 2024',
    files: [
      { type: 'image', name: 'activity 5(1).jpg' },
      { type: 'image', name: 'activity 5(2).jpg' },
      { type: 'image', name: 'activity 5(3).jpg' },
      { type: 'image', name: 'activity 5(4).jpg' },
      { type: 'image', name: 'activity 5(5).jpg' },
      { type: 'image', name: 'activity 5(6).jpg' },
      { type: 'image', name: 'activity 5(7).jpg' }
    ]
  },
  {
    title: 'Layout',
    description: 'Creating layouts for magazines, books, and other printed materials.',
    datePosted: 'March 2024',
    files: [
      { type: 'image', name: 'Marquez reference.jpg' },
      { type: 'image', name: 'Marquez.jpg' }
    ]
  },
  {
    title: 'Logo Design',
    description: 'Designing unique and memorable logos for brands and businesses.',
    datePosted: 'April 2024',
    files: [
      { type: 'image', name: 'cococrafts.jpg' },
      { type: 'image', name: 'Screenshot 2024-12-21 115142.png' },
      { type: 'image', name: 'Screenshot 2024-12-21 115146.png' },
      { type: 'image', name: 'Screenshot 2024-12-21 115151.png' },
      { type: 'image', name: 'Screenshot 2024-12-21 115156.png' }
    ]
  },
  {
    title: 'Visual Branding',
    description: 'Developing cohesive visual identities for businesses and brands.',
    datePosted: 'May 2024',
    files: [
      { type: 'image', name: 'G1-IT-145-Midterm-Project-images-0.jpg' },
      { type: 'image', name: 'G1-IT-145-Midterm-Project-images-1.jpg' },
      { type: 'image', name: 'G1-IT-145-Midterm-Project-images-2.jpg' },
      { type: 'image', name: 'G1-IT-145-Midterm-Project-images-3.jpg' },
      { type: 'image', name: 'G1-IT-145-Midterm-Project-images-4.jpg' },
      { type: 'image', name: 'G1-IT-145-Midterm-Project-images-5.jpg' },
      { type: 'image', name: 'G1-IT-145-Midterm-Project-images-6.jpg' },
      { type: 'image', name: 'G1-IT-145-Midterm-Project-images-7.jpg' },
      { type: 'image', name: 'G1-IT-145-Midterm-Project-images-8.jpg' },
      { type: 'image', name: 'G1-IT-145-Midterm-Project-images-9.jpg' },
      { type: 'image', name: 'G1-IT-145-Midterm-Project-images-10.jpg' },
      { type: 'image', name: 'G1-IT-145-Midterm-Project-images-11.jpg' },
      { type: 'image', name: 'G1-IT-145-Midterm-Project-images-12.jpg' },
      { type: 'image', name: 'G1-IT-145-Midterm-Project-images-13.jpg' },
      { type: 'image', name: 'G1-IT-145-Midterm-Project-images-14.jpg' },
      { type: 'image', name: 'G1-IT-145-Midterm-Project-images-15.jpg' },
      { type: 'image', name: 'G1-IT-145-Midterm-Project-images-16.jpg' },
      { type: 'image', name: 'G1-IT-145-Midterm-Project-images-17.jpg' }

    ]
  },
  {
    title: 'Merch-Packaging Design',
    description: 'Designing packaging and merchandise for products and brands.',
    datePosted: 'June 2024',
    files: [
      { type: 'image', name: '1.png' },
      { type: 'image', name: '2.png' },
      { type: 'image', name: '3.png' },
      { type: 'image', name: '4.png' },
      { type: 'image', name: '5.png' }
    ]
  },
  {
    title: 'Website and Social Media Design',
    description: 'Designing websites and social media layouts to engage users.',
    datePosted: 'July 2024',
    files: [
      { type: 'image', name: 'websocial1.png' },
      { type: 'image', name: 'websocial2.png' },
      { type: 'image', name: 'websocial3.png' },
      { type: 'image', name: 'websocial4.png' },
      { type: 'image', name: 'websocial5.png' },
      { type: 'image', name: 'websocial6.png' },
      { type: 'image', name: 'websocial7.png' }
    ]
  }
];

const WorksSection = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
    setCurrentImageIndex(0); // Reset image index when a new activity is selected
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

  const renderImageContent = (file) => {
    const filePath = `/assets/images/${selectedActivity.title.toLowerCase().replace(/\s+/g, '-')}/${file.name}`;
    return <img src={filePath} alt={file.name} className="modal-image" />;
  };

  const handleDownload = (fileName) => {
    const filePath = `/assets/images/${selectedActivity.title.toLowerCase().replace(/\s+/g, '-')}/${fileName}`;
    const a = document.createElement('a');
    a.href = filePath;
    a.download = fileName;
    a.click();
  };

  const handleDownloadAll = () => {
    selectedActivity.files.forEach((file) => {
      handleDownload(file.name);
    });
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

      {/* Modal to show details */}
      <Modal
        isOpen={selectedActivity !== null}
        onRequestClose={handleCloseModal}
        contentLabel="Activity Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button className="close-btn" onClick={handleCloseModal}>X</button>
        {selectedActivity && (
          <>
            <h2>{selectedActivity.title}</h2>
            <p>{selectedActivity.description}</p>
            <p><strong>Date Posted:</strong> {selectedActivity.datePosted}</p>
            <div className="modal-files">
              {selectedActivity.files.length > 1 && (
                <div className="image-navigation">
                  <button onClick={handlePrevImage} className="nav-btn">
                    <FiChevronLeft />
                  </button>
                  <button onClick={handleNextImage} className="nav-btn">
                    <FiChevronRight />
                  </button>
                </div>
              )}
              <div className="file-container">
                {renderImageContent(selectedActivity.files[currentImageIndex])}
              </div>
              <div className="download-options">
                <button className="download-btn" onClick={() => handleDownload(selectedActivity.files[currentImageIndex].name)}>Download This Image</button>
                {selectedActivity.files.length > 1 && (
                  <button className="download-all-btn" onClick={handleDownloadAll}>Download All Images</button>
                )}
              </div>
            </div>
            {/* <button className="close-modal-btn" onClick={handleCloseModal}>Close</button> */}
          </>
        )}
      </Modal>
    </section>
  );
};

export default WorksSection;
