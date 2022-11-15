import React from "react";
import styled from "styled-components";
import PopuladTravelDesgin from "./PopuladTravelDesgin";
import Titles from "./Titles";
import TourHomeCard from "./TourCards";
import TourSlider from "./TourSlider";

const PopularTravel = () => {
  const popularTourData = [
    {
      id: 1,
      package_titile: "Maldivs Tour",
      package_price: "$1200",
      Package_thumble:
        "https://i.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    },
    {
      id: 2,
      package_titile: "London Tour",
      package_price: "$2200",
      Package_thumble:
        "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 3,
      package_titile: "USA Tour",
      package_price: "$2200",
      Package_thumble:
        "https://i.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ",
    },
    {
      id: 4,
      package_titile: "Rasia Tour",
      package_price: "$2200",
      Package_thumble:
        "https://i.picsum.photos/id/74/4288/2848.jpg?hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8",
    },
    {
      id: 5,
      package_titile: "Canada Tour",
      package_price: "$2200",
      Package_thumble:
        "https://i.picsum.photos/id/84/1280/848.jpg?hmac=YFRYDI4UsfbeTzI8ZakNOR98wVU7a-9a2tGF542539s",
    },
  ];

  return (
    <Wrapper className="container pb-36">
      <Titles
        toursubtitle="MOST POPULAR"
        tourtitlestart="Travel"
        tourspan="Countries"
      />

      <div className="section__one flex py-10">
        <div className="left__section">
          <PopuladTravelDesgin data={"Italy, Eourop"} />
        </div>
        <div className="right__section">
          <TourSlider data={popularTourData} />
        </div>
      </div>

      <div className="section__two flex justify-between items-center py-10">
        <div className="right__section">
          <TourSlider data={popularTourData} />
        </div>
        <div className="left__section">
          <PopuladTravelDesgin data={"France, London"} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section__one {
    justify-content: space-between;
    align-items: center;
  }
  .left__section {
    padding-left: 20px;
  }
  .right__section {
    width: 60%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .section__one {
      flex-wrap: wrap;
      text-align: center;
      justify-content: center;
    }

    .section__two {
      flex-wrap: wrap;
      justify-content: center;
      flex-flow: column-reverse;
      text-align: center;
    }
  }
`;

export default PopularTravel;
