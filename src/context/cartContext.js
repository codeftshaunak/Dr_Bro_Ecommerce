import { useEffect } from "react";
import { createContext, useReducer, useContext } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getCartDataLocalStorage = () => {
  let newCartData = localStorage.getItem("CartData");

  if (newCartData === undefined || newCartData === null || newCartData === "") {
    return localStorage.setItem("CartData", []);
  } else {
    return JSON.parse(newCartData);
  }
};
const initialState = {
  cart: getCartDataLocalStorage(),
  total_item: "",
  total_price: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //For Add To Cart
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  //For Remove Cart Item
  const removeItemCart = (id) => {
    dispatch({ type: "REMOVE_ITEM_CART", payload: id });
  };

  //For Clear Toatal Cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  //For Incrase Item
  const setIncrase = (id) => {
    dispatch({ type: "SET_INCRASE", payload: id });
  };

  //For Incrase
  const setDecrase = (id) => {
    dispatch({ type: "SET_DECRASE", payload: id });
  };

  //Total Cart
  const cartTotal = () => {};

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("CartData", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItemCart,
        clearCart,
        setIncrase,
        setDecrase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
