import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Type {
  typeId: number | null;
}

const initialState: Type = {
  typeId: null,
};

export const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    setSelectedType: (state, action: PayloadAction<Type>) => {
      state.typeId = action.payload.typeId;
    },
  },
});

export const { setSelectedType } = typeSlice.actions;
export default typeSlice.reducer;
