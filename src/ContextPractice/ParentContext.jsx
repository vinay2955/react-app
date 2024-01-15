import UserContext from "./UserContext";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

import A from "./A";
import B from "./B";
import C from "./C";

export default function ParentContext() {
  //const user = { name: "vinay" };
  const [posts, setPosts] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data));
  }, []);
  return (
    <UserContext.Provider value={{ count, setCount, posts }}>
      <A />
    </UserContext.Provider>
  );
}
