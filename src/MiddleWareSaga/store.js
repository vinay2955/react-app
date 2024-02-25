import { createStore, applyMiddleware } from "redux";
import { productReducer } from "./productReducer";
import productSaga from "./productSaga";
import createMiddleware from "redux-saga";
const sagaMiddleware = createMiddleware();
export const store = createStore(
  productReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(productSaga);
