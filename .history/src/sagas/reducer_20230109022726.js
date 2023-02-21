import { combineReducers } from "@reduxjs/toolkit";
import newsSlice from "../redux-thunk/newsSlice.js";
export const reducer = combineReducers({
    news:newsSlice,
})