import React from 'react';
import './Button.css'; 

function Button() {
   const alertD = () => {
      alert("Button Clicked");
   }
  return (
   <div>
   <button className='reg-button reg-button-text' onClick={alertD}>Register Now</button>
   </div>
  );
};

export default Button;
