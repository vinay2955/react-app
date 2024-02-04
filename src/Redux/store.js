import { createStore, compose, applyMiddleware } from "redux";
import CounterReducer from "./CounterReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(CounterReducer, composeEnhancers(applyMiddleware()));
export default store;
