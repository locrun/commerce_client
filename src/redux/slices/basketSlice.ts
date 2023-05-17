import { createSlice } from "@reduxjs/toolkit";

export interface Cart {
  quantity: number;
}

const initialState: Cart = {
  quantity: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setQuantityItemsCart: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

export const { setQuantityItemsCart } = basketSlice.actions;
export default basketSlice.reducer;
