import './hero.css';

import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


function Hero() {

  useGSAP( () => {
    gsap.to("#yellow-text-left", {duration: 2, x: 200});
    gsap.to("#yellow-text-right", {duration: 2, x: -200});
    gsap.to("#girl-image", {duration: 2, scale: 1.3});
    gsap.to("#map-image", {duration: 2, y : -100});
  });

  return (
    <div className="App">
      <section>
      <p id = "yellow-text-left"> INNOVATE </p>
      <p id = "yellow-text-right"> WITH BALERINA </p>
      <img src='./girl.png' alt= "girl" id = "girl-image" ></img>
      <img src='./map.png' alt= "map" id = "map-image"></img>

      </section>
    </div>
  );
}

export default Hero;