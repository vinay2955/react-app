import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_ERROR,
} from "./actions";
export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: { product },
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: productId,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: { product },
});
export const getProductSuccess = (data) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: data,
  };
};
export const getProductError = (data) => {
  return {
    type: GET_PRODUCT_ERROR,
    payload: data,
  };
};
