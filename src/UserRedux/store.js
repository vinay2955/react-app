import { createStore, compose, applyMiddleware } from "redux";

import rootReducer from "./rootReducer";

import logger from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);
export default store;
