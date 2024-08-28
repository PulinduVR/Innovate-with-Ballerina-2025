import ScreenThree from "./screen-three";
import "./screen-two.css";

const ScreenTwo = () => {
    return (
        <div className="container">

            <div className = "balerina-container" >
                <img src='./balerina-logo.png' alt= "balerina" id = "balerina"></img>
            </div>
            <div className = "header-text-container">
                <p className =  "header-text">THE ULTIMATE <br/> CODING <br/> CHALLENGE <underscore>_</underscore> </p>
            </div>
            <div className = "second-text-container">
                <div className = "circle-button-container">
                    <img src='./circle-button.png' alt= "circle-button" id = "circle-button"></img>
                </div>
                <div>
                    <p className = "second-text" > Propel your coding journey to new <br/>
                     heights with the "Innovate with <br/>
                      Ballerina" competition, organized by <br/>
                       IEEE and WSO2.</p>


                </div>


                
            </div>
            

        </div>
    );
}

export default ScreenTwo;