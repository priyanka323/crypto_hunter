// import React from 'react';
// import './landing.css';
// import image from './img1.png'
// import {BiLogoTelegram} from 'react-icons/bi'

// const Home = () => {
//   return (
//     <div className="container">
//       <div className="left-section">
//       <div className="icon-container" style={{}}>
          
          
//           <div style={{color:"azure"}}><BiLogoTelegram/></div>
//           <div style={{color:"azure"}}><BiLogoTelegram/></div>
//           <div style={{color:"azure"}}><BiLogoTelegram/></div>
//           <div style={{color:"azure"}}><BiLogoTelegram/></div>
//           <div style={{color:"azure"}}><BiLogoTelegram/></div>
//           <div style={{color:"azure"}}><BiLogoTelegram/></div>
          

            
//         </div>
//         <div className="text" style={{margin:"2rem"}}>
//           <h2 >Take a part in the world biggest Crypto hunt.</h2>
//           <div style={{fontSize:"15px",margin:"0", left:"0"}}>Discover a geolocation based play to earn mobile game combining social and game element where you can win free tokens</div>
//           <div className="buttons">
//           <button style={{justifyContent:"center",marginTop:"2rem",background:" rgb(86, 12, 235",color:"azure"}}>WHITELIST FOR EARLY ACCESS</button>
          
//         </div>
//         <div className="bottom-button" style={{display:"flex"}}>
//           <button style={{background:"#31065f",color:"azure"}}>Download App</button>
//           <button style={{marginLeft:"10px",background:"#31065f",color:"azure"}}>Watch Video</button>
//         </div>
//         </div>
        
//       </div>
//       <div className="right-section">
        
//         <img src={image} alt="Image 2" />
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import './landing.css';
import image from './img1.png';
import { BiLogoTelegram } from 'react-icons/bi';

const Home = () => {
  return (
    <div className="container">
      <div className="left-section">
        <div className="icon-container">
          <div style={{color:"azure"}}><BiLogoTelegram /></div>
          <div style={{color:"azure"}}><BiLogoTelegram /></div>
          <div style={{color:"azure"}}><BiLogoTelegram /></div>
          <div style={{color:"azure"}}><BiLogoTelegram /></div>
          <div style={{color:"azure"}}><BiLogoTelegram /></div>
          <div style={{color:"azure"}}><BiLogoTelegram /></div>
        </div>
        <div className="text">
          <h2>Take a part in the world's biggest Crypto hunt.</h2>
          <div className="description">
            Discover a geolocation-based play-to-earn mobile game combining social and game elements where you can win free tokens.
          </div>
          <div className="buttons">
            <button style={{background:"blue", color:"azure",fontSize:"1.5rem",marginTop:"2rem"}}>WHITELIST FOR EARLY ACCESS</button>
          </div>
          <div className="bottom-button">
            <button style={{background:"#31065f", color:"azure",fontSize:"1.5rem"}}>Download App</button>
            <button style={{marginLeft:"1rem", background:"#31065f", color:"azure",fontSize:"1.5rem"}}>Watch Video</button>
          </div>
        </div>
      </div>
      <div className="right-section">
        <img src={image} alt="Image 2" />
      </div>
    </div>
  );
};

export default Home;
