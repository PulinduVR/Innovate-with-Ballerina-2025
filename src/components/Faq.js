import React, { useEffect, useRef, useState } from 'react';
//import ArrowIcon from './style=outline.svg'; // Adjust the path as necessary
import "../stylesheets/Faq.css";

const Faq = ({ title, children, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className="dropdown">
      <button className={`dropdown-button ${isOpen ? 'open' : ''}`} onClick={onToggle}>
        <span className={`dropdown-title ${isOpen ? 'open' : ''}`}>{title}</span>
        <div className={`dropdown-arrow-wrapper ${isOpen ? 'open' : ''}`}>
          <svg className={`dropdown-arrow ${isOpen ? 'open' : ''}`} width="194px" height="194px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={`${isOpen? '#000000' : '#ffffff'}`}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 6V18M12 18L7 13M12 18L17 13" stroke={`${isOpen? '#000000' : '#ffffff'}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
      </button>
      <div
        ref={contentRef}
        className={`dropdown-content ${isOpen ? 'open' : ''}`}
        style={{ maxHeight: height }}
      >
        {children}
      </div>
    </div>
  );
};

export default Faq;
