import React from 'react';
import './Button.css'; 

function Button() {
  return (
   <div>
   <button className='reg-button reg-button-text' onClick={() => window.location.href='https://forms.gle/uB1ScvWHJYsQbTBs5'}>Register Now</button>
   </div>
  );
};

export default Button;
