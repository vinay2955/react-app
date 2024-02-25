// ProductDetailsComp.js

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  updateProduct,
  getProducts,
} from "./productDetailsAC";

function ProductDetailsComp() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products);

  const [newProduct, setNewProduct] = useState({
    id: "",
    category: "",
    description: "",
  });

  const [updateProductData, setUpdateProductData] = useState({
    id: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleAddProduct = () => {
    dispatch(addProduct(newProduct));
    setNewProduct({ id: "", category: "", description: "" });
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const handleUpdateProduct = () => {
    dispatch(updateProduct(updateProductData));
    setUpdateProductData({
      id: "",
      category: "",
      description: "",
    });
  };

  return (
    <div>
      {/* <h1>Product Details</h1> */}
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <p>{product.id}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <button onClick={() => handleDeleteProduct(product.id)}>
              Delete Product
            </button>
          </div>
        ))}
      <div>
        <h2>Add Product</h2>
        <input
          type="text"
          placeholder="ID"
          value={newProduct.id}
          onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <div>
        <h2>Update Product</h2>
        <input
          type="text"
          placeholder="ID"
          value={updateProductData.id}
          onChange={(e) =>
            setUpdateProductData({ ...updateProductData, id: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Category"
          value={updateProductData.category}
          onChange={(e) =>
            setUpdateProductData({
              ...updateProductData,
              category: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={updateProductData.description}
          onChange={(e) =>
            setUpdateProductData({
              ...updateProductData,
              description: e.target.value,
            })
          }
        />
        <button onClick={handleUpdateProduct}>Update Product</button>
      </div>
    </div>
  );
}

export default ProductDetailsComp;
