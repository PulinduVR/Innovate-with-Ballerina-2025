import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TimelineComponent.css';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const TimelineComponent = () => {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const eventsRef = useRef([]);
  
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
    // Animation for header titles
    const titles = document.querySelectorAll('.timeline-title h1, .timeline-title h2');
    gsap.fromTo(titles, 
      { opacity: 0, y: -30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }
    );
    
    // Animation for line growing with scroll
    gsap.fromTo(lineRef.current, 
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".timeline-line-container",
          start: "top 75%",
          end: "bottom 25%",
          scrub: true,
        }
      }
    );
    
    // Animate dots
    const dots = document.querySelectorAll('.timeline-dot');
    gsap.fromTo(dots, 
      { scale: 0 },
      { 
        scale: 1, 
        duration: 0.5,
        stagger: 0.4,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".timeline-line-container",
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    );
    
    // Animate each event card when it comes into view
    eventsRef.current.forEach((event, index) => {
      const card = event.querySelector('.event-card');
      const connector = event.querySelector('.connector-path');
      const position = event.dataset.position;
      const xOffset = position === 'left' ? -50 : 50;
      
      // Card animation
      gsap.fromTo(card,
        { 
          opacity: 0, 
          y: 20,
          x: xOffset
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: event,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
      
      // Connector animation
      gsap.fromTo(connector,
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: event,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
      
      // Date number animation
      const dateNumber = event.querySelector('.date-number');
      gsap.fromTo(dateNumber,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          delay: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: event,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });
    
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
                <h3 className="event-title">{event.title}</h3>
                <div className="event-date">
                  <span className="date-number">{event.date}</span>
                  <span className="date-month">{event.month}</span>
                </div>
              </div>
              
              {/* Connector */}
              <div className={`connector ${event.position}`}>
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
                      strokeWidth="50"
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
                      strokeWidth="50"
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