
import React, { useEffect } from "react";
import Hero from "./components/Hero/hero";
import ScreenTwo from "./components/ScreenTwo/screen-two";
import ScreenThree from "./components/ScreenThree/screen-three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import View from './views/FaqView';
import TimeLineView from "./views/TimeLineView";
import './App.css'; // Ensure you import your styles
import Badges from "./components/Badges/badges";
import PrizeSection from "../src/components/PrizeSection";
// import StatsSection from "./components/StatsSection";

gsap.registerPlugin(ScrollTrigger);

function App() {

  let heroHidden = false;
  useEffect(() => {
    // Animate the Hero section to scroll up and fade out
    gsap.to(".hero", {
      scrollTrigger: {
        start: "top top", 
        end: "30% top", 
        scrub: 3, 
        pin: ".hero", 
        onLeave: () => {
          gsap.set(".hero", { display: "none" });
          heroHidden = true; 
        },
        onEnterBack: () => {
          if (heroHidden) {
            gsap.set(".hero", { display: "none" });
          }
        },
      },
      y: -1900, 
    })}, [heroHidden]);
    


  return (
    <>
    <div className="main-container">
      <div className="hero">
        <Hero />
      </div>
      
      <div className="screen-two">
        <ScreenTwo />
      </div>
      <div className="screen-three">
        <ScreenThree />
        <Badges/>
      </div>
    </div>
     <div>
        <PrizeSection />
      </div>
      <TimeLineView/>

       
    <div className="App">
        <View />

      </div>
     </>
  );
}

export default App;
