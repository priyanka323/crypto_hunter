import React from 'react';
import TeamMember from './team';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'Developer',
      linkedin: 'https://www.linkedin.com/in/priyanka-swami-08a52a211/',
      imageSrc: 'https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?w=181&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7'
    },
    {
        name: 'John Doe',
        position: 'Developer',
        linkedin: 'https://www.linkedin.com/in/priyanka-swami-08a52a211/',
        imageSrc: 'https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?w=181&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7'
      },
      {
        name: 'John Doe',
        position: 'Developer',
        linkedin: 'https://www.linkedin.com/in/priyanka-swami-08a52a211/',
        imageSrc: 'https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?w=181&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7'
      },
      {
        name: 'John Doe',
        position: 'Developer',
        linkedin: 'https://www.linkedin.com/in/priyanka-swami-08a52a211/',
        imageSrc: 'https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?w=181&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7'
      },
      {
        name: 'John Doe',
        position: 'Developer',
        linkedin: 'https://www.linkedin.com/in/priyanka-swami-08a52a211/',
        imageSrc: 'https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?w=181&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7'
      },
    // Add more team members as needed
  ];

  return (
    
    <>
        <div style={{background: 'linear-gradient(to bottom right, #31065f 40%, #b327de 100%, #31065f 70%)' }}>
        <div style={{fontSize: "1rem"}}>TEAM</div>
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
