import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUB_QUANTITY, 
  ADD_QUANTITY, 
  ADD_SHIPPING,
  SUB_SHIPPING,
  REMOVE_ALL
} from "./action_types";

export const addToCart = id => {return {type: ADD_TO_CART, id};}
export const removeItem = id => {return {type: REMOVE_FROM_CART, id};}
export const subtractQuantity = id =>  {return {type: SUB_QUANTITY, id};}
export const addQuantity= id => {return {type: ADD_QUANTITY, id};}
export const addShipping = () => {return {type: ADD_SHIPPING};}
export const subShipping = () => {return {type: SUB_SHIPPING};}
export const removeAllItems = () => {return {type: REMOVE_ALL};}