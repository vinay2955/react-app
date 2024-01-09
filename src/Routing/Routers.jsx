import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./ContactUs";
import About from "./About";
import PageNotFound from "./PageNotFound";
import ErrorBoundary from "./ErrorBoundary";

export class Routers extends Component {
  render() {
    console.log("Routers");
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    );
  }
}
export default Routers;
