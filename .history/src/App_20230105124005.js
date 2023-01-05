import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement  = ()=>{
    setCount(count++);
  }
  const handleDecrement  = ()=>{
    setCount(count--);
  }
  return (
    <div className="App">
    <h2>Count : {count}</h2>
      <div className="flex gap-10">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
