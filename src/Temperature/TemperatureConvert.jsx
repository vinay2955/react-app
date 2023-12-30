import React, { Component } from "react";

export default class TemperatureConvert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: "",
      fartemp: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onclickHandler = (e) => {
    e.preventDefault();
    //const { celsius } = this.state;
    // const fartemp = (celsius * 9) / 5 + 32;
    this.setState({
      fartemp: (this.state.celsius * 9) / 5 + 32,
    });
  };

  render() {
    return (
      <div>
        <p>
          <h1>Convert Temperature Celsius to Fahrenheit</h1>
          <label htmlFor="temperature">Enter Temperature in Celsius </label>
          <input
            name="celsius"
            type="text"
            value={this.state.celsius}
            onChange={this.handleInputChange}
          />
        </p>
        <p>
          <button onClick={this.onclickHandler}>Submit</button>
        </p>
        {this.state.fartemp && (
          <p>
            <strong>Converted Temperature:</strong> {this.state.fartemp} °F
          </p>
        )}
      </div>
    );
  }
}
