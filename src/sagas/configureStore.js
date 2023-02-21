// import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import { getNews } from "./news/newSlice.js";
import { reducer } from "./reducer.js";
// import rootSaga from "./rootSaga.js";


// const sagaMiddlware = createSagaMiddleware();
const store = configureStore({
    reducer:reducer,
    middleware:(gDM) => gDM().concat(logger),
    // middleware:(gDM) => gDM().concat(sagaMiddlware),

})
// sagaMiddlware.run(rootSaga);
export default store;