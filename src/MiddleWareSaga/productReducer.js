import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_ERROR,
} from "./actions";
const initalState = {
  products: [],
  isErrorOccured: false,
};
export const productReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.product],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.product.id
            ? action.payload.product
            : product
        ),
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCT_ERROR:
      return {
        products: [],
        isErrorOccured: true,
      };
    default:
      return state;
  }
};
