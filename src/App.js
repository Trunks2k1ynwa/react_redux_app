import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import Counter from "./other/Counter.js";
import User from "./other/User.js";
import store from "./redux-toolkit/configureStore.js";
import { getNews } from "./sagas/news/newSlice.js";
import HackerNews from "./uis/HackerNews.js";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getNews());
  // }, [dispatch]);
  // const hits = useSelector((state) => state.news.hits);
  // console.log(hits);
  return (
    <div className="App">
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;
