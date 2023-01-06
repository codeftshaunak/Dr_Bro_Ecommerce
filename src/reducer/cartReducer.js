const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    // let { id, color, amount, product } = action.payload;
    let {
      id,
      amount,
      product
    } = action.payload;
    console.log(action.payload);

    //Handle ducplicate products
    // let existingProduct = state.cart.find((curEle) => curEle.id === id + color);
    let existingProduct = state.cart.find((curEle) => curEle.id === id);

    if (existingProduct) {
      let updateProduct = state.cart.map((curElm) => {
        // if (curElm.id === id + color) {
        //   let newAmount = curElm.amount + amount;

        //   if (curElm.max <= newAmount) {
        //     newAmount = curElm.max;
        //   }

        //   return {
        //     ...curElm,
        //     amount: newAmount,
        //   };
        // } else {
        //   return curElm;
        // }
        if (curElm.id === id) {
          let newAmount = curElm.amount + amount;

          if (curElm.max <= newAmount) {
            newAmount = curElm.max;
          }

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
      // let cartProduct = {
      //   id: id + color,
      //   name: product.name,
      //   color,
      //   amount,
      //   image: product.image[0].url,
      //   price: product.price,
      //   max: product.stock,
      // };
      let cartProduct = {
        product,
        amount,
        id
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  //Remove Item From Cart
  if (action.type === "REMOVE_ITEM_CART") {
    const id = action.payload;
    const updateAddToCart = state.cart.filter((currEle) => currEle.id !== id);

    return {
      ...state,
      cart: updateAddToCart,
    };
  }

  //Clear Items
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  //Incrase Cart Item
  if (action.type === "SET_INCRASE") {
    let updateProductIncrase = state.cart.map((curElm) => {
      if (curElm.id === action.payload) {
        let incAmount = curElm.amount + 1;

        if (curElm.max <= incAmount) {
          incAmount = curElm.max;
        }

        return {
          ...curElm,
          amount: incAmount,
        };
      } else {
        return curElm;
      }
    });
    return {
      ...state,
      cart: updateProductIncrase
    };
  }

  //Decrase Cart Items
  if (action.type === "SET_DECRASE") {
    let updateProductIncrase = state.cart.map((curElm) => {
      if (curElm.id === action.payload) {
        let incAmount = curElm.amount - 1;

        if (incAmount <= 1) {
          incAmount = 1;
        }

        return {
          ...curElm,
          amount: incAmount,
        };
      } else {
        return curElm;
      }
    });
    return {
      ...state,
      cart: updateProductIncrase
    };
  }

  //Calculate Total Items
  if (action.type === "CART_TOTAL_ITEM") {
    let updateProductItems = state.cart.reduce((initialItem, curItem) => {
      let {
        amount
      } = curItem;
      initialItem = initialItem + amount;
      return initialItem;
    }, 0);
    return {
      ...state,
      total_item: updateProductItems,
    };
  }

  //Calculate Total Price
  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialItem, curItem) => {
      let amount = curItem.amount
      let price = curItem.product.price
      initialItem = initialItem + amount * price;
      return initialItem;
    }, 0);
    return {
      ...state,
      total_price,
    };
  }

  return state;
};

export default cartReducer;