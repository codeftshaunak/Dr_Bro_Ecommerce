import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Titles from "./Titles";
import TourHomeCard from "./TourCards";
import { BASE_URL } from "../../config";
import axios from "axios";

const PopularTours = () => {
  const [tour, setTour] = useState([]);
  console.log(tour);
  const API = `${BASE_URL}/tours/`;
  const getTours = async (api) => {
    const res = await axios.get(api);
    const data = res.data.results    ;
    // console.log(data);
    setTour(data);
  }

  useEffect(() => {
    getTours(API);
  }, [])


  return (
    <Wrapper className="container pb-36">
      <Titles
        toursubtitle="Choose your place"
        tourtitlestart="Popular"
        tourspan="Tours"
      />
      <div className="flex justify-around flex-wrap tour-home-card">
        <TourHomeCard data={tour} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .tour__card:first-child {
    figure {
      width: auto;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .tour__card:first-child {
      figure {
        width: 100%;
      }
    }
  }
`;

export default PopularTours;
