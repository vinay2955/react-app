import { useContext } from "react";
import UserContext from "./UserContext";
import React from "react";

export default function C(props) {
  //const username = useContext(UserContext);

  const { count, setCount, posts } = useContext(UserContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h4>{count}</h4>
      {posts && posts.map((post) => <h4>{post.title}</h4>)}
    </div>
  );
}
