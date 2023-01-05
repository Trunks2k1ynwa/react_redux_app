import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, increment_10 } from "../redux/counter.js";

const Counter = () => {
  // useSelector = createStore; state = reducer
  const count = useSelector(state=>state.counter.count);
  console.log(count)
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrement_10 = () => {
    dispatch(increment_10(10));
  };
  return (
    <div className="Counter shadow p-5 mx-auto mt-10">
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
        <button
          className="inline-block border-gray-200 border p-2"
          onClick={handleIncrement_10}
        >
          Increase by 10
        </button>
      </div>
    </div>
  );
};

export default Counter;