import { INCREMENT } from "./Actions";
function increment() {
  return {
    type: INCREMENT,
    payload: 2,
  };
}
export default increment;
//actions creators
