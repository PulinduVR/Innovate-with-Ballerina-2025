import React from 'react';
import './Button.css'; 

const Button = () => {
   const alertD = () => {
      alert("Button Clicked");
   }
  return (
   <div>
   <button className='button-outlined button-outlined-text' onClick={alertD}>Download Booklet</button>
   </div>
  );
};

export default Button;
