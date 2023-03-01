import { createAsyncThunk } from "@reduxjs/toolkit";
import requestGetNews from "./request.js";

//Trả về 1 promise
export const handleFetchNews = createAsyncThunk("news/handleFetchNews", async (query, thunkAPi) => {
  console.log("🚀 ~ thunkAPi:", thunkAPi);
  const response = await requestGetNews(query);
  return response.data.hits;
});
