import React, { Component } from "react";
import SubChildProduct from "./SubChildProduct";

export default class ChildProduct extends Component {
  render() {
    const { data, showDetails, selectedProduct } = this.props;
    const containerStyle = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
    };
    return (
      <table>
        <tbody>
          <div style={containerStyle}>
            {data.map((productInfo) => (
              <SubChildProduct
                product={productInfo}
                showDetails={showDetails}
                selectedProduct={selectedProduct}
              />
            ))}
          </div>
        </tbody>
      </table>
    );
  }
}
