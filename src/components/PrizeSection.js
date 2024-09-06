import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../stylesheets/PrizeSection.css';

gsap.registerPlugin(ScrollTrigger);

const PrizeSection = () => {
  useEffect(() => {
    // GSAP animation for p-vector-2 to move left and right based on scroll
    gsap.to('.p-vector-2', {
      x: () => window.innerWidth * 0.1, // Move by 10% of window width
      ease: 'power1.inOut', // Smoother ease-in-out animation
      scrollTrigger: {
        trigger: '.prize-section',
        start: 'top bottom', // Start when section enters viewport
        end: 'bottom top', // End when the section leaves the viewport
        scrub: true, // Sync with scroll
        markers: false, // Set to true for debugging
      },
    });
  }, []);

  return (
    <div className="prize-section">
      <div className="prize-title">
        <span className="win-exciting">Win Exciting</span>
        <span className="prizes">Prizes</span>
      </div>

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
            <img src="/1st.png" alt="First Place" style={{ height: "370px" }} />
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
      
      <div className="vector">
        <img src="/p-2-vector.svg" alt="Arrow" className="p-vector-2" />
        <img src="/p-1-vector.svg" alt="Arrow" className="p-vector-1" />
      </div>
    </div>
  );
};

export default PrizeSection;