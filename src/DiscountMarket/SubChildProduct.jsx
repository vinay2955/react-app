import React, { Component } from "react";

export default class SubChildProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }
  //google explination
  // toggleDetails = () => {
  //     this.setState((prevState) => ({ showDetails: !prevState.showDetails }));
  // };

  toggleDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    const { title, image } = this.props.product;
    const { showDetails } = this.state;

    const cardStyle = {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px",
      margin: "10px",
      maxWidth: "300px",
      textAlign: "center",
    };

    const titleStyle = {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
    };

    return (
      <div style={cardStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <img
          src={image}
          alt={title}
          style={{ maxWidth: "100%", maxHeight: "150px", marginBottom: "10px" }} // Adjust image size
        />
        <button onClick={this.toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
        {showDetails && (
          <div style={{ marginTop: "10px" }}>
            <h4>Product Details:</h4>
            <p>{`Price:${this.props.product.price}`}</p>
            <p>{`Description:${this.props.product.description}`}</p>
            <p>{`Category:${this.props.product.category}`}</p>
            <p>{`Rating: ${this.props.product.rating.rate} Reviews:${this.props.product.rating.count} `}</p>
          </div>
        )}
      </div>
    );
  }
}
