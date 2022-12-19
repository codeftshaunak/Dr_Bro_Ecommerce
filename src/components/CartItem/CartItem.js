import React from "react";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";
import { useCartContext } from "../../context/cartContext";
import CartAmountToggle from "../CartAmountToggle/CartAmountToggle";
import FormatPrice from "../Helpers/FormatPrice";

const CartItem = (curElem) => {
  const { id, name, color, image, price, amount } = curElem;
  const { removeItemCart, setDecrase, setIncrase } = useCartContext();

  return (
    <Wrapper>
      <div className="cart_heading grid grid-five-column">
        <div className="cart-image--name">
          <div>
            <figure>
              <img src={image} alt={id} />
            </figure>
          </div>
          <div>
            <p>{name}</p>
            <div className="color-div">
              <p>color:</p>
              <div
                className="color-style"
                style={{ backgroundColor: color, color: color }}
              ></div>
            </div>
          </div>
        </div>

        {/* price */}
        <div className="cart-hide">
          <p>
            <FormatPrice price={price} />
          </p>
        </div>

        {/* Quantity */}
        <CartAmountToggle
          amount={amount}
          setDecrase={() => setDecrase(id)}
          setIncrase={() => setIncrase(id)}
          className="w-36"
        />

        {/* Subtotal */}
        <div className="cart-hide">
          <p>
            <FormatPrice price={price * amount} />
          </p>
        </div>

        {/* delete */}
        <div>
          <FaTrash className="remove_icon" onClick={() => removeItemCart(id)} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default CartItem;
