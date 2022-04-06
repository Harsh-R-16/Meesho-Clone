export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_NAME = "ADD_NAME";

export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const addName = (payload) => ({ type: ADD_NAME, payload });
