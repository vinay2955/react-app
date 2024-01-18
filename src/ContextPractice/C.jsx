import { useContext } from "react";
import UserContext from "./UserContext";
import React from "react";

export default function C(props) {
  //const username = useContext(UserContext);

  const { appState, setAppState } = useContext(UserContext);
  const clickHandler = () => {
    const currentAppState = { ...appState };
    currentAppState.count += 1;
    setAppState(currentAppState);
  };
  const displayPosts = () => {
    const posts = [];
    if (appState.count > 0) {
      for (let i = 0; i <= appState.count; i++) {
        posts.push(
          <div>
            <h1>{appState?.posts[i]?.title}</h1>
            <h1>{appState.posts[i].body}</h1>
          </div>
        );
      }
    } else {
      posts.push(
        <div>
          <h1>{appState?.posts[0]?.title}</h1>
          <h1>{appState.posts[0]?.body}</h1>
        </div>
      );
    }

    return posts;
  };
  return (
    <div>
      <button onClick={clickHandler}>Increment</button>
      <h4>{appState.count}</h4>
      {/* <h1>{appState?.posts[appState.count]?.title}</h1>
      <h1>{appState?.posts[appState.count]?.body}</h1> */}
      {displayPosts()}

      {/* {appState.posts && appState.posts.map((post) => <h4>{post.title}</h4>)} */}
    </div>
  );
}
