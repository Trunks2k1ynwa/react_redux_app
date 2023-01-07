import HackerNews from "./uis/HackerNews.js";

function App() {
  //Generator function
  useEffect(() => {
    function demoGenerator() {
      yield 1;
      yield 2;
      yield 3;
    }
    const gen = demoGenerator();
    console.log(gen)
  }, [])
  return (
    <div className="App">
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;
