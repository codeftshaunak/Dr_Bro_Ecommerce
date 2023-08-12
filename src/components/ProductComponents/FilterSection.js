import { useState, React } from "react";
import styled from "styled-components";
import { useFilterContext } from "../../context/filterContext";
import { BsFillPatchCheckFill } from "react-icons/bs";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../../styles/Button";
import { FcExpand } from "react-icons/fc";

const FilterSection = () => {
  const {
    updateFilterValue,
    clearFilters,
    all_products,
    // filters: { color, category, price, minPrice, maxPrice, company },
    filters: { color, price, minPrice, maxPrice, company, category },
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
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");
  let union = colorsData.flat(2);
  const newColorsData = [...new Set(union)];

  const [expend, setExpend] = useState(false);
  const [expendCompany, setExpendCompany] = useState(false);
  const [expendColor, setExpendColor] = useState(false);
  const [expendPrice, setExpendPrice] = useState(false);
  // const [expend, setExpend] = useState();

  return (
    <Wrapper>
      <div className="left__filters">
        <div className="category__filter style__middle">
          <h3 onClick={() => setExpend(!expend)}>
            Category <FcExpand />
          </h3>
          <div
            className={
              expend ? "expend__filter__items__active" : "expend__filter__items"
            }
          >
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
        </div>

        <div className="company__filter style__middle">
          <h3 onClick={() => setExpendCompany(!expendCompany)}>
            Company <FcExpand />
          </h3>
          <div
            className={
              expendCompany
                ? "expend__filter__items__active"
                : "expend__filter__items"
            }
          >
            {companyData.map((currEle, index) => {
              return (
                <>
                  <button
                    key={index}
                    type="button"
                    name="company"
                    value={currEle}
                    className={company === currEle ? "active" : ""}
                    onClick={updateFilterValue}
                  >
                    {currEle}
                  </button>
                  <br />
                </>
              );
            })}
          </div>
        </div>

        <div className="colors__filters style__middle">
          <h3 onClick={() => setExpendColor(!expendColor)}>
            Colors <FcExpand />
          </h3>
          <div
            className={
              expendColor
                ? "expend__filter__items__active"
                : "expend__filter__items"
            }
          >
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
        </div>

        <div className="price__fiters style__middle">
          <h3 onClick={() => setExpendPrice(!expendPrice)}>
            Price <FcExpand />
          </h3>
          <div
            className={
              expendPrice
                ? "expend__filter__items__active"
                : "expend__filter__items"
            }
          >
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
    width: 200px;
    margin: auto;
    flex-direction: column;

    .style__middle {
      width: 200px;
      margin: 10px auto;
    }

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

    h3 {
      font-weight: 400;
      width: 186px;
      border-bottom: 1px solid black;
      padding-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      cursor: pointer;
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

    .expend__filter__items {
      display: none;
    }
    .expend__filter__items__active {
      display: block;
    }
  }
`;

export default FilterSection;
