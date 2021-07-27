import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FoodContextProvider } from "./context/food-context";
import "./index.css";

ReactDOM.render(
  // <React.StrictMode>
  <FoodContextProvider>
    <App />
  </FoodContextProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
