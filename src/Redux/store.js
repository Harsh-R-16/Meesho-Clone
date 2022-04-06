import { createStore } from "redux";
import { reducer } from "./reducer";

let initialStore = { cart: [], count: 0,step:0,address:{} };
if (localStorage.getItem("cart")) {
  initialStore.cart = JSON.parse(localStorage.getItem("cart"));
  initialStore.count = initialStore.cart.length;
}

export const store = createStore(reducer, initialStore);
