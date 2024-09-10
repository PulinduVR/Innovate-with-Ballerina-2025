import './hero.css';
import ScrollDownButton from '../ScrollButton/scrolldown.button';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Hero() {

  useGSAP(() => {
    gsap.to("#yellow-text-right", {duration: 2, x: 160});
    gsap.to("#yellow-text-left", {duration: 2, x: -80});
    gsap.to("#girl-image", {duration: 2, scale: 1.3});

    gsap.from("#yellow-text-right #yello-text-left", { duration: 2, opacity: 0,  });

  });

  return (
    <div className="main-container-hero">
      <div className="hero-container">
        <div className="section-one">
          <p id="yellow-text-left">INNOVATE</p>
          <img src='./girl.png' alt="girl" id="girl-image"></img>
          <p id="yellow-text-right">WITH BALLERINA</p>
        </div>
      </div>
      <div className = "scroll-button-container">
      <ScrollDownButton className="scroll-button" />
      </div>
      <div className="logo-container">
        <img src='./ieee-logo-min.png' alt="ieee-logo" id="ieee-logo"></img>
        <img src='./CS-logo.webp' alt="cs-logo" id="cs-logo"></img>
        <img src='./wso2-logo.webp' alt="wso2-logo" id="wso2-logo"></img>
        <img src='./b-logo.webp' alt="b-logo" id="balerina-logo"></img>
        
      </div>

      <div className='partner'>
        <span className='organized'>Organized by</span>
        <span className='powered'>Powered by</span>
      </div>
    </div>
  );
}

export default Hero;
