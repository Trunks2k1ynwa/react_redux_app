import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement  = ()=>{
    setCount(count+1);
  }
  const handleDecrement  = ()=>{
    setCount(count-1);
  }
  return (
    <div className="App shadow p-5 ">
    <h2>Count : {count}</h2>
      <div className="flex gap-x-10 justify-center items-center">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
