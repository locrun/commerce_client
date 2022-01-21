import {
  GET_CATEGORY_NAME,
  ADD_ITEMS_CART,
  REMOVE_ITEMS_CART,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  PRODUCTS_LOAD,
} from "./types";

export function productType(payload) {
  return {
    type: GET_CATEGORY_NAME,
    payload,
  };
}
export function addItemCart(payload) {
  return {
    type: ADD_ITEMS_CART,
    payload,
  };
}
export function removeItemCart(payload) {
  return {
    type: REMOVE_ITEMS_CART,
    payload,
  };
}
export function laoderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}
export function laoderOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}

export function productsLoad() {
  return async (dispatch) => {
    dispatch(laoderOn());
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    dispatch({
      type: PRODUCTS_LOAD,
      data: jsonData,
    });
    dispatch(laoderOff());
  };
}
