import { call, put } from "redux-saga/effects";
import { setNews } from "./newSlice.js";
import requestGetNews from "./request.js";

export default function* handleGetUser(action) {
    try {
        const response = yield call(requestGetNews)
        const {hits}=response.data;
        yield put(setNews(hits));
    } catch (error) {
        console.log(error);
    }
}
