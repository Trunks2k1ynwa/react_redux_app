import {configureStore,combineReducers} from '@reduxjs/toolkit';

const reducer = combineReducers({
    counter:counterSlice,
})
export const store = configureStore({
    
})