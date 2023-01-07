import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
// import lodash from 'lodash'
// https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState([]);
  console.log(query,hits)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const handleFetchData = useRef();

  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=react`
  );

  const isMounted = useRef(true);
  useEffect(() => {
    return () => {
      isMounted.current = true;
      console.log("unmounted");
    };
  });
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setTimeout(() => {
        if (isMounted.current) {
          setHits(response.data?.hits);
          setLoading(false);
        }
      }, 1000);
    } catch (error) {
      setLoading(false);
      setError(`This Error has an eception: ${error}`);
    }
  };

  useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return (
    <div className="w-2/4 p-5 mx-auto mt-5 bg-white rounded-lg shadow-md">
      <div className="flex mb-5 gap-x-5 ">
        <input
          type="text"
          className="block w-full p-2 font-bold border border-gray-200 rounded-md focus:border-blue-400"
          placeholder="Typing your keyword..."
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="p-5 text-white bg-blue-500 rounded-md font-semibold-600"
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
        >
          Fetching...
        </button>
      </div>
      {loading && (
        <div className="w-8 h-8 mx-auto my-10 border-4 border-r-4 border-blue-500 rounded-full border-r-transparent animate-spin"></div>
      )}
      {!loading && error && <p>{error}</p>}
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
    </div>
  );
};

export default HackerNews;
