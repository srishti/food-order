import React, { useReducer } from "react";
import CartContext from "./cart-context";
import * as constants from "../utils/constants";
import { cartItemsReducer } from "./cartItemsReducer";

const CartProvider = (props) => {
  const [items, dispatchItemAction] = useReducer(cartItemsReducer, []);

  const addItemToCart = (item) => {
    dispatchItemAction({
      type: constants.CART_ITEM_ACTION_TYPE.ADD,
      payload: item,
    });
  };

  const removeItemFromCart = (itemId) => {
    dispatchItemAction({
      type: constants.CART_ITEM_ACTION_TYPE.REMOVE,
      payload: itemId,
    });
  };

  const getTotalItems = () => {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
      count += items[i].quantity;
    }
    return count;
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let i = 0; i < items.length; i++) {
      totalAmount += items[i].price * items[i].quantity;
    }
    return totalAmount.toFixed(2);
  };

  const cartContextData = {
    items: items,
    totalItems: getTotalItems(),
    totalAmount: getTotalAmount(),
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContextData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
