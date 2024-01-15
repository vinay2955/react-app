// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// export const Post = () => {
//   const params = useParams();
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
//       setPosts(response.data);
//     });
//   }, []);

//   return(
//     <>
//     {posts >0 &&
//     posts.map(post=>{
//         return(
//             <linl to={{pathname:}}>{post.title}</linl>
//         )
//     })}
//     </>
//   )
// };
