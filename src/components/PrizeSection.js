import React from 'react';
import '../stylesheets/PrizeSection.css';

const PrizeSection = () => {
  return (
    <div className="prize-section">
      <h2 className="prize-title">Win Exciting <span>Prices</span></h2>
      
      <div className="prize-container">
        <div className="prize-box second-place">
          <img src="/2nd-place.png" alt="Second Place" />
          <div className="prize-info">
            <h3>2nd Place</h3>
            <p>Rs 100,000/-</p>
          </div>
        </div>
        
        <div className="prize-box first-place">
          <img src="/1st-place.png" alt="First Place" />
          <div className="prize-info">
            <h3>1st Place</h3>
            <p>Rs 150,000/-</p>
          </div>
        </div>
        
        <div className="prize-box third-place">
          <img src="3rd-place.png" alt="Third Place" />
          <div className="prize-info">
            <h3>3rd Place</h3>
            <p>Rs 75,000/-</p>
          </div>
        </div>
      </div>
      
      <div className="additional-prizes">
        <p>Additional Prizes Of</p>
        <p>Rs 10,000/- Each</p>
        <p>For Places 4th To 10th</p>
      </div>
    </div>
  );
};

export default PrizeSection;
