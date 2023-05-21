import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Type {
  typeId: number;
}

const initialState: Type = {
  typeId: 1,
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
