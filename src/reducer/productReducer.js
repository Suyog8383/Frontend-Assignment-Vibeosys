/* eslint-disable default-case */
const initialState = {
  products: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      console.log("@SN action.payload", action);
      return { ...state, products: [...state.products, action.payload] };

    default:
      return state;
  }
};

export default productReducer;
