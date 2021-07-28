import * as utils from "../utils/helpers";
import * as constants from "../utils/constants";

export const cartItemsReducer = (state, action) => {
  switch (action.type) {
    case constants.CART_ITEM_ACTION_TYPE.ADD: {
      const { item, quantity } = { ...action.payload };
      const selectedItemIndex = utils.findIndexById(state, item.id);
      const updatedState = [...state];

      if (selectedItemIndex > -1) {
        updatedState[selectedItemIndex].quantity =
          updatedState[selectedItemIndex].quantity + quantity;
      } else {
        item.quantity = quantity;
        updatedState.push(item);
      }

      return updatedState;
    }

    case constants.CART_ITEM_ACTION_TYPE.REMOVE: {
      const { itemId, quantity } = { ...action.payload };
      const selectedItemIndex = utils.findIndexById(state, itemId);
      const updatedState = [...state];

      updatedState[selectedItemIndex].quantity =
        updatedState[selectedItemIndex].quantity - quantity;

      if (updatedState[selectedItemIndex].quantity < 0) {
        updatedState[selectedItemIndex].quantity = 0;
      } else if (updatedState[selectedItemIndex].quantity === 0) {
        updatedState.splice(selectedItemIndex, 1);
      }

      return updatedState;
    }

    default:
      return state;
  }
};
