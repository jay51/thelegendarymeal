import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  SUB_SHIPPING,
  REMOVE_ALL,
} from "./actions/action_types";
import { initState } from "./store";


const cartReducer = (state = initState, action) => {

  const id = parseInt(action.id, 10);

  switch(action.type){
    case ADD_TO_CART: {
      console.log(ADD_TO_CART)
      let itemInCart = state.addedItems.find(item => id === item.id)

      if (itemInCart) {
        itemInCart.quantity += 1;
        return { ...state, total: state.total + itemInCart.price };
      }

      itemInCart = state.items.find(item => item.id === id)
      let newItem = {...itemInCart}
      let newTotal = state.total + itemInCart.price;
      newItem.quantity +=1;
      console.log(newItem);
      return { ...state, addedItems: [...state.addedItems, newItem], total: newTotal };
    }

    case REMOVE_FROM_CART: {
      console.log(REMOVE_FROM_CART)
      let itemToRemove = state.addedItems.find(item => id === item.id)
      let new_items = state.addedItems.filter(item => id !== item.id)
      let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
      return { ...state, addedItems: new_items, total: newTotal };
    }

    case ADD_QUANTITY: {
      console.log(ADD_QUANTITY)
      let addedItem = state.addedItems.find(item => item.id === id);
      addedItem.quantity += 1;
      let newTotal = state.total + addedItem.price;
      return { ...state, addedItems: [...state.addedItems], total: newTotal };
    }

    case SUB_QUANTITY: {
      console.log(SUB_QUANTITY)
      let addedItem = state.addedItems.find(item => item.id === id);

      if (addedItem.quantity <= 1) {
        let newTotal = state.total - addedItem.price;
        let new_items = state.addedItems.filter(item => item.id !== id);
        return { ...state, addedItems: new_items, total: newTotal };
      }

      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return { ...state, addedItems: [...state.addedItems], total: newTotal };
    }

    case REMOVE_ALL:
      console.log(REMOVE_ALL)
      return { ...state, addedItems: [], total: 0 }

    case ADD_SHIPPING:
      console.log(ADD_SHIPPING)
      return { ...state, total: state.total + 6 }

    case SUB_SHIPPING:
      console.log(SUB_SHIPPING)
      return { ...state, total: state.total - 6 }

    default:
      return state
  }
}
export default cartReducer