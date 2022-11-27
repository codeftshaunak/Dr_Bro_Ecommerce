import React from "react";
import { useFilterContext } from "../../context/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();

  if (grid_view === true) {
    return <GridView products={filter_products} key={filter_products.id} />;
  }

  if (grid_view === false) {
    return <ListView products={filter_products} key={filter_products.id} />;
  }

  // if (setGridView === false) {
  //   return <ListView products={filter_products} />
  // }
};

export default ProductList;
