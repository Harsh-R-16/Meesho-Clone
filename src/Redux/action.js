export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_NAME = "ADD_NAME";

export const addName = (payload) => ({ type: ADD_NAME, payload });
export const INCREASE_STEP = "INCREASE_STEP";
export const SAVE_ADDRESS = "SAVE_ADDRESS";

export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });

export const increaseStep = () => {
  return {
    type: INCREASE_STEP,
  };
};
export const saveAddress = (payload) => {
  return {
    type: SAVE_ADDRESS,
    payload,
  };
};
