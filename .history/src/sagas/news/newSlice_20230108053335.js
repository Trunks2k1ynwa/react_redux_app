import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        hits:[],
        loading:true,
    },
    reducers: {
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
})
export const {setNews,getNews,setLoading} = newsSlice.actions;
export default newsSlice.reducer;