import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const ProductsSlise = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.push(...payload);
    },
  },
});
export const { add } = ProductsSlise.actions;
export default ProductsSlise.reducer;
