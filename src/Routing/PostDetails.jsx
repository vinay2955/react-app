import { useState, useEffect } from "react";
import axios from "axios";
import {
  useParams,
  useSearchParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

import React from "react";

export default function PostDetails(props) {
  const params = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const [searchparams, setSearchParams] = useSearchParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((response) => {
        setPost(response.data);
      });
  }, []);
  return (
    <>
      {post && (
        <div>
          PostDetails:
          <p>post:{post.title}</p>
          <p>Body:{post.body}</p>
          <button onClick={() => navigate("/post")}>back</button>
        </div>
      )}
    </>
  );
}
