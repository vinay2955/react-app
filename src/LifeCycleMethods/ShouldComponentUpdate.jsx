import React, { Component } from "react";

export default class ShouldComponentUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "vinay" },
        { id: 2, name: "khaja" },
      ],
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        users: [
          { id: 1, name: "sai" },
          { id: 2, name: "khaja" },
        ],
      });
    }, 5000);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("123", this.state.users);

    return this.state.users[0].name !== nextState.users[0].name;
  }
  render() {
    console.log("from render function", this.state.users);
    //const { users } = this.state;
    return (
      <>
        <h1>shouldComponentUpdate</h1>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
