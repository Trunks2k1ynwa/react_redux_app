import { getNews } from "./news/newSlice.js";

export function* newsSaga() {
    yield takeLatest(getNews.type, fetchUser);
  }