import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function BackgroundLine() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const svgPath = document.querySelector(".background-line path");
        const pathLength = svgPath.getTotalLength();

        // Set up initial state of the path
        gsap.set(svgPath, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
        });

        // Create the scroll-triggered animation
        gsap.to(svgPath, {
            strokeDashoffset: 0,
            scrollTrigger: {
                trigger: ".inner-container",
                start: "top 30%", // When the top of the container enters the bottom of the viewport
                end: "bottom 50%", // When the bottom of the container leaves the top of the viewport
                // markers: true, // For debugging
                scrub: 2,
                 onUpdate: self => {
                    if (self.progress === 1) {
                        // Lock the animation at the end
                        gsap.to(svgPath, { strokeDashoffset: 0 });
                    }
                },
                onLeaveBack: (self) => {
                    // Ensure that on scroll up, the line stays drawn and doesn't reset
                    gsap.to(svgPath, { strokeDashoffset: 0, overwrite: true });
                    self.vars.scrub = false; // Disable scrubbing after the first complete draw
                    self.refresh(); // Refresh the trigger
                },
            },
            ease: "none",
        });
    }, []);

    return (
        <div className="background-line">
            <svg 
                width="1117" 
                height="1250" 
                viewBox="0 0 1177 3168" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M3 0V288.608H1174V743.249H533.348V1184.52H946.708V1611.3H389.619V2121.66H1050.33V2658.76H699.361V3168" 
                // stroke="#3A3A3A" 
                stroke="#4D4D4D"
                strokeWidth="10"
                strokeDasharray="2500" // This should be the length of the entire path
                strokeDashoffset="2500" // Start fully hidden
            />
            </svg>
        
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="526"
                height="1145"
                viewBox="0 0 526 1145"
                fill="none"
            >
                <path
                    d="M2 0V110.987H437V305.469V499.951H243.5V711.743H524V871.605H386.5V1024.34H505V1145"
                    stroke="#4D4D4D"
                    strokeWidth="4"
                    strokeDasharray="2500" // This should be the length of the entire path
                    strokeDashoffset="2500" // Start fully hidden
                />
            </svg> */}
        </div>
    );
}
