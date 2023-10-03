import React from 'react';
import TeamMember from './team';
import image1 from './profile.jpg'

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'Developer',
      linkedin: 'https://www.linkedin.com/in/priyanka-swami-08a52a211/',
      imageSrc: image1
    },
    {
        name: 'John Doe',
        position: 'Developer',
        linkedin: 'https://www.linkedin.com/in/priyanka-swami-08a52a211/',
        imageSrc: image1
      },
      {
        name: 'John Doe',
        position: 'Developer',
        linkedin: 'https://www.linkedin.com/in/priyanka-swami-08a52a211/',
        imageSrc: image1
      },
      {
        name: 'John Doe',
        position: 'Developer',
        linkedin: 'https://www.linkedin.com/in/priyanka-swami-08a52a211/',
        imageSrc: image1
      },
      {
        name: 'John Doe',
        position: 'Developer',
        linkedin: 'https://www.linkedin.com/in/priyanka-swami-08a52a211/',
        imageSrc: image1
      },
    // Add more team members as needed
  ];

  return (
    
    <>
        <div style={{background: 'linear-gradient(to bottom right, #31065f 40%, #b327de 100%, #31065f 70%)' }}>
        <div style={{fontSize: "3rem", margin:"1rem",color:"azure", fontFamily:"initial"}}>TEAM</div>
        <div className="team-page">
      {teamMembers.map((member, index) => (
        <TeamMember
          key={index}
          name={member.name}
          position={member.position}
          linkedin={member.linkedin}
          imageSrc={member.imageSrc}
        />
      ))}
    </div>
        </div>
    </>
  );
};

export default TeamPage;
