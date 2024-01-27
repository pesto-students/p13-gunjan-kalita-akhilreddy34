import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart";
import productReducer from "./slices/products";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
