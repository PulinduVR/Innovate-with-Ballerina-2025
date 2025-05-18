import { useEffect } from "react";
import "./screen-three.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import b1 from "./b1.png";
import spring_image from "./spring.png";
import spiral from "./spiral.png";

const ScreenThree = () => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  useEffect(() => {
    const text = `Innovate With Ballerina provides an exclusive platform for university students to elevate their coding passion with the Ballerina programming language. This pioneering competition aims to drive the future of technology by fostering teamwork, innovation, and outstanding performance. Projects can be submitted via GitHub and will be evaluated by the WSO2 Ballerina team. Compelling rewards and certificates will be awarded for exceptional contributions.`;

    const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const textArray = text.split("");
    const randomArray = textArray.map((char) =>
      char === " " ? " " : randomChars[Math.floor(Math.random() * randomChars.length)]
    );

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".paraSec",
        start: "top 140%",
        toggleActions: "play none none none",
      },
    });

    tl1.to(".desc", {
      duration: 0,
      text: randomArray.join(""),
    });

    textArray.forEach((char, index) => {
      const randomDelay = Math.random() * 3;
      if (char !== " ") {
        tl1.to(
          `.desc`,
          {
            duration: 0.2,
            onStart: () => {
              let currentText = document.querySelector(".desc").innerText.split("");
              currentText[index] = char;
              document.querySelector(".desc").innerText = currentText.join("");
            },
          },
          randomDelay
        );
      }
    });

    const tlFlicker = gsap.timeline({
      scrollTrigger: {
        trigger: ".big-container",
        start: "top 150%",
        toggleActions: "play none none none",
      },
    });

    tlFlicker.to(".error-box", {
      duration: 0.3,
      opacity: 0,
      repeat: 5,
      yoyo: true,
      ease: "power1.inOut",
    });

    tl1.to(".svg3", {
      duration: 2,
      opacity: 1,
      onStart: function () {
        gsap.fromTo(
          ".svg3 path",
          { strokeDasharray: "1000", strokeDashoffset: "1000" },
          { strokeDashoffset: "0", ease: "power1.inOut", duration: 2 }
        );
      },
    });

    gsap.to(".vector-svg", {
      scrollTrigger: {
        trigger: ".main-screen-three",
        start: "top 150%",
        end: "bottom top",
        scrub: 2,
      },
      rotation: 360,
      ease: "none",
    });
  }, []);

  return (
    <div className="main-screen-three">
      <div className="container-screen-three">
        <img
          src={spring_image}
          alt="spring"
          className="spring-image"
        />
        <img
          src={spiral}
          alt="spiral"
          className="spiral-image"
        />
        <div className="big-container">
          <div className="center-container paraSec" style={{ backgroundColor: "transparent" }}>
            <div className="content">
              <div>
                <img
                  src={b1}
                  alt="ballerina"
                  className="ballerina-image"
                />
              </div>
              <p className="desc"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenThree;