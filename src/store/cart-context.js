import React from "react";

const cartContextDefaultData = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (itemId) => {},
};

const CartContext = React.createContext(cartContextDefaultData);

export default CartContext;
