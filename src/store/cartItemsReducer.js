import * as utils from "../utils/helpers";
import * as constants from "../utils/constants";

/**
 * Reducer function for cart items (invoked when the dispatch function is called)
 * @param {Array} state - current state of items in cart
 * @param {Object} action - argument passed to dispatch function of cart items
 * @returns
 */
export const cartItemsReducer = (state, action) => {
  switch (action.type) {
    // when item is to be added to the cart
    case constants.CART_ITEM_ACTION_TYPE.ADD: {
      const item = action.payload;
      const existingItemIndex = utils.findIndexById(state, item.id);
      const updatedState = [...state];

      if (existingItemIndex > -1) {
        // if item already exists in cart then increase it quantity by given number
        updatedState[existingItemIndex].quantity =
          updatedState[existingItemIndex].quantity + item.quantity;
      } else {
        // if item does not exist in cart then add it
        updatedState.push(item);
      }

      return updatedState;
    }

    // when item is to be removed from the cart
    case constants.CART_ITEM_ACTION_TYPE.REMOVE: {
      const itemId = action.payload;
      const existingItemIndex = utils.findIndexById(state, itemId);
      const updatedState = [...state];

      updatedState[existingItemIndex].quantity =
        updatedState[existingItemIndex].quantity - 1;

      if (updatedState[existingItemIndex].quantity === 0) {
        // if the item's quantity has reached 0, remove it from cart
        updatedState.splice(existingItemIndex, 1);
      }

      return updatedState;
    }

    default:
      return state;
  }
};
