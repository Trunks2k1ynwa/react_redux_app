import { combineReducers } from "@reduxjs/toolkit";
import {newsSlice} from './newSlice'
export const reducer = combineReducers({
    news:newsSlice,

})