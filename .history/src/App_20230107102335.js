import { useSelector } from "react-redux";
import Counter from "./other/Counter.js";
import ButtonToggle from "./uis/ButtonToggle.js";
import Card from "./uis/Card.js";
import SideBar from "./uis/SideBar.js";

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <ButtonToggle></ButtonToggle>
    </div>
  );
}

export default App;
