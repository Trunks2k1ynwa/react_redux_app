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
    <div className="App shadow p-5 w-[200px] mx-auto mt-10">
    <h2 className="mb-5">Count : {count}</h2>
      <div className="flex gap-x-10 justify-center items-center">
        <button className="inline-block border-gray-200 border p-5" onClick={handleIncrement}>Increment</button>
        <button className="inline-block border-gray-200 border p-5" onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
