import { 
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  SUB_SHIPPING
} from "../actions/action_types";
import {initState} from "./store";


const cartReducer = (state = initState,action) =>{
   
    if(action.type === ADD_TO_CART){
      let addedItem = state.items.find(item => item.id === action.id)
      let existed_item= state.addedItems.find(item=> action.id === item.id)
      console.log("it's fired");
        
      // Increament quantity if item existed in our cart
      if(existed_item){
          addedItem.quantity += 1;
          return{...state, total: state.total + addedItem.price};
      } else{
          addedItem.quantity = 1;
          let newTotal = state.total + addedItem.price;
          //TODO: We need to return a new array otherwise component wont rerender
          return{...state, addedItems: [...state.addedItems, addedItem], total : newTotal};
      }
    }
    
    if(action.type === REMOVE_FROM_CART){
      // This Remove item form cart completely!
      let itemToRemove= state.addedItems.find(item=> action.id === item.id)
      let new_items = state.addedItems.filter(item=> action.id !== item.id)
      let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
      return{...state, addedItems: new_items, total: newTotal};
    }

    // Increase quantity of item INSIDE CART COMPONENT
    if(action.type === ADD_QUANTITY){
      let addedItem = state.items.find(item=> item.id === action.id);
      let new_items = state.addedItems.filter(item=>item.id !== action.id);
      addedItem.quantity += 1;
      let newTotal = state.total + addedItem.price;
      return{...state, addedItems:[...new_items, addedItem], total: newTotal};
    }

    if(action.type=== SUB_QUANTITY){  
      let addedItem = state.items.find(item=> item.id === action.id);
      let new_items = state.addedItems.filter(item=>item.id !== action.id);
      //TODO: Change this from quantity === 1 to < 1 because people can play with the code and break it
      //if the qt == 0 then it should be removed
      if(addedItem.quantity === 1){
        //let new_items = state.addedItems.filter(item=>item.id !== action.id);
        let newTotal = state.total - addedItem.price;
        return{...state, addedItems: new_items, total: newTotal};
      } else {
          addedItem.quantity -= 1;
          let newTotal = state.total - addedItem.price;
          return{...state, addedItems:[...new_items, addedItem], total: newTotal};
      }
    }

    if(action.type === ADD_SHIPPING){
      console.log("add")
      return{...state, total: state.total + 6}
    }

    if(action.type === SUB_SHIPPING){
      console.log("sub")
      return{...state, total: state.total - 6}
    } 

    return state

}
export default cartReducer
