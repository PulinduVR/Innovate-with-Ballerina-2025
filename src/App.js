import React,{useRef} from "react";
import Hero from "./components/Hero/hero";
import ScreenTwo from "./components/ScreenTwo/screen-two";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScreenThree from "./components/ScreenThree/screen-three";
import View from './views/FaqView';
import TimeLineView from "./views/TimeLineView";

gsap.registerPlugin(ScrollTrigger);

function App() {

  const mainContainerRef = useRef(null);
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
    <div className="main-container" ref={mainContainerRef}>
      <div className="hero">
        <Hero />
      </div>
      <div className="screen-two">
        <ScreenTwo />
        <ScreenThree />
      </div>
      <div className="screen-three">
      <TimeLineView parentRef={mainContainerRef} />
      </div>
      <div className="App">
        <View />
      </div>
    </div>
  );
}

export default App;
