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
export default App;
