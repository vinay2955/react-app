import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { isError: false };
  }
  componentDidCatch(error, errorinfo) {
    console.log("componentditcatch", error);
    if (error) {
      this.setState({ isError: true });
    }
  }
  render() {
    return (
      <div>
        {this.state.isError && <h2>Erroe Page</h2>}
        {!this.state.isError && this.props.childern}
      </div>
    );
  }
}
export default ErrorBoundary;
