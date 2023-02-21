import { call, put, select } from "redux-saga/effects";
import { setNews } from "./newSlice.js";
import requestGetNews from "./request.js";

// Generator function
export default function* handleGetNews({payload,type}) {
    let query = "react";
    try {
        const newsQuery = yield select(state=>state.news.query)
        if(newsQuery) {query = newsQuery}
        console.log("🚀 ~ query", query)
        const response = yield call(requestGetNews,payload)
        const {hits}=response.data;
        yield put(setNews(hits));
    } catch (error) {
        console.log(error);
    }
}
