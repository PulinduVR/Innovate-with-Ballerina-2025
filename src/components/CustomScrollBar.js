import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../stylesheets/CustomScrollBar.css';

gsap.registerPlugin(ScrollTrigger);

const CustomScrollBar = () => {
  const contentRef = useRef(null);
  const scrollThumbRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    const scrollThumb = scrollThumbRef.current;

    const scrollHeight = content.scrollHeight - content.clientHeight;
    const containerHeight = content.clientHeight;

    // Set up ScrollTrigger
    gsap.to(scrollThumb, {
      y: scrollHeight,
      height: (containerHeight / content.scrollHeight) * containerHeight,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: content,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 3,
        onUpdate: (self) => {
          const progress = self.progress;
          // Apply liquid-like effect
          gsap.to(scrollThumb, {
            scaleX: 1 + progress * 0.5,
            scaleY: 1 + Math.sin(progress * Math.PI) * 0.5, // Bouncing effect
            duration: 0.3,
            ease: 'elastic.out(1, 0.5)',
          });
        },
      },
    });
  }, []);

  return (
    <div className="scroll-container">
      <div className="content" ref={contentRef}>
        {/* Scrollable content goes here */}
        <div style={{ height: '200vh' }}>Your Scrollable Content Here</div>
      </div>
      <div className="scroll-bar">
        <div className="scroll-thumb" ref={scrollThumbRef}></div>
      </div>
    </div>
  );
};

export default CustomScrollBar;
