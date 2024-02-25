const initalState = {
  products: [
    {
      productname: "mobile",
      productid: "1",
    },
    {
      productname: "car",
      productid: "2",
    },
  ],
};
function productReducer(state = initalState, action) {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
}
export default productReducer;
