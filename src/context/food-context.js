import React, { useReducer, useState } from "react";

const FOOD_CONTEXT_INITIAL_DATA = {
  selectedItems: [],
  increment: (foodItemId) => {},
  decrement: (foodItemId) => {},
  getItemsCount: () => {},
};

const ACTION_TYPE = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

const findIndexById = (arr, id) => {
  return arr.findIndex((element) => element.id === id);
};

const FoodContext = React.createContext(FOOD_CONTEXT_INITIAL_DATA);

const selectedItemsReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT: {
      const { foodItem, quantity } = { ...action.payload };
      const selectedItemIndex = findIndexById(state, foodItem.id);
      const updatedState = [...state];

      if (selectedItemIndex > -1) {
        updatedState[selectedItemIndex].quantity =
          updatedState[selectedItemIndex].quantity + quantity;
      } else {
        foodItem.quantity = quantity;
        updatedState.push(foodItem);
      }

      return updatedState;
    }

    case ACTION_TYPE.DECREMENT: {
      const { foodItemId, quantity } = { ...action.payload };
      const selectedItemIndex = findIndexById(state, foodItemId);
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

export const FoodContextProvider = (props) => {
  const [selectedItems, selectedItemsDispatch] = useReducer(
    selectedItemsReducer,
    []
  );

  const incrementFoodItem = (foodItem, quantity) => {
    selectedItemsDispatch({
      type: ACTION_TYPE.INCREMENT,
      payload: { foodItem, quantity },
    });
  };

  const decrementFoodItem = (foodItemId, quantity) => {
    selectedItemsDispatch({
      type: ACTION_TYPE.DECREMENT,
      payload: { foodItemId, quantity },
    });
  };

  const getIndividualSelectedItemsCount = () => {
    let count = 0;
    for (let i = 0; i < selectedItems.length; i++) {
      count += selectedItems[i].quantity;
    }
    return count;
  };

  const foodContextProviderValue = {
    selectedItems: selectedItems,
    increment: incrementFoodItem,
    decrement: decrementFoodItem,
    getItemsCount: getIndividualSelectedItemsCount,
  };

  return (
    <FoodContext.Provider value={foodContextProviderValue}>
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodContext;
