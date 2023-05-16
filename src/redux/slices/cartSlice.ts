import { createSlice } from "@reduxjs/toolkit";

export interface Cart {
  quantity: number;
}

const initialState: Cart = {
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setQuantityItemsCart: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

export const { setQuantityItemsCart } = cartSlice.actions;
export default cartSlice.reducer;
