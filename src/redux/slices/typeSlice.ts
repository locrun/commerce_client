import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Type {
  typeId: number | null;
}

const initialState: Type = {
  typeId: null,
};

export const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    setTypeId: (state, action: PayloadAction<Type>) => {
      state.typeId = action.payload.typeId;
    },
  },
});

export const { setTypeId } = typeSlice.actions;
export default typeSlice.reducer;
