import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterSlice, { incrementByValue } from "./counterSlice.js";
import createSagaMiddleware from 'redux-saga'
import globalSlice from "./globalSlice.js";

const sagaMiddleware = createSagaMiddleware()

// My custom middleware to logger custom state
const loggerMiddleware = (store)=>(next)=>(action)=>{
    // console.log(action);
    // Có thể can thiệp vào action và sửa nó
    // action.payload  = 2;
    // delete action.payload;
    // Chạy đến action tiếp theo
    next(action);
}


// Gom các slice lại thành reducer
const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});


const store = configureStore({
  reducer,
  middleware:(gDM) => gDM().concat(sagaMiddleware),
});

// const loggerMiddleware = function(store){
  //     return function(next){
    //         return function (action) {
      
      //         }
      //     }
      // }


      // Lắng nghe khi distpatch action
store.subscribe(() => {
  // console.log("current state: " + store.getState().counter.count);
});
store.dispatch(incrementByValue(1));
store.dispatch(incrementByValue(3));
store.dispatch(incrementByValue(5));
export default store;


// Store
// {
//   @@observable:()=>{} 
//   dispatch:fn : Truyền vào action để tự dispatch
//   getState:f a() : lấy ra initialState
//   liftedStore:{dispatch,subcribe,getState} : Chứa những fn ở trên
//   replaceReducer: fn : Thay thế reducer ban đầu
//   subcribe: 
//}