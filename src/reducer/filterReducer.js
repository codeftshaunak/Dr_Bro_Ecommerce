const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT":
      return {
        ...state,
        filter_products: [...action.payload],
          all_products: [...action.payload],
      };

    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_DATA":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;

      const {
        filter_products, sorting_value
      } = state;
      let temp_sortproduct = [...filter_products];

      const sortingProducts = (a, b) => {
        switch (sorting_value) {
          case "a-z":
            return a.name.localeCompare(b.name);

          case "z-a":
            return b.name.localeCompare(a.name);

          case "highest":
            return b.price - a.price;

          case "lowest":
            return a.price - b.price;

          default:
            break;
        }
      };

      newSortData = temp_sortproduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };


    case "UPDATE_FILTER_VALUE":
      const {
        name, value
      } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        }
      }


      case "FILTERS_PRODUCTS":
        let {
          all_products
        } = state;
        let tempFilterProduct = [...all_products];

        const {
          text
        } = state.filters;

        if (text) {
          tempFilterProduct = tempFilterProduct.filter((currEle) => {
            return currEle.name.toLowerCase().includes(text);
          })
        }

        return {
          ...state,
          filter_products: tempFilterProduct
        }

        default:
          return state;
  }
};

export default filterReducer;