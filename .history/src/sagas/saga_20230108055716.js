import { takeLatest } from "redux-saga/effects.js";
import handleGetUser from "./news/handlers.js";
import { getNews } from "./news/newSlice.js";

export function* newsSaga() {
    yield takeLatest(getNews.type, handleGetUser);
  }