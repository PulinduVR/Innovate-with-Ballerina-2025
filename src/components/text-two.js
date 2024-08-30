const TextTwo = () => {
   return (
      <div style={{ 
         backgroundColor: "#0A1F25", 
         position: "relative", 
         width: "100%", 
         height: "50vh",
     
      }}>
         <svg 
            style={{ 
               position: "absolute", 
               right: "-30%", 
               top: "-30%"
            }} 
            width="100%" 
            height="100%"  
            viewBox="0 0 400 356" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
         >
            <defs>
               <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="50%" style={{ stopColor: "#1489A6", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#E2AD60", stopOpacity: 1 }} />
               </linearGradient>
            </defs>
            <rect width="507" height="356"  />
            <path id="curvebellow" d="M2.100 92C1.300 187.667 -4 500 500 100" stroke="url(#pathGradient)" strokeWidth="40" />
            <text fontSize="24" fontFamily="Arial" fill="white" fontWeight="bold">
               <textPath href="#curvebellow" offset="50%">
                  THE ULTIMATE CODING CHALLENGE _ M1 54.5C81.8333 37.1667 300 64.4 400 312
               </textPath>
            </text>
         </svg>
      </div>
   );
}

export default TextTwo;
