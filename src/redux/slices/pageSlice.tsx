import { createSlice } from "@reduxjs/toolkit";

export interface Pages {
  currentPage: number,
  limit: number,
}

const initialState: Pages = {
  currentPage: 1,
  limit: 2,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});

export const { setCurrentPage, setLimit } = pageSlice.actions;
export default pageSlice.reducer
