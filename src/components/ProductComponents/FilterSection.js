import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../../context/filterContext";
import { BsFillPatchCheckFill } from "react-icons/bs";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../../styles/Button";

const FilterSection = () => {
  const {
    updateFilterValue,
    clearFilters,
    all_products,
    filters: { text, color, category, price, minPrice, maxPrice, company },
  } = useFilterContext();

  console.log(company);
  //get unique data for everyone
  const getUniqueData = (data, prop) => {
    let newValue = data.map((currEle) => {
      return currEle[prop];
    });
    return (newValue = ["All", ...new Set(newValue)]);
  };

  //unique data category
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");
  let union = colorsData.flat(2);
  const newColorsData = [...new Set(union)];

  return (
    <Wrapper>
      <div className="left__filters">
        <div className="filter__search style__middle">
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

        <div className="category__filter style__middle">
          <h3>Category</h3>
          {categoryData.map((currEle, index) => {
            return (
              <>
                <button
                  key={index}
                  type="button"
                  name="category"
                  value={currEle}
                  className={category === currEle ? "active" : ""}
                  onClick={updateFilterValue}
                >
                  {currEle}
                </button>
                <br />
              </>
            );
          })}
        </div>

        <div className="company__filter style__middle">
          <h3>Company</h3>

          <form action="#">
            <label htmlFor="sort"></label>
            <select name="company" id="company" onClick={updateFilterValue}>
              {companyData.map((currEle, index) => {
                return (
                  <>
                    <option
                      value={currEle}
                      name="company"
                      key={index}
                      onClick={updateFilterValue}
                    >
                      {company == "all" ? "All" : currEle}
                    </option>
                    <br />
                  </>
                );
              })}
            </select>
          </form>
        </div>

        <div className="colors__filters style__middle">
          <h3>Colors</h3>
          <div className="colors__btns">
            {newColorsData.map((currEle, index) => {
              if (currEle === "All") {
                return (
                  <button
                    type="button"
                    name="color"
                    value={currEle}
                    className="btn__fiter__colors"
                    style={{ backgroundColor: currEle }}
                    key={index}
                    onClick={updateFilterValue}
                  >
                    {currEle === "All" ? "All" : null}
                  </button>
                );
              }

              if (currEle !== "All") {
                return (
                  <button
                    type="button"
                    name="color"
                    value={currEle}
                    className="btn__fiter__colors"
                    style={{ backgroundColor: currEle }}
                    key={index}
                    onClick={updateFilterValue}
                  >
                    {color === currEle ? (
                      <BsFillPatchCheckFill className="active__icon" />
                    ) : null}
                  </button>
                );
              }
            })}
          </div>
        </div>

        <div className="price__fiters style__middle">
          <h3>Price</h3>
          <p>
            <FormatPrice price={price} />
          </p>
          <input
            type="range"
            name="price"
            max={maxPrice}
            min={minPrice}
            value={price}
            onChange={updateFilterValue}
          />
        </div>

        <div className="clear__filter text-center style__middle">
          <Button onClick={clearFilters}>Clear Filters</Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .left__filters {
    display: flex;
    width: 300px;
    margin: auto;
    flex-direction: column;

    .style__middle {
      width: 250px;
      margin: 10px auto;
    }

    h3 {
      font-weight: 600;
      width: 30px;
      border-bottom: 2px solid black;
      padding-top: 1rem;
    }

    .filter__search {
      border: 1px solid gray;
      margin-top: 10px;
      width: 280px;
      margin: 10px auto;

      input {
        padding: 15px 60px 15px 10px;
        font-weight: bold;
      }
    }

    .category__filter {
      button {
        font-size: 14px;
        line-height: 1.5;
        margin-top: 5px;
        text-transform: capitalize;
      }
      .active {
        border-bottom: 2px solid gray;
        padding: 1px 10px;
        background: gray;
        color: white;
        font-weight: 500;
      }
    }

    .company__filter {
      form {
        margin-top: 5px;
        font-size: 14px;

        select {
          padding: 10px 20px;
          border: 1px solid;
          cursor: pointer;
          width: 180px;
        }
      }
    }

    .colors__filters {
      .colors__btns {
        display: flex;
        .btn__fiter__colors {
          position: relative;
        }
        .active__icon {
          color: white;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      button {
        margin: 2px;
        padding: 0px 12px;
        border-radius: 50px;
      }
    }
  }
`;

export default FilterSection;
