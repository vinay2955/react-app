import userReducer from "./userReducer";
import productReducer from "./productReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  userReducer: userReducer,
  productReducer: productReducer,
});
export default rootReducer;
