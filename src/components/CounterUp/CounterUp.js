import React from "react";
import styled from "styled-components";
import { TbPlaneInflight } from "react-icons/tb";
import { GoHome } from "react-icons/go";
import { SiCodeship } from "react-icons/si";
import { FaHotel } from "react-icons/fa";
import counterbg from "../../assets/counterbg.jpg";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const CounterUp = () => {
  const [counterOn, setCounter] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <Wrapper>
        <div className="counter__main mb-36">
          <div className="container flex flex-wrap justify-between">
            <div className="booking">
              <TbPlaneInflight />
              <h3>
                {counterOn && <CountUp start={0} end={300} duration={5} />}
              </h3>
              <h4>Flight Booking</h4>
            </div>
            <div className="booking">
              <GoHome />
              <h3>
                {counterOn && <CountUp start={0} end={250} duration={5} />}
              </h3>
              <h4>Amazing Tour</h4>
            </div>
            <div className="booking">
              <SiCodeship />
              <h3>
                {counterOn && <CountUp start={0} end={100} duration={5} />}
              </h3>
              <h4>Cruises Booking</h4>
            </div>
            <div className="booking">
              <FaHotel />
              <h3>
                {counterOn && <CountUp start={0} end={150} duration={5} />}
              </h3>
              <h4>Hotel Booking</h4>
            </div>
          </div>
        </div>
      </Wrapper>
    </ScrollTrigger>
  );
};

const Wrapper = styled.section`
  .counter__main {
    padding: 200px;
    background-image: url(${counterbg});
    color: white;
    font-weight: 600;
    text-align: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    .booking {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      h3 {
        font-size: 30px;
        font-weight: 600;
      }

      h4 {
        font-size: 18px;
      }
    }

    .booking svg {
      font-size: 40px;
    }
  }
`;

export default CounterUp;
