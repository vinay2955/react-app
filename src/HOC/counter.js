import React, { Component } from "react";
const counter = (Comp) => {
  return class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
    increment = () => {
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      return (<Comp count={this.state.count} increment={this.increment}></Comp>)
    }
  };
};

export default counter;
