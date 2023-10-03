import React from 'react';
import './team.css';  // CSS for styling

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
          <img src="https://th.bing.com/th?id=OIP.q9s2sSjwz87hMp3bE2WpmwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="LinkedIn" />
        </a>
      </div>
    </div>
    </>
  );
};

export default TeamMember;
