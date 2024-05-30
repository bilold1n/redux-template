import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};
export const ProductsSlise = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.product.push(...payload);
    },
  },
});
export const { add } = ProductsSlise.actions;
export default ProductsSlise.reducer;
