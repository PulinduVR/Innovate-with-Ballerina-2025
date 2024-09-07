import './badge.css';

const Badges = () => {
      return (
         <div className = "main-badge-container">
               <div className = 'center-badge-container'>
                  <div className = 'badge-container'>
                     <img src = './ieee-logo.png' alt = "badge1" id = "badge1"></img>
                  </div>
                  <div className = 'badge-container'>
                     <img src = './CS-logo.png' alt = "badge2" id = "badge2" style = {{height: 60}}></img>
                  </div>
                  <div className = 'badge-container' style = {{height: 90}}>
                     <img src = './ws.svg' alt = "badge3" id = "badge3"></img>
                    
                  </div>
                  <div className = 'badge-container' style = {{height : 50}}>
                     <img src = './b-logo.png' alt = "badge4" id = "badge4"></img>
                  </div>

               </div>
         </div>
      )
}

export default Badges;