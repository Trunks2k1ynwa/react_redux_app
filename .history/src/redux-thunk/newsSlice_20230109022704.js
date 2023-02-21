import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { latest } from "immer/dist/internal.js";
import requestGetNews from "../sagas/news/request.js";

const handleFetchNews = createAsyncThunk(
  "news/handleFetchNews",
  async (query, thunkAPi) => {
    const response = await requestGetNews(query);
    return response.data.hits;
  }
);
const initialState = {
  hits: [],
  loading: true,
  query: "",
};
const newsSlice = createSlice({
  name: "news",
  initialState: {
    hits: [],
    loading: true,
    quert: "",
  },
  reducers: {
    extraReducers: (builder) => {
      builder.addCase(handleFetchNews.fulfilled, (state, action) => {
        state.hits = action.payload;
        state.loading = false;
      });
      builder.addCase(handleFetchNews.pending, (state, action) => {
        state.loading= true;
        state.hits = "";
      });
      builder.addCase(handleFetchNews.rejected, (state, action) => {
        state.loading= false;
      });
    },
  },
});

export default newsSlice;