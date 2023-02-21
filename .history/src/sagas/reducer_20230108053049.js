import { combineReducers } from "@reduxjs/toolkit";
import {newsSlice} from './newSlice'
const reducer = combineReducers({
    news:newsSlice,

})