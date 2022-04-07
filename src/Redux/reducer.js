import { ADD_TO_CART, ADD_NAME, REMOVE_FROM_CART } from "./action";

export const reducer = (store, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(store);
      let temp = store.cart;
      if (!temp.includes(+action.payload)) temp.push(+action.payload);
      localStorage.setItem("cart", JSON.stringify(temp));
      return {
        ...store,
        count: temp.length,
        cart: temp,
      };
    case ADD_NAME:
      console.log(action);
      return {
        ...store,
        name: action.payload,
      };
    case REMOVE_FROM_CART:
      console.log(action);
      let newData = { ...store };
      let data = newData.cart.filter((i) => i !== action.payload);
      localStorage.setItem("cart", JSON.stringify(data));
      return {
        ...store,
        cart: data,
        count: data.length,
      };
    default:
      return store;
  }
};
