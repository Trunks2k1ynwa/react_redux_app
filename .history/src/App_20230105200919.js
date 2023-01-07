import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter.js";
import Card from "./uis/Card.js";

function App() {
  return (
    <div className="App">
      <Card></Card>
      <button>Toggle dark mode</button>
    </div>
  );
}

export default App;
