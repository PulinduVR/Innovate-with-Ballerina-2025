import React, { useEffect } from "react";
import Hero from "./components/Hero/hero";
import ScreenTwo from "./components/ScreenTwo/screen-two";
import ScreenThree from "./components/ScreenThree/screen-three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import View from './views/FaqView';
import TimeLineView from "./views/TimeLineView";
import './App.css'; // Ensure you import your styles

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Animate the Hero section to scroll up and fade out
    gsap.to(".hero", {
      scrollTrigger: {
       
        start: "top top",
        end: "100vh top",
        scrub: 2,
        pin: ".hero", // Pin the Hero section while scrolling
      },
     ease : 3,
      opacity: 0, // Fade out the Hero
    });

    // Animate the ScreenTwo section to scroll up and fade in
    gsap.to(".screen-two", {
      scrollTrigger: {
        trigger: ".screen-two",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
      y: 200,
      opacity: 1,
    });
  }, []);

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
      </div>
    </div>
    <div className="screen-three">
      <TimeLineView/>
    </div>
       
    <div className="App">
        <View />
      </div>
     </>
  );
}

export default App;
