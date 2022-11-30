import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import AddCartButton from "../AddCartButton/AddCartButton";
import CartAmountToggle from "../CartAmountToggle/CartAmountToggle";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, color, stock } = product;

  const [amount, setAmount] = useState(1);

  const setDecrase = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrase = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div>
      <div className="flex justify-between flex-wrap">
        {}

        {stock > 0 ? (
          <>
            <CartAmountToggle
              amount={amount}
              setDecrase={setDecrase}
              setIncrase={setIncrase}
              className="w-36"
            />

            <NavLink
              to="/cart"
              className="ml-5"
              onClick={() => {
                addToCart(id, color, amount, product);
              }}
            >
              <AddCartButton />
            </NavLink>
          </>
        ) : (
          <h3>Stock Is Not Available😥</h3>
        )}
      </div>
    </div>
  );
};

export default AddToCart;
