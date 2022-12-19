import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "../../context/productContext";
import AddToCart from "../AddToCart/AddToCart";
import FeatureProduct from "../FeatureProduct/FeatureProduct";
import FormatPrice from "../Helpers/FormatPrice";
import Loading from "../Loading/Loading";
import PageNavigation from "../PageNavigations/PageNavigation";
import SliderProduct from "../SliderProduct/SliderProduct";
import TourSlider from "../TourHomeComponents/TourSlider";
import DescriptionImage from "./DescriptionImage";
import SingleProdutDescription from "./SingleProdutDescription";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = (props) => {
  props.funNav(true);

  // const [amount, setAmount] = useState(1);

  const {
    getSingleProduct,
    isSingleLoading,
    singleProduct,
  } = useProductContext();

  const { id } = useParams();

  const {
    id: drbro,
    name,
    company,
    price,
    description,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  // const setDecrase = () => {
  //   amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // };

  // const setIncrase = () => {
  //   amount < stock ? setAmount(amount + 1) : setAmount(stock);
  // };

  if (isSingleLoading) {
    return (
      <>
        <div className="page__loading">
          <Loading />
        </div>
      </>
    );
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <div className="single__products__front">
        <div className="left__side__single">
          <SliderProduct imgs={image} />
        </div>
        <div className="right__side__single">
          <h2>{name}</h2>
          <h3>
            <FormatPrice price={price} />
          </h3>
          {stock > 0 && <AddToCart product={singleProduct} />}
        </div>
      </div>
      <SingleProdutDescription product={description} />
      <DescriptionImage imgs={image} />
      <FeatureProduct />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .single__products__front {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: auto;

    .left__side__single {
      width: 500px;
    }

    .right__side__single {
      h2 {
        font-family: "Dancing Script", cursive !important;
        font-size: 35px;
      }
      h3 {
        font-size: 15px;
        font-weight: 600;
      }
      width: 200px;
    }
  }
`;

export default SingleProduct;
