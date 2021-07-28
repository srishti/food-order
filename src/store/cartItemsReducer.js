import * as utils from "../utils/helpers";
import * as constants from "../utils/constants";

export const cartItemsReducer = (state, action) => {
  switch (action.type) {
    case constants.CART_ITEM_ACTION_TYPE.ADD: {
      const item = action.payload;
      const selectedItemIndex = utils.findIndexById(state, item.id);
      const updatedState = [...state];

      if (selectedItemIndex > -1) {
        updatedState[selectedItemIndex].quantity =
          updatedState[selectedItemIndex].quantity + item.quantity;
      } else {
        updatedState.push(item);
      }

      return updatedState;
    }

    case constants.CART_ITEM_ACTION_TYPE.REMOVE: {
      const itemId = action.payload;
      const selectedItemIndex = utils.findIndexById(state, itemId);
      const updatedState = [...state];

      updatedState[selectedItemIndex].quantity =
        updatedState[selectedItemIndex].quantity - 1;

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
