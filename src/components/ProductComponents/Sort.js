import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../../context/filterContext";

const Sort = () => {
  const {
    filter_products,
    grid_view,
    setGridView,
    setListView,
    sorting,
  } = useFilterContext();

  return (
    <Wrapper>
      <div className="sort__section">
        <div className="sort__buttons">
          <button
            className={grid_view ? "active sort__btn" : "sort__btn"}
            onClick={setGridView}
          >
            <BsFillGridFill />
          </button>

          <button
            className={grid_view ? "sort__btn" : "active sort__btn"}
            onClick={setListView}
          >
            <BsList />
          </button>
        </div>
        <div className="avaiable__products">
          <p>{`${filter_products?.length} Products Avaiable`}</p>
        </div>
        <div className="sort__filter__dropdown">
          <form action="#">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" onClick={sorting}>
              <option value="lowest">price(lowest)</option>
              <br />
              <option value="highest">price(highest)</option>
              <br />
              <option value="a-z">price(a-z)</option>
              <br />
              <option value="z-a">price(z-a)</option>
            </select>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .sort__section {
    display: flex;
    align-items: center;
    padding: 20px 0 20px 0;
    justify-content: space-between;

    .sort__btn {
      font-size: 20px;
      margin-left: 5px;
      padding: 5px;
      border: 1px solid black;
    }

    .active {
      color: white;
      background-color: black;
    }

    .avaiable__products {
      padding: 5px 15px;
      background-color: gray;
      color: white;
      cursor: no-drop;
    }

    .sort__filter__dropdown {
      padding: 6px 15px;
      background-color: #e9e9ed;
      font-size: 14px;
      cursor: pointer;

      select {
        cursor: pointer;
        background-color: #e9e9ed;
        border: none;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .sort__section {
      justify-content: space-around;
      .sort__buttons {
        display: none;
      }
    }
  }
`;

export default Sort;
