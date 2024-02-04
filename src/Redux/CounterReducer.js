const initalState = { count: 0, name: "vinay" };
function CounterReducer(state = initalState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 2,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 2,
      };
    default:
      return state;
  }
}
export default CounterReducer;
//component start with Uppercase
//function start with lowercase
