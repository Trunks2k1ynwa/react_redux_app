import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter.js";
import Card from "./uis/Card.js";

function App() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <Card></Card>
    </div>
  );
}

export default App;
