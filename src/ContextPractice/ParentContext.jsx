import UserContext from "./UserContext";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

import A from "./A";
import B from "./B";
import C from "./C";

export default function ParentContext() {
  //const user = { name: "vinay" };
  // const [posts, setPosts] = useState();
  // const [count, setCount] = useState(0);
  const [appState, setAppState] = useState({
    count: 0,
    posts: [],
  });

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
      const currentappState = { ...appState };
      currentappState.posts = response.data;
      setAppState(currentappState);
    });
  }, []);
  //const context = { posts: posts };
  return (
    <UserContext.Provider
      value={{
        setAppState,
        appState,
      }}
    >
      <A />
    </UserContext.Provider>
  );
}
