import { takeLatest } from "redux-saga/effects";
import handleGetUser from "./handlers";
import { getNews } from "./newSlice";

export function* newsSaga() {
  // gọi api 10 lần thì chỉ lấy cái cuối cùng
    yield takeLatest(getNews.type, handleGetNews);
  // takeEvery : call sau mỗi lần action
  }