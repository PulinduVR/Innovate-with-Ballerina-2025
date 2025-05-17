import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TimelineComponent.css';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const TimelineComponent = () => {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const progressRef = useRef(null);
  const eventsRef = useRef([]);
  const dotsRef = useRef([]);
  
  // Timeline data
  const events = [
    { 
      id: 1, 
      date: '14', 
      month: 'May', 
      title: 'REGISTRATION OPENING', 
      position: 'left',
      frame: 'Frame 32'
    },
    { 
      id: 2, 
      date: '21', 
      month: 'May', 
      title: 'INTRODUCTORY SESSION', 
      position: 'right',
      frame: 'Frame 38'
    },
    { 
      id: 3, 
      date: '01', 
      month: 'July', 
      title: 'WORKSHOP 01', 
      position: 'left',
      frame: 'Frame 39'
    },
    { 
      id: 4, 
      date: '09', 
      month: 'July', 
      title: 'INITIAL SUBMISSION OPENING', 
      position: 'right',
      frame: 'Frame 40'
    }
  ];
  
  useEffect(() => {
    // Animation for header titles with staggered effect
    const titles = document.querySelectorAll('.timeline-title h1, .timeline-title h2');
    gsap.fromTo(titles, 
      { opacity: 0, y: -30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out"
      }
    );
      // Create a timeline instance for scrolling progress bar animation
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline-line-container",
        start: "top 75%",
        end: "bottom 25%",
        scrub: 0.5,
        onUpdate: (self) => {
          // Update progress bar height based on scroll progress, animating from top to bottom
          const progress = self.progress;
          gsap.to(progressRef.current, {
            height: `${Math.min(Math.max(progress * 100, 0), 100)}%`,
            duration: 0.1,
            ease: "power1.out"
          });
        }
      }
    });
    
    // Make line static - no growth animation
    gsap.set(lineRef.current, { 
      opacity: 1,
      scaleY: 1,
    });
    
    // Initial dot animations
    const topBottomDots = document.querySelectorAll('.timeline-dot-top, .timeline-dot-bottom');
    gsap.fromTo(topBottomDots, 
      { scale: 0, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "elastic.out(1, 0.5)",
        delay: 0.5
      }
    );
      // Create pulse animation for dots
    gsap.to('.timeline-dot', {
      boxShadow: '0 0 15px 5px rgba(245, 158, 11, 0.8)',
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut"
    });
    
    // Make events visible with the timeline growth
    eventsRef.current.forEach((event, index) => {
      const card = event.querySelector('.event-card');
      const connector = event.querySelector('.connector-path');
      const position = event.dataset.position;
      const xOffset = position === 'left' ? -70 : 70;
      
      // Create a timeline for each event
      const eventTl = gsap.timeline({
        scrollTrigger: {
          trigger: event,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
      
      // Connector animation (only on desktop)
      if (window.innerWidth > 768 && connector) {
        eventTl.fromTo(connector,
          { strokeDashoffset: 1000, opacity: 0 },
          {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          }, 0
        );
      }
      
      // Card animation with staggered elements
      eventTl.fromTo(card,
        { 
          opacity: 0, 
          y: 30,
          x: xOffset,
          scale: 0.9,
          rotationY: position === 'left' ? -15 : 15
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          rotationY: 0,
          duration: 1,
          ease: "power3.out",
        }, 0.3
      );
      
      // Date number animation
      const dateNumber = event.querySelector('.date-number');
      eventTl.fromTo(dateNumber,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "back.out(1.7)",
        }, 0.7
      );
      
      // Month animation
      const dateMonth = event.querySelector('.date-month');
      eventTl.fromTo(dateMonth,
        { opacity: 0, x: position === 'left' ? -20 : 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
        }, 0.9
      );
      
      // Title animation
      const title = event.querySelector('.event-title');
      eventTl.fromTo(title,
        { opacity: 0, y: -15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        }, 0.5
      );
      
      // Create interactive hover animations
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -8,
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(245, 158, 11, 0.3)',
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(dateNumber, {
          scale: 1.1,
          duration: 0.4,
          ease: "back.out(1.7)"
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          duration: 0.5,
          ease: "power3.out"
        });
        
        gsap.to(dateNumber, {
          scale: 1,
          duration: 0.3,
          ease: "power2.inOut"
        });
      });
    });
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <div className="timeline-container" ref={timelineRef}>
      {/* Timeline Title */}
      <div className="timeline-title">
        <h1>Our</h1>
        <h2>Journey</h2>
      </div>
      
      {/* Main Timeline Line */}
      <div className="timeline-line-container">
        <div className="timeline-line" ref={lineRef}>
          <div className="timeline-progress" ref={progressRef}></div>
          <div className="timeline-dot timeline-dot-top"></div>
          <div className="timeline-dot timeline-dot-bottom"></div>
        </div>
        
        {/* Timeline Events */}
        <div className="timeline-events">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className={`timeline-event ${event.position}`}
              data-position={event.position}
              ref={el => eventsRef.current[index] = el}
            >
              {/* Event Card */}
              <div className="event-card">
                <div className="card-glow"></div>
                <h3 className="event-title">{event.title}</h3>
                <div className="event-date">
                  <span className="date-number">{event.date}</span>
                  <span className="date-month">{event.month}</span>
                </div>
              </div>
              
              {/* Connector (only for desktop) */}
              <div className={`connector ${event.position} desktop-only`}>
                <svg width="100%" height="100%" viewBox="0 0 768 768" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id={`arcGradient-${event.id}`} gradientUnits="userSpaceOnUse" x1="0" y1="768" x2="768" y2="0">
                      <stop offset="0%" stopColor="#FFA500" />
                      <stop offset="50%" stopColor="#93C54B" />
                      <stop offset="100%" stopColor="#00BCD4" />
                    </linearGradient>
                  </defs>
                  {event.position === 'left' ? (
                    <g transform="rotate(180 384 384)">
                    <path
                      className="connector-path"
                      d="M 768,768 A 768 768 0 0 0 0 50"
                      fill="none"
                      stroke={`url(#arcGradient-${event.id})`}
                      strokeWidth="40"
                      strokeLinecap="round"
                    />
                    </g>
                  ) : (
                    <g transform="rotate(180 384 384)">
                    <path
                      className="connector-path"
                      d="M 0,768 A 768 768 0 0 1 768 50"
                      fill="none"
                      stroke={`url(#arcGradient-${event.id})`}
                      strokeWidth="40"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    </g>
                  )}
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;