import { useDispatch, useSelector } from "react-redux";
import Card from "./uis/Card.js";

function App() {
  const globalOption = useSelector(state=>state.global);
  const dispatch = useDispatch();
  const handleToggleUi = ()=>{
    dispatch();
  }
  return (
    <div className="App">
      <Card></Card>
      <button onClick={handleToggleUi}>Toggle dark mode</button>
    </div>
  );
}

export default App;
