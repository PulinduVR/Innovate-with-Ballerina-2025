import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../RegisterButton/Button";

const ScreenTwo = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#arrow", {
      scrollTrigger: {
        trigger: "#arrow",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 3,
      },
      x: -50,
    });

    gsap.to("#cont", {
      scrollTrigger: {
        trigger: "cont",
        start: "top top",
        end: "bottom 20%",
        scrub: 3,
      },
      y: 300,
    });
  });

  const handleButtonClick = () => {
    alert("Register");
  };

  const styles = {
    heading: {
      fontSize: isMobile ? "3rem" : "5rem",
      fontFamily: "Space Grotesk",
    },
    arr: {
      height: 40,
      display: isMobile && "none",
    },
    spring: {
      height: 60,
      display: isMobile && "none",
    },
    topdiv: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "14%",
      display: "flex",
      justifyContent: "space-between",
      padding: 20,
      zIndex: 1,
      alignItems: "center",
    },
    container: {
      width: "100%",
      height: "110vh",
      backgroundColor: "#0A1F25",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
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
      display: "flex",
    },
    textContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: 20,
      width: "100%",
    },
  
    subHeading: {
      color: "#D2D2D2",
    },
    highlight: {
      backgroundImage: "url(/highlight.png)",
      backgroundSize: "cover",
      padding: "0 10px",
      borderRadius: "5px",
      color: "#152B39",
    },
    subText: {
      marginTop: "20px",
      fontSize: "1rem",
      color: "#C5C6C7",
      fontFamily: "Space Grotesk",
    },
  };

  return (
    <div style={styles.container} className="main-container-se">
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
      <div style={styles.topdiv} id="logo-cont">
        <img src="/bal.png" alt="bal" 
          style={{
            padding: "1em 1em",
          }}
        />
        {/* Update the button's onClick event handler */}
        <div style={{ display: "flex", width : '200px' , marginRight : '1.5em'}}>
       <Button onClick={handleButtonClick} />
       </div>
      </div>

      <div style={styles.content} id="cont">
        <div style={styles.textContainer} className="text-container">
          <h1 style={styles.heading} className="heading">
            <span>
              <img id="arrow" style={styles.arr} src="/arrow.png" alt="arrow" />
            </span>
            <span style={styles.subHeading}>The </span>
            <span style={styles.highlight}>Ultimate</span>
            {"  "}
            <span>
              <img style={styles.spring} src="/spring.png" alt="spring" />
            </span>
            <br />
            <span style={styles.subHeading}>
              C
              <span>
                <img
                  id="star"
                  src="/o-star.svg"
                  alt="star"
                  width={40}
                  style={{ marginBottom: -10 }}
                />
              </span>
              ding Challenge
            </span>
          </h1>
          <p style={styles.subText}>
            Awaken Your Dormant Innovator!<br /> Join With IEEE And WSO2 In A
            Ballerina Language Exclusive Coding Competition
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScreenTwo;
