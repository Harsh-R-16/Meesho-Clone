import { ADD_TO_CART } from "./action";

export const reducer = (store, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(store);
      let temp = store.cart;
      temp.push(+action.payload);
      localStorage.setItem("cart", JSON.stringify(temp));
      return {
        count: temp.length,
        cart: temp,
      };

    default:
      return store;
  }
};
