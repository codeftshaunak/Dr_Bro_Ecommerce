import axios from 'axios';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../../config';

const CartContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const CartHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
`;

const CartItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-right: 20px;
`;

const CartItemDetails = styled.div`
  flex: 1;
`;

const CartItemName = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CartItemQuantity = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const CartItemPrice = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const ProductCart = ({ data }) => {
  console.log(data);
  const tourquantity = data.quantity;
  const { product_name, thumbnail, price, uuid } = data.product;
  const access_token = localStorage.getItem("access_token");
  const API = `${BASE_URL}/cart/something`;
  const removeItemCart = useCallback(() => {
    axios.post(
      API, {
      quantity: 0,
      product_id: uuid
    }, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }).then(() => {
      window.location.reload();
    }).catch((error) => {
      console.log(error);
    });
  }, [access_token, uuid]);

  return (
    <CartItem>
      <CartItemImage src={`${thumbnail}`} alt="Product Image" />
      <CartItemDetails>
        <CartItemName>{product_name}</CartItemName>
        <CartItemQuantity>Quantity:{tourquantity}</CartItemQuantity>
        <CartItemPrice>Par Ticket Price: {price}/=</CartItemPrice>
        <CartItemPrice>Total Price: {tourquantity * price}/=</CartItemPrice>
      </CartItemDetails>
      <DeleteButton onClick={removeItemCart}>
        Delete
      </DeleteButton>
    </CartItem>
  );
};

export default ProductCart;
