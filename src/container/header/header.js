import React from 'react';
import './header.css'; // Import CSS for styling

const Header = () => {
  return (
    <div className="header">
      {/* Five elements displayed horizontally */}
      <div className="horizontal-elements">
      <div className="element" >Crypto Hunter</div>
      </div>
      <div className="horizontal-elements">
        
        <div className="element">FEATURES</div>
        <div className="element">TEAM</div>
        <div className="element">ROADMAPE</div>
        <div className="element">TOKENOMICS</div>
      </div>

      {/* Two buttons in the right corner */}
      <div className="buttons">
        <button className="button">BUY TOKEN</button>
        <button className="button">WHITEPAPER</button>
      </div>
    </div>
  );
};

export default Header;
