import React, { useState, useEffect } from "react";
import Hero from "./components/Hero/hero";
import ScreenTwo from "./components/ScreenTwo/screen-two";
import ScreenThree from "./components/ScreenThree/screen-three";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all"; // Import ScrollToPlugin
import View from "./views/FaqView";
import TimeLineView from "./views/TimeLineView";
import "./App.css"; 
import Badges from "./components/Badges/badges";
import PrizeSection from "../src/components/PrizeSection";
import StatsSection from "./components/StatsSection";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); // Register ScrollToPlugin

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
    const isMobile = window.innerWidth <= 768; // Detect if it's a mobile screen
    if (isMobile) return; // Don't run scroll-to-top behavior on mobile screens

    let heroHidden = false;
    const heroSection = document.querySelector(".hero");
    if (!heroSection) return;

    // Initial scroll trigger to hide the hero section
    const scrollTrigger = gsap.to(heroSection, {
      scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "bottom 25%",
        scrub: 10,
        onLeave: () => {
          if (!heroHidden) {
            gsap.to(window, {
              scrollTo: { y: 0, autoKill: false }, // Smooth scroll to the top
              duration: 1,
              ease: "power2.out",
              onComplete: () => {
                heroHidden = true;
                gsap.set(heroSection, { display: "none" }); // Hide the hero section
              }
            });
          }
        },
      },
      y: -1500 // Move the hero section up
    });

    return () => {
      scrollTrigger.kill(); // Clean up the ScrollTrigger on unmount
    };
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

      <div>
        <StatsSection />
        <PrizeSection />
      </div>
      <TimeLineView />

      <div className="App">
        <View />
      </div>
      <Badges />
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
