import { combineReducers } from "@reduxjs/toolkit";
import {newsSlice} from './news/newSlice.js'
export const reducer = combineReducers({
    news:newsSlice,

})