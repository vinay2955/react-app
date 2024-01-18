import { useState, useEffect } from "react";
import { Outlet, useParams, useSearchParams, Link } from "react-router-dom";
import axios from "axios";

import React from "react";

export default function Post() {
  const params = useParams();
  const [posts, setPosts] = useState([]);
  const [currposts, setCurrPosts] = useState();
  const [searchparams, setSearchParams] = useSearchParams();
  const search = searchparams.get("filter");
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
      setCurrPosts(response.data);
    });
  }, []);
  useEffect(() => {
    if (search === "Ideven") {
      const cpyPosts = [...currposts];
      const result = cpyPosts.filter((post) => {
        return post.id % 2 == 0;
      });
      setPosts(result);
    }
    if (search === "IdOdd") {
      const cpyPosts = [...currposts];
      const result = cpyPosts.filter((post) => {
        return post.id % 2 !== 0;
      });
      setPosts(result);
    }
  }, [search]);
  return (
    <div style={{ padding: "1rem" }}>
      <button
        onClick={() => {
          setSearchParams({ filter: "Ideven" });
        }}
      >
        IdEvene Click
      </button>
      <button
        onClick={() => {
          setSearchParams({ filter: "IdOdd" });
        }}
      >
        IdOdd Click
      </button>
      Posts
      {posts?.length > 0 &&
        posts.map((post) => {
          return (
            <Link
              style={{
                display: "block",
                textDecoration: "none",
                padding: "10px",
              }}
              to={`/posts/${post.id}`}
            >
              {post.title}
            </Link>
          );
        })}
      <Outlet />
    </div>
  );
}
