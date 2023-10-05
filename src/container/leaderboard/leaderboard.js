import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image6 from './image6.png';

const Leaderboard = () => {
  const leaderboardStyle = {
    background: 'linear-gradient(to bottom right, #31065f 40%, #b327de 100%, #31065f 70%)',
    color: 'azure',
    alignItems: 'center',
    
    padding: '20px', // Add padding for spacing
  };

  return (
    <>
      <div style={{ color: 'azure', alignItems: 'center', fontSize: '3rem' }}>Leaderboard</div>
      <div className="container-fluid" style={leaderboardStyle}>
        <div className="row">
          <div className="col-8">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-primary" style={{background:'linear-gradient(to bottom right, #31065f 40%, #b327de 100%, #31065f 70%)'}}>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>20000</td>
                </tr>
                <tr className="table-secondary">
                  <td>2</td>
                  <td>Jane Smith</td>
                  <td>18000</td>
                </tr>
                <tr className="table-success">
                  <td>3</td>
                  <td>Mary Johnson</td>
                  <td>15000</td>
                </tr>
                <tr className="table-primary" style={{background:'linear-gradient(to bottom right, #31065f 40%, #b327de 100%, #31065f 70%)'}}>
                  <td>4</td>
                  <td>John Doe</td>
                  <td>2000</td>
                </tr>
                <tr className="table-secondary">
                  <td>5</td>
                  <td>Jane Smith</td>
                  <td>1800</td>
                </tr>
                <tr className="table-success">
                  <td>6</td>
                  <td>Mary Johnson</td>
                  <td>1500</td>
                </tr>
                <tr className="table-success">
                  <td>7</td>
                  <td>Mary Johnson</td>
                  <td>500</td>
                </tr>
                <tr className="table-success">
                  <td>8</td>
                  <td>Mary Johnson</td>
                  <td>400</td>
                </tr>
                <tr className="table-success">
                  <td>9</td>
                  <td>Mary Johnson</td>
                  <td>300</td>
                </tr>
                <tr className="table-success">
                  <td>10</td>
                  <td>Mary Johnson</td>
                  <td>150</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <img src={image6} alt="Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
