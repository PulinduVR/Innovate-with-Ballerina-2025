
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
            <img src='./down-arrow.png' alt= "down-arrow" id = "down-arrow"></img>
            <p id = "button-text">Scroll Down</p>
        </div>
    );
}

export default ScrollDownButton;