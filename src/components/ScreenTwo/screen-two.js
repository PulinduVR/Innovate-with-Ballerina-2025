import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScreenTwo = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#arrow", {
      scrollTrigger: {
        trigger: "#arrow",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 3,
      },
      x: -50,
    });

    gsap.from("#cont", {
      scrollTrigger: {
        trigger: "cont",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 3,
      },
      y: 200,
    });

    
  });

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          #star {
            height: 60px;
            animation: spin 19s linear infinite;
          }
        `}
      </style>
      <div style={styles.curve}></div>
      <div style={styles.topdiv}>
        <img src="/bal.png" alt="bal"/>
      </div>
      <div style={styles.content} id = "cont">
        <div style={styles.textContainer}>
          <h1 style={styles.heading}>
            <span>
              <img
                id="arrow"
                style={{ height: 60 }}
                src="/arrow.png"
                alt="arrow"
              />
            </span>
            <span style={styles.subHeading}>The </span>
            <span style={styles.highlight}>Ultimate</span>
            {"  "}
            <span>
              <img style={{ width: 40 }} src="/spring.png" alt="spring" />
            </span>
            <br />
            <span style={styles.subHeading}>
              C
              <span>
                <img
                  id="star"
                  src="/bluestar.png"
                  alt="star"
                />
              </span>
              ding Challenge
            </span>
          </h1>
          <p style={styles.subText}>
            Awaken Your Dormant Innovator!<br/> Join With IEEE And WSO2 In A
            Ballerina Language Exclusive Coding Competition
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  topdiv: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "80%",
    height: "10%",
    display: "flex",
    justifyContent: "left",
    padding: 20,
    alignItems: "center",
    zIndex: 1,
  },
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundColor: "#0A1F25",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  curve: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: "url(./path.svg)",
    backgroundSize: "330%",
    backgroundPosition: "47% 10%",
    backgroundRepeat: "no-repeat",
    top: 0,
    left: 0,
    opacity: 0.1,
  },
  content: {
    zIndex: 2,
    textAlign: "center",
  },
  textContainer: {
    display: "inline-block",
  },
  heading: {
    fontSize: "5rem",
    fontWeight: "bold",
    fontFamily: "Space Grotesk",
  },
  subHeading: {
    color: '#D2D2D2',
  },
  highlight: {
    backgroundImage : "url(/highlight.png)",
    backgroundSize: "cover",
    padding: "0 10px",
    borderRadius: "5px",
    color: "#152B39"

  },
  subText: {
    marginTop: "20px",
    fontSize: "1.2rem",
    color: "#C5C6C7",
    fontFamily: "Space Grotesk",
  },
};

export default ScreenTwo;
