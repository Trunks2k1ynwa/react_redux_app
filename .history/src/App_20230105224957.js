import { useSelector } from "react-redux";
import Card from "./uis/Card.js";

function App() {
  const globalOption = useSelector(state=>state.global);
  console.log(globalOption);
  return (
    <div className="App">
      <Card></Card>
      <button>Toggle dark mode</button>
    </div>
  );
}

export default App;
