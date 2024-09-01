import React from "react";
import Hero from "./components/hero";
import ScreenTwo from "./components/screen-two";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScreenThree from "./components/screen-three";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // React.useEffect(() => {
  //   gsap.to(".hero", {
  //     scrollTrigger: {
  //       trigger: ".main-container",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //     opacity: 0,
  //     // y: -100,
  //     ease: "power1.out",
  //   });
  // }, []);

  return (
    <div className="main-container">
      <div className="hero">
        <Hero />
      </div>
      <div className="screen-two">
        <ScreenTwo />
        <ScreenThree />
      </div>
    </div>
  );
}

export default App;
