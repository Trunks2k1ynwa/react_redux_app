import { useDispatch } from "react-redux";

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
  const dispath = useDispatch();
  return (
    <div className="App">
    </div>
  );
}

export default App;
