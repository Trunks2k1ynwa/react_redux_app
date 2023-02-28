import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    value :{
      name:"Trung",
      age:10
    },
    count2:22
  },
  reducers: {
    increment: (state) => ({ ...state, count: state.count + 1 }),
    decrement: (state) => ({ ...state, count: state.count - 1 }),
    incrementByValue: (state,action) =>{
      // console.log("Payload : ",action.payload)
      return {
        ...state,
        count: state.count+action.payload,

      }
    },
    changeUser:(state,action)=>{
      return (
        {...state,value:action.payload,count:state.value.age}
        )
    }
  },
});
export const { increment, changeUser,decrement,incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
