import React, { useState, useContext } from "react";
import Header from "./components/Layout/Header";
import Banner from "./components/Layout/Banner";
import CartSummary from "./components/Cart/CartSummary";
import Intro from "./components/Food/Intro";
import FoodItems from "./components/Food/FoodItems";
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
      <Intro />
      <FoodItems />
    </div>
  );
};

export default App;
