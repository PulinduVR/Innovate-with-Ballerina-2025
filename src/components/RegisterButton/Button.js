import React from 'react';
import './Button.css'; // Import the CSS styles

const Button = ({  label }) => {
   const alertD = () => {
      alert("Button Clicked");
   }
  return (
    <button className="register-button"  onClick={alertD}>
      {label}
    </button>
  );
};

export default Button;
