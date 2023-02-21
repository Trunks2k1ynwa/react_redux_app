import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";


const  initialState= {
    hits:[],
    loading:true,
    query:"",
};
const newsSlice = createSlice({
    name: 'news',
    initialState: {
        hits:[],
        loading:true,
        quert:"",
    },
    reducers: {
        extraReducers:(builder)=>{}
    },
})