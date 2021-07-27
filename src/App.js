import React, { useState, useContext } from "react";
import Header from "./components/Header/Header";
import CartSummary from "./components/Cart/CartSummary";
import Banner from "./components/UI/Banner";
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
      <Banner src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
      <Intro />
      <FoodItems />
    </div>
  );
};

export default App;
