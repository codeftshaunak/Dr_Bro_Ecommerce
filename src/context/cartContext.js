import { useEffect } from "react";
import { createContext, useReducer, useContext } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getCartDataLocalStorage = () => {
  let newCartData = localStorage.getItem("CartData");
  if (newCartData === []) {
    return [];
  } else {
    return JSON.parse(newCartData);
  }
};
const initialState = {
  cart: getCartDataLocalStorage(),
  total_item: "",
  total_amount: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItemCart = (id) => {
    dispatch({ type: "REMOVE_ITEM_CART", payload: id });
  };

  useEffect(() => {
    localStorage.setItem("CartData", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItemCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
