import { items } from "../static/items";
import { createStore } from "redux";
import cartReducer from "./cart";

export const initState = {
  items,
  addedItems: [],
  total: 0
};
export const store = createStore(cartReducer);