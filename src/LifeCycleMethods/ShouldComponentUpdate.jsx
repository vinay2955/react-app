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
          { id: 1, name: "vinay" },
          { id: 2, name: "khaja" },
        ],
      });
    }, 5000);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.users !== this.nextProps.users;
  }
  render() {
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
