import { createAction, createSlice } from "@reduxjs/toolkit";

const otherAction = createAction();
const newsSlice = createSlice({
    name: 'news',
    initialState: {
        hits:[],
        loading:true,
        quert:"",
    },
    reducers: {
        setQuery:(state,action)=>({
            ...state,
            query: action.payload,
        }),
        setNews:(state,action)=>({
            ...state,
            hits:action.payload,
        }),
        getNews(){},
        setLoading:(state,action)=>({
            ...state,
            loading:action.payload
        })

    },
    extraReducers : (builder) =>{
        builder:addCase(otherAction),
    }
})
export const {setNews,getNews,setLoading,setQuery} = newsSlice.actions;
export default newsSlice.reducer;