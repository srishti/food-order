import React, { useState, useContext } from "react";
import Header from "./components/Layout/Header";
import Banner from "./components/Layout/Banner";
import Cart from "./components/Cart/Cart";
import MealsSummary from "./components/Meals/MealsSummary";
import Meals from "./components/Meals/Meals";
import FoodContext from "./context/food-context";

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const foodContext = useContext(FoodContext);

  const showCart = () => {
    setIsCartVisible(true);
  };

  const hideCart = () => {
    setIsCartVisible(false);
  };

  return (
    <div>
      <Header onShowCart={showCart} />
      {isCartVisible && foodContext.selectedItems.length > 0 && (
        <Cart onHideCart={hideCart} />
      )}
      <Banner />
      <main>
        <MealsSummary />
        <Meals />
      </main>
    </div>
  );
};

export default App;
