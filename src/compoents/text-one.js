const TextOne = () => {
   return (
     <div>
       <svg width="507" height="356" viewBox="0 0 507 356" fill="none" xmlns="http://www.w3.org/2000/svg">
         <defs>
           <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
             <stop offset="0%" style={{ stopColor: "#00BFFF", stopOpacity: 1 }} />
             <stop offset="100%" style={{ stopColor: "#FFA500", stopOpacity: 1 }} />
           </linearGradient>
         </defs>
         <rect width="507" height="356" fill="white" />
         <path id="curve" d="M1 54.5C81.8333 37.1667 246.5 64.4 258.5 312" stroke="url(#pathGradient)" strokeWidth="39"/>
         <text fontSize="20" fontFamily="Arial" fill="white" fontWeight="bold">
           <textPath href="#curve" >
             INNOVATE WITH BALLERINA INNOVATE WITH BALLERINA
           </textPath>
         </text>
       </svg>
     </div>
   );
 }
 
 export default TextOne;
 