import React from 'react';
import './Button.css'; 

function Button() {
   const alertD = () => {
      alert("Button Clicked");
   }
  return (
   <div>
   <button className='button-outlined button-outlined-text' onClick={alertD}>Register Now</button>
   </div>
  );
};

export default Button;
