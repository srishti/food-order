import React, { useState } from "react";
import Header from "./components/Header/Header";
import CartSummary from "./components/Cart/CartSummary";
import Banner from "./components/UI/Banner";
import Intro from "./components/Food/Intro";
import FoodItems from "./components/Food/FoodItems";

const App = () => {
  const [isCartSummaryModalOpen, setIsCartSummaryModalOpen] = useState(false);

  const openCartSummaryModalHandler = () => {
    setIsCartSummaryModalOpen(true);
  };

  const closeCartSummaryModalHandler = () => {
    setIsCartSummaryModalOpen(false);
  };

  return (
    <div>
      <Header onOpenCartSummaryModal={openCartSummaryModalHandler} />
      {isCartSummaryModalOpen && (
        <CartSummary onCloseModal={closeCartSummaryModalHandler} />
      )}
      <Banner src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
      <Intro />
      <FoodItems />
    </div>
  );
};

export default App;
