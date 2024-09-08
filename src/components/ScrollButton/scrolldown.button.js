
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import "./scrolldown-button.css";
gsap.registerPlugin(useGSAP);


const ScrollDownButton = () => {
    

    useGSAP(() => {
        gsap.to(".scroll-down-button", {
          duration: 1,
          y: 15,
      
          repeat: -1,
          yoyo: true
        });
      });


    return (
        <div className="scroll-down-button" >
          <p id = "button-text">SCROLL DOWN</p>
          <img src='./down-arrow.svg' alt= "down-arrow" id = "down-arrow"></img>
            
        </div>
    );
}

export default ScrollDownButton;