import React from "react";

const ScreenTwo = () => {
  return (
    <div style={styles.container}>
      <div style={styles.curve}></div>
      <div style={styles.content}>
        <div style={styles.textContainer}>
          <span style={styles.codeIcon}>{"{}"}</span>
          <h1 style={styles.heading}>
            <span ><img style={{ height: 60}} src = "/arrow.png" alt = "starr" /></span>{" "}
            <span style={styles.subHeading}>The</span>{" "}
            <span style={styles.highlight}>Ultimate</span> <br />
            <span style={styles.subHeading}>C<span><img style = {{height : 60}}src = "/bluestar.png" alt = "star" /></span>ding Challenge</span>
          </h1>
          <p style={styles.subText}>
            Awaken Your Dormant Innovator! Join With IEEE And WSO2 In A
            Ballerina Language Exclusive Coding Competition
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
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
    backgroundImage:
      "url('data:image/svg+xml;base64,<svg_content_here>')", // Use base64 encoded SVG if possible
    backgroundSize: "cover",
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
  codeIcon: {
    fontSize: "2rem",
    color: "#1489A6",
    marginBottom: "10px",
  },
  heading: {
    fontSize: "5rem",
    fontWeight: "bold",
  },
  subHeading: {
    color: "#E2AD60",
  },
  highlight: {
    backgroundColor: "#3a3f47",
    padding: "0 10px",
    borderRadius: "5px",
  },
  subText: {
    marginTop: "20px",
    fontSize: "1.2rem",
    color: "#C5C6C7",
  },
};

export default ScreenTwo;
