import { useSelector } from "react-redux";
import Counter from "./other/Counter.js";
import Card from "./uis/Card.js";

function App() {
  const globalOption = useSelector((state) => state.global);

  return (
    <div className="App">
      <Card></Card>
      <Counter></Counter>
    </div>
  );
}

export default App;
