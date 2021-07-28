import React from "react";

const CART_CONTEXT_INITIAL_DATA = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (itemId) => {},
};

const CartContext = React.createContext(CART_CONTEXT_INITIAL_DATA);

export default CartContext;
