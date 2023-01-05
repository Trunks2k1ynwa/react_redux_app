import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/counter.js";

const Counter = () => {
  const count = useSelector(state=>state.counter.count);
  const dispatch = useDispatch();
  // console.log("top state");
  // console.log("below state");
  const handleIncrement = () => {
    dispatch(increment());
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
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
