import React, { useEffect } from "react";
import "./screen-three.css";
import TextOne from "../TextOne/text-one";
import TextTwo from "../TextTwo/text-two";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

const ScreenThree = () => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  useEffect(() => {
    const text = `Innovate With Ballerina provides an exclusive platform for university students to elevate their coding passion with the Ballerina programming language. This pioneering competition aims to drive the future of technology by fostering teamwork, innovation, and outstanding performance. Projects can be submitted via GitHub and will be evaluated by the WSO2 Ballerina team. Compelling rewards and certificates will be awarded for exceptional contributions.`;

    const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const textArray = text.split(""); // Split the text into characters
    const randomArray = textArray.map((char) =>
      char === " " ? " " : randomChars[Math.floor(Math.random() * randomChars.length)]
    );


  const tlMobile = gsap.timeline({
    scrollTrigger: {
      trigger: ".mobile-responsive-view",
      start: "top 150%",
      toggleActions: "play none none none",
    },
  });

  tlMobile.from(".mobile-responsive-view", {
    duration: 1,
    opacity: 0,
    y: 50, // Slide in from below
    ease: "power1.out",
  });
    
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".paraSec",
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });

    // Step 1: Display the randomized text
    tl1.to(".desc", {
      duration: 0,
      text: randomArray.join(""), // Display random characters initially
    });

    // Step 2: Randomly swap letters until the final text is revealed
    textArray.forEach((char, index) => {
      const randomDelay = Math.random() * 3; // Random delay for each letter change

      if (char !== " ") {
        tl1.to(
          `.desc`,
          {
            duration: 0.2,
            onStart: () => {
              let currentText = document.querySelector(".desc").innerText.split("");
              currentText[index] = char; // Replace the current random letter with the correct one
              document.querySelector(".desc").innerText = currentText.join("");
            },
          },
          randomDelay // Randomized delay for each letter
        );
      }
    });

    // Flicker effect for the error boxes (kept the same)
    const tlFlicker = gsap.timeline({
      scrollTrigger: {
        trigger: ".big-container",
        start: "top 60%",
        toggleActions: "play none none none", // Play only once
      },
    });

    tlFlicker.to(".error-box", {
      duration: 0.3,
      opacity: 0,
      repeat: 5,
      yoyo: true, // To flicker back and forth
      ease: "power1.inOut",
    });

    // SVG drawing animation (kept the same)
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

    // Rotating Vector.svg with scroll (kept the same)
    gsap.to(".vector-svg", {
      scrollTrigger: {
        trigger: ".main-screen-three", // Trigger when the user scrolls in the main screen
        start: "top center", // Start rotation when the top of the container reaches the center of the viewport
        end: "bottom top", // End rotation when the bottom of the container reaches the top of the viewport
        scrub: 2, // Smooth animation based on scroll
      },
      rotation: 360, // Full rotation
      ease: "none",
    });
  }, []);

  return (
    <>
      <div className="main-screen-three">
        <TextOne className="text-one" />
        <div className="container-screen-three">
          <div className="big-container">
            <div className="box-start-container">
              <div className="boxes-container">
                <img
                  src="./error.svg"
                  alt="box"
                  id="box"
                  className="error-box"
                  style={{ height: "110%", width: "auto", marginTop: "-20%", opacity: 1.3 }}
                />
              </div>
              <div className="boxes-container">
                <img
                  src="./Vector.svg"
                  alt="box"
                  id="box"
                  className="vector-svg"
                  style={{
                    height: "90%",
                    width: "auto",
                    marginTop: "50%",
                    marginLeft: "50%",
                  }}
                />
              </div>
            </div>
            <div className="center-container paraSec">
              <div className="browser-window">
                <div className="browser-header">
                  <div className="browser-buttons"></div>
                </div>
                <div className="content">
                  <div>
                    <img
                      src="./b1.png"
                      alt="ballerina"
                      style={{ scale: "0.55" }}
                    />
                  </div>
                  <p className="desc"></p> {/* The paragraph with text animation */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <TextTwo />
      </div>

      {/* Mobile View */}
      <div className="mobile-responsive-view">
        <motion.div
          className="mobile-center-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="./b1.png"
            alt="mobile-view"
            style={{ width: "70%", height: "auto" }}
          />
          <p className="mobile-desc-text">
            "Innovate With Ballerina" provides an exclusive platform for
            university students to elevate their coding passion with the
            Ballerina programming language. This pioneering competition aims to
            drive the future of technology by fostering teamwork, innovation,
            and outstanding performance. Projects can be submitted via GitHub
            and will be evaluated by the WSO2 Ballerina team. Compelling rewards
            and certificates will be awarded for exceptional contributions.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default ScreenThree;
