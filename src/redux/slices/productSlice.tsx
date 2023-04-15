import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Type {
  id: number | null,
  type: string | null,

}

const initialState: Type = {
  id: null,
  type: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<Type>) => {
      state.type = action.payload.type;
    },

  },
});


export const { setType } = productSlice.actions;

export default productSlice.reducer;
