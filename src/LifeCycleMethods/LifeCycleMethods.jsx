import React, { Component } from "react";
import axios from "axios";
export default class LifeCycleMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: [],
      searchId: "",
      userFound: null,
    };
  }

  componentDidMount() {
    this.fecthData();
  }
  fecthData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        this.setState({ userDetails: response.data });
      })
      .catch((error) => {
        console.error("error fetching user data:", error);
      });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchId !== this.state.searchId) {
      this.handleSearch();
    }
  }

  Onchangehandler = (e) => {
    this.setState({ searchId: e.target.value });
  };
  handleSearch = () => {
    const { searchId, userDetails } = this.state;
    const userFound = userDetails.find(
      (user) => user.id === parseInt(searchId, 10)
    );
    this.setState({ userFound });
  };
  render() {
    const { searchId, userFound } = this.state;
    return (
      <>
        <label>Enter User ID:</label>
        <input
          type="text"
          onChange={this.Onchangehandler}
          value={searchId}
        ></input>
        <button onclick={this.handleSearch}>Search</button>
        {userFound ? (
          <div>
            <p>UserDetails</p>
            <p>ID:{userFound.id}</p>
            <p>Name:{userFound.name}</p>
            <p>Email:{userFound.email}</p>
          </div>
        ) : (
          <p>User Not Found</p>
        )}
      </>
    );
  }
}