import { GET_CATEGORY_NAME } from "./types";

const initialState = {
  name: "all",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
