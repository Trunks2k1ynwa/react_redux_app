import { call, put } from "redux-saga/effects";
import { setNews } from "./newSlice.js";
import requestGetNews from "./request.js";

// Generator function
export default function* handleGetNews({payload,type}) {
    try {
        const response = yield call(requestGetNews,payload)
        const {hits}=response.data;
        yield put(setNews(hits));
    } catch (error) {
        console.log(error);
    }
}
