import { createAction, createSlice } from "@reduxjs/toolkit";

export const otherAction = createAction("upLoadLoading");
const newsSlice = createSlice({
  name: "news",
  initialState: {
    hits: [],
    loading: false,
    query: "",
    errorMessage: false,
  },
  reducers: {
    setQuery: (state, action) => ({
      ...state,
      query: action.payload,
    }),
    setNews: (state, action) => ({
      ...state,
      hits: action.payload,
    }),
    getNews() {},
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setErrorMessage: (state, action) => ({
      ...state,
      errorMessage: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(otherAction, (state, action) => {
      state.loading = action.payload;
    });
  },
});
export const { setNews, getNews, setLoading, setQuery, setErrorMessage } = newsSlice.actions;
export default newsSlice.reducer;
