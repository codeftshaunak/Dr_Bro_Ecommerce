import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../src/assets/Sass/style.scss";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productContext";
import { FilterContextProvider } from "./context/filterContext";
import { CartProvider } from "./context/cartContext";
import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
