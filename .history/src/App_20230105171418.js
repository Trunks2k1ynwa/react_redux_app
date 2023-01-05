import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter.js";

function App() {
  const count = useSelector(state=>state.counter.count);
  return (
    <div className="App">
    <h2> the count from app is : {count}</h2>
    <Counter count={count} ></Counter>
      </div>
  );
}

export default App;
