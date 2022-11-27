import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../../context/filterContext";

const FilterSection = () => {
  const {
    updateFilterValue,
    all_products,
    filters: { text },
  } = useFilterContext();

  //get unique data for everyone
  const getUniqueData = (data, prop) => {
    let newValue = data.map((currEle) => {
      return currEle[prop];
    });
    return (newValue = ["All", ...new Set(newValue)]);
  };

  //unique data category
  const categoryData = getUniqueData(all_products, "category");

  return (
    <Wrapper>
      <div className="filter__search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search..."
          />
        </form>
      </div>

      <div className="category">
        {categoryData.map((currEle) => {
          return <p>{currEle}</p>;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default FilterSection;
