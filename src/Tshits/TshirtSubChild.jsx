import React, { useState } from "react";

const TshirtSubChild = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const { title, image } = product;

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
      <h3 style={titleStyle}>{product.title}</h3>
      <img
        src={image}
        alt={title}
        style={{ maxWidth: "100%", maxHeight: "150px", marginBottom: "10px" }} // Adjust image size
      />
      <button onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <div style={{ marginTop: "10px" }}>
          <h4>Product Details:</h4>
          <p>{`Price:${product.price}`}</p>
          <p>{`Description:${product.description}`}</p>
          <p>{`Category:${product.category}`}</p>
          <p>{`Rating: ${product.rating.rate} Reviews:${product.rating.count} `}</p>
        </div>
      )}
    </div>
  );
};

export default TshirtSubChild;
