import { ADD_ITEMS_CART, REMOVE_ITEMS_CART } from "./types";

const initialState = {
  cartItems: [],
  quentity: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEMS_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        quentity: state.cartItems.length + 1,
      };

    case REMOVE_ITEMS_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        quentity: state.cartItems.length - 1,
      };

    default:
      return state;
  }
};
