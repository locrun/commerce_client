import { PRODUCTS_LOAD } from "./types";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_LOAD:
      return {
        ...state,
        products: [...state.products, ...action.data],
      };

    default:
      return state;
  }
};
