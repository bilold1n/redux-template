import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, { payload }) => {
      state.push({ ...payload, count: 1 });
    },
  },
});
export const { addtocart } = CartSlice.actions;
export default CartSlice.reducer;
