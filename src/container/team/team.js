import React from 'react';
import './team.css';  // CSS for styling
import image3 from './th.jpg'

const TeamMember = ({ name, position, linkedin, imageSrc }) => {
  return (
    <>
    <div className="team-member">
      <div className="profile-picture">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>{position}</p>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src={image3} alt="LinkedIn" />
        </a>
      </div>
    </div>
    </>
  );
};

export default TeamMember;
