import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ProductsSlice from "./ProductsSlice";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    products: ProductsSlice,
    cart: cartSlice,
  },
});
export default store;
