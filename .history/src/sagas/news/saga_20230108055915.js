import { takeLatest } from "redux-saga/effects";
import handleGetUser from "./handlers";
import { getNews } from "./newSlice";

export function* newsSaga() {
    yield takeLatest(getNews.type, handleGetUser);
  }