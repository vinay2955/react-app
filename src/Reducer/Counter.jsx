import React, { useReducer } from "react";

export default function Counter() {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + action.payload };
      case "decrement":
        return { count: state.count - action.payload };
      default:
        return state;
    }
  };

  const [counter, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div>
      <p>Count {counter.count}</p>
      <p>
        <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
          Increment
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
          Decrement
        </button>
      </p>
    </div>
  );
}
