import React, { Component, PureComponent } from "react";

export default class PurComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state.name = "vinay";
    //   users: [
    //     { id: 1, name: "vinay" },
    //     { id: 2, name: "khaja" },
    //   ],
    // };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        // users: [
        //   { id: 1, name: "vinay" },
        //   { id: 2, name: "khaja" },
        // ],
      });
    }, 5000);
  }
  render() {
    return (
      <>
        <h2>PureComponent</h2>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
