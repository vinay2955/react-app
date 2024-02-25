import { ADD_PRODUCTS } from "./actions";
function displayProducts(products) {
  return {
    type: ADD_PRODUCTS,
    payload: products,
  };
}
export default displayProducts;
