import { combineReducers } from "@reduxjs/toolkit";
// import newSlice from "./news/newSlice.js";
import newsSlice from "../redux-thunk/newsSlice";
export const reducer = combineReducers({
  news: newsSlice,
});
