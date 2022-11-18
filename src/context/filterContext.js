import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useProductContext } from "./productContext";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
};

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductContext();

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
  }, []);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
