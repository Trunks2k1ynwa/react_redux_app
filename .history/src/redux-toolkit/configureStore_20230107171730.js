import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice, { increment, incrementByValue } from "./counterSlice.js";
import globalSlice from "./globalSlice.js";

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});
// My custom middleware to logger custom state
const loggerMiddleware = (store)=>(next)=>(action)=>{
    console.log(action);
}
export const store = configureStore({
  reducer,
  middleware:(gDM) => gDM().concat(loggerMiddleware),
});
// const loggerMiddleware = function(store){
//     return function(next){
//         return function (action) {
            
//         }
//     }
// }
store.subscribe(() => {
  console.log("current state: " + store.getState().counter.count);
});
store.dispatch(incrementByValue(1));
store.dispatch(incrementByValue(3));
store.dispatch(incrementByValue(5));
export default store;