import './hero.css';
import ScrollDownButton from '../ScrollButton/scrolldown.button';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Hero() {

  useGSAP(() => {
    gsap.to("#yellow-text-right", {duration: 2, x: 180});
    gsap.to("#yellow-text-left", {duration: 2, x: -90});
    gsap.to("#girl-image", {duration: 2, scale: 1.3});

    gsap.from("#yellow-text-right #yello-text-left", { duration: 2, opacity: 0,  });


    // gsap.to("#yellow-text-right", {
    //     scrollTrigger: {
    //       scrub: 1,
    //     },
    //     scale: 2,
    //     y: 100,
    // });
    
    // gsap.to("#yellow-text-left", {
    //     scrollTrigger: {
    //       scrub: 1,
    //     },
    //     scale: 2,
    //     y: 100,
    // });

  });

  return (
    <div className="main-container-hero">
      <div className="hero-container">
        <div className="section-one">
          <p id="yellow-text-left">INNOVATE</p>
          <img src='./girl.png' alt="girl" id="girl-image"></img>
          <p id="yellow-text-right">WITH BALERINA</p>
        </div>
      </div>
      <div className = "scroll-button-container">
      <ScrollDownButton className="scroll-button" />
      </div>
     
      
      <div className="logo-container">
        <img src='./ieee-logo.png' alt="ieee-logo" id="ieee-logo"></img>
        <img src='./wso2-logo.png' alt="wso2-logo" id="wso2-logo"></img>
        <img src='./b-logo.png' alt="b-logo" id="balerina-logo"></img>
        
      </div>
    </div>
  );
}

export default Hero;
