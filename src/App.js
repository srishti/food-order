import React, { useState, useContext } from "react";
import Header from "./components/Layout/Header";
import Banner from "./components/Layout/Banner";
import CartSummary from "./components/Cart/CartSummary";
import MealsSummary from "./components/Meals/MealsSummary";
import Meals from "./components/Meals/Meals";
import FoodContext from "./context/food-context";

const App = () => {
  const [isCartSummaryVisible, setIsCartSummaryVisible] = useState(false);
  const foodContext = useContext(FoodContext);

  const showCartSummary = () => {
    setIsCartSummaryVisible(true);
  };

  const hideCartSummary = () => {
    setIsCartSummaryVisible(false);
  };

  return (
    <div>
      <Header showCartSummary={showCartSummary} />
      {isCartSummaryVisible && foodContext.selectedItems.length > 0 && (
        <CartSummary hideCartSummary={hideCartSummary} />
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
