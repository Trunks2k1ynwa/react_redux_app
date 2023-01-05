import "./App.css";
import Counter from "./components/Counter.js";

function App() {
  return (
    <div className="App">
    <h2> the count from app is : {count}</h2>
    <Counter count={count} setCount={setCount}></Counter>
      </div>
  );
}

export default App;
