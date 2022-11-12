import { useState } from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addProductToCart = (product) => {
    setState({
      ...state,
      cart: [...state.cart, product],
    });
  };

  const removeProductFromCart = (productId) => {
    const updatedCart = [...state.cart].filter(
      (product) => product.id !== productId
    );

    setState({
      ...state,
      cart: updatedCart,
    });
  };

  return {
    state,
    addProductToCart,
    removeProductFromCart,
  };
};

export default useInitialState;
