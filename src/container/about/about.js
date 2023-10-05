
import React from 'react';
import './about.css'; // Import CSS for styling
import image4 from './phone.jpeg';
import VideoFrame from './videoframe'
import video from './video.mp4'

const AboutPage = () => {
  return (
    <>
    <div className="page" style={{ display: "flex", flexDirection: "row",margin:"1rem", background: 'linear-gradient(to bottom right, #31065f 40%, #b327de 100%, #31065f 70%)' }}>
      <div className="left-section" style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "2rem" }}>
        <h1 style={{ textAlign: "left", color:"azure" }}>Take a part in the world's biggest crypto hunt</h1>
        <h2 style={{ textAlign: "left",color:"azure" }}>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before public</h2>
        <button className='button1' style={{ marginTop: "2rem", background: "rgb(86, 12, 235)", color: "azure", }}>WHITELIST FOR EARLY ACCESS</button>
      </div>
      <div className="right-section" style={{ width: "50%" }}>
        <img style={{ width: "100%", height: "auto" }} src={image4} alt="Image" />
      </div>
    </div>

    <div>
      <div>
      <h1 style={{ textAlign: "center", color:"azure" }}>Take a part in the world's biggest crypto hunt</h1>
      <div>
      
      <VideoFrame videoSrc={video} />
      {/* Add more VideoFrame components for each video */}
    </div>
      </div>
    </div>
    </>
  );
};

export default AboutPage;


