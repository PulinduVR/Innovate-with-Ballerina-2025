import React, { useState, useEffect } from "react";
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
import StatsSection from "./components/StatsSection";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update mouse position for custom cursor
  const updateMousePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    // Animate the Hero section to scroll up and fade out
    gsap.to(".hero", {
      scrollTrigger: {
        start: "top top",
        end: "100vh top",
        scrub: 3,
        pin: ".hero", // Pin the Hero section while scrolling
      },
      y: -600,
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
      <StatsSection />
      <div>
        <PrizeSection />
      </div>
      <TimeLineView />
      <div className="App">
        <View />
      </div>
      <Badges />

      {/* Custom Cursor */}
      <div
        className="custom-cursor"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
      />
    </>
  );
}

export default App;
