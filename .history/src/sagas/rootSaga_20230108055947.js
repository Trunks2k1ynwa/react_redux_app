import { all, fork } from "redux-saga/effects.js";

export default function* rootSaga() {
    yield all([fork(newsSaga)])
}
