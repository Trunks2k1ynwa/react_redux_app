import { all, fork } from "redux-saga/effects";
import { newsSaga } from "./news/saga";

export default function* rootSaga() {
    yield all([fork(newsSaga)])
}
// blocking and non-blocking
// blocking : call,put : khi mà code chạy , nếu fn đó là blocking thì phải chờ fn đó chạy xong mới chạy xuống dưới
// non-blocking : fork : không quan tâm fn chạy xong hay chưa, chạy xuống dưới luôn
// all , fork