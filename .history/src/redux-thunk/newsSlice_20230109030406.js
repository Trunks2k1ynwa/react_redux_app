import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { latest } from "immer/dist/internal.js";
import requestGetNews from "../sagas/news/request.js";

export const handleFetchNews = createAsyncThunk(
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
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleFetchNews.fulfilled, (state, action) => {
        state.hits = action.payload;
        state.loading = false;
      })
      .addCase(handleFetchNews.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(handleFetchNews.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default newsSlice.reducer;