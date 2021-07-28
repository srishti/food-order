import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Banner from "./components/Layout/Banner";
import Cart from "./components/Cart/Cart";
import MealsSummary from "./components/Meals/MealsSummary";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCart = () => {
    setIsCartVisible(true);
  };

  const hideCart = () => {
    setIsCartVisible(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCart} />
      {isCartVisible && <Cart onHideCart={hideCart} />}
      <Banner />
      <main>
        <MealsSummary />
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
