import * as utils from "../utils/helpers";
import * as constants from "../utils/constants";

export const cartItemsReducer = (state, action) => {
  switch (action.type) {
    case constants.CART_ITEM_ACTION_TYPE.ADD: {
      const item = action.payload;
      const existingItemIndex = utils.findIndexById(state, item.id);
      const updatedState = [...state];

      if (existingItemIndex > -1) {
        updatedState[existingItemIndex].quantity =
          updatedState[existingItemIndex].quantity + item.quantity;
      } else {
        updatedState.push(item);
      }

      return updatedState;
    }

    case constants.CART_ITEM_ACTION_TYPE.REMOVE: {
      const itemId = action.payload;
      const existingItemIndex = utils.findIndexById(state, itemId);
      const updatedState = [...state];

      updatedState[existingItemIndex].quantity =
        updatedState[existingItemIndex].quantity - 1;

      if (updatedState[existingItemIndex].quantity < 0) {
        updatedState[existingItemIndex].quantity = 0;
      } else if (updatedState[existingItemIndex].quantity === 0) {
        updatedState.splice(existingItemIndex, 1);
      }

      return updatedState;
    }

    default:
      return state;
  }
};
