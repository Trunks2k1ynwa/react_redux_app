import { all, fork } from "redux-saga/effects.js";
import { newsSaga } from "./news/saga.js";

export default function* rootSaga() {
    yield all([fork(newsSaga)])
}
