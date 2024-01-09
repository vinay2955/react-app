import React, { Component } from "react";

export class Home extends Component {
  componentWillUnmount() {
    console.log("home componentWillUnmount ");
  }

  render() {
    console.log("Home render");
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }
}
export default Home;
