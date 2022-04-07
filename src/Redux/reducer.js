import { ADD_TO_CART, INCREASE_STEP, SAVE_ADDRESS, ADD_NAME } from "./action";

export const reducer = (store, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(store);
      let temp = store.cart;
      if (!temp.includes(+action.payload)) temp.push(+action.payload);
      localStorage.setItem("cart", JSON.stringify(temp));
      return {
        count: temp.length,
        cart: temp,
      };
    case ADD_NAME:
      console.log(action);
      return {
        ...store,
        name: action.payload,
      };

    case INCREASE_STEP:
      return {
        ...store,
        step: store.step + 1,
      };
    case SAVE_ADDRESS:
      return {
        ...store,
        address: action.payload,
      };

    default:
      return store;
  }
};
