import './badge.css';

const Badges = () => {
      return (
         <div className = "main-badge-container">
               <div className = 'center-badge-container'>
                  <div className = 'badge-container'>
                     <img src = './mora-IEEE.svg' alt = "badge1" id = "badge1"></img>
                  </div>
                  <div className = 'badge-container'>
                     <img src = './cs-ieee.svg' alt = "badge2" id = "badge2"></img>
                  </div>
                  <div className = 'badge-container' style = {{height: 100}}>
                     <img src = './ws.svg' alt = "badge3" id = "badge3"></img>
                    
                  </div>
                  <div className = 'badge-container' style = {{height : 40}}>
                     <img src = './bal-logo.svg' alt = "badge4" id = "badge4"></img>
                  </div>

               </div>
         </div>
      )
}

export default Badges;