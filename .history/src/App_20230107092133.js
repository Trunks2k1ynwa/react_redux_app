import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter.js";
import useDarkMode from "./components/hook/useDarkMode.js";
import { toggleDarkMode } from "./redux-toolkit/globalSlice.js";
import Card from "./uis/Card.js";

function App() {
  const globalOption = useSelector((state) => state.global);

  return (
    <div className="App">
      <Card></Card>
      <Counter></Counter>
    </div>
  );
}

export default App;
