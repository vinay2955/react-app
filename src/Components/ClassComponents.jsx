import React from "react";

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fname: "vinay", lname: "patnala", num1: 10, num2: 30 };
  }
  changeName = () => {
    this.setState({ fname: "sai" });
  };
  render() {
    return (
      <div>
        <h1>My firstname is {this.state.fname}</h1>
        and my last name is {this.state.lname}
        <h1>{this.state.num1 + this.state.num2}</h1>
        <button type="button" onClick={this.changeName}>
          Click
        </button>
      </div>
    );
  }
}
export default Practice;
