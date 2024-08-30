import './hero.css';
import ScrollDownButton from './scrolldown.button';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger) ;

function Hero() {

  useGSAP( () => {
    gsap.to("#yellow-text-right", {duration: 2, x: 200});
    gsap.to("#yellow-text-left", {duration: 2, x: -200});
    gsap.to("#girl-image", {duration: 2, scale: 1.3});
    // gsap.to("#map-image", {duration: 2, y : -100});

    // gsap.to("#girl-image",{
    //     scrollTrigger: {
            
    //         scrub: 1,
    //       },
    //         scale: 1.5,
    //         x: 100,
    //     }
    // );

    gsap.to("#yellow-text-right",{
        scrollTrigger: {
            
            scrub: 1,
          },
            scale: 2,
            y: 100,
          
        }
    );
    gsap.to("#yellow-text-left",{
        scrollTrigger: {
            
            scrub: 1,
          },
            scale: 2,
            y: 100,
            
        }
    );

    // gsap.to("#girl-image", {
    //     scrollTrigger: {
    //       trigger: "#girl-image", 
    //       start: "top 100vh",
    //       end: "bottom top", 
    //       scrub: 1,
    //     },
    //     opacity: 0,
    //   });

    

    });

  return (

    <div className="App">


      <section className = "section-one">
      <p id = "yellow-text-left"> INNOVATE </p>
      <p id = "yellow-text-right"> WITH BALERINA </p>
      <img src='./girl.png' alt= "girl" id = "girl-image" ></img>
     

      </section>

      
    <  ScrollDownButton className = "scroll-button" />
    <div className = "logo-container">
        <img src='./ieee-logo.png' alt= "ieee-logo" id = "ieee-logo"></img>
        <img src='./wso2-logo.png' alt= "wso2-logo" id = "wso2-logo"></img>
        <img  style = {{
            width: "auto",
            height: "60%"

        }}
        src='./b-logo.png' alt= "b-logo" id = "balerina-logo"></img>

    </div>



    </div>
  );
}

export default Hero;