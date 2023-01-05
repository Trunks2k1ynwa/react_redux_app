import {configureStore,combineReducers} from '@reduxjs/toolkit';
import counterSlice from './counterSlice.js';

const reducer = combineReducers({
    counter:counterSlice,
})
export const store = configureStore({
    reducer
})