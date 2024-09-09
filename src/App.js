
import React, { useState, useEffect } from "react";
import Hero from "./components/Hero/hero";
import ScreenTwo from "./components/ScreenTwo/screen-two";
import ScreenThree from "./components/ScreenThree/screen-three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import View from "./views/FaqView";
import TimeLineView from "./views/TimeLineView";
import "./App.css"; 
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
    let heroHidden = false;
    console.log(heroHidden);
    const heroSection = document.querySelector(".hero");
    if (!heroSection) return; // Avoid running if hero section isn't present

    gsap.to(heroSection, {
      scrollTrigger: {
        trigger: heroSection, // Scoped to the specific hero section
        start: "top top", // Trigger when the top of the hero reaches the top of the viewport
        end: "30% top", // When the bottom of the hero reaches the top of the viewport
        scrub: 3,
        onLeave: () => {
          gsap.set(heroSection, { display: "none" }); // Only hide the hero section
          heroHidden = true;
        },
     
      },
      y : -1500
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Clean up ScrollTriggers on unmount
    };
  }, []);
  // gsap.to(".screen-two .screen-three", {
  //   scrollTrigger: {
  //     trigger: ".screen-two",
  //     start: "top top",
  //     end: "bottom 20%",
  //     scrub: true,
  //   },
  //   y: 200,
  // });

  // Animate the ScreenTwo section to scroll up and fade in
  // gsap.to(".screen-two", {
  //   scrollTrigger: {
  //     trigger: ".screen-two",
  //     start: "top 80%",
  //     end: "bottom 20%",
  //     scrub: true,
  //   },
  //   y: 200,
  //   opacity: 1,
  // });

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
          {/* <Badges /> */}
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
