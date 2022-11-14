import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import FormatPrice from "./Helpers/FormatPrice";
import Star from "./Helpers/Star";

function TourCard() {
  return (
    <Wrapper>
      <div className="demo__blog pt-36 pb-36 container mx-auto">
        <div className="intro-data text-center">Check Now!</div>
        <div className="common-heading text-center">
          Let's Enjoy! Top Deals For This Week
        </div>

        <div className="all__card flex justify-evenly flex-wrap">
          {/* Card-1 Start */}
          <div className="card tour__card w-1/4 bg-white text-black shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">The Dilly!</h3>
              <h4 className="country">London</h4>
              <h4 className="travel-price">
                <FormatPrice price={400000} />
              </h4>
              <div className="badge badge-secondary">NEW</div>
              {/* <h4 className="place_review text-xl">7.6/10(144 review)</h4> */}
              <Star stars={4.6} reviews={144} />

              <hr />
              <p className="card-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                consequuntur exercitationem ipsa optio quasi blanditiis.
                Similique nisi suscipit rem facilis neque officiis temporibus
                id! Amet assumenda vel doloremque ipsa rem.
              </p>
              {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div> */}
              <div className="card-actions justify-start">
                <Button>Book Tour</Button>
              </div>
            </div>
          </div>
          {/* Card-1 Start */}
          <div className="card tour__card w-1/4 bg-white text-black shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">The Dilly!</h3>
              <h4 className="country">London</h4>
              <h4 className="travel-price">
                <FormatPrice price={400000} />
              </h4>
              <div className="badge badge-secondary">NEW</div>
              {/* <h4 className="place_review text-xl">7.6/10(144 review)</h4> */}
              <Star stars={4.6} reviews={144} />

              <hr />
              <p className="card-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                consequuntur exercitationem ipsa optio quasi blanditiis.
                Similique nisi suscipit rem facilis neque officiis temporibus
                id! Amet assumenda vel doloremque ipsa rem.
              </p>
              {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div> */}
              <div className="card-actions justify-start">
                <Button>Book Tour</Button>
              </div>
            </div>
          </div>
          {/* Card-1 Start */}
          <div className="card tour__card w-1/4 bg-white text-black shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">The Dilly!</h3>
              <h4 className="country">London</h4>
              <h4 className="travel-price">
                <FormatPrice price={400000} />
              </h4>
              <div className="badge badge-secondary">NEW</div>
              {/* <h4 className="place_review text-xl">7.6/10(144 review)</h4> */}
              <Star stars={4.6} reviews={144} />

              <hr />
              <p className="card-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                consequuntur exercitationem ipsa optio quasi blanditiis.
                Similique nisi suscipit rem facilis neque officiis temporibus
                id! Amet assumenda vel doloremque ipsa rem.
              </p>
              {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div> */}
              <div className="card-actions justify-start">
                <Button>Book Tour</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .tour__card {
    width: 350px;
    margin: 5px;
  }

  .card-body {
    padding: 20px;
    h2 {
      font-size: 14px;
    }
    .travel-price {
      font-size: 12px;
      font-weight: 500;
    }
    .badge {
      font-size: 10px;
      background: red;
      width: 35px;
      color: white;
      text-align: center;
    }
    .country {
      font-size: 15px;
      font-weight: 400;
    }
    .card-description {
      font-size: 12px;
      font-weight: 400;
      text-align: justify;
    }
  }
`;

export default TourCard;
