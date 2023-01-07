import {configureStore,combineReducers} from '@reduxjs/toolkit';
import counterSlice from './counterSlice.js';
import globalSlice from './globalSlice.js';

const reducer = combineReducers({
    counter:counterSlice,
    global:globalSlice,
})
export const store = configureStore({
    reducer
})