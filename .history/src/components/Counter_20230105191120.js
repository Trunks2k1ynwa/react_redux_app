import { useDispatch } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux-toolkit/counterSlice.js";

const Counter = ({count}) => {
  // useSelector = createStore; state = reducer
  // const count = useSelector(state=>state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    // = counterReducer(increment())
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementbyValue = () => {
    dispatch(incrementByValue({10})
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
          onClick={handleIncrementbyValue}
        >
          Increase by 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
