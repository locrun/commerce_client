import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthSate {
  token: string | null;
}
const initialState: AuthSate = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});

export const selectAuth = (state: RootState) => Boolean(state.auth.token);
export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
