import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";


const sagaMiddlware = createSagaMiddleware();
const store = configureStore({
    reducer:reducer,
    middleware:(gDM) => gDM().concat(logger,sagaMiddlware),

})
export default store;