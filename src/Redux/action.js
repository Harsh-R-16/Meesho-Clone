export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_NAME = "ADD_NAME";
export const REMOVE_FROM_CART = "REMOVE_FORM_CART";

export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const addName = (payload) => ({ type: ADD_NAME, payload });
export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});
