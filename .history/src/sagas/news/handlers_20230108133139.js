import { call, put, select } from "redux-saga/effects";
import { setNews } from "./newSlice.js";
import requestGetNews from "./request.js";

// Generator function
export default function* handleGetNews({payload,type}) {
    let query = "";
    try {
        const newsQuery = yield select(state=>state.news.query)
        newsQuery?query = payload:query="react";
        console.log("🚀 ~ query", query)
        const response = yield call(requestGetNews,query)
        const {hits}=response.data;
        yield put(setNews(hits));
    } catch (error) {
        console.log(error);
    }
}
