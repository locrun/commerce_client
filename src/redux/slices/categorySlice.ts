import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Category {
  categoryId: number | null;
}

const initialState: Category = {
  categoryId: null,
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setIdCategory: (state, action: PayloadAction<Category>) => {
      state.categoryId = action.payload.categoryId;
    },
  },
});

export const { setIdCategory } = categorySlice.actions;
export default categorySlice.reducer;
