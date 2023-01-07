import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterSlice, { increment, incrementByValue } from "./counterSlice.js";
import createSagaMiddleware from 'redux-saga'
import globalSlice from "./globalSlice.js";
const sagaMiddleware = createSagaMiddleware()
const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});
// My custom middleware to logger custom state
const loggerMiddleware = (store)=>(next)=>(action)=>{
    // console.log(action);
    next(action);
}
export const store = configureStore({
  reducer,
  middleware:(gDM) => gDM().concat(logger,sagaMiddleware),
});
// const loggerMiddleware = function(store){
//     return function(next){
//         return function (action) {
            
//         }
//     }
// }
store.subscribe(() => {
  // console.log("current state: " + store.getState().counter.count);
});
// store.dispatch(incrementByValue(1));
export default store;