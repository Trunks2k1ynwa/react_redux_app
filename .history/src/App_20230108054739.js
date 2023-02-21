import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNews } from "./sagas/news/newSlice.js";

function App() {
  //Generator function
  // useEffect(() => {
  //   function* demoGenerator() {
  //     yield 1;
  //     yield 2;
  //     yield 3;
  //   }
  //   const gen = demoGenerator();
  //   console.log(gen.next());
  //   console.log(gen.return(3));
  // }, [])
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews);
  }, [dispatch]);
  return (
    <div className="App">
    </div>
  );
}

export default App;