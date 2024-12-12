import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducer/productReducer";

const store = configureStore({
  reducer: {
    productList: productReducer,
  },
});

export default store;
