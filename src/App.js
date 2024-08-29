import Hero from "./compoents/hero";
import ScreenThree from "./compoents/screen-three";
import ScreenTwo from "./compoents/screen-two";
import TextOne from "./compoents/text-one";

function App() {
  return (
    <div className = "main-container">
      
      <Hero />  
      <ScreenTwo />
    
      <ScreenThree />

    </div>
  );
}

export default App;
