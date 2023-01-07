import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "globals",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state, { payload }) => {
      return {
        ...state,
        darkMode: payload,
      };
    },
  },
});
export const {toggleDarkMode} = globalSlice.actions;
export default globalSlice.reducer;