import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TimeLineCard1 from "../components/TimeLineCard1";
import TimeLineCard2 from "../components/TimeLineCard2";
import TimeLineCard3 from "../components/TimeLineCard3";
import '../stylesheets/timeLineView.css';
import BackgroundLine from '../components/BackgroundLine';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function TimeLineView({parentRef}) {
    
    
    const [visibleCard, setVisibleCard] = useState(0);
    const controls = useAnimation();
   
    
    const headerRef = useRef(null);


    
    useEffect(() => {
        
        gsap.registerPlugin(TextPlugin, ScrollTrigger);
    
        // Set initial opacity for elements
        gsap.set(".svg3", { opacity: 0 });
        gsap.set(".header", { opacity: 0 });
        gsap.set(".svg-2", { opacity: 0 });
    
       // ---------Animation for the header text and SVG drawing---------------

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".paraSec",
                start: "top 90%",
                // onEnter: () => console.log("ScrollTrigger is triggered!"),
            }
        });
    
        const text = "Register Today";
        const chars = text.split("");
    
        // Typing animation for the text, character by character
        chars.forEach((char, i) => {
            tl1.to(".header", {
                duration: 0.1, // Speed for each character
                text: {
                    value: text.slice(0, i + 1),
                },
                ease: "none",
                onStart: function () {
                    document.querySelector(".header").style.opacity = 1;
                },
            });
        });
    
        // Drawing the SVG after the text is fully typed out
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


    
        //--------------Animtion for the spinning SVG (svg2)-------------------

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".buttonSection", // Adjust this to the container of the SVG
                scrub: true, // Smooth scrubbing, when you scroll it animates
                // markers: true,  Uncomment this for debugging
            }
        });
    
        tl2.fromTo(".svg-2",
            {
                opacity: 0, 
                x: 200, // Start off-screen to the right
                rotate: 0, // Start with no rotation
            },
            {
                opacity: 1, 
                x: 0, // Move to its original position
                duration: 3, // Duration of the horizontal movement
                ease: "power2.inOut", // Smooth easing
            }
        )
        .fromTo(".svg-2",
            {
                rotate: 0, // Ensure the starting point for rotation is 0
            },
            {
                rotate: 360, // Spin it 360 degrees in place
                duration: 3, // Duration of the rotation
                ease: "power2.inOut", // Smooth easing
                transformOrigin: "center center", // Ensure the rotation is centered
            },
            "<" // Start the rotation at the same time as the horizontal movement
        );



        const tl3=gsap.timeline({
            scrollTrigger: {
                trigger: ".header", // The element that triggers the animation
                start: "top 90%", // Start animation when the top of the element hits 90% of the viewport height
                scrub: true, // Smooth scrubbing, when you scroll it animates
                // markers: true,  //Uncomment this for debugging
            }
        });

        tl3.fromTo(".svg1", 
        {
            x: -200, // Start off-screen to the left
            opacity: 0, // Start with opacity 0
        },
        {
            x: 0, // Move to its original position
            opacity: 1, // Fade in to full opacity
            duration: 2, // Duration of the animation
            ease: "power2.inOut" // Smooth easing
        }
    );
    
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            console.log('scrolling');
    
            const windowHeight = window.innerHeight;
            const cards = document.querySelectorAll('.card');
            
            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const isVisible = rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2;
                if (isVisible) {
                    setVisibleCard(index + 1);
                }
            });
        };
    
        // Attach the scroll event listener to the window
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup function to remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        controls.start({ opacity: 1 });
    }, [visibleCard, controls]);

    return (
        <div className="timeline-view-container" >



            {/* Foreground Content */}
            <div className="foreground-content">
                <div className="full-screen-container">
                    <div className="background-svg">
                        <BackgroundLine/>
                    </div>
                    <div className='text-background-div1'>
                        <p className='text-background'>Stay  </p>
                    </div>
                    <div className='text-background-div2'>
                        <p className='text-background'>Updated  </p>
                    </div>
                    <div className='text-background-div3'>
                        <p className='text-background'>Stay</p>
                    </div>
                    <div className='text-background-div4'>
                        <p className='text-background'>Updated  </p>
                    </div>
                    <div className="inner-container">
                        <motion.div initial={{ opacity: 0 }} className={`card card1`} animate={visibleCard >= 1 ? controls : { opacity: 0 }}>
                            <TimeLineCard1 text={"Starting Registration"} month={"SEPT"} day={"01"} />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} className={`card card2`} animate={visibleCard >= 2 ? controls : { opacity: 0 }}>
                            <TimeLineCard2 text={"Closing Registrations"} month={"SEPT"} day={"20"} />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} className={`card card3`} animate={visibleCard >= 3 ? controls : { opacity: 0 }}>
                            <TimeLineCard2 text={"Case Study Publishing"} month={"SEPT"} day={"26"} />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} className={`card card4`} animate={visibleCard >= 4 ? controls : { opacity: 0 }}>
                            <TimeLineCard1 text={"Workshop 02"} month={"SEPT"} day={"30"} />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} className={`card card5`} animate={visibleCard >= 5 ? controls : { opacity: 0 }}>
                            <TimeLineCard3 text={"Opening Submissions"} month={"SEPT"} day={"30"} />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} className={`card card6`} animate={visibleCard >= 6 ? controls : { opacity: 0 }}>
                            <TimeLineCard1 text={"Workshop 03"} month={"OCT"} day={"03"} />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} className={`card card7`} animate={visibleCard >= 7 ? controls : { opacity: 0 }}>
                            <TimeLineCard3 text={"Closing Submissions"} month={"OCT"} day={"13"} />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} className={`card card8`} animate={visibleCard >= 8 ? controls : { opacity: 0 }}>
                            <TimeLineCard1 text={"AWARD CEREMONY"} month={"NOV"} day={"02"} />
                        </motion.div>
                    </div>

                </div>

                <div className='paraSec'>

                    <div className="paraSec-sub">
                        <div className='svg1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="306" height="78" viewBox="0 0 306 78" fill="none">
                                <path d="M304.386 15.1388C303.126 10.2835 299.869 6.23723 295.209 3.73516C288.068 -0.0969882 279.564 0.48896 273.996 2.30272C265.141 5.19544 258.843 11.7903 254.335 17.213C249.913 22.5427 246.011 28.2256 242.232 33.732C238.037 39.8523 234.021 45.6935 229.57 50.7069C229.542 50.2884 229.523 49.8606 229.504 49.4048C229.286 44.4844 229.504 39.071 229.646 35.1272C229.722 33.1925 229.779 31.6579 229.788 30.3743C231.256 24.068 230.233 17.25 226.928 12.0691C224.182 7.75331 220.157 4.57247 215.535 2.7587C215.09 2.49827 214.626 2.2564 214.162 2.02386C208.953 -0.515404 200.411 -1.92903 189.293 5.69807C183.98 9.3442 178.449 14.7296 172.379 22.1521C163.846 32.5882 156.582 44.3263 153.41 49.6746C153.41 49.5816 153.41 49.4979 153.4 49.4048C153.183 44.4844 153.4 39.071 153.542 35.1272C153.628 32.9135 153.694 31.2207 153.684 29.8348C154.972 23.6866 153.921 17.1105 150.711 12.0691C148.04 7.87422 144.176 4.75842 139.716 2.91675C139.176 2.60051 138.627 2.2936 138.068 2.02386C132.859 -0.515404 124.317 -1.92903 113.199 5.69807C107.886 9.3442 102.355 14.7296 96.2848 22.1521C87.6573 32.7091 80.3179 44.596 77.2021 49.8513C77.2021 49.7025 77.1832 49.5537 77.1832 49.4048C76.9654 44.4844 77.1832 39.071 77.3253 35.1272C77.4484 31.8903 77.5336 29.7512 77.4105 28.0862C76.5392 16.2642 70.5823 6.27458 61.8412 2.02386C56.6326 -0.515404 48.0904 -1.92903 36.9722 5.69807C31.6593 9.3442 26.1286 14.7296 20.0581 22.1521C10.3416 34.0485 2.24447 47.6376 0 51.5163L19.2532 62.2687C20.9673 59.3108 27.1514 48.8838 34.7561 39.0058C45.1072 25.5653 50.7894 22.5797 52.5319 21.9286C53.5547 22.9797 55.0132 25.6866 55.2973 29.5932C55.3257 30.235 55.2404 32.4766 55.1741 34.2811C54.9563 39.7875 54.6628 47.3214 55.2973 54.3253C55.9886 61.9338 57.9584 72.4908 67.1447 76.3973C69.1524 77.2531 71.1979 77.6808 73.2719 77.6808C78.7079 77.6808 84.3617 74.7787 90.1765 68.984C97.2508 61.9429 102.848 53.7858 108.255 45.8982C111.911 40.5686 115.368 35.5365 119.156 30.9788C120.538 29.3139 124.762 24.2352 128.635 22.961C128.853 22.8866 129.128 22.831 129.412 22.7938C130.312 24.1518 131.278 26.4956 131.505 29.6022C131.533 30.244 131.448 32.4857 131.382 34.2902C131.164 39.7966 130.871 47.3305 131.505 54.3344C132.196 61.9429 134.166 72.5003 143.352 76.4069C145.36 77.2626 147.406 77.6904 149.48 77.6904C154.916 77.6904 160.569 74.7883 166.384 68.9935C173.459 61.9524 179.055 53.7953 184.463 45.9078C188.119 40.5781 191.575 35.546 195.363 30.9884C196.746 29.3234 200.97 24.2448 204.843 22.9705C205.033 22.9054 205.269 22.8587 205.516 22.8215C206.415 24.1795 207.372 26.5144 207.599 29.6118C207.628 30.2536 207.542 32.4952 207.476 34.2997C207.258 39.8061 206.965 47.34 207.599 54.3439C208.29 61.9524 210.26 72.5094 219.446 76.416C221.454 77.2717 223.5 77.6994 225.574 77.6994C231.01 77.6994 236.663 74.7973 242.478 69.0026C249.553 61.9615 255.15 53.8044 260.557 45.9168C264.213 40.5872 267.669 35.5551 271.457 30.9975C272.84 29.3325 277.064 24.2539 280.937 22.9796C281.629 22.7564 282.471 22.6728 283.182 22.6821C283.646 29.0535 281.686 42.1966 279.261 52.2234L300.815 57.2551C301.98 52.4463 307.615 27.835 304.329 15.1665L304.386 15.1388Z" fill="url(#paint0_linear_2407_127)" />
                                <defs>
                                    <linearGradient id="paint0_linear_2407_127" x1="0" y1="38.8497" x2="305.345" y2="38.8497" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FBB934" />
                                        <stop offset="1" stop-color="#0E9F9B" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div className='title-area'>
                            <div>
                                <svg className='svg3' xmlns="http://www.w3.org/2000/svg" width="345" height="120" viewBox="0 0 345 120" fill="none">
                                    <path d="M264.887 18.6642C210.795 -4.26032 106.781 -0.381931 53.3906 19.6782C29.0751 28.8143 -15.7618 55.2863 11.5217 80.2792C16.3338 84.6876 22.1831 88.2688 28.2349 91.3678C94.8382 125.471 187.732 121.998 259.213 101.592C269.873 98.5489 280.363 94.936 290.015 90.0257C297.233 86.3532 304.211 81.8013 309.832 76.4893C326.287 60.9383 321.989 45.2882 304.285 32.1043C283.759 16.8186 255.689 12.0817 229.204 9.48745C206.045 7.21903 182.914 6.78343 159.645 7.70924C116.005 9.44529 65.7132 12.2077 29.1125 33.106C13.1262 42.2341 -4.04894 61.7393 9.65415 77.526C24.5032 94.6326 59.5156 100.172 83.0652 103.782C146.595 113.52 247.116 108.691 304.984 83.1359C311.224 80.38 317.546 77.8118 323.128 74.1879C327.539 71.3244 331.762 68.0593 335.426 64.5257C361.389 39.4836 303.454 23.7383 283.021 21.0344C218.745 12.5281 123.612 0.252711 64.4164 22.881" stroke="#FBB934" stroke-width="5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className='header' ref={headerRef}> Register Today </p>
                            </div>

                        </div>
                        <p className="para">
                            Join the "Innovate with Ballerina" competition to empower your coding proficiency and entrepreneurial spirit! Gain invaluable experience and contribute to shaping  the future of technology. Secure your spot today and embark on an inspiring         journey of learning and discovery.
                        </p>
                    </div>
                    <div className='buttonSection'>
                        <button className='button-filled button-filled-text'>Register Now</button>
                        <button className='button-outlined button-outlined-text'>Download Booklet</button>
                    </div>
                    <div className='svg2'>
                        <svg className='svg-2' xmlns="http://www.w3.org/2000/svg" width="316" height="306" viewBox="0 0 316 306" fill="none">
                            <path d="M157.994 72.573L206.825 0L204.437 87.93L285.822 58.4445L233.125 128.147L316 153.006L233.125 177.866L285.822 247.555L204.437 218.082L206.825 306L157.994 233.439L109.175 306L111.564 218.082L30.1782 247.555L82.8634 177.866L0 153.006L82.8634 128.147L30.1782 58.4445L111.564 87.93L109.175 0L157.994 72.573Z" fill="url(#paint0_linear_2407_126)" fill-opacity="0.73" />
                            <defs>
                                <linearGradient id="paint0_linear_2407_126" x1="157.914" y1="112.416" x2="158.202" y2="306" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0E9F9B" />
                                    <stop offset="1" stop-color="#FBB934" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    );
}