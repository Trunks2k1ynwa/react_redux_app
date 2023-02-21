import handleGetUser from "./handlers.js";
import { getNews } from "./newSlice.js";

export function* newsSaga() {
    yield takeLatest(getNews.type, handleGetUser);
  }