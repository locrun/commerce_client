import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { cartReducer } from "./cartReducer";
import { productsReducer } from "./productsReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  productsReducer,
  filterReducer,
  cartReducer,
  appReducer,
});
