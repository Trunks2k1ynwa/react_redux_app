import { takeLatest } from "redux-saga/effects";
import handleGetNews from "./handlers";
import { getNews } from "./newSlice";

// Generator function
export function* newsSaga() {
  // gọi api 10 lần thì chỉ lấy cái cuối cùng, lấy giá trị distpatch cuối cùng
    yield takeLatest(getNews.type, handleGetNews);
  // takeEvery : call sau mỗi lần action
  }