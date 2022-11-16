import React from "react";
import styled from "styled-components";
import { Button } from "../../styles/Button";
import FormatPrice from "../Helpers/FormatPrice";
import Star from "../Helpers/Star";

function DestinationCards() {
  const tourData = [
    {
      id: 1,
      package_titile: "Dubai",
      package_num: "8 Tours",
      package_rating: "4.6",
      package_review: "300",
      package_price: "40000",
      Package_thumble:
        "https://webredox.net/demo/wp/travol/wp-content/uploads/2022/08/dubai1.jpg",
    },
    {
      id: 10,
      package_titile: "Grecee",
      package_num: "8 Tours",
      package_rating: "3.6",
      package_review: "100",
      package_price: "40000",
      Package_thumble:
        "https://webredox.net/demo/wp/travol/wp-content/uploads/2022/08/greece1.jpg",
    },
    {
      id: 3,
      package_titile: "France",
      package_num: "8 Tours",
      package_rating: "4.6",
      package_review: "500",
      package_price: "40000",
      Package_thumble:
        "https://i.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ",
    },
    {
      id: 4,
      package_titile: "Italy",
      package_num: "7 Tours",
      package_rating: "3.6",
      package_review: "100",
      package_price: "20000",
      Package_thumble:
        "https://i.picsum.photos/id/74/4288/2848.jpg?hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8",
    },
    {
      id: 5,
      package_titile: "Maldivs",
      package_num: "6 Tours",
      package_rating: "5",
      package_review: "100",
      package_price: "80000",
      Package_thumble:
        "https://i.picsum.photos/id/84/1280/848.jpg?hmac=YFRYDI4UsfbeTzI8ZakNOR98wVU7a-9a2tGF542539s",
    },
    {
      id: 6,
      package_titile: "Grecee",
      package_num: "8 Tours",
      package_rating: "3.6",
      package_review: "200",
      package_price: "20000",
      Package_thumble:
        "https://webredox.net/demo/wp/travol/wp-content/uploads/2022/08/greece1.jpg",
    },
    {
      id: 7,
      package_titile: "France",
      package_num: "8 Tours",
      package_rating: "4.6",
      package_review: "500",
      package_price: "40000",
      Package_thumble:
        "https://i.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ",
    },
    {
      id: 8,
      package_titile: "Italy",
      package_num: "7 Tours",
      package_rating: "3.6",
      package_review: "100",
      package_price: "20000",
      Package_thumble:
        "https://i.picsum.photos/id/74/4288/2848.jpg?hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8",
    },
    {
      id: 9,
      package_titile: "Maldivs",
      package_num: "6 Tours",
      package_rating: "5",
      package_review: "100",
      package_price: "80000",
      Package_thumble:
        "https://i.picsum.photos/id/84/1280/848.jpg?hmac=YFRYDI4UsfbeTzI8ZakNOR98wVU7a-9a2tGF542539s",
    },
    {
      id: 18,
      package_titile: "Dubai",
      package_num: "8 Tours",
      package_rating: "4.6",
      package_review: "300",
      package_price: "40000",
      Package_thumble:
        "https://webredox.net/demo/wp/travol/wp-content/uploads/2022/08/dubai1.jpg",
    },
    {
      id: 10,
      package_titile: "Grecee",
      package_num: "8 Tours",
      package_rating: "3.6",
      package_review: "100",
      package_price: "40000",
      Package_thumble:
        "https://webredox.net/demo/wp/travol/wp-content/uploads/2022/08/greece1.jpg",
    },
    {
      id: 13,
      package_titile: "France",
      package_num: "8 Tours",
      package_rating: "4.6",
      package_review: "500",
      package_price: "40000",
      Package_thumble:
        "https://i.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ",
    },
    {
      id: 14,
      package_titile: "Italy",
      package_num: "7 Tours",
      package_rating: "3.6",
      package_review: "100",
      package_price: "20000",
      Package_thumble:
        "https://i.picsum.photos/id/74/4288/2848.jpg?hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8",
    },
    {
      id: 15,
      package_titile: "Maldivs",
      package_num: "6 Tours",
      package_rating: "5",
      package_review: "100",
      package_price: "80000",
      Package_thumble:
        "https://i.picsum.photos/id/84/1280/848.jpg?hmac=YFRYDI4UsfbeTzI8ZakNOR98wVU7a-9a2tGF542539s",
    },
    {
      id: 16,
      package_titile: "Grecee",
      package_num: "8 Tours",
      package_rating: "3.6",
      package_review: "200",
      package_price: "20000",
      Package_thumble:
        "https://webredox.net/demo/wp/travol/wp-content/uploads/2022/08/greece1.jpg",
    },
    {
      id: 17,
      package_titile: "France",
      package_num: "8 Tours",
      package_rating: "4.6",
      package_review: "500",
      package_price: "40000",
      Package_thumble:
        "https://i.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ",
    },
    {
      id: 19,
      package_titile: "Italy",
      package_num: "7 Tours",
      package_rating: "3.6",
      package_review: "100",
      package_price: "20000",
      Package_thumble:
        "https://i.picsum.photos/id/74/4288/2848.jpg?hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8",
    },
    {
      id: 20,
      package_titile: "Maldivs",
      package_num: "6 Tours",
      package_rating: "5",
      package_review: "100",
      package_price: "80000",
      Package_thumble:
        "https://i.picsum.photos/id/84/1280/848.jpg?hmac=YFRYDI4UsfbeTzI8ZakNOR98wVU7a-9a2tGF542539s",
    },
  ];

  return (
    <Wrapper>
      <div className="demo__blog pt-36 pb-36 mx-auto relative flex flex-wrap justify-evenly">
        {tourData?.map((data) => {
          return (
            <div className="all__card flex justify-evenly flex-wrap">
              {/* Card-1 Start */}
              <div className="card tour__card w-1/4 bg-white text-black shadow-xl">
                <figure>
                  <img src={data.Package_thumble} alt={data.package_titile} />

                  <div className="button">
                    <Button>Book Now</Button>
                  </div>
                </figure>

                <div className="card-body text-center">
                  <h3 className="card-title">{data.package_titile}</h3>
                  <h4 className="country">{data.package_num}</h4>

                  <Star stars={4.6} reviews={144} />

                  <h4 className="travel-price text-3xl">
                    <FormatPrice price={data.package_price} />
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
.all__card{

.button{
   background: rgba(27, 26, 26, 0.3);
    transition: all 0.3s ease-out;
    transform: translateX(-100%);
    position: absolute;
    line-height: 1.8;
    text-align: left;
    font-size: 105%;
    cursor: no-drop;
    color: #FFF;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;

    button{
        position: absolute;
      top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
      
    }
}

  .tour__card {
    width: 450px;
    height: 560px;
    margin: 5px;
    overflow: hidden;
    position: relative;

    figure{
            height: 400px;
    overflow: hidden;
        position: relative;

    }

     img {
      display: block;
      object-fit: cover;
      width: 100%;
      height: 400px;
      transition: 2s all ease-in-out;
    }

    h3 {
      font-size: 30px;
      font-weight: 600;
      color:#0f2454;
    }

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      img {
        transform: scale(1.25);
      }
.button{transform: translateX(0);}
  }

 


  .card-body {
    padding: 20px;
    h2 {
      font-size: 14px;
    }
    .travel-price {
      font-weight: 500;
      color:#d60d45;
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
}
`;

export default DestinationCards;
