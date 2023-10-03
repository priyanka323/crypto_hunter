import React from 'react';
import './about.css'; // Import CSS for styling
import image4 from './phone.jpeg'

const AboutPage = () => {
  return (
    <div className="page" style={{background: 'linear-gradient(to bottom right, #31065f 40%, #b327de 100%, #31065f 70%)' }}>
      <div className="left-section">
        <h1>Main Heading</h1>
        <h2>Subheading</h2>
      </div>
      <div className="right-section">
        <img style={{ }} src={image4} alt="Image" />
      </div>
    </div>
  );
};

export default AboutPage;
