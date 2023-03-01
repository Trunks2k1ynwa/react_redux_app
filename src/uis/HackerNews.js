import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getNews, otherAction, setQuery } from "../sagas/news/newSlice.js";
import { debounce } from "lodash";
import { setLoading, setLoading2 } from "../redux-thunk/newsSlice.js";
import { handleFetchNews } from "../redux-thunk/handlers.js";

const HackerNews = () => {
  const { hits, loading, query } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleFetchNews("css"));
    // dispatch({ type: "news/handleFetchNews/", payload: query });
  }, [dispatch, query]);

  useEffect(() => {
    // dispatch(getNews(query));
  }, [dispatch, query]);

  const handleChangeQuery = debounce((e) => {
    // dispatch(setQuery(e.target.value));
  }, 250);

  const handleSetLoading = () => {
    // dispatch(otherAction({ payload: true }));
    dispatch(setLoading2(true));
  };
  return (
    <div className="w-2/4 p-5 mx-auto mt-5 bg-white rounded-lg shadow-md">
      <div className="flex mb-5 gap-x-5 ">
        <input
          type="text"
          className="block w-full p-2 font-bold border border-gray-200 rounded-md focus:border-blue-400"
          placeholder="Typing your keyword..."
          defaultValue={query}
          onChange={handleChangeQuery}
        />
        <button className="p-5 text-white bg-blue-500 rounded-md font-semibold-600" onClick={handleSetLoading}>
          Fetching...
        </button>
      </div>
      {loading && <div className="w-8 h-8 mx-auto my-10 border-4 border-r-4 border-blue-500 rounded-full border-r-transparent animate-spin"></div>}
      {!loading && (
        <div className="flex flex-wrap gap-5">
          {!loading &&
            hits.length > 0 &&
            hits.map((item, index) => {
              if (!item.title || item.title.length <= 0) return null;
              return (
                <h3 className="p-3 bg-gray-100 rounded-sm" key={index}>
                  {item.title}
                </h3>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default HackerNews;
