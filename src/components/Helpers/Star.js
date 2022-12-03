import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from(
    {
      length: 5,
    },
    (elem, index) => {
      let number = index + 0.5;

      return (
        <span key={index}>
          {" "}
          {stars >= index + 1 ? (
            <FaStar className="icon" />
          ) : stars >= number ? (
            <FaStarHalfAlt className="icon" />
          ) : (
            <AiOutlineStar className="icon" />
          )}
        </span>
      );
    }
  );

  return (
    <Wrapper>
      <div className="icon-style flex">
        {reviews ? (
          <p>
            ({reviews}
            customer reviews)
          </p>
        ) : (
          ""
        )}

        <div className="flex">{ratingStar}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
    .icon {
      font-size: 1.6rem;
      color: orange;
    }
    .empty-icon {
      font-size: 1.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
      font-size: 12px;
    }
  }
`;

export default Star;
