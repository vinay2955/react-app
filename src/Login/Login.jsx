import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  OnclickHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  ButtonClickHandler = (e) => {
    e.preventDefault();
    alert(`Username:${this.state.username} Passeord:${this.state.password}`);
  };
  render() {
    return (
      <form onSubmit={(e) => this.ButtonClickHandler(e)}>
        <p>
          <label htmlFor="userName">Username</label>
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={(e) => this.OnclickHandler(e)}
          ></input>
        </p>
        <p>
          <label htmlFor="Password">Password</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={(e) => this.OnclickHandler(e)}
          ></input>
        </p>
        <button>LOGIN</button>
      </form>
    );
  }
}
