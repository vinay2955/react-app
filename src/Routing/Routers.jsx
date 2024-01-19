import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./ContactUs";
import About from "./About";
import PageNotFound from "./PageNotFound";
//import Post from "./Post";
import PostDetails from "./PostDetails";
//import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Users from "./Users";
import InternalUser from "./InternalUser";
import ExternalUser from "./ExternalUser";
//import ErrorBoundary from "./ErrorBoundary";
const Post = React.lazy(() => import("./Post"));
const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));

export default function Routers(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contactus" element={<ContactUs />}></Route>
      <Route
        path="posts"
        element={
          <React.Suspense fallback={<di>loading....</di>}>
            <ProtectedRoute
              element={
                <React.Suspense fallback={<di>loading....</di>}>
                  <Post />
                </React.Suspense>
              }
              isLoggedin={props.isLoggedin}
            />
          </React.Suspense>
        }
      ></Route>
      <Route path="posts/:postId" element={<PostDetails />}></Route>
      <Route
        path="login"
        element={
          props.isLoggedin ? (
            <Navigate to="/posts" />
          ) : (
            <Login setIsLoggedin={props.setIsLoggedin} />
          )
        }
      ></Route>
      <Route path="users" element={<Users />}>
        <Route path="internal" element={<InternalUser />}></Route>
        <Route path="external" element={<ExternalUser />}></Route>
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}
