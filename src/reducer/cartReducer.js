const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(product);

    //Handle ducplicate products

    let existingProduct = state.cart.find((curEle) => curEle.id === id + color);

    if (existingProduct) {
      let updateProduct = state.cart.map((curElm) => {
        if (curElm.id === id + color) {
          let newAmount = curElm.amount + amount;
          return {
            ...curElm,
            amount: newAmount,
          };
        } else {
          return curElm;
        }
      });
      return {
        ...state,
        cart: updateProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "REMOVE_ITEM_CART") {
    const id = action.payload;
    const updateAddToCart = state.cart.filter((currEle) => currEle.id !== id);

    return {
      ...state,
      cart: updateAddToCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  return state;
};

export default cartReducer;
