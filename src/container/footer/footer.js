import React from 'react';
import './footer.css'; // Import CSS for styling

const Footer = () => {

    const handleButtonClick = () => {
        alert('Button Clicked!');
      };

  return (
    <div className="footer">
      {/* Display the image as the background */}
      <div className="background-image"></div>
      <div className="horizontal-elementsf">
        {/* Your content goes here */}
        <div className="elementf">PARTNERS</div>
      </div>
      <div className="partner-images">
        {/* Circular partner images */}
        <div className="partner-image"></div>
        <div className="partner-image"></div>
        <div className="partner-image"></div>
        <div className="partner-image"></div>
        <div className="partner-image"></div>
      </div>

      <hr></hr>

{/* //footer */}

    <div className='footer2'>
        <div className='col1'>All rights reserved</div>
        <div className='col2'>
            <div className='col21'>
                <div>Features</div>
                <div>TEAM</div>
                <div>ROADMAP</div>
                <div>TOKENOMICS</div>

            </div>
            <div className='col22'>
                <div>TWITTER</div>
                <div>TELEGRAM</div>
                <div>DISCORD</div>
            </div>
            <div className='col23'>
            <div>REDDIT</div>
            <div>TIKTOK</div>
            <div>MEDIUM</div>
            </div>
        </div>
        <div className='col1'>
            <div>OUR NEWSLETTER</div>
            <div>Subscribe to recieve early access</div>
            <div>
            <input type="text" placeholder="Enter text" />
          <button className="email-button" onClick={handleButtonClick}>
            Submit
          </button>
            </div>
        </div>
        

    </div>



    </div>
  );
};

export default Footer;
