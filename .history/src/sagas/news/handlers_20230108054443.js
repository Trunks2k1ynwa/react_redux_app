import { call } from "redux-saga/effects";
import requestGetNews from "./request.js";

export default function* handleGetUser(action) {
    try {
        const response = yield call(requestGetNews)
    } catch (error) {
        console.log(error);
    }
}
