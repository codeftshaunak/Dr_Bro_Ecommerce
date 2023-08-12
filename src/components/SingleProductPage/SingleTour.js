import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import FormatPrice from '../Helpers/FormatPrice';
import PageNavigation from '../PageNavigations/PageNavigation';
import SingleProdutDescription from './SingleProdutDescription';
import 'react-datepicker/dist/react-datepicker.css';
import Calendar from '../Calendar/Calendar';
import { BASE_URL } from '../../config';

const SingleTour = () => {
    const [tour, setTour] = useState([]);
    const { Tours_name, Tourss, description, price, thumbnail, uuid } = tour;

    const API = `${BASE_URL}/tours/packages/`;
    const { id } = useParams();
    const getTourData = async (url) => {
        const res = await axios.get(url);
        const singleProduct = await res.data;
        setTour(singleProduct);
    }

    useEffect(() => {
        getTourData(`${API}${id}`);
    }, []);



    return (
        <Wrapper>
            <PageNavigation title={Tours_name} />
            <div className="single__products__front">
                <div className="left__side__single">
                    <img src={`${BASE_URL}/${thumbnail}`} alt="Product Image" />
                </div>
                <div className="right__side__single">
                    <h2>{Tours_name}</h2>
                    <h3>
                        <FormatPrice price={price} />
                    </h3>

                    <br />
                    <Calendar Tourss={Tourss} uuid={uuid} />
                </div>
            </div>
            <SingleProdutDescription product={description} />
            <img src={`${BASE_URL}/${thumbnail}`} alt="Product Image" />
        </Wrapper>
    )
}

const Wrapper = styled.section`
  .single__products__front {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    margin: auto;

    .left__side__single {
      max-width: 500px;
      margin: 0 10px;
      img{
        width: 400px;
        height: 450px;
        object-fit: cover;
      }
    }

    .right__side__single {

        p{
            font-size: 1.2rem;
        }
        .aviable__slot{
            display:flex;
            margin: 0.5rem;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
        }
        .availabality{
            padding: 2rem 0;
            margin: 0.1rem;
            label{
                font-size: 1.5rem;
            }
            input{
                font-size: 1.5rem;
                padding: 10px;
                border: 1px solid;
            }
        }

      h2 {
        font-family: "Dancing Script", cursive !important;
        font-size: 35px;
      }
      h3 {
        font-size: 15px;
        font-weight: 600;
      }
      width: 400px;
      text-align: left;
    }
  }

  
`;

export default SingleTour;
