import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./redux-toolkit/globalSlice.js";
import Card from "./uis/Card.js";

function App() {
  const globalOption = useSelector(state=>state.count);
  console.log(globalOption)
  const dispatch = useDispatch();
  const handleToggleUi = ()=>{
    dispatch(toggleDarkMode(!globalOption.darkMode));
  }
  return (
    <div className="App">
      <Card></Card>
      <button onClick={handleToggleUi}>Toggle dark mode</button>
    </div>
  );
}

export default App;
