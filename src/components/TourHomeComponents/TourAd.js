import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import styled from "styled-components";
import Titles from "./Titles";

const TourAd = () => {
  return (
    <Wrapper className="container">
      <div className="tour__ad">
        <div className="tour__ad__left">
          <Titles
            toursubtitle="The best travel agency"
            tourtitlestart="Discover the"
            tourspan="world"
            tourtitleend="with our guide"
          />
          <div className="tour__ad__text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              obcaecati minus fugiat eligendi consequuntur dolorum sint aliquid
              odit nostrum, ut recusandae, aut ipsum! Vel natus laudantium
              quibusdam, sequi voluptas veritatis quod labore recusandae
              consequatur, cumque laborum eum! Odit, repellendus soluta!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              neque quos illum id cumque, veniam a ducimus at quaerat obcaecati.
              Officiis minus voluptas, modi dignissimos rerum error minima
              expedita iusto.
            </p>
          </div>
          <div className="tour__ad__info">
            <FiPhoneCall />
            <div className="info">
              <p>Call For More Info</p>
              <p>+91 121 12 12 12</p>
            </div>
          </div>
        </div>
        <div className="tour__ad__right">
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .tour__ad {
    padding: 9rem 1rem;
    display: flex;
    flex-wrap: wrap;

    .tour__ad__left {
      width: 50%;
    }
    .tour__ad__left p {
      font-size: 15px;
      font-weight: 300;
      line-height: 1.75em;
    }
    .tour__ad__info {
      display: flex;
      padding-top: 10px;
      align-items: center;

      svg {
        font-size: 25px;
        margin-right: 10px;
        color: #0f2454;
      }
    }

    .tour__ad__right {
      width: 50%;
      display: flex;
      justify-content: end;
      text-align: end;
      align-items: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .tour__ad {
      display: flex;
      flex-direction: column;
      align-content: center;

      .tour__ad__left {
        width: 100%;
        text-align: center;
        .tour__ad__info {
          text-align: center;
          justify-content: center;
          padding-bottom: 20px;
        }
      }
      .tour__ad__right {
        width: 100%;
        justify-content: center;
        text-align: center;

        img {
          max-width: 600px;
        }
      }
    }
  }
`;

export default TourAd;
