import { call, put, select } from "redux-saga/effects";
import { setLoading, setNews } from "./newSlice.js";
import requestGetNews from "./request.js";

// Generator function
export default function* handleGetNews({ payload, type }) {
  let query = "";
  try {
    const newsQuery = yield select((state) => state.news.query);
    newsQuery ? (query = payload) : (query = "react");
    yield put(setLoading(true));
    // query chính là tham số bên trong function requestGetNews
    const response = yield call(requestGetNews, query);
    const { hits } = response.data;
    yield put(setNews(hits));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}
