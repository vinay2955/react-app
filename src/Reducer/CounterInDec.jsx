import axios from "axios";
import React, { useReducer } from "react";

export default function CounterInDec() {
  const CounterHandle = (state, action) => {
    switch (action.type) {
      case "increment":
        getPostDetail(state.count + action.payload);
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
  const [counter, dispatch] = useReducer(CounterHandle, {
    count: 0,
    post: {},
  });
  const getPostsDetails = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      dispatch({ type: "getposts", payload: response.data });
    });
  };
  return (
    <div>
      <p>{counter.count}</p>
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
      {/* <button onClick={getPostsDetails}>Get Posts</button>
      {counter.posts && counter.posts.map((post) => <p>{post.title}</p>)} */}
      {counter?.post?.title}
    </div>
  );
}
