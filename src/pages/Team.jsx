import React from 'react';
import '../component/Team.css';

const Team = () => {
  return (
    <div className="team-member-container">
      <div className="team-member">
        <h1 className="team-head">Meet Our Team</h1>
        <p className="team-subtext">Passionate experts delivering delicious experiences.</p>

        <div className="team-grid">
          <div className="team-card">
            <img src="/team_member_1.png" alt="Virat Jadhava" />
            <h3>Virat Jadhava</h3>
            <p>Role: Breakfast Specialist</p>
            
          </div>
          <div className="team-card">
            <img src="/team_member_2.png" alt="Aarav Mehta" />
            <h3>Aarav Mehta</h3>
            <p>Role: Dinner Specialist</p>
          </div>
          <div className="team-card">
            <img src="/team_member_3.png" alt="Sana Sharma" />
            <h3>Sana Sharma</h3>
            <p>Role: Lunch Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
