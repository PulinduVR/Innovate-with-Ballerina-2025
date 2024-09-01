import React, { useEffect, useRef, useState } from 'react';
import ArrowIcon from './style=outline.svg'; // Adjust the path as necessary
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
      <button className="dropdown-button" onClick={onToggle}>
        <span className="dropdown-title">{title}</span>
        <div className="dropdown-arrow-wrapper">
          <img
            src={ArrowIcon}
            className={`dropdown-arrow ${isOpen ? 'open' : ''}`}
            alt="arrow icon"
          />
        </div>
      </button>
      <div
        ref={contentRef}
        className="dropdown-content"
        style={{ maxHeight: height }}
      >
        {children}
      </div>
    </div>
  );
};

export default Faq;
