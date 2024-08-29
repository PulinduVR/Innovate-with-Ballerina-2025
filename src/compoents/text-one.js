const TextOne = () => {
   return (
     <div style = {{backgroundColor : "#0A1F25"}}>
       <svg width="30%" height="30%" viewBox="0 0 507 356" fill="none" xmlns="http://www.w3.org/2000/svg">
         <defs>
           <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
             <stop offset="50%" style={{ stopColor: "#1489A6", stopOpacity: 1 }} />
             <stop offset="100%" style={{ stopColor: "#E2AD60", stopOpacity: 1 }} />
           </linearGradient>
         </defs>
         <rect width="507" height="356" />
         <path id="curve" d="M1 90.5C50.9003 10.2000 700 100.8 400 800" stroke="url(#pathGradient)" strokeWidth="40"/>
         <text fontSize="24" fontFamily="Arial" fill="white" fontWeight= "bold">
           <textPath href="#curve" offset= "50%">
             THE ULTIMATE CODING CHALLENGE _ M1 54.5C81.8333 37.1667 300 64.4 400 312
           </textPath>
         </text>
       </svg>
     </div>
   );
 }
 
 export default TextOne;
 