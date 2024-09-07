import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../stylesheets/PrizeSection.css';

gsap.registerPlugin(ScrollTrigger);

const PrizeSection = () => {
  useEffect(() => {
    gsap.to('.p-vector-2', {
      x: () => window.innerWidth * 0.1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.prize-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        markers: false,
      },
    });
  }, []);

  return (
    <div className="prize-section">
      <div className="prize-title">
        <span className="win-exciting">Win Exciting</span>
        <span className="prizes">Prizes</span>
      </div>

      <div className='prize-line'>
        <div className="prize-set">
          <div className="card-2">
            <div className="prize-box second-place">
              <img src="/2nd.png" alt="Second Place" />
              <div className="prize-info">
                <h3>2nd Place</h3>
                <p>Rs 100,000/-</p>
              </div>
            </div>
          </div>

          <div className="card-1">
            <div className="prize-box first-place">
              <div className="prize-info">
                <h3>1st Place</h3>
                <p>Rs 150,000/-</p>
              </div>
              <img src="/1st.png" alt="First Place" style={{ height: "410px" }} />
            </div>
          </div>

          <div className="card-3">
            <div className="prize-box third-place">
              <img src="/3rd.png" alt="Third Place" />
              <div className="prize-info">
                <h3>3rd Place</h3>
                <p>Rs 75,000/-</p>
              </div>
            </div>
          </div>
        </div>
        <div className='additional-prizes'>
          <img src="/p-star.svg" alt="star" />
          <span>Additonal Prices of <br />Rs 10 000 /- Each </span>
          <span>for places 4th to 10th</span>
          <span>Valuable Certificates <br/>for every submission </span>
        </div>
      </div>
      
      <div className="vector">
        <img src="/p-2-vector.svg" alt="Arrow" className="p-vector-2" />
        <img src="/p-1-vector.svg" alt="Arrow" className="p-vector-1" />
      </div>
    </div>
  );
};

export default PrizeSection;