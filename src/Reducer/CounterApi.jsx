import React, { useReducer } from "react";
import axios from "axios";

export default function CounterApi() {
  const counterHandle = (state, action) => {
    switch (action.type) {
      case "increment":
        const count = state.count; //0
        const countAction = action.payload; // 1
        getPostDetail(state.count + action.payload); //0 +1
        return { count: state.count + action.payload };
      case "decrement":
        getPostDetail(state.count - action.payload);
        return { count: state.count - action.payload };
      case "getpost":
        return { ...state, post: action.payload };
      default:
        return state;
    }
  };
  const getPostDetail = (count) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${count}`)
      .then((response) => {
        dispatch({ type: "getpost", payload: response.data });
      });
  };
  const [counter, dispatch] = useReducer(counterHandle, { count: 0, post: {} });
  return (
    <div>
      <p>{counter.count}</p>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
      <p>{counter?.post?.title}</p>
    </div>
  );
}
