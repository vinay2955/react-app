import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "sai",
      step: 1,
    };
  }
  render() {
    return (
      <div>
        <h1>appcomponent{this.props.name}</h1>
        <ChildComponent step={this.state.step} name={this.state.name} />
        <ChildComponent step={3} />
      </div>
    );
  }
}
