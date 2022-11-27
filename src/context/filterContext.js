import { useReducer, createContext, useEffect, useContext } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "a-z",
  filters: {
    text: "",
  },
};

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductContext();

  //to set grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  //to set list view
  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };

  //to sorting
  const sorting = (event) => {
    let userSortInput = event.target.value;
    dispatch({ type: "GET_SORT_DATA", payload: userSortInput });
  };

  //to update filter value
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  //to sort the products
  useEffect(() => {
    dispatch({ type: "FILTERS_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
