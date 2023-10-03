import React from 'react';
import './about.css'; // Import CSS for styling

const AboutPage = () => {
  return (
    <div className="page" style={{background: 'linear-gradient(to bottom right, #31065f 40%, #b327de 100%, #31065f 70%)' }}>
      <div className="left-section">
        <h1>Main Heading</h1>
        <h2>Subheading</h2>
      </div>
      <div className="right-section">
        <img src="https://thumbs.dreamstime.com/z/iphone-glowing-screen-sitting-top-table-generative-ai-iphone-glowing-screen-sitting-top-table-272532498.jpg" alt="Image" />
      </div>
    </div>
  );
};

export default AboutPage;
