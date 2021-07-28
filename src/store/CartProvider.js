import React, { useReducer } from "react";
import CartContext from "./cart-context";
import * as constants from "../utils/constants";
import { cartItemsReducer } from "./cartItemsReducer";

const CartProvider = (props) => {
  const [items, dispatchItemAction] = useReducer(cartItemsReducer, []);

  /**
   * Function to add an item to the cart
   * @param {Object} item - item to be added to the cart
   */
  const addItemToCart = (item) => {
    dispatchItemAction({
      type: constants.CART_ITEM_ACTION_TYPE.ADD,
      payload: item,
    });
  };

  /**
   * Function to remove an item from the cart
   * @param {String} itemId - ID of item to be removed from cart
   */
  const removeItemFromCart = (itemId) => {
    dispatchItemAction({
      type: constants.CART_ITEM_ACTION_TYPE.REMOVE,
      payload: itemId,
    });
  };

  /**
   * Function to get total number of items in the cart
   * (If an item x has quantity 2 & item y has quantity 1, then total number of items in cart is 3.)
   * @return {Number} - total number of individual items in cart
   */
  const getTotalItems = () => {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
      count += items[i].quantity;
    }
    return count;
  };

  /**
   * Function to get the total amount for all items in the cart
   * (If an item x has quantity 2 & item y has quantity 1, then total number of items in cart is 3.)
   * @return {Number} - total amount for all items
   */
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let i = 0; i < items.length; i++) {
      totalAmount += items[i].price * items[i].quantity;
    }
    return totalAmount.toFixed(2);
  };

  // context data provided to all consumers of CartContext
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
