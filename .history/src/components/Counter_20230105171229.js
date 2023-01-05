import React, { useState } from "react";

const Counter = ({props}) => {
  const {count,setCount} = props;}
  // console.log("top state");
  const [count, setCount] = useState(0);
  // console.log("below state");
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="Counter shadow p-5 w-[250px] mx-auto mt-10">
      <h2 className="mb-5">Count : {count}</h2>
      <div className="flex gap-x-10 justify-center items-center">
        <button
          className="inline-block border-gray-200 border p-2"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="inline-block border-gray-200 border p-2"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
