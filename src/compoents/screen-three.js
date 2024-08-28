import "./screen-three.css";

const ScreenThree = () => {
  return (
    <div className="container-screen-three">
      <div className="big-container">
        <div className="box-start-container">
          <div className="boxes-container" >
            <img src="./boxes.png" alt="box" id="box" style = {{ height: "100%" , width : "auto"}}></img>

          </div>
          <div className="boxes-container">
            <img src="./Vector.png" alt="box" id="box" style = {{ height: "100%" , width : "auto", marginTop: "50%", marginLeft: "50%"}}></img>
          </div>
        </div>
        <div className="center-container">
          <div className="browser-window">
            <div className="browser-header">
              <div className="browser-buttons">
                <span className="button close"></span>
                <span className="button minimize"></span>
                <span className="button maximize"></span>
              </div>
            </div>
            <div className="content" style = {{justifyContent : "center"}}>
              <img src="./bal.png" alt="balerina" id="balerina" style = {{marginLeft : "20%"}}></img>
              <p>
                "Innovate With Ballerina" provides an exclusive platform for
                university students to elevate their coding passion with the
                Ballerina programming language. This pioneering competition aims
                to drive the future of technology by fostering teamwork,
                innovation, and outstanding performance. Projects can be
                submitted via GitHub and will be evaluated by the WSO2 Ballerina
                team. Compelling rewards and certificates will be awarded for
                exceptional contributions.
              </p>
            </div>
          </div>
        </div>
        <div className="boxes-container" style = {{marginTop : "20%"}}> 
            <img src="./cir.png" alt="box" id="box" style = {{ height: "100%" , width : "auto", marginLeft: "-40%"}}></img>
          </div>
      </div>
    </div>
  );
};

export default ScreenThree;
