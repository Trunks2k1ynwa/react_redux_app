import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../redux-toolkit/counterSlice.js";
import { toggleDarkMode } from "../redux-toolkit/globalSlice.js";

const Counter = () => {
  // useSelector = createStore; state = reducer
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    // = counterReducer(increment())
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementbyValue = () => {
    dispatch(incrementByValue(10));
  };
  return (
    <div className="p-5 mx-auto mt-10 shadow Counter">
      <h2 className="mb-5">Count : {count}</h2>
      <div className="flex items-center justify-center gap-x-10">
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleIncrementbyValue}
        >
          Increase by 10
        </button>
        <SwitchDarkMode></SwitchDarkMode>
      </div>
    </div>
  );
};
function SwitchDarkMode() {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useDarkMode();
  useEffect(() => {
    dispatch(toggleDarkMode(!darkMode));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleToggleUi = () => {
    dispatch(toggleDarkMode(!darkMode));
    setDarkMode(!darkMode);
  };
  return <button onClick={handleToggleUi}>Toggle dark mode</button>;
}
export default Counter;
